from concurrent.futures import ThreadPoolExecutor, TimeoutError as FutureTimeoutError
from dataclasses import dataclass

from config import GEMINI_API_KEY, GEMINI_MODEL, GEMINI_TIMEOUT_SECONDS
from schemas import ChatHistoricoItem


@dataclass(frozen=True)
class GeminiResult:
    texto: str
    usou_fallback: bool
    motivo_fallback: str | None = None


SYSTEM_PROMPT = """
Voce e o Orientador Educativo da plataforma Byst.end, especializado em prevencao
de assedio no ambiente profissional brasileiro.

Regras inegociaveis:
1. Responda apenas com base no CONTEXTO fornecido.
2. Nunca de parecer juridico, diagnostico psicologico ou decisao de caso.
3. Nunca conclua que uma situacao e assedio ou crime.
4. Nunca diga que a pessoa foi vitima.
5. Nunca diga para processar, nunca cite artigo de lei como conclusao do caso.
6. Nunca prometa anonimato, confidencialidade ou protecao.
7. Use linguagem educativa: pode conter sinais de conduta inadequada, sinais a
   observar, contexto, frequencia, impacto e relacao de poder.
8. Em situacoes graves, recomende canais oficiais da organizacao e canais publicos
   de apoio quando houver risco imediato.
9. Seja claro, acolhedor, sem dramatizar, sem minimizar e sem acusar o usuario.
10. Termine lembrando que a orientacao e educativa e nao substitui RH, juridico,
    compliance ou canal oficial.
""".strip()


SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH"},
]


def _formatar_historico(historico: list[ChatHistoricoItem]) -> str:
    if not historico:
        return "Sem historico anterior."
    recent = historico[-6:]
    return "\n".join(f"{item.role}: {item.content}" for item in recent)


def montar_prompt(mensagem: str, contexto_rag: str, historico: list[ChatHistoricoItem]) -> str:
    return f"""
{SYSTEM_PROMPT}

CONTEXTO RAG:
---
{contexto_rag or "Nenhuma fonte encontrada."}
---

HISTORICO RECENTE:
{_formatar_historico(historico)}

PERGUNTA ATUAL:
{mensagem}

Responda em portugues brasileiro, em ate 3 paragrafos curtos.
""".strip()


def gerar_resposta_gemini(mensagem: str, contexto_rag: str, historico: list[ChatHistoricoItem]) -> GeminiResult:
    if not GEMINI_API_KEY:
        return GeminiResult(texto="", usou_fallback=True, motivo_fallback="gemini_api_key_ausente")

    try:
        import google.generativeai as genai
    except ImportError:
        return GeminiResult(texto="", usou_fallback=True, motivo_fallback="sdk_gemini_indisponivel")

    prompt = montar_prompt(mensagem=mensagem, contexto_rag=contexto_rag, historico=historico)

    def _call() -> str:
        genai.configure(api_key=GEMINI_API_KEY)
        model = genai.GenerativeModel(GEMINI_MODEL)
        response = model.generate_content(prompt, safety_settings=SAFETY_SETTINGS)
        text = getattr(response, "text", "") or ""
        if not text.strip():
            raise RuntimeError("resposta_vazia_ou_bloqueada")
        return text

    try:
        executor = ThreadPoolExecutor(max_workers=1)
        future = executor.submit(_call)
        text = future.result(timeout=GEMINI_TIMEOUT_SECONDS)
    except FutureTimeoutError:
        return GeminiResult(texto="", usou_fallback=True, motivo_fallback="timeout")
    except Exception:
        return GeminiResult(texto="", usou_fallback=True, motivo_fallback="erro_ou_bloqueio_gemini")
    finally:
        if "executor" in locals():
            executor.shutdown(wait=False, cancel_futures=True)

    return GeminiResult(texto=text, usou_fallback=False)

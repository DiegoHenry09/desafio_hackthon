import re
from dataclasses import dataclass

from services.rag import RagFonte

AVISO_EDUCATIVO = (
    "Esta e uma orientacao educativa baseada nos materiais da Byst.end. "
    "Nao substitui RH, juridico, compliance ou canal oficial."
)

CRISE_RESPOSTA = (
    "Sinto muito que voce esteja passando por isso. Esta plataforma nao substitui "
    "apoio imediato. Em situacao de risco atual ou iminente, acione canais oficiais "
    "e servicos de emergencia. Canais de apoio: Disque 180, Disque 100, CVV 188 e, "
    "em risco imediato, 190."
)

OFF_TOPIC_RESPOSTA = (
    "Estou focado em orientacao educativa sobre prevencao de assedio e condutas "
    "inadequadas no ambiente profissional. Posso ajudar com duvidas sobre os "
    "materiais da Byst.end, sinais de atencao, limites, testemunhas e encaminhamento "
    "seguro."
)

FALLBACK_INTRO = (
    "Com base nos materiais da Byst.end, encontrei conteudos relacionados a sua "
    "pergunta. Recomendo consultar as fontes listadas nesta resposta e considerar "
    "os sinais de contexto, frequencia, impacto e relacao de poder."
)


@dataclass(frozen=True)
class IntentResult:
    tipo: str
    gravidade: str
    resposta_estatica: str | None = None


def detectar_intencao(mensagem: str) -> IntentResult:
    texto = mensagem.casefold()

    crise_keywords = [
        "risco de vida",
        "agora",
        "neste momento",
        "me ameacou",
        "me ameaçou",
        "estou sendo agred",
        "violencia agora",
        "violência agora",
        "socorro",
    ]
    grave_keywords = [
        "violencia sexual",
        "violência sexual",
        "estupro",
        "agressao",
        "agressão",
        "ameaca",
        "ameaça",
        "retaliacao",
        "retaliação",
        "assédio sexual",
        "assedio sexual",
    ]
    tema_keywords = [
        "assedio",
        "assédio",
        "violencia",
        "violência",
        "microagress",
        "discrimin",
        "gestor",
        "lider",
        "trabalho",
        "empresa",
        "corpo",
        "piada",
        "testemunha",
        "silencio",
        "consentimento",
        "denuncia",
        "denúncia",
        "rh",
        "compliance",
    ]
    off_topic_keywords = [
        "javascript",
        "python",
        "receita",
        "futebol",
        "clima",
        "tempo hoje",
        "matematica",
        "matemática",
        "codigo",
        "código",
    ]

    gravidade = "alta" if any(keyword in texto for keyword in grave_keywords) else "baixa"
    if gravidade == "alta" and any(keyword in texto for keyword in crise_keywords):
        return IntentResult(tipo="crise_imediata", gravidade="alta", resposta_estatica=CRISE_RESPOSTA)

    has_topic = any(keyword in texto for keyword in tema_keywords)
    has_off_topic = any(keyword in texto for keyword in off_topic_keywords)
    if has_off_topic and not has_topic:
        return IntentResult(tipo="off_topic", gravidade="baixa", resposta_estatica=OFF_TOPIC_RESPOSTA)

    return IntentResult(tipo="educativo", gravidade=gravidade)


def pos_processar_resposta(resposta: str) -> str:
    processed = resposta.strip()
    replacements = [
        (r"\bisso\s+e\s+assedio\b", "essa situacao pode conter sinais de conduta inadequada"),
        (r"\bisso\s+é\s+assédio\b", "essa situacao pode conter sinais de conduta inadequada"),
        (r"\bisso\s+e\s+crime\b", "essa situacao exige avaliacao pelos canais adequados"),
        (r"\bisso\s+é\s+crime\b", "essa situacao exige avaliacao pelos canais adequados"),
        (r"\bvoce\s+foi\s+vitima\b", "essa situacao descreve sinais que merecem atencao"),
        (r"\bvoc[eê]\s+foi\s+v[ií]tima\b", "essa situacao descreve sinais que merecem atencao"),
        (r"\bvoce\s+deve\s+processar\b", "voce pode procurar orientacao adequada"),
        (r"\bvoc[eê]\s+deve\s+processar\b", "voce pode procurar orientacao adequada"),
        (r"\bposso\s+garantir\s+confidencialidade\b", "nao posso garantir confidencialidade"),
        (r"\bposso\s+garantir\s+anonimato\b", "nao posso garantir anonimato"),
    ]
    for pattern, replacement in replacements:
        processed = re.sub(pattern, replacement, processed, flags=re.IGNORECASE)

    if AVISO_EDUCATIVO not in processed:
        processed = f"{processed}\n\n{AVISO_EDUCATIVO}"
    return processed


def resposta_fallback(fontes: list[RagFonte], gravidade: str) -> str:
    if not fontes:
        body = (
            "Nao encontrei uma fonte especifica suficiente para responder com seguranca. "
            "Posso orientar a buscar materiais da biblioteca da Byst.end e canais oficiais "
            "da sua organizacao para avaliacao adequada."
        )
    else:
        temas = "; ".join(f"source_id {fonte.source_id} - {fonte.tema}" for fonte in fontes)
        body = f"{FALLBACK_INTRO}\n\nFontes relacionadas: {temas}."

    if gravidade == "alta":
        body = (
            f"{body}\n\nComo a situacao pode envolver risco ou alta sensibilidade, "
            "considere procurar canais oficiais da sua organizacao. Em risco imediato, "
            "acionar Disque 180, Disque 100, CVV 188 ou 190 pode ser importante."
        )

    return pos_processar_resposta(body)

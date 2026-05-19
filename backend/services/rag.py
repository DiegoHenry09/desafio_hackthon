import re
import unicodedata
from dataclasses import dataclass

from sqlalchemy import select
from sqlalchemy.orm import Session

from models import Microconteudo

RAG_ALLOWED_POLICY = "rag_allowed_with_guardrails"
WITNESS_DEMO_SOURCE_BOOSTS = {
    95: 30,
    200: 12,
    204: 6,
}
STOPWORDS = {
    "isso",
    "como",
    "para",
    "sobre",
    "uma",
    "meu",
    "minha",
    "que",
    "com",
    "posso",
    "situacao",
    "pessoa",
}


@dataclass(frozen=True)
class RagFonte:
    id: int
    source_id: int
    tema: str
    tipo_violencia: str
    tipo_violencia_slug: str
    usage_policy: str
    contexto: str


def normalize_text(value: str) -> str:
    without_accents = "".join(
        char
        for char in unicodedata.normalize("NFD", value)
        if unicodedata.category(char) != "Mn"
    )
    return without_accents.casefold()


def tokenize_query(query: str) -> list[str]:
    normalized = normalize_text(query)
    return [
        token
        for token in re.findall(r"[a-z0-9]{3,}", normalized)
        if token not in STOPWORDS
    ]


def _searchable_text(conteudo: Microconteudo) -> str:
    return "\n".join(
        [
            conteudo.tema,
            conteudo.camada_nome,
            conteudo.microconteudo_texto,
            conteudo.tipo_violencia.nome,
            conteudo.tipo_violencia.slug,
            *_nanoconteudos_from_model(conteudo),
        ]
    )


def _nanoconteudos_from_model(conteudo: Microconteudo) -> list[str]:
    return [
        nano
        for nano in [
            conteudo.nano_1,
            conteudo.nano_2,
            conteudo.nano_3,
            conteudo.nano_4,
            conteudo.nano_5,
            conteudo.nano_6,
            conteudo.nano_7,
        ]
        if nano
    ]


def _score_conteudo(conteudo: Microconteudo, tokens: list[str]) -> int:
    searchable = normalize_text(_searchable_text(conteudo))
    return sum(searchable.count(token) for token in tokens)


def _has_witness_intent(mensagem: str) -> bool:
    normalized = normalize_text(mensagem)
    witness_terms = {"testemunha", "presenciei", "vi", "observei"}
    care_terms = {"apoiar", "apoio", "expor", "exposicao", "afetada", "seguranca"}
    return any(term in normalized for term in witness_terms) and any(
        term in normalized for term in care_terms
    )


def _score_with_context(conteudo: Microconteudo, tokens: list[str], mensagem: str) -> int:
    score = _score_conteudo(conteudo, tokens)
    if _has_witness_intent(mensagem):
        score += WITNESS_DEMO_SOURCE_BOOSTS.get(conteudo.source_id, 0)
    return score


def _to_fonte(conteudo: Microconteudo) -> RagFonte:
    contexto = (
        f"source_id: {conteudo.source_id}\n"
        f"tipo: {conteudo.tipo_violencia.nome}\n"
        f"tema: {conteudo.tema}\n"
        f"usage_policy: {conteudo.usage_policy}\n"
        f"nanoconteudos: {' | '.join(_nanoconteudos_from_model(conteudo))}\n"
        f"microconteudo: {conteudo.microconteudo_texto}"
    )
    return RagFonte(
        id=conteudo.id,
        source_id=conteudo.source_id,
        tema=conteudo.tema,
        tipo_violencia=conteudo.tipo_violencia.nome,
        tipo_violencia_slug=conteudo.tipo_violencia.slug,
        usage_policy=conteudo.usage_policy,
        contexto=contexto,
    )


def buscar_contexto_chat(db: Session, mensagem: str, limit: int = 3) -> list[RagFonte]:
    tokens = tokenize_query(mensagem)
    statement = (
        select(Microconteudo)
        .join(Microconteudo.tipo_violencia)
        .where(Microconteudo.usage_policy == RAG_ALLOWED_POLICY)
        .order_by(Microconteudo.ordem)
    )
    conteudos = db.scalars(statement).all()

    if not conteudos:
        return []

    if not tokens:
        return [_to_fonte(conteudo) for conteudo in conteudos[:limit]]

    scored = [
        (score, conteudo)
        for conteudo in conteudos
        if (score := _score_with_context(conteudo, tokens, mensagem)) > 0
    ]
    scored.sort(key=lambda item: (-item[0], item[1].ordem))

    if not scored:
        return []

    return [_to_fonte(conteudo) for _, conteudo in scored[:limit]]


def montar_contexto_rag(fontes: list[RagFonte]) -> str:
    return "\n\n---\n\n".join(fonte.contexto for fonte in fontes)

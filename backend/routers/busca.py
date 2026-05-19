import re
import unicodedata
from typing import Annotated

from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from database import get_db
from models import Microconteudo
from routers.conteudos import is_rag_allowed, nanoconteudos_from_model
from schemas import BuscaResponse


router = APIRouter(tags=["busca"])


def normalize_search_text(value: str) -> str:
    without_accents = "".join(
        char
        for char in unicodedata.normalize("NFD", value)
        if unicodedata.category(char) != "Mn"
    )
    return without_accents.casefold()


def make_snippet(conteudo: Microconteudo, query: str) -> str:
    haystack = conteudo.microconteudo_texto or conteudo.tema
    normalized_haystack = normalize_search_text(haystack)
    normalized_query = normalize_search_text(query)
    position = normalized_haystack.find(normalized_query)
    if position == -1:
        return haystack[:180]

    start = max(position - 60, 0)
    end = min(position + len(query) + 120, len(haystack))
    prefix = "..." if start > 0 else ""
    suffix = "..." if end < len(haystack) else ""
    return f"{prefix}{haystack[start:end]}{suffix}"


def score_conteudo(conteudo: Microconteudo, normalized_query: str) -> int:
    searchable = "\n".join(
        [
            conteudo.tema,
            conteudo.microconteudo_texto,
            conteudo.tipo_violencia.nome,
            conteudo.tipo_violencia.slug,
            *nanoconteudos_from_model(conteudo),
        ]
    )
    return len(re.findall(re.escape(normalized_query), normalize_search_text(searchable)))


@router.get("/busca", response_model=BuscaResponse)
def buscar_conteudos(
    q: Annotated[str, Query(min_length=2, description="Termo de busca")],
    db: Annotated[Session, Depends(get_db)],
    limit: Annotated[int, Query(ge=1, le=50)] = 20,
) -> BuscaResponse:
    normalized_query = normalize_search_text(q)
    conteudos = db.scalars(select(Microconteudo).join(Microconteudo.tipo_violencia)).all()

    scored = [
        (score_conteudo(conteudo, normalized_query), conteudo)
        for conteudo in conteudos
    ]
    resultados = [
        (score, conteudo)
        for score, conteudo in scored
        if score > 0
    ]
    resultados.sort(key=lambda item: (-item[0], item[1].ordem))

    return BuscaResponse(
        query=q,
        total=len(resultados),
        resultados=[
            {
                "id": conteudo.id,
                "source_id": conteudo.source_id,
                "tema": conteudo.tema,
                "tipo_violencia": conteudo.tipo_violencia.nome,
                "tipo_violencia_slug": conteudo.tipo_violencia.slug,
                "camada": conteudo.camada,
                "snippet": make_snippet(conteudo, q),
                "usage_policy": conteudo.usage_policy,
                "is_rag_allowed": is_rag_allowed(conteudo.usage_policy),
            }
            for _, conteudo in resultados[:limit]
        ],
    )

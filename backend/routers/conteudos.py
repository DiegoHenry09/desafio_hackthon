import json
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import Select, select
from sqlalchemy.orm import Session

from database import get_db
from models import Microconteudo, TipoViolencia
from schemas import ConteudoListItem, ConteudoResponse, TipoViolenciaResponse


router = APIRouter(tags=["conteudos"])


def is_rag_allowed(usage_policy: str) -> bool:
    return usage_policy == "rag_allowed_with_guardrails"


def nanoconteudos_from_model(conteudo: Microconteudo) -> list[str]:
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


def to_list_item(conteudo: Microconteudo) -> ConteudoListItem:
    return ConteudoListItem(
        id=conteudo.id,
        source_id=conteudo.source_id,
        source_row=conteudo.source_row,
        source_sheet=conteudo.source_sheet,
        tipo_violencia=conteudo.tipo_violencia.nome,
        tipo_violencia_slug=conteudo.tipo_violencia.slug,
        camada=conteudo.camada,
        camada_nome=conteudo.camada_nome,
        tema=conteudo.tema,
        tema_slug=conteudo.tema_slug,
        grau_sensibilidade=conteudo.grau_sensibilidade,
        risco_juridico=conteudo.risco_juridico,
        usage_policy=conteudo.usage_policy,
        is_rag_allowed=is_rag_allowed(conteudo.usage_policy),
        needs_human_review=conteudo.needs_human_review,
    )


def to_detail(conteudo: Microconteudo) -> ConteudoResponse:
    item = to_list_item(conteudo).model_dump()
    return ConteudoResponse(
        **item,
        ordem=conteudo.ordem,
        ordem_disparo=conteudo.ordem_disparo,
        publico_trilha=conteudo.publico_trilha,
        nanoconteudos=nanoconteudos_from_model(conteudo),
        microconteudo_texto=conteudo.microconteudo_texto,
        flags=json.loads(conteudo.flags_json or "{}"),
        review_reasons=json.loads(conteudo.review_reasons_json or "[]"),
    )


@router.get("/tipos-violencia", response_model=list[TipoViolenciaResponse])
def listar_tipos_violencia(db: Annotated[Session, Depends(get_db)]) -> list[TipoViolencia]:
    return list(db.scalars(select(TipoViolencia).order_by(TipoViolencia.ordem, TipoViolencia.nome)))


@router.get("/conteudos", response_model=list[ConteudoListItem])
def listar_conteudos(
    db: Annotated[Session, Depends(get_db)],
    tipo: Annotated[str | None, Query(description="Slug do tipo de violencia")] = None,
    camada: Annotated[int | None, Query(ge=1, le=8)] = None,
    limit: Annotated[int, Query(ge=1, le=100)] = 50,
) -> list[ConteudoListItem]:
    statement: Select[tuple[Microconteudo]] = (
        select(Microconteudo)
        .join(Microconteudo.tipo_violencia)
        .order_by(Microconteudo.ordem)
        .limit(limit)
    )
    if tipo:
        statement = statement.where(TipoViolencia.slug == tipo)
    if camada:
        statement = statement.where(Microconteudo.camada == camada)

    conteudos = db.scalars(statement).all()
    return [to_list_item(conteudo) for conteudo in conteudos]


@router.get("/conteudos/{conteudo_id}", response_model=ConteudoResponse)
def obter_conteudo(conteudo_id: int, db: Annotated[Session, Depends(get_db)]) -> ConteudoResponse:
    conteudo = db.get(Microconteudo, conteudo_id)
    if conteudo is None:
        raise HTTPException(status_code=404, detail="Conteudo nao encontrado")
    return to_detail(conteudo)

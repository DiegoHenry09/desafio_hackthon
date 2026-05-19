from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas import ChatRequest, ChatResponse, FonteConsultada
from services.gemini_client import gerar_resposta_gemini
from services.guardrails import detectar_intencao, pos_processar_resposta, resposta_fallback
from services.rag import buscar_contexto_chat, montar_contexto_rag


router = APIRouter(tags=["chat"])


@router.post("/chat", response_model=ChatResponse)
def responder_chat(
    request: ChatRequest,
    db: Annotated[Session, Depends(get_db)],
) -> ChatResponse:
    intent = detectar_intencao(request.mensagem)

    if intent.tipo == "off_topic":
        return ChatResponse(
            resposta=pos_processar_resposta(intent.resposta_estatica or ""),
            fontes_consultadas=[],
            usou_fallback=True,
            gravidade_detectada=intent.gravidade,
        )

    fontes = buscar_contexto_chat(db=db, mensagem=request.mensagem, limit=3)
    fontes_response = [
        FonteConsultada(
            id=fonte.id,
            source_id=fonte.source_id,
            tema=fonte.tema,
            tipo_violencia=fonte.tipo_violencia,
            tipo_violencia_slug=fonte.tipo_violencia_slug,
            usage_policy=fonte.usage_policy,
        )
        for fonte in fontes
    ]

    if intent.tipo == "crise_imediata":
        return ChatResponse(
            resposta=pos_processar_resposta(intent.resposta_estatica or ""),
            fontes_consultadas=fontes_response,
            usou_fallback=True,
            gravidade_detectada=intent.gravidade,
        )

    contexto_rag = montar_contexto_rag(fontes)
    gemini_result = gerar_resposta_gemini(
        mensagem=request.mensagem,
        contexto_rag=contexto_rag,
        historico=request.historico,
    )

    if gemini_result.usou_fallback:
        resposta = resposta_fallback(fontes=fontes, gravidade=intent.gravidade)
    else:
        resposta = pos_processar_resposta(gemini_result.texto)

    return ChatResponse(
        resposta=resposta,
        fontes_consultadas=fontes_response,
        usou_fallback=gemini_result.usou_fallback,
        gravidade_detectada=intent.gravidade,
    )

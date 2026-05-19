from pydantic import BaseModel, Field


class ChatHistoricoItem(BaseModel):
    role: str = Field(pattern="^(user|assistant)$")
    content: str = Field(min_length=1, max_length=2000)


class ChatRequest(BaseModel):
    mensagem: str = Field(min_length=2, max_length=2000)
    session_id: str | None = Field(default=None, max_length=120)
    historico: list[ChatHistoricoItem] = Field(default_factory=list, max_length=6)


class FonteConsultada(BaseModel):
    id: int
    source_id: int
    tema: str
    tipo_violencia: str
    tipo_violencia_slug: str
    usage_policy: str


class ChatResponse(BaseModel):
    resposta: str
    fontes_consultadas: list[FonteConsultada]
    usou_fallback: bool
    gravidade_detectada: str

from pydantic import BaseModel, ConfigDict


class TipoViolenciaResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    slug: str
    slogan: str | None = None
    cor_hex: str | None = None
    icone: str | None = None
    ordem: int


class ConteudoListItem(BaseModel):
    id: int
    source_id: int
    source_row: int
    source_sheet: str
    tipo_violencia: str
    tipo_violencia_slug: str
    camada: int
    camada_nome: str
    tema: str
    tema_slug: str
    grau_sensibilidade: str | None = None
    risco_juridico: str | None = None
    usage_policy: str
    is_rag_allowed: bool
    needs_human_review: bool


class ConteudoResponse(ConteudoListItem):
    ordem: int
    ordem_disparo: str | None = None
    publico_trilha: str | None = None
    nanoconteudos: list[str]
    microconteudo_texto: str
    flags: dict[str, bool]
    review_reasons: list[str]


class BuscaResultado(BaseModel):
    id: int
    source_id: int
    tema: str
    tipo_violencia: str
    tipo_violencia_slug: str
    camada: int
    snippet: str
    usage_policy: str
    is_rag_allowed: bool


class BuscaResponse(BaseModel):
    query: str
    total: int
    resultados: list[BuscaResultado]

from sqlalchemy import Boolean, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class Microconteudo(Base):
    __tablename__ = "microconteudos"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    tipo_violencia_id: Mapped[int] = mapped_column(ForeignKey("tipos_violencia.id"), nullable=False)
    source_id: Mapped[int] = mapped_column(Integer, unique=True, nullable=False)
    source_row: Mapped[int] = mapped_column(Integer, nullable=False)
    source_sheet: Mapped[str] = mapped_column(String(255), nullable=False)
    ordem: Mapped[int] = mapped_column(Integer, nullable=False)
    ordem_disparo: Mapped[str | None] = mapped_column(String(80), nullable=True)
    publico_trilha: Mapped[str | None] = mapped_column(String(120), nullable=True)
    camada: Mapped[int] = mapped_column(Integer, nullable=False)
    camada_nome: Mapped[str] = mapped_column(String(255), nullable=False)
    tema: Mapped[str] = mapped_column(String(255), nullable=False)
    tema_slug: Mapped[str] = mapped_column(String(255), nullable=False)
    grau_sensibilidade: Mapped[str | None] = mapped_column(String(80), nullable=True)
    risco_juridico: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_1: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_2: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_3: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_4: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_5: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_6: Mapped[str | None] = mapped_column(Text, nullable=True)
    nano_7: Mapped[str | None] = mapped_column(Text, nullable=True)
    microconteudo_texto: Mapped[str] = mapped_column(Text, nullable=False)
    usage_policy: Mapped[str] = mapped_column(String(80), nullable=False)
    needs_human_review: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    flags_json: Mapped[str] = mapped_column(Text, default="{}", nullable=False)
    review_reasons_json: Mapped[str] = mapped_column(Text, default="[]", nullable=False)

    tipo_violencia = relationship("TipoViolencia", back_populates="microconteudos")

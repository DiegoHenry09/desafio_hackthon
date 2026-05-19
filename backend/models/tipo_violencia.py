from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class TipoViolencia(Base):
    __tablename__ = "tipos_violencia"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    nome: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    slogan: Mapped[str | None] = mapped_column(Text, nullable=True)
    cor_hex: Mapped[str | None] = mapped_column(String(20), nullable=True)
    icone: Mapped[str | None] = mapped_column(String(80), nullable=True)
    ordem: Mapped[int] = mapped_column(Integer, default=0, nullable=False)

    microconteudos = relationship("Microconteudo", back_populates="tipo_violencia")

import json
from pathlib import Path

from sqlalchemy.orm import Session

from config import SEED_JSON_PATH
from database import create_all, engine
from models import Microconteudo, TipoViolencia


BLOCKED_POLICY = "blocked_until_review"


def load_seed_payload(path: Path = SEED_JSON_PATH) -> dict:
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def seed_database() -> dict[str, int]:
    payload = load_seed_payload()
    records = [
        record
        for record in payload.get("records", [])
        if record.get("usage_policy") != BLOCKED_POLICY
    ]

    create_all()

    with Session(engine) as session:
        session.query(Microconteudo).delete()
        session.query(TipoViolencia).delete()
        session.commit()

        tipos_by_slug: dict[str, TipoViolencia] = {}
        for record in records:
            slug = record["tipo_violencia_slug"]
            if slug in tipos_by_slug:
                continue
            tipo = TipoViolencia(
                nome=record["tipo_violencia"],
                slug=slug,
                ordem=len(tipos_by_slug) + 1,
            )
            session.add(tipo)
            session.flush()
            tipos_by_slug[slug] = tipo

        for record in records:
            nanos = record.get("nanoconteudos", [])
            conteudo = Microconteudo(
                tipo_violencia_id=tipos_by_slug[record["tipo_violencia_slug"]].id,
                source_id=int(record["source_id"]),
                source_row=int(record["source_row"]),
                source_sheet=record["source_sheet"],
                ordem=int(record["ordem"]),
                ordem_disparo=record.get("ordem_disparo"),
                publico_trilha=record.get("publico_trilha"),
                camada=int(record["camada_numero"]),
                camada_nome=record["camada"],
                tema=record["tema"],
                tema_slug=record["tema_slug"],
                grau_sensibilidade=record.get("grau_sensibilidade"),
                risco_juridico=record.get("risco_juridico"),
                nano_1=nanos[0] if len(nanos) > 0 else None,
                nano_2=nanos[1] if len(nanos) > 1 else None,
                nano_3=nanos[2] if len(nanos) > 2 else None,
                nano_4=nanos[3] if len(nanos) > 3 else None,
                nano_5=nanos[4] if len(nanos) > 4 else None,
                nano_6=nanos[5] if len(nanos) > 5 else None,
                nano_7=nanos[6] if len(nanos) > 6 else None,
                microconteudo_texto=record["microconteudo"],
                usage_policy=record["usage_policy"],
                needs_human_review=bool(record.get("needs_human_review", False)),
                flags_json=json.dumps(record.get("flags", {}), ensure_ascii=False),
                review_reasons_json=json.dumps(record.get("review_reasons", []), ensure_ascii=False),
            )
            session.add(conteudo)

        session.commit()

    return {
        "tipos_violencia": len(tipos_by_slug),
        "microconteudos": len(records),
        "blocked_skipped": len(payload.get("records", [])) - len(records),
    }


if __name__ == "__main__":
    result = seed_database()
    print(
        "Seed concluido: "
        f"{result['tipos_violencia']} tipos, "
        f"{result['microconteudos']} microconteudos, "
        f"{result['blocked_skipped']} bloqueado(s) ignorado(s)."
    )

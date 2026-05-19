from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DATABASE_URL = f"sqlite:///{DATA_DIR / 'bystend.db'}"
SEED_JSON_PATH = BASE_DIR / "seed" / "conteudo_normalizado.curated.preview.json"

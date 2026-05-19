from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import busca_router, conteudos_router


app = FastAPI(
    title="Byst.end API",
    description="Backend minimo para biblioteca e busca de conteudos educativos curados.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(conteudos_router)
app.include_router(busca_router)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

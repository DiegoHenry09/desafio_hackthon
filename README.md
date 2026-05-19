# Byst.end

Plataforma educativa para prevencao de assedio no ambiente profissional, baseada nos materiais curados da Byst.end.

## Objetivo

Transformar a base educativa da Byst.end em uma experiencia ativa de aprendizagem, com biblioteca de microconteudos, busca, quizzes, jogos educativos, simulador e um chat de apoio contextual com guardrails.

O conteudo sensivel vem da planilha da Byst.end. A IA pode estruturar, mapear e transportar dados, mas nao reescreve microconteudos, nao inventa exemplos e nao declara validacao sem revisao humana.

## Problema

Materiais sobre prevencao de assedio costumam ficar dispersos em PDFs, videos e palestras. Isso dificulta consulta, engajamento e aplicacao pratica por colaboradores, liderancas e testemunhas.

A Byst.end ja possui conteudo pedagogico estruturado. O projeto cria uma camada digital para tornar esse material navegavel, pesquisavel e aplicavel em atividades educativas.

## MVP

Escopo previsto para o MVP:

- Biblioteca de microconteudos por tipo de violencia e camada educativa.
- Busca simples por tema, microconteudo e nanoconteudos.
- Trilhas por tipo de violencia.
- Quiz, miniatividades e jogos educativos com feedback seguro.
- Simulador com cenarios curados manualmente.
- Chat de apoio contextual com RAG, fontes citadas e guardrails.
- Avisos educativos e links para canais oficiais.

Estado atual: backend minimo FastAPI + SQLite implementado para biblioteca e busca. Frontend, chat, quiz, simulador e cenarios ainda nao foram implementados.

## Stack Prevista

- Backend: Python 3.12, FastAPI, Pydantic, SQLAlchemy.
- Banco: SQLite.
- Frontend: React, Vite, TypeScript.
- IA: Google Gemini 2.5 Flash, com RAG e guardrails.
- Busca MVP: SQL `LIKE` e filtros simples, sem embeddings.

## Status Atual

Estado atual do repositorio:

- Documentacao de governanca, produto e arquitetura existente em `docs/`.
- Artefato intermediario de conteudo gerado em `backend/seed/conteudo_normalizado.curated.preview.json`.
- JSON curado contem 60 registros vindos da aba `2.3. NANO CONTEUDOS`.
- Todos os registros preservam `source_sheet`, `source_row`, `source_id` e `usage_policy`.
- O conteudo dos registros nao foi reescrito.
- Ortografia da planilha nao foi corrigida.
- Backend minimo FastAPI + SQLite foi gerado para conteudos, tipos de violencia e busca.
- Nenhum frontend, chat, quiz ou simulador foi gerado ainda.

Contagem por `usage_policy`:

- `rag_allowed_with_guardrails`: 44
- `library_only`: 4
- `exclude_from_rag`: 11
- `blocked_until_review`: 1

## Limites Do Chat

O chat sera uma camada de apoio educacional integrada ao backend e ao frontend.

Ele podera responder duvidas sobre:

- Conteudos da biblioteca.
- Perguntas de quiz.
- Alternativas de jogos educativos.
- Cenarios do simulador.
- Conceitos abordados nos materiais da Byst.end.

O chat nao sera:

- Canal de denuncia.
- Parecer juridico.
- Substituto de RH, compliance, juridico ou apoio especializado.
- Autoridade para declarar que uma situacao e assedio ou crime.

Referencias legais vindas da planilha podem aparecer como contexto educativo, mas nao podem virar julgamento sobre caso individual.

## Aviso Educativo

Esta plataforma e educativa. Ela nao substitui RH, juridico, compliance, canal oficial de denuncia ou apoio especializado. Em situacao de risco, procure os canais oficiais da sua organizacao e, quando aplicavel, servicos publicos de apoio.

## Como Rodar Futuramente

Backend minimo:

```bash
# Backend
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
python -m seed.seed_planilha
uvicorn app:app --reload --port 8000
```

Endpoints disponiveis:

```text
GET /health
GET /conteudos
GET /conteudos/{id}
GET /tipos-violencia
GET /busca?q=assedio
```

Frontend futuro:

```bash
# Frontend
cd frontend
npm install
npm run dev
```

Variaveis esperadas estao em `.env.example`. O arquivo `.env` real nao deve ser versionado.

## Proximos Passos

1. Revisar humanamente o JSON curado, especialmente o registro `source_id 197`.
2. Gerar `conteudo_normalizado.final.json` somente apos aceite humano.
3. Revisar se o seed deve migrar de `.preview` para JSON final aprovado.
4. Implementar frontend com mock e depois integrar front/back.
5. Criar quiz, jogos e simulador com curadoria humana.
6. Implementar chat/RAG com guardrails e fontes citadas.
7. Registrar evidencias de validacao em `docs/09_HANDOFF.md`.

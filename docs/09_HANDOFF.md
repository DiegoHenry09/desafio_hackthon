# 09 · Handoff

> Documento vivo para continuidade entre operadores. Atualizar ao final de cada checkpoint.

## 2026-05-19 — Estado atual

### Etapa atual

Documentacao e preparacao inicial do repositorio para GitHub, sem implementacao de backend, frontend, chat, quiz ou simulador.

### Contexto validado

- Desenvolvimento assistido por LLM/Cursor.
- Humanos sao responsaveis por decisao, validacao e aceite.
- IA acelera, mas nao e dona do produto, da arquitetura nem da verdade sobre o tema.
- Conteudo sensivel vem da planilha da Byst.end.
- A planilha original nao foi alterada.
- O conteudo dos registros do JSON nao foi reescrito.
- Ortografia da planilha nao foi corrigida.

### Arquivos gerados ou atualizados

- `README.md`
- `.gitignore`
- `.env.example`
- `docs/06_CHECKPOINTS_DE_VALIDACAO.md`
- `docs/07_DECISOES_TECNICAS.md`
- `docs/09_HANDOFF.md`
- `backend/seed/conteudo_normalizado.preview.json`
- `backend/seed/conteudo_normalizado.curated.preview.json`

### Artefato de dados atual

Arquivo principal de dados:

- `backend/seed/conteudo_normalizado.curated.preview.json`

Resumo:

- 60 registros.
- Todos com `source_sheet`, `source_row`, `source_id`.
- Todos com `usage_policy`.
- Contem `curation.policy_rules`.

Contagem por `usage_policy`:

- `rag_allowed_with_guardrails`: 44
- `library_only`: 4
- `exclude_from_rag`: 11
- `blocked_until_review`: 1

### Validacoes realizadas

- JSON `backend/seed/conteudo_normalizado.curated.preview.json` parseavel.
- 60 registros presentes.
- Todos os registros possuem `usage_policy`.
- Conteudos dos registros preservados.
- `source_id 197` marcado como `blocked_until_review`.
- Linter nao reportou erro no JSON.

### O que ainda nao foi feito

- Backend FastAPI nao foi criado.
- SQLite e seed executavel nao foram criados.
- Endpoints de conteudo/busca nao foram criados.
- Frontend React/Vite nao foi criado.
- Chat/RAG/Gemini nao foi implementado.
- Quiz, jogos e simulador nao foram implementados.
- Cenarios do simulador nao foram curados nem gerados.
- JSON final sem `.preview` ainda nao foi gerado.

### Riscos restantes

- `source_id 197` contem instrucao tecnica no campo de conteudo e deve permanecer bloqueado ate revisao humana.
- Ha conteudo juridico/educativo real vindo da planilha; biblioteca pode exibir, mas chat nao pode transformar em parecer juridico ou veredito.
- Ha conteudo de alta sensibilidade; RAG/chat deve respeitar `usage_policy` e guardrails.
- A planilha original `.xlsx` nao deve ir para repo publico sem autorizacao humana.
- Qualquer cenario, quiz ou feedback novo precisa de curadoria humana para evitar invencao de conteudo sensivel.

### Proximos passos para colegas

1. Revisar humanamente `backend/seed/conteudo_normalizado.curated.preview.json`.
2. Decidir destino do `source_id 197`.
3. Gerar `conteudo_normalizado.final.json` somente apos aceite humano.
4. Criar script de seed SQLite a partir do JSON final.
5. Implementar endpoints de conteudo e busca.
6. Implementar frontend inicialmente com mock.
7. Integrar front/back.
8. Somente depois implementar quiz/simulador e chat/RAG com guardrails.

### Evidencias

- Arquivo JSON curado parseavel.
- Contagem por `usage_policy` registrada no proprio JSON e neste handoff.
- Nenhum segredo foi registrado em `.env.example`.
- `.gitignore` bloqueia `.env`, bancos locais, dependencias e planilhas `.xlsx`.

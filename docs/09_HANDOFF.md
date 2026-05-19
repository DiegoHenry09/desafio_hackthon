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

## 2026-05-19 — Backend minimo FastAPI + SQLite

### Etapa atual

Backend minimo implementado para biblioteca de conteudos e busca, sem frontend, chat, Gemini, quiz, simulador ou cenarios.

### Arquivos gerados ou atualizados

- `backend/pyproject.toml`
- `backend/app.py`
- `backend/config.py`
- `backend/database.py`
- `backend/models/__init__.py`
- `backend/models/tipo_violencia.py`
- `backend/models/microconteudo.py`
- `backend/schemas/__init__.py`
- `backend/schemas/conteudo.py`
- `backend/routers/__init__.py`
- `backend/routers/conteudos.py`
- `backend/routers/busca.py`
- `backend/seed/__init__.py`
- `backend/seed/seed_planilha.py`
- `docs/api.md`
- `.gitignore`
- `README.md`
- `docs/09_HANDOFF.md`

### Validacoes realizadas

- Dependencias instaladas em `.venv` local dentro de `backend/`.
- Seed executado com `python -m seed.seed_planilha`.
- SQLite local criado em `backend/data/bystend.db` e ignorado pelo Git.
- Seed importou 7 tipos de violencia.
- Seed importou 59 microconteudos.
- 1 registro com `usage_policy = blocked_until_review` foi ignorado.
- `uvicorn app:app --reload --port 8000` subiu o backend.
- `GET /health` retornou `{"status": "ok"}`.
- `GET /conteudos` retornou registros.
- `GET /conteudos/1` retornou detalhe.
- `GET /tipos-violencia` retornou 7 tipos.
- `GET /busca?q=assedio` retornou resultados.

### Evidencia resumida dos endpoints

```json
{
  "Health": "ok",
  "ConteudosCount": 50,
  "Conteudo1Id": 1,
  "TiposCount": 7,
  "BuscaTotal": 36,
  "BuscaReturned": 20
}
```

### Regras preservadas

- `backend/seed/conteudo_normalizado.curated.preview.json` nao foi alterado.
- Registros `exclude_from_rag` aparecem na biblioteca, mas a API retorna `is_rag_allowed: false`.
- Registro `blocked_until_review` nao entra no SQLite.
- `source_id`, `source_row`, `source_sheet` e `usage_policy` sao preservados nas respostas.

### Pendencias

- Avaliar migracao de `.preview` para JSON final aprovado.
- Criar frontend.
- Criar quiz, jogos e simulador com curadoria humana.
- Implementar chat/RAG apenas depois, respeitando `usage_policy`.
- Decidir se README deve receber instrucoes finais depois da integracao.

## 2026-05-19 — Abordagem educacional e governanca do tema

### Etapa atual

Documento de orientacao educacional e governanca de tema sensivel criado para alinhar produto, frontend, backend, quiz, jogos, simulador, chat e apresentacao.

### Arquivos gerados ou atualizados

- `docs/11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`
- `docs/09_HANDOFF.md`

### Principais decisoes documentadas

- A plataforma deve ser uma experiencia ativa de aprendizagem, nao apenas biblioteca ou landing page.
- Jornada estruturada em Aprender, Praticar, Simular, Conversar e Encaminhar.
- Quiz, jogos e simulador devem usar feedback educativo sem acusar ou dar veredito juridico.
- Chat e suporte contextual, nao canal de denuncia nem parecer juridico.
- Referencias legais vindas da base podem ser educativas, mas nao conclusivas para caso individual.
- Modo Testemunha deve orientar apoio, registro cuidadoso e encaminhamento sem expor a pessoa afetada.

### Regras preservadas

- Nenhum backend, frontend, quiz, jogo, simulador ou chat foi criado nesta etapa.
- `backend/seed/conteudo_normalizado.curated.preview.json` nao foi alterado.
- Exemplos no documento sao estruturais e marcados como rascunho/exemplo nao validado.
- Conteudo sensivel definitivo continua exigindo validacao humana.

### Pendencias

- Frontend deve usar este documento como insumo de UX e copy tecnica.
- Operador de quiz/simulador deve criar perguntas e cenarios apenas como rascunho ate validacao humana.
- Operador de chat deve cruzar este documento com `docs/03_IA_RESPONSAVEL.md` antes de implementar RAG.

## 2026-05-19 — Matriz de conteudo e atividades

### Etapa atual

Abordagem educacional revisada para ficar ancorada no JSON curado real, e matriz de conteudo/atividades criada para orientar biblioteca, quiz, miniatividades, simulador e chat.

### Arquivos gerados ou atualizados

- `docs/11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`
- `docs/12_MATRIZ_CONTEUDO_E_ATIVIDADES.md`
- `docs/09_HANDOFF.md`

### Principais decisoes documentadas

- A fonte operacional das atividades educativas e `backend/seed/conteudo_normalizado.curated.preview.json`.
- Toda atividade futura deve apontar `source_id`, `source_row`, tipo de violencia, tema, `usage_policy` e status de validacao humana.
- `source_id 197` permanece bloqueado e nao deve entrar em biblioteca, quiz, simulador ou chat.
- Chat/RAG deve usar automaticamente apenas `rag_allowed_with_guardrails`.
- `exclude_from_rag` pode aparecer na biblioteca, mas fica fora do contexto automatico do chat.
- `library_only` pode ser leitura, mas nao deve fundamentar resposta automatica de risco.

### Regras preservadas

- JSON curado nao foi alterado.
- Nenhum quiz final foi gerado.
- Nenhum cenario final foi gerado.
- Nenhum conteudo sensivel foi inventado como definitivo.
- Exemplos permanecem estruturais/rascunho e exigem validacao humana.

### Pendencias

- Criar `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md` com rascunhos rastreados por `source_id`.
- Validar humanamente qualquer item antes de entrar no produto.
- Revisar README para remover referencias antigas a `Govenanca/`, se necessario.

## 2026-05-19 — Documentacao central do produto

### Etapa atual

Documento central criado para consolidar o que ja foi tratado no projeto e servir como mapa para leitores humanos e LLMs.

### Arquivos gerados ou atualizados

- `docs/10_DOCUMENTACAO_DO_PRODUTO.md`
- `README.md`
- `docs/09_HANDOFF.md`

### Principais decisoes documentadas

- `docs/10_DOCUMENTACAO_DO_PRODUTO.md` passa a ser o mapa central do produto.
- Documentos especificos continuam sendo fonte detalhada por dominio.
- O documento explicita estado atual: backend minimo existe; frontend, chat, quiz, simulador e cenarios finais ainda nao existem.
- Reforca que a fonte operacional de conteudo e o JSON curado.
- Reforca regras para LLMs antes de executar tarefas.
- README foi ajustado para apontar `docs/` como fonte de documentacao, removendo referencia antiga a `Govenanca/`.

### Regras preservadas

- Nenhum codigo foi implementado nesta etapa.
- JSON curado nao foi alterado.
- Nenhum quiz, cenario, chat ou frontend foi gerado.
- Nao houve commit/push.

### Pendencias

- Criar banco de rascunhos de quiz/atividades com `source_id`.
- Revisar documentacao antes de commit para garantir que nada local/sensivel entre no Git.

## 2026-05-19 — Banco rascunho de quiz e atividades

### Etapa atual

Banco de atividades educativas em rascunho criado a partir de registros reais do JSON curado.

### Arquivos gerados ou atualizados

- `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`
- `docs/09_HANDOFF.md`

### Conteudo criado

- 10 quizzes de compreensao em rascunho.
- 6 miniatividades educativas em rascunho.
- 3 cenarios de simulador em rascunho.

### Source IDs usados

- Quizzes: `140`, `130`, `196`, `77`, `90`, `131`, `209`, `212`, `179`, `200`.
- Miniatividades: `195`, `210`, `209`, `131`, `126`, `95`.
- Simulador: `130`, `195`, `196`, `210`, `209`, `140`, `200`, `95`, `204`.

### Regras preservadas

- Todos os itens estao com `status: rascunho`.
- Nenhum item usa `source_id 197`.
- Nenhum item usa `blocked_until_review`.
- Nenhum quiz, miniatividade ou cenario foi marcado como final.
- Nenhum codigo foi implementado.
- JSON curado nao foi alterado.
- Nao houve commit/push.

### Pendencias

- Validacao humana de cada item antes de implementacao.
- Revisar se algum rascunho deve ser cortado do MVP por risco ou tempo.
- Converter itens aprovados em seed/estrutura futura somente apos aceite humano.

## 2026-05-19 — Validacao MVP de atividades

### Etapa atual

Revisao Education/QA + Sensitive Content Reviewer realizada sobre os rascunhos de quiz, miniatividades e cenarios para decidir recomendacao de entrada no MVP do hackathon.

### Arquivos gerados ou atualizados

- `docs/14_VALIDACAO_MVP_ATIVIDADES.md`
- `docs/09_HANDOFF.md`

### Conteudo produzido

- Tabela de validacao dos 10 quizzes.
- Tabela de validacao das 6 miniatividades.
- Tabela de validacao dos 3 cenarios.
- Top 5 atividades recomendadas para MVP.
- Lista de cortes se o tempo apertar.
- Riscos de conteudo sensivel.
- Recomendacoes para uso seguro no frontend.

### Evidencias e restricoes preservadas

- Documentos consultados: `00_GOVERNANCA_DO_PROJETO.md`, `03_IA_RESPONSAVEL.md`, `11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`, `12_MATRIZ_CONTEUDO_E_ATIVIDADES.md`, `13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`.
- Fonte tecnica consultada: `backend/seed/conteudo_normalizado.curated.preview.json`.
- Todos os `source_id` usados nos rascunhos revisados existem no JSON curado.
- Nenhum item usa `source_id 197`.
- Nenhum item usa `blocked_until_review`.
- JSON curado nao foi alterado.
- Nenhum backend foi implementado.
- Nenhum frontend foi implementado.
- Nao houve commit/push.

### Pendencias

- Validacao humana final antes de tratar qualquer item como conteudo aprovado.
- Ajustar `MINI-001`, `MINI-005` e `SIM-002` antes de eventual entrada no MVP.
- Manter `MINI-002` fora do MVP, salvo nova curadoria humana com frase neutra validada.
- Frontend deve renderizar atividades aprovadas com aviso educativo, fontes e sem score/veredito sensivel.

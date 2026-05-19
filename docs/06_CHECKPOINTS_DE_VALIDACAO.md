# 06 · Checkpoints de Validacao

> Checkpoints devem ser pequenos, verificaveis e acompanhados de evidencia. Sem evidencia, o checkpoint fica no maximo como PARCIAL.

## Checkpoint 0 — Documentacao e repo inicial

**Objetivo:** deixar o repositorio compreensivel e seguro para subir ao GitHub.

**Criterios de aceite:**

- `README.md` explica objetivo, MVP, stack, status e limites.
- `.gitignore` bloqueia segredos, bancos locais, dependencias e planilha original.
- `.env.example` existe sem segredos.
- `docs/07_DECISOES_TECNICAS.md` registra decisoes iniciais.
- `docs/09_HANDOFF.md` registra estado atual.
- Nenhum backend/frontend/chat/quiz/simulador foi gerado por acidente.

**Evidencia esperada:** `git status`, lista de arquivos criados/alterados e revisao manual.

## Checkpoint 1 — JSON curado validado

**Objetivo:** validar o artefato intermediario de conteudo antes de criar seed.

**Criterios de aceite:**

- `backend/seed/conteudo_normalizado.curated.preview.json` parseavel.
- 60 registros presentes.
- Todos os registros possuem `source_sheet`, `source_row`, `source_id` e `usage_policy`.
- `curation.policy_rules` presente.
- `source_id 197` tratado como `blocked_until_review`.
- Conteudo dos registros nao foi reescrito.

**Evidencia esperada:** comando de parse JSON e contagem por `usage_policy`.

## Checkpoint 2 — Seed SQLite

**Objetivo:** gerar SQLite a partir de JSON final aprovado.

**Criterios de aceite:**

- JSON final sem `.preview` aprovado por humano.
- Script de seed cria tabelas esperadas.
- SQLite gerado localmente e ignorado pelo Git.
- Contagem no banco bate com o JSON final.

**Evidencia esperada:** log do seed e consulta simples no SQLite.

## Checkpoint 3 — Endpoints de conteudo/busca

**Objetivo:** expor conteudos e busca pelo backend.

**Criterios de aceite:**

- `GET /health` responde.
- `GET /conteudos` lista conteudos.
- `GET /tipos-violencia` lista tipos.
- `GET /busca?q=...` retorna resultados por keyword.
- Endpoints respeitam `usage_policy` quando aplicavel.

**Evidencia esperada:** comandos `curl` com respostas JSON.

## Checkpoint 4 — Frontend com mock

**Objetivo:** criar experiencia visual inicial sem depender do backend pronto.

**Criterios de aceite:**

- Home com portas de entrada.
- Biblioteca renderiza dados mockados.
- Aviso educativo global presente.
- Nenhuma regra de classificacao sensivel no frontend.

**Evidencia esperada:** screenshot ou video curto do Vite rodando.

## Checkpoint 5 — Integracao front/back

**Objetivo:** conectar frontend aos endpoints reais.

**Criterios de aceite:**

- Frontend consome `VITE_API_URL`.
- Biblioteca lista dados reais do backend.
- Busca funciona pela API.
- Erros de API sao tratados sem quebrar a tela.

**Evidencia esperada:** browser + terminal backend com requisicoes.

## Checkpoint 6 — Quiz/simulador

**Objetivo:** implementar aprendizagem ativa com feedback educativo.

**Criterios de aceite:**

- Quiz/jogos ensinam condutas seguras com feedback educativo.
- Simulador usa cenarios curados manualmente.
- Simulador pode apontar risco etico/legal da escolha sem acusar o usuario.
- Nenhum cenario e gerado automaticamente do Excel sem curadoria humana.

**Evidencia esperada:** fluxo manual completo com pelo menos um quiz e um cenario.

## Checkpoint 7 — Chat/RAG com guardrails

**Objetivo:** implementar chat como suporte contextual.

**Criterios de aceite:**

- Chat usa apenas registros permitidos por `usage_policy`.
- Respostas citam fontes consultadas.
- Chat nao da parecer juridico.
- Chat nao afirma "isso e assedio" ou "isso e crime" sobre caso individual.
- Fallback funciona se Gemini falhar.
- Historico sensivel nao e persistido em banco.

**Evidencia esperada:** smoke test com perguntas criticas e registro de respostas.

## Checkpoint 8 — Demo e apresentacao

**Objetivo:** preparar demo estavel e narrativa para banca.

**Criterios de aceite:**

- Fluxo principal ensaiado.
- Evidencias registradas em `docs/09_HANDOFF.md`.
- Riscos e limites claros para apresentacao.
- Video backup gravado, se houver tempo.
- Nao ha segredos, `.env`, banco local ou planilha original no repo publico.

**Evidencia esperada:** roteiro de demo, checklist final e `git status` limpo apos commit humano.

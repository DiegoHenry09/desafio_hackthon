# API Byst.end

> Estado atual: backend minimo para conteudos, busca e chat orientativo com RAG simples, guardrails, Gemini e fallback. Quiz, simulador e cenarios ainda nao foram implementados.

## Regras de Dados

- Fonte atual: `backend/seed/conteudo_normalizado.curated.preview.json`.
- O seed ignora registros com `usage_policy = blocked_until_review`.
- Registros com `usage_policy = exclude_from_rag` podem aparecer na biblioteca.
- A API retorna `is_rag_allowed: false` para registros que nao devem ser usados futuramente pelo chat/RAG.
- Respostas preservam `source_id`, `source_row`, `source_sheet` e `usage_policy`.
- O chat usa automaticamente apenas registros com `usage_policy = rag_allowed_with_guardrails`.
- O chat nao persiste conversa em banco e nao cria tabela de chat.

## `GET /health`

Retorna status simples da API.

Resposta:

```json
{
  "status": "ok"
}
```

## `GET /tipos-violencia`

Lista tipos de violencia carregados no SQLite.

Resposta: lista com `id`, `nome`, `slug`, `slogan`, `cor_hex`, `icone` e `ordem`.

## `GET /conteudos`

Lista microconteudos da biblioteca.

Query params:

- `tipo`: slug opcional do tipo de violencia.
- `camada`: numero opcional de 1 a 8.
- `limit`: limite de 1 a 100. Padrao: 50.

Resposta: lista de itens com rastreabilidade, tipo, camada, tema, `usage_policy`, `is_rag_allowed` e `needs_human_review`.

## `GET /conteudos/{id}`

Retorna detalhe de um microconteudo por ID interno do SQLite.

Inclui:

- rastreabilidade;
- nanoconteudos;
- texto completo do microconteudo;
- flags;
- motivos de revisao;
- `usage_policy`;
- `is_rag_allowed`.

## `GET /busca?q=...`

Busca por termo em tema, texto do microconteudo, tipo de violencia e nanoconteudos.

Query params:

- `q`: termo obrigatorio com pelo menos 2 caracteres.
- `limit`: limite de 1 a 50. Padrao: 20.

Observacao: a busca normaliza acentos em memoria para permitir consultas como `assedio` encontrarem `assédio`.

## `POST /chat`

Envia mensagem ao orientador educativo.

Regras:

- Usa RAG simples sobre microconteudos permitidos para RAG.
- Nunca usa `blocked_until_review`.
- Nao usa `exclude_from_rag` como contexto automatico.
- Nao persiste historico no banco.
- Retorna fallback se Gemini falhar, bloquear, estiver sem chave ou exceder timeout.
- Sempre retorna `fontes_consultadas` como lista, mesmo quando vazia.
- Para a pergunta demonstravel da jornada da testemunha, o RAG deve priorizar `source_id 95` como fonte principal quando semanticamente adequado, com `200` e `204` como apoio.

Body:

```json
{
  "mensagem": "Sou testemunha de uma situação desconfortável. Como posso apoiar sem expor a pessoa afetada?",
  "session_id": "demo-session",
  "historico": []
}
```

Resposta:

```json
{
  "resposta": "Texto educativo com guardrails e aviso de nao substituicao.",
  "fontes_consultadas": [
    {
      "id": 50,
      "source_id": 95,
      "tema": "Todos cuidam de todos.",
      "tipo_violencia": "ASSÉDIO SEXUAL",
      "tipo_violencia_slug": "assedio-sexual",
      "usage_policy": "rag_allowed_with_guardrails"
    },
    {
      "id": 51,
      "source_id": 200,
      "tema": "Entenda seu papel.",
      "tipo_violencia": "ASSÉDIO MORAL",
      "tipo_violencia_slug": "assedio-moral",
      "usage_policy": "rag_allowed_with_guardrails"
    },
    {
      "id": 59,
      "source_id": 204,
      "tema": "Responsabilidade começa na percepção.",
      "tipo_violencia": "ASSÉDIO MORAL",
      "tipo_violencia_slug": "assedio-moral",
      "usage_policy": "rag_allowed_with_guardrails"
    }
  ],
  "usou_fallback": true,
  "gravidade_detectada": "baixa"
}
```

Campos:

- `resposta`: orientacao educativa, pos-processada para remover frases proibidas e encerrar com aviso educativo.
- `fontes_consultadas`: top 3 fontes usadas como contexto RAG, somente com `usage_policy = rag_allowed_with_guardrails`.
- `usou_fallback`: `true` quando houve off-topic, crise imediata, falta de chave, erro, bloqueio ou timeout do Gemini.
- `gravidade_detectada`: `baixa` ou `alta`.

Limites:

- Nao afirma veredito sobre assedio ou crime.
- Nao da parecer juridico.
- Nao substitui RH, juridico, compliance ou canal oficial.
- Nao promete anonimato ou confidencialidade.

Variaveis de ambiente:

- `GEMINI_API_KEY`: chave local do Gemini. Nao versionar.
- `GEMINI_MODEL`: modelo configuravel por `.env`; para a demo, a auditoria recomenda `gemini-3.1-flash-lite`.
- `GEMINI_TIMEOUT_SECONDS`: timeout opcional, padrao `8`.

Observacao de IA responsavel: a escolha do modelo do chat esta registrada em `docs/16_AUDITORIA_MODELOS_CHAT.md`. Mesmo com Gemini ao vivo, `/chat` deve manter fallback automatico quando houver erro, bloqueio, ausencia de chave ou timeout.

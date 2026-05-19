# API Byst.end

> Estado atual: backend minimo para conteudos e busca. Chat, quiz, simulador e cenarios ainda nao foram implementados.

## Regras de Dados

- Fonte atual: `backend/seed/conteudo_normalizado.curated.preview.json`.
- O seed ignora registros com `usage_policy = blocked_until_review`.
- Registros com `usage_policy = exclude_from_rag` podem aparecer na biblioteca.
- A API retorna `is_rag_allowed: false` para registros que nao devem ser usados futuramente pelo chat/RAG.
- Respostas preservam `source_id`, `source_row`, `source_sheet` e `usage_policy`.

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

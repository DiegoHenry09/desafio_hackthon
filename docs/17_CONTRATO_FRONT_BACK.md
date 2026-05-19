# 17 · Contrato Front/Back

> **Status:** guia pratico de integracao para a demo.  
> **Atuando como:** Agent Integration/QA.  
> **Escopo:** documentar contratos reais da API para consumo pelo frontend, sem criar tela, sem alterar JSON e sem expor chave Gemini.

---

## 1. Objetivo

Este documento conecta o backend FastAPI ao frontend React/Vite. Ele descreve como subir a API, quais rotas consumir, quais campos renderizar e quais cuidados de IA responsavel precisam aparecer na interface.

O frontend deve ser thin client: consome dados, exibe fontes, estados de carregamento/erro/vazio e avisos educativos. Ele nao calcula score de assedio, nao decide se algo e assedio/crime, nao aplica regra sensivel e nao recebe chave Gemini.

---

## 2. Como subir o backend

No Windows:

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
python -m seed.seed_planilha
uvicorn app:app --reload --port 8000
```

Base URL para o frontend:

```env
VITE_API_URL=http://localhost:8000
```

Variaveis locais do backend para chat com Gemini real:

```env
GEMINI_MODEL=gemini-3.1-flash-lite
GEMINI_API_KEY=...
```

Nao colocar `GEMINI_API_KEY` no frontend, no Git, em prints ou em docs. Se a chave nao estiver disponivel, `/chat` deve continuar respondendo por fallback.

---

## 3. Endpoints validados

| Metodo | Rota | Uso no frontend | Status validado |
|---|---|---|---|
| `GET` | `/health` | Smoke check da API | HTTP 200 |
| `GET` | `/conteudos` | Biblioteca/listagem | HTTP 200 |
| `GET` | `/conteudos/{id}` | Detalhe de microconteudo | HTTP 200 para `1` |
| `GET` | `/tipos-violencia` | Filtros/cards de tipos | HTTP 200 |
| `GET` | `/busca?q=...` | Busca textual | HTTP 200 |
| `POST` | `/chat` | Chat orientativo | HTTP 200 |

Erros FastAPI seguem o formato padrao:

```json
{
  "detail": "mensagem ou lista de validacoes"
}
```

O frontend deve tratar `4xx/5xx` com mensagem amigavel, sem exibir stack trace.

---

## 4. Contratos por endpoint

### `GET /health`

Query params: nenhum.

Body: nenhum.

Response real:

```json
{
  "status": "ok"
}
```

Campos obrigatorios:

- `status`: string.

Observacao para o frontend: usar apenas para smoke/debug. Nao precisa aparecer para usuario final.

### `GET /tipos-violencia`

Query params: nenhum.

Body: nenhum.

Response: lista de tipos.

Campos de cada item:

- `id`: number.
- `nome`: string.
- `slug`: string.
- `slogan`: string ou `null`.
- `cor_hex`: string ou `null`.
- `icone`: string ou `null`.
- `ordem`: number.

Exemplo resumido:

```json
[
  {
    "id": 1,
    "nome": "MICROAGRESSÕES",
    "slug": "microagressoes",
    "slogan": null,
    "cor_hex": null,
    "icone": null,
    "ordem": 1
  }
]
```

Observacao para o frontend: usar `slug` para filtro em `/conteudos?tipo=...`. Tratar `slogan`, `cor_hex` e `icone` como opcionais.

### `GET /conteudos`

Query params:

- `tipo`: opcional; slug do tipo de violencia.
- `camada`: opcional; inteiro de 1 a 8.
- `limit`: opcional; inteiro de 1 a 100; padrao `50`.

Body: nenhum.

Response: lista de microconteudos para biblioteca.

Campos obrigatorios de cada item:

- `id`
- `source_id`
- `source_row`
- `source_sheet`
- `tipo_violencia`
- `tipo_violencia_slug`
- `camada`
- `camada_nome`
- `tema`
- `tema_slug`
- `usage_policy`
- `is_rag_allowed`
- `needs_human_review`

Campos opcionais:

- `grau_sensibilidade`
- `risco_juridico`

Exemplo de request:

```ts
fetch(`${API_BASE_URL}/conteudos?tipo=assedio-moral&camada=1&limit=20`)
```

Exemplo resumido de response:

```json
[
  {
    "id": 1,
    "source_id": 140,
    "source_row": 2,
    "source_sheet": "2.3. NANO CONTEÚDOS",
    "tipo_violencia": "MICROAGRESSÕES",
    "tipo_violencia_slug": "microagressoes",
    "camada": 1,
    "camada_nome": "CAMADA 1 — CONHECIMENTO BÁSICO (INFORMATIVO)",
    "tema": "O que é?",
    "tema_slug": "o-que-e",
    "grau_sensibilidade": "MÉDIO",
    "risco_juridico": "BAIXO – Conteúdo informativo...",
    "usage_policy": "rag_allowed_with_guardrails",
    "is_rag_allowed": true,
    "needs_human_review": false
  }
]
```

Observacoes para o frontend:

- Renderizar `source_id`, `source_row` e `source_sheet` em modo tecnico/fonte.
- Exibir `usage_policy` quando a tela tiver bloco de rastreabilidade.
- Nao usar `is_rag_allowed` para esconder biblioteca; ele indica apenas se pode alimentar RAG automatico.
- `blocked_until_review` nao deve aparecer porque o seed ignora esse registro.

### `GET /conteudos/{id}`

Path params:

- `id`: ID interno SQLite do microconteudo, nao confundir com `source_id`.

Body: nenhum.

Response: detalhe do microconteudo.

Inclui todos os campos de `/conteudos` e tambem:

- `ordem`
- `ordem_disparo`
- `publico_trilha`
- `nanoconteudos`
- `microconteudo_texto`
- `flags`
- `review_reasons`

Exemplo de request:

```ts
fetch(`${API_BASE_URL}/conteudos/1`)
```

Exemplo resumido:

```json
{
  "id": 1,
  "source_id": 140,
  "tema": "O que é?",
  "nanoconteudos": ["..."],
  "microconteudo_texto": "TEMA: MICROAGRESSÕES | O que é?...",
  "usage_policy": "rag_allowed_with_guardrails",
  "is_rag_allowed": true,
  "flags": {
    "conteudo_juridico": false
  },
  "review_reasons": []
}
```

Erros possiveis:

- `404`: `{ "detail": "Conteudo nao encontrado" }`.
- `422`: ID invalido.

Observacoes para o frontend:

- Usar `id` para abrir detalhe.
- Mostrar `source_id` como rastreabilidade de origem.
- Renderizar `nanoconteudos` como bullets/cards.
- Renderizar `microconteudo_texto` preservando quebras de linha.

### `GET /busca`

Query params:

- `q`: obrigatorio; minimo 2 caracteres.
- `limit`: opcional; inteiro de 1 a 50; padrao `20`.

Body: nenhum.

Response:

- `query`: termo original.
- `total`: total de resultados encontrados.
- `resultados`: lista.

Campos de cada resultado:

- `id`
- `source_id`
- `tema`
- `tipo_violencia`
- `tipo_violencia_slug`
- `camada`
- `snippet`
- `usage_policy`
- `is_rag_allowed`

Exemplo de request:

```ts
fetch(`${API_BASE_URL}/busca?q=testemunha`)
```

Exemplo resumido de response:

```json
{
  "query": "testemunha",
  "total": 5,
  "resultados": [
    {
      "id": 48,
      "source_id": 198,
      "tema": "Escuta e responsabilidade.",
      "tipo_violencia": "ASSÉDIO MORAL",
      "tipo_violencia_slug": "assedio-moral",
      "camada": 7,
      "snippet": "...",
      "usage_policy": "rag_allowed_with_guardrails",
      "is_rag_allowed": true
    }
  ]
}
```

Erros possiveis:

- `422`: `q` ausente ou com menos de 2 caracteres.

Observacoes para o frontend:

- Empty state: se `total = 0`, mostrar mensagem neutra como "Nenhum conteudo encontrado para este termo."
- Nao transformar resultado de busca em recomendacao juridica.
- Search normaliza acentos; `assedio` encontra `assédio`.

### `POST /chat`

Body:

```json
{
  "mensagem": "Sou testemunha de uma situação desconfortável. Como posso apoiar sem expor a pessoa afetada?",
  "session_id": "demo-session",
  "historico": []
}
```

Campos obrigatorios:

- `mensagem`: string de 2 a 2000 caracteres.

Campos opcionais:

- `session_id`: string ou `null`, maximo 120 caracteres.
- `historico`: lista com ate 6 itens `{ "role": "user" | "assistant", "content": "..." }`.

Response:

```json
{
  "resposta": "Texto educativo...",
  "fontes_consultadas": [
    {
      "id": 50,
      "source_id": 95,
      "tema": "Todos cuidam de todos.",
      "tipo_violencia": "ASSÉDIO SEXUAL",
      "tipo_violencia_slug": "assedio-sexual",
      "usage_policy": "rag_allowed_with_guardrails"
    }
  ],
  "usou_fallback": true,
  "gravidade_detectada": "baixa"
}
```

Campos obrigatorios de response:

- `resposta`
- `fontes_consultadas`
- `usou_fallback`
- `gravidade_detectada`

Observacoes para o frontend:

- Sempre exibir aviso educativo fixo no topo do chat.
- Exibir `fontes_consultadas` abaixo da resposta quando houver fontes.
- Se `usou_fallback = true`, exibir badge discreta como "Resposta baseada em fontes relacionadas" ou "Modo fallback", sem alarmismo.
- Nunca exibir "isso e assedio", "isso e crime", "voce foi vitima" como veredito da interface.
- Off-topic retorna `fontes_consultadas: []` e `usou_fallback: true`.
- O frontend nao envia chave Gemini. A chamada Gemini acontece apenas no backend.

---

## 5. Como renderizar no frontend

### Biblioteca

- Chamar `GET /conteudos`.
- Agrupar ou filtrar por `tipo_violencia_slug` e `camada` se necessario.
- Card recomendado: `tema`, `tipo_violencia`, `camada`, `grau_sensibilidade`, `source_id`.
- Mostrar `usage_policy` apenas em area de rastreabilidade/tecnica.
- Link do card deve usar `id` para abrir `/conteudos/{id}`.

### Busca

- Chamar `GET /busca?q=${encodeURIComponent(q)}` apenas quando `q.length >= 2`.
- Mostrar `total`, `snippet`, `tema`, `tipo_violencia`, `camada` e `source_id`.
- Empty state: "Nenhum conteudo encontrado."
- Error state: "Nao foi possivel buscar agora. Tente novamente."

### Detalhe de conteudo

- Chamar `GET /conteudos/{id}`.
- Renderizar `nanoconteudos` e `microconteudo_texto`.
- Mostrar bloco de fonte: `source_sheet`, `source_row`, `source_id`, `usage_policy`.
- Se `needs_human_review = true`, tratar como alerta tecnico; no seed atual o bloqueado nao deve aparecer.

### Chat

- Chamar `POST /chat`.
- Manter historico somente em memoria da pagina ou estado local temporario.
- Enviar no maximo as ultimas 6 mensagens em `historico`.
- Renderizar `resposta` preservando quebras de linha.
- Renderizar `fontes_consultadas` como cards/link para `/conteudos/{id}`.
- Renderizar `usou_fallback` de modo discreto.
- Sempre mostrar aviso de nao substituicao na tela, mesmo se a resposta tambem trouxer aviso.

### Loading, error e empty states

- Loading: mostrar skeleton/spinner simples e impedir duplo envio no chat.
- Error: mensagem amigavel; nao mostrar stack trace, prompt, chave, variavel de ambiente ou detalhe tecnico sensivel.
- Empty: texto neutro e botao para limpar filtros.
- Chat com erro de rede: manter mensagem do usuario e permitir tentar novamente.

---

## 6. Exemplos TypeScript com `fetch`

```ts
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    let detail = "Erro ao chamar API.";
    try {
      const body = await response.json();
      detail = typeof body.detail === "string" ? body.detail : detail;
    } catch {
      // Mantem mensagem generica para nao vazar detalhe tecnico.
    }
    throw new Error(detail);
  }

  return response.json() as Promise<T>;
}

export interface TipoViolencia {
  id: number;
  nome: string;
  slug: string;
  slogan?: string | null;
  cor_hex?: string | null;
  icone?: string | null;
  ordem: number;
}

export interface ConteudoListItem {
  id: number;
  source_id: number;
  source_row: number;
  source_sheet: string;
  tipo_violencia: string;
  tipo_violencia_slug: string;
  camada: number;
  camada_nome: string;
  tema: string;
  tema_slug: string;
  grau_sensibilidade?: string | null;
  risco_juridico?: string | null;
  usage_policy: string;
  is_rag_allowed: boolean;
  needs_human_review: boolean;
}

export interface ConteudoDetail extends ConteudoListItem {
  ordem: number;
  ordem_disparo?: string | null;
  publico_trilha?: string | null;
  nanoconteudos: string[];
  microconteudo_texto: string;
  flags: Record<string, boolean>;
  review_reasons: string[];
}

export interface BuscaResponse {
  query: string;
  total: number;
  resultados: Array<{
    id: number;
    source_id: number;
    tema: string;
    tipo_violencia: string;
    tipo_violencia_slug: string;
    camada: number;
    snippet: string;
    usage_policy: string;
    is_rag_allowed: boolean;
  }>;
}

export interface ChatHistoricoItem {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  resposta: string;
  fontes_consultadas: Array<{
    id: number;
    source_id: number;
    tema: string;
    tipo_violencia: string;
    tipo_violencia_slug: string;
    usage_policy: string;
  }>;
  usou_fallback: boolean;
  gravidade_detectada: "baixa" | "alta" | string;
}

export function getConteudos(params?: {
  tipo?: string;
  camada?: number;
  limit?: number;
}) {
  const search = new URLSearchParams();
  if (params?.tipo) search.set("tipo", params.tipo);
  if (params?.camada) search.set("camada", String(params.camada));
  if (params?.limit) search.set("limit", String(params.limit));

  const query = search.toString();
  return requestJson<ConteudoListItem[]>(`/conteudos${query ? `?${query}` : ""}`);
}

export function getConteudoById(id: number) {
  return requestJson<ConteudoDetail>(`/conteudos/${id}`);
}

export function buscarConteudos(q: string, limit = 20) {
  const search = new URLSearchParams({ q, limit: String(limit) });
  return requestJson<BuscaResponse>(`/busca?${search.toString()}`);
}

export function getTiposViolencia() {
  return requestJson<TipoViolencia[]>("/tipos-violencia");
}

export function sendChatMessage(
  mensagem: string,
  sessionId?: string,
  historico: ChatHistoricoItem[] = [],
) {
  return requestJson<ChatResponse>("/chat", {
    method: "POST",
    body: JSON.stringify({
      mensagem,
      session_id: sessionId ?? null,
      historico: historico.slice(-6),
    }),
  });
}
```

---

## 7. Validacao local realizada

| Teste | Status HTTP | Resumo | Contrato bate? | Ajuste para front |
|---|---:|---|---|---|
| `GET /health` | 200 | Retornou `status`. | Sim | Nenhum. |
| `GET /conteudos` | 200 | Retornou 50 itens no padrao de lista. Primeiro `source_id`: `140`. | Sim | Front deve respeitar `limit` padrao 50. |
| `GET /tipos-violencia` | 200 | Retornou 7 tipos. | Sim | Tratar campos visuais opcionais como nullable. |
| `GET /busca?q=testemunha` | 200 | `total = 5`, 5 retornados. Primeiro `source_id`: `198`. | Sim | Nao assumir que busca por testemunha retorna `95`; isso e regra do chat/RAG da demo. |
| `GET /busca?q=canais` | 200 | `total = 13`, 13 retornados. Primeiro `source_id`: `166`. | Sim | Bom termo para ensaio de busca/canais. |
| `GET /conteudos/1` | 200 | Retornou detalhe com `nanoconteudos`, `microconteudo_texto`, `flags` e `review_reasons`. | Sim | Renderizar texto longo com quebras de linha. |
| `POST /chat` pergunta da demo | 200 | Retornou fallback seguro sem chave, fontes `95`, `200`, `207`, aviso de nao substituicao. | Parcial com observacao | Aceite ok porque `95` aparece; front nao deve hardcodar fonte de apoio `204`. |

Observacao: a documentacao de demo cita `source_id 204` como apoio esperado, mas a validacao local retornou `207` como terceira fonte do chat. Isso nao bloqueia a integracao porque a fonte principal `95` apareceu. Se a equipe quiser fonte de apoio fixa `204`, o ajuste deve ser feito no RAG/backend em tarefa propria, com impacto documentado.

---

## 8. O que nunca mostrar como veredito

O frontend nunca deve apresentar:

- "Isso e assedio."
- "Isso e crime."
- "Voce foi vitima."
- "A empresa e obrigada a..."
- "Voce deve processar."
- "Posso garantir confidencialidade."
- Score, ranking ou probabilidade de assedio.
- Diagnostico psicologico.
- Parecer juridico.

Textos seguros:

- "Essa situacao pode conter sinais que merecem atencao."
- "Esta orientacao e educativa."
- "Nao substitui RH, juridico, compliance ou canal oficial."
- "Considere procurar canais oficiais da sua organizacao em situacoes graves."

---

## 9. Criterios de aceite da integracao

A integracao front/back pode ser aceita quando:

- frontend consegue carregar biblioteca real via `GET /conteudos`;
- filtros por tipo/camada nao quebram e exibem empty state quando necessario;
- busca retorna resultados reais via `GET /busca?q=...`;
- detalhe abre com dados reais via `GET /conteudos/{id}`;
- chat responde ou cai em fallback sem quebrar;
- fontes aparecem no chat;
- aviso educativo aparece no chat e nas telas sensiveis;
- nenhum endpoint exige segredo no frontend;
- nenhum dado sensivel do chat e persistido em banco pelo frontend ou backend;
- erro de API e exibido de forma amigavel;
- interface nao mostra veredito juridico, diagnostico, score de assedio ou promessa de confidencialidade;
- `source_id`, `source_row`, `source_sheet` e `usage_policy` ficam disponiveis para rastreabilidade.

---

## 10. Riscos e pendencias

- `README.md` ainda menciona estado antigo em alguns trechos, dizendo que chat/frontend nao foram implementados. Este guia e `docs/api.md` refletem o contrato atual, mas uma revisao futura do README pode reduzir confusao.
- `docs/02_ARQUITETURA_TECNICA.md` ainda lista `Gemini 2.5 Flash` como decisao de stack historica; a decisao de demo atual esta em `docs/16_AUDITORIA_MODELOS_CHAT.md`.
- `POST /chat` validado sem chave retorna fallback; para demo com Gemini real, configurar `.env` local com `GEMINI_MODEL=gemini-3.1-flash-lite` e `GEMINI_API_KEY`.
- A terceira fonte do chat da pergunta de demo pode variar (`207` nesta validacao). O frontend deve renderizar dinamicamente as fontes retornadas.
- CORS esta configurado para `http://localhost:5173`; se o frontend rodar em outra porta, o backend precisa de ajuste documentado.

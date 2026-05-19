# 02 · Arquitetura Técnica

> **Status:** 🟢 DECIDIDO (stack e estrutura de pastas) · 🟡 vivo (endpoints podem evoluir)
> **Dono:** Operador A coordena, Operadores B e C consomem
> **Importante:** este documento é **insumo da IA**. O Cursor lê isso pra entender padrões. Mudou aqui = mudou pra IA.

---

## 1. Stack (🟢 DECIDIDO)

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---|---|
| Backend | FastAPI | latest | Já validado na máquina; Pydantic + docs automáticas; FastAPI tem boa geração via LLM |
| Backend runtime | Python | 3.12 | Já instalado e validado |
| ORM | SQLAlchemy | 2.x | Tipado, moderno, já validado |
| Schemas | Pydantic | 2.x | Validação automática + docs |
| ASGI server | Uvicorn | latest | Já validado |
| Banco | SQLite | nativo | Zero setup, arquivo local, suficiente pra 60 microconteúdos + 3 cenários |
| IA | Google Gemini | 2.5 Flash | Chave já disponível; barato; rápido |
| SDK Gemini | `google-generativeai` | latest | Oficial |
| Frontend | React | 19 | Já validado |
| Build | Vite | latest | Já validado |
| Frontend lang | TypeScript | strict | Type safety + melhor geração via LLM |
| Estilo | CSS modules ou Tailwind | a decidir no setup | Operador D decide no Checkpoint 0 |
| HTTP cliente front | fetch nativo | — | Sem axios; menos dependência |

**Alternativas consideradas e descartadas:**
- Next.js: full-stack num projeto só, mas trainees não conhecem App Router → atrito
- PostgreSQL: zero ganho pra 60 registros, setup desperdiça tempo
- Embeddings (busca semântica): tempo insuficiente; LIKE + filtros é defensável
- Docker: zero ganho em hackathon local
- Testes automatizados: tempo insuficiente; smoke test manual basta

---

## 2. Estrutura de pastas (🟢 DECIDIDO)

```
bystend/
├── README.md
├── .cursorrules                       ← regras do Cursor (criar primeiro)
├── .gitignore
├── .env.example                       ← template de variáveis de ambiente
├── docs/                              ← TODOS os docs ficam aqui
│   ├── 00_GOVERNANCA_DO_PROJETO.md
│   ├── 01_ARQUITETURA_PRODUTO.md
│   ├── 02_ARQUITETURA_TECNICA.md      (este arquivo)
│   ├── 03_IA_RESPONSAVEL.md
│   ├── 04_MODELO_DESENVOLVIMENTO_ASSISTIDO.md
│   ├── 05_PROMPTS_OPERACIONAIS.md
│   ├── 06_CHECKPOINTS_DE_VALIDACAO.md
│   ├── 07_DECISOES_TECNICAS.md        ← vivo
│   ├── 08_RISCOS_E_LIMITES.md
│   ├── 09_HANDOFF.md                  ← vivo
│   └── 10_APRESENTACAO.md
│
├── backend/
│   ├── pyproject.toml
│   ├── app.py                         ← FastAPI entry; CORS; routers
│   ├── config.py                      ← settings via Pydantic Settings
│   ├── database.py                    ← SQLAlchemy session, engine
│   ├── models/                        ← SQLAlchemy 2.x style (Mapped)
│   │   ├── __init__.py
│   │   ├── tipo_violencia.py
│   │   ├── microconteudo.py
│   │   └── cenario.py
│   ├── schemas/                       ← Pydantic 2
│   │   ├── __init__.py
│   │   ├── conteudo.py
│   │   ├── cenario.py
│   │   └── chat.py
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── conteudos.py               ← /conteudos*
│   │   ├── busca.py                   ← /busca
│   │   ├── cenarios.py                ← /cenarios*
│   │   └── chat.py                    ← /chat
│   ├── services/
│   │   ├── __init__.py
│   │   ├── rag.py                     ← busca de contexto pro chat
│   │   ├── gemini_client.py           ← wrapper Gemini + safety + fallback
│   │   └── guardrails.py              ← intent filter + pós-processamento
│   ├── seed/
│   │   ├── planilha.xlsx              ← cópia local da planilha
│   │   ├── seed_planilha.py           ← lê planilha → SQLite
│   │   ├── seed_cenarios.json         ← 3 cenários curados
│   │   └── seed_cenarios.py           ← lê JSON → SQLite
│   └── data/
│       └── bystend.db                 ← SQLite (gitignored)
│
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx                    ← Router + layout global
│       ├── api/
│       │   └── client.ts              ← fetch wrapper, baseUrl
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Biblioteca.tsx
│       │   ├── Trilha.tsx
│       │   ├── Microconteudo.tsx
│       │   ├── Simulador.tsx
│       │   ├── Cenario.tsx
│       │   ├── Chat.tsx
│       │   └── CanaisOficiais.tsx
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── BannerCanaisOficiais.tsx    ← fixo em todas as telas
│       │   ├── CardTipoViolencia.tsx
│       │   ├── CardMicroconteudo.tsx
│       │   ├── NanoCard.tsx
│       │   ├── ChatMessage.tsx
│       │   ├── SuggestedPrompts.tsx
│       │   ├── FonteCitada.tsx
│       │   └── AvisoEducativo.tsx
│       ├── hooks/
│       │   ├── useProgresso.ts        ← localStorage
│       │   └── useChat.ts
│       ├── types/
│       │   └── api.ts                 ← types espelhando Pydantic schemas
│       └── styles/
│           ├── tokens.css
│           └── globals.css
│
└── scripts/
    └── dev.sh                         ← inicia back + front em paralelo
```

**Regra inegociável:** **a IA não cria pastas/arquivos fora dessa estrutura**. Se aparecer um `utils/`, `helpers/`, `common/`, `tests/` no `git status`, **deleta antes de commitar**.

---

## 3. Modelo de dados (🟢 DECIDIDO)

### tipos_violencia
```sql
CREATE TABLE tipos_violencia (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL UNIQUE,             -- "ASSÉDIO MORAL"
  slug TEXT NOT NULL UNIQUE,             -- "assedio-moral"
  slogan TEXT,                            -- da aba 2.5 SLOGANS
  cor_hex TEXT,                          -- "#A33" pra UI
  icone TEXT,                            -- emoji ou nome de icon
  ordem INTEGER DEFAULT 0
);
```

### microconteudos
```sql
CREATE TABLE microconteudos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tipo_violencia_id INTEGER NOT NULL REFERENCES tipos_violencia(id),
  camada INTEGER NOT NULL,               -- 1 a 8
  camada_nome TEXT,                      -- "CAMADA 1 — CONHECIMENTO BÁSICO (INFORMATIVO)"
  tema TEXT NOT NULL,                    -- "O que é?"
  grau_sensibilidade TEXT,               -- LEVE / MÉDIO / ALTO
  risco_juridico TEXT,                   -- BAIXO / MÉDIO / ALTO / MUITO ALTO / CRÍTICO
  nano_1 TEXT, nano_2 TEXT, nano_3 TEXT,
  nano_4 TEXT, nano_5 TEXT, nano_6 TEXT, nano_7 TEXT,
  microconteudo_texto TEXT NOT NULL,     -- texto longo de fechamento
  ordem_disparo INTEGER,                 -- semana 1, 2, 3...
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_microconteudos_tipo ON microconteudos(tipo_violencia_id);
CREATE INDEX idx_microconteudos_camada ON microconteudos(camada);
```

### cenarios
```sql
CREATE TABLE cenarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  contexto TEXT NOT NULL,                -- descrição da situação hipotética
  tipo_violencia_id INTEGER REFERENCES tipos_violencia(id),
  camada_relacionada INTEGER,
  opcoes_json TEXT NOT NULL,             -- JSON com opções + feedback
  microconteudos_relacionados TEXT,      -- "12,19,23"
  ordem INTEGER DEFAULT 0
);
```

### Sem tabela de usuário, progresso ou logs em banco
Progresso de leitura → `localStorage` no front.
Logs do chat → memória do processo Python (lista in-memory durante a sessão); não persiste.

---

## 4. Endpoints (🟢 DECIDIDO)

Todos retornam JSON. Erros padronizados: `{"detail": "mensagem"}`.

### Conteúdos
```
GET  /conteudos                          → lista microconteúdos (paginado simples)
  query: ?tipo=assedio-moral&camada=1
GET  /conteudos/{id}                     → detalhe de microconteúdo
GET  /tipos-violencia                    → lista os 7 tipos
GET  /tipos-violencia/{slug}             → detalhe + microconteúdos do tipo
```

### Busca
```
GET  /busca?q=palavra                    → busca em tema + microconteudo_texto
  query: ?q=...&tipo=...&camada=...
  response: { resultados: [{id, tema, snippet, tipo, camada}, ...] }
```

### Simulador
```
GET  /cenarios                           → lista 3 cenários
GET  /cenarios/{id}                      → detalhe (contexto + opções)
POST /cenarios/{id}/responder            → registra resposta (não persiste; só devolve feedback)
  body: { opcao: "A" }
  response: { feedback_titulo, feedback_corpo, sinais_risco, conduta_segura, microconteudos_relacionados }
```

### Chat
```
POST /chat                               → envia mensagem e recebe resposta
  body: { mensagem, session_id, historico?: [{role, content}] }
  response: { resposta, fontes_consultadas: [{id, tema, tipo}], usou_fallback: bool, gravidade_detectada: "baixa"|"alta" }
```

### Saúde
```
GET  /health                             → { status: "ok" }
GET  /                                   → redireciona pro docs do FastAPI
```

**Sobre histórico de chat:** o front mantém histórico em memória da página. Ao chamar `/chat`, envia o histórico recente (últimas 4-6 mensagens) pro backend usar como contexto. Não persiste em banco.

---

## 5. Frontend — padrões (🟢 DECIDIDO)

### Convenções
- Componentes funcionais TypeScript
- 1 componente por arquivo, nome do arquivo = nome do componente
- Props tipadas com `interface XxxProps`
- Sem state management global; `useState` + props
- `useChat` e `useProgresso` são hooks customizados, único lugar com lógica reutilizada
- Estilo: CSS modules OU Tailwind (operador D escolhe no Checkpoint 0; **uma das duas, não as duas**)
- Tokens de design em `styles/tokens.css` (cores, espaçamentos, fontes)

### Componente fixo: BannerCanaisOficiais
- Aparece em **todas** as páginas (incluído no `App.tsx`)
- Texto padrão: "Em situação de risco imediato, acione: Disque 180 (mulher), Disque 100 (direitos humanos), CVV 188 (saúde mental). Esta plataforma é educativa e não substitui RH, jurídico ou canal oficial."
- Estilo discreto mas legível (rodapé fixo ou banner topo, decisão do D)

### Componente fixo: AvisoEducativo
- Aparece no Chat (topo da conversa)
- Texto: "Esta é uma orientação educativa baseada nos materiais da Byst.end. Não substitui RH, jurídico, compliance ou canal oficial de denúncia."

---

## 6. IA / Chat / Busca / Fallback (🟢 DECIDIDO)

### Fluxo do chat (resumido — detalhe em `03_IA_RESPONSAVEL.md`)

```
POST /chat com {mensagem, session_id}
  ↓
1. intent_filter(mensagem)
   - Se "crise imediata" detectada → resposta canalizada estática (não chama Gemini)
   - Se "off-topic" → resposta padrão "sou educativo, foco em prevenção de assédio"
  ↓
2. rag_service.buscar_contexto(mensagem) 
   - LIKE em microconteudos.tema + microconteudo_texto + nanos
   - Retorna top 3 microconteúdos com score simples (contagem de matches)
  ↓
3. gemini_client.gerar(system_prompt, contexto_rag, mensagem, historico)
   - safety_settings: BLOCK_ONLY_HIGH em todas as categorias
   - Em caso de BlockedPromptError / APIError / Timeout → cai pro fallback
  ↓
4. guardrails.pos_processar(resposta)
   - Append fontes citadas
   - Append aviso fixo
   - Validar: não contém "isso É assédio" categórico (regex simples)
  ↓
Response: {resposta, fontes_consultadas, usou_fallback, gravidade_detectada}
```

### Fallback
Se Gemini falhar em qualquer ponto:
```python
def resposta_fallback(mensagem, contexto_rag):
    return {
        "resposta": template_estatico_baseado_em_contexto(contexto_rag),
        "fontes_consultadas": [c.id for c in contexto_rag],
        "usou_fallback": True,
        "gravidade_detectada": "indefinida",
    }
```
Template estático: "Com base nos materiais da Byst.end, encontrei conteúdos relacionados à sua pergunta. Recomendo a leitura dos materiais listados abaixo. Lembre-se: esta é orientação educativa e não substitui canais oficiais."

### Busca (não-IA)
- `WHERE microconteudo_texto LIKE '%termo%' OR tema LIKE '%termo%' OR nano_1 LIKE '%termo%' ...`
- Ordenado por relevância simples (count de matches)
- Sem stemming, sem fuzzy, sem embedding
- Suficiente para 60 microconteúdos

---

## 7. Variáveis de ambiente (`.env.example`)

```bash
# Backend
DATABASE_URL=sqlite:///./data/bystend.db
GEMINI_API_KEY=sua-chave-aqui
GEMINI_MODEL=gemini-2.5-flash
CORS_ORIGINS=http://localhost:5173

# Frontend
VITE_API_URL=http://localhost:8000
```

`.env` real fica gitignored. Cada operador tem o seu local.

---

## 8. Como rodar localmente

### Backend
```bash
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\activate.bat     # Windows
# source .venv/bin/activate       # Linux/Mac
python -m pip install --upgrade pip
pip install -e ".[dev]"
python -m seed.seed_planilha     # popula SQLite a partir da planilha
python -m seed.seed_cenarios     # popula cenários
uvicorn app:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Abrir `http://localhost:5173`.

---

## 9. Pontos a validar durante o hackathon (🟠 DEPENDE)

| Item | Quem valida | Quando |
|---|---|---|
| Chave Gemini funciona com smoke call | Operador C | Checkpoint 0 |
| Encoding da planilha (UTF-8 com emojis) abre certo | Operador A | Checkpoint 1 |
| CORS configurado entre :5173 e :8000 | Operador A + D | Checkpoint 1 |
| Tailwind vs CSS modules | Operador D | Checkpoint 0 |
| Safety filter do Gemini não bloqueia perguntas legítimas | Operador C | Checkpoint 3 |
| Fallback do chat funciona quando força bloqueio | Operador C + D | Checkpoint 3 |

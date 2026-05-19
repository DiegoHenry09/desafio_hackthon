# Byst.end · frontend

Plataforma educativa de prevenção de assédio profissional. Esta etapa cobre apenas o **frontend desktop-first**, com **mocks locais** — sem backend, sem Gemini, sem banco.

> **Aviso editorial.** Tudo aqui é material **educativo**. Não substitui RH, jurídico, compliance ou canais oficiais. O chat **não recebe denúncias** e o sistema **não declara** que uma situação é ou não assédio.

---

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **CSS Modules / global tokens** — explicação abaixo
- Sem dependências de terceiros além de React/ReactDOM
- Mocks locais em `src/data/*.ts` (tipados via `src/types.ts`)
- Roteamento: hash-based simples em `src/hooks/useHashRouter.ts` — refresh-stable, sem `react-router` para manter o bundle leve

### Estilização — escolha justificada

O brief deixava escolher entre **Tailwind** e **CSS Modules**. Decidi por **CSS global com tokens (CSS variables) + classes utilitárias** como ponto único da verdade do design system, hospedado em `src/styles/global.css`.

Por quê:
- O sistema é pequeno (≈ 25 primitivas) e foi desenhado em `Proposta Byst.end.html` antes do código — porta direta sem reinventar nomes.
- Tailwind exigiria mais build/setup e dispersaria os tokens em strings de classes; CSS Modules per-component criaria múltiplas folhas para os mesmos primitivos (`.btn`, `.badge`, `.alert`).
- **Migração para CSS Modules** é trivial se o time preferir: cada componente já está isolado em arquivo próprio; basta criar `Component.module.css` ao lado e mover seletores específicos para lá. Os tokens em `global.css` continuam globais (é o padrão da arquitetura CSS Modules: tokens globais, layouts locais).

---

## Como rodar

```bash
cd frontend
npm install
npm run dev
```

A app abre em `http://localhost:5173`. Para build de produção:

```bash
npm run build
npm run preview
```

---

## Estrutura

```
frontend/
├── index.html                  # entrada Vite; carrega fontes Google
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── src/
    ├── main.tsx                # bootstrap React
    ├── App.tsx                 # router + provider de progresso
    ├── types.ts                # tipos compartilhados (Conteudo, Quiz, Cenario, Route, ...)
    ├── styles/
    │   └── global.css          # tokens + primitivas do design system
    ├── hooks/
    │   ├── useHashRouter.ts    # router refresh-stable
    │   └── useProgress.ts      # localStorage (byst.progress.v1)
    ├── data/                   # MOCKS — único lugar onde mexer para alterar conteúdo
    │   ├── taxonomia.ts        # tipos de violência, temas, camadas
    │   ├── mockConteudos.ts    # 9 micro-conteúdos
    │   ├── mockQuiz.ts         # 1 quiz com 3 perguntas
    │   ├── mockCenarios.ts     # 3 cenários do simulador
    │   ├── mockChat.ts         # thread inicial + respostas mockadas
    │   └── mockCanais.ts       # 6 canais de apoio
    ├── components/             # 16 componentes do spec
    │   ├── BannerCanaisOficiais.tsx
    │   ├── Header.tsx
    │   ├── Sidebar.tsx
    │   ├── Layout.tsx
    │   ├── AvisoEducativo.tsx
    │   ├── CardTipoViolencia.tsx
    │   ├── CardMicroconteudo.tsx
    │   ├── NanoCard.tsx
    │   ├── SearchBar.tsx
    │   ├── FilterChips.tsx
    │   ├── QuizQuestionCard.tsx
    │   ├── FeedbackEducativo.tsx
    │   ├── CenarioCard.tsx
    │   ├── RiskSignalList.tsx
    │   ├── ChatMessage.tsx
    │   ├── FonteCitada.tsx
    │   ├── SuggestedPrompts.tsx
    │   ├── ProgressCard.tsx
    │   └── Badges.tsx          # PolicyBadge, DraftBadge, MetaTag
    └── pages/
        ├── Home.tsx            # 3 portas + stats
        ├── Biblioteca.tsx      # filtros + cards
        ├── Detalhe.tsx         # micro-conteúdo + nano + fontes
        ├── Quiz.tsx            # 3 perguntas + feedback
        ├── Simulador.tsx       # 3 cenários
        ├── Chat.tsx            # chat mock com aviso fixo
        ├── Canais.tsx          # canais públicos + RH/SUS
        └── Progresso.tsx       # localStorage, sem ranking
```

---

## Telas (todas com banner educativo fixo)

| #  | Rota                | O que faz |
|----|---------------------|-----------|
| 01 | `#home`             | 3 portas (Aprender, Simular, Conversar), prévia da biblioteca, stats de progresso |
| 02 | `#biblioteca`       | Grid de cards, busca, filtros por tipo + tema |
| 03 | `#{"name":"detalhe","id":"c-001"}` | Conteúdo individual com nano-blocos, fonte, source_id |
| 04 | `#quiz`             | 3 perguntas, FeedbackEducativo após cada resposta |
| 05 | `#simulador`        | 3 cenários narrativos com escolha de conduta |
| 06 | `#chat`             | Chat com aviso fixo + suggested prompts + FonteCitada |
| 07 | `#canais`           | 6 canais públicos + reforço de "não é denúncia" |
| 08 | `#progresso`        | Progresso local com reset |

Veja `Proposta Byst.end.html` na raiz do projeto para o documento de design system + mapa de telas que originou esta implementação.

---

## Regras de conteúdo aplicadas no código

- Todo conteúdo de mock vem com `status: "draft"` e badge correspondente.
- Microcopy proibido (não aparece nos mocks nem no copy hard-coded): `denuncie`, `crime`, `vítima`, `isso é assédio`.
- Microcopy canônico: *sinal de atenção*, *conduta mais segura*, *risco ético/legal*, *vale observar contexto, frequência e impacto*.
- O componente `BannerCanaisOficiais` é montado uma única vez no `Layout` e aparece em **todas** as rotas.
- `ChatMessage` (papel `bot`) recebe `sources` e (quando aplicável) um bloco `reminder` apontando para canais oficiais.
- `usage_policy: "restricted"` nunca renderiza o corpo de um conteúdo — apenas o marcador (não há conteúdos restricted nos mocks atuais).

---

## Smoke test (após `npm run dev`)

1. **Home** abre, exibe 3 portas e stats.
2. Clicar em **Aprender** → vai para a Biblioteca; cards aparecem; filtros funcionam; busca filtra por texto.
3. Clicar em um card → abre o **Detalhe**; ao retornar via "Voltar à biblioteca", o conteúdo aparece como lido em `Progresso`.
4. **Quiz**: selecionar alternativa → "Ver leitura mais segura" → feedback aparece com fonte; navegar para a próxima.
5. **Simulador**: trocar entre os 3 cenários; ver feedback após escolher conduta; conteúdos relacionados aparecem.
6. **Chat**: aviso fixo no topo; clicar em uma suggested prompt → resposta mockada chega após delay com `FonteCitada` + lembrete.
7. **Canais**: 6 canais; 180 e 100 destacados em coral.
8. **Progresso**: contagem aumenta após uso; botão "Limpar progresso" zera o localStorage.
9. Recarregar a página em qualquer rota mantém a tela (hash router).
10. Banner coral aparece no topo em todas as telas.

---

## O que **não** está nesta etapa (intencional)

- Sem backend (`backend/` está fora do escopo deste frontend).
- Sem chamada real ao Gemini — `mockChatReplies` é fixo.
- Sem login, sem admin, sem ranking, sem denúncia.
- Sem responsividade mobile prioritária — layout não quebra em telas menores que 900px, mas a sidebar some abaixo desse breakpoint para evitar disaster (decisão consciente do escopo).

---

## Riscos atuais (design + implementação)

| Risco | Severidade | Mitigação atual |
|---|---|---|
| Usuário interpretar a plataforma como canal de denúncia | Alta | Banner coral persistente + aviso fixo no chat + aviso explícito na página de Canais |
| Chat mock soar como diagnóstico | Alta | Toda resposta tem `reminder` ou `FonteCitada`; texto canônico do mock |
| Conteúdo "restricted" vazar para usuário comum | Média | `CardMicroconteudo` mostra badge mas não há mock restricted; render só ocorre a partir do `mockConteudos` |
| Mobile quebrar em apresentação na banca | Baixa | Layout não-prioritário; testado entre 900–1440px |
| `npm install` falhar por versões antigas de Node | Baixa | Requer Node 18+; declarado pelo Vite 5 |

---

## Pendências (próximos passos)

1. **Integração com FastAPI**: substituir os `mock*.ts` por chamadas a um cliente HTTP. Cada arquivo de mock já exporta tipos prontos para esse swap.
2. **RAG real no Gemini**: o `ChatPage` está estruturado para receber mensagens com `sources`; basta trocar `mockChatReplies` por uma chamada que retorne `{ text, sources, reminder }`.
3. **Modo Testemunha**: variante do simulador. Estrutura de `Cenario` já suporta um campo `role`.
4. **Animações de transição** entre rotas, opcional (CSS já tem `.page-enter`).
5. **Internacionalização** e tema escuro como roadmap pós-MVP.
6. **Testes**: nenhum teste foi escrito (escopo de hackathon).

---

## Arquivos criados/alterados

Criados na raiz do projeto:
- `Proposta Byst.end.html` — documento de design (entregue antes do código)
- `Byst.end App.html` — protótipo navegável standalone (React inline, mesma UI), demonstrável **sem npm install**
- `app/` — estilos + JSX do protótipo standalone
- `frontend/` — projeto Vite + React + TS (este README)

Nenhum arquivo fora de `frontend/` (e dos dois HTMLs raiz) foi tocado. Documentação de governança intocada. JSON curado intocado.

---

## Sugestão de commit

```
feat(frontend): scaffolding inicial com mocks locais e 8 telas

- React 18 + Vite + TypeScript
- 16 componentes em src/components
- 8 páginas em src/pages
- Mocks em src/data/, tipados via src/types.ts
- Banner educativo persistente em todas as rotas
- localStorage para progresso (byst.progress.v1)
- Sem backend, sem Gemini, sem dados sensíveis inventados
- Proposta de design em /Proposta Byst.end.html
- Protótipo standalone em /Byst.end App.html (mesma UI sem npm)
```

Não fiz `git add` nem `git commit` — fica para revisão humana antes do push.

# 04 · Modelo de Desenvolvimento Assistido por IA

> **Status:** 🟢 DECIDIDO (regras de operação) · 🟡 vivo (aprendemos durante o hackathon)
> **Dono:** Operador D
> **Quem deve ler:** todos os operadores ANTES de abrir o Cursor

---

## 1. Por que este documento existe

O projeto Byst.end será desenvolvido com apoio forte de Cursor + Gemini.
Mas LLM gera código bonito com facilidade e gera **drift silencioso** com a mesma facilidade.
Este documento define **como o time opera a IA com segurança**.

**Regra central:**
> A IA não é dona do produto. É ferramenta de aceleração.
> Toda entrega passa por revisão humana + evidência + documentação.

---

## 2. O que muda quando o time é "operador de IA"

| Modelo tradicional | Modelo assistido por IA |
|---|---|
| Gargalo = digitação e conhecimento técnico | Gargalo = **qualidade do prompt + qualidade da revisão** |
| Risco = bug por código mal escrito | Risco = **bug por código bem escrito que faz a coisa errada** + drift de escopo |
| Métrica = linhas de código | Métrica = **checkpoints validados** |
| Cronograma = linear por hora | Cronograma = **por checkpoint** |
| Code freeze = "parem de digitar" | Code freeze = **3 estágios** (generation freeze → integration freeze → code freeze) |
| Documentação = fazer depois | Documentação = **insumo de entrada da IA** |

---

## 3. Os 4 operadores e suas fatias verticais

```
┌─────────────────────────────────────────────────────────────┐
│ OPERADOR A — INFRAESTRUTURA & BIBLIOTECA                    │
│ Domínio: setup repo, seed planilha, biblioteca de conteúdos │
│ Stack: FastAPI + SQLite + React (Biblioteca, Trilha)        │
│ Entregáveis principais:                                      │
│   - Repositório base com pyproject.toml, package.json       │
│   - SQLite + seed da planilha rodando                       │
│   - Endpoints /conteudos, /tipos-violencia, /busca          │
│   - Páginas /biblioteca, /trilha/:slug, /conteudo/:id       │
├─────────────────────────────────────────────────────────────┤
│ OPERADOR B — SIMULADOR DE CONDUTAS                          │
│ Domínio: cenários curados, lógica de feedback, telas        │
│ Stack: JSON + FastAPI + React (Simulador, Cenário)          │
│ Entregáveis principais:                                      │
│   - seed_cenarios.json com 3 cenários completos             │
│   - Endpoints /cenarios, /cenarios/{id}/responder           │
│   - Páginas /simulador, /cenario/:id                        │
├─────────────────────────────────────────────────────────────┤
│ OPERADOR C — CHAT COM IA + GUARDRAILS                       │
│ Domínio: integração Gemini, RAG, fallback, telas de chat    │
│ Stack: google-generativeai + FastAPI + React                │
│ Entregáveis principais:                                      │
│   - gemini_client.py com safety settings                    │
│   - rag.py com busca por LIKE                               │
│   - guardrails.py com intent filter + pós-proc              │
│   - Endpoint /chat                                          │
│   - Página /chat com suggested prompts + fontes citadas     │
├─────────────────────────────────────────────────────────────┤
│ OPERADOR D — INTEGRADOR & GOVERNANÇA                        │
│ Domínio: home, banner, navegação, docs vivos, validação     │
│ Stack: React (Home, Header, Banner) + Markdown              │
│ Entregáveis principais:                                      │
│   - Home com 3 portas + banner canais oficiais              │
│   - Componente BannerCanaisOficiais (fixo)                  │
│   - Atualização contínua de 07_DECISOES e 09_HANDOFF        │
│   - Smoke test ponta a ponta                                │
│   - Roteiro de apresentação                                 │
│   - Vídeo backup da demo                                    │
│   - "Guardião do escopo" (corta features que tentam entrar) │
└─────────────────────────────────────────────────────────────┘
```

**Atribuição aos trainees:** Operador D = quem tem perfil mais "produto/integrador" (cuida do todo). Operadores A/B/C = quem tem perfis equivalentes (cada um pega uma fatia).

---

## 4. Como operar o Cursor com segurança

### 4.1. Antes de cada prompt
1. ✅ Sei exatamente qual checkpoint estou tentando atingir
2. ✅ Tenho o prompt copiado de `05_PROMPTS_OPERACIONAIS.md` ou adaptei conscientemente
3. ✅ Sei quais arquivos esperar como saída
4. ✅ Sei qual evidência vou validar depois

### 4.2. Durante o prompt
- Cursor abre vários arquivos? **Pare e revise.** Pode estar fazendo coisa fora do escopo.
- Cursor sugere instalar nova lib? **Pare e questione.** Stack está congelada em `02_ARQUITETURA_TECNICA.md`.
- Cursor reescreve arquivo grande já existente? **Pare.** Pede pra fazer só a mudança incremental.
- Cursor faz commit/push automático? **Cancele.** Commits são manuais.

### 4.3. Depois do prompt
1. `git status` → vê o que foi criado/modificado
2. **Se aparecer arquivo não esperado** (utils, helpers, tests, configs novos) → deleta antes de continuar
3. Lê o `git diff` por inteiro — não confie no resumo
4. Roda o comando de validação do checkpoint
5. Captura evidência (screenshot, curl, log)
6. Se passou → commit pequeno com mensagem clara
7. Atualiza `09_HANDOFF.md` (1 linha do que mudou)

### 4.4. Quando travar
- **15min** tentando o mesmo problema com Cursor sem progresso → **PARE**
- Chame Operador D
- Operador D decide: continuar com IA, fazer manual, ou cortar a feature
- Não fique 1h no mesmo bug. Isso é o maior risco do hackathon.

---

## 5. Como dividir prompts por tarefa

### Regra de ouro: 1 prompt = 1 entregável testável

❌ **Errado:**
> "Crie o backend completo do projeto com endpoints de conteúdo, simulador e chat com IA."

✅ **Certo:**
> "Crie o endpoint GET /conteudos seguindo `02_ARQUITETURA_TECNICA.md` seção 4. Use SQLAlchemy 2.x style. Retorne lista paginada simples (top 50). Não crie testes. Não crie outros endpoints. Cole abaixo o conteúdo do arquivo `backend/routers/conteudos.py`."

### Estrutura padrão de prompt (template)

```markdown
## CONTEXTO
[O que existe no projeto, qual arquivo, qual padrão]

## INSTRUÇÃO
[O que fazer, especificamente]

## CRITÉRIOS DE ACEITE
[Como sei que terminou]

## NÃO FAÇA
[Limites explícitos]

## EVIDÊNCIA ESPERADA
[O que vou validar manualmente]
```

Todos os prompts operacionais em `05_PROMPTS_OPERACIONAIS.md` seguem essa estrutura.

---

## 6. Como evitar que a IA misture escopos

### Defesas em camada:

1. **`.cursorrules` na raiz** — define escopo global, rules absolutos
2. **Prompts focados** — 1 prompt = 1 arquivo (ou 1 mudança)
3. **`git diff` antes de commit** — humano vê o que entrou
4. **`02_ARQUITETURA_TECNICA.md`** — estrutura de pastas declarada; arquivo fora dela = drift
5. **`01_ARQUITETURA_PRODUTO.md`** — escopo declarado; feature fora dele = drift
6. **Operador D como guardião** — vê surgir feature nova → corta

### Sinais de drift:
- Aparece pasta nova (`utils/`, `lib/`, `common/`)
- Aparece arquivo de teste sem ter sido pedido
- Aparece nova dependência no `pyproject.toml` ou `package.json`
- Aparece middleware, decorator, abstração nova
- Aparece feature não documentada em `01_ARQUITETURA_PRODUTO.md`

**Ação em todos os casos:** desfazer (`git restore`), reformular prompt, tentar de novo.

---

## 7. Como revisar código gerado por IA

### Checklist de revisão (90 segundos por geração)

- [ ] **Arquivo no lugar certo?** (estrutura em `02_ARQUITETURA_TECNICA.md`)
- [ ] **Arquivo único ou múltiplo?** (a IA criou só o que pedi, ou inflou?)
- [ ] **Imports limpos?** (sem libs desnecessárias)
- [ ] **Type hints presentes?** (back) / **Props tipadas?** (front)
- [ ] **Nome de variáveis em PT-BR pra domínio + EN pra técnico?** (microconteudo_id vs user_id)
- [ ] **Comentários úteis ou ruído?** (a IA adora comentar trivialidades)
- [ ] **Tratamento de erro presente?** (HTTPException, try/except)
- [ ] **Validação de input?** (Pydantic schemas)
- [ ] **Está fazendo só o pedido?** (sem feature bônus)
- [ ] **Bate com a doc?** (não inventa rota, schema, conceito)

Se 2+ itens falharem → **descarta a geração** e refaz prompt mais focado.

---

## 8. Como validar cada entrega

Toda entrega passa por **3 portas**:

### Porta 1 — Geração
- IA gerou código
- Operador revisou (checklist acima)
- Arquivo está no lugar certo, sem inflação

### Porta 2 — Funcionamento
- Código roda sem erro de import/compilação
- Endpoint responde ao curl com formato esperado
- Componente renderiza sem erro no browser
- Captura evidência (curl, screenshot)

### Porta 3 — Integração
- Funciona com o resto do sistema (front consome o back, etc.)
- Não quebrou nada existente (`/health` ainda responde)
- Operador D ou par validou

Sem as 3 portas, entrega não é `VALIDADO`. No máximo `PARCIAL`.

---

## 9. Como registrar evidências

Evidências vão pra **`09_HANDOFF.md`** seção "Evidências por checkpoint".

Formato simples:
```markdown
### Checkpoint 1 — Esqueleto rodando
- ✅ FastAPI sobe: `uvicorn app:app --port 8000` → 200 em GET /health
  - Evidência: print do terminal
- ✅ Vite roda: `npm run dev` → tela em http://localhost:5173
  - Evidência: screenshot tela Home
- ✅ SQLite criado: `python -m seed.seed_planilha` → "60 microconteudos importados"
  - Evidência: print do terminal + `sqlite3 bystend.db ".tables"`
- 🟡 Banner canais oficiais: existe no Home, falta nas outras telas
  - Operador D: fazer no próximo bloco
```

**Sem evidência registrada = checkpoint não passou.**

---

## 10. Como documentar decisões

Quando o time decide algo durante o hackathon, vai pra **`07_DECISOES_TECNICAS.md`**.

Formato:
```markdown
### DEC-005 (12:34) — Trocar Tailwind por CSS modules
- **Contexto:** Tailwind exige build config que estava conflitando com Vite 5
- **Decisão:** usar CSS modules nativo do Vite
- **Por:** Operador D
- **Impacto:** componentes precisam ser ajustados (Operador A faz)
- **Estado:** 🟢 VALIDADO
```

**Decisões silenciosas não existem.** Se mudou algo de impacto, registra. Custa 30 segundos.

---

## 11. Como impedir que a IA invente conteúdo sensível

### Regra absoluta:
**A IA NÃO escreve texto educativo sobre assédio. A planilha é a verdade.**

Toda menção a "tipo de assédio", "como reagir", "consequências", "lei", "política" → vem **da planilha importada** (microconteúdos) ou de **canais oficiais reais**.

A IA pode:
- Gerar HTML/JSX que renderiza um microconteúdo
- Gerar query SQL que busca microconteúdos
- Gerar lógica de UI (clicar X → vai pra Y)
- Gerar copy de UI técnica ("Próximo conteúdo", "Voltar", etc.)

A IA NÃO pode:
- Gerar texto educativo sobre assédio "do zero"
- Reescrever microconteúdo "pra melhorar"
- Inventar exemplo de "frase de assediador" que não está na planilha
- Inventar "sinais de risco" que não estão na planilha
- Gerar texto pro system prompt do chat sem revisão humana

**Quando precisar de copy nova** (ex: feedback de cenário do simulador):
- Operador B escreve manualmente
- Baseado em microconteúdos da planilha (cita IDs)
- Operador D valida texto antes do commit
- Nunca pede pra Gemini "criar feedback educativo"

---

## 12. Como impedir que a IA altere arquivos fora do escopo

### No `.cursorrules`:
```
- Quando solicitado para modificar X, NÃO modifique Y a menos que seja
  estritamente necessário para a tarefa
- Se uma mudança parece exigir alterar arquivo fora do escopo, PARE e
  pergunte ao operador antes de prosseguir
- Sempre liste os arquivos que vai alterar ANTES de aplicar mudanças
- Nunca delete arquivos sem autorização explícita
```

### Na prática:
- Antes de aceitar mudança grande do Cursor, peça: "liste os arquivos que vai modificar"
- `git diff --stat` mostra escopo da mudança
- Se mudou 8 arquivos quando você esperava 2 → reverte e refaz

---

## 13. Commits pequenos

### Regra: 1 feature pequena = 1 commit

Exemplos bons:
- `feat(backend): adiciona endpoint GET /conteudos`
- `feat(seed): importa planilha para SQLite`
- `feat(front): adiciona página Biblioteca`
- `fix(chat): trata BlockedPromptError do Gemini`
- `docs(ia): atualiza frases proibidas`

Exemplos ruins:
- `feat: tudo` ❌
- `fix: bugs` ❌
- `wip` ❌

**Frequência:** commit a cada checkpoint pequeno, **no mínimo 1 a cada 30min**.
Em hackathon, perder código por falta de commit é falha grave.

---

## 14. Os 3 freezes (não apenas 1)

```
T+~5h ── 🔒 GENERATION FREEZE
        Não pede mais feature nova pra IA.
        Polimento manual, ajuste de copy, correção de bug visível.
        Operador D escreve docs finais.

T+~5h30 ─ 🔒 INTEGRATION FREEZE
        Não mexe mais em código.
        Demo gravada em vídeo.
        Roteiro de fala definido.
        Ensaio 1.

T+~5h45 ─ 🔒 CODE FREEZE (absoluto)
        Repositório intocável.
        Última leitura do roteiro.
        Respiração.
        Apresentação.
```

**Quem fura o freeze:** Operador D bate o martelo. Sem exceção.

---

## 15. Erros frequentes a evitar

| Erro | Como evitar |
|---|---|
| Operador opera Cursor sem ler o prompt operacional | Sempre copie de `05_PROMPTS_OPERACIONAIS.md` primeiro |
| Aceita primeira geração sem revisar diff | Sempre `git diff` antes de commit |
| Não testa o que gerou | Sempre roda comando de validação |
| Pede 5 features em 1 prompt | 1 prompt = 1 entregável |
| IA cria arquivos de teste sem pedir | `.cursorrules` proíbe + revisar `git status` |
| Discute prompts em vez de testar | Caixa-preta: prompt → resultado → valida |
| Não atualiza `09_HANDOFF.md` | Checklist no fim de cada checkpoint |
| Persiste em prompt que não funciona | 3 tentativas máximo, depois reformula ou pula |
| Reescreve coisa que já funciona "pra melhorar" | Não toca em código verde sem motivo claro |
| Operador D vira mais um codificador | D não opera Cursor pra feature; D valida, integra, documenta |

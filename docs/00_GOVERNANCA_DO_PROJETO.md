# 00 · Governança do Projeto Byst.end

> **Status do documento:** 🟢 DECIDIDO · Vivo durante o hackathon
> **Última atualização:** início do hackathon
> **Dono:** Operador D (Integrador & Governança)

---

## Modelo de desenvolvimento assistido por IA

Este projeto será desenvolvido com apoio de LLMs e Cursor.
Humanos continuam responsáveis por decisões, validação, revisão e aceite.
A IA pode propor, gerar e refatorar, mas **não pode** fechar decisões sensíveis,
inventar conteúdo, alterar escopo ou declarar validação sem evidência.

## Regra central

> **A IA não é dona do produto, da arquitetura nem da verdade sobre o tema.
> A IA é ferramenta de aceleração.
> Toda entrega precisa ser revisada por humano, validada por evidência e registrada em documentação.**

---

## 1. Metodologia de trabalho com LLMs

| Princípio | Aplicação prática |
|---|---|
| Código sozinho não é entrega | Entrega = código + evidência + validação + doc + riscos |
| LLM é parceira crítica, não executora cega | Operador questiona, valida, recusa quando necessário |
| Toda geração tem propósito declarado | Prompts seguem template `[CONTEXTO][INSTRUÇÃO][ACEITE][NÃO FAÇA][EVIDÊNCIA]` |
| Drift de escopo é inimigo principal | Revisar `git diff` antes de cada commit; remover arquivos não pedidos |
| Conteúdo sensível é imutável | A planilha original é a verdade. IA transporta, não reescreve |
| Em dúvida → perguntar | IA tem permissão de pedir esclarecimento antes de gerar |

---

## 2. Autoridade humana

A IA **pode**:
- Gerar código, schemas, queries, componentes, testes
- Propor refactor, alternativas, otimizações
- Discordar de uma instrução e explicar por quê
- Sinalizar risco, ambiguidade, escopo duvidoso
- Marcar saída como `PARCIAL` quando souber que está incompleta

A IA **não pode**:
- Fechar decisão de produto, arquitetura, escopo ou conteúdo sensível
- Fazer `git commit`, `git push`, deploy ou alteração estrutural sem autorização explícita
- Declarar entrega como "VALIDADO" — apenas humano valida
- Inventar política interna, lei, parecer jurídico, canal de denúncia ou promessa de confidencialidade
- Afirmar categoricamente "isso é assédio" / "isso não é assédio"
- Alterar conteúdo da planilha original (microconteúdos, nanoconteúdos, slogans)

---

## 3. Critérios de aceite

Uma entrega só é considerada **VALIDADA** quando tem **todos** estes:

- [ ] **Implementação:** código existe e roda
- [ ] **Evidência:** print, curl, log, video, ou screenshot que prova funcionamento
- [ ] **Validação humana:** Operador D ou par revisou e aprovou
- [ ] **Documentação:** decisões importantes registradas em `07_DECISOES_TECNICAS.md`
- [ ] **Riscos claros:** o que pode quebrar, o que ficou de fora, o que é frágil

Sem os 5, a entrega é no máximo `PARCIAL`.

---

## 4. Estados de validação

| Estado | Significado | Cor | Quem pode mover |
|---|---|---|---|
| **🟢 VALIDADO** | Implementado + evidência + revisado + documentado | Verde | Humano (Operador D ou par) |
| **🟡 PARCIAL** | Implementado mas falta evidência, teste ou validação | Amarelo | Quem implementou pode declarar |
| **🟠 DEPENDE** | Aguarda decisão externa (chave, validação humana, política) | Laranja | Quem está bloqueado |
| **🔴 NÃO VALIDADO** | Proposta de IA ainda sem aprovação humana | Vermelho | IA marca por padrão |
| **⚫ BLOQUEADO** | Travado por bug, API caída, decisão pendente | Preto | Quem está bloqueado declara |

Estados marcam itens em `07_DECISOES_TECNICAS.md`, `09_HANDOFF.md` e checklists dos checkpoints.

---

## 5. Regra de evidência

**Toda afirmação de "está funcionando" precisa de evidência verificável.**

Tipos aceitos de evidência:
- `curl http://localhost:8000/conteudos` retorna JSON com X registros
- Screenshot da tela com a feature funcionando
- Log do terminal mostrando comportamento esperado
- Gravação de tela rápida (Loom, OBS, qualquer coisa)
- Output de teste manual documentado em `09_HANDOFF.md`

**Não aceito como evidência:**
- "Funcionou aqui"
- "A IA disse que estava pronto"
- "O código parece certo"
- "Não testei mas é simples"

---

## 6. Regra de documentação

- `07_DECISOES_TECNICAS.md` é **vivo** — atualiza a cada decisão de impacto
- `09_HANDOFF.md` é **vivo** — atualiza ao fim de cada checkpoint
- Decisões silenciosas (sem registro) **não existem** — se mudou rota, schema, fluxo, comportamento → documenta
- A IA pode propor texto pra docs, mas humano valida antes do commit
- Documentação tem precedência sobre código: se código diverge de doc, **doc é a verdade**, código é bug

---

## 7. Regra de commit / push

- Commits são **pequenos** e **com escopo claro**
- Formato: `tipo(escopo): mensagem`
  - `feat(simulador): adiciona endpoint de resposta ao cenário`
  - `fix(chat): trata bloqueio do safety filter do Gemini`
  - `docs(ia): registra system prompt e frases proibidas`
- **IA nunca faz push automático**. Operador valida `git diff` antes de cada commit
- Antes de commitar: rodar `git status` e remover qualquer arquivo não pedido
- Branch `main` direto durante o hackathon (não há tempo pra PRs), mas cada commit precisa ter passado pela revisão do `git diff`

---

## 8. Regra de escopo

O MVP está definido em `01_ARQUITETURA_PRODUTO.md`. **Não se mexe.**

Qualquer feature/ideia nova durante o hackathon:
- Vai pra "ideias / próximos passos" em `01_ARQUITETURA_PRODUTO.md`
- **Não entra no escopo** mesmo que dê tempo
- Exceção: bug crítico que quebra demo
- Operador D é o "guardião do escopo" — se alguém quiser adicionar, Operador D decide

---

## 9. Regra para tema sensível

Esse projeto trata **prevenção de assédio**. Toda decisão de conteúdo passa por essas regras:

### O que NUNCA fazer
- Inventar política interna de empresa
- Citar artigo de lei específico
- Dar parecer jurídico
- Prometer confidencialidade ou anonimato que não existe de fato
- Reescrever microconteúdos da planilha
- Afirmar categoricamente "isso é assédio" / "isso não é"
- Culpabilizar vítima
- Banalizar, dramatizar, sensacionalizar
- Usar nome real de empresa, pessoa, caso público
- Criar ranking de "quem sofreu mais" ou gamificação competitiva
- Persistir conteúdo sensível do chat em banco (só em memória da sessão)

### O que SEMPRE fazer
- Linguagem acolhedora, em segunda pessoa, sem jargão jurídico
- Em situação grave: canalizar pra "canais oficiais da sua organização" (genérico)
- Para crise: Disque 180 (mulher), Disque 100 (direitos humanos), CVV 188 (saúde mental)
- Indicar fontes (microconteúdos consultados) toda vez que o chat responder
- Manter banner fixo "Esta é orientação educativa, não substitui RH/jurídico/canal oficial"
- Tratar exemplos como hipotéticos e declaradamente educativos

---

## 10. Como a equipe toma decisões

| Tipo de decisão | Quem decide | Como |
|---|---|---|
| Mudança de escopo | Operador D | Consulta os outros, decide rápido |
| Mudança de stack | Todos | Só com consenso, raríssimo durante hackathon |
| Conteúdo sensível (texto, copy) | Operador D + B (curador) | Validação dupla |
| Bug não crítico | Quem encontrou | Reporta no canal do time, corrige se for rápido |
| Bug crítico (quebra demo) | Operador D | Decide se conserta ou contorna |
| Decisão técnica local (nome de variável, etc.) | Quem está operando | Sem ritual |
| Commit em `main` | Quem operou | Mas valida `git diff` antes |

**Canal de comunicação do time:** decidir antes de começar (Slack, Discord, WhatsApp). Recomendação: 1 canal só, sem ramificação.

---

## 11. Checklist diária do Operador D

Durante o hackathon, Operador D faz a cada ~45min:

- [ ] Status de cada operador (1 frase): travado / fluindo / validando
- [ ] Algum operador está em loop com a IA? (gastando muitos prompts no mesmo problema)
- [ ] Algum operador está fazendo coisa fora do escopo?
- [ ] Algum arquivo não esperado apareceu no repo?
- [ ] `09_HANDOFF.md` está atualizado com o estado atual?
- [ ] Próximo checkpoint está claro pra todos?

---

## 12. Quando parar e pedir ajuda

Operadores devem **parar de pedir geração à IA** e procurar Operador D quando:

- Mesmo problema já recebeu 3+ tentativas de geração sem resolver
- A IA está gerando arquivos não pedidos repetidamente
- A IA está reescrevendo coisas que já funcionavam
- Aparece dúvida de conteúdo sensível (texto, copy, resposta do chat)
- Aparece dúvida sobre escopo (vale a pena fazer X?)
- O código gerado está grande demais pra revisar com confiança (>200 linhas em um arquivo)

**Regra:** 15min travado = parar e pedir ajuda. Não há prêmio por sofrer sozinho.

# 13 · Banco Rascunho de Quiz e Atividades

> **Status:** rascunho nao validado.  
> **Fonte:** `backend/seed/conteudo_normalizado.curated.preview.json`.  
> **Uso:** insumo para curadoria humana, produto e frontend. Nenhum item abaixo e conteudo final.

---

## 1. Objetivo do Banco de Atividades

Este banco transforma registros reais da base da Byst.end em propostas de experiencias educativas. Ele serve para orientar quiz, miniatividades e simulador sem inventar conteudo sensivel definitivo.

Toda atividade deste documento:

- usa fonte rastreavel do JSON curado;
- cita `source_id`, `source_row`, tipo de violencia, tema e `usage_policy`;
- fica com `status: rascunho`;
- precisa de validacao humana antes de entrar no produto.

---

## 2. Regras Gerais de Criacao

- Toda atividade deve ter fonte obrigatoria.
- Nao usar `source_id 197`.
- Nao usar registros com `usage_policy = blocked_until_review`.
- Para chat/RAG futuro, apenas `rag_allowed_with_guardrails` pode alimentar resposta automatica.
- Conteudos `exclude_from_rag` podem orientar biblioteca ou revisao humana, mas nao chat automatico.
- Exemplos devem ser hipoteticos, curtos e sem nomes reais.
- Feedback deve educar, nao acusar.
- Nao dar parecer juridico.
- Nao inventar lei, politica interna ou penalidade.
- Nao afirmar veredito sobre assedio, crime ou infracao.
- Nao transformar uma escolha errada em culpa da pessoa.
- Toda atividade deve manter `status: rascunho`.

---

## 3. Quiz de Compreensao

### QUIZ-001

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 140
- **source_row:** 2
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** O que e?
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** verificar compreensao geral sobre microagressoes como condutas sutis e repetidas.
- **Pergunta:** Qual alternativa melhor representa o cuidado central ao estudar microagressoes?
- **Alternativas:**
  - A. Observar apenas a intencao de quem falou.
  - B. Considerar tambem repeticao, contexto e impacto acumulado.
  - C. Ignorar quando a fala parecer pequena.
- **Alternativa recomendada/correta:** B
- **Feedback educativo:** A resposta recomendada considera que a base trata microagressoes como praticas que podem parecer sutis, mas cujo impacto se acumula. O foco educativo e reconhecer sinais e refletir sobre efeitos, sem julgar um caso individual.
- **Risco de uso:** minimizar o tema ou transformar sinais em acusacao automatica.
- **Validacao humana necessaria:** sim

### QUIZ-002

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 130
- **source_row:** 20
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Assedio moral x Demanda adequada.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** diferenciar cobranca de trabalho e sinais de conduta inadequada sem dar veredito.
- **Pergunta:** Em uma atividade educativa, qual criterio ajuda a diferenciar uma demanda profissional de uma situacao que merece atencao?
- **Alternativas:**
  - A. Se existe orientacao objetiva, respeito e relacao com o trabalho.
  - B. Se a pessoa ficou desconfortavel uma unica vez, sem avaliar contexto.
  - C. Se a cobranca veio de uma lideranca, automaticamente.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A alternativa recomendada evita conclusoes automaticas e considera contexto, respeito e finalidade da demanda. A plataforma deve ajudar a observar sinais, nao decidir casos concretos.
- **Risco de uso:** virar classificacao automatica de caso real.
- **Validacao humana necessaria:** sim

### QUIZ-003

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 196
- **source_row:** 22
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Silencio nao e concordancia.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** reforcar que ausencia de reacao nao deve ser tratada como aceitacao.
- **Pergunta:** Em uma situacao hipotetica de desconforto no trabalho, qual leitura e mais cuidadosa sobre o silencio de alguem?
- **Alternativas:**
  - A. Silencio sempre significa concordancia.
  - B. Silencio pode ter varias causas e merece leitura cuidadosa do contexto.
  - C. Silencio elimina a necessidade de observar sinais.
- **Alternativa recomendada/correta:** B
- **Feedback educativo:** A resposta recomendada preserva cuidado e evita conclusoes simplistas. A base orienta olhar para contexto, sinais e seguranca da pessoa envolvida.
- **Risco de uso:** pressionar a pessoa a se expor ou reagir.
- **Validacao humana necessaria:** sim

### QUIZ-004

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 77
- **source_row:** 30
- **Tipo de violencia:** ASSEDIO SEXUAL
- **Tema:** Flerte x Assedio sexual.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** trabalhar limites e consentimento em linguagem educativa.
- **Pergunta:** Qual elemento deve ser observado em uma interacao para avaliar se ha respeito aos limites?
- **Alternativas:**
  - A. Liberdade para aceitar, recusar e encerrar a interacao.
  - B. Insistencia ate a outra pessoa mudar de ideia.
  - C. Hierarquia como justificativa para continuar insistindo.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A resposta recomendada foca em liberdade, limite e respeito. O objetivo e educativo e nao substitui avaliacao de caso concreto.
- **Risco de uso:** criar julgamento sobre relato real ou cena explicita.
- **Validacao humana necessaria:** sim

### QUIZ-005

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 90
- **source_row:** 32
- **Tipo de violencia:** ASSEDIO SEXUAL
- **Tema:** Silencio nao e consentimento.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** reforcar que consentimento exige liberdade e clareza.
- **Pergunta:** Em uma atividade educativa sobre consentimento, qual alternativa e mais segura?
- **Alternativas:**
  - A. Interpretar silencio como autorizacao.
  - B. Considerar que consentimento precisa ser livre e respeitar limites.
  - C. Presumir que desconforto nao importa se nao houve fala direta.
- **Alternativa recomendada/correta:** B
- **Feedback educativo:** A alternativa recomendada evita pressupostos e reforca respeito aos limites. A resposta nao avalia caso individual.
- **Risco de uso:** soar como parecer sobre situacao real.
- **Validacao humana necessaria:** sim

### QUIZ-006

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 131
- **source_row:** 37
- **Tipo de violencia:** VIOLENCIA DIGITAL (BULLYING E CYBERBULLYING)
- **Tema:** O que e?
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** reconhecer que ambientes digitais tambem exigem responsabilidade.
- **Pergunta:** Qual principio melhor orienta interacoes em canais digitais de trabalho?
- **Alternativas:**
  - A. Regras de respeito tambem valem em ambientes digitais.
  - B. O ambiente digital elimina responsabilidade.
  - C. Mensagens em grupo nao geram impacto.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A resposta recomendada reforca que o cuidado com respeito e convivencia tambem se aplica a interacoes digitais.
- **Risco de uso:** virar politica interna nao fornecida pela base.
- **Validacao humana necessaria:** sim

### QUIZ-007

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 209
- **source_row:** 15
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** Mudancas de habitos.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** estimular reflexao sobre escuta e mudanca de comportamento.
- **Pergunta:** Qual atitude combina melhor com uma postura educativa diante de um relato de desconforto?
- **Alternativas:**
  - A. Escutar antes de minimizar ou corrigir.
  - B. Explicar rapidamente que a pessoa entendeu errado.
  - C. Tratar como exagero para encerrar a conversa.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A resposta recomendada favorece escuta e cuidado. O foco e aprendizagem de conduta respeitosa.
- **Risco de uso:** transformar feedback em julgamento moral da pessoa.
- **Validacao humana necessaria:** sim

### QUIZ-008

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 212
- **source_row:** 16
- **Tipo de violencia:** DISCRIMINACAO
- **Tema:** Mudancas de habitos.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** promover cuidado com generalizacoes e escuta de experiencias diferentes.
- **Pergunta:** Qual conduta favorece uma cultura mais respeitosa?
- **Alternativas:**
  - A. Evitar generalizacoes e escutar experiencias diferentes.
  - B. Usar estereotipos como atalho para entender pessoas.
  - C. Ignorar impactos quando a intencao parece boa.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A resposta recomendada reforca respeito, escuta e revisao de habitos de comunicacao.
- **Risco de uso:** criar exemplo discriminatorio novo sem validacao.
- **Validacao humana necessaria:** sim

### QUIZ-009

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 179
- **source_row:** 18
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** Prevencao na cultura.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** conectar prevencao a pratica cotidiana, nao apenas resposta a crise.
- **Pergunta:** Qual ideia melhor representa prevencao continua?
- **Alternativas:**
  - A. Agir apenas quando uma situacao fica grave.
  - B. Construir cultura de respeito no cotidiano.
  - C. Tratar pequenos sinais como irrelevantes.
- **Alternativa recomendada/correta:** B
- **Feedback educativo:** A resposta recomendada entende prevencao como pratica continua de cultura e convivencia.
- **Risco de uso:** prometer que cultura previne todos os casos.
- **Validacao humana necessaria:** sim

### QUIZ-010

- **Tipo:** quiz
- **Status:** rascunho
- **source_id:** 200
- **source_row:** 52
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Entenda seu papel.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Objetivo pedagogico:** reforcar responsabilidade coletiva e papel de testemunhas sem expor ninguem.
- **Pergunta:** Em uma situacao hipotetica observada por terceiros, qual postura tende a ser mais segura?
- **Alternativas:**
  - A. Apoiar com cuidado e considerar canais adequados.
  - B. Expor publicamente a pessoa afetada para resolver rapido.
  - C. Ignorar sempre para nao se envolver.
- **Alternativa recomendada/correta:** A
- **Feedback educativo:** A resposta recomendada equilibra apoio, cuidado e encaminhamento. O objetivo e proteger pessoas e evitar exposicao.
- **Risco de uso:** incentivar confronto direto sem avaliar seguranca.
- **Validacao humana necessaria:** sim

---

## 4. Miniatividades Educativas

### MINI-001 — Card "sinais de atencao"

- **Status:** rascunho
- **source_id:** 195
- **source_row:** 17
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Como comeca?
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** card "sinais de atencao"
- **Objetivo:** apresentar sinais observaveis de forma educativa.
- **Estrutura rascunho:** um card com 3 a 5 sinais extraidos da fonte, sem concluir caso concreto.
- **Risco:** virar checklist acusatorio.
- **Validacao humana necessaria:** sim

### MINI-002 — Reescrita respeitosa

- **Status:** rascunho
- **source_id:** 210
- **source_row:** 7
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** Frases comuns que sao Microagressoes.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** reescrita respeitosa
- **Objetivo:** treinar alternativas de comunicacao respeitosa.
- **Estrutura rascunho:** apresentar uma frase validada pela base ou uma frase neutra aprovada por humano e pedir uma reescrita respeitosa.
- **Risco:** criar novas frases ofensivas ou expor grupos protegidos.
- **Validacao humana necessaria:** sim

### MINI-003 — Mudanca de habito

- **Status:** rascunho
- **source_id:** 209
- **source_row:** 15
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** Mudancas de habitos.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** escolha da conduta mais segura
- **Objetivo:** reforcar escuta e reducao de minimizacao.
- **Estrutura rascunho:** tres opcoes de resposta a um relato hipotetico de desconforto, com feedback educativo.
- **Risco:** induzir julgamento sobre como a pessoa deveria reagir.
- **Validacao humana necessaria:** sim

### MINI-004 — Verdadeiro/falso educativo

- **Status:** rascunho
- **source_id:** 131
- **source_row:** 37
- **Tipo de violencia:** VIOLENCIA DIGITAL (BULLYING E CYBERBULLYING)
- **Tema:** O que e?
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** verdadeiro/falso educativo
- **Objetivo:** reforcar responsabilidade em ambientes digitais.
- **Estrutura rascunho:** 4 afirmacoes curtas sobre convivencia digital, todas derivadas da fonte.
- **Risco:** inventar regra interna de empresa.
- **Validacao humana necessaria:** sim

### MINI-005 — Checklist de proximos passos

- **Status:** rascunho
- **source_id:** 126
- **source_row:** 44
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Sofri assedio moral, e agora?
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** checklist de proximos passos
- **Objetivo:** organizar uma resposta educativa sem substituir canal oficial.
- **Estrutura rascunho:** checklist com acoes de registro cuidadoso, busca por canal oficial e apoio apropriado.
- **Risco:** soar como ordem juridica ou promessa de protecao.
- **Validacao humana necessaria:** sim

### MINI-006 — Modo testemunha

- **Status:** rascunho
- **source_id:** 95
- **source_row:** 51
- **Tipo de violencia:** ASSEDIO SEXUAL
- **Tema:** Todos cuidam de todos.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Formato:** modo testemunha
- **Objetivo:** orientar apoio cuidadoso sem expor a pessoa afetada.
- **Estrutura rascunho:** passo a passo educativo sobre observar seguranca, oferecer apoio e encaminhar a canais apropriados.
- **Risco:** incentivar confronto direto ou exposicao da pessoa.
- **Validacao humana necessaria:** sim

---

## 5. Simulador de Condutas

### SIM-001 — Limites em cobrancas e respeito

- **Status:** rascunho
- **source_id principal:** 130
- **source_row:** 20
- **source_ids relacionados:** 195, 196
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Assedio moral x Demanda adequada.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Contexto hipotetico curto:** Em uma equipe, uma pessoa recebe cobrancas frequentes. Parte das cobrancas vem com orientacao objetiva, mas outras ocorrem em tom de exposicao diante de colegas.
- **Pergunta:** O que voce faria para lidar de forma mais segura com essa situacao hipotetica?
- **Opcoes de acao:**
  - A. Ignorar todos os sinais e seguir sem registrar nada.
  - B. Observar contexto, registrar fatos de forma cuidadosa e buscar orientacao em canal adequado.
  - C. Responder publicamente no mesmo tom para encerrar o assunto.
- **Feedback por opcao:**
  - A. Pode deixar sinais importantes sem acompanhamento. O material fonte indica que contexto e repeticao merecem atencao educativa.
  - B. E a conduta mais segura no rascunho: combina observacao, registro e encaminhamento sem julgamento definitivo.
  - C. Pode aumentar exposicao ou risco de conflito. A plataforma deve orientar caminhos seguros, nao confronto automatico.
- **Sinais de atencao:** repeticao, exposicao publica, ausencia de orientacao objetiva, impacto no ambiente.
- **Conduta mais segura:** registrar contexto, buscar canal oficial e consultar conteudos relacionados.
- **Conteudos relacionados:** `source_id 130`, `195`, `196`
- **Riscos:** transformar o cenario em julgamento de caso real.
- **Validacao humana necessaria:** sim

### SIM-002 — Linguagem cotidiana e microagressoes

- **Status:** rascunho
- **source_id principal:** 210
- **source_row:** 7
- **source_ids relacionados:** 209, 140
- **Tipo de violencia:** MICROAGRESSOES
- **Tema:** Frases comuns que sao Microagressoes.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Contexto hipotetico curto:** Em uma conversa informal, uma pessoa percebe comentarios recorrentes que parecem elogios, mas deixam alguem desconfortavel.
- **Pergunta:** O que voce faria para promover uma conduta mais respeitosa?
- **Opcoes de acao:**
  - A. Repetir a fala para manter o clima descontraido.
  - B. Escutar o desconforto, evitar minimizar e propor uma forma mais respeitosa de comunicacao.
  - C. Expor publicamente a pessoa que falou, sem avaliar seguranca ou contexto.
- **Feedback por opcao:**
  - A. Pode reforcar a normalizacao de falas que merecem atencao.
  - B. E a conduta mais segura no rascunho: prioriza escuta e mudanca de habito.
  - C. Pode aumentar conflito e exposicao. A abordagem educativa deve ser cuidadosa.
- **Sinais de atencao:** repeticao, desconforto, minimizacao, fala tratada como brincadeira.
- **Conduta mais segura:** escutar, evitar minimizar e redirecionar para comunicacao respeitosa.
- **Conteudos relacionados:** `source_id 210`, `209`, `140`
- **Riscos:** criar novas frases ofensivas ou banalizar o tema.
- **Validacao humana necessaria:** sim

### SIM-003 — Testemunha e apoio cuidadoso

- **Status:** rascunho
- **source_id principal:** 200
- **source_row:** 52
- **source_ids relacionados:** 95, 204
- **Tipo de violencia:** ASSEDIO MORAL
- **Tema:** Entenda seu papel.
- **usage_policy:** `rag_allowed_with_guardrails`
- **Contexto hipotetico curto:** Uma pessoa presencia uma situacao desconfortavel em ambiente profissional e nao sabe se deve intervir imediatamente.
- **Pergunta:** O que voce faria como testemunha?
- **Opcoes de acao:**
  - A. Avaliar seguranca, apoiar com cuidado e considerar canais adequados.
  - B. Expor a pessoa afetada para que todos saibam o que aconteceu.
  - C. Ignorar sempre, porque testemunhas nao devem se envolver.
- **Feedback por opcao:**
  - A. E a conduta mais segura no rascunho: combina cuidado, apoio e encaminhamento sem exposicao.
  - B. Pode aumentar constrangimento ou risco para a pessoa afetada.
  - C. Pode manter ciclos de silencio. A participacao precisa ser cuidadosa e segura.
- **Sinais de atencao:** exposicao, assimetria de poder, silencio, desconforto visivel.
- **Conduta mais segura:** apoiar sem pressionar, registrar contexto com cuidado e indicar canais oficiais quando apropriado.
- **Conteudos relacionados:** `source_id 200`, `95`, `204`
- **Riscos:** incentivar confronto direto ou criar obrigacao de agir sem avaliar seguranca.
- **Validacao humana necessaria:** sim

---

## 6. Atividades Que Nao Devem Entrar no MVP

- Ranking, badges ou pontuacao sobre experiencias sensiveis.
- Quiz que pergunta se o usuario sofreu ou praticou algo.
- Cards do tipo "classifique se e assedio" com resposta definitiva.
- Simulacao explicita de violencia sexual.
- Cenario baseado em caso real, empresa real ou pessoa real.
- Atividades que usem `source_id 197`.
- Atividades que dependam de `exclude_from_rag` sem curadoria humana especifica.
- Chat automatico baseado em registros `library_only` ou `exclude_from_rag`.
- Diagnostico psicologico ou parecer juridico em qualquer formato.

---

## 7. Checklist de Validacao Humana

Antes de qualquer item virar conteudo final:

- [ ] Tem `source_id`, `source_row`, tipo de violencia, tema e `usage_policy`.
- [ ] Nao usa `source_id 197`.
- [ ] Nao usa registro `blocked_until_review`.
- [ ] O status foi revisado de `rascunho` para aprovado por humano.
- [ ] Nao afirma veredito sobre assedio, crime ou infracao.
- [ ] Nao da parecer juridico.
- [ ] Nao inventa lei, politica interna ou penalidade.
- [ ] Nao usa nome real de pessoa, empresa ou caso.
- [ ] Feedback educa sem acusar.
- [ ] Alternativas incorretas nao sao caricatas.
- [ ] Nao ha conteudo grafico ou sensacionalista.
- [ ] Indica conduta mais segura.
- [ ] Aponta conteudo relacionado.
- [ ] Mantem aviso educativo quando necessario.
- [ ] Foi revisado por responsavel humano de produto/conteudo.

# 15 · Plano MVP e Demo

> **Status:** plano de produto/delivery para demo do hackathon.  
> **Atuando como:** Agent Product/Delivery Architect.  
> **Escopo:** orientar frontend, backend, chat, quiz, simulador e apresentacao sem implementar codigo.  
> **Regra:** este plano nao cria atividade nova, nao altera JSON e nao substitui validacao humana final de conteudo sensivel.

---

## 1. Objetivo do MVP

O MVP demonstravel precisa provar que a Byst.end transforma uma base educativa sensivel em uma experiencia ativa, rastreavel e responsavel.

A demo deve deixar claro que a plataforma:

- organiza microconteudos reais da Byst.end em biblioteca e busca;
- preserva fonte, `source_id`, `usage_policy` e limites de uso;
- permite praticar entendimento com quiz ou miniatividade sem julgamento de caso real;
- simula decisoes em cenarios hipoteticos com feedback educativo;
- oferece chat como apoio contextual, com fontes e guardrails;
- encaminha situacoes sensiveis para canais oficiais sem virar canal de denuncia;
- evita vereditos como "isso e assedio" ou "isso e crime".

O MVP nao precisa provar escala, personalizacao, login, analytics, administracao de conteudo ou busca semantica. Precisa provar a tese educacional com responsabilidade.

---

## 2. Fluxo principal da demo

Jornada curta recomendada para apresentacao:

1. **Home:** apresentar proposta, aviso educativo e portas de entrada: Aprender, Praticar, Simular, Conversar e Canais.
2. **Biblioteca:** mostrar tipos de violencia, camadas educativas e cards de microconteudos vindos da base curada.
3. **Busca:** pesquisar termo simples, como `assedio`, `silencio`, `microagressoes` ou `testemunha`, mostrando resultados com fonte.
4. **Quiz ou miniatividade:** executar uma atividade curta aprovada para mostrar feedback educativo e sem veredito.
5. **Simulador:** abrir um cenario aprovado, escolher uma opcao e mostrar sinais de atencao, conduta mais segura e conteudos relacionados.
6. **Chat orientativo:** usar uma pergunta sugerida e mostrar resposta curta com fontes citadas, limites e aviso educativo.
7. **Fontes/limites:** destacar `source_id`, `usage_policy`, fontes consultadas e frase de nao substituicao.
8. **Encaminhamento seguro:** fechar em Canais Oficiais ou bloco de encaminhamento com orientacao generica para canais da organizacao e servicos de apoio quando aplicavel.

Tempo alvo: 4 a 6 minutos. Se a banca pedir detalhes tecnicos, abrir rapidamente o documento de IA responsavel e explicar guardrails.

### Diferencial demonstrável

Decisao central: o diferencial da demo e a **jornada da testemunha**. Essa escolha e mais forte para banca porque mostra responsabilidade coletiva, aprendizagem ativa, decisao segura, fontes rastreaveis e IA com limites. Nao depende de relato real, nao exige classificar se algo "e assedio" e conecta pratica, simulador, chat e canais em uma narrativa unica.

1. **Fluxo apresentado em 5-7 minutos**
   - 0:00-0:45 — Home: proposta de valor e aviso educativo. Frase de abertura: a plataforma transforma conteudo sensivel em aprendizagem ativa, sem virar canal de denuncia.
   - 0:45-1:30 — Biblioteca/Busca: pesquisar `testemunha` ou `canais`, abrir rapidamente conteudos relacionados e mostrar fonte/`source_id`.
   - 1:30-2:30 — Pratica principal: executar `QUIZ-010` para introduzir papel de testemunhas sem confronto direto.
   - 2:30-4:10 — Simulador principal: abrir `SIM-003 — Testemunha e apoio cuidadoso`, escolher a opcao de apoiar com cuidado e considerar canais adequados, mostrar feedback, sinais e conteudos relacionados.
   - 4:10-5:25 — Chat orientativo: fazer a pergunta ensaiada e mostrar resposta curta com fonte citada, limites e aviso educativo.
   - 5:25-6:00 — Fechamento: destacar fontes, guardrails, canais oficiais e a mensagem de responsabilidade.
   - 6:00-7:00 — Margem apenas se a banca pedir detalhe tecnico: citar `docs/03_IA_RESPONSAVEL.md`, RAG com fontes e fallback.

2. **Quiz/miniatividade que entra na demo**
   - Pratica principal: `QUIZ-010`, `source_id 200`, tema "Entenda seu papel.".
   - Motivo: reforca responsabilidade coletiva e prepara o simulador sem pedir relato pessoal.
   - Critica: `MINI-004` e seguro e rapido, mas pouco diferencial; parece verdadeiro/falso generico e nao prova a tese. `QUIZ-001` e bom para conceito, mas para em definicao. `MINI-006` e forte, mas duplica o simulador; fica como reserva se a equipe preferir mostrar miniatividade em vez de quiz.

3. **Cenario de simulador que entra na demo**
   - Cenario principal: `SIM-003 — Testemunha e apoio cuidadoso`.
   - Fonte principal: `source_id 200`.
   - Fontes relacionadas: `source_id 95` e `source_id 204`.
   - Conduta a demonstrar: avaliar seguranca, apoiar sem pressionar, registrar contexto com cuidado e considerar canais oficiais quando apropriado.
   - Linguagem obrigatoria: "conduta mais segura", nunca "resposta correta", "veredito" ou "isso e assedio".

4. **Pergunta feita ao chat**
   - "Sou testemunha de uma situacao desconfortavel. Como posso apoiar sem expor a pessoa afetada?"
   - A pergunta e segura para demo porque evita nome real, nao pede diagnostico, nao pede julgamento juridico e testa exatamente o guardrail de orientar sem expor.

5. **`source_id` que sustentam cada parte**
   - Biblioteca/Busca: `95`, `200`, `204`.
   - Pratica: `QUIZ-010` sustentado por `source_id 200`.
   - Simulador: `SIM-003` sustentado por `source_id 200`, com relacionados `95` e `204`.
   - Chat: fonte principal `source_id 95`; fontes de apoio `200` e `204` apenas com guardrails e linguagem de sinais.
   - Responsabilidade/limites: `docs/03_IA_RESPONSAVEL.md`, especialmente papel da IA, fontes citadas, fallback e aviso fixo.

6. **Fonte que o chat deve citar**
   - Fonte principal obrigatoria: `source_id 95`, `source_row 51`, tema "Todos cuidam de todos.", tipo "Assedio sexual", camada 7, `usage_policy = rag_allowed_with_guardrails`.
   - Fonte de apoio aceitavel: `source_id 200`, tema "Entenda seu papel.", apenas se a resposta suavizar imperativos e evitar obrigacao juridica.
   - Fonte de apoio aceitavel: `source_id 204`, tema "Responsabilidade comeca na percepcao.", apenas como reforco de cultura e percepcao, sem classificar caso concreto.

7. **Mensagem de responsabilidade mostrada**
   - Texto canonico: "Esta plataforma e educativa. Nao substitui RH, juridico, compliance ou canal oficial de denuncia. Em situacao de risco, acione: Disque 180 (mulher), Disque 100 (direitos humanos), CVV 188 (saude mental)."
   - Onde mostrar: Home, topo do Chat, feedback do simulador e fechamento em Canais.

8. **O que cortar se passar de 6 minutos**
   - Cortar primeiro: detalhe de biblioteca, mantendo apenas busca e fonte visivel.
   - Cortar segundo: `QUIZ-010`, se o simulador ja estiver cobrindo pratica e decisao.
   - Cortar terceiro: chat ao vivo com Gemini; usar fallback ou resposta ensaiada com fontes.
   - Nunca cortar: aviso educativo, fontes/`source_id`, `SIM-003` e Canais.
   - Nao substituir por `SIM-002` ou `MINI-002`: ambos exigem curadoria extra e podem reproduzir ou criar microagressoes.

---

## 3. Funcionalidades que entram no MVP

### Obrigatorio

- Aviso educativo fixo: a plataforma nao substitui RH, juridico, compliance ou canal oficial.
- Biblioteca consumindo conteudos curados e ocultando `blocked_until_review`.
- Busca simples por palavra-chave e filtros basicos.
- Preservacao de `source_id`, `source_row`, `source_sheet` e `usage_policy`.
- Respeito a `usage_policy`: RAG automatico apenas com `rag_allowed_with_guardrails`.
- Feedback educativo sem acusacao, score sensivel ou veredito.
- Pagina ou bloco de canais oficiais.
- Handoff e docs atualizados com evidencias, riscos e pendencias.

### Entra no MVP

- Home com narrativa clara do produto.
- Biblioteca de microconteudos por tipo de violencia/camada.
- Busca por tema, nanoconteudos e microconteudo.
- Quiz de compreensao com atividades aprovadas.
- Miniatividade simples aprovada.
- Simulador com 1 a 2 cenarios aprovados.
- Chat orientativo com prompts sugeridos, fontes citadas, guardrails e fallback.
- Fontes/limites visiveis na experiencia.

### Entra se der tempo

- Mais quizzes aprovados alem do fluxo principal.
- `MINI-001` apos curadoria dos sinais finais.
- `MINI-005` apos ajuste de linguagem para nao soar como ordem juridica.
- `SIM-002` apos revisao humana do texto para evitar criacao ou reproducao de frases ofensivas.
- Progresso local simples em `localStorage`.
- Modo Testemunha como destaque visual na Home.
- Recomendacao de proximo conteudo.

### Pos-MVP

- Reescrita respeitosa como atividade aberta.
- Trilhas por perfil: colaborador, lideranca, RH/compliance.
- Busca semantica com embeddings.
- Painel administrativo de conteudo.
- Analytics anonima com consentimento.
- Personalizacao de trilha.
- Acessibilidade ampliada, como libras e audiodescricao.
- App mobile nativo.

### Fora de escopo

- Canal de denuncia.
- Parecer juridico.
- Diagnostico psicologico.
- Login/autenticacao.
- Ranking, badges ou competicao sobre sofrimento/violencia.
- Score de risco ou probabilidade de assedio.
- Mapa de "isso e assedio".
- Persistencia longa de relatos sensiveis do chat.
- Uso de casos reais, nomes reais, empresas reais ou casos publicos.
- Geração automatica de cenarios a partir do Excel sem curadoria.
- Uso de `source_id 197`.

---

## 4. Atividades aprovadas para demo

### Quizzes que entram

| ID | `source_id` | Motivo de entrar | Risco | Validacao necessaria |
|---|---:|---|---|---|
| QUIZ-001 | `140` | Conceito basico de microagressoes; claro, curto e bom para abrir pratica. | Minimizar o tema ou transformar sinais em acusacao automatica. | Revisao humana de copy final e fonte exibida. |
| QUIZ-002 | `130` | Mostra a diferenca entre demanda adequada e sinais de atencao sem veredito. | Virar classificacao automatica de caso real. | Aviso de que nao avalia caso concreto. |
| QUIZ-006 | `131` | Demonstra responsabilidade em ambiente digital com baixo custo de implementacao. | Virar politica interna inventada. | Manter como principio geral, nao regra da empresa. |
| QUIZ-010 | `200` | Reforca papel de testemunhas e conecta com simulador/chat. | Incentivar confronto direto sem avaliar seguranca. | Revisao para destacar cuidado, canais e nao exposicao. |

### Quizzes de reserva

| ID | `source_id` | Motivo de reserva | Risco | Validacao necessaria |
|---|---:|---|---|---|
| QUIZ-003 | `196` | Bom para complementar leitura de silencio e contexto. | Pressionar pessoa a se expor. | Evitar copy que cobre reacao da pessoa afetada. |
| QUIZ-004 | `77` | Util para tema de limites e consentimento. | Tema sexual sensivel pode soar como avaliacao de relato. | Usar apenas com aviso fixo e texto revisado. |
| QUIZ-005 | `90` | Alto valor educativo sobre consentimento. | Pode parecer parecer sobre situacao real. | Revisao humana e linguagem de sinais. |
| QUIZ-007 | `209` | Bom para escuta e mudanca de habito. | Julgamento moral da pessoa. | Manter tom educativo. |
| QUIZ-008 | `212` | Bom para respeito e reducao de generalizacoes. | Criar exemplo discriminatorio novo. | Nao adicionar exemplos novos no front. |
| QUIZ-009 | `179` | Bom fechamento sobre prevencao continua. | Prometer que cultura previne todos os casos. | Evitar promessa de resultado. |

### Miniatividades que entram

| ID | `source_id` | Motivo de entrar | Risco | Validacao necessaria |
|---|---:|---|---|---|
| MINI-004 | `131` | Verdadeiro/falso educativo simples, rapido e visual. | Inventar regra interna de empresa. | Usar afirmacoes derivadas da fonte e aviso educativo. |
| MINI-006 | `95` | Modo testemunha tem alto valor para demo e responsabilidade coletiva. | Incentivar confronto direto ou exposicao da pessoa afetada. | Revisao para destacar seguranca, apoio sem pressionar e canais adequados. |
| MINI-003 | `209` | Boa atividade de escolha segura sobre escuta e nao minimizacao. | Induzir julgamento sobre como alguem deveria reagir. | Manter feedback sem culpa e sem acusacao. |

### Miniatividades de reserva

| ID | `source_id` | Motivo de reserva | Risco | Validacao necessaria |
|---|---:|---|---|---|
| MINI-001 | `195` | Pode virar bom card de sinais de atencao. | Checklist acusatorio ou prova automatica. | Curar 3 a 5 sinais finais e incluir aviso de nao-veredito. |
| MINI-005 | `126` | Checklist ajuda encaminhamento seguro. | Soar como ordem juridica ou promessa de protecao. | Trocar imperativos por "voce pode considerar". |
| MINI-002 | `210` | Valor pedagogico existe, mas demanda curadoria alta. | Reproduzir ofensas ou expor grupos protegidos. | Pos-MVP, salvo frase neutra validada por humano. |

### Cenarios que entram

| ID | `source_id` principal | Relacionados | Motivo de entrar | Risco | Validacao necessaria |
|---|---:|---|---|---|---|
| SIM-003 | `200` | `95`, `204` | Melhor cenario para demo: testemunha, apoio cuidadoso, registro e canais. | Criar obrigacao de agir ou incentivar exposicao. | Revisao humana do texto final e aviso educativo. |
| SIM-001 | `130` | `195`, `196` | Mostra decisao segura em cobrancas e respeito sem julgar caso real. | Virar veredito sobre assedio moral. | Usar "conduta mais segura", nao "resposta correta". |

### Cenario de reserva

| ID | `source_id` principal | Relacionados | Motivo de reserva | Risco | Validacao necessaria |
|---|---:|---|---|---|---|
| SIM-002 | `210` | `209`, `140` | Bom tema, mas exige mais cuidado com linguagem. | Criar/reproduzir frases ofensivas e banalizar microagressoes. | Manter contexto generico e revisar por humano antes da demo. |

---

## 5. O que o frontend precisa implementar

Telas minimas:

- Home com proposta de valor, aviso educativo e entradas para Biblioteca, Quiz/Praticar, Simulador, Chat e Canais.
- Biblioteca com lista de tipos/camadas e cards de microconteudos.
- Busca com campo de texto, filtros simples e lista de resultados.
- Detalhe de microconteudo com nanoconteudos, texto completo, fonte e `usage_policy` em modo tecnico se necessario.
- Quiz/Praticar com uma pergunta por vez, alternativas, feedback educativo e fonte.
- Miniatividade com verdadeiro/falso ou modo testemunha simples.
- Simulador com lista de cenarios, contexto, opcoes e feedback por escolha.
- Chat com prompts sugeridos, mensagens, fontes citadas, fallback visivel e aviso fixo.
- Canais/Encaminhamento com texto generico e servicos permitidos pela governanca.

Componentes minimos:

- `BannerCanaisOficiais` ou equivalente em todas as telas.
- `AvisoEducativo` para nao substituicao de RH/juridico/compliance.
- Card de microconteudo.
- Busca/filtros.
- Card de quiz.
- Feedback educativo.
- Card de cenario.
- Lista de sinais de atencao.
- Fonte citada/conteudos relacionados.
- Prompt sugerido do chat.

Regras para o frontend:

- O frontend e thin client: exibe dados, avisos, fontes e feedbacks curados.
- Nao calcula score de assedio, gravidade pessoal ou final sensivel.
- Nao decide se algo e assedio/crime.
- Nao hardcoda eventos sensiveis fora de configuracao/dados curados.
- Nao coleta relato pessoal como requisito para quiz, miniatividade ou simulador.

---

## 6. O que o backend precisa expor

### Endpoints ja existentes

- `GET /health`
- `GET /conteudos`
- `GET /conteudos/{id}`
- `GET /tipos-violencia`
- `GET /busca?q=...`

Esses endpoints sustentam Biblioteca, Busca, Detalhe, fontes e parte do RAG por busca simples.

### Endpoints ainda necessarios para MVP completo

Quiz/atividades:

- `GET /atividades/quiz`
- `GET /atividades/quiz/{id}`
- `POST /atividades/quiz/{id}/responder`

Miniatividades:

- `GET /atividades/mini`
- `GET /atividades/mini/{id}`
- `POST /atividades/mini/{id}/responder`

Simulador:

- `GET /simulador/cenarios`
- `GET /simulador/cenarios/{id}`
- `POST /simulador/cenarios/{id}/responder`

Chat:

- `POST /chat`
- `GET /chat/prompts-sugeridos` ou prompts estaticos no front, se o tempo apertar.

Canais:

- `GET /canais` ou conteudo estatico no frontend, se o tempo apertar.

Regras para endpoints futuros:

- Routers finos, sem regra de jogo sensivel.
- Use cases orquestram fluxo e validacao.
- Repositories sao a unica camada que toca banco.
- Atividades devem vir de seed/configuracao, nao de regra hardcoded em router.
- Chat deve filtrar `usage_policy`, usar apenas `rag_allowed_with_guardrails` no RAG e retornar fontes.

---

## 7. Como o chat entra na demo

O chat entra como apoio educacional, nao como conselheiro juridico, psicologico ou canal de denuncia.

Uso recomendado na demo:

- apresentar aviso fixo antes da conversa;
- usar uma pergunta sugerida em vez de relato livre sensivel;
- mostrar resposta curta com fontes citadas;
- apontar conteudos relacionados;
- fechar com limite: "orientacao educativa, nao substitui RH, juridico, compliance ou canal oficial".

Perguntas sugeridas:

- "O que sao microagressoes?"
- "Como diferenciar demanda adequada de uma situacao que merece atencao?"
- "Sou testemunha de uma situacao desconfortavel. O que posso considerar?"
- "Como agir sem expor a pessoa afetada?"
- "Como a plataforma usa fontes da Byst.end?"
- "Quais limites esta orientacao tem?"

Uso de `usage_policy`:

- `rag_allowed_with_guardrails`: pode alimentar o RAG do chat.
- `library_only`: pode aparecer como leitura, nao como contexto automatico.
- `exclude_from_rag`: fica fora do contexto automatico; pode ser indicado como leitura com cuidado.
- `blocked_until_review`: nao aparece no produto nem no chat.

Fallback obrigatorio:

- Se Gemini falhar, bloquear ou demorar, a demo deve responder com fallback baseado em busca: "encontrei materiais relacionados" + lista de fontes + aviso educativo.
- A demo nao pode depender de resposta perfeita da IA ao vivo.

Decisao de modelo para demo:

- Auditoria comparativa registrada em `docs/16_AUDITORIA_MODELOS_CHAT.md` recomenda `gemini-3.1-flash-lite` para o chat da demo.
- A escolha foi feita por estabilidade, aderencia aos guardrails, fontes corretas e menor risco de timeout, nao por ser o modelo mais poderoso.
- Estrategia da demo: Gemini ao vivo com fallback automatico obrigatorio.
- Modelo reserva: `gemini-2.5-flash`.
- `gemini-3.1-pro-preview` nao e recomendado para a demo com o timeout atual, pois caiu em fallback por timeout nos cenarios de dominio.

Frases que o chat deve evitar:

- "Isso e assedio."
- "Isso e crime."
- "Voce foi vitima."
- "A empresa e obrigada a..."
- "Voce deve processar."
- "Posso garantir confidencialidade."

---

## 8. Discurso de responsabilidade para a banca

A Byst.end nao e canal de denuncia, nao substitui RH, juridico, compliance ou apoio especializado, e nao julga casos individuais.

O produto usa materiais curados da Byst.end como fonte educativa. Cada resposta ou atividade relevante aponta para conteudos relacionados e preserva rastreabilidade por `source_id` e `usage_policy`.

A IA atua como orientador educacional com guardrails: usa fontes, evita parecer juridico, evita diagnostico, evita vereditos como "isso e assedio" ou "isso e crime", e redireciona situacoes graves para canais oficiais.

O diferencial nao e automatizar julgamentos. O diferencial e transformar conteudo sensivel em aprendizagem ativa, com limites claros e responsabilidade.

---

## 9. Riscos que podem derrubar a demo

- Frontend nao integrar a tempo com backend e depender de dados locais divergentes.
- Chat falhar por API key, timeout, cota, rede ou safety filter.
- Gemini bloquear resposta sobre tema sensivel.
- Conteudo sensivel mal formulado parecer veredito juridico ou acusacao.
- Escopo grande demais dispersar o time entre biblioteca, quiz, simulador, chat e visual.
- Ausencia de ensaio causar perda de tempo navegando ou explicando detalhes tecnicos.
- `source_id 197` aparecer por erro em biblioteca, RAG ou atividade.
- Frontend calcular score, ranking ou "risco de assedio" por engano.
- Seed nao ter sido executado no ambiente da demo.
- Banco local estar vazio ou apontando para caminho errado.
- Falta de fallback visual para chat quebrar a narrativa.
- Documentos e apresentacao divergirem do que o produto mostra.

---

## 10. Plano de corte

Se o tempo apertar, cortar nesta ordem:

1. `MINI-002`, reescrita respeitosa.
2. `MINI-005`, checklist de proximos passos.
3. `MINI-001`, card de sinais, se nao estiver curado.
4. `SIM-002`, microagressoes em linguagem cotidiana.
5. Quizzes sensiveis sobre consentimento (`QUIZ-004`, `QUIZ-005`) se o aviso educativo e a copy ainda nao estiverem maduros.
6. Progresso em `localStorage`.
7. Recomendacao de proximo conteudo.
8. Modo Testemunha como entrada visual separada.
9. Chat com Gemini ao vivo, mantendo fallback por busca e fontes.

Preservar a qualquer custo:

- Home com aviso educativo.
- Biblioteca + Busca funcionando.
- Pelo menos 3 quizzes aprovados ou 1 quiz + 1 miniatividade.
- Pelo menos 1 cenario de simulador aprovado, preferencialmente `SIM-003` ou `SIM-001`.
- Fontes/limites visiveis.
- Canais/Encaminhamento seguro.
- Discurso de responsabilidade.

Demo minima aceitavel:

Home -> Biblioteca -> Busca -> Quiz curto -> Simulador `SIM-003` -> Canais. Chat pode aparecer como fallback/roteiro se a IA falhar.

---

## 11. Checklist antes da apresentacao

- [ ] Backend rodando.
- [ ] Frontend rodando.
- [ ] Seed executado.
- [ ] `GET /health` retorna `ok`.
- [ ] `GET /conteudos` retorna registros.
- [ ] Busca funcionando com pelo menos 2 termos ensaiados.
- [ ] Biblioteca abre conteudo com fonte.
- [ ] Quiz ou miniatividade testado do inicio ao feedback.
- [ ] Simulador testado com pelo menos 1 cenario aprovado.
- [ ] Chat testado com pergunta sugerida segura.
- [ ] Chat com fallback pronto caso Gemini falhe.
- [ ] `GEMINI_MODEL` configurado como `gemini-3.1-flash-lite` no ambiente local da demo, sem expor chave.
- [ ] Fontes citadas aparecem na resposta do chat ou no fallback.
- [ ] Aviso educativo aparece na Home, Chat e feedbacks sensiveis.
- [ ] Canais/Encaminhamento seguro acessivel.
- [ ] `source_id 197` nao aparece no produto.
- [ ] Nenhuma tela usa "isso e assedio" ou "isso e crime" como veredito.
- [ ] Docs atualizados.
- [ ] Handoff atualizado.
- [ ] `git status` revisado.
- [ ] Commit/push feitos quando o Operador autorizar.
- [ ] Video backup gravado, se possivel.
- [ ] Roteiro de fala ensaiado em ate 6 minutos.

---

## 12. Decisoes finais de MVP para demo

- A demo deve priorizar uma jornada unica, curta e ensaiada.
- O nucleo do MVP e Biblioteca + Busca + Pratica + Simulador + Chat/Fallback + Canais.
- Atividades principais: `QUIZ-001`, `QUIZ-002`, `QUIZ-006`, `QUIZ-010`, `MINI-004`, `MINI-006`, `MINI-003`, `SIM-003` e `SIM-001`.
- Reserva: demais quizzes aprovados, `MINI-001`, `MINI-005` e `SIM-002` apos ajustes.
- Cortado do MVP: `MINI-002`, score/ranking, canal de denuncia, parecer juridico, login, admin e personalizacao.
- O chat deve ser demonstrado como orientador educativo com fontes, nao como juiz de situacoes reais.
- Para a demo, o chat deve usar `gemini-3.1-flash-lite` com fallback automatico; se houver instabilidade, demonstrar fallback com fontes em vez de improvisar resposta sensivel ao vivo.

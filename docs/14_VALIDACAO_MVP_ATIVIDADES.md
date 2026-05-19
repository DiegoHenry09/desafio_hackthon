# 14 · Validacao MVP de Atividades

> **Status:** revisao editorial/QA para MVP.  
> **Atuando como:** Agent Education/QA + Sensitive Content Reviewer.  
> **Escopo:** classificar rascunhos de `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md` para uso no MVP do hackathon.  
> **Importante:** `APROVADO_MVP` neste documento significa recomendado para entrar no MVP apos aceite humano do time. Nao substitui validacao humana final.

---

## 1. Documentos e regras consultados

- `docs/00_GOVERNANCA_DO_PROJETO.md`
- `docs/03_IA_RESPONSAVEL.md`
- `docs/11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`
- `docs/12_MATRIZ_CONTEUDO_E_ATIVIDADES.md`
- `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`
- `backend/seed/conteudo_normalizado.curated.preview.json`

Regras aplicadas:

- atividade precisa estar ancorada em `source_id` real;
- atividade nao pode usar `source_id 197`;
- atividade nao pode afirmar "isso e assedio";
- atividade nao pode afirmar "isso e crime";
- atividade nao pode dar parecer juridico;
- atividade nao pode acusar o usuario;
- atividade precisa ser clara para demo;
- atividade precisa ser simples de implementar;
- atividade precisa ter valor educacional;
- atividade precisa respeitar `usage_policy`.

---

## 2. Evidencia de rastreabilidade

Os `source_id` usados em `docs/13` foram conferidos contra `backend/seed/conteudo_normalizado.curated.preview.json`.

Resultado:

- Todos os `source_id` usados nos quizzes, miniatividades e cenarios existem no JSON curado.
- Nenhuma atividade usa `source_id 197`.
- Nenhuma atividade usa registro `blocked_until_review`.
- Os `source_id` usados nas atividades revisadas estao com `usage_policy = rag_allowed_with_guardrails`.
- Alguns registros possuem `needs_human_review = true` por conteudo juridico ou tema sensivel, mas continuam permitidos para uso com guardrails.

Observacao: o JSON nao foi alterado nesta revisao.

---

## 3. Tabela de validacao dos 10 quizzes

| ID | Fonte | Classificacao | Motivo | Ajuste antes de implementar |
|---|---:|---|---|---|
| QUIZ-001 | `140` | APROVADO_MVP | Claro, simples, baixo risco relativo e bom valor educacional sobre microagressoes. | Usar "alternativa recomendada" em vez de linguagem competitiva de acerto, se possivel. |
| QUIZ-002 | `130` | APROVADO_MVP | Diferencia demanda profissional e sinais de atencao sem veredito. Bom para demo. | Manter aviso de que nao avalia caso concreto. |
| QUIZ-003 | `196` | APROVADO_MVP | Trabalha leitura cuidadosa do silencio sem acusar usuario ou concluir assedio. | Evitar qualquer copy que pressione a pessoa a se expor. |
| QUIZ-004 | `77` | APROVADO_MVP | Ensina limites e consentimento com formulacao educativa. | Exibir com aviso fixo por tema sexual sensivel. |
| QUIZ-005 | `90` | APROVADO_MVP | Valor educacional alto sobre consentimento; nao afirma crime nem assedio no feedback. | Evitar transformar resposta em avaliacao de relato real. |
| QUIZ-006 | `131` | APROVADO_MVP | Simples, demonstravel e conectado a convivencia digital. | Nao apresentar como politica interna da empresa. |
| QUIZ-007 | `209` | APROVADO_MVP | Incentiva escuta e nao minimizacao; bom para pratica rapida. | Manter tom educativo, sem julgamento moral da pessoa. |
| QUIZ-008 | `212` | APROVADO_MVP | Reforca respeito, escuta e reducao de generalizacoes. | Nao criar exemplos novos com grupos protegidos no front. |
| QUIZ-009 | `179` | APROVADO_MVP | Bom para fechamento de trilha: prevencao continua e cultura. | Nao prometer que cultura elimina todos os riscos. |
| QUIZ-010 | `200` | APROVADO_MVP | Ensina papel de testemunhas com cuidado e encaminhamento. | Nao incentivar confronto direto sem avaliar seguranca. |

Resumo: os 10 quizzes podem entrar no MVP como banco inicial, desde que o front mantenha aviso educativo, fonte rastreavel e feedback sem veredito.

---

## 4. Tabela de validacao das 6 miniatividades

| ID | Fonte | Classificacao | Motivo | Ajuste antes de implementar |
|---|---:|---|---|---|
| MINI-001 | `195` | AJUSTAR | O formato e bom, mas a estrutura ainda nao traz os 3 a 5 sinais finais. Como esta, fica abstrata para demo. | Curar sinais literais da fonte e incluir aviso: sinais nao provam caso concreto. |
| MINI-002 | `210` | POS_MVP | Tem valor educacional, mas reescrita respeitosa pode reproduzir frases ofensivas e expor grupos protegidos. | Levar para pos-MVP ou usar apenas frase neutra validada por humano. |
| MINI-003 | `209` | APROVADO_MVP | Simples de implementar, boa para demonstrar escolha segura e escuta. | Evitar formular como julgamento sobre como alguem deveria reagir. |
| MINI-004 | `131` | APROVADO_MVP | Verdadeiro/falso educativo e facil de implementar; bom para demo rapida. | Nao inventar regras internas; manter como principios gerais de convivencia digital. |
| MINI-005 | `126` | AJUSTAR | Checklist e util, mas pode soar como procedimento juridico ou promessa de protecao. | Trocar verbos imperativos por linguagem educativa: "voce pode considerar". |
| MINI-006 | `95` | APROVADO_MVP | Modo testemunha tem alto valor educacional e combina com responsabilidade coletiva. | Nao exigir confronto direto; destacar seguranca e canais oficiais. |

Resumo: priorizar `MINI-003`, `MINI-004` e `MINI-006`. `MINI-001` e `MINI-005` entram se houver tempo de ajustar texto. `MINI-002` deve ficar para pos-MVP.

---

## 5. Tabela de validacao dos 3 cenarios

| ID | Fonte principal | Relacionados | Classificacao | Motivo | Ajuste antes de implementar |
|---|---:|---|---|---|---|
| SIM-001 | `130` | `195`, `196` | APROVADO_MVP | Cenario claro, hipotetico, centrado em conduta segura e sem veredito juridico. | Trocar qualquer destaque visual de "resposta correta" por "conduta mais segura". |
| SIM-002 | `210` | `209`, `140` | AJUSTAR | Bom valor educacional, mas a fonte envolve frases de microagressoes e ha risco de criar/reproduzir ofensas. | Manter contexto generico, sem frases ofensivas novas ou exemplos com grupos protegidos. |
| SIM-003 | `200` | `95`, `204` | APROVADO_MVP | Forte para demo: modo testemunha, apoio cuidadoso, registro e canais adequados. | Reforcar que testemunha nao deve investigar nem expor pessoa afetada. |

Resumo: `SIM-001` e `SIM-003` sao os cenarios mais seguros para MVP. `SIM-002` pode entrar se o texto permanecer generico e for revisado por humano.

---

## 6. Top 5 atividades recomendadas para MVP

1. `QUIZ-001` — Microagressoes: conceito basico, claro e de baixo risco relativo.
2. `QUIZ-002` — Demanda adequada x sinais de atencao: excelente para demonstrar linguagem sem veredito.
3. `MINI-004` — Verdadeiro/falso educativo sobre violencia digital: simples, visual e rapido.
4. `MINI-006` — Modo testemunha: alto valor educacional e diferencial de responsabilidade coletiva.
5. `SIM-003` — Testemunha e apoio cuidadoso: melhor cenario para demo por combinar decisao, cuidado e encaminhamento.

Se o time quiser demonstrar mais o eixo de gestao e assedio moral, `SIM-001` pode substituir `MINI-004` no top 5.

---

## 7. O que cortar se o tempo apertar

Ordem recomendada de corte:

1. `MINI-002`, porque reescrita respeitosa exige curadoria extra para nao reproduzir frases ofensivas.
2. `MINI-005`, porque checklist pode soar como procedimento juridico se o texto nao for ajustado.
3. `MINI-001`, se nao houver tempo de selecionar sinais finais e incluir aviso de nao-veredito.
4. `SIM-002`, se o time nao conseguir revisar o texto para evitar criacao de frases ofensivas.
5. Quizzes de maior sensibilidade sexual (`QUIZ-004` e `QUIZ-005`) apenas se o front ainda nao tiver aviso educativo fixo e copy segura.

Manter, mesmo com pouco tempo:

- Pelo menos 3 quizzes aprovados.
- Pelo menos 1 miniatividade aprovada.
- Pelo menos 1 cenario aprovado.

---

## 8. Riscos de conteudo

- Veredito indireto: textos podem acabar comunicando "isso e assedio" mesmo sem usar a frase exata.
- Parecer juridico: checklist, encaminhamento e termos como denuncia, provas, canal ou consequencia podem soar como orientacao juridica.
- Culpabilizacao: respostas incorretas nao podem sugerir que o usuario e culpado por nao agir.
- Exposicao de pessoa afetada: modo testemunha e simulador precisam evitar incentivo a confronto publico.
- Conteudo sexual sensivel: quizzes sobre consentimento exigem aviso educativo e tom cuidadoso.
- Reproducao de ofensas: reescrita respeitosa e microagressoes podem criar ou repetir frases ofensivas sem necessidade.
- Politica interna inventada: violencia digital e checklist nao podem virar regra especifica de empresa.
- Gamificacao inadequada: nao usar ranking, badges por sofrimento, score de gravidade ou competicao sobre tema sensivel.

---

## 9. Recomendacoes para o front usar com seguranca

- Exibir apenas atividades classificadas como `APROVADO_MVP` por padrao.
- Manter `AJUSTAR`, `POS_MVP`, `CORTAR_MVP` e `BLOQUEADO` fora da experiencia principal.
- Renderizar `source_id`, tema e conteudo relacionado a partir de dados/configuracao; nao hardcodar eventos, fontes ou feedback sensivel na interface.
- Usar linguagem "alternativa recomendada", "conduta mais segura" e "sinais de atencao"; evitar "culpado", "crime", "assedio confirmado" ou "resposta que prova".
- Exibir aviso fixo: esta e uma experiencia educativa e nao substitui RH, juridico, compliance ou canal oficial.
- Nao coletar relato pessoal em campo livre dentro de quiz, miniatividade ou simulador.
- Nao calcular score de risco, gravidade pessoal ou probabilidade de assedio no frontend.
- Nao decidir final de jogo, consequencia oficial ou classificacao sensivel no frontend.
- Nao criar ranking, historico competitivo ou badges ligados a sofrimento, denuncia ou gravidade.
- Para feedbacks, usar texto curado e estatico aprovado; se houver IA futuramente, ela deve passar por RAG/guardrails no backend.
- Em temas sexuais ou de encaminhamento, incluir caminho generico para "canais oficiais da sua organizacao" e manter aviso educativo.
- Para demo tecnica, pode haver modo debug/admin mostrando `source_id` e `usage_policy`; para usuario final, preferir "Fonte: material Byst.end" e link de conteudo relacionado.

---

## 10. Conclusao

O MVP pode usar com seguranca relativa um conjunto enxuto de atividades: quizzes de compreensao, uma miniatividade simples e um cenario de testemunha. As atividades aprovadas continuam dependendo de revisao humana final antes de serem tratadas como conteudo validado.

Nada nesta revisao altera o JSON, implementa backend, implementa frontend ou cria seed de atividades.

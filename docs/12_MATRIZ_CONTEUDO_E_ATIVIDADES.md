# 12 · Matriz de Conteúdo e Atividades

> **Status:** matriz de mapeamento para rascunhos educativos.  
> **Fonte:** `backend/seed/conteudo_normalizado.curated.preview.json`, derivado da aba `2.3. NANO CONTEÚDOS`.  
> **Regra:** este documento não cria quiz final, cenário final ou copy sensível definitiva. Ele conecta conteúdos reais a possibilidades educativas.

---

## 1. Visão da Matriz

A matriz conecta os registros reais da base da Byst.end com experiências educativas possíveis: biblioteca, busca, quiz, miniatividades, simulador e chat/RAG.

Ela existe para impedir que o time crie atividades "do zero" sobre tema sensível. Toda atividade futura deve partir de conteúdo rastreável do JSON curado, com `source_id`, `source_row`, tipo de violência, tema, `usage_policy` e status de validação humana.

O JSON curado é a fonte operacional. A planilha original é a fonte de verdade do conteúdo, e o JSON transporta essa base para uso técnico. Nenhum texto da base deve ser reescrito por IA.

---

## 2. Distribuição da Base

### Tipos de violência existentes

| Tipo de violência | Registros |
|---|---:|
| ASSÉDIO MORAL | 22 |
| ASSÉDIO SEXUAL | 15 |
| MICROAGRESSÕES | 7 |
| DISCRIMINAÇÃO | 7 |
| IMPORTUNAÇÃO SEXUAL | 3 |
| ESTUPRO | 3 |
| VIOLÊNCIA DIGITAL (BULLYING E CYBERBULLYING) | 3 |

### Políticas de uso

| `usage_policy` | Registros | Uso previsto |
|---|---:|---|
| `rag_allowed_with_guardrails` | 44 | Pode alimentar RAG/chat com guardrails e fontes. Também pode aparecer na biblioteca e inspirar rascunhos de atividades. |
| `library_only` | 4 | Pode aparecer como leitura na biblioteca, com aviso educativo; não deve ser contexto automático do chat. |
| `exclude_from_rag` | 11 | Pode aparecer na biblioteca se validado, mas fica fora do RAG automático por risco jurídico, categórico, procedimental ou sensível. |
| `blocked_until_review` | 1 | Não deve aparecer em produto nem ser usado em atividade até revisão humana. |

### Distribuição por tipo e política

| Tipo | `rag_allowed_with_guardrails` | `library_only` | `exclude_from_rag` | `blocked_until_review` |
|---|---:|---:|---:|---:|
| MICROAGRESSÕES | 6 | 1 | 0 | 0 |
| DISCRIMINAÇÃO | 4 | 3 | 0 | 0 |
| ASSÉDIO MORAL | 19 | 0 | 2 | 1 |
| ASSÉDIO SEXUAL | 10 | 0 | 5 | 0 |
| IMPORTUNAÇÃO SEXUAL | 1 | 0 | 2 | 0 |
| ESTUPRO | 1 | 0 | 2 | 0 |
| VIOLÊNCIA DIGITAL (BULLYING E CYBERBULLYING) | 3 | 0 | 0 | 0 |

---

## 3. Conteúdos por Jornada

### Aprender

Objetivo: organizar e apresentar conteúdos da base.

Tipos relevantes: todos os tipos existentes.

Exemplos de base:

- Microagressões: `source_id 140`, `207`, `210`, `142`, `179`
- Discriminação: `source_id 99`, `155`, `213`, `103`, `166`
- Assédio moral: `source_id 107`, `111`, `194`, `195`, `130`, `196`
- Assédio sexual: `source_id 43`, `56`, `53`, `77`, `90`
- Violência digital: `source_id 131`, `134`, `175`
- Importunação sexual: `source_id 35`, `39`, `182`
- Estupro: `source_id 146`, `148`, `191`

Políticas permitidas: `rag_allowed_with_guardrails`, `library_only`, `exclude_from_rag`.

Riscos: conteúdos `exclude_from_rag` podem ser educativos na biblioteca, mas exigem aviso e não devem ser usados para julgamento individual. `blocked_until_review` fica oculto.

### Praticar

Objetivo: transformar leitura em compreensão ativa sem expor o usuário.

Tipos relevantes: Microagressões, Discriminação, Assédio moral, Violência digital e conteúdos de prevenção/cultura.

Exemplos de base:

- Conceitos e limites: `source_id 140`, `107`, `130`, `131`
- Frases comuns/linguagem: `source_id 210`, `213`, `194`
- Mudanças de hábitos: `source_id 209`, `212`
- Prevenção/cultura: `source_id 179`, `166`, `121`, `175`

Políticas permitidas: preferencialmente `rag_allowed_with_guardrails`; `library_only` pode inspirar atividade se houver validação humana; `exclude_from_rag` deve ser evitado para prática automática.

Riscos: alternativas incorretas podem caricaturar condutas ou banalizar o tema. Todo feedback deve educar, não acusar.

### Simular

Objetivo: treinar decisão em cenário hipotético com feedback educativo.

Tipos relevantes: Assédio moral, Microagressões, Assédio sexual, Discriminação, Violência digital e Modo Testemunha.

Exemplos de base:

- Assédio moral e limites: `source_id 195`, `130`, `196`, `206`
- Testemunha/responsabilidade coletiva: `source_id 95`, `200`, `202`, `204`
- Flerte/limites/consentimento como tema sensível: `source_id 77`, `90`
- Prevenção institucional/cultura: `source_id 88`, `121`, `175`

Políticas permitidas: usar `rag_allowed_with_guardrails` como fonte principal. `exclude_from_rag` não deve estruturar cenário sem curadoria humana específica.

Riscos: simular casos de assédio sexual, importunação ou estupro exige cuidado extra para não criar conteúdo gráfico, acusatório ou juridicamente conclusivo.

### Conversar

Objetivo: tirar dúvidas sobre conteúdos, quiz, jogos, simulador e conceitos com fontes.

Tipos relevantes: todos, mas filtrados por `usage_policy`.

Exemplos de base permitida para RAG:

- `source_id 140`, `207`, `107`, `210`, `213`, `111`, `142`, `103`
- `source_id 195`, `179`, `166`, `130`, `196`, `53`, `77`, `90`
- `source_id 131`, `134`, `182`, `191`, `175`

Políticas permitidas: somente `rag_allowed_with_guardrails`.

Riscos: o chat pode transformar conteúdo educativo em parecer. Deve citar fontes, usar linguagem de sinais e nunca concluir "isso é assédio" ou "isso é crime".

### Encaminhar

Objetivo: orientar caminhos seguros e limites da plataforma.

Tipos relevantes: conteúdos sobre denúncia, encaminhamento, vítimas, agressor, responsabilidades, testemunhas e canais.

Exemplos de base:

- Assédio moral: `source_id 199`, `126`, `116`, `128`, `200`
- Assédio sexual: `source_id 64`, `85`, `98`, `95`
- Prevenção/cultura: `source_id 88`, `121`, `202`, `204`

Políticas permitidas: biblioteca pode exibir `rag_allowed_with_guardrails` e `exclude_from_rag`; chat deve usar apenas `rag_allowed_with_guardrails`; materiais `exclude_from_rag` podem ser indicados como leitura, não como base automática de resposta.

Riscos: temas de denúncia, provas e encaminhamento após crime podem soar como orientação jurídica ou procedimento oficial. Devem ser apresentados como material educativo e encaminhar para canais oficiais.

---

## 4. Matriz para Biblioteca

Regra geral: todos os registros não bloqueados podem aparecer na biblioteca, desde que o produto exiba aviso educativo e preserve a fonte.

| Política | Biblioteca | Regra |
|---|---|---|
| `rag_allowed_with_guardrails` | Sim | Exibir normalmente com aviso educativo geral. |
| `library_only` | Sim | Exibir como leitura, sem uso automático no chat. |
| `exclude_from_rag` | Sim, com cuidado | Exibir como conteúdo educativo sensível, com aviso de que não substitui avaliação de caso concreto. |
| `blocked_until_review` | Não | Ocultar até revisão humana. |

Registros que devem ficar ocultos por enquanto:

- `source_id 197`, `source_row 24`, Assédio moral, tema "Quem pode cometer assédio?", `usage_policy = blocked_until_review`.

Exibição de rastreabilidade:

- Para usuários finais: não precisa mostrar `source_row`; pode mostrar "Fonte: material Byst.end" e link para conteúdo relacionado.
- Para modo debug/admin/apresentação técnica: mostrar `source_id`, `source_row`, tipo, tema e `usage_policy`.
- Para auditoria interna: registrar `source_sheet`, `source_row`, `source_id`, `usage_policy` e status de validação humana.

---

## 5. Matriz para Quiz

Nenhuma pergunta final deve ser gerada nesta etapa. A matriz abaixo só define modelos.

| Tipo de pergunta | Objetivo pedagógico | Origem recomendada | `usage_policy` permitida | Modelo estrutural | Risco |
|---|---|---|---|---|---|
| Conceito básico | Verificar entendimento do tema | Camada 1, temas "O que é?" | `rag_allowed_with_guardrails`; `library_only` com validação | "[rascunho] Qual opção melhor resume o conceito do conteúdo `source_id X`?" | Virar definição jurídica fechada. |
| Diferença de limites | Distinguir conduta adequada/inadequada sem veredito | Camada 2, limites e diferenciação | `rag_allowed_with_guardrails` | "[rascunho] Qual alternativa respeita melhor os limites descritos em `source_id X`?" | Responder "isso é assédio" indiretamente. |
| Sinais de atenção | Reconhecer sinais observáveis | Camadas 2 a 4 | `rag_allowed_with_guardrails` | "[rascunho] Quais sinais merecem atenção segundo `source_id X`?" | Virar checklist acusatório. |
| Conduta segura | Escolher caminho educativo mais cuidadoso | Camadas 6 a 8 | `rag_allowed_with_guardrails` | "[rascunho] Qual conduta tende a ser mais segura neste contexto hipotético?" | Dar ordem jurídica. |
| Cultura/prevenção | Reforçar práticas coletivas | Camada 8 | `rag_allowed_with_guardrails` | "[rascunho] Qual prática contribui para cultura de respeito?" | Inventar política interna. |

Conteúdos que podem inspirar modelos:

- Conceitos: `source_id 140`, `107`, `131`
- Limites: `source_id 130`, `77`, `90`
- Sinais: `source_id 195`, `196`, `206`
- Conduta segura: `source_id 126`, `128`, `200`, `95`
- Cultura/prevenção: `source_id 179`, `166`, `88`, `121`, `175`

Regras:

- Toda pergunta deve guardar `source_id` e `source_row`.
- Alternativas incorretas devem ser plausíveis e respeitosas.
- Feedback deve apontar o conteúdo relacionado e a conduta mais segura.
- Conteúdos `exclude_from_rag` podem inspirar quiz apenas com validação humana específica.
- Conteúdos `blocked_until_review` não podem ser usados.

---

## 6. Matriz para Miniatividades/Jogos

| Formato | Conteúdos reais que podem alimentar | Tipos adequados | O que evitar |
|---|---|---|---|
| Card "sinais de atenção" | `source_id 195`, `196`, `206`, `118`, `66` | Assédio moral, Assédio sexual, Microagressões | Score, prova automática, linguagem acusatória. |
| Escolha da conduta mais segura | `source_id 126`, `128`, `200`, `95`, `88` | Assédio moral, Assédio sexual, Testemunha, Cultura | Ordem jurídica, promessa de proteção, culpabilização. |
| Reescrita respeitosa | `source_id 210`, `213`, `194`, `209`, `212` | Microagressões, Discriminação, Assédio moral | Criar novas ofensas; usar grupos protegidos como alvo. |
| Verdadeiro/falso educativo | `source_id 140`, `107`, `130`, `131`, `175` | Conceitos e prevenção | Transformar em "isso é crime"; pegadinha sensível. |
| Checklist de próximos passos | `source_id 126`, `64`, `85`, `116`, `200` | Encaminhamento e cuidado | Instrução jurídica, coleta de dados pessoais, promessa de confidencialidade. |
| Modo testemunha | `source_id 95`, `200`, `202`, `204`, `96` | Testemunha, prevenção, 5D's, cultura | Exigir confronto direto; expor pessoa afetada. |

Observações:

- `source_id 64`, `85` e `116` estão em `exclude_from_rag`; podem orientar leitura ou curadoria humana, mas não devem alimentar resposta automática.
- Reescrita respeitosa só deve usar frases vindas da base ou frases neutras validadas por humano.
- Jogos não devem criar ranking de sofrimento, competição sobre violência ou badges por relato sensível.

---

## 7. Matriz para Simulador

Cenários não devem ser gerados automaticamente do Excel. Cada cenário futuro deve ser curado manualmente e vinculado a fontes reais.

Campos obrigatórios para cada cenário futuro:

- tema base;
- `source_id` de referência;
- `source_row`;
- tipo de violência;
- objetivo educacional;
- sinais de atenção;
- conduta segura;
- conteúdo relacionado;
- `usage_policy`;
- status de validação humana;
- aviso educativo.

Modelos de cenário futuro, sem conteúdo final:

| Rascunho de eixo | Fontes possíveis | Objetivo educacional | Riscos |
|---|---|---|---|
| Limites entre demanda e assédio moral | `source_id 130`, `195`, `196` | Diferenciar cobrança adequada, desconforto e sinais de conduta inadequada. | Virar julgamento de caso de trabalho real. |
| Microagressões e linguagem cotidiana | `source_id 140`, `210`, `209` | Reconhecer impacto de falas sutis e praticar resposta respeitosa. | Criar novas frases ofensivas. |
| Testemunha e cuidado coletivo | `source_id 95`, `200`, `202`, `204` | Mostrar como apoiar sem expor a pessoa afetada. | Incentivar confronto inseguro. |
| Limites em interação sexualizada | `source_id 77`, `90`, `53` | Trabalhar consentimento e desconforto como sinais educativos. | Criar cena explícita ou conclusão jurídica. |
| Cultura digital respeitosa | `source_id 131`, `134`, `175` | Aplicar prevenção em ambientes digitais. | Virar política interna inventada. |

Regras do feedback:

- usar "pode conter sinais";
- apontar risco ético/legal apenas como risco, não veredito;
- indicar conduta mais segura;
- citar conteúdos relacionados;
- redirecionar a canais oficiais quando necessário;
- não afirmar "você cometeu crime X".

---

## 8. Matriz para Chat/RAG

Regra de fonte:

- Usar automaticamente apenas `rag_allowed_with_guardrails`.
- Nunca usar `blocked_until_review`.
- Manter `exclude_from_rag` fora do contexto automático.
- `library_only` pode ser indicado como leitura, mas não deve fundamentar resposta automática se houver risco.

Como responder dúvidas:

### Conteúdo da biblioteca

Pode explicar onde encontrar conteúdos, resumir estrutura em termos gerais e citar fontes permitidas. Deve apontar `source_id` ou link interno quando disponível.

### Perguntas de quiz

Pode explicar o conceito por trás do feedback, mas não deve entregar "veredito". Deve referenciar a fonte que originou a pergunta.

### Feedback do simulador

Pode explicar por que uma escolha tem risco ético/legal ou por que outra tende a ser mais segura, sempre como orientação educativa.

### Conceitos gerais

Pode usar conteúdos `rag_allowed_with_guardrails`, como `source_id 140`, `107`, `130`, `131`, `175`, com fontes citadas.

### Encaminhamento seguro

Pode orientar busca por canais oficiais, RH, compliance, jurídico ou apoio especializado. Não deve dizer qual medida legal tomar.

Riscos:

- Conteúdo jurídico virar parecer.
- Usuário pedir julgamento de caso.
- Chat usar fontes `exclude_from_rag`.
- Chat omitir aviso educativo.
- Chat aceitar dados pessoais ou nomes reais.

---

## 9. Conteúdos que Exigem Cuidado Especial

### Bloqueado

- `source_id 197`, `source_row 24`, Assédio moral, tema "Quem pode cometer assédio?", `blocked_until_review`.
- Motivo: contém instrução técnica no conteúdo. Não usar em biblioteca, quiz, simulador ou chat.

### Conteúdos jurídicos

Registros com `conteudo_juridico` exigem cuidado na biblioteca e validação antes de atividade derivada. Exemplos:

- `source_id 99`, `107`, `155`, `208`, `211`
- `source_id 43`, `56`, `35`, `146`, `199`
- `source_id 64`, `85`, `116`, `128`

### Conteúdos categóricos

Registros com `conteudo_categorico` não devem alimentar RAG automático:

- `source_id 43`
- `source_id 148`

### Estupro

Registros:

- `source_id 146`, `exclude_from_rag`
- `source_id 148`, `exclude_from_rag`
- `source_id 191`, `rag_allowed_with_guardrails`

Uso: biblioteca com aviso e extrema cautela. Chat só pode usar registro permitido e com guardrails; simulador não deve criar cenas explícitas.

### Importunação sexual

Registros:

- `source_id 35`, `exclude_from_rag`
- `source_id 39`, `exclude_from_rag`
- `source_id 182`, `rag_allowed_with_guardrails`

Uso: biblioteca com aviso; RAG automático apenas quando permitido por política.

### Denúncia, provas e encaminhamento após crime

Registros:

- `source_id 199`, `exclude_from_rag`
- `source_id 64`, `exclude_from_rag`
- `source_id 85`, `exclude_from_rag`
- `source_id 116`, `exclude_from_rag`
- `source_id 126`, `rag_allowed_with_guardrails`

Uso: não transformar em ordem jurídica ou procedimento oficial. Encaminhar para canais apropriados.

### Risco jurídico muito alto ou crítico

Exemplos com exclusão de RAG:

- `source_id 43`
- `source_id 56`
- `source_id 51`
- `source_id 35`
- `source_id 39`
- `source_id 146`
- `source_id 148`

Uso: leitura educativa e curadoria humana. Não usar como contexto automático de chat.

---

## 10. Regras de Rastreabilidade

Toda atividade educativa futura deve registrar:

- `source_id`;
- `source_row`;
- `source_sheet`;
- tipo de violência;
- tema;
- `usage_policy`;
- flags relevantes;
- status de validação humana;
- responsável pela curadoria;
- data de validação;
- destino permitido: biblioteca, quiz, miniatividade, simulador, chat/RAG ou bloqueado.

Modelo mínimo para rascunhos:

```json
{
  "activity_id": "draft-001",
  "status": "rascunho_nao_validado",
  "source_id": 140,
  "source_row": 2,
  "tipo_violencia": "MICROAGRESSÕES",
  "tema": "O que é?",
  "usage_policy": "rag_allowed_with_guardrails",
  "formato": "quiz_compreensao",
  "validacao_humana": {
    "status": "pendente",
    "responsavel": null,
    "data": null
  }
}
```

---

## 11. Próximos Passos

Próxima etapa segura:

Criar `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`.

Regras para esse banco:

- conter apenas rascunhos;
- cada item deve apontar `source_id`;
- cada item deve indicar `source_row`, tipo, tema e `usage_policy`;
- nenhum item pode virar final sem validação humana;
- não usar `source_id 197`;
- não usar `exclude_from_rag` para chat;
- não criar conteúdo sensível sem fonte;
- não reescrever microconteúdo da base;
- não gerar cenários finais automaticamente.

Critério de aceite para a próxima etapa:

- pelo menos um rascunho por formato educativo prioritário;
- todos com fonte rastreável;
- todos marcados como `rascunho_nao_validado`;
- revisão humana pendente explicitamente registrada.

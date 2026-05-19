# 11 · Abordagem Educacional e Governança do Tema

> **Status:** orientação de produto e conteúdo para MVP.  
> **Escopo:** biblioteca, quiz, jogos educativos, simulador, chat, backend, frontend e apresentação.  
> **Regra central:** a plataforma ensina prevenção de assédio com base nos materiais da Byst.end. Ela não julga casos, não substitui canais oficiais e não cria conteúdo sensível definitivo sem validação humana.
> **Fonte de verdade:** a base educativa operacional é `backend/seed/conteudo_normalizado.curated.preview.json`, derivada da aba `2.3. NANO CONTEÚDOS` do Excel da Byst.end. A planilha/JSON transporta o conteúdo; a IA não inventa, não melhora e não reescreve conteúdo sensível.

---

## 1. Tese Educacional do Produto

A Byst.end ensina prevenção de assédio no ambiente profissional transformando conteúdos educativos em uma jornada ativa: a pessoa aprende conceitos, pratica reconhecimento de sinais, simula decisões responsáveis, tira dúvidas com apoio contextual e encontra caminhos seguros de encaminhamento.

Essa jornada deve ser ancorada em registros reais da base curada. Biblioteca, busca, quiz, miniatividades, simulador e chat devem apontar para `source_id`, `source_row`, tipo de violência, tema e `usage_policy` sempre que usarem ou derivarem conteúdo educativo. Exemplos novos só podem existir como rascunho e precisam de validação humana antes de virar material final.

O problema educacional não é falta absoluta de informação. O briefing mostra que materiais existem, mas costumam estar dispersos em PDFs, vídeos, links e palestras. Isso cria uma experiência passiva: o usuário recebe conteúdo, mas não necessariamente entende como aplicar, buscar, lembrar ou agir com responsabilidade.

Por isso, a plataforma não deve ser apenas biblioteca ou landing page. A biblioteca organiza a base, mas a experiência educacional acontece quando o usuário:

- encontra conteúdos por tema ou situação;
- navega por trilhas progressivas;
- responde perguntas que testam compreensão;
- recebe feedback educativo;
- simula escolhas em cenários hipotéticos;
- acessa orientação contextual com fontes;
- entende quando procurar canais oficiais.

Para colaboradores, a plataforma ajuda a reconhecer conceitos e sinais de atenção sem exposição pessoal. Para lideranças, reforça condutas seguras, limites e responsabilidade institucional sem inventar política interna. Para testemunhas, oferece orientação educativa sobre como apoiar, registrar contexto com cuidado e encaminhar sem aumentar risco para a pessoa afetada.

---

## 2. Princípios de Abordagem do Tema

Toda experiência deve seguir estes princípios:

- Usar linguagem respeitosa, clara e acolhedora.
- Não culpabilizar vítimas.
- Não dramatizar, sensacionalizar ou usar choque como recurso pedagógico.
- Não banalizar o tema, não tratar como piada e não minimizar desconfortos.
- Não dar parecer jurídico.
- Não prometer confidencialidade, anonimato ou proteção que a plataforma não garante.
- Não afirmar categoricamente "isso é assédio" ou "isso é crime" sobre caso individual.
- Tratar exemplos como hipotéticos, educativos e sem nomes reais.
- Não usar empresa, pessoa, caso público ou relato real identificável.
- Separar educação geral de julgamento de caso concreto.
- Citar ou relacionar fontes da base sempre que a resposta depender de conteúdo curado.
- Respeitar `usage_policy`: `blocked_until_review` não entra em produto; `exclude_from_rag` fica fora do RAG; `library_only` pode aparecer como leitura; `rag_allowed_with_guardrails` pode apoiar chat com guardrails.

Forma preferida de linguagem:

- "pode conter sinais de..."
- "merece atenção..."
- "com base nos materiais da Byst.end..."
- "procure canais oficiais da sua organização..."
- "esta orientação é educativa..."

Formas proibidas:

- "isso é assédio";
- "isso é crime";
- "você foi vítima de...";
- "a empresa será responsabilizada";
- "a penalidade será...";
- "você deve processar";
- "posso garantir confidencialidade".

---

## 3. Jornada de Aprendizagem

### Aprender

Papel: organizar a base de conhecimento em conteúdos navegáveis.

Como aparece no produto:

- biblioteca por tipo de violência;
- trilhas por camada educativa;
- página de microconteúdo com nanoconteúdos e texto completo;
- busca por palavra-chave e filtros.

Resultado esperado: o usuário entende conceitos, limites, exemplos educativos e vocabulário básico sem precisar ler materiais dispersos.

### Praticar

Papel: transformar leitura em compreensão ativa.

Como aparece no produto:

- quiz de compreensão;
- cards de sinais de atenção;
- miniatividades de escolha;
- reescrita respeitosa de condutas comunicacionais;
- checklist de condutas seguras.

Resultado esperado: o usuário testa entendimento e recebe feedback educativo, sem exposição pessoal e sem julgamento jurídico.

### Simular

Papel: treinar tomada de decisão em situações hipotéticas.

Como aparece no produto:

- cenários curados manualmente;
- opções de conduta;
- feedback por escolha;
- indicação de risco ético/legal sem acusar o usuário;
- links para microconteúdos relacionados.

Resultado esperado: o usuário percebe consequências educativas de escolhas e aprende caminhos mais seguros.

### Conversar

Papel: oferecer apoio contextual para dúvidas sobre a plataforma e os conteúdos.

Como aparece no produto:

- chat com RAG;
- fontes consultadas;
- avisos educativos;
- limites claros;
- redirecionamento para canais oficiais quando necessário.

Resultado esperado: o usuário esclarece dúvidas sem receber parecer jurídico, diagnóstico ou julgamento definitivo.

### Encaminhar

Papel: mostrar que a plataforma não é o destino final em situações graves.

Como aparece no produto:

- página ou bloco de canais oficiais;
- lembretes no chat;
- feedbacks do simulador;
- avisos fixos na interface.

Resultado esperado: o usuário entende que situações concretas devem ser avaliadas por canais oficiais, RH, compliance, jurídico ou apoio especializado.

---

## 4. Taxonomia das Atividades

Toda atividade abaixo deve nascer de conteúdo existente na base curada ou ser marcada como `rascunho` sem uso final. A atividade deve registrar a fonte mínima: `source_id`, `source_row`, tipo de violência, tema, `usage_policy` e status de validação humana. Se não houver fonte real, o item não deve entrar no MVP.

### Quiz de Compreensão

Objetivo: verificar se o usuário entendeu um conceito ou distinção apresentada na biblioteca.

Quando usar: ao final de um microconteúdo, camada ou trilha.

O que evitar:

- perguntas que peçam ao usuário para revelar vivência pessoal;
- alternativas caricatas;
- julgamento jurídico;
- pegadinhas sobre tema sensível;
- "isso é ou não é assédio?" como veredito.

Exemplo estrutural não validado:

```json
{
  "tipo": "quiz_compreensao",
  "pergunta": "[rascunho] Qual alternativa melhor descreve o conceito apresentado no microconteúdo X?",
  "alternativas": [
    {"id": "a", "texto": "[rascunho] Alternativa baseada em entendimento correto"},
    {"id": "b", "texto": "[rascunho] Alternativa com confusão comum, sem caricatura"},
    {"id": "c", "texto": "[rascunho] Alternativa incompleta"}
  ],
  "source_id": "[obrigatorio antes de validar]",
  "feedback": "[rascunho] Explica por que a alternativa é mais segura/adequada com base no conteúdo referenciado."
}
```

### Card "Sinais de Atenção"

Objetivo: apresentar sinais observáveis sem concluir caso concreto.

Quando usar: biblioteca, trilha, simulador e pós-busca.

O que evitar:

- transformar sinais em checklist de condenação;
- usar score de risco;
- dizer que a soma de sinais "prova" assédio;
- dramatizar com linguagem de choque.

Exemplo estrutural não validado:

```json
{
  "tipo": "sinais_de_atencao",
  "source_id": "[obrigatorio antes de validar]",
  "sinais": ["[rascunho] sinal observado no conteúdo", "[rascunho] sinal observado no conteúdo"],
  "aviso": "Sinais ajudam a refletir, mas não substituem avaliação de canais oficiais."
}
```

### Escolha da Conduta Mais Segura

Objetivo: ensinar resposta mais cuidadosa diante de uma situação hipotética.

Quando usar: quiz, miniatividade ou simulador.

O que evitar:

- acusar o usuário;
- sugerir confronto como única resposta;
- prometer proteção;
- transformar escolha errada em culpa.

Exemplo estrutural não validado:

```json
{
  "tipo": "conduta_mais_segura",
  "source_id": "[obrigatorio antes de validar]",
  "contexto": "[rascunho] situação hipotética breve baseada na fonte",
  "opcoes": [
    {"id": "a", "texto": "[rascunho] conduta impulsiva"},
    {"id": "b", "texto": "[rascunho] conduta de registro e encaminhamento"},
    {"id": "c", "texto": "[rascunho] conduta de omissão"}
  ],
  "feedback": "[rascunho] Explica qual escolha tende a ser mais segura, sem julgar caso real."
}
```

### Reescrita Respeitosa

Objetivo: treinar comunicação adequada e reduzir reprodução de falas desrespeitosas.

Quando usar: atividades sobre linguagem, cultura de respeito e liderança.

O que evitar:

- criar frases ofensivas novas;
- reproduzir insultos gráficos;
- pedir ao usuário para relatar falas reais identificáveis;
- expor grupos protegidos em exemplos inventados.

Exemplo estrutural não validado:

```json
{
  "tipo": "reescrita_respeitosa",
  "source_id": "[obrigatorio antes de validar]",
  "frase_base": "[rascunho] frase neutra ou extraída de conteúdo validado",
  "tarefa": "Reescreva de forma respeitosa e objetiva.",
  "feedback": "[rascunho] Explica princípios de respeito e clareza."
}
```

### Modo Testemunha

Objetivo: orientar quem presenciou situação sensível a apoiar com cuidado e sem aumentar risco.

Quando usar: chat, simulador, trilha ou entrada dedicada se houver tempo.

O que evitar:

- exigir confronto direto;
- expor pessoa afetada;
- incentivar investigação própria;
- pedir detalhes pessoais;
- prometer confidencialidade.

Exemplo estrutural não validado:

```json
{
  "tipo": "modo_testemunha",
  "source_id": "[obrigatorio antes de validar]",
  "pergunta_guia": "[rascunho] O que uma testemunha pode considerar antes de agir?",
  "passos": [
    "[rascunho] observar segurança imediata",
    "[rascunho] oferecer apoio sem pressionar",
    "[rascunho] registrar contexto com cuidado",
    "[rascunho] encaminhar a canais oficiais"
  ]
}
```

### Simulador de Condutas

Objetivo: treinar decisão em cenários hipotéticos e mostrar consequências educativas.

Quando usar: jornada "Simular".

O que evitar:

- cenários reais ou identificáveis;
- detalhes explícitos desnecessários;
- "você cometeu crime X";
- feedback jurídico definitivo;
- cenários gerados automaticamente do Excel sem curadoria humana.

Exemplo estrutural não validado:

```json
{
  "tipo": "simulador",
  "source_id": "[obrigatorio antes de validar]",
  "cenario": "[rascunho] situação hipotética sem nomes reais baseada na fonte",
  "opcoes": [
    {"id": "a", "texto": "[rascunho] escolha com risco ético/legal"},
    {"id": "b", "texto": "[rascunho] escolha mais segura"},
    {"id": "c", "texto": "[rascunho] escolha incompleta"}
  ],
  "feedback": {
    "tom": "educativo",
    "inclui": ["sinais de atenção", "conduta mais segura", "conteúdos relacionados"],
    "nao_inclui": ["acusação", "parecer jurídico", "veredito"]
  }
}
```

### Checklist de Próximos Passos

Objetivo: organizar ações educativas e seguras sem substituir canal oficial.

Quando usar: ao final de conteúdo, chat ou simulador.

O que evitar:

- ordem jurídica;
- "faça boletim" como instrução universal;
- prometer resultado;
- registrar dados pessoais no sistema.

Exemplo estrutural não validado:

```json
{
  "tipo": "checklist",
  "source_id": "[obrigatorio antes de validar]",
  "itens": [
    "[rascunho] registrar data/contexto de forma privada",
    "[rascunho] buscar orientação em canal oficial",
    "[rascunho] procurar apoio especializado se houver risco"
  ],
  "aviso": "Checklist educativo; não substitui RH, jurídico, compliance ou canal oficial."
}
```

### Chat de Apoio Contextual

Objetivo: responder dúvidas com base nos conteúdos curados e orientar a navegação.

Quando usar: dúvidas sobre biblioteca, quiz, jogos, simulador, conceitos e próximos conteúdos.

O que evitar:

- parecer jurídico;
- diagnóstico psicológico;
- coleta de relatos reais;
- nome de pessoas ou empresas;
- respostas sem fonte;
- uso de registros proibidos por `usage_policy`.

Exemplo estrutural não validado:

```json
{
  "tipo": "chat_apoio",
  "entrada": "[rascunho] pergunta do usuário",
  "contexto": ["source_id_1", "source_id_2"],
  "resposta": "[rascunho] resposta curta, com fontes, sem veredito e com aviso educativo"
}
```

---

## 5. Papel do Chat

O chat é uma camada de apoio educacional. Ele consome o backend, que consulta conteúdos curados no JSON/SQLite. O frontend apenas exibe conversa, fontes, avisos e links para conteúdos relacionados.

O chat deve:

- usar somente registros permitidos por `usage_policy`;
- priorizar `rag_allowed_with_guardrails` para contexto de RAG;
- citar fontes consultadas com identificadores rastreáveis;
- apoiar dúvidas sobre biblioteca, quiz, jogos, simulador e conceitos;
- usar guardrails de pré-processamento, prompt, safety settings e pós-processamento;
- redirecionar para canais oficiais quando a situação for grave;
- manter aviso de que a plataforma é educativa.

O chat não deve:

- atuar como canal de denúncia;
- receber ou armazenar relatos reais com dados pessoais;
- dar parecer jurídico;
- diagnosticar psicologicamente;
- concluir se houve assédio ou crime;
- afirmar que uma empresa será responsabilizada;
- citar pena, artigo ou consequência como conclusão de caso concreto;
- usar registros com `blocked_until_review`;
- usar registros `exclude_from_rag` como contexto automático.

Uso esperado de `usage_policy`:

- `rag_allowed_with_guardrails`: pode ser usado no RAG com guardrails.
- `library_only`: pode aparecer na biblioteca, mas não deve ser contexto automático.
- `exclude_from_rag`: pode aparecer na biblioteca, mas deve ficar fora do RAG.
- `blocked_until_review`: não deve aparecer em superfície de produto até revisão humana.

---

## 6. Uso de Referências Legais

Referências legais podem aparecer como conteúdo educativo real quando vierem da base da Byst.end. A regra não é apagar conteúdo jurídico da biblioteca; a regra é não transformar referência legal em parecer individual.

Permitido:

- mostrar referência legal/educativa preservada na biblioteca quando vier da planilha/JSON curado;
- informar que um conteúdo traz referência legal educativa;
- dizer que uma situação hipotética pode ter risco ético/legal;
- orientar busca por RH, compliance, jurídico, canal oficial ou apoio especializado.

Proibido:

- "você cometeu crime X";
- "essa situação configura crime";
- "isso é assédio";
- "a penalidade será Y";
- "a empresa será responsabilizada";
- "você deve processar";
- "o artigo X se aplica ao seu caso".

Forma recomendada:

> "Esse conteúdo traz uma referência legal educativa. Para avaliar um caso concreto, procure RH, compliance, jurídico, canal oficial ou apoio especializado."

---

## 7. Critérios Para Criar Perguntas de Quiz

Perguntas de quiz devem testar entendimento, não expor o usuário.

Checklist:

- A pergunta está baseada em conteúdo curado?
- Testa compreensão de conceito, limite, sinal ou conduta segura?
- Evita pedir relato pessoal?
- Evita detalhes gráficos ou sensacionalistas?
- Não transforma caso hipotético em veredito jurídico?
- Alternativas incorretas são plausíveis e respeitosas?
- Feedback educa sem acusar?
- Feedback aponta a conduta mais segura?
- Indica conteúdo relacionado quando útil?
- Mantém aviso educativo quando o tema for sensível?

O que evitar:

- "Você sofreu assédio?" como pergunta;
- "Isso é crime?" como resposta final;
- alternativas ridículas para forçar acerto;
- pontuação competitiva sobre sofrimento;
- ranking de vítimas ou gravidade pessoal.

---

## 8. Critérios Para Criar Cenários do Simulador

Cenários devem ser hipotéticos, curtos e focados em decisão.

Regras:

- Não usar nomes reais.
- Não usar empresas reais.
- Não usar casos públicos.
- Não incluir detalhes explícitos desnecessários.
- Não pedir identificação de pessoas.
- Não usar conteúdo gráfico ou sensacionalista.
- Focar no que a pessoa pode observar, considerar e encaminhar.
- Usar linguagem de sinais, não de veredito.
- Mostrar conduta mais segura.
- Indicar microconteúdos relacionados.
- Incluir aviso de que a plataforma não substitui canais oficiais.

Feedback deve:

- acolher sem tutelar;
- explicar risco ético/legal quando houver;
- dizer "deve ser evitada" quando uma escolha for insegura;
- evitar "você cometeu crime X";
- evitar "a vítima deve";
- reforçar canais oficiais para situação grave.

Estrutura recomendada:

```json
{
  "titulo": "[rascunho] título hipotético",
  "contexto": "[rascunho] contexto breve sem nomes reais",
  "opcoes": [
    {
      "id": "a",
      "texto": "[rascunho] opção de conduta",
      "feedback_titulo": "[rascunho] título educativo",
      "feedback_corpo": "[rascunho] feedback sem veredito",
      "sinais_de_atencao": ["[rascunho] sinal baseado em fonte"],
      "conduta_mais_segura": "[rascunho] orientação educativa",
      "conteudos_relacionados": ["source_id ou id futuro"]
    }
  ]
}
```

---

## 9. Modo Testemunha

Modo Testemunha atende o usuário que presenciou uma situação e não sabe como agir.

Objetivos:

- apoiar sem expor a pessoa afetada;
- evitar confronto impulsivo quando houver risco;
- orientar registro de contexto com cuidado;
- mostrar opções de encaminhamento;
- reforçar canais oficiais;
- ensinar que omissão pode manter ciclos de violência, mas que agir exige segurança.

Diretrizes:

- Perguntar sobre segurança imediata sem coletar dados pessoais.
- Evitar nomes de pessoas, empresa ou detalhes identificáveis.
- Sugerir apoio privado e respeitoso, sem pressionar relato.
- Orientar registro de data, contexto e testemunhas de forma privada, quando fizer sentido.
- Encaminhar para canais oficiais da organização.
- Em risco imediato, orientar serviços/canais adequados definidos pela governança.

Quando não confrontar diretamente:

- quando houver hierarquia ou risco de retaliação;
- quando a pessoa afetada pode ser exposta;
- quando a testemunha não tem segurança;
- quando o confronto pode agravar a situação;
- quando há necessidade de canal oficial ou apoio especializado.

---

## 10. MVP e Pós-MVP

### Obrigatório

- Aviso educativo de não substituição de RH, jurídico, compliance, canal oficial ou apoio especializado.
- Conteúdo vindo da base curada, sem reescrita sensível pela IA.
- `usage_policy` respeitado em biblioteca, busca e futuro RAG.
- Guardrails para chat.
- Citação de fontes no chat.
- Sem persistência de relatos sensíveis do chat.
- Sem planilha original em repo público sem autorização.

### MVP

- Biblioteca de microconteúdos.
- Busca por palavra-chave e filtros.
- Trilhas por tipo de violência/camada.
- Quiz de compreensão com feedback educativo.
- Simulador com cenários curados manualmente.
- Chat de apoio contextual com RAG e guardrails.
- Página ou bloco de canais oficiais.

### Diferencial Se Der Tempo

- Modo Testemunha como entrada visual destacada.
- Checklist de próximos passos.
- Cards de sinais de atenção.
- Recomendações de próximo conteúdo.
- Conteúdos sazonais como banner, se validados.
- Acessibilidade visual adicional.

### Pós-MVP

- Trilhas por perfil: colaborador, liderança, RH/compliance.
- Busca semântica com embeddings.
- Painel administrativo de conteúdo.
- Recomendação personalizada.
- Analytics anônima com consentimento.
- Acessibilidade ampliada, como libras e audiodescrição.

### Fora de Escopo

- Canal de denúncia.
- Parecer jurídico.
- Diagnóstico psicológico.
- Ranking de sofrimento, vítimas ou gravidade pessoal.
- Score de "isso é assédio".
- Persistência longa de relatos sensíveis.
- Geração automática de cenários a partir do Excel sem curadoria.
- Uso de casos reais, pessoas reais ou empresas reais.

---

## 11. Critérios de Validação Humana

### Pergunta de Quiz

- Baseada em conteúdo curado?
- Testa entendimento, não experiência pessoal?
- Alternativas são respeitosas?
- Feedback não acusa?
- Não afirma "isso é assédio" ou "isso é crime"?
- Aponta conduta mais segura?
- Indica fonte ou conteúdo relacionado?

### Cenário

- É hipotético?
- Não usa nomes reais?
- Não usa empresa real?
- Não tem detalhes explícitos desnecessários?
- Foca em decisão e encaminhamento?
- Feedback usa linguagem de sinais?
- Não dá parecer jurídico?
- Conteúdos relacionados existem na base?

### Feedback

- Educa sem culpabilizar?
- Não minimiza?
- Não dramatiza?
- Não promete confidencialidade?
- Não substitui canal oficial?
- Inclui aviso educativo quando necessário?

### Resposta do Chat

- Usa fontes permitidas por `usage_policy`?
- Cita fontes consultadas?
- Responde com base nos materiais?
- Não conclui crime/assédio?
- Não inventa política, lei, estatística ou canal?
- Redireciona situação grave?
- Mantém tom acolhedor e curto?

### Uso de Conteúdo Jurídico

- A referência veio da base?
- Está apresentada como educativa?
- Não virou parecer individual?
- Não cita penalidade como conclusão?
- Não aplica artigo ao caso concreto?
- Orienta canais apropriados para avaliação?

### Tom de Voz

- Claro.
- Respeitoso.
- Acolhedor.
- Sem jargão jurídico desnecessário.
- Sem sensacionalismo.
- Sem julgamento.
- Sem infantilizar o usuário.

---

## 12. Narrativa Para a Banca

Problema: conteúdos de prevenção de assédio existem, mas ficam dispersos e passivos. Isso dificulta aprendizagem, busca, tomada de decisão e orientação inicial responsável.

Solução: a Byst.end transforma esses materiais em uma experiência educativa ativa. O usuário aprende na biblioteca, pratica com quizzes e jogos, simula decisões em cenários hipotéticos, conversa com um orientador contextual e encontra encaminhamentos responsáveis.

Diferencial: a plataforma não é só uma landing page nem um repositório de arquivos. Ela organiza conteúdo, cria progressão pedagógica, usa feedback educativo e aplica IA com fontes e guardrails.

Responsabilidade: o produto não é canal de denúncia, jurídico, RH ou compliance. Ele não declara que uma situação é assédio ou crime. Ele aponta sinais, preserva fontes, recomenda canais oficiais e evita promessas indevidas.

Uso de IA: a IA apoia busca e conversa com RAG, `usage_policy`, fontes citadas e camadas de defesa. Ela não é dona da verdade do tema e não cria conteúdo sensível definitivo.

Valor educacional: colaboradores, lideranças e testemunhas recebem uma forma mais simples, segura e prática de compreender prevenção de assédio, reconhecer sinais de atenção e escolher condutas mais responsáveis.

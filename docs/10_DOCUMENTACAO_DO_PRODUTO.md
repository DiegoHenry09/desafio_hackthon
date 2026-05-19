# 10 · Documentação do Produto Byst.end

> Documento central para leitores humanos e LLMs.  
> Use este arquivo como mapa do projeto antes de implementar qualquer tarefa.  
> Documentos específicos continuam sendo a fonte detalhada de cada domínio.

---

## 1. Resumo Executivo

Byst.end é uma plataforma educativa para prevenção de assédio no ambiente profissional. O produto transforma materiais curados da Byst.end em uma experiência digital ativa, com biblioteca, busca, trilhas, quiz, miniatividades, simulador e chat de apoio contextual.

A plataforma não é canal de denúncia, não é parecer jurídico, não é atendimento psicológico e não substitui RH, compliance, jurídico, canal oficial ou apoio especializado.

O conteúdo sensível vem da base da Byst.end. A IA pode estruturar, mapear e transportar dados, mas não pode inventar, reescrever, melhorar ou validar conteúdo sensível sem revisão humana.

---

## 2. Problema Que Resolve

Materiais sobre prevenção de assédio existem, mas costumam ficar dispersos em PDFs, vídeos, palestras, links e planilhas. Isso reduz engajamento e dificulta que colaboradores, lideranças e testemunhas encontrem orientação educativa no momento certo.

O produto resolve esse problema criando uma camada de experiência sobre a base da Byst.end:

- organiza microconteúdos em biblioteca;
- permite busca por tema e palavra-chave;
- cria uma jornada de aprendizagem ativa;
- oferece quiz e atividades educativas;
- simula decisões em situações hipotéticas;
- apoia dúvidas com chat contextualizado e fontes;
- reforça limites, canais oficiais e uso responsável da IA.

---

## 3. Público-Alvo

Público primário:

- colaboradores em geral em ambiente profissional brasileiro.

Públicos secundários:

- lideranças;
- testemunhas;
- áreas de RH, compliance e apoio;
- avaliadores da banca do hackathon.

Decisão atual: o MVP não diferencia trilhas por perfil. A base curada está marcada como público geral.

---

## 4. Tese Educacional

A Byst.end ensina prevenção de assédio por meio de uma jornada ativa:

1. Aprender: entender conceitos e sinais em conteúdos curados.
2. Praticar: testar compreensão em quiz e miniatividades.
3. Simular: escolher condutas em cenários hipotéticos.
4. Conversar: tirar dúvidas com chat contextual e fontes.
5. Encaminhar: entender limites da plataforma e buscar canais oficiais quando necessário.

Essa abordagem evita que o produto seja apenas uma landing page ou biblioteca passiva. O valor está na progressão pedagógica, no feedback educativo e na responsabilidade ao tratar tema sensível.

Documento detalhado: `docs/11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`.

---

## 5. Fonte de Conteúdo

Fonte original:

- Planilha Excel da Byst.end, aba `2.3. NANO CONTEÚDOS`.

Fonte operacional versionada:

- `backend/seed/conteudo_normalizado.curated.preview.json`

Estado do JSON:

- 60 registros no preview curado.
- 59 registros entram no SQLite.
- 1 registro bloqueado: `source_id 197`.
- Conteúdo dos registros não foi reescrito.
- Ortografia da base não foi corrigida.
- Todos os registros preservam `source_id`, `source_row`, `source_sheet` e `usage_policy`.

Contagem por `usage_policy`:

- `rag_allowed_with_guardrails`: 44
- `library_only`: 4
- `exclude_from_rag`: 11
- `blocked_until_review`: 1

Matriz detalhada: `docs/12_MATRIZ_CONTEUDO_E_ATIVIDADES.md`.

---

## 6. Regras de Conteúdo Sensível

Nunca fazer:

- inventar política interna;
- inventar lei, penalidade ou parecer jurídico;
- afirmar categoricamente "isso é assédio" ou "isso é crime" sobre caso individual;
- reescrever microconteúdos para "melhorar";
- criar exemplos sensíveis definitivos sem validação humana;
- usar nomes reais de pessoas, empresas ou casos públicos;
- persistir relatos sensíveis do chat em banco;
- criar ranking de sofrimento, vítimas ou gravidade pessoal.

Sempre fazer:

- preservar o conteúdo da base;
- marcar rascunhos como rascunhos;
- citar fontes quando usar conteúdo curado;
- respeitar `usage_policy`;
- tratar exemplos como hipotéticos e educativos;
- usar linguagem acolhedora, clara e sem sensacionalismo;
- redirecionar situações graves para canais oficiais ou apoio especializado;
- registrar decisões e evidências em documentação.

Documento detalhado: `docs/00_GOVERNANCA_DO_PROJETO.md`.

---

## 7. Arquitetura do Produto

MVP previsto:

- Home com portas de entrada.
- Biblioteca de microconteúdos.
- Trilhas por tipo de violência e camada.
- Página de microconteúdo individual.
- Busca simples por palavra-chave.
- Quiz e miniatividades educativas.
- Simulador com cenários curados.
- Chat com RAG, fontes e guardrails.
- Página ou bloco de canais oficiais.

Fora do escopo atual:

- login/autenticação;
- área administrativa;
- trilhas por perfil;
- score de risco;
- ranking/badges sobre sofrimento;
- persistência longa de chat;
- upload de PDFs;
- transcrição automática de vídeos;
- geração automática de cenários finais.

Documento detalhado: `docs/01_ARQUITETURA_PRODUTO.md`.

---

## 8. Arquitetura Técnica

Stack decidida:

- Backend: Python 3.12, FastAPI, Pydantic, SQLAlchemy.
- Banco: SQLite.
- Frontend: React, Vite, TypeScript.
- IA: Google Gemini 2.5 Flash.
- Busca MVP: `LIKE` e filtros simples.
- Chat futuro: RAG + guardrails + fallback.

Regra arquitetural:

- backend é fonte da verdade;
- frontend é thin client;
- frontend não calcula regra sensível;
- routers devem ser finos;
- repositories/use cases devem concentrar persistência/orquestração quando a arquitetura crescer;
- SQLite local não deve ser versionado;
- `.env`, chaves e planilha original não devem ir para repo público.

Documento detalhado: `docs/02_ARQUITETURA_TECNICA.md`.

---

## 9. Backend Atual

Status: backend mínimo implementado.

Arquivos principais:

- `backend/app.py`
- `backend/config.py`
- `backend/database.py`
- `backend/models/`
- `backend/schemas/`
- `backend/routers/`
- `backend/seed/seed_planilha.py`

Endpoints disponíveis:

```text
GET /health
GET /conteudos
GET /conteudos/{id}
GET /tipos-violencia
GET /busca?q=...
```

Validação registrada:

- seed importou 7 tipos de violência;
- seed importou 59 microconteúdos;
- `source_id 197` foi ignorado por `blocked_until_review`;
- `/health` retornou `ok`;
- `/conteudos` retornou registros;
- `/tipos-violencia` retornou 7 tipos;
- `/busca?q=assedio` retornou resultados.

Documentação da API: `docs/api.md`.

---

## 10. Frontend Atual

Status: ainda não implementado.

Diretrizes para a equipe de frontend:

- consumir API do backend;
- não calcular score, diagnóstico, conclusão jurídica ou decisão sensível;
- exibir conteúdo preservado da base;
- mostrar avisos educativos;
- respeitar `usage_policy` quando refletido na API;
- exibir fontes e links relacionados quando houver chat/RAG;
- manter linguagem clara e acolhedora;
- não criar copy sensível definitiva sem validação humana.

---

## 11. Quiz, Jogos e Miniatividades

Status: ainda não implementados.

Regras:

- perguntas devem testar compreensão, não expor usuário;
- feedback deve educar, não acusar;
- alternativas incorretas não devem ser caricatas;
- evitar conteúdo gráfico, sensacionalista ou humilhante;
- sempre apontar conduta mais segura;
- toda atividade deve apontar `source_id`, `source_row`, tipo, tema e `usage_policy`;
- todo item começa como rascunho e exige validação humana.

Próximo documento sugerido:

- `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`

---

## 12. Simulador

Status: ainda não implementado.

Regras:

- cenários devem ser hipotéticos;
- sem nomes reais;
- sem empresa real;
- sem detalhes explícitos desnecessários;
- foco em decisão, sinais de atenção e encaminhamento;
- feedback em linguagem de sinais, não de veredito;
- indicar conteúdo relacionado;
- pode dizer que uma escolha tem risco ético/legal;
- não pode dizer "você cometeu crime X";
- não pode ser gerado automaticamente do Excel sem curadoria humana.

Cada cenário futuro deve registrar:

- tema base;
- `source_id`;
- `source_row`;
- tipo de violência;
- objetivo educacional;
- sinais de atenção;
- conduta segura;
- conteúdo relacionado;
- status de validação humana.

---

## 13. Chat e IA Responsável

Status: ainda não implementado.

Papel:

- apoio educacional contextual;
- dúvidas sobre biblioteca, quiz, jogos, simulador e conceitos;
- resposta baseada em conteúdos curados;
- fontes citadas;
- guardrails;
- aviso educativo.

O chat não é:

- canal de denúncia;
- parecer jurídico;
- RH;
- compliance;
- jurídico;
- psicólogo;
- autoridade para declarar assédio ou crime.

Uso de `usage_policy`:

- `rag_allowed_with_guardrails`: pode alimentar RAG com guardrails.
- `library_only`: pode ser leitura, mas não base automática de resposta sensível.
- `exclude_from_rag`: fora do contexto automático.
- `blocked_until_review`: nunca usar.

Documento detalhado: `docs/03_IA_RESPONSAVEL.md`.

---

## 14. Uso de Referências Legais

Decisão:

Referências legais vindas da base podem aparecer como material educativo real. O problema não é exibir a referência; o risco é transformar referência em julgamento individual.

Permitido:

- "Esse conteúdo traz uma referência legal educativa."
- "Pode haver implicações legais."
- "Procure RH, compliance, jurídico, canal oficial ou apoio especializado para avaliar caso concreto."

Proibido:

- "Isso é crime."
- "Isso configura assédio."
- "Você cometeu crime X."
- "A empresa será responsabilizada."
- "A penalidade será Y."
- "Você deve processar."

---

## 15. Estado Atual do Repositório

Já existe:

- documentação de governança, produto, técnica, IA responsável e handoff;
- JSON curado versionado;
- backend mínimo com SQLite e endpoints de conteúdo/busca;
- documentação de API;
- documentação educacional;
- matriz de conteúdo e atividades.

Ainda não existe:

- frontend;
- quiz final;
- miniatividades finais;
- simulador;
- chat/RAG/Gemini;
- cenários finais;
- JSON final sem `.preview`.

Itens locais que não devem subir:

- `.env`;
- `.venv`;
- `.db`;
- planilha original `.xlsx`;
- PDFs;
- imagens locais;
- `node_modules`.

---

## 16. Como Rodar o Backend Atual

```bash
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
python -m seed.seed_planilha
uvicorn app:app --reload --port 8000
```

Smoke test esperado:

```text
GET http://127.0.0.1:8000/health
GET http://127.0.0.1:8000/conteudos
GET http://127.0.0.1:8000/tipos-violencia
GET http://127.0.0.1:8000/busca?q=assedio
```

---

## 17. Guia Rápido Para LLMs

Antes de qualquer tarefa:

1. Declare o agente e a etapa.
2. Leia os documentos do domínio.
3. Liste arquivos que pretende alterar.
4. Liste arquivos que não deve tocar.
5. Aponte riscos de arquitetura/tema.
6. Só então proponha ou execute.

Documentos principais por domínio:

- Governança: `docs/00_GOVERNANCA_DO_PROJETO.md`
- Produto: `docs/01_ARQUITETURA_PRODUTO.md`
- Técnica: `docs/02_ARQUITETURA_TECNICA.md`
- IA/chat: `docs/03_IA_RESPONSAVEL.md`
- Processo com IA: `docs/04_MODELO_DESENVOLVIMENTO_ASSISTIDO.md`
- Checkpoints: `docs/06_CHECKPOINTS_DE_VALIDACAO.md`
- Decisões: `docs/07_DECISOES_TECNICAS.md`
- Handoff: `docs/09_HANDOFF.md`
- API: `docs/api.md`
- Abordagem educacional: `docs/11_ABORDAGEM_EDUCACIONAL_E_TEMA.md`
- Matriz conteúdo/atividades: `docs/12_MATRIZ_CONTEUDO_E_ATIVIDADES.md`

Regras rápidas:

- Não reescrever conteúdo da base.
- Não inventar exemplos sensíveis finais.
- Não usar `source_id 197`.
- Não usar `exclude_from_rag` no RAG automático.
- Não criar chat sem guardrails.
- Não criar simulador final sem validação humana.
- Não commitar/pushar sem autorização humana.

---

## 18. Próximos Passos Recomendados

1. Corrigir README para refletir `docs/` como fonte única.
2. Criar `docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md`.
3. Criar rascunhos de quiz e miniatividades com `source_id`.
4. Validar rascunhos com humano antes de implementar.
5. Implementar frontend com mock usando API atual.
6. Integrar frontend ao backend.
7. Criar simulador com cenários curados.
8. Implementar chat/RAG por último, respeitando `usage_policy`.

---

## 19. Narrativa Para Apresentação

Problema: materiais de prevenção de assédio existem, mas estão dispersos e passivos.

Solução: a Byst.end transforma essa base em uma experiência educativa ativa, com conteúdo organizado, busca, prática, simulação e apoio contextual.

Diferencial: não é só biblioteca. É uma jornada de aprendizagem com rastreabilidade, fontes, atividades e IA responsável.

Responsabilidade: o produto não julga casos, não substitui canais oficiais e não dá parecer jurídico.

Uso de IA: a IA atua com base curada, `usage_policy`, fontes e guardrails.

Valor: colaboradores, lideranças e testemunhas aprendem a reconhecer sinais, praticar condutas seguras e buscar encaminhamento adequado.

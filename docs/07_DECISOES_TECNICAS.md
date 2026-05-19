# 07 · Decisoes Tecnicas

> Documento vivo. Toda decisao com impacto em arquitetura, dados, escopo ou seguranca deve ser registrada aqui.

## DEC-001 — Stack do MVP

- **Estado:** DECIDIDO
- **Decisao:** usar Python/FastAPI no backend, React/Vite/TypeScript no frontend, SQLite como banco local e Gemini configuravel por `GEMINI_MODEL` para a camada de IA.
- **Motivo:** stack simples para hackathon, boa geracao assistida por LLM, setup local baixo e suficiente para cerca de 60 microconteudos.
- **Impacto:** backend sera a fonte da verdade; frontend sera thin client; SQLite recebera seeds derivados de JSON curado.

## DEC-002 — JSON curado antes do seed SQLite

- **Estado:** DECIDIDO
- **Decisao:** a planilha original da Byst.end nao sera importada diretamente para o banco sem uma etapa intermediaria de JSON curado.
- **Artefato atual:** `backend/seed/conteudo_normalizado.curated.preview.json`.
- **Motivo:** preservar rastreabilidade, separar transformacao tecnica de curadoria humana e evitar que conteudo sensivel entre no app sem politica de uso.
- **Impacto:** o seed SQLite futuro deve consumir JSON final aprovado, nao a planilha bruta.

## DEC-003 — `usage_policy` por registro

- **Estado:** DECIDIDO
- **Decisao:** cada registro de conteudo normalizado possui `usage_policy`.
- **Valores permitidos:**
  - `library_only`
  - `rag_allowed_with_guardrails`
  - `exclude_from_rag`
  - `blocked_until_review`
- **Contagem atual:**
  - `rag_allowed_with_guardrails`: 44
  - `library_only`: 4
  - `exclude_from_rag`: 11
  - `blocked_until_review`: 1
- **Motivo:** diferenciar conteudo exibivel na biblioteca, conteudo seguro para RAG com guardrails, conteudo fora do RAG e conteudo bloqueado ate revisao.
- **Impacto:** busca/RAG/chat devem respeitar `usage_policy`.

## DEC-004 — Uso educativo de referencias legais

- **Estado:** DECIDIDO
- **Decisao:** referencias legais e juridicas vindas da planilha podem aparecer na biblioteca como conteudo educativo real, preservado da fonte.
- **Restricao:** o chat nao pode transformar referencia legal em parecer juridico individual, veredito sobre assedio/crime, conclusao sobre responsabilidade da empresa ou penalidade aplicavel.
- **Forma permitida:** informar que a referencia legal e educativa e orientar busca por RH, compliance, juridico, canal oficial ou apoio especializado para caso concreto.
- **Forma proibida:** afirmar "isso e crime", "isso configura assedio", "a empresa sera responsabilizada", "voce deve processar" ou "a penalidade sera X".

## DEC-005 — Chat como apoio educacional

- **Estado:** DECIDIDO
- **Decisao:** o chat sera suporte contextual para duvidas sobre biblioteca, quiz, jogos educativos, simulador e conceitos da plataforma.
- **Nao sera:** canal de denuncia, parecer juridico, RH, compliance, juridico ou autoridade para declarar que uma situacao e assedio/crime.
- **Impacto:** respostas devem ser mediadas por guardrails, citar fontes quando aplicavel e manter aviso educativo.

## DEC-006 — Nao gerar simulador automaticamente do Excel

- **Estado:** DECIDIDO
- **Decisao:** cenarios do simulador nao serao gerados automaticamente a partir do Excel.
- **Motivo:** simulador exige feedback educativo, escolhas e riscos eticos que podem criar conteudo sensivel novo. Isso requer curadoria humana.
- **Impacto:** cenarios devem ser escritos/validados por humanos e relacionados a microconteudos ja curados.

## DEC-007 — Nao persistir chat sensivel

- **Estado:** DECIDIDO
- **Decisao:** nao persistir relatos sensiveis do chat em banco.
- **Motivo:** reduzir risco de privacidade, dados pessoais e tratamento indevido de relatos reais.
- **Impacto:** quando implementado, historico de chat deve ficar em memoria da sessao/pagina e nao deve virar log permanente de conteudo sensivel.

## DEC-008 — Planilha original fora do repo publico

- **Estado:** RECOMENDADO
- **Decisao:** a planilha original `.xlsx` deve ficar fora do repositorio publico ate autorizacao humana explicita.
- **Motivo:** contem conteudo sensivel e e fonte proprietaria/curada da Byst.end.
- **Impacto:** `.gitignore` bloqueia arquivos `.xlsx`; o artefato versionavel atual e o JSON curado.

## DEC-009 — Modelo Gemini para demo do chat

- **Estado:** DECIDIDO PARA DEMO
- **Decisao:** usar `gemini-3.1-flash-lite` como modelo recomendado para a demo do chat orientativo, mantendo fallback automatico obrigatorio.
- **Modelo reserva:** `gemini-2.5-flash`.
- **Modelo nao recomendado para demo:** `gemini-3.1-pro-preview`, por timeout nos cenarios de dominio com o timeout atual.
- **Motivo:** auditoria comparativa em 6 cenarios indicou que `gemini-3.1-flash-lite` foi o unico modelo validado em todos os cenarios, com Gemini real nos 5 cenarios de dominio, fontes corretas e sem timeout.
- **Impacto:** ambiente de demo deve usar `GEMINI_MODEL=gemini-3.1-flash-lite`, sem registrar chave em documento ou versionamento. A demo continua dependendo de fallback ensaiado para casos de rede, cota, safety block ou indisponibilidade.
- **Evidencia:** `docs/16_AUDITORIA_MODELOS_CHAT.md`.

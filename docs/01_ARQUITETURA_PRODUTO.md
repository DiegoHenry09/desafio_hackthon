# 01 · Arquitetura do Produto

> **Status:** 🟢 DECIDIDO (escopo MVP fechado, ajustes só via Operador D)
> **Dono:** Operador D
> **Vivo durante hackathon?** Não — escopo é congelado. Ideias novas vão pra "próximos passos".

---

## 1. Visão de produto

**Frase única:**
> Plataforma educativa que transforma o material da Byst.end em uma experiência ativa onde colaboradores aprendem sobre prevenção de assédio através de microconteúdos, simulam decisões em cenários reais e conversam com um orientador educativo responsável.

**O que NÃO é:**
- Não é canal de denúncia
- Não é serviço jurídico
- Não é terapia ou suporte psicológico
- Não é repositório passivo de PDFs/links
- Não é landing page bonita sem funcionalidade

---

## 2. Problema que resolve

Materiais sobre prevenção de assédio existem, mas:
- Estão dispersos em formatos passivos (PDF, vídeo, palestra)
- Não geram engajamento ativo
- Não ajudam a pessoa a se reconhecer na situação
- Não oferecem orientação inicial responsável
- Não treinam testemunhas, lideranças nem colegas

A Byst.end já produziu material pedagógico estruturado (8 camadas de aprendizagem, 7 tipos de violência, 60+ microconteúdos). **Falta uma camada de experiência interativa em cima.**

---

## 3. Público-alvo

**Primário:** colaboradores em geral em ambiente profissional brasileiro.
**Secundário:** lideranças, áreas de RH/compliance, áreas de apoio.

**Decisão de escopo:** o MVP **não diferencia trilhas por perfil**. A planilha original também não diferencia (todas as linhas estão como "GERAL"). Diferenciação por perfil vai para "próximos passos".

---

## 4. Personas (3, MVP)

### 4.1. Colaborador curioso ("Quero entender melhor")
- **Necessidade:** aprender sobre tipos de violência sem ser julgado
- **Caminho:** Home → Aprender → Trilha por tipo de violência → microconteúdos
- **Sucesso:** conclui pelo menos 1 trilha de 8 camadas

### 4.2. Pessoa em dúvida ("Estou vivendo algo parecido?")
- **Necessidade:** reconhecer sinais, entender o que fazer
- **Caminho:** Home → Simular → escolhe cenário próximo → vê feedback educativo
- **Sucesso:** identifica sinais de risco e canais de apoio

### 4.3. Testemunha ("Vi algo e não sei o que fazer")
- **Necessidade:** saber como agir sem se expor
- **Caminho:** Home → Conversar → "Sou testemunha, o que faço?" → orientação baseada na CAMADA 7 e metodologia 5D's
- **Sucesso:** conhece os 5D's (Distrair, Delegar, Documentar, Adiar, Direcionar)

---

## 5. Jornadas

### Jornada 1 — Aprender

```
Home
 └─ [APRENDER]
     └─ Biblioteca (lista de tipos de violência)
         └─ Trilha (ex: Assédio Moral)
             └─ Camadas 1 → 2 → 3 → ... → 8
                 └─ Microconteúdo individual (7 nanos + texto longo)
                     └─ "Marcar como lido" (progresso em localStorage)
                     └─ Próximo microconteúdo
```

### Jornada 2 — Simular

```
Home
 └─ [SIMULAR]
     └─ Lista de 3 cenários
         └─ Cenário (contexto da situação hipotética)
             └─ 3-4 opções de "como você agiria?"
                 └─ Feedback educativo por opção:
                     ├─ Sinais de risco presentes
                     ├─ Conduta mais segura
                     ├─ Microconteúdos relacionados
                     └─ Lembrete: plataforma não substitui canais oficiais
```

### Jornada 3 — Conversar

```
Home
 └─ [CONVERSAR]
     └─ Tela de chat com:
         ├─ Aviso fixo no topo (educativo, não substitui canais)
         ├─ 4-6 prompts sugeridos:
         │   ├─ "O que é assédio moral?"
         │   ├─ "Sou testemunha, o que faço?"
         │   ├─ "Estou em dúvida sobre uma situação"
         │   ├─ "O que a empresa pode fazer?"
         │   ├─ "Como diferenciar flerte de assédio sexual?"
         │   └─ "Quais canais oficiais existem?"
         └─ Campo de texto livre (com limite de caracteres)
             └─ Resposta:
                 ├─ Texto da IA (com guardrails)
                 ├─ Fontes citadas (microconteúdos consultados)
                 └─ Botão "ver canais oficiais" se gravidade alta
```

---

## 6. Telas do MVP

| # | Tela | Rota | Conteúdo principal |
|---|---|---|---|
| 1 | Home | `/` | 3 portas de entrada + banner canais oficiais + breve apresentação |
| 2 | Biblioteca | `/biblioteca` | Cards dos 7 tipos de violência + filtro por camada |
| 3 | Trilha | `/trilha/:slug` | 8 camadas de um tipo de violência + lista de microconteúdos |
| 4 | Microconteúdo | `/conteudo/:id` | 7 nanos + texto longo + microconteúdos relacionados |
| 5 | Simulador | `/simulador` | Lista dos 3 cenários disponíveis |
| 6 | Cenário | `/cenario/:id` | Contexto + opções + feedback após escolha |
| 7 | Chat | `/chat` | Conversa + prompts sugeridos + aviso fixo |
| 8 | Canais Oficiais | `/canais` (ou modal) | Disque 180, 100, CVV 188 + orientações genéricas |

**Componente global:** Banner "Em situação de risco? Acione canais oficiais" presente em todas as telas (rodapé fixo ou topo).

---

## 7. MVP (🟢 DECIDIDO)

| Item | Status | Operador |
|---|---|---|
| Home com 3 portas de entrada | 🟢 MVP | D |
| Banner fixo canais oficiais | 🟢 MVP | D |
| Biblioteca de microconteúdos navegável | 🟢 MVP | A |
| Trilhas por tipo de violência (8 camadas) | 🟢 MVP | A |
| Página de microconteúdo individual | 🟢 MVP | A |
| Busca simples (LIKE + filtros por tipo/camada) | 🟢 MVP | A |
| Simulador com **3 cenários curados** | 🟢 MVP | B |
| Chat com Gemini + RAG + guardrails + fallback | 🟢 MVP | C |
| Prompts sugeridos no chat (4-6 opções) | 🟢 MVP | C |
| Fontes citadas nas respostas do chat | 🟢 MVP | C |
| Progresso em localStorage | 🟢 MVP | A/D |
| Página "Canais Oficiais" (estática) | 🟢 MVP | D |

## 8. Diferenciais (entram se sobrar tempo após Checkpoint 3)

| Item | Status | Operador candidato |
|---|---|---|
| Animações de transição entre telas | 🟡 NICE-TO-HAVE | D |
| Dark mode | 🟡 NICE-TO-HAVE | qualquer |
| Conteúdos sazonais (banner do mês atual) | 🟡 NICE-TO-HAVE | A |
| Recomendação de próximo conteúdo após ler um | 🟡 NICE-TO-HAVE | A |
| Modo "alto contraste" para acessibilidade | 🟡 NICE-TO-HAVE | D |

## 9. Fora de escopo (🔴 CORTADO do MVP, vai pra "próximos passos")

| Item | Por que cortou |
|---|---|
| Login / autenticação | Sem necessidade pro MVP; LGPD complexa |
| Área administrativa | Tempo insuficiente; seed direto no banco resolve |
| Trilhas por perfil (colaborador/líder/RH) | Planilha não diferencia; curadoria extra inviável em 6h |
| Mapa de Atenção/Risco com score | Risco ético (score = afirmação categórica); cruza limite do briefing |
| Modo Testemunha como feature separada | Já contemplado no chat (prompt sugerido) e na CAMADA 7 das trilhas |
| Sistema de badges/ranking | Antiético em tema de assédio; cortado por princípio |
| Upload de PDFs pelo usuário | Sem caso de uso claro; risco de conteúdo arbitrário |
| Transcrição automática de vídeos | Tempo insuficiente; conteúdo já em texto |
| Embed de vídeos do YouTube | Risco de link quebrar; lista como referência externa apenas |
| Busca semântica com embeddings | Tempo insuficiente; LIKE + filtros é suficiente para 60 microconteúdos |
| Persistência longa do chat | Decisão de privacidade; só memória de sessão |
| Notificações por email | Sem caso de uso; sem stack de email |
| Multi-tenancy | Não faz sentido nesse contexto |
| Multi-idioma | Conteúdo é em PT-BR, fora do escopo |
| App mobile nativo | Responsivo web cobre |
| Dashboard analytics | Sem dados reais ainda |

---

## 10. Fluxo detalhado: Simulador de Condutas

Cenário tem estrutura JSON:

```json
{
  "id": 1,
  "titulo": "Reunião com piadas constrangedoras",
  "contexto": "Você está em uma reunião de equipe. Seu gestor, na frente de todos, faz comentários repetidos sobre sua aparência e seu jeito de falar, em tom de 'brincadeira'. Você percebe que alguns colegas riem por constrangimento. Como você reagiria?",
  "tipo_violencia": "assedio_moral",
  "camada_relacionada": 2,
  "opcoes": [
    {
      "letra": "A",
      "texto": "Rio junto pra não 'estragar o clima' e converso depois em particular",
      "feedback_titulo": "Reação compreensível, mas atenção",
      "feedback_corpo": "Rir junto é uma estratégia comum de autoproteção em situações constrangedoras. Não é culpa sua reagir assim. No entanto, conforme os materiais da Byst.end, silêncio não é concordância e situações repetidas merecem ser registradas. Comentários sobre aparência feitos por superior hierárquico em público podem conter sinais de conduta inadequada.",
      "sinais_risco": ["Hierarquia (gestor)", "Repetição", "Exposição pública", "Comentários sobre aparência"],
      "conduta_segura": "Registrar a situação (data, contexto, testemunhas) e considerar levar ao canal de ética ou RH da sua organização.",
      "microconteudos_ids": [12, 19, 23]
    },
    {
      "letra": "B",
      "texto": "Confronto o gestor publicamente, na mesma reunião",
      "feedback_titulo": "Sua coragem é válida, mas há riscos",
      "feedback_corpo": "Confrontar diretamente é um direito seu e mostra que você não aceita a conduta. Por outro lado, em ambientes com desequilíbrio de poder, o confronto público pode gerar retaliação. Os materiais da Byst.end indicam que documentar e usar canais formais costuma proteger melhor a vítima.",
      "sinais_risco": ["Hierarquia (gestor)", "Risco de retaliação", "Exposição pública"],
      "conduta_segura": "Antes do confronto, registrar a situação por escrito e consultar o canal de ética/RH da organização. Se precisar reagir no momento, faça com brevidade ('isso é desconfortável, vamos seguir com a pauta') e formalize depois.",
      "microconteudos_ids": [12, 38, 43]
    },
    {
      "letra": "C",
      "texto": "Procuro o RH ou canal de ética da empresa depois da reunião",
      "feedback_titulo": "Caminho alinhado com práticas de proteção",
      "feedback_corpo": "Esta é uma das condutas mais alinhadas com o que os materiais da Byst.end recomendam: registrar fatos, preservar evidências e formalizar através dos canais oficiais da organização. Importante reforçar: a plataforma não substitui RH, jurídico, compliance ou canal de denúncia.",
      "sinais_risco": ["Hierarquia (gestor)", "Repetição", "Exposição pública"],
      "conduta_segura": "Documente datas, contexto e testemunhas. Use o canal formal da sua organização. Se houver retaliação, isso também deve ser registrado.",
      "microconteudos_ids": [38, 43, 46]
    }
  ]
}
```

**Os 3 cenários curados serão:**
1. **Assédio moral (reuniões / piadas)** — baseado na CAMADA 2 da planilha
2. **Microagressões cotidianas** — baseado na CAMADA 3 (frases comuns)
3. **Testemunha de constrangimento sexual em evento** — baseado na metodologia 5D's da CAMADA 7-8

Curadoria detalhada vai pra `seed_cenarios.json` (Operador B faz no Checkpoint 1-2).

---

## 11. Modo Testemunha

**Decisão:** não é tela separada, é uma combinação de:
- Prompt sugerido no chat: "Sou testemunha, o que faço?"
- Cenário 3 do Simulador (testemunha)
- Trilha de assédio moral / sexual tem a CAMADA 7 "Papel das Testemunhas" + CAMADA 8 com metodologia 5D's

Se sobrar tempo após Checkpoint 3, pode virar destaque visual na Home ("Sou testemunha"). Por enquanto, **fica como caminho dentro do chat e do simulador**.

---

## 12. Mapa de Atenção/Risco

**Decisão final:** 🔴 **NÃO ENTRA NO MVP.**

Motivos:
- Score numérico vira "isso é assédio" disfarçado de matemática → cruza o limite ético do briefing
- Sem score, vira só lista de sinais — já presente nos feedbacks do Simulador
- Tempo insuficiente pra implementar com responsabilidade

O conceito "sinais de risco a observar" aparece dentro do feedback de cada cenário do Simulador, sem virar score.

---

## 13. Trilhas por perfil

**Decisão final:** 🔴 **NÃO ENTRA NO MVP.**

Motivos:
- A planilha não diferencia conteúdo por perfil (campo "PÚBLICO (TRILHA)" sempre = "GERAL")
- Curadoria diferenciada exigiria criar conteúdo novo → inventaria
- Tempo insuficiente

Vai pra "próximos passos" se houver evolução do produto.

---

## 14. Próximos passos (fora do hackathon)

Lista pra apresentação na banca como "futuro do produto":

- Trilhas por perfil (colaborador, liderança, RH/compliance)
- Busca semântica com embeddings
- Conteúdos sazonais ativos (banner do mês)
- Modo Testemunha como entrada principal
- Painel administrativo pra Byst.end cadastrar conteúdos
- Personalização: usuário marca interesses e recebe trilha recomendada
- Versão mobile nativa
- Integração com canais oficiais via API (denúncia direta para parceiros)
- Analytics anônima de engajamento (com consentimento explícito)
- Acessibilidade ampliada (libras, audiodescrição)

import type { ChatMsg, Fonte } from "../types";

export const mockChatSuggested: string[] = [
  "O que é assédio moral, de forma simples?",
  "Como falar com RH sem expor a pessoa afetada?",
  "Sinais para observar em reuniões 1:1",
  "Modo testemunha: o que dizer ao colega?",
];

export const mockChatThread: ChatMsg[] = [
  {
    id: "m1",
    role: "bot",
    text: "Olá. Posso te ajudar a encontrar materiais educativos sobre prevenção de assédio profissional e a entender conceitos. Não consigo afirmar se uma situação específica é ou não assédio — isso passa por canais oficiais. Por onde quer começar?",
    sources: [],
    reminder: false,
  },
];

export interface ChatReply { text: string; sources: Fonte[]; reminder: boolean; }

export const mockChatReplies: Record<string, ChatReply> = {
  "O que é assédio moral, de forma simples?": {
    text: "De forma geral, assédio moral costuma envolver condutas repetidas, dirigidas a uma mesma pessoa, com impacto sobre seu trabalho ou bem-estar. Frequência, alvo fixo e contexto importam.\n\nIsso não substitui uma análise concreta de cada situação — para casos reais, os canais oficiais (RH, ouvidoria, sindicato, órgãos públicos) podem orientar.",
    sources: [
      { titulo: "Recommendation 206 — Violence and Harassment", autor: "OIT", ano: 2019, tipo: "Documento internacional" },
      { titulo: "Lei nº 14.457/2022 — CIPA + assédio", autor: "Brasil", ano: 2022, tipo: "Referência legal informativa" },
    ],
    reminder: true,
  },
  "Como falar com RH sem expor a pessoa afetada?": {
    text: "Algumas ideias gerais: solicite uma conversa em ambiente fechado, descreva fatos observáveis (datas, frequência, contexto) e pergunte ao RH qual o procedimento da empresa antes de detalhar nomes, se preferir.\n\nO procedimento varia muito por organização — vale conferir o canal interno da sua empresa, que costuma ser o caminho formal.",
    sources: [
      { titulo: "Material curado Byst.end (rascunho)", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
    ],
    reminder: true,
  },
  "Sinais para observar em reuniões 1:1": {
    text: "Em reuniões 1:1, alguns elementos costumam aparecer em situações que merecem cuidado: padrão de crítica pessoal vs. crítica de trabalho; comentários sobre aparência ou vida privada; ausência de registros públicos do que foi decidido; mudança no tom após divergências técnicas.\n\nObservar não é diagnosticar — é apenas ter mais clareza para decidir se vale procurar orientação.",
    sources: [
      { titulo: "Workplace harassment — practical guide", autor: "EU-OSHA", ano: 2021, tipo: "Guia institucional" },
    ],
    reminder: false,
  },
  "Modo testemunha: o que dizer ao colega?": {
    text: "Algumas frases que costumam funcionar em particular: \"Notei o que aconteceu. Você quer falar sobre isso?\"; \"Posso te acompanhar até o RH, se você quiser.\"; \"Não precisa decidir agora.\" \n\nO papel de quem testemunha é oferecer apoio, sem assumir a decisão pela pessoa afetada.",
    sources: [
      { titulo: "Material curado Byst.end (rascunho)", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
    ],
    reminder: false,
  },
};

export const mockChatFallback: ChatReply = {
  text: "Posso te mostrar materiais educativos sobre o tema. Posso falar de forma geral sobre conceitos como assédio moral, sexual, discriminação e violência organizacional, sempre com referências. Para casos concretos, os canais oficiais (RH, ouvidoria, 180, 100) são o caminho.",
  sources: [
    { titulo: "Página de canais — Byst.end", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
  ],
  reminder: true,
};

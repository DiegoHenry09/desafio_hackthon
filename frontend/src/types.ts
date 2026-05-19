// Shared types for mock data
export type UsagePolicy = "public" | "educational" | "internal" | "restricted";
export type Status = "draft" | "review" | "published";

export interface Tipo  { id: string; label: string; count: number; }
export interface Tema  { id: string; label: string; count: number; }
export interface Camada{ id: string; label: string; }

export interface Fonte {
  titulo: string;
  autor: string;
  ano: number;
  tipo: string;
}

export interface Nano { lbl: string; txt: string; }

export interface Conteudo {
  id: string;
  titulo: string;
  resumo: string;
  tipo: string;
  tema: string;
  camada: string;
  formato: string;
  tempo: number;
  usage_policy: UsagePolicy;
  source_id: string;
  source_row: number;
  status: Status;
  nanoconteudos: Nano[];
  paragrafos: string[];
  fontes: Fonte[];
}

export type OpcaoKind = "safer" | "flag" | "neutral";

export interface QuizOpcao {
  id: string;
  texto: string;
  kind: OpcaoKind;
  explica: string;
}
export interface QuizFeedback {
  situacao: string;
  leituraSegura: string;
  porQue: string;
  fonte: Fonte;
}
export interface QuizPergunta {
  id: string;
  texto: string;
  opcoes: QuizOpcao[];
  feedback: QuizFeedback;
}
export interface Quiz {
  id: string;
  titulo: string;
  status: Status;
  intro: string;
  perguntas: QuizPergunta[];
}

export interface Conduta {
  id: string;
  texto: string;
  kind: OpcaoKind;
  feedback: string;
}
export interface Cenario {
  id: string;
  status: Status;
  titulo: string;
  role: string;
  narrativa: string;
  sinais: string[];
  condutas: Conduta[];
  leituraSegura: string;
  riscoEtico: string;
  relacionados: string[];
}

export interface ChatMsg {
  id: string;
  role: "user" | "bot";
  text: string;
  sources?: Fonte[];
  reminder?: boolean;
}

export interface CanalOficial {
  num: string;
  titulo: string;
  who: string;
  desc: string;
  featured?: boolean;
}

export interface Progress {
  lidos: string[];
  quizFeitos: number;
  simulacoesFeitas: string[];
}

export type Route =
  | { name: "home" }
  | { name: "biblioteca" }
  | { name: "detalhe"; id: string }
  | { name: "quiz" }
  | { name: "simulador" }
  | { name: "chat" }
  | { name: "canais" }
  | { name: "progresso" };

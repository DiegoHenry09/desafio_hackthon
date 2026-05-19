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

export type OpcaoKind = "safer" | "neutral" | "reflect" | "flag";

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

/** Atividade de quiz do banco rascunho (docs/13). Uma pergunta por card. */
export interface QuizAtividade {
  id: string;
  tipoViolencia: string;
  tema: string;
  titulo: string;
  status: Status;
  source_id: number;
  source_row: number;
  usage_policy: string;
  objetivoPedagogico: string;
  intro: string;
  pergunta: QuizPergunta;
  feedbackEducativo: string;
  leituraSegura: string;
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
  /** @deprecated mantido para migração localStorage */
  quizFeitos?: number;
  quizzesFeitos: string[];
  simulacoesFeitas: string[];
}

export type NivelAtencaoId = "contextual" | "elevada" | "prioritaria";

export interface TipoViolenciaSinais {
  id: string;
  slug: string;
  nome: string;
  /** Posição no espectro educativo (1 = mais sutil no mapa). Não indica frequência. */
  ordemEspectro: number;
  nivelAtencao: NivelAtencaoId;
  nivelLabel: string;
  nivelDescricao: string;
  resumo: string;
  sinais: string[];
  lembrete: string;
  sourceRefs: string;
}

export type Route =
  | { name: "home" }
  | { name: "biblioteca" }
  | { name: "detalhe"; id: string }
  | { name: "quizzes" }
  | { name: "quiz"; id: string }
  | { name: "sinais" }
  | { name: "simulador" }
  | { name: "chat" }
  | { name: "canais" }
  | { name: "progresso" };

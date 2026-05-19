import type { Tipo, Tema, Camada } from "../types";

export const mockTipos: Tipo[] = [
  { id: "moral",      label: "Assédio moral",            count: 4 },
  { id: "sexual",     label: "Assédio sexual",           count: 3 },
  { id: "discrim",    label: "Discriminação",            count: 2 },
  { id: "organizac",  label: "Violência organizacional", count: 2 },
];

export const mockTemas: Tema[] = [
  { id: "reconhecer", label: "Reconhecer sinais",   count: 5 },
  { id: "lideranca",  label: "Liderança e poder",   count: 3 },
  { id: "testemunha", label: "Modo testemunha",     count: 2 },
  { id: "canais",     label: "Onde buscar apoio",   count: 1 },
];

export const mockCamadas: Camada[] = [
  { id: "intro",    label: "Introdutório" },
  { id: "intermed", label: "Intermediário" },
  { id: "aprof",    label: "Aprofundado" },
];

export const tiposMap: Record<string, string> =
  Object.fromEntries(mockTipos.map(t => [t.id, t.label]));
export const temasMap: Record<string, string> =
  Object.fromEntries(mockTemas.map(t => [t.id, t.label]));

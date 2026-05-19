import type { CanalOficial } from "../types";

export const mockCanais: CanalOficial[] = [
  { num: "180", titulo: "Central de Atendimento à Mulher", who: "Canal público · 24h", desc: "Orientação sobre violência contra a mulher. Pode encaminhar para redes de apoio.", featured: true },
  { num: "100", titulo: "Disque Direitos Humanos",          who: "Canal público · 24h", desc: "Direitos humanos em geral: discriminação, abuso, grupos vulneráveis.", featured: true },
  { num: "MPT",   titulo: "Ministério Público do Trabalho",   who: "Canal público",      desc: "Atua em casos de assédio em contexto de trabalho. Tem ouvidoria online." },
  { num: "CRP/OAB", titulo: "Conselhos profissionais", who: "Canais especializados", desc: "Apoio jurídico e psicológico via OAB e Conselhos de Psicologia regionais." },
  { num: "RH",  titulo: "Canal interno da sua empresa", who: "Canal interno", desc: "RH, ouvidoria, canal de ética ou compliance. Costuma ser o primeiro caminho formal." },
  { num: "SUS", titulo: "CAPS / atendimento psicológico via SUS", who: "Canal público", desc: "Apoio em saúde mental gratuito, com encaminhamento para serviços especializados." },
];

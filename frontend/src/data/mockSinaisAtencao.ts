import type { NivelAtencaoId, TipoViolenciaSinais } from "../types";

/** Rótulos qualitativos do espectro — sem score numérico nem estatísticas de frequência. */
export const NIVEL_ATENCAO: Record<NivelAtencaoId, { label: string; descricao: string }> = {
  contextual: {
    label: "Atenção contextual",
    descricao: "Sinais sutis ou repetidos que pedem observação e reflexão no cotidiano.",
  },
  elevada: {
    label: "Atenção elevada",
    descricao: "Padrões que costumam exigir cuidado com contexto, registro e canais adequados.",
  },
  prioritaria: {
    label: "Atenção prioritária",
    descricao: "Temas de alta sensibilidade: priorize apoio especializado e canais oficiais.",
  },
};

/**
 * Sete tipos mapeados na base Byst.end (seed).
 * Sinais derivados da curadoria educativa — docs/11 e materiais da planilha.
 * Ordem = espectro pedagógico (sutil → grave), não ranking de ocorrência.
 */
export const mockTiposViolenciaSinais: TipoViolenciaSinais[] = [
  {
    id: "microagressoes",
    slug: "microagressoes",
    nome: "Microagressões",
    ordemEspectro: 1,
    nivelAtencao: "contextual",
    nivelLabel: NIVEL_ATENCAO.contextual.label,
    nivelDescricao: NIVEL_ATENCAO.contextual.descricao,
    resumo: "Práticas que podem parecer pequenas, mas cujo impacto se acumula ao longo do tempo.",
    sinais: [
      "Comentários tratados como “piada” ou “opinião”, com alvo recorrente.",
      "Repetição da mesma fala ou tom em relação à mesma pessoa.",
      "Desconforto visível sem espaço seguro para nomear o que aconteceu.",
      "Minimização quando alguém expressa incômodo (“você está exagerando”).",
    ],
    lembrete: "Sinais ajudam a refletir — não substituem avaliação de canais oficiais.",
    sourceRefs: "Base curada · MICROAGRESSÕES",
  },
  {
    id: "discriminacao",
    slug: "discriminacao",
    nome: "Discriminação",
    ordemEspectro: 2,
    nivelAtencao: "contextual",
    nivelLabel: NIVEL_ATENCAO.contextual.label,
    nivelDescricao: NIVEL_ATENCAO.contextual.descricao,
    resumo: "Tratamento desigual ligado a características protegidas, muitas vezes normalizado na rotina.",
    sinais: [
      "Generalizações ou estereótipos usados para explicar pessoas ou grupos.",
      "Oportunidades ou tarefas distribuídas de forma desigual sem critério claro.",
      "Piadas ou comentários que reforçam preconceito, mesmo com “boa intenção”.",
      "Silêncio ou exclusão informal de quem pertence a determinado grupo.",
    ],
    lembrete: "Observar padrão não é diagnosticar um caso concreto.",
    sourceRefs: "Base curada · DISCRIMINAÇÃO",
  },
  {
    id: "violencia-digital",
    slug: "violencia-digital",
    nome: "Violência digital",
    ordemEspectro: 3,
    nivelAtencao: "elevada",
    nivelLabel: NIVEL_ATENCAO.elevada.label,
    nivelDescricao: NIVEL_ATENCAO.elevada.descricao,
    resumo: "Condutas em canais digitais de trabalho que afetam convivência e bem-estar.",
    sinais: [
      "Mensagens ou comentários repetidos em grupos com exposição pública.",
      "Compartilhamento de conteúdo sem consentimento da pessoa envolvida.",
      "Pressão para responder fora do horário ou em canais informais.",
      "Tom de deboche ou isolamento em conversas coletivas.",
    ],
    lembrete: "Ambiente digital não reduz responsabilidade por respeito.",
    sourceRefs: "Base curada · VIOLÊNCIA DIGITAL",
  },
  {
    id: "assedio-moral",
    slug: "assedio-moral",
    nome: "Assédio moral",
    ordemEspectro: 4,
    nivelAtencao: "elevada",
    nivelLabel: NIVEL_ATENCAO.elevada.label,
    nivelDescricao: NIVEL_ATENCAO.elevada.descricao,
    resumo: "Condutas repetidas que podem degradar o ambiente de trabalho de uma pessoa.",
    sinais: [
      "Crítica pública frequente dirigida ao mesmo alvo.",
      "Exposição ou humilhação em reuniões ou canais coletivos.",
      "Mudança súbita de tarefas ou isolamento após divergências.",
      "Assimetria de poder (liderança) presente no contexto.",
    ],
    lembrete: "Contexto, repetição e impacto importam — sem conclusão automática.",
    sourceRefs: "Base curada · ASSÉDIO MORAL",
  },
  {
    id: "assedio-sexual",
    slug: "assedio-sexual",
    nome: "Assédio sexual",
    ordemEspectro: 5,
    nivelAtencao: "elevada",
    nivelLabel: NIVEL_ATENCAO.elevada.label,
    nivelDescricao: NIVEL_ATENCAO.elevada.descricao,
    resumo: "Condutas de natureza sexual não desejadas, especialmente com desequilíbrio de poder.",
    sinais: [
      "Insistência após recusa ou desconforto explícito.",
      "Comentários sobre corpo, aparência ou vida íntima no trabalho.",
      "Convites ou toques repetidos sem espaço para recusar com segurança.",
      "Uso de hierarquia para manter proximidade indesejada.",
    ],
    lembrete: "Liberdade para aceitar, recusar e encerrar a interação é central.",
    sourceRefs: "Base curada · ASSÉDIO SEXUAL",
  },
  {
    id: "importunacao-sexual",
    slug: "importunacao-sexual",
    nome: "Importunação sexual",
    ordemEspectro: 6,
    nivelAtencao: "prioritaria",
    nivelLabel: NIVEL_ATENCAO.prioritaria.label,
    nivelDescricao: NIVEL_ATENCAO.prioritaria.descricao,
    resumo: "Condutas libidinosas sem consentimento em espaços públicos ou de circulação.",
    sinais: [
      "Ato ou gesto de cunho sexual imposto sem anuência.",
      "Situação em que a pessoa não pode recusar com segurança no momento.",
      "Exposição ou constrangimento em ambiente acessível a outras pessoas.",
      "Impacto imediato de medo, vergonha ou impotência.",
    ],
    lembrete: "Conteúdo sensível: busque canais especializados se houver risco imediato.",
    sourceRefs: "Base curada · IMPORTUNAÇÃO SEXUAL",
  },
  {
    id: "estupro",
    slug: "estupro",
    nome: "Estupro",
    ordemEspectro: 7,
    nivelAtencao: "prioritaria",
    nivelLabel: NIVEL_ATENCAO.prioritaria.label,
    nivelDescricao: NIVEL_ATENCAO.prioritaria.descricao,
    resumo: "Violência sexual grave. A plataforma oferece orientação educativa, não investigação.",
    sinais: [
      "Relato de ato sexual imposto mediante violência ou grave ameaça.",
      "Impossibilidade de consentir livremente no momento.",
      "Necessidade de preservar segurança e buscar apoio especializado.",
      "Importância de não pressionar a pessoa a relatar detalhes.",
    ],
    lembrete: "Em risco imediato, acione canais de emergência e apoio listados em Canais oficiais.",
    sourceRefs: "Base curada · ESTUPRO · conteúdo de alta sensibilidade",
  },
];

export function getTipoViolenciaSinais(slug: string): TipoViolenciaSinais | undefined {
  return mockTiposViolenciaSinais.find(t => t.id === slug || t.slug === slug);
}

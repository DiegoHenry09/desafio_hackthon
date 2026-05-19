import type { QuizAtividade } from "../types";

const REFLEXAO_GERAL =
  "Vale comparar com a leitura mais segura abaixo — sem julgamento sobre você ou sobre um caso concreto.";

function op(
  id: string,
  texto: string,
  kind: "safer" | "neutral" | "reflect",
  reflexao?: string,
){
  return {
    id,
    texto,
    kind,
    explica: reflexao ?? REFLEXAO_GERAL,
  };
}

/** Banco rascunho — docs/13_BANCO_RASCUNHO_QUIZ_E_ATIVIDADES.md */
export const mockQuizzes: QuizAtividade[] = [
  {
    id: "QUIZ-001",
    tipoViolencia: "MICROAGRESSOES",
    tema: "O que é?",
    titulo: "Microagressões · compreensão geral",
    status: "draft",
    source_id: 140,
    source_row: 2,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Verificar compreensão geral sobre microagressões como condutas sutis e repetidas.",
    intro: "Uma pergunta para refletir sobre o que costuma importar ao estudar microagressões — sem classificar situações reais.",
    pergunta: {
      id: "p1",
      texto: "Qual alternativa melhor representa o cuidado central ao estudar microagressões?",
      opcoes: [
        op("a", "Observar apenas a intenção de quem falou.", "reflect",
          "A intenção pode ser relevante, mas sozinha não costuma bastar para entender o impacto acumulado."),
        op("b", "Considerar também repetição, contexto e impacto acumulado.", "safer",
          "Esta leitura equilibra contexto, repetição e efeito — sem transformar sinais em acusação."),
        op("c", "Ignorar quando a fala parecer pequena.", "reflect",
          "Falas que parecem pequenas ainda podem ter efeito cumulativo; vale observar com cuidado."),
      ],
      feedback: {
        situacao: "Estudo educativo sobre microagressões",
        leituraSegura: "Considerar repetição, contexto e impacto acumulado — reconhecendo sinais e refletindo sobre efeitos, sem julgar um caso individual.",
        porQue: "A base trata microagressões como práticas que podem parecer sutis, mas cujo impacto se acumula.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 140", ano: 2025, tipo: "Rascunho · row 2" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada considera que a base trata microagressões como práticas que podem parecer sutis, mas cujo impacto se acumula. O foco educativo é reconhecer sinais e refletir sobre efeitos, sem julgar um caso individual.",
    leituraSegura: "Considerar repetição, contexto e impacto acumulado.",
  },
  {
    id: "QUIZ-002",
    tipoViolencia: "ASSEDIO MORAL",
    tema: "Assédio moral × Demanda adequada",
    titulo: "Assédio moral · demanda profissional",
    status: "draft",
    source_id: 130,
    source_row: 20,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Diferenciar cobrança de trabalho e sinais de conduta inadequada sem dar veredito.",
    intro: "Reflexão sobre critérios que ajudam a observar contexto — sem concluir se uma situação concreta é ou não assédio.",
    pergunta: {
      id: "p1",
      texto: "Em uma atividade educativa, qual critério ajuda a diferenciar uma demanda profissional de uma situação que merece atenção?",
      opcoes: [
        op("a", "Se existe orientação objetiva, respeito e relação com o trabalho.", "safer",
          "Esta leitura evita conclusões automáticas e considera contexto, respeito e finalidade da demanda."),
        op("b", "Se a pessoa ficou desconfortável uma única vez, sem avaliar contexto.", "reflect",
          "Um episódio isolado pede contexto antes de qualquer conclusão — o desconforto importa, mas o quadro completo também."),
        op("c", "Se a cobrança veio de uma liderança, automaticamente.", "reflect",
          "A hierarquia é um elemento de contexto, não um critério automático de julgamento."),
      ],
      feedback: {
        situacao: "Demanda profissional × sinais de atenção",
        leituraSegura: "Observar se há orientação objetiva, respeito e relação com o trabalho — a plataforma ajuda a observar sinais, não a decidir casos concretos.",
        porQue: "Evita conclusões automáticas e considera contexto, respeito e finalidade da demanda.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 130", ano: 2025, tipo: "Rascunho · row 20" },
      },
    },
    feedbackEducativo:
      "A alternativa recomendada evita conclusões automáticas e considera contexto, respeito e finalidade da demanda. A plataforma deve ajudar a observar sinais, não decidir casos concretos.",
    leituraSegura: "Orientação objetiva, respeito e relação com o trabalho.",
  },
  {
    id: "QUIZ-003",
    tipoViolencia: "ASSEDIO MORAL",
    tema: "Silêncio não é concordância",
    titulo: "Assédio moral · silêncio e contexto",
    status: "draft",
    source_id: 196,
    source_row: 22,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Reforçar que ausência de reação não deve ser tratada como aceitação.",
    intro: "Uma leitura cuidadosa sobre silêncio em situações de desconforto — sem pressionar ninguém a reagir.",
    pergunta: {
      id: "p1",
      texto: "Em uma situação hipotética de desconforto no trabalho, qual leitura é mais cuidadosa sobre o silêncio de alguém?",
      opcoes: [
        op("a", "Silêncio sempre significa concordância.", "reflect",
          "Silêncio pode ter muitas causas; tratá-lo sempre como concordância simplifica demais a realidade."),
        op("b", "Silêncio pode ter várias causas e merece leitura cuidadosa do contexto.", "safer",
          "Esta resposta preserva cuidado e evita conclusões simplistas."),
        op("c", "Silêncio elimina a necessidade de observar sinais.", "reflect",
          "Mesmo sem fala explícita, contexto e sinais ainda podem merecer atenção educativa."),
      ],
      feedback: {
        situacao: "Silêncio em contexto de desconforto",
        leituraSegura: "Silêncio pode ter várias causas — olhar para contexto, sinais e segurança da pessoa envolvida.",
        porQue: "Preserva cuidado e evita conclusões simplistas ou pressão para reagir.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 196", ano: 2025, tipo: "Rascunho · row 22" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada preserva cuidado e evita conclusões simplistas. A base orienta olhar para contexto, sinais e segurança da pessoa envolvida.",
    leituraSegura: "Silêncio pode ter várias causas; vale ler o contexto com cuidado.",
  },
  {
    id: "QUIZ-004",
    tipoViolencia: "ASSEDIO SEXUAL",
    tema: "Flerte × limites",
    titulo: "Assédio sexual · limites e respeito",
    status: "draft",
    source_id: 77,
    source_row: 30,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Trabalhar limites e consentimento em linguagem educativa.",
    intro: "Reflexão sobre respeito aos limites em interações — conteúdo educativo, não avaliação de caso concreto.",
    pergunta: {
      id: "p1",
      texto: "Qual elemento deve ser observado em uma interação para avaliar se há respeito aos limites?",
      opcoes: [
        op("a", "Liberdade para aceitar, recusar e encerrar a interação.", "safer",
          "Esta leitura foca em liberdade, limite e respeito."),
        op("b", "Insistência até a outra pessoa mudar de ideia.", "reflect",
          "Insistência após recusa costuma reduzir a liberdade da outra pessoa — vale observar com cuidado."),
        op("c", "Hierarquia como justificativa para continuar insistindo.", "reflect",
          "Posição hierárquica não substitui consentimento nem limites pessoais."),
      ],
      feedback: {
        situacao: "Limites em interações",
        leituraSegura: "Liberdade para aceitar, recusar e encerrar — objetivo educativo, sem substituir avaliação de caso concreto.",
        porQue: "Foca em liberdade, limite e respeito.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 77", ano: 2025, tipo: "Rascunho · row 30" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada foca em liberdade, limite e respeito. O objetivo é educativo e não substitui avaliação de caso concreto.",
    leituraSegura: "Liberdade para aceitar, recusar e encerrar a interação.",
  },
  {
    id: "QUIZ-005",
    tipoViolencia: "ASSEDIO SEXUAL",
    tema: "Silêncio não é consentimento",
    titulo: "Assédio sexual · consentimento",
    status: "draft",
    source_id: 90,
    source_row: 32,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Reforçar que consentimento exige liberdade e clareza.",
    intro: "Uma pergunta sobre consentimento em linguagem educativa — sem parecer sobre situação real.",
    pergunta: {
      id: "p1",
      texto: "Em uma atividade educativa sobre consentimento, qual alternativa é mais segura?",
      opcoes: [
        op("a", "Interpretar silêncio como autorização.", "reflect",
          "Silêncio não costuma ser tratado como consentimento livre em materiais educativos cuidadosos."),
        op("b", "Considerar que consentimento precisa ser livre e respeitar limites.", "safer",
          "Esta alternativa evita pressupostos e reforça respeito aos limites."),
        op("c", "Presumir que desconforto não importa se não houve fala direta.", "reflect",
          "Desconforto pode ser sinal de atenção mesmo sem denúncia verbal explícita."),
      ],
      feedback: {
        situacao: "Consentimento em contexto educativo",
        leituraSegura: "Consentimento livre e respeito aos limites — a resposta não avalia caso individual.",
        porQue: "Evita pressupostos e reforça respeito aos limites.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 90", ano: 2025, tipo: "Rascunho · row 32" },
      },
    },
    feedbackEducativo:
      "A alternativa recomendada evita pressupostos e reforça respeito aos limites. A resposta não avalia caso individual.",
    leituraSegura: "Consentimento precisa ser livre e respeitar limites.",
  },
  {
    id: "QUIZ-006",
    tipoViolencia: "VIOLENCIA DIGITAL",
    tema: "O que é?",
    titulo: "Violência digital · convivência online",
    status: "draft",
    source_id: 131,
    source_row: 37,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Reconhecer que ambientes digitais também exigem responsabilidade.",
    intro: "Princípios para interações em canais digitais de trabalho — sem inventar políticas internas.",
    pergunta: {
      id: "p1",
      texto: "Qual princípio melhor orienta interações em canais digitais de trabalho?",
      opcoes: [
        op("a", "Regras de respeito também valem em ambientes digitais.", "safer",
          "O cuidado com respeito e convivência também se aplica a interações digitais."),
        op("b", "O ambiente digital elimina responsabilidade.", "reflect",
          "Ambientes digitais costumam exigir os mesmos cuidados de respeito que o presencial."),
        op("c", "Mensagens em grupo não geram impacto.", "reflect",
          "Mensagens em grupo podem afetar clima e bem-estar — o formato não anula o impacto."),
      ],
      feedback: {
        situacao: "Convivência em canais digitais",
        leituraSegura: "Regras de respeito também valem em ambientes digitais.",
        porQue: "Reforça responsabilidade compartilhada no ambiente online.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 131", ano: 2025, tipo: "Rascunho · row 37" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada reforça que o cuidado com respeito e convivência também se aplica a interações digitais.",
    leituraSegura: "Regras de respeito também valem em ambientes digitais.",
  },
  {
    id: "QUIZ-007",
    tipoViolencia: "MICROAGRESSOES",
    tema: "Mudanças de hábitos",
    titulo: "Microagressões · escuta e hábitos",
    status: "draft",
    source_id: 209,
    source_row: 15,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Estimular reflexão sobre escuta e mudança de comportamento.",
    intro: "Atitude educativa diante de relato de desconforto — sem julgar como a pessoa deveria reagir.",
    pergunta: {
      id: "p1",
      texto: "Qual atitude combina melhor com uma postura educativa diante de um relato de desconforto?",
      opcoes: [
        op("a", "Escutar antes de minimizar ou corrigir.", "safer",
          "Escuta e cuidado favorecem aprendizagem de conduta respeitosa."),
        op("b", "Explicar rapidamente que a pessoa entendeu errado.", "reflect",
          "Minimizar ou corrigir de imediato pode fechar espaço para a pessoa se sentir ouvida."),
        op("c", "Tratar como exagero para encerrar a conversa.", "reflect",
          "Encerrar rápido pode transmitir que o desconforto não importa."),
      ],
      feedback: {
        situacao: "Relato de desconforto",
        leituraSegura: "Escutar antes de minimizar — foco em aprendizagem de conduta respeitosa.",
        porQue: "Favorece escuta e cuidado, sem julgamento moral da pessoa.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 209", ano: 2025, tipo: "Rascunho · row 15" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada favorece escuta e cuidado. O foco é aprendizagem de conduta respeitosa.",
    leituraSegura: "Escutar antes de minimizar ou corrigir.",
  },
  {
    id: "QUIZ-008",
    tipoViolencia: "DISCRIMINACAO",
    tema: "Mudanças de hábitos",
    titulo: "Discriminação · cultura respeitosa",
    status: "draft",
    source_id: 212,
    source_row: 16,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Promover cuidado com generalizações e escuta de experiências diferentes.",
    intro: "Condutas que favorecem cultura mais respeitosa — conteúdo em rascunho para validação humana.",
    pergunta: {
      id: "p1",
      texto: "Qual conduta favorece uma cultura mais respeitosa?",
      opcoes: [
        op("a", "Evitar generalizações e escutar experiências diferentes.", "safer",
          "Esta leitura reforça respeito, escuta e revisão de hábitos de comunicação."),
        op("b", "Usar estereótipos como atalho para entender pessoas.", "reflect",
          "Estereótipos costumam simplificar demais e podem ferir dignidade."),
        op("c", "Ignorar impactos quando a intenção parece boa.", "reflect",
          "Boa intenção não elimina o impacto que uma fala ou atitude pode ter."),
      ],
      feedback: {
        situacao: "Cultura e comunicação",
        leituraSegura: "Evitar generalizações e escutar experiências diferentes.",
        porQue: "Reforça respeito, escuta e revisão de hábitos.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 212", ano: 2025, tipo: "Rascunho · row 16" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada reforça respeito, escuta e revisão de hábitos de comunicação.",
    leituraSegura: "Evitar generalizações e escutar experiências diferentes.",
  },
  {
    id: "QUIZ-009",
    tipoViolencia: "MICROAGRESSOES",
    tema: "Prevenção na cultura",
    titulo: "Microagressões · prevenção contínua",
    status: "draft",
    source_id: 179,
    source_row: 18,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Conectar prevenção à prática cotidiana, não apenas resposta a crise.",
    intro: "O que significa prevenção contínua no cotidiano — sem prometer que cultura previne todos os casos.",
    pergunta: {
      id: "p1",
      texto: "Qual ideia melhor representa prevenção contínua?",
      opcoes: [
        op("a", "Agir apenas quando uma situação fica grave.", "reflect",
          "Prevenção contínua costuma incluir o cotidiano, não só momentos de crise."),
        op("b", "Construir cultura de respeito no cotidiano.", "safer",
          "Prevenção como prática contínua de cultura e convivência."),
        op("c", "Tratar pequenos sinais como irrelevantes.", "reflect",
          "Pequenos sinais podem fazer parte de um padrão que merece atenção educativa."),
      ],
      feedback: {
        situacao: "Prevenção no trabalho",
        leituraSegura: "Construir cultura de respeito no cotidiano — prevenção como prática contínua.",
        porQue: "Entende prevenção como prática contínua, não só reação a crise.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 179", ano: 2025, tipo: "Rascunho · row 18" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada entende prevenção como prática contínua de cultura e convivência.",
    leituraSegura: "Construir cultura de respeito no cotidiano.",
  },
  {
    id: "QUIZ-010",
    tipoViolencia: "ASSEDIO MORAL",
    tema: "Entenda seu papel",
    titulo: "Assédio moral · papel de testemunhas",
    status: "draft",
    source_id: 200,
    source_row: 52,
    usage_policy: "rag_allowed_with_guardrails",
    objetivoPedagogico: "Reforçar responsabilidade coletiva e papel de testemunhas sem expor ninguém.",
    intro: "Postura de terceiros em situação hipotética — equilíbrio entre apoio e cuidado.",
    pergunta: {
      id: "p1",
      texto: "Em uma situação hipotética observada por terceiros, qual postura tende a ser mais segura?",
      opcoes: [
        op("a", "Apoiar com cuidado e considerar canais adequados.", "safer",
          "Equilibra apoio, cuidado e encaminhamento — protege pessoas e evita exposição."),
        op("b", "Expor publicamente a pessoa afetada para resolver rápido.", "reflect",
          "Exposição pública pode aumentar constrangimento ou risco para quem já está em desconforto."),
        op("c", "Ignorar sempre para não se envolver.", "reflect",
          "Ignorar pode manter ciclos de silêncio; envolvimento pede avaliar segurança primeiro."),
      ],
      feedback: {
        situacao: "Papel de testemunha",
        leituraSegura: "Apoiar com cuidado e considerar canais adequados — sem exposição desnecessária.",
        porQue: "Equilibra apoio, cuidado e encaminhamento.",
        fonte: { titulo: "Base curada Byst.end", autor: "source_id 200", ano: 2025, tipo: "Rascunho · row 52" },
      },
    },
    feedbackEducativo:
      "A resposta recomendada equilibra apoio, cuidado e encaminhamento. O objetivo é proteger pessoas e evitar exposição.",
    leituraSegura: "Apoiar com cuidado e considerar canais adequados.",
  },
];

export function getQuizById(id: string): QuizAtividade | undefined {
  return mockQuizzes.find(q => q.id === id);
}

const TIPO_LABELS: Record<string, string> = {
  MICROAGRESSOES: "Microagressões",
  "ASSEDIO MORAL": "Assédio moral",
  "ASSEDIO SEXUAL": "Assédio sexual",
  "VIOLENCIA DIGITAL": "Violência digital",
  DISCRIMINACAO: "Discriminação",
};

export function labelTipoViolencia(tipo: string): string {
  return TIPO_LABELS[tipo] ?? tipo;
}

export interface QuizGrupo {
  tipoViolencia: string;
  label: string;
  quizzes: QuizAtividade[];
}

export function groupQuizzesByTipo(): QuizGrupo[]{
  const map = new Map<string, QuizAtividade[]>();
  for (const q of mockQuizzes){
    const list = map.get(q.tipoViolencia) ?? [];
    list.push(q);
    map.set(q.tipoViolencia, list);
  }
  return Array.from(map.entries()).map(([tipoViolencia, quizzes]) => ({
    tipoViolencia,
    label: labelTipoViolencia(tipoViolencia),
    quizzes,
  }));
}

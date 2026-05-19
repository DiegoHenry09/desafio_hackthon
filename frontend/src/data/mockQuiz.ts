import type { Quiz } from "../types";

export const mockQuiz: Quiz = {
  id: "q-001",
  titulo: "Reconhecer sinais de atenção",
  status: "draft",
  intro: "Três perguntas curtas. Nenhuma resposta é tratada como certa ou errada — vamos olhar juntos qual leitura tende a ser a mais cuidadosa.",
  perguntas: [
    {
      id: "q1",
      texto: "Em uma reunião de equipe, um colega faz comentários jocosos sobre a mesma pessoa pela terceira semana seguida. Qual leitura tende a ser mais cuidadosa?",
      opcoes: [
        { id: "a", texto: "É só uma piada interna do time, faz parte da cultura.", kind: "flag",
          explica: "Quando o mesmo alvo é mencionado repetidamente, vale observar o padrão — independente da intenção." },
        { id: "b", texto: "A repetição e o alvo fixo são sinais de atenção; vale conversar em particular com a pessoa.", kind: "safer",
          explica: "Frequência e alvo fixo são elementos relevantes de contexto. Conversar em particular respeita o tempo da pessoa." },
        { id: "c", texto: "Quem se sentir mal pode pedir para parar, é responsabilidade individual.", kind: "flag",
          explica: "Em ambientes com diferença hierárquica, pedir para parar pode ter custo. O contexto pesa." },
      ],
      feedback: {
        situacao: "Comentários jocosos repetidos sobre uma mesma pessoa.",
        leituraSegura: "Vale observar contexto, frequência e impacto. Se a pessoa demonstrar desconforto, conversar em particular costuma ser um passo mais seguro do que confrontar em público.",
        porQue: "Repetição + alvo fixo + assimetria de poder são elementos que costumam aparecer em situações que merecem cuidado. Isso não é um veredito — é um sinal de atenção.",
        fonte: { titulo: "Recommendation 206 — Violence and Harassment", autor: "OIT", ano: 2019, tipo: "Documento internacional" },
      },
    },
    {
      id: "q2",
      texto: "Sua liderança convida você para tomar algo fora do horário pela terceira vez no mês, mesmo após você ter recusado nas duas anteriores. Qual seria uma conduta mais segura para a empresa e para você?",
      opcoes: [
        { id: "a", texto: "Aceitar para não criar atrito com a liderança.", kind: "flag",
          explica: "Aceitar por medo de retaliação indica que o convite pode estar criando pressão — vale observar." },
        { id: "b", texto: "Recusar novamente e registrar a percepção para si mesmo, mantendo a relação profissional.", kind: "safer",
          explica: "Registrar para si mesmo ajuda a manter clareza, mesmo que você não decida agir agora." },
        { id: "c", texto: "Aceitar uma vez e ver se os convites diminuem.", kind: "flag",
          explica: "Aceitar como estratégia para reduzir incômodo costuma reforçar o padrão, não interrompê-lo." },
      ],
      feedback: {
        situacao: "Convite repetido fora do horário, vindo de pessoa em posição superior.",
        leituraSegura: "Quando há recusa anterior e o convite se repete, é razoável manter a relação no terreno profissional e registrar a percepção. Para situações em que isso afete a sua tranquilidade no trabalho, há canais que podem orientar.",
        porQue: "Assimetria hierárquica + recusa anterior + repetição = elementos de contexto que justificam cuidado.",
        fonte: { titulo: "Workplace harassment — practical guide", autor: "EU-OSHA", ano: 2021, tipo: "Guia institucional" },
      },
    },
    {
      id: "q3",
      texto: "Você testemunha um colega sendo interrompido sistematicamente em reuniões, sempre pela mesma pessoa. O que vale considerar como passo inicial?",
      opcoes: [
        { id: "a", texto: "Não é da sua conta; melhor não se envolver.", kind: "flag",
          explica: "Quem testemunha pode ter um papel de apoio, sem precisar resolver o caso." },
        { id: "b", texto: "Conversar em particular com a pessoa interrompida, perguntar como ela está e oferecer apoio.", kind: "safer",
          explica: "Conversa em particular respeita o tempo e a decisão da pessoa afetada." },
        { id: "c", texto: "Confrontar publicamente quem interrompe na próxima reunião.", kind: "flag",
          explica: "Confronto público pode expor a pessoa afetada sem que ela tenha decidido isso." },
      ],
      feedback: {
        situacao: "Padrão de interrupções dirigidas sempre à mesma pessoa.",
        leituraSegura: "Quem testemunha pode oferecer apoio sem assumir o papel de quem deve resolver. A pessoa afetada decide o ritmo.",
        porQue: "Testemunhar é diferente de investigar. Apoio em particular preserva agência da pessoa afetada.",
        fonte: { titulo: "Material curado Byst.end (rascunho)", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
      },
    },
  ],
};

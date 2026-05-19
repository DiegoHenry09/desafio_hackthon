import type { Cenario } from "../types";

export const mockCenarios: Cenario[] = [
  {
    id: "s-001",
    status: "draft",
    titulo: "A reunião 1:1 que mudou de tom",
    role: "Você é colaborador(a) sênior",
    narrativa: "Há três semanas, suas reuniões 1:1 com a liderança passaram a misturar feedback de trabalho com comentários pessoais sobre roupa e jeito de falar. Você sai dessas reuniões com a sensação de estar sendo avaliada como pessoa, não pelo trabalho.",
    sinais: [
      "Comentários pessoais surgiram após você ter discordado de uma decisão técnica.",
      "Comentários sobre roupa e aparência não aparecem nas 1:1 de outros colegas do time.",
      "A frequência aumentou nas últimas três semanas.",
    ],
    condutas: [
      {
        id: "a",
        texto: "Levar o tema na próxima 1:1, sozinha, pedindo para a liderança parar com os comentários pessoais.",
        kind: "flag",
        feedback: "Em ambientes com assimetria hierárquica, levar o tema sozinha pode criar exposição extra. Não é errado — só vale considerar o custo possível.",
      },
      {
        id: "b",
        texto: "Registrar por escrito as observações (datas, comentários, contexto) e procurar o canal interno de RH ou ouvidoria para orientação.",
        kind: "safer",
        feedback: "Registrar mantém clareza. Procurar o canal interno permite que a situação seja avaliada por quem tem ferramentas para isso.",
      },
      {
        id: "c",
        texto: "Não fazer nada e esperar passar; talvez seja impressão sua.",
        kind: "flag",
        feedback: "Esperar passar é uma escolha legítima — mas vale registrar para si mesma, pelo menos. Padrões raramente diminuem sem intervenção.",
      },
    ],
    leituraSegura: "Em situações com sinais de atenção e diferença hierárquica, registrar e procurar canais internos costuma ser o caminho de menor risco para todos os lados.",
    riscoEtico: "Não há aqui um veredito sobre a liderança envolvida. Há um padrão que merece olhar atento por parte de quem tem ferramentas para isso.",
    relacionados: ["c-002", "c-005", "c-009"],
  },
  {
    id: "s-002",
    status: "draft",
    titulo: "O 'jeito do time' que isola alguém",
    role: "Você é colega de time",
    narrativa: "Uma colega nova chegou há dois meses. Ela não participa das piadas internas do time. Você começou a notar que ela tem sido cada vez menos chamada para almoços e que comentários sobre 'gente que não pega o espírito' apareceram em algumas conversas.",
    sinais: [
      "Comentários públicos que parecem dirigidos a uma pessoa específica.",
      "Padrão de exclusão informal (almoços, conversas paralelas).",
      "Discrepância entre 'cultura do time' e bem-estar da pessoa nova.",
    ],
    condutas: [
      {
        id: "a",
        texto: "Convidar a colega para um café individual, perguntar como ela está e ouvir sem oferecer diagnóstico.",
        kind: "safer",
        feedback: "Conversa em particular respeita o tempo dela. Você não precisa resolver — apenas mostrar que percebeu.",
      },
      {
        id: "b",
        texto: "Levar o tema na próxima reunião pública do time, pedindo para todos serem mais inclusivos.",
        kind: "flag",
        feedback: "Expor publicamente sem combinar com a pessoa afetada pode aumentar o isolamento. Conversa em particular costuma vir antes.",
      },
      {
        id: "c",
        texto: "Concluir que a colega é que precisa se adaptar ao time.",
        kind: "flag",
        feedback: "Quando o ônus de adaptação cai sempre sobre quem chega, vale considerar se o time está aberto à diferença.",
      },
    ],
    leituraSegura: "Quem testemunha exclusão informal pode oferecer apoio em particular, sem assumir o papel de quem resolve o caso.",
    riscoEtico: "Não se trata de acusar o time. Trata-se de observar se o 'jeito do time' está deixando alguém de fora — e o que cada um pode fazer com isso.",
    relacionados: ["c-003", "c-004", "c-006"],
  },
  {
    id: "s-003",
    status: "draft",
    titulo: "Crítica em público, elogio em privado",
    role: "Você é membro de equipe",
    narrativa: "Seu gerente costuma criticar seu trabalho em reuniões abertas, com tom enérgico. Em conversas privadas, ele diz que valoriza muito seu trabalho e que 'é só o jeito dele puxar'.",
    sinais: [
      "Crítica recorrente em ambiente público vs. elogio em privado.",
      "Tom enérgico dirigido principalmente a você.",
      "Sentir-se ansiosa antes de reuniões abertas.",
    ],
    condutas: [
      {
        id: "a",
        texto: "Aceitar como 'jeito dele' e tentar não levar para o lado pessoal.",
        kind: "flag",
        feedback: "Personalidade não é, por si só, justificativa para exposição pública repetida. Vale observar o impacto sobre você.",
      },
      {
        id: "b",
        texto: "Pedir uma 1:1 e propor que o feedback seja feito em privado, mantendo registros do combinado.",
        kind: "safer",
        feedback: "Combinar formato de feedback é um pedido razoável e profissional. Registro escrito ajuda a manter clareza.",
      },
      {
        id: "c",
        texto: "Responder em público da mesma forma, na próxima reunião.",
        kind: "flag",
        feedback: "Espelhar o comportamento raramente quebra o padrão; tende a escalá-lo.",
      },
    ],
    leituraSegura: "Pedir mudança de formato (público → privado) é um caminho profissional e mantém a porta aberta para canais formais, se necessário depois.",
    riscoEtico: "A diferença entre 'jeito enérgico' e 'pressão sistemática' está no contexto: alvo fixo, repetição e impacto.",
    relacionados: ["c-001", "c-002", "c-008"],
  },
];

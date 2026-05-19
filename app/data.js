/* ============================================================
 * Byst.end · mock data
 * All content marked as draft/educational; no sensitive verdicts.
 * Mirror in TypeScript at frontend/src/data/*.ts
 * ============================================================ */

// ---------- tipos / temas / camadas (Biblioteca) ----------
window.mockTipos = [
  { id: "moral",      label: "Assédio moral",           count: 4 },
  { id: "sexual",     label: "Assédio sexual",          count: 3 },
  { id: "discrim",    label: "Discriminação",           count: 2 },
  { id: "organizac",  label: "Violência organizacional",count: 2 },
];

window.mockTemas = [
  { id: "reconhecer", label: "Reconhecer sinais",     count: 5 },
  { id: "lideranca",  label: "Liderança e poder",     count: 3 },
  { id: "testemunha", label: "Modo testemunha",       count: 2 },
  { id: "canais",     label: "Onde buscar apoio",     count: 1 },
];

window.mockCamadas = [
  { id: "intro",      label: "Introdutório" },
  { id: "intermed",   label: "Intermediário" },
  { id: "aprof",      label: "Aprofundado" },
];

// ---------- micro-conteúdos ----------
window.mockConteudos = [
  {
    id: "c-001",
    titulo: 'Quando uma "brincadeira" deixa de ser brincadeira',
    resumo: "Repetição, alvo fixo e impacto observável: três aspectos que vale prestar atenção em interações cotidianas no trabalho.",
    tipo: "moral",
    tema: "reconhecer",
    camada: "intro",
    formato: "Leitura",
    tempo: 5,
    usage_policy: "public",
    source_id: "OIT-2019-§4",
    source_row: 142,
    status: "draft",
    nanoconteudos: [
      { lbl: "Sinal de atenção", txt: "Comentários repetidos sobre a mesma pessoa, sempre na frente de outras, com tom depreciativo." },
      { lbl: "Contexto importa", txt: "Frequência, alvo fixo e impacto na rotina de trabalho ajudam a observar a situação com mais clareza." },
      { lbl: "Conduta mais segura", txt: "Pausar a interação, registrar o que ocorreu em particular e, se necessário, procurar canais oficiais." },
    ],
    paragrafos: [
      "Brincadeiras no ambiente de trabalho podem fazer parte do tecido social das equipes. Vale, contudo, observar contexto, frequência e impacto sobre a pessoa que é o alvo.",
      "Quando o mesmo tipo de comentário se repete sobre a mesma pessoa, em público, e essa pessoa demonstra desconforto, pode haver sinais de atenção que justifiquem cuidado.",
      "Esta é uma observação educativa. Nenhuma situação específica pode ser classificada como assédio apenas a partir desta leitura — para casos reais, procure RH, ouvidoria, sindicato ou canais públicos."
    ],
    fontes: [
      { titulo: "Recommendation 206 — Violence and Harassment", autor: "OIT", ano: 2019, tipo: "Documento internacional" },
    ],
  },
  {
    id: "c-002",
    titulo: "Reuniões 1:1 e poder hierárquico",
    resumo: "Conversas individuais com chefias têm uma assimetria que vale considerar em qualquer leitura da interação.",
    tipo: "moral",
    tema: "lideranca",
    camada: "intermed",
    formato: "Leitura",
    tempo: 7,
    usage_policy: "public",
    source_id: "EU-OSHA-2021-§2.3",
    source_row: 88,
    status: "draft",
    nanoconteudos: [
      { lbl: "Sinal de atenção", txt: "Cobranças sistemáticas em reuniões 1:1 que não aparecem em registros públicos do time." },
      { lbl: "Vale observar", txt: "Diferença entre feedback estruturado e crítica pessoal recorrente." },
      { lbl: "Apoio possível", txt: "Pedir presença de uma terceira pessoa em reuniões pode ajudar a manter clareza." },
    ],
    paragrafos: [
      "Reuniões individuais com chefias são um espaço legítimo de feedback. A assimetria de poder, porém, faz com que sinais sutis possam passar despercebidos por quem está na posição subordinada.",
      "Manter registros (datas, temas, decisões) e, quando possível, pedir notas escritas ao final pode ajudar a manter a comunicação clara.",
      "Não há aqui uma fórmula para identificar abuso — apenas elementos de contexto que vale observar."
    ],
    fontes: [
      { titulo: "Workplace harassment — practical guide", autor: "EU-OSHA", ano: 2021, tipo: "Guia institucional" },
    ],
  },
  {
    id: "c-003",
    titulo: "Modo testemunha: o que dizer ao colega",
    resumo: "Quem observa também pode agir. Três frases curtas para mostrar apoio sem expor a pessoa.",
    tipo: "moral",
    tema: "testemunha",
    camada: "intro",
    formato: "Leitura",
    tempo: 4,
    usage_policy: "educational",
    source_id: "BYST-CUR-2025-T03",
    source_row: 31,
    status: "draft",
    nanoconteudos: [
      { lbl: "Frase 1", txt: '"Notei o que aconteceu. Você quer falar sobre isso, ou prefere outro momento?"' },
      { lbl: "Frase 2", txt: '"Posso te acompanhar até o RH/ouvidoria, se você quiser."' },
      { lbl: "Frase 3", txt: '"Não precisa decidir agora. Estou por aqui."' },
    ],
    paragrafos: [
      "Pessoas que testemunham situações desconfortáveis no trabalho podem ter um papel importante de apoio — sem assumir o papel de quem deve resolver o caso.",
      "Pequenas frases ditas em particular podem fazer diferença para alguém que ainda não sabe se está interpretando bem a situação.",
      "Importante: testemunhar não é investigar. A pessoa afetada decide o que fazer com a própria história."
    ],
    fontes: [
      { titulo: "Material curado Byst.end (rascunho)", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
    ],
  },
  {
    id: "c-004",
    titulo: "Discriminação cotidiana e microagressões",
    resumo: "Comentários aparentemente inofensivos, dirigidos repetidamente a um mesmo grupo, podem acumular impacto.",
    tipo: "discrim",
    tema: "reconhecer",
    camada: "intermed",
    formato: "Leitura",
    tempo: 6,
    usage_policy: "public",
    source_id: "BR-LEI-14457-2022",
    source_row: 12,
    status: "draft",
    nanoconteudos: [
      { lbl: "O que observar", txt: "Comentários repetidos sobre características protegidas (raça, gênero, idade, religião)." },
      { lbl: "Por que importa", txt: "Microagressões acumuladas afetam saúde mental e produtividade." },
      { lbl: "Conduta segura", txt: "Quando se sentir confortável, sinalizar de forma factual o impacto sobre o trabalho." },
    ],
    paragrafos: [
      "Comentários e perguntas que parecem isolados podem, juntos, criar um padrão. Esse padrão é um elemento de contexto relevante.",
      "Não existe uma régua única para microagressões. Vale considerar o quanto a interação afeta a capacidade da pessoa de fazer seu trabalho.",
      "Em situações que envolvam características protegidas pela legislação, há canais específicos que podem orientar — incluindo o canal interno da empresa e órgãos públicos."
    ],
    fontes: [
      { titulo: "Lei nº 14.457/2022 — CIPA + assédio", autor: "Brasil", ano: 2022, tipo: "Referência legal informativa" },
    ],
  },
  {
    id: "c-005",
    titulo: "Sobre comentários sobre aparência",
    resumo: "Padrões de elogios e comentários sobre corpo, roupas e aparência podem se tornar incômodos, mesmo bem-intencionados.",
    tipo: "sexual",
    tema: "reconhecer",
    camada: "intro",
    formato: "Leitura",
    tempo: 5,
    usage_policy: "public",
    source_id: "OIT-2019-§7",
    source_row: 188,
    status: "draft",
    nanoconteudos: [
      { lbl: "Vale observar", txt: "Frequência, contexto e se há clareza de que a pessoa se sente confortável com o tipo de comentário." },
      { lbl: "Sinal de atenção", txt: "Comentários recorrentes sobre corpo ou roupa, especialmente em ambiente assimétrico." },
      { lbl: "Conduta segura", txt: "Manter conversas profissionais focadas no trabalho. Em dúvida, evite o comentário." },
    ],
    paragrafos: [
      "Comentários sobre aparência podem ser feitos com boa intenção. Ainda assim, vale considerar como são recebidos — especialmente em relações com diferença de hierarquia.",
      "O critério não é a intenção de quem fala, mas o impacto sobre quem ouve, ao longo do tempo.",
      "Esta é uma orientação educativa. Para situações concretas, consulte os canais oficiais."
    ],
    fontes: [
      { titulo: "Recommendation 206 — Violence and Harassment", autor: "OIT", ano: 2019, tipo: "Documento internacional" },
    ],
  },
  {
    id: "c-006",
    titulo: "Quando o silêncio organizacional vira pressão",
    resumo: "Ambientes em que ninguém fala sobre nada podem sinalizar algo sobre o quanto é seguro falar.",
    tipo: "organizac",
    tema: "lideranca",
    camada: "aprof",
    formato: "Leitura",
    tempo: 8,
    usage_policy: "educational",
    source_id: "BYST-CUR-2025-T07",
    source_row: 47,
    status: "draft",
    nanoconteudos: [
      { lbl: "O que observar", txt: "Times onde feedback dificilmente sobe; rotatividade silenciosa; piadas internas sobre quem 'foi embora'." },
      { lbl: "Por que importa", txt: "Cultura é o que se tolera. O que não é dito também ensina." },
      { lbl: "Caminho seguro", txt: "Para liderança: criar canais redundantes e demonstrar resposta consistente." },
    ],
    paragrafos: [
      "Quando ambientes inteiros entram em silêncio, vale prestar atenção — não como diagnóstico, mas como sinal de contexto.",
      "Para quem está em posição de liderança, observar padrões de silêncio é uma responsabilidade comum.",
      "Para quem está em posição subordinada, registrar percepções (mesmo que para si mesmo) ajuda a manter clareza."
    ],
    fontes: [
      { titulo: "Material curado Byst.end (rascunho)", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
    ],
  },
  {
    id: "c-007",
    titulo: "Convites que não soam como convites",
    resumo: "Pedidos repetidos para encontros fora do horário podem criar pressão, especialmente em relações assimétricas.",
    tipo: "sexual",
    tema: "lideranca",
    camada: "intermed",
    formato: "Leitura",
    tempo: 6,
    usage_policy: "public",
    source_id: "EU-OSHA-2021-§5",
    source_row: 156,
    status: "draft",
    nanoconteudos: [
      { lbl: "Vale observar", txt: "Frequência, contexto e diferença hierárquica entre quem convida e quem é convidado." },
      { lbl: "Sinal de atenção", txt: "Pedidos repetidos após uma recusa anterior." },
      { lbl: "Conduta mais segura", txt: "Em qualquer convite ambíguo, deixar espaço explícito para um 'não' sem custo profissional." },
    ],
    paragrafos: [
      "Convites em si não são um problema. O que vale observar é a possibilidade de a outra pessoa recusar sem que isso afete sua posição no trabalho.",
      "Quando o pedido se repete depois de um 'não', mesmo um 'não' implícito, o padrão muda.",
      "Em dúvida, mantenha encontros em ambiente profissional, com horários e formatos claros."
    ],
    fontes: [
      { titulo: "Workplace harassment — practical guide", autor: "EU-OSHA", ano: 2021, tipo: "Guia institucional" },
    ],
  },
  {
    id: "c-008",
    titulo: "Sobrecarga seletiva como sinal",
    resumo: "Quando uma pessoa específica passa a receber sistematicamente as piores tarefas, vale observar o padrão.",
    tipo: "moral",
    tema: "reconhecer",
    camada: "intermed",
    formato: "Leitura",
    tempo: 5,
    usage_policy: "public",
    source_id: "OIT-2019-§5",
    source_row: 162,
    status: "draft",
    nanoconteudos: [
      { lbl: "O que observar", txt: "Distribuição de tarefas que se desvia sistematicamente para uma mesma pessoa." },
      { lbl: "Vale considerar", txt: "Existem critérios técnicos claros? A pessoa foi informada das razões?" },
      { lbl: "Caminho seguro", txt: "Pedir registro escrito de critérios de distribuição." },
    ],
    paragrafos: [
      "Distribuição desigual de trabalho pode ter muitas explicações. Quando uma mesma pessoa concentra sistematicamente tarefas desproporcionais, vale observar o padrão.",
      "Critérios claros — mesmo que imperfeitos — protegem todos os lados.",
      "Esta leitura é informativa e não conclui que houve abuso em qualquer caso específico."
    ],
    fontes: [
      { titulo: "Recommendation 206 — Violence and Harassment", autor: "OIT", ano: 2019, tipo: "Documento internacional" },
    ],
  },
  {
    id: "c-009",
    titulo: "Onde buscar apoio no seu contexto",
    resumo: "Mapa geral de canais públicos e internos para situações que demandem orientação especializada.",
    tipo: "organizac",
    tema: "canais",
    camada: "intro",
    formato: "Referência",
    tempo: 3,
    usage_policy: "public",
    source_id: "BYST-CUR-2025-C01",
    source_row: 2,
    status: "draft",
    nanoconteudos: [
      { lbl: "Canal público", txt: "Disque 180 — orientação sobre violência contra a mulher." },
      { lbl: "Canal público", txt: "Disque 100 — direitos humanos." },
      { lbl: "Canal interno", txt: "RH, ouvidoria ou canal de ética da sua empresa." },
    ],
    paragrafos: [
      "Esta página agrega referências gerais. Cada situação tem caminhos específicos que vale verificar com calma.",
      "Para casos de risco imediato, os canais públicos atendem 24 horas e podem orientar próximos passos.",
      "Para situações em ambiente de trabalho, os canais internos da sua organização costumam ser o primeiro passo formal."
    ],
    fontes: [
      { titulo: "Página de canais — Byst.end", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
    ],
  },
];

// ---------- Quiz ----------
window.mockQuiz = {
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

// ---------- Simulador ----------
window.mockCenarios = [
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

// ---------- Chat: mensagens mockadas + suggested ----------
window.mockChatSuggested = [
  "O que é assédio moral, de forma simples?",
  "Como falar com RH sem expor a pessoa afetada?",
  "Sinais para observar em reuniões 1:1",
  "Modo testemunha: o que dizer ao colega?",
];

window.mockChatThread = [
  {
    id: "m1",
    role: "bot",
    text: "Olá. Posso te ajudar a encontrar materiais educativos sobre prevenção de assédio profissional e a entender conceitos. Não consigo afirmar se uma situação específica é ou não assédio — isso passa por canais oficiais. Por onde quer começar?",
    sources: [],
    reminder: false,
  },
];

// Pre-canned replies keyed by suggested prompt (or fallback)
window.mockChatReplies = {
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

window.mockChatFallback = {
  text: "Posso te mostrar materiais educativos sobre o tema. Posso falar de forma geral sobre conceitos como assédio moral, sexual, discriminação e violência organizacional, sempre com referências. Para casos concretos, os canais oficiais (RH, ouvidoria, 180, 100) são o caminho.",
  sources: [
    { titulo: "Página de canais — Byst.end", autor: "Byst.end", ano: 2025, tipo: "Curadoria interna" },
  ],
  reminder: true,
};

// ---------- Canais ----------
window.mockCanais = [
  { num: "180", titulo: "Central de Atendimento à Mulher", who: "Canal público · 24h", desc: "Orientação sobre violência contra a mulher. Pode encaminhar para redes de apoio.", featured: true },
  { num: "100", titulo: "Disque Direitos Humanos",          who: "Canal público · 24h", desc: "Direitos humanos em geral: discriminação, abuso, grupos vulneráveis.", featured: true },
  { num: "MPT",   titulo: "Ministério Público do Trabalho",   who: "Canal público",      desc: "Atua em casos de assédio em contexto de trabalho. Tem ouvidoria online." },
  { num: "CRP/OAB", titulo: "Conselhos profissionais", who: "Canais especializados", desc: "Apoio jurídico e psicológico via OAB e Conselhos de Psicologia regionais." },
  { num: "RH",  titulo: "Canal interno da sua empresa", who: "Canal interno", desc: "RH, ouvidoria, canal de ética ou compliance. Costuma ser o primeiro caminho formal." },
  { num: "SUS", titulo: "CAPS / atendimento psicológico via SUS", who: "Canal público", desc: "Apoio em saúde mental gratuito, com encaminhamento para serviços especializados." },
];

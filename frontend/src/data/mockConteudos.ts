import type { Conteudo } from "../types";

export const mockConteudos: Conteudo[] = [
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

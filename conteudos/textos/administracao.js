/* Bloco A · Noções de Administração (também usado no Bloco C por referência). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "nocoes-de-administracao", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const TA = "Teorias da Administração";
  const FA = "Funções Administrativas";
  const GP = "Gestão de Pessoas";
  const PQ = "Processos, Qualidade e Projetos";
  const AP = "Administração Pública";
  const RM = "Recursos Materiais e Patrimônio";

  /* ================= TEORIAS ================= */

  A(TA, "Administração científica e teoria clássica", {
    resumo: "Taylor (tarefas e eficiência) e Fayol (estrutura, funções e princípios).",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Taylor × Fayol", cabecalho: ["", "Administração Científica", "Teoria Clássica"], linhas: [
        ["Autor", "Frederick Taylor (EUA)", "Henri Fayol (França)"],
        ["Ênfase", "**tarefas** (de baixo para cima)", "**estrutura** (de cima para baixo)"],
        ["Ideias", "estudo de tempos e movimentos; \"one best way\"; padronização; incentivos salariais; seleção científica do trabalhador", "funções da empresa; funções do administrador (POCCC); 14 princípios"],
        ["Visão do homem", "**homo economicus**: motivado só por dinheiro", "também mecanicista"]
      ]},
      { tipo: "texto", titulo: "Fayol: POCCC e princípios", texto: [
        "Fayol definiu as funções do administrador: **Prever (planejar), Organizar, Comandar, Coordenar e Controlar** (POCCC). Hoje se usa o PODC: planejar, organizar, dirigir e controlar.",
        "",
        "Entre os **14 princípios**: divisão do trabalho, autoridade e responsabilidade, disciplina, **unidade de comando** (cada um recebe ordens de um só chefe), unidade de direção, subordinação do interesse individual ao geral, remuneração, centralização, **cadeia escalar** (hierarquia), ordem, equidade, estabilidade do pessoal, iniciativa e espírito de equipe."
      ]},
      { tipo: "atencao", texto: "**Henry Ford** aplicou ideias tayloristas com a **linha de montagem** e a produção em massa. Não confunda Ford com Fayol." },
      { tipo: "questao", banca: Q, enunciado: "O princípio segundo o qual cada empregado deve receber ordens de apenas um superior foi formulado por:", alternativas: ["Taylor, como estudo de tempos", "Fayol, como unidade de comando", "Mayo, como relações humanas", "Weber, como impessoalidade", "Ford, como linha de montagem"], correta: "B", comentario: "Unidade de comando é um dos 14 princípios de Fayol." }
    ]
  });

  A(TA, "Teoria das relações humanas", {
    resumo: "Elton Mayo e Hawthorne: o fator humano, grupos informais e motivação social.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "A **Teoria das Relações Humanas** surgiu nos anos 1930, a partir da **Experiência de Hawthorne** (coordenada por **Elton Mayo**). Ela reagiu ao mecanicismo da teoria clássica.",
        "",
        "Conclusões:",
        "- O nível de produção depende das **normas do grupo**, não só da capacidade física.",
        "- O trabalhador é um **homo social**: motivado por reconhecimento, aprovação e participação.",
        "- Existem **grupos informais**, com líderes e regras próprias, que influenciam o comportamento.",
        "- Importância da **comunicação**, da **liderança** e da **participação**."
      ]},
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "Clássica", "Relações Humanas"], linhas: [["Foco", "tarefa e estrutura", "pessoas e grupos"], ["Homem", "econômico", "social"], ["Organização", "formal", "informal"]] },
      { tipo: "questao", banca: Q, enunciado: "A Experiência de Hawthorne mostrou que:", alternativas: ["a iluminação é o único fator de produtividade", "o salário é o único motivador", "os grupos informais e os fatores sociais influenciam a produtividade", "a unidade de comando é indispensável", "a burocracia é a forma mais eficiente de organização"], correta: "C", comentario: "Base da Teoria das Relações Humanas: o homem social e os grupos informais." }
    ]
  });

  A(TA, "Teoria burocrática", {
    resumo: "Max Weber: autoridade racional-legal, impessoalidade, hierarquia e as disfunções.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Para **Max Weber**, a **burocracia** é a forma de organização mais racional e eficiente, baseada na **autoridade racional-legal** (obedece-se à norma, não à pessoa).",
        "",
        "**Tipos de autoridade (dominação)**: tradicional (costume, herança), carismática (qualidades pessoais do líder) e racional-legal (normas impessoais)."
      ]},
      { tipo: "tabela", titulo: "Características × disfunções", cabecalho: ["Característica", "Disfunção (Merton)"], linhas: [
        ["Caráter legal das normas", "internalização das regras: o meio vira fim"],
        ["Formalidade das comunicações", "excesso de formalismo e papelório"],
        ["Impessoalidade", "despersonalização do relacionamento"],
        ["Hierarquia da autoridade", "uso de sinais de status e autoridade"],
        ["Rotinas e procedimentos padronizados", "resistência a mudanças"],
        ["Competência técnica e meritocracia", "dificuldade no atendimento ao cliente"],
        ["Profissionalização e especialização", "superconformidade"]
      ]},
      { tipo: "atencao", texto: "As **disfunções** não foram descritas por Weber, e sim por **Robert Merton** e outros críticos. Weber descreveu o \"tipo ideal\"." },
      { tipo: "questao", banca: Q, enunciado: "A autoridade baseada em normas impessoais e racionais, segundo Weber, é a:", alternativas: ["carismática", "tradicional", "racional-legal", "patrimonial", "informal"], correta: "C", comentario: "A burocracia se apoia na autoridade racional-legal." }
    ]
  });

  A(TA, "Abordagens contemporâneas (sistêmica e contingencial)", {
    resumo: "A organização como sistema aberto e a ideia de que não há uma única melhor forma de administrar.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Duas abordagens", cabecalho: ["", "Sistêmica", "Contingencial"], linhas: [
        ["Ideia central", "a organização é um **sistema aberto** que troca com o ambiente", "**depende**: não há uma melhor forma universal; a melhor estrutura depende do ambiente e da tecnologia"],
        ["Conceitos", "entradas, processamento, saídas, retroalimentação (feedback), sinergia, entropia, homeostase, equifinalidade", "ambiente estável × instável; organização mecanística × orgânica"],
        ["Autores", "Ludwig von Bertalanffy (Teoria Geral dos Sistemas), Katz e Kahn", "Burns e Stalker, Lawrence e Lorsch, Joan Woodward"]
      ]},
      { tipo: "svg", titulo: "A organização como sistema aberto", codigo: `
<svg viewBox="0 0 540 190" role="img" aria-label="Entradas entram na organização, que processa e gera saídas; uma seta de retroalimentação volta das saídas para as entradas; tudo dentro do ambiente">
  <defs><marker id="seta-sis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="ln-f" x="5" y="5" width="530" height="180" rx="14"></rect><text class="tx-m" x="18" y="26">ambiente</text>
  <rect class="fd" x="30" y="60" width="110" height="50" rx="8"></rect><text class="tx" x="85" y="90" text-anchor="middle">Entradas</text>
  <rect class="fd-d" x="210" y="50" width="130" height="70" rx="8"></rect><text class="tx tx-t" x="275" y="90" text-anchor="middle">Processamento</text>
  <rect class="fd" x="410" y="60" width="110" height="50" rx="8"></rect><text class="tx" x="465" y="90" text-anchor="middle">Saídas</text>
  <line class="ln-d" x1="140" y1="85" x2="207" y2="85" marker-end="url(#seta-sis)"></line>
  <line class="ln-d" x1="340" y1="85" x2="407" y2="85" marker-end="url(#seta-sis)"></line>
  <path class="ln" d="M465,112 L465,160 L85,160 L85,114" marker-end="url(#seta-sis)"></path>
  <text class="tx-m" x="275" y="176" text-anchor="middle">retroalimentação (feedback)</text>
</svg>` },
      { tipo: "flashcards", cartas: [
        { frente: "Equifinalidade", verso: "Um sistema aberto pode chegar ao mesmo resultado por caminhos diferentes." },
        { frente: "Sinergia", verso: "O todo é maior que a soma das partes." },
        { frente: "Entropia", verso: "Tendência à desorganização; o sistema aberto a combate trocando energia com o ambiente." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A ideia de que \"não existe uma única melhor maneira de organizar, tudo depende do ambiente\" é central na:", alternativas: ["Administração Científica", "Teoria Clássica", "Teoria Contingencial", "Teoria Burocrática", "Escola das Relações Humanas"], correta: "C", comentario: "A contingência rejeita o \"one best way\"." }
    ]
  });

  /* ================= FUNÇÕES ================= */

  A(FA, "Planejamento: estratégico, tático e operacional", {
    resumo: "Os três níveis de planejamento, missão, visão, valores e análise SWOT.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Níveis de planejamento", cabecalho: ["Nível", "Quem", "Prazo", "Abrangência"], linhas: [
        ["Estratégico", "alta direção", "longo", "a organização inteira"],
        ["Tático", "gerência intermediária", "médio", "uma área ou departamento"],
        ["Operacional", "supervisão e execução", "curto", "tarefas e atividades"]
      ]},
      { tipo: "texto", titulo: "Elementos do planejamento estratégico", texto: [
        "- **Missão**: a razão de ser da organização (para que existe).",
        "- **Visão**: onde quer chegar (situação futura desejada).",
        "- **Valores**: princípios que orientam o comportamento.",
        "- **Objetivos e metas**: o objetivo é o resultado; a meta é o objetivo quantificado e com prazo."
      ]},
      { tipo: "tabela", titulo: "Análise SWOT (FOFA)", cabecalho: ["", "Positivo", "Negativo"], linhas: [["Ambiente **interno** (controlável)", "Forças (Strengths)", "Fraquezas (Weaknesses)"], ["Ambiente **externo** (não controlável)", "Oportunidades (Opportunities)", "Ameaças (Threats)"]] },
      { tipo: "questao", banca: Q, enunciado: "Na análise SWOT, a aprovação de uma nova lei que facilita o serviço do órgão é:", alternativas: ["força", "fraqueza", "oportunidade", "ameaça", "missão"], correta: "C", comentario: "É fator externo (fora do controle do órgão) e positivo: oportunidade." }
    ]
  });

  A(FA, "Organização e estruturas organizacionais", {
    resumo: "Departamentalização, centralização, amplitude de controle e tipos de estrutura.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["**Organizar** é dividir o trabalho, agrupar atividades, definir autoridade e responsabilidade e distribuir recursos."] },
      { tipo: "tabela", titulo: "Tipos de departamentalização", cabecalho: ["Critério", "Exemplo"], linhas: [["Funcional", "RH, finanças, TI"], ["Por produto ou serviço", "setor de aposentadorias, setor de pensões"], ["Geográfica (territorial)", "superintendência Sul, Norte"], ["Por clientela", "atendimento a idosos, a empresas"], ["Por processo", "etapas: recebimento, análise, decisão"], ["Por projeto", "equipe montada para uma entrega temporária"], ["Matricial", "combina funcional e por projeto (dupla subordinação)"]] },
      { tipo: "texto", titulo: "Conceitos", texto: [
        "- **Amplitude de controle**: quantos subordinados um chefe tem. Amplitude grande → estrutura **achatada** (poucos níveis); pequena → estrutura **alta** (muitos níveis).",
        "- **Centralização**: decisões no topo. **Descentralização**: decisões delegadas aos níveis mais baixos.",
        "- **Organograma**: representação gráfica da estrutura formal."
      ]},
      { tipo: "atencao", texto: "A estrutura **matricial** quebra a unidade de comando de Fayol: o servidor responde ao chefe funcional e ao gerente do projeto." },
      { tipo: "questao", banca: Q, enunciado: "A estrutura em que o empregado responde, ao mesmo tempo, a um chefe de área e a um gerente de projeto é a:", alternativas: ["linear", "funcional", "matricial", "geográfica", "por clientela"], correta: "C", comentario: "Dupla subordinação é a marca da matricial." }
    ]
  });

  A(FA, "Direção", {
    resumo: "Conduzir pessoas: liderança, motivação, comunicação e tomada de decisão.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Direção** é a função de **orientar e conduzir as pessoas** para os objetivos. Envolve liderança, motivação, comunicação, delegação e coordenação.",
        "",
        "Nos três níveis:",
        "- **Direção** (estratégico): conduz a organização inteira.",
        "- **Gerência** (tático): conduz departamentos.",
        "- **Supervisão** (operacional): conduz equipes de execução."
      ]},
      { tipo: "texto", titulo: "Delegação", texto: ["Delegar é transferir **autoridade** para alguém realizar uma tarefa. A **responsabilidade final** continua com quem delega. Boa delegação: escolher a pessoa certa, dar recursos e autonomia, definir resultado e prazo, acompanhar."] },
      { tipo: "questao", banca: Q, enunciado: "Ao delegar uma tarefa, o gestor:", alternativas: ["transfere toda a responsabilidade", "transfere autoridade, mas continua responsável pelo resultado", "deixa de acompanhar a execução", "perde a autoridade definitivamente", "só pode delegar a outro gestor"], correta: "B", comentario: "Delega-se a autoridade; a responsabilidade final não se delega." }
    ]
  });

  A(FA, "Controle", {
    resumo: "Comparar o realizado com o planejado e corrigir: etapas, tipos e indicadores.",
    incidencia: "média",
    blocos: [
      { tipo: "passos", titulo: "Etapas do controle", itens: ["Estabelecer **padrões** (metas, indicadores).", "**Medir** o desempenho.", "**Comparar** o desempenho com o padrão.", "Tomar **ação corretiva** quando houver desvio."] },
      { tipo: "tabela", titulo: "Tipos de controle por momento", cabecalho: ["Tipo", "Quando", "Exemplo"], linhas: [["Preventivo (prévio)", "antes", "checar requisitos antes de contratar"], ["Concomitante", "durante", "fiscal acompanha a obra"], ["Posterior (feedback)", "depois", "auditoria das contas do ano"]] },
      { tipo: "dica", texto: "Indicadores **SMART**: específicos (Specific), mensuráveis, atingíveis, relevantes e com prazo (Time-bound)." },
      { tipo: "python", titulo: "Comparando realizado e meta", codigo: `
metas = {"processos analisados": 500, "tempo médio (dias)": 30, "satisfação (%)": 80}
realizado = {"processos analisados": 460, "tempo médio (dias)": 27, "satisfação (%)": 84}
menor_melhor = {"tempo médio (dias)"}

for indicador, meta in metas.items():
    r = realizado[indicador]
    ok = r <= meta if indicador in menor_melhor else r >= meta
    print(f"{indicador}: meta {meta}, realizado {r} -> {'ok' if ok else 'ação corretiva'}")
`, saida: `
processos analisados: meta 500, realizado 460 -> ação corretiva
tempo médio (dias): meta 30, realizado 27 -> ok
satisfação (%): meta 80, realizado 84 -> ok
` },
      { tipo: "questao", banca: Q, enunciado: "A fiscalização de uma obra pública enquanto ela é executada é exemplo de controle:", alternativas: ["preventivo", "concomitante", "posterior", "estratégico", "informal"], correta: "B", comentario: "Ocorre durante a execução: concomitante." }
    ]
  });

  /* ================= GESTÃO DE PESSOAS ================= */

  A(GP, "Liderança", {
    resumo: "Estilos de liderança, liderança situacional e transformacional.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Estilos clássicos (White e Lippitt)", cabecalho: ["Estilo", "Como age", "Resultado típico"], linhas: [
        ["Autocrático", "o líder decide sozinho e dá ordens", "produção alta com o líder presente; tensão"],
        ["Democrático (participativo)", "decide com o grupo", "melhor qualidade e satisfação"],
        ["Liberal (laissez-faire)", "deixa o grupo decidir", "pouca orientação; pode haver desorganização"]
      ]},
      { tipo: "texto", titulo: "Teorias modernas", texto: [
        "- **Situacional (Hersey e Blanchard)**: o estilo certo depende da **maturidade** do liderado: determinar (baixa maturidade), persuadir, compartilhar e delegar (alta maturidade).",
        "- **Transacional**: troca recompensas por desempenho.",
        "- **Transformacional**: inspira, dá visão e desenvolve as pessoas para irem além do esperado.",
        "- **Liderança × chefia**: chefe tem autoridade formal (do cargo); líder tem influência (pode existir sem cargo)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a liderança situacional, diante de um servidor experiente, motivado e capaz, o estilo mais adequado é:", alternativas: ["determinar", "persuadir", "delegar", "autocrático", "punitivo"], correta: "C", comentario: "Alta maturidade (competência e motivação): delegar." }
    ]
  });

  A(GP, "Motivação", {
    resumo: "Maslow, Herzberg, McClelland e as teorias de processo.",
    incidencia: "alta",
    blocos: [
      { tipo: "svg", titulo: "Pirâmide de Maslow", legenda: "As necessidades de baixo precisam estar razoavelmente atendidas para as de cima motivarem.", codigo: `
<svg viewBox="0 0 460 260" role="img" aria-label="Pirâmide de Maslow: fisiológicas na base, segurança, sociais, estima e autorrealização no topo">
  <polygon class="fd-d" points="230,10 270,60 190,60"></polygon><text class="tx-m" x="285" y="45">autorrealização</text>
  <polygon class="fd" points="190,62 270,62 310,108 150,108"></polygon><text class="tx" x="230" y="92" text-anchor="middle">estima</text>
  <polygon class="fd" points="150,110 310,110 350,156 110,156"></polygon><text class="tx" x="230" y="140" text-anchor="middle">sociais</text>
  <polygon class="fd" points="110,158 350,158 390,204 70,204"></polygon><text class="tx" x="230" y="188" text-anchor="middle">segurança</text>
  <polygon class="fd" points="70,206 390,206 430,252 30,252"></polygon><text class="tx" x="230" y="236" text-anchor="middle">fisiológicas</text>
</svg>` },
      { tipo: "tabela", titulo: "Herzberg: dois fatores", cabecalho: ["Fatores", "Exemplos", "Efeito"], linhas: [
        ["Higiênicos (extrínsecos)", "salário, condições de trabalho, chefia, políticas, segurança", "se ruins, causam **insatisfação**; se bons, só evitam a insatisfação"],
        ["Motivacionais (intrínsecos)", "reconhecimento, responsabilidade, o trabalho em si, crescimento", "geram **satisfação** e motivação"]
      ]},
      { tipo: "texto", titulo: "Outras teorias", texto: [
        "- **McClelland**: necessidades de **realização**, **afiliação** e **poder**.",
        "- **Vroom (expectativa)**: motivação = expectativa × instrumentalidade × valência.",
        "- **Adams (equidade)**: a pessoa compara seu esforço e recompensa com os dos outros.",
        "- **Locke (metas)**: metas claras e desafiadoras motivam mais."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Para Herzberg, o salário é um fator:", alternativas: ["motivacional", "higiênico", "de autorrealização", "de afiliação", "de expectativa"], correta: "B", comentario: "Salário é higiênico: se baixo, gera insatisfação; se alto, não basta para motivar." }
    ]
  });

  A(GP, "Comunicação organizacional", {
    resumo: "Elementos, fluxos, barreiras e comunicação formal e informal.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Elementos**: emissor, mensagem, canal, receptor, código, **ruído** e **feedback**.",
        "",
        "**Fluxos**:",
        "- **Descendente**: da chefia para a base (ordens, normas).",
        "- **Ascendente**: da base para a chefia (relatórios, sugestões).",
        "- **Horizontal (lateral)**: entre pessoas do mesmo nível.",
        "- **Diagonal**: entre níveis e áreas diferentes.",
        "",
        "**Formal**: canais oficiais. **Informal** (\"rádio-peão\"): rápida, mas sujeita a boatos."
      ]},
      { tipo: "tabela", titulo: "Barreiras", cabecalho: ["Tipo", "Exemplos"], linhas: [["Pessoais", "emoções, preconceitos, audição seletiva"], ["Físicas", "barulho, distância, falha no sistema"], ["Semânticas", "jargão, palavras com sentidos diferentes"]] },
      { tipo: "questao", banca: Q, enunciado: "O envio de um relatório dos servidores para a direção é exemplo de comunicação:", alternativas: ["descendente", "ascendente", "horizontal", "informal", "diagonal"], correta: "B", comentario: "Da base para a chefia: ascendente." }
    ]
  });

  A(GP, "Trabalho em equipe e gestão de conflitos", {
    resumo: "Grupo × equipe, estágios de Tuckman e as formas de lidar com conflitos.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Um **grupo** é um conjunto de pessoas que interagem; uma **equipe** tem objetivo comum, responsabilidade mútua e sinergia.",
        "",
        "**Estágios de Tuckman**: formação → tormenta (conflitos) → normatização → desempenho → (dissolução)."
      ]},
      { tipo: "tabela", titulo: "Estilos de gestão de conflitos (Thomas-Kilmann)", cabecalho: ["Estilo", "Assertividade", "Cooperação", "Resultado"], linhas: [
        ["Competição", "alta", "baixa", "ganha-perde"],
        ["Acomodação", "baixa", "alta", "perde-ganha"],
        ["Evitação (fuga)", "baixa", "baixa", "perde-perde (adia)"],
        ["Compromisso (concessão)", "média", "média", "cada um cede um pouco"],
        ["Colaboração", "alta", "alta", "ganha-ganha"]
      ]},
      { tipo: "dica", texto: "Conflito não é sempre ruim: em nível moderado, estimula ideias e inovação (visão interacionista)." },
      { tipo: "questao", banca: Q, enunciado: "O estilo de gestão de conflitos que busca uma solução que atenda plenamente aos interesses de todas as partes é a:", alternativas: ["competição", "evitação", "acomodação", "colaboração", "imposição"], correta: "D", comentario: "Colaboração: alta assertividade e alta cooperação (ganha-ganha)." }
    ]
  });

  A(GP, "Avaliação de desempenho", {
    resumo: "Métodos, avaliação 360° e os erros mais comuns do avaliador.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Métodos", cabecalho: ["Método", "Como funciona"], linhas: [
        ["Escalas gráficas", "notas em fatores (qualidade, assiduidade)"],
        ["Escolha forçada", "o avaliador escolhe frases que mais e menos descrevem o avaliado"],
        ["Incidentes críticos", "registro de comportamentos muito bons e muito ruins"],
        ["Pesquisa de campo", "entrevista do RH com o chefe sobre o avaliado"],
        ["Avaliação por objetivos (APO)", "metas negociadas e verificadas"],
        ["360 graus", "avaliado por chefe, colegas, subordinados, clientes e por si mesmo"]
      ]},
      { tipo: "tabela", titulo: "Erros do avaliador", cabecalho: ["Erro", "O que é"], linhas: [
        ["Efeito halo", "uma característica marcante contamina todas as notas"],
        ["Tendência central", "dá notas médias a todos para não se comprometer"],
        ["Leniência / rigor", "notas sempre altas ou sempre baixas"],
        ["Recência", "considera só os fatos mais recentes"],
        ["Semelhança", "favorece quem se parece com o avaliador"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O avaliador que, por simpatizar com a pontualidade de um servidor, dá a ele notas altas em todos os quesitos comete o erro de:", alternativas: ["tendência central", "efeito halo", "recência", "leniência", "contraste"], correta: "B", comentario: "Uma característica influencia a avaliação de todas as outras: efeito halo." }
    ]
  });

  /* ================= PROCESSOS, QUALIDADE E PROJETOS ================= */

  A(PQ, "Gestão por processos", {
    resumo: "Visão horizontal da organização, mapeamento e melhoria de processos.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Processo** é um conjunto de atividades que transforma **entradas** em **saídas** com valor para um cliente. A gestão por processos olha a organização **horizontalmente**, atravessando setores, e não só pela hierarquia vertical.",
        "",
        "- **Mapeamento**: desenhar como o processo acontece hoje (\"as is\") e como deveria ser (\"to be\"). Notação comum: **BPMN**.",
        "- **Melhoria contínua** (kaizen): pequenas melhorias constantes.",
        "- **Reengenharia**: redesenho radical do processo."
      ]},
      { tipo: "svg", titulo: "Um processo atravessa setores", codigo: `
<svg viewBox="0 0 560 200" role="img" aria-label="Três colunas de setores (protocolo, análise, decisão) e uma seta horizontal de processo que atravessa todos, do pedido do cidadão à resposta">
  <defs><marker id="seta-proc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="fd" x="70" y="10" width="130" height="180" rx="8"></rect><text class="tx" x="135" y="34" text-anchor="middle">Protocolo</text>
  <rect class="fd" x="215" y="10" width="130" height="180" rx="8"></rect><text class="tx" x="280" y="34" text-anchor="middle">Análise</text>
  <rect class="fd" x="360" y="10" width="130" height="180" rx="8"></rect><text class="tx" x="425" y="34" text-anchor="middle">Decisão</text>
  <line class="ln-d" x1="10" y1="110" x2="545" y2="110" marker-end="url(#seta-proc)" style="stroke-width:4"></line>
  <text class="tx-m" x="12" y="98">pedido</text><text class="tx-m" x="548" y="98" text-anchor="end">resposta</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "A gestão por processos caracteriza-se por:", alternativas: ["visão exclusivamente vertical e hierárquica", "foco em cada setor isoladamente", "visão horizontal, que atravessa os setores com foco no cliente", "eliminação da estrutura organizacional", "proibição de indicadores"], correta: "C", comentario: "O processo atravessa a organização até entregar valor ao cliente." }
    ]
  });

  A(PQ, "Ferramentas da qualidade (PDCA, 5W2H, Ishikawa, Pareto)", {
    resumo: "As ferramentas mais cobradas e para que serve cada uma.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Ferramentas", cabecalho: ["Ferramenta", "Para quê"], linhas: [
        ["PDCA (ciclo de Deming)", "melhoria contínua: **P**lan (planejar), **D**o (executar), **C**heck (verificar), **A**ct (agir corretivamente)"],
        ["5W2H", "plano de ação: What, Why, Where, When, Who, How, How much"],
        ["Diagrama de Ishikawa (espinha de peixe, causa e efeito)", "levantar causas de um problema (6M: método, máquina, mão de obra, material, meio ambiente, medida)"],
        ["Pareto", "priorizar: cerca de 80% dos problemas vêm de 20% das causas"],
        ["Fluxograma", "desenhar as etapas de um processo"],
        ["Brainstorming", "gerar ideias em grupo sem julgamento"],
        ["Folha de verificação", "coletar dados de forma organizada"]
      ]},
      { tipo: "python", titulo: "Diagrama de Pareto em números", texto: "Reclamações de um órgão, ordenadas e acumuladas: poucas causas concentram a maioria.", codigo: `
reclamacoes = {"demora": 120, "falta de informação": 60, "sistema fora do ar": 30,
               "atendimento rude": 15, "outros": 15}
total = sum(reclamacoes.values())
acumulado = 0
for causa, n in sorted(reclamacoes.items(), key=lambda x: -x[1]):
    acumulado += n
    print(f"{causa:22} {n:4}  acumulado {acumulado / total:6.1%}")
`, saida: `
demora                  120  acumulado  50.0%
falta de informação      60  acumulado  75.0%
sistema fora do ar       30  acumulado  87.5%
atendimento rude         15  acumulado  93.8%
outros                   15  acumulado 100.0%
` },
      { tipo: "questao", banca: Q, enunciado: "Para definir quem fará cada tarefa, quando, onde, como e a que custo, a ferramenta indicada é o:", alternativas: ["Pareto", "Ishikawa", "5W2H", "brainstorming", "histograma"], correta: "C", comentario: "5W2H é um plano de ação." }
    ]
  });

  A(PQ, "Noções de gestão de projetos", {
    resumo: "Projeto × processo, ciclo de vida, restrição tripla e escritório de projetos.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Projeto** é um esforço **temporário** para criar um produto, serviço ou resultado **único** (definição do PMBOK). Diferente da rotina (processo contínuo e repetitivo).",
        "",
        "- **Ciclo de vida** (grupos de processos do PMBOK): iniciação, planejamento, execução, monitoramento e controle, encerramento.",
        "- **Restrição tripla**: escopo, prazo e custo (com a qualidade no centro). Mudar um afeta os outros.",
        "- **Escritório de projetos (PMO)**: padroniza métodos e apoia os projetos da organização.",
        "- **Métodos ágeis** (Scrum, Kanban): entregas em ciclos curtos, com adaptação constante."
      ]},
      { tipo: "questao", banca: Q, enunciado: "É característica de um projeto:", alternativas: ["ser contínuo e repetitivo", "não ter início nem fim definidos", "ser temporário e gerar resultado único", "dispensar planejamento", "ser executado só pela alta direção"], correta: "C", comentario: "Temporário (início e fim) e único." }
    ]
  });

  /* ================= ADMINISTRAÇÃO PÚBLICA ================= */

  A(AP, "Modelos: patrimonialista, burocrático e gerencial", {
    resumo: "Os três modelos de administração pública no Brasil e suas características.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Os três modelos", cabecalho: ["Modelo", "Características", "No Brasil"], linhas: [
        ["Patrimonialista", "confusão entre público e privado; nepotismo; clientelismo; corrupção", "Colônia, Império e República Velha"],
        ["Burocrático", "impessoalidade, hierarquia, mérito, concurso, controle de procedimentos (a priori)", "Era Vargas: criação do DASP (1938)"],
        ["Gerencial", "foco em resultados, eficiência, controle a posteriori, cidadão como cliente, descentralização", "Decreto-Lei 200/1967 (antecedente); Plano Diretor da Reforma do Aparelho do Estado (1995, Bresser-Pereira); EC 19/1998"]
      ]},
      { tipo: "texto", titulo: "Depois do gerencial", texto: ["Abordagens mais recentes falam em **novo serviço público** e **governança pública**: o cidadão não é só cliente, mas titular de direitos que participa das decisões, com foco em redes, transparência e valor público."] },
      { tipo: "atencao", texto: "Um modelo não eliminou o outro. Até hoje convivem traços dos três: concurso público (burocrático), metas e contratos de gestão (gerencial) e, infelizmente, práticas patrimonialistas." },
      { tipo: "questao", banca: Q, enunciado: "O modelo de administração pública marcado pelo controle a posteriori dos resultados e pela ênfase na eficiência é o:", alternativas: ["patrimonialista", "burocrático", "gerencial", "colonial", "absolutista"], correta: "C", comentario: "O burocrático controla procedimentos (a priori); o gerencial, resultados (a posteriori)." }
    ]
  });

  A(AP, "Governança, accountability e transparência", {
    resumo: "Princípios de governança pública e a responsabilização dos gestores.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Governança pública** são os mecanismos de **liderança, estratégia e controle** para avaliar, direcionar e monitorar a gestão, com vistas a entregar valor à sociedade. No Executivo federal, a política de governança está no **Decreto 9.203/2017**.",
        "",
        "**Accountability** é o dever de **prestar contas** e de ser **responsabilizado**. Tipos:",
        "- **Vertical**: os cidadãos cobram os governantes (eleições, controle social).",
        "- **Horizontal**: um órgão controla o outro (Tribunais de Contas, Judiciário, Legislativo).",
        "- **Societal**: imprensa, ONGs e movimentos sociais expõem e cobram."
      ]},
      { tipo: "tabela", titulo: "Princípios de governança (Decreto 9.203/2017)", cabecalho: ["Princípio"], linhas: [["capacidade de resposta"], ["integridade"], ["confiabilidade"], ["melhoria regulatória"], ["prestação de contas e responsabilidade"], ["transparência"]] },
      { tipo: "questao", banca: Q, enunciado: "A fiscalização das contas do Executivo pelo Tribunal de Contas é exemplo de accountability:", alternativas: ["vertical", "horizontal", "societal", "eleitoral", "privada"], correta: "B", comentario: "Um órgão do Estado controla outro: horizontal." }
    ]
  });

  A(AP, "Excelência no atendimento ao cidadão", {
    resumo: "Foco no cidadão, Carta de Serviços, ouvidorias e avaliação da satisfação.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "A excelência no atendimento coloca o **cidadão no centro**: serviços simples, rápidos, acessíveis e com informação clara.",
        "",
        "Instrumentos:",
        "- **Carta de Serviços ao Usuário** (Lei 13.460/2017): diz quais serviços o órgão presta, requisitos, prazos e formas de atendimento.",
        "- **Ouvidorias**: recebem manifestações (reclamações, denúncias, sugestões, elogios); no federal, a plataforma é o **Fala.BR**.",
        "- **Pesquisas de satisfação** e **simplificação** (eliminar exigências desnecessárias, Decreto 9.094/2017)."
      ]},
      { tipo: "dica", texto: "Liga com o Núcleo Comum: veja também Ética no Serviço Público → Atendimento ao Público." },
      { tipo: "questao", banca: Q, enunciado: "O documento que informa ao cidadão os serviços prestados por um órgão, os requisitos, prazos e formas de acesso é a:", alternativas: ["Lei Orgânica", "Carta de Serviços ao Usuário", "Ata de reunião", "Portaria de pessoal", "Tabela de temporalidade"], correta: "B", comentario: "Prevista na Lei 13.460/2017." }
    ]
  });

  /* ================= MATERIAIS E PATRIMÔNIO ================= */

  A(RM, "Gestão de estoques", {
    resumo: "Estoque mínimo, ponto de pedido, curva ABC e PEPS/UEPS.",
    incidencia: "média",
    blocos: [
      { tipo: "formula", titulo: "Ponto de pedido", expr: ["PP = (C · TR) + ES"], legenda: "**C** = consumo médio por dia; **TR** = tempo de reposição (dias entre pedir e receber); **ES** = estoque de segurança (mínimo)." },
      { tipo: "tabela", titulo: "Curva ABC", cabecalho: ["Classe", "Itens", "Valor"], linhas: [["A", "poucos (~20%)", "muito valor (~80%): controle rigoroso"], ["B", "intermediários", "valor intermediário"], ["C", "muitos (~50%)", "pouco valor: controle simples"]] },
      { tipo: "texto", titulo: "Métodos de saída", texto: ["- **PEPS (FIFO)**: o primeiro que entra é o primeiro que sai. Ideal para perecíveis.", "- **UEPS (LIFO)**: o último que entra é o primeiro que sai.", "- **Custo médio**: valor médio ponderado do estoque (o mais usado no setor público)."] },
      { tipo: "python", titulo: "Calculando o ponto de pedido", codigo: `
consumo_dia = 40        # resmas de papel por dia
reposicao = 10          # dias para o fornecedor entregar
seguranca = 100         # estoque de segurança
ponto_pedido = consumo_dia * reposicao + seguranca
print("Faça novo pedido quando o estoque chegar a", ponto_pedido, "resmas")
`, saida: `
Faça novo pedido quando o estoque chegar a 500 resmas
` },
      { tipo: "questao", banca: Q, enunciado: "Na curva ABC, os itens de classe A são:", alternativas: ["muitos itens de baixo valor", "poucos itens que concentram a maior parte do valor", "itens obsoletos", "itens de consumo imediato", "itens sem controle"], correta: "B", comentario: "Classe A: poucos itens, alto valor, controle rigoroso." }
    ]
  });

  A(RM, "Compras e almoxarifado", {
    resumo: "Etapas da compra, funções do almoxarifado e recebimento provisório e definitivo.",
    incidencia: "média",
    blocos: [
      { tipo: "passos", titulo: "Ciclo de compras no setor público", itens: ["Identificação da necessidade e **planejamento** (plano de contratações anual).", "Especificação do objeto (termo de referência) e pesquisa de preços.", "**Licitação** ou contratação direta (Lei 14.133).", "Contrato ou empenho e entrega.", "**Recebimento** e conferência.", "Pagamento (liquidação e pagamento da despesa)."] },
      { tipo: "texto", titulo: "Almoxarifado", texto: [
        "O **almoxarifado** recebe, confere, guarda, conserva e distribui os materiais. Boas práticas: endereçamento dos itens, controle de entradas e saídas, inventário periódico e proteção contra perdas.",
        "",
        "Na Lei 14.133 (art. 140), o objeto é recebido **provisoriamente** (para posterior verificação) e **definitivamente** (após verificar que atende ao contrato)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "No recebimento de material, a verificação de que o objeto atende às especificações do contrato ocorre no recebimento:", alternativas: ["provisório", "definitivo", "simbólico", "antecipado", "parcial"], correta: "B", comentario: "O provisório é para posterior verificação; o definitivo confirma a conformidade." }
    ]
  });

  A(RM, "Gestão patrimonial", {
    resumo: "Bens permanentes × de consumo, tombamento, inventário e baixa.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Material permanente × de consumo", cabecalho: ["", "Permanente", "Consumo"], linhas: [["Duração", "superior a 2 anos", "até 2 anos ou perde a identidade com o uso"], ["Exemplos", "computador, mesa, veículo", "papel, caneta, combustível"], ["Controle", "tombamento (número de patrimônio)", "controle de estoque"]] },
      { tipo: "texto", titulo: "Etapas da gestão patrimonial", texto: [
        "- **Tombamento**: registro do bem permanente com número de patrimônio.",
        "- **Carga patrimonial**: o bem fica sob responsabilidade de um servidor ou setor.",
        "- **Inventário**: verificação física periódica (anual, de transferência, de extinção…).",
        "- **Depreciação**: perda de valor pelo uso e pelo tempo.",
        "- **Baixa**: saída do patrimônio (alienação, doação, perda, inservibilidade)."
      ]},
      { tipo: "dica", texto: "Bens inservíveis podem ser classificados como ocioso, recuperável, antieconômico e irrecuperável, conforme a legislação de desfazimento de bens do órgão." },
      { tipo: "questao", banca: Q, enunciado: "O registro de um computador novo com número de patrimônio chama-se:", alternativas: ["baixa", "tombamento", "inventário", "depreciação", "alienação"], correta: "B", comentario: "Tombamento é a incorporação do bem permanente ao patrimônio." }
    ]
  });
})();

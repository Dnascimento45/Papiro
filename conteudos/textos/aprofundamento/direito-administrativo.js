/* Aprofundamento · Direito Administrativo.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/direito-administrativo.js.
   Jurisprudência recente e valores que mudam vêm com “(conferir)”: confirme na lei e no site do STF antes da prova. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/direito-administrativo/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Direito Administrativo Descomplicado", autor: "Marcelo Alexandrino e Vicente Paulo", nota: "O mais usado em concursos de nível médio; linguagem direta." },
    { titulo: "Manual de Direito Administrativo", autor: "Matheus Carvalho", nota: "Atualizado com a Lei 14.133 e a nova improbidade; muitos quadros." },
    { titulo: "Direito Administrativo", autor: "Maria Sylvia Zanella Di Pietro", nota: "Referência doutrinária citada pelas bancas." },
    { titulo: "Manual de Direito Administrativo", autor: "José dos Santos Carvalho Filho", nota: "Outra referência clássica, boa para conceitos." },
    { titulo: "Dizer o Direito", url: "https://www.dizerodireito.com.br", nota: "Resumos gratuitos e confiáveis da jurisprudência do STF e do STJ." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar e consultar",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Direito Administrativo, filtrando pelo assunto e pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "Portal do STF", url: "https://portal.stf.jus.br", nota: "Súmulas vinculantes e temas de repercussão geral." },
    ],
  };

  /* ================= FUNDAMENTOS ================= */

  A("fundamentos/conceito-objeto-e-fontes-do-direito-administrativo", [
    aprofundar([
      "### Dois sentidos de Administração Pública",
      "- **Subjetivo (formal, orgânico)**: **quem** administra: órgãos, entidades e agentes.",
      "- **Objetivo (material, funcional)**: **o que** se faz: serviço público, poder de polícia, fomento e intervenção.",
      "",
      "### Não há código",
      "O Direito Administrativo brasileiro **não é codificado**: está espalhado pela Constituição e por leis (8.112, 9.784, 14.133, 8.429…). Por isso a lei é a fonte principal e a jurisprudência pesa tanto.",
      "",
      "### Fontes",
      "Lei (primária), jurisprudência, doutrina e costumes (secundárias). As **súmulas vinculantes** do STF obrigam a Administração (art. 103-A da CF).",
    ]),
    PRATICAR,
    ce("O Direito Administrativo brasileiro está reunido num código único, como o Direito Civil.", "Errado", "Não há código: as normas estão na Constituição e em leis esparsas."),
    q("A Administração Pública em sentido objetivo (material) corresponde:", ["aos órgãos públicos", "às entidades da Administração indireta", "às atividades administrativas, como serviço público e poder de polícia", "aos agentes públicos", "ao Poder Executivo"], "C", "O sentido objetivo olha para a atividade; o subjetivo, para quem a exerce."),
    q("É fonte primária do Direito Administrativo:", ["a doutrina", "a lei", "o costume", "a jurisprudência não vinculante", "o parecer jurídico"], "B", "A lei é a fonte principal; as demais são secundárias."),
  ]);

  A("fundamentos/regime-juridico-administrativo", [
    aprofundar([
      "### Prerrogativas e sujeições",
      "- **Prerrogativas** (vêm da supremacia do interesse público): presunção de legitimidade, autoexecutoriedade, cláusulas exorbitantes nos contratos, prazos processuais diferenciados.",
      "- **Sujeições** (vêm da indisponibilidade do interesse público): só agir com base em lei, concurso público, licitação, prestação de contas, publicidade.",
      "",
      "### As “pedras de toque”",
      "Para Celso Antônio Bandeira de Mello, o regime se apoia em dois princípios: **supremacia** do interesse público sobre o privado e **indisponibilidade** do interesse público.",
    ]),
    PRATICAR,
    ce("A exigência de concurso público e de licitação são exemplos de sujeições do regime jurídico administrativo.", "Certo", "São limitações que decorrem da indisponibilidade do interesse público."),
    q("As duas “pedras de toque” do regime jurídico administrativo são:", ["legalidade e eficiência", "supremacia e indisponibilidade do interesse público", "moralidade e publicidade", "autotutela e continuidade", "razoabilidade e proporcionalidade"], "B", "Delas derivam as prerrogativas e as sujeições."),
  ]);

  A("fundamentos/principios-expressos-limpe", [
    aprofundar([
      "### Cada letra do LIMPE na prova",
      "- **Legalidade**: o particular faz tudo o que a lei não proíbe; a Administração só faz o que a lei **permite**.",
      "- **Impessoalidade**: finalidade pública, tratamento igual e **vedação à promoção pessoal** em publicidade oficial (art. 37, § 1º: nada de nomes, símbolos ou imagens de autoridades).",
      "- **Moralidade**: ética, boa-fé, probidade. A **Súmula Vinculante 13** proíbe o nepotismo (parentes até o 3º grau em cargo em comissão ou função de confiança, inclusive o nepotismo cruzado).",
      "- **Publicidade**: transparência; o sigilo é exceção (segurança da sociedade e do Estado, intimidade).",
      "- **Eficiência**: incluída pela **EC 19/1998** (reforma administrativa); resultados com economia de meios.",
    ]),
    PRATICAR,
    q("O princípio da eficiência foi incluído no art. 37 da Constituição pela:", ["redação original de 1988", "EC 19/1998", "EC 20/1998", "EC 45/2004", "EC 103/2019"], "B", "A EC 19/1998 é a reforma administrativa."),
    ce("A Súmula Vinculante 13, que veda o nepotismo, decorre dos princípios da moralidade e da impessoalidade.", "Certo", "O STF fundamentou a súmula diretamente no art. 37."),
    q("Uma campanha publicitária de obra pública que destaca o nome e a foto do prefeito fere principalmente o princípio da:", ["legalidade", "impessoalidade", "eficiência", "publicidade", "continuidade"], "B", "O art. 37, § 1º, proíbe a promoção pessoal na publicidade oficial."),
  ]);

  A("fundamentos/principios-implicitos", [
    aprofundar([
      "### Os que mais caem",
      "- **Autotutela**: a Administração **anula** seus atos ilegais e **revoga** os inconvenientes, sem precisar do Judiciário (Súmula 473 do STF).",
      "- **Segurança jurídica**: limita a autotutela. Pela Lei 9.784 (art. 54), o direito de anular atos favoráveis ao destinatário de boa-fé **decai em 5 anos**.",
      "- **Razoabilidade e proporcionalidade**: a medida deve ser **adequada** (serve ao fim), **necessária** (a menos gravosa) e **proporcional em sentido estrito** (benefício maior que o custo).",
      "- **Continuidade** do serviço público, **motivação**, **finalidade**, **especialidade** (entidade só faz o que a lei de criação prevê) e **tutela** (controle sobre a indireta).",
    ]),
    PRATICAR,
    q("Pela Lei 9.784/1999, o direito de a Administração anular atos que geraram efeitos favoráveis a destinatários de boa-fé decai em:", ["2 anos", "3 anos", "5 anos", "10 anos", "20 anos"], "C", "Art. 54: cinco anos, contados da data em que o ato foi praticado, salvo má-fé."),
    ce("Pelo princípio da autotutela, a Administração pode anular seus atos ilegais e revogar os inconvenientes, sem precisar de ordem judicial.", "Certo", "É o que diz a Súmula 473 do STF."),
    q("São subprincípios (elementos) da proporcionalidade:", ["legalidade, moralidade e eficiência", "adequação, necessidade e proporcionalidade em sentido estrito", "continuidade, regularidade e cortesia", "supremacia, indisponibilidade e tutela", "publicidade, motivação e finalidade"], "B", "É o teste em três etapas da proporcionalidade."),
  ]);

  /* ================= ORGANIZAÇÃO ADMINISTRATIVA ================= */

  A("organizacao-administrativa/centralizacao-descentralizacao-e-desconcentracao", [
    aprofundar([
      "### Uma pergunta resolve",
      "A competência foi distribuída **dentro da mesma pessoa jurídica** (cria órgãos, há hierarquia)? **Desconcentração**. Foi para **outra pessoa** (física ou jurídica)? **Descentralização**.",
      "",
      "### Descentralização: outorga × delegação",
      "- **Por outorga (por serviços)**: a **lei** cria ou autoriza uma entidade da Administração indireta e transfere a **titularidade** e a execução. Prazo indeterminado.",
      "- **Por delegação (por colaboração)**: contrato (concessão, permissão) ou ato (autorização) transfere só a **execução** a um particular, normalmente por prazo determinado.",
      "",
      "### Sem hierarquia",
      "Entre a Administração direta e a indireta há **vinculação** e **controle finalístico** (supervisão ministerial, tutela), não subordinação hierárquica.",
    ]),
    PRATICAR,
    ce("Entre a Administração direta e as autarquias existe relação de hierarquia.", "Errado", "Há vinculação e controle finalístico (tutela), não hierarquia."),
    q("A concessão do serviço de transporte coletivo a uma empresa privada é exemplo de:", ["desconcentração", "descentralização por outorga", "descentralização por delegação (colaboração)", "centralização", "privatização da titularidade"], "C", "Transfere-se só a execução, por contrato; a titularidade continua com o poder público."),
    q("Na descentralização por outorga:", ["transfere-se apenas a execução, por contrato", "transfere-se a titularidade e a execução, por lei", "há hierarquia entre o ente e a entidade criada", "criam-se órgãos sem personalidade jurídica", "o serviço passa a ser privado"], "B", "É a criação de entidades da Administração indireta por lei (ou com autorização legal)."),
  ]);

  A("organizacao-administrativa/administracao-direta-e-orgaos-publicos", [
    aprofundar([
      "### Teoria do órgão (imputação)",
      "Órgão é um centro de competência **sem personalidade jurídica**. O que o agente faz é **imputado** à pessoa jurídica a que o órgão pertence (teoria de Otto Gierke, adotada no Brasil).",
      "",
      "### Capacidade processual",
      "Em regra, órgão não vai a juízo (quem vai é a pessoa jurídica). Exceção: órgãos **independentes e autônomos** podem defender suas **prerrogativas** em juízo (ex.: Câmara Municipal).",
      "",
      "### Classificação por posição (Hely Lopes Meirelles)",
      "- **Independentes**: topo de cada Poder (Presidência, Casas do Congresso, tribunais).",
      "- **Autônomos**: logo abaixo, com autonomia administrativa e financeira (ministérios, secretarias).",
      "- **Superiores**: direção e controle, sem autonomia (departamentos, gabinetes).",
      "- **Subalternos**: execução (seções de expediente).",
    ]),
    PRATICAR,
    ce("Órgãos públicos têm personalidade jurídica própria.", "Errado", "Órgãos são centros de competência despersonalizados."),
    q("Pela classificação de Hely Lopes Meirelles, os ministérios são órgãos:", ["independentes", "autônomos", "superiores", "subalternos", "colegiados"], "B", "Ficam logo abaixo dos órgãos independentes e têm autonomia administrativa e financeira."),
    q("A teoria que explica a atuação do Estado por meio de seus órgãos, atribuindo à pessoa jurídica os atos dos agentes, é a teoria:", ["do mandato", "da representação", "do órgão (imputação volitiva)", "da desconcentração", "do risco integral"], "C", "É a teoria de Otto Gierke, adotada no direito brasileiro."),
  ]);

  A("organizacao-administrativa/autarquias-e-fundacoes-publicas", [
    aprofundar([
      "### Lei cria × lei autoriza (art. 37, XIX)",
      "- **Autarquia**: **criada** por lei específica. Nasce com a vigência da lei.",
      "- **Empresa pública, sociedade de economia mista e fundação**: a lei específica **autoriza**; a entidade nasce com o registro dos atos constitutivos. Lei complementar define as áreas de atuação das fundações.",
      "",
      "### Características das autarquias",
      "Pessoa jurídica de **direito público**, atividades típicas de Estado, bens públicos, imunidade tributária recíproca sobre patrimônio, renda e serviços ligados às finalidades (art. 150, § 2º), prazo em **dobro** para manifestações processuais (CPC, art. 183) e responsabilidade objetiva.",
      "",
      "### Autarquias especiais",
      "**Agências reguladoras** (ANATEL, ANVISA, ANEEL…): dirigentes com **mandato fixo** e maior autonomia. Conselhos de fiscalização profissional são autarquias (a OAB, segundo o STF, é entidade *sui generis*).",
      "",
      "### Fundações públicas",
      "Podem ter personalidade de direito **público** (as “fundações autárquicas”, criadas por lei, com regime de autarquia) ou de direito **privado** (autorizadas por lei).",
    ]),
    PRATICAR,
    q("Segundo a Constituição, somente por lei específica poderá ser:", ["autorizada a criação de autarquia", "criada autarquia", "criada empresa pública", "criada sociedade de economia mista", "extinto órgão por decreto"], "B", "Art. 37, XIX: lei específica cria autarquia e autoriza empresa pública, sociedade de economia mista e fundação."),
    ce("As autarquias têm prazo em dobro para todas as suas manifestações processuais.", "Certo", "CPC, art. 183, vale para União, estados, DF, municípios e suas autarquias e fundações de direito público."),
    q("As agências reguladoras têm natureza jurídica de:", ["empresas públicas", "sociedades de economia mista", "autarquias em regime especial", "órgãos da Administração direta", "organizações sociais"], "C", "O regime especial inclui mandato fixo dos dirigentes e maior autonomia."),
  ]);

  A("organizacao-administrativa/empresas-publicas-e-sociedades-de-economia-mista", [
    aprofundar([
      "### Diferenças que caem",
      "- **Capital**: empresa pública, 100% público; sociedade de economia mista, misto, com a maioria das ações com direito a voto do poder público.",
      "- **Forma**: empresa pública, qualquer forma admitida em direito; sociedade de economia mista, **sempre sociedade anônima**.",
      "- **Foro (esfera federal)**: empresa pública federal na **Justiça Federal** (art. 109, I); sociedade de economia mista federal na **Justiça Estadual** (Súmula 556 do STF).",
      "",
      "### Regras comuns",
      "Pessoas de direito **privado**, criação autorizada por lei específica, empregados celetistas **contratados por concurso**, estatuto próprio na **Lei 13.303/2016** (inclusive para licitações), não se submetem à falência (Lei 11.101/2005, art. 2º).",
    ]),
    PRATICAR,
    q("A sociedade de economia mista deve adotar a forma de:", ["sociedade limitada", "sociedade anônima", "qualquer forma admitida em direito", "fundação", "cooperativa"], "B", "Para a empresa pública, qualquer forma é admitida."),
    ce("Em regra, as causas de empresa pública federal são julgadas pela Justiça Federal, e as de sociedade de economia mista federal, pela Justiça Estadual.", "Certo", "Art. 109, I, da CF e Súmula 556 do STF."),
    ce("Os empregados das empresas estatais podem ser contratados sem concurso público, por serem regidos pela CLT.", "Errado", "O art. 37, II, exige concurso também para empregos públicos."),
  ]);

  A("organizacao-administrativa/terceiro-setor", [
    aprofundar([
      "### Fora da Administração",
      "Entidades do terceiro setor são **privadas, sem fins lucrativos**, que colaboram com o Estado. **Não** integram a Administração indireta.",
      "",
      "### Quem firma o quê",
      "- **Organizações sociais (OS)**, Lei 9.637/1998: **contrato de gestão**; qualificação **discricionária** pelo Executivo.",
      "- **OSCIP**, Lei 9.790/1999: **termo de parceria**; qualificação **vinculada**, concedida pelo Ministério da Justiça.",
      "- **Organizações da sociedade civil (MROSC)**, Lei 13.019/2014: **termo de colaboração**, **termo de fomento** e **acordo de cooperação** (sem repasse de dinheiro).",
      "- **Serviços sociais autônomos** (Sistema S: SESI, SENAI, SESC, SENAC…): mantidos por contribuições parafiscais.",
    ]),
    PRATICAR,
    q("As organizações sociais (OS) firmam com o poder público:", ["termo de parceria", "contrato de gestão", "termo de fomento", "convênio de delegação", "contrato de concessão"], "B", "Termo de parceria é das OSCIP."),
    ce("As entidades do terceiro setor integram a Administração Pública indireta.", "Errado", "São entidades privadas que colaboram com o Estado (paraestatais)."),
    q("SESI, SENAI, SESC e SENAC são exemplos de:", ["autarquias", "empresas públicas", "serviços sociais autônomos", "organizações sociais", "fundações públicas"], "C", "Formam o chamado Sistema S."),
  ]);

  /* ================= PODERES ADMINISTRATIVOS ================= */

  A("poderes-administrativos/poder-hierarquico", [
    aprofundar([
      "### O que o poder hierárquico permite",
      "Dar **ordens**, **fiscalizar**, **rever** atos de subordinados, **delegar** e **avocar** competências, e coordenar.",
      "",
      "### Delegação e avocação (Lei 9.784)",
      "- **Delegar** é possível mesmo para quem **não** é subordinado, quando conveniente (art. 12). Não se delegam: atos normativos, decisão de recursos e competência exclusiva (art. 13).",
      "- **Avocar** (chamar para si a competência do subordinado) é **excepcional**, **temporário** e **motivado** (art. 15).",
      "",
      "### Onde não há hierarquia",
      "Entre a Administração direta e a indireta, e na atividade típica de julgar e legislar.",
    ]),
    PRATICAR,
    q("Ordenar, fiscalizar, rever, delegar e avocar são manifestações do poder:", ["regulamentar", "disciplinar", "hierárquico", "de polícia", "vinculado"], "C", "São prerrogativas de quem está acima na estrutura administrativa."),
    ce("A avocação de competência é a regra e dispensa motivação.", "Errado", "Lei 9.784, art. 15: é excepcional, temporária e depende de motivos relevantes devidamente justificados."),
    ce("Segundo a Lei 9.784/1999, a delegação de competência pode ser feita a órgão que não seja hierarquicamente subordinado ao delegante.", "Certo", "Art. 12, quando conveniente por razões técnicas, sociais, econômicas, jurídicas ou territoriais."),
  ]);

  A("poderes-administrativos/poder-disciplinar", [
    aprofundar([
      "### Quem está sujeito",
      "Servidores e **particulares com vínculo especial** com a Administração (contratados, concessionários, alunos de escola pública). Particular **sem** vínculo é alcançado pelo poder de **polícia**, não pelo disciplinar.",
      "",
      "### Discricionariedade limitada",
      "Apurar a infração é **dever**. Há margem na escolha e na gradação da pena quando a lei permite, sempre com motivação, contraditório e ampla defesa.",
      "",
      "### Súmula Vinculante 5",
      "A falta de defesa técnica por **advogado** no processo administrativo disciplinar **não** ofende a Constituição.",
    ]),
    PRATICAR,
    ce("O poder disciplinar alcança particulares que não têm nenhum vínculo com a Administração.", "Errado", "Para eles, a Administração usa o poder de polícia."),
    ce("Segundo a Súmula Vinculante 5, a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.", "Certo", "A defesa pode ser feita pelo próprio servidor."),
    q("Uma empresa contratada que descumpre cláusulas do contrato administrativo e recebe multa da Administração está sujeita ao poder:", ["de polícia", "regulamentar", "disciplinar", "hierárquico", "normativo do Legislativo"], "C", "Há vínculo especial (contrato) com a Administração."),
  ]);

  A("poderes-administrativos/poder-regulamentar", [
    aprofundar([
      "### Dois tipos de decreto",
      "- **Regulamentar ou de execução** (art. 84, IV): detalha a lei para sua fiel execução. Não pode inovar, criar direitos nem obrigações que a lei não criou.",
      "- **Autônomo** (art. 84, VI): trata de **organização e funcionamento** da administração federal, **sem aumento de despesa** nem criação ou extinção de órgãos, e de **extinção de cargos vagos**.",
      "",
      "### Delegação e controle",
      "As hipóteses do inciso VI podem ser delegadas a ministros, ao Procurador-Geral da República e ao Advogado-Geral da União. O Congresso pode **sustar** atos do Executivo que exorbitem do poder regulamentar (art. 49, V).",
    ]),
    PRATICAR,
    q("O decreto autônomo (art. 84, VI, da CF) pode:", ["criar órgãos públicos", "aumentar despesas", "extinguir cargos públicos vagos", "criar tributos", "extinguir ministérios"], "C", "Pode ainda dispor sobre organização e funcionamento, sem aumento de despesa nem criação ou extinção de órgãos."),
    ce("O Congresso Nacional pode sustar atos normativos do Poder Executivo que exorbitem do poder regulamentar.", "Certo", "Art. 49, V, da CF."),
  ]);

  A("poderes-administrativos/poder-de-policia", [
    aprofundar([
      "### Administrativa × judiciária",
      "- **Polícia administrativa**: incide sobre **bens, direitos e atividades**; é preventiva e repressiva; exercida por vários órgãos (vigilância sanitária, trânsito, fiscalização de obras).",
      "- **Polícia judiciária**: incide sobre **pessoas**, para apurar **ilícitos penais** (Polícia Civil e Federal).",
      "",
      "### Delegação a estatais (conferir)",
      "O STF (Tema 532 de repercussão geral) admitiu delegar o **consentimento**, a **fiscalização** e a **sanção** a pessoas jurídicas de direito privado da Administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público em regime não concorrencial. A **ordem** de polícia (legislar) continua **indelegável**.",
      "",
      "### Atributos",
      "**Discricionariedade** (em regra), **autoexecutoriedade** (nem sempre: a multa não paga é cobrada em juízo) e **coercibilidade**.",
    ]),
    PRATICAR,
    q("Segundo o entendimento do STF sobre delegação do poder de polícia a estatais, a fase que NÃO pode ser delegada é:", ["o consentimento", "a fiscalização", "a sanção", "a ordem de polícia", "nenhuma: todas podem"], "D", "A ordem de polícia (criação da norma) é indelegável. As demais podem, nas condições fixadas pelo STF."),
    ce("A polícia administrativa incide sobre bens, direitos e atividades; a polícia judiciária incide sobre pessoas, na apuração de ilícitos penais.", "Certo", "É a distinção clássica."),
    q("São atributos do poder de polícia:", ["presunção, tipicidade e imperatividade", "discricionariedade, autoexecutoriedade e coercibilidade", "hierarquia, disciplina e tutela", "legalidade, moralidade e publicidade", "vinculação, definitividade e precariedade"], "B", "A sigla mais usada é DAC."),
  ]);

  A("poderes-administrativos/uso-e-abuso-de-poder", [
    aprofundar([
      "### Duas formas de abuso",
      "- **Excesso de poder**: o agente vai **além da sua competência** (vício de competência).",
      "- **Desvio de poder (desvio de finalidade)**: age dentro da competência, mas para um **fim diferente** do previsto na lei (vício de finalidade). A Lei 4.717/1965 (ação popular) define o desvio de finalidade.",
      "",
      "### Omissão também é abuso",
      "Deixar de agir quando a lei impõe o dever (por exemplo, não decidir um requerimento) pode configurar abuso de poder.",
    ]),
    PRATICAR,
    q("Um prefeito remove um servidor para outra cidade apenas para puni-lo por críticas políticas. Há:", ["excesso de poder", "desvio de finalidade", "poder regulamentar", "ato discricionário válido", "avocação"], "B", "A remoção serve à necessidade do serviço; usada para punir, desvia da finalidade legal."),
    q("O agente que pratica ato fora dos limites de sua competência incorre em:", ["desvio de finalidade", "excesso de poder", "omissão", "convalidação", "revogação"], "B", "Excesso de poder é vício de competência."),
    ce("O abuso de poder pode ocorrer tanto por ação quanto por omissão.", "Certo", "A inércia ilegal também é abuso."),
  ]);

  /* ================= ATOS ADMINISTRATIVOS ================= */

  A("atos-administrativos/conceito-e-elementos-requisitos", [
    aprofundar([
      "### COM-FI-FOR-M-OB",
      "**Competência, Finalidade e Forma** são sempre **vinculados**. **Motivo e Objeto** formam o **mérito** nos atos discricionários.",
      "",
      "### Motivo × motivação",
      "- **Motivo**: a situação de fato e de direito que leva ao ato (a falta do servidor).",
      "- **Motivação**: a **exposição** desses motivos por escrito. A Lei 9.784 (art. 50) lista quando é obrigatória.",
      "",
      "### Teoria dos motivos determinantes",
      "Se o administrador declara um motivo, o ato **fica preso** a ele, mesmo quando a motivação não era obrigatória. Se o motivo for falso ou inexistente, o ato é nulo. Exemplo clássico: exonerar um comissionado “por falta de verba” e nomear outro no dia seguinte.",
    ]),
    PRATICAR,
    q("São elementos do ato administrativo sempre vinculados:", ["motivo e objeto", "competência, finalidade e forma", "objeto e forma", "motivo e finalidade", "todos são discricionários"], "B", "Motivo e objeto compõem o mérito nos atos discricionários."),
    q("Um servidor comissionado é exonerado com a justificativa de “corte de gastos”, mas no dia seguinte outra pessoa é nomeada para o mesmo cargo. Pela teoria dos motivos determinantes, a exoneração:", ["é válida, pois cargo em comissão é de livre exoneração", "é nula, pois o motivo declarado é falso", "é válida, pois a motivação não era obrigatória", "deve ser convalidada", "só pode ser revista pelo Legislativo"], "B", "O motivo declarado vincula o ato; sendo falso, o ato é inválido."),
    ce("Motivo e motivação são expressões sinônimas.", "Errado", "Motivo é o fato que gera o ato; motivação é a explicação escrita dele."),
  ]);

  A("atos-administrativos/atributos", [
    aprofundar([
      "### Nem todo ato tem todos (PATI)",
      "- **Presunção de legitimidade e veracidade**: presente em **todos**, mas é **relativa** (admite prova em contrário).",
      "- **Autoexecutoriedade**: a Administração executa sem o Judiciário. Não existe em todos: a **multa** não paga é cobrada por execução fiscal.",
      "- **Tipicidade**: o ato corresponde a uma figura prevista em lei.",
      "- **Imperatividade**: impõe obrigações independentemente da concordância. **Não** existe em atos **enunciativos** (certidões) nem **negociais** (licença, autorização), que atendem a um pedido do particular.",
    ]),
    PRATICAR,
    ce("A presunção de legitimidade dos atos administrativos é absoluta.", "Errado", "É relativa (juris tantum): quem alega o vício deve prová-lo."),
    q("Atos negociais, como a licença e a autorização, não possuem o atributo da:", ["presunção de legitimidade", "tipicidade", "imperatividade", "validade", "eficácia"], "C", "Não impõem obrigação: atendem a um interesse do próprio particular."),
    q("A cobrança forçada de uma multa administrativa não paga depende de ação judicial porque a multa não tem:", ["presunção de legitimidade", "autoexecutoriedade", "tipicidade", "imperatividade", "motivação"], "B", "A Administração pode exigir (exigibilidade), mas a execução forçada do valor é feita em juízo."),
  ]);

  A("atos-administrativos/classificacao-e-especies", [
    aprofundar([
      "### Simples, complexo e composto",
      "- **Simples**: uma só vontade (de órgão singular ou colegiado).",
      "- **Complexo**: vontades de **órgãos diferentes** se fundem num **único** ato (ex.: nomeação que exige aprovação do Senado e decreto do Presidente, para parte da doutrina).",
      "- **Composto**: um ato **principal** e outro **acessório** que o confirma (visto, aprovação, homologação).",
      "",
      "### Licença × autorização × permissão",
      "- **Licença**: **vinculada** e **definitiva** (preenchidos os requisitos, há direito).",
      "- **Autorização**: **discricionária** e **precária** (uso de bem público, porte de arma).",
      "- **Permissão de uso**: discricionária e precária, com interesse coletivo predominante.",
      "",
      "### Espécies (Hely)",
      "Normativos (decretos, regulamentos), ordinatórios (portarias, circulares), negociais (licença, autorização), enunciativos (certidões, atestados, pareceres) e punitivos (multas, interdições).",
    ]),
    PRATICAR,
    q("A licença para construir é ato:", ["discricionário e precário", "vinculado e definitivo", "discricionário e definitivo", "vinculado e precário", "complexo e precário"], "B", "Atendidos os requisitos legais, o particular tem direito à licença."),
    ce("Certidões, atestados e pareceres são atos administrativos enunciativos.", "Certo", "Declaram ou atestam algo, sem impor obrigação."),
    q("O ato que depende de um ato principal e de outro acessório que o confirma (como um visto ou uma homologação) é chamado de:", ["simples", "complexo", "composto", "coletivo", "normativo"], "C", "No complexo, as vontades se fundem num único ato; no composto, há principal e acessório."),
  ]);

  A("atos-administrativos/extincao-anulacao-revogacao-e-cassacao", [
    aprofundar([
      "### Anulação × revogação",
      "- **Anulação**: ato **ilegal**; efeitos **retroativos (ex tunc)**; pode ser feita pela Administração ou pelo **Judiciário**.",
      "- **Revogação**: ato legal, mas **inconveniente ou inoportuno**; efeitos **para o futuro (ex nunc)**; **só** a Administração que praticou (o Judiciário só revoga os próprios atos administrativos).",
      "",
      "### O que não se revoga",
      "Atos **vinculados**, atos **consumados** (que já esgotaram os efeitos), atos que geraram **direito adquirido**, atos **enunciativos** e os que integram um procedimento já superado.",
      "",
      "### Outras formas de extinção",
      "- **Cassação**: o beneficiário descumpriu as condições (licença de funcionamento cassada).",
      "- **Caducidade**: lei nova torna o ato incompatível.",
      "- **Contraposição**: ato posterior com efeitos opostos (exoneração extingue a nomeação).",
    ]),
    PRATICAR,
    q("Um alvará de funcionamento é extinto porque o estabelecimento deixou de cumprir as condições sanitárias exigidas. Trata-se de:", ["revogação", "anulação", "cassação", "caducidade", "contraposição"], "C", "Descumprimento de condições pelo beneficiário: cassação."),
    ce("O Poder Judiciário pode revogar atos administrativos do Poder Executivo por razões de conveniência e oportunidade.", "Errado", "O Judiciário controla a legalidade (e pode anular); o mérito é da Administração."),
    q("A anulação de um ato administrativo produz, em regra, efeitos:", ["ex nunc (para o futuro)", "ex tunc (retroativos)", "apenas para terceiros", "somente após homologação judicial", "nenhum efeito"], "B", "O ato ilegal é desfeito desde a origem, ressalvados terceiros de boa-fé."),
  ]);

  A("atos-administrativos/convalidacao", [
    aprofundar([
      "### Requisitos (Lei 9.784, art. 55)",
      "Defeito **sanável**, **sem lesão** ao interesse público e **sem prejuízo** a terceiros. A lei diz que a Administração “poderá” convalidar.",
      "",
      "### O que se convalida",
      "- **Competência**: sim, salvo competência **exclusiva**.",
      "- **Forma**: sim, salvo forma **essencial** à validade.",
      "- **Finalidade, motivo e objeto**: **não**.",
      "",
      "### Nomes",
      "**Ratificação** (a autoridade competente confirma o ato), **reforma** (retira a parte inválida) e **conversão** (transforma o ato inválido em outro, válido).",
    ]),
    PRATICAR,
    ce("Ato com vício de finalidade pode ser convalidado pela Administração.", "Errado", "Só vícios de competência (não exclusiva) e de forma (não essencial) admitem convalidação."),
    q("Segundo a Lei 9.784/1999, podem ser convalidados os atos com defeitos sanáveis, desde que:", ["haja autorização judicial", "não acarretem lesão ao interesse público nem prejuízo a terceiros", "tenham sido praticados há menos de um ano", "o interessado peça a convalidação", "o vício seja de objeto"], "B", "Art. 55."),
  ]);

  /* ================= AGENTES PÚBLICOS ================= */

  A("agentes-publicos/classificacao-dos-agentes-publicos", [
    aprofundar([
      "### As categorias",
      "- **Agentes políticos**: chefes do Executivo, ministros e secretários, parlamentares, magistrados e membros do MP (para parte da doutrina).",
      "- **Agentes administrativos**: servidores **estatutários** (cargo), **empregados públicos** (CLT, emprego) e **temporários** (art. 37, IX: necessidade temporária de excepcional interesse público, por regime especial).",
      "- **Particulares em colaboração**: **honoríficos** (jurados, mesários, conscritos), **delegados** (concessionários, tabeliães) e **credenciados**.",
    ]),
    PRATICAR,
    q("O mesário convocado pela Justiça Eleitoral é classificado como agente:", ["político", "administrativo estatutário", "honorífico (particular em colaboração)", "temporário", "delegado"], "C", "Presta serviço por convocação, sem vínculo profissional."),
    ce("Os empregados públicos são regidos pela CLT e ocupam empregos públicos.", "Certo", "Diferente dos estatutários, que ocupam cargos."),
    q("A contratação por tempo determinado para atender necessidade temporária de excepcional interesse público está prevista no art. 37:", ["inciso II", "inciso V", "inciso IX", "inciso XI", "inciso XXI"], "C", "Inciso IX; os temporários seguem regime jurídico especial definido em lei."),
  ]);

  A("agentes-publicos/cargo-emprego-e-funcao-publica", [
    aprofundar([
      "### Função de confiança × cargo em comissão (art. 37, V)",
      "- **Função de confiança**: exercida **exclusivamente** por servidores ocupantes de **cargo efetivo**.",
      "- **Cargo em comissão**: livre nomeação e exoneração, mas a lei reserva um **percentual mínimo** a servidores de carreira.",
      "- Os dois servem **apenas** a atribuições de **direção, chefia e assessoramento**.",
      "",
      "### Cargo, emprego e função",
      "Cargo: vínculo estatutário, criado por lei. Emprego: vínculo celetista. Função: conjunto de atribuições sem cargo ou emprego (funções de confiança, temporários).",
    ]),
    PRATICAR,
    q("As funções de confiança são exercidas exclusivamente por:", ["qualquer pessoa, de livre nomeação", "servidores ocupantes de cargo efetivo", "empregados públicos", "agentes políticos", "temporários"], "B", "Art. 37, V, da CF."),
    ce("Cargos em comissão e funções de confiança destinam-se apenas às atribuições de direção, chefia e assessoramento.", "Certo", "Não podem ser usados para atividades técnicas ou burocráticas comuns."),
  ]);

  A("agentes-publicos/regime-juridico-dos-servidores-visao-geral", [
    aprofundar([
      "### Regime jurídico único (conferir)",
      "A redação original do art. 39 exigia um regime único para a Administração direta, autarquias e fundações. A EC 19/1998 retirou essa exigência, mas o STF suspendeu a mudança em 2007 (ADI 2.135). Em 2024, o STF concluiu o julgamento, considerou válida a redação da EC 19 e deu efeitos **apenas para o futuro**. Confira os efeitos práticos e o que o seu edital cobra.",
      "",
      "### Estatutário × celetista",
      "- **Estatutário**: regras fixadas em lei (a Lei 8.112 na União), que podem ser alteradas unilateralmente; não há direito adquirido a regime jurídico.",
      "- **Celetista**: contrato de trabalho regido pela CLT.",
    ]),
    PRATICAR,
    ce("Segundo o STF, o servidor estatutário não tem direito adquirido a regime jurídico, ou seja, a lei pode alterar as regras do vínculo para o futuro.", "Certo", "Resguardam-se o direito adquirido a parcelas já incorporadas e a irredutibilidade de vencimentos."),
    q("O regime jurídico dos servidores públicos civis da União, das autarquias e das fundações públicas federais é disciplinado pela:", ["CLT", "Lei 8.112/1990", "Lei 9.784/1999", "Lei 14.133/2021", "Lei 8.429/1992"], "B", "É o Estatuto dos servidores federais."),
  ]);

  /* ================= LICITAÇÕES E CONTRATOS (LEI 14.133/2021) ================= */

  A("licitacoes-e-contratos-lei-14-133-2021/principios-e-agentes-da-licitacao", [
    aprofundar([
      "### Princípios novos que caem (art. 5º)",
      "Além do LIMPE: **planejamento**, **transparência**, **segregação de funções** (quem pede, quem compra e quem fiscaliza não podem ser a mesma pessoa), **vinculação ao edital**, **julgamento objetivo**, **competitividade**, **celeridade**, **economicidade** e **desenvolvimento nacional sustentável**.",
      "",
      "### Agentes",
      "- **Agente de contratação**: conduz a licitação; designado entre **servidores efetivos ou empregados públicos dos quadros permanentes** (art. 8º).",
      "- **Pregoeiro**: o agente de contratação no pregão.",
      "- **Comissão de contratação**: no mínimo **3 membros**, quando a lei exigir ou em casos especiais (como o diálogo competitivo).",
    ]),
    PRATICAR,
    q("O princípio que impede que o mesmo agente solicite a compra, conduza a licitação e fiscalize o contrato é o da:", ["publicidade", "segregação de funções", "economicidade", "vinculação ao edital", "celeridade"], "B", "Separar funções reduz o risco de fraude e erro."),
    ce("Pela Lei 14.133/2021, o agente de contratação deve ser designado, em regra, entre servidores efetivos ou empregados públicos dos quadros permanentes.", "Certo", "Art. 8º."),
  ]);

  A("licitacoes-e-contratos-lei-14-133-2021/modalidades-de-licitacao", [
    aprofundar([
      "### As cinco modalidades e quando usar",
      "- **Pregão**: bens e serviços **comuns** (inclusive serviços comuns de engenharia). Julgamento por menor preço ou maior desconto.",
      "- **Concorrência**: bens e serviços especiais, obras e serviços de engenharia.",
      "- **Concurso**: trabalho técnico, científico ou artístico, com prêmio ou remuneração ao vencedor.",
      "- **Leilão**: **alienação** de imóveis ou de móveis inservíveis ou apreendidos; vence o **maior lance**.",
      "- **Diálogo competitivo**: contratações de **inovação** ou soluções que a Administração não consegue definir sozinha; dialoga com licitantes previamente selecionados.",
      "",
      "### Acabaram",
      "**Convite** e **tomada de preços** não existem na Lei 14.133. É proibido criar novas modalidades ou combiná-las.",
      "",
      "### Critérios de julgamento (art. 33)",
      "Menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance e maior retorno econômico.",
    ]),
    PRATICAR,
    q("Para vender imóveis e bens móveis inservíveis, a modalidade adequada é:", ["pregão", "concorrência", "concurso", "leilão", "diálogo competitivo"], "D", "Leilão: alienação, julgada pelo maior lance."),
    ce("A Lei 14.133/2021 manteve as modalidades convite e tomada de preços.", "Errado", "As modalidades são pregão, concorrência, concurso, leilão e diálogo competitivo."),
    q("A modalidade destinada a contratações que envolvam inovação tecnológica, em que a Administração dialoga com licitantes previamente selecionados para desenvolver alternativas, é:", ["pregão", "concorrência", "concurso", "leilão", "diálogo competitivo"], "E", "É a novidade da Lei 14.133."),
  ]);

  A("licitacoes-e-contratos-lei-14-133-2021/fases-do-processo-licitatorio", [
    aprofundar([
      "### A ordem da regra (art. 17)",
      "1. Preparatória (planejamento, estudo técnico preliminar, termo de referência).",
      "2. Divulgação do edital.",
      "3. Apresentação de propostas e lances.",
      "4. **Julgamento**.",
      "5. **Habilitação** (documentos de quem venceu).",
      "6. Recursal.",
      "7. Homologação.",
      "",
      "A **habilitação vem depois do julgamento**: só se examinam os documentos de quem ganhou. A inversão é possível, com motivação e previsão no edital.",
      "",
      "### Forma",
      "Preferencialmente **eletrônica**; a presencial precisa ser motivada e a sessão, gravada.",
    ]),
    PRATICAR,
    q("Pela Lei 14.133/2021, em regra, a fase de habilitação ocorre:", ["antes da divulgação do edital", "antes do julgamento das propostas", "depois do julgamento das propostas", "depois da homologação", "na fase preparatória"], "C", "Primeiro se julga; depois se examinam os documentos do vencedor."),
    ce("A licitação deve ser realizada preferencialmente na forma eletrônica.", "Certo", "A forma presencial é exceção motivada."),
  ]);

  A("licitacoes-e-contratos-lei-14-133-2021/contratacao-direta-dispensa-e-inexigibilidade", [
    aprofundar([
      "### Inexigibilidade (art. 74): competição inviável",
      "Fornecedor **exclusivo**; **artista** consagrado pela crítica ou pelo público; serviços técnicos especializados de natureza **predominantemente intelectual** com profissional ou empresa de **notória especialização**; **credenciamento**; compra ou locação de imóvel cujas características tornem necessária a escolha.",
      "",
      "### Dispensa (art. 75): competição possível, mas a lei permite não licitar",
      "Pequeno valor (atualizado por decreto: conferir), **emergência ou calamidade** (contrato de até **1 ano**, vedadas a prorrogação e a recontratação da mesma empresa), licitação deserta ou fracassada no último ano, entre outros.",
      "",
      "### O rol",
      "O rol de **dispensa** é **taxativo** (só os casos da lei); o de **inexigibilidade** é **exemplificativo** (qualquer caso de competição inviável).",
    ]),
    PRATICAR,
    q("Na contratação direta por emergência (art. 75, VIII, da Lei 14.133/2021), o contrato:", ["pode durar até 5 anos", "pode ser prorrogado livremente", "tem prazo máximo de 1 ano, vedada a prorrogação", "depende de licitação na modalidade convite", "dispensa qualquer justificativa"], "C", "A lei também proíbe recontratar a mesma empresa com base nessa hipótese."),
    ce("O rol de hipóteses de inexigibilidade de licitação é exemplificativo, enquanto o de dispensa é taxativo.", "Certo", "Inexigibilidade decorre da inviabilidade de competição, que pode aparecer em casos não listados."),
    q("A contratação de profissional de notória especialização para serviço técnico de natureza predominantemente intelectual é hipótese de:", ["dispensa por valor", "inexigibilidade", "licitação dispensada", "pregão eletrônico", "leilão"], "B", "Art. 74, III."),
  ]);

  A("licitacoes-e-contratos-lei-14-133-2021/contratos-administrativos", [
    aprofundar([
      "### Cláusulas exorbitantes (art. 104)",
      "A Administração pode **modificar** unilateralmente, **extinguir** unilateralmente, **fiscalizar**, **aplicar sanções** e **ocupar provisoriamente** bens do contratado em certos casos.",
      "",
      "### Números",
      "- Acréscimos e supressões unilaterais: até **25%** do valor; em **reforma** de edifício ou equipamento, acréscimos até **50%** (art. 125).",
      "- Serviços e fornecimentos **contínuos**: até **5 anos**, prorrogáveis até **10 anos** (arts. 106 e 107).",
      "",
      "### Sanções (art. 156)",
      "Advertência, multa, **impedimento** de licitar e contratar (até **3 anos**, no âmbito do ente que aplicou) e **declaração de inidoneidade** (de **3 a 6 anos**, em todos os entes).",
    ]),
    PRATICAR,
    q("Pela Lei 14.133/2021, a declaração de inidoneidade para licitar ou contratar tem duração de:", ["até 1 ano", "até 2 anos", "até 3 anos", "de 3 a 6 anos", "indeterminada"], "D", "E impede a contratação com todos os entes federativos."),
    ce("Os contratos de serviços contínuos podem ter vigência inicial de até 5 anos, prorrogável até o limite de 10 anos.", "Certo", "Arts. 106 e 107 da Lei 14.133."),
    q("Num contrato de reforma de edifício de R$ 400.000, a Administração pode impor acréscimos unilaterais de até:", ["R$ 40.000", "R$ 100.000", "R$ 200.000", "R$ 300.000", "R$ 400.000"], "C", "Em reforma de edifício ou equipamento, o limite para acréscimos é 50%: R$ 200.000."),
  ]);

  /* ================= SERVIÇOS PÚBLICOS E BENS PÚBLICOS ================= */

  A("servicos-publicos-e-bens-publicos/servicos-publicos-conceito-e-principios", [
    aprofundar([
      "### Serviço adequado (Lei 8.987/1995, art. 6º, § 1º)",
      "Regularidade, **continuidade**, eficiência, segurança, atualidade, generalidade, cortesia na prestação e **modicidade das tarifas**.",
      "",
      "### Quando a interrupção é permitida (art. 6º, § 3º)",
      "Não é descontinuidade a interrupção em **emergência** ou, **após aviso prévio**, por razões de ordem técnica ou de segurança das instalações, ou por **inadimplemento do usuário**, considerado o interesse da coletividade.",
    ]),
    PRATICAR,
    ce("Segundo a Lei 8.987/1995, não caracteriza descontinuidade do serviço a interrupção, após aviso prévio, por inadimplemento do usuário, considerado o interesse da coletividade.", "Certo", "Art. 6º, § 3º, II."),
    q("O princípio que exige tarifas acessíveis aos usuários é o da:", ["atualidade", "generalidade", "modicidade", "cortesia", "segurança"], "C", "Modicidade das tarifas."),
  ]);

  A("servicos-publicos-e-bens-publicos/concessao-e-permissao", [
    aprofundar([
      "### Extinção da concessão: não confunda",
      "- **Encampação**: retomada por **interesse público**, durante o prazo, com **lei autorizativa** e **indenização prévia**.",
      "- **Caducidade**: por **inadimplemento da concessionária**, declarada após processo administrativo.",
      "- **Rescisão**: iniciativa da **concessionária**, por descumprimento do poder concedente, sempre por **ação judicial**.",
      "- Também: advento do termo, anulação e falência ou extinção da empresa.",
      "",
      "### Parcerias público-privadas (Lei 11.079/2004)",
      "Concessão **patrocinada** (tarifa + contraprestação pública) e **administrativa** (a Administração é a usuária). Prazo de **5 a 35 anos** e valor mínimo do contrato de **R$ 10 milhões** (conferir atualizações).",
    ]),
    PRATICAR,
    q("A retomada do serviço pelo poder concedente, durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa e prévia indenização, chama-se:", ["caducidade", "encampação", "rescisão", "reversão", "anulação"], "B", "Caducidade é por culpa da concessionária."),
    ce("A rescisão do contrato de concessão por iniciativa da concessionária depende de ação judicial.", "Certo", "Lei 8.987, art. 39: os serviços não podem ser interrompidos até a decisão judicial transitar em julgado."),
    q("A concessão em que a própria Administração é a usuária direta ou indireta do serviço, sem tarifa paga por usuários, é a:", ["concessão comum", "concessão patrocinada", "concessão administrativa", "permissão", "autorização"], "C", "Na patrocinada, há tarifa dos usuários mais contraprestação pública."),
  ]);

  A("servicos-publicos-e-bens-publicos/bens-publicos", [
    aprofundar([
      "### Classificação (Código Civil, art. 99)",
      "- **Uso comum do povo**: ruas, praças, rios, mares.",
      "- **Uso especial**: prédios de repartições, escolas, hospitais.",
      "- **Dominicais**: patrimônio disponível, sem destinação pública (terras devolutas, imóveis desocupados).",
      "",
      "### Regime",
      "- **Inalienabilidade relativa**: uso comum e uso especial são inalienáveis enquanto **afetados**; dominicais podem ser alienados, observada a lei (CC, arts. 100 e 101).",
      "- **Impenhorabilidade** (pagamentos judiciais por precatório) e **não onerabilidade**.",
      "- **Imprescritibilidade**: bens públicos **não** são adquiridos por usucapião (CF, arts. 183, § 3º, e 191, parágrafo único; Súmula 340 do STF), nem os dominicais.",
      "",
      "### Afetação e desafetação",
      "Afetar é dar destinação pública; desafetar é retirá-la (o que permite, por exemplo, a venda).",
    ]),
    PRATICAR,
    q("Um terreno público vazio, sem destinação específica, é bem:", ["de uso comum do povo", "de uso especial", "dominical", "particular", "afetado"], "C", "Dominicais compõem o patrimônio disponível do ente."),
    ce("Bens públicos dominicais podem ser adquiridos por usucapião.", "Errado", "Nenhum bem público, nem os dominicais, está sujeito a usucapião."),
    q("O prédio onde funciona uma escola municipal é bem:", ["de uso comum do povo", "de uso especial", "dominical", "desafetado", "privado do município"], "B", "Destina-se a um serviço público específico."),
  ]);

  /* ================= CONTROLE E RESPONSABILIDADE ================= */

  A("controle-e-responsabilidade/controle-da-administracao-publica", [
    aprofundar([
      "### Classificações",
      "- **Quem controla**: administrativo (a própria Administração), legislativo (com auxílio do Tribunal de Contas) e judicial.",
      "- **Posição**: interno (dentro do mesmo Poder) e externo (outro Poder).",
      "- **Momento**: prévio, concomitante e posterior.",
      "- **Aspecto**: legalidade (todos) e **mérito** (só a própria Administração).",
      "",
      "### Tribunal de Contas da União (art. 71)",
      "- **Aprecia** as contas anuais do **Presidente** com **parecer prévio**; quem **julga** é o **Congresso** (art. 49, IX).",
      "- **Julga** as contas dos demais administradores e responsáveis por dinheiro público.",
      "- Súmula Vinculante 3: nos processos no TCU, asseguram-se contraditório e ampla defesa quando a decisão puder anular ou revogar ato que beneficie o interessado, **exceto** na apreciação da legalidade do ato inicial de aposentadoria, reforma e pensão.",
    ]),
    PRATICAR,
    ce("O Tribunal de Contas da União julga as contas anuais do Presidente da República.", "Errado", "O TCU emite parecer prévio; o julgamento é do Congresso Nacional."),
    q("O controle judicial dos atos administrativos alcança:", ["apenas o mérito", "a legalidade, inclusive razoabilidade e proporcionalidade, mas não o mérito em si", "a conveniência e a oportunidade", "somente atos vinculados", "somente atos do Legislativo"], "B", "O Judiciário não substitui o juízo de conveniência do administrador, mas anula atos ilegais ou desproporcionais."),
    q("O controle que um ministério exerce sobre uma autarquia vinculada a ele é chamado de:", ["controle hierárquico", "controle externo", "supervisão ministerial (tutela ou controle finalístico)", "controle judicial", "controle legislativo"], "C", "Não há hierarquia entre a direta e a indireta."),
  ]);

  A("controle-e-responsabilidade/responsabilidade-civil-do-estado", [
    aprofundar([
      "### Regra: objetiva (art. 37, § 6º)",
      "Pessoas jurídicas de direito público e de direito **privado prestadoras de serviço público** respondem **sem precisar provar culpa** (teoria do **risco administrativo**). Para as prestadoras, vale também perante **não usuários** (STF).",
      "",
      "### Excludentes e atenuante",
      "Excluem a responsabilidade: **culpa exclusiva da vítima**, **caso fortuito ou força maior** e **fato exclusivo de terceiro**. A culpa **concorrente** da vítima reduz a indenização.",
      "",
      "### Contra quem processar (conferir)",
      "Segundo o STF (Tema 940), a vítima deve processar o **Estado** (ou a prestadora), e não diretamente o agente (tese da dupla garantia). O Estado depois cobra do agente em **ação regressiva**, provando **dolo ou culpa**.",
      "",
      "### Omissão e risco integral",
      "Na omissão, a regra é a responsabilidade subjetiva (falha do serviço), mas o STF admite responsabilidade objetiva em omissões específicas, como a morte de detento sob custódia. Risco **integral** (sem excludentes) em casos como dano nuclear e ambiental.",
    ]),
    PRATICAR,
    q("Exclui a responsabilidade civil do Estado:", ["a culpa concorrente da vítima", "a culpa exclusiva da vítima", "a ausência de culpa do servidor", "o fato de o dano ter sido causado por servidor público", "a licitude do ato"], "B", "A culpa concorrente apenas reduz o valor da indenização."),
    ce("Segundo o STF, a vítima pode ajuizar a ação de indenização diretamente e apenas contra o servidor causador do dano, sem incluir o Estado.", "Errado", "Tema 940: a ação é contra o Estado ou a prestadora; o agente responde em regresso."),
    q("Para o Estado obter, em ação regressiva, o ressarcimento do servidor que causou o dano, é necessário comprovar:", ["apenas o dano", "dolo ou culpa do servidor", "a responsabilidade objetiva do servidor", "que o servidor era efetivo", "autorização legislativa"], "B", "A responsabilidade do agente é subjetiva."),
    ce("A concessionária de transporte coletivo responde objetivamente pelos danos causados a terceiros não usuários do serviço.", "Certo", "Entendimento firmado pelo STF."),
  ]);

  A("controle-e-responsabilidade/improbidade-administrativa-lei-8-429-1992", [
    aprofundar([
      "### O que mudou com a Lei 14.230/2021",
      "- Só existe improbidade com **dolo**; a modalidade culposa acabou.",
      "- O rol do **art. 11** (violação de princípios) passou a ser **taxativo**.",
      "- Prescrição de **8 anos**, contados do fato (art. 23).",
      "",
      "### Os três tipos",
      "- **Art. 9º, enriquecimento ilícito**: receber vantagem indevida (propina, uso de bem público em proveito próprio).",
      "- **Art. 10, prejuízo ao erário**: causar perda patrimonial (superfaturamento, dispensa indevida de licitação).",
      "- **Art. 11, violação de princípios**: condutas listadas, como revelar segredo ou frustrar concurso público.",
      "",
      "### Sanções na Constituição (art. 37, § 4º)",
      "**Suspensão** dos direitos políticos, **perda** da função pública, **indisponibilidade** dos bens e **ressarcimento** ao erário, sem prejuízo da ação penal. A ação de ressarcimento por ato **doloso** de improbidade é **imprescritível** (STF, Tema 897).",
    ]),
    PRATICAR,
    ce("Após a Lei 14.230/2021, só há ato de improbidade administrativa quando a conduta é dolosa.", "Certo", "A modalidade culposa, antes prevista para o art. 10, foi extinta."),
    q("Após a Lei 14.230/2021, a ação de improbidade prescreve, em regra, em:", ["5 anos", "8 anos", "10 anos", "12 anos", "nunca prescreve"], "B", "Art. 23: oito anos a partir da ocorrência do fato (ou do dia em que cessou a permanência)."),
    q("NÃO está entre as consequências da improbidade previstas no art. 37, § 4º, da Constituição:", ["suspensão dos direitos políticos", "perda da função pública", "indisponibilidade dos bens", "ressarcimento ao erário", "cassação dos direitos políticos"], "E", "A cassação de direitos políticos é vedada pelo art. 15 da CF; a improbidade gera suspensão."),
    q("O servidor que recebe dinheiro de uma empresa para facilitar a assinatura de um contrato pratica ato de improbidade que:", ["causa prejuízo ao erário (art. 10)", "importa enriquecimento ilícito (art. 9º)", "atenta apenas contra princípios (art. 11)", "não configura improbidade", "é apenas infração disciplinar leve"], "B", "Receber vantagem patrimonial indevida em razão do cargo é o caso típico do art. 9º."),
  ]);

  A("controle-e-responsabilidade/lei-de-acesso-a-informacao-lei-12-527-2011", [
    aprofundar([
      "### Prazos (arts. 11 e 15)",
      "- Resposta **imediata**; se não for possível, em até **20 dias**, prorrogáveis por mais **10**, com justificativa.",
      "- Negado o acesso, **recurso** em **10 dias**, decidido pela autoridade hierarquicamente superior em **5 dias**.",
      "",
      "### Sigilo (art. 24)",
      "**Ultrassecreta: 25 anos**; **secreta: 15 anos**; **reservada: 5 anos**. Informações **pessoais** (intimidade, vida privada): acesso restrito por até **100 anos** (art. 31).",
      "",
      "### Transparência ativa e passiva",
      "Ativa: o órgão publica por iniciativa própria, na internet. Passiva: responde a pedidos. Municípios com até **10 mil habitantes** estão dispensados da divulgação obrigatória **na internet** (art. 8º, § 4º).",
      "",
      "### Gratuidade",
      "O serviço é gratuito; pode-se cobrar só o custo de reprodução de documentos.",
    ]),
    PRATICAR,
    q("Pela LAI, não sendo possível conceder o acesso imediato, o órgão deve responder em até:", ["5 dias, prorrogáveis por 5", "10 dias, prorrogáveis por 10", "20 dias, prorrogáveis por 10", "30 dias, prorrogáveis por 15", "60 dias, improrrogáveis"], "C", "Art. 11, §§ 1º e 2º."),
    q("O prazo máximo de restrição de acesso de uma informação classificada como ultrassecreta é de:", ["5 anos", "10 anos", "15 anos", "25 anos", "100 anos"], "D", "Secreta: 15 anos; reservada: 5 anos. Os 100 anos são das informações pessoais."),
    ce("Pela LAI, os municípios com até 10.000 habitantes estão dispensados da divulgação obrigatória de informações na internet.", "Certo", "Art. 8º, § 4º. Continuam obrigados a atender pedidos de acesso."),
  ]);

  A("controle-e-responsabilidade/lei-geral-de-protecao-de-dados-lei-13-709-2018", [
    aprofundar([
      "### Dado pessoal × dado sensível",
      "**Dado pessoal**: identifica ou permite identificar uma pessoa (nome, CPF, endereço). **Sensível** (art. 5º, II): origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa, filosófica ou política, saúde, vida sexual, dado genético ou biométrico.",
      "",
      "### Quem é quem",
      "- **Controlador**: decide sobre o tratamento.",
      "- **Operador**: trata os dados em nome do controlador.",
      "- **Encarregado** (DPO): canal de comunicação entre controlador, titulares e a ANPD.",
      "- **ANPD**: Autoridade Nacional de Proteção de Dados, que fiscaliza e aplica sanções.",
      "",
      "### Poder Público",
      "O consentimento **não** é a única base legal. O Poder Público pode tratar dados para executar **políticas públicas** e cumprir suas atribuições legais (arts. 7º, III, e 23), com transparência sobre o tratamento.",
    ]),
    PRATICAR,
    q("É dado pessoal sensível, segundo a LGPD:", ["o número do CPF", "o endereço residencial", "a convicção religiosa", "o número de telefone", "o e-mail profissional"], "C", "Os demais são dados pessoais comuns."),
    q("Pela LGPD, a pessoa indicada para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD é o:", ["operador", "encarregado", "titular", "controlador", "ouvidor"], "B", "Art. 5º, VIII."),
    ce("O Poder Público precisa sempre do consentimento do titular para tratar dados pessoais.", "Errado", "Pode tratar dados para executar políticas públicas e cumprir obrigações legais, sem consentimento."),
  ]);
})();

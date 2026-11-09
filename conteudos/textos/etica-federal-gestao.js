/* Bloco A · Ética no Serviço Público Federal + Realidade Brasileira e Gestão Federal. */
(() => {
  const E = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "etica-federal", materia, assunto), def);
  const G = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "conhecimentos-gerais", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const L = {
    d1171: { titulo: "Decreto 1.171/1994 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm" },
    d6029: { titulo: "Decreto 6.029/2007 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6029.htm" },
    l12813: { titulo: "Lei 12.813/2013 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm" },
    l14129: { titulo: "Lei 14.129/2021 (Governo Digital) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm" },
    ods: { titulo: "Objetivos de Desenvolvimento Sustentável · Nações Unidas no Brasil", url: "https://brasil.un.org/pt-br/sdgs" },
  };
  const lei1171 = (texto, referencia) => ({ tipo: "lei", texto, referencia, url: L.d1171.url });
  const DEC = "Decreto 1.171/1994";
  const NC = "Normas Correlatas";
  const RB = "Realidade Brasileira";
  const GP = "Gestão Pública Federal";

  /* ================= DECRETO 1.171/1994 ================= */

  E(DEC, "Regras deontológicas", {
    resumo: "Os princípios morais que orientam o servidor federal: dignidade, decoro, zelo e honestidade.",
    incidencia: "alta",
    fontes: [L.d1171],
    conferir: "As regras citadas foram transcritas de memória. Confira a redação e a numeração no texto do Planalto antes de decorar.",
    blocos: [
      { tipo: "texto", texto: [
        "O **Decreto 1.171/1994** aprova o **Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal**. Seu anexo tem: regras deontológicas (I a XIII), principais deveres (XIV), vedações (XV) e as Comissões de Ética (XVI a XXV).",
        "",
        "**Deontologia** é o estudo dos deveres. As regras deontológicas são os princípios gerais de conduta."
      ]},
      lei1171(["II – O servidor público não poderá jamais desprezar o elemento ético de sua conduta. Assim, não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre o honesto e o desonesto, consoante as regras contidas no art. 37, caput, e § 4º, da Constituição Federal."], "Decreto 1.171/1994, Anexo, regra II"),
      lei1171(["XI – O servidor deve prestar toda a sua atenção às ordens legais de seus superiores, velando atentamente por seu cumprimento, e, assim, evitando a conduta negligente. Os repetidos erros, o descaso e o acúmulo de desvios tornam-se, às vezes, difíceis de corrigir e caracterizam até mesmo imprudência no desempenho da função pública.", "XII – Toda ausência injustificada do servidor de seu local de trabalho é fator de desmoralização do serviço público, o que quase sempre conduz à desordem nas relações humanas."], "Decreto 1.171/1994, Anexo, regras XI e XII"),
      { tipo: "texto", titulo: "Outras ideias das regras deontológicas", texto: [
        "- A função pública deve ser tida como exercício profissional e integra a **vida particular** do servidor: os fatos da vida privada podem acrescer ou diminuir seu bom conceito na vida funcional.",
        "- A remuneração do servidor é paga pelos **tributos de todos**, inclusive dele próprio; por isso exige-se a contrapartida da moralidade.",
        "- Deixar o cidadão esperando, com longas filas e atrasos, não é só falta de ética: é **dano moral** ao usuário do serviço público.",
        "- A **publicidade** de qualquer ato administrativo é requisito de eficácia e moralidade; a omissão é comprometimento ético."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo as regras deontológicas do Decreto 1.171/1994, o servidor deve decidir, principalmente, entre:", alternativas: ["o legal e o ilegal", "o conveniente e o inconveniente", "o honesto e o desonesto", "o oportuno e o inoportuno", "o rápido e o lento"], correta: "C", comentario: "Regra II: \"mas principalmente entre o honesto e o desonesto\"." }
    ]
  });

  E(DEC, "Principais deveres do servidor", {
    resumo: "Os deveres da regra XIV: presteza, probidade, cortesia, resistir a pressões, representar contra irregularidades.",
    incidencia: "alta",
    fontes: [L.d1171],
    blocos: [
      { tipo: "tabela", titulo: "Deveres mais cobrados (regra XIV)", cabecalho: ["Dever", "Resumo"], linhas: [
        ["Desempenhar a tempo", "as atribuições do cargo, função ou emprego de que seja titular"],
        ["Rapidez, perfeição e rendimento", "pondo fim ou procurando prioritariamente resolver situações procrastinatórias"],
        ["Ser probo, reto, leal e justo", "escolhendo sempre, entre duas opções, a melhor e a mais vantajosa para o bem comum"],
        ["Tratar cuidadosamente os usuários", "aperfeiçoando o processo de comunicação e contato com o público"],
        ["Ter consciência de que seu trabalho é regido por princípios éticos", "que se materializam na adequada prestação dos serviços públicos"],
        ["Ter respeito à hierarquia", "porém **sem nenhum temor de representar** contra qualquer comprometimento indevido da estrutura"],
        ["Resistir a todas as pressões", "de superiores, contratantes e interessados que visem a obter favores, benesses ou vantagens indevidas, e denunciá-las"],
        ["Ser assíduo e frequente ao serviço", "na certeza de que sua ausência provoca danos ao trabalho ordenado"],
        ["Manter-se atualizado", "com instruções, normas de serviço e legislação"],
        ["Divulgar o Código de Ética", "a todos os integrantes da sua classe"]
      ]},
      { tipo: "atencao", texto: "Respeitar a hierarquia **não** significa obedecer cegamente: o Código manda **representar** contra comprometimentos indevidos e **resistir** a pressões ilegítimas." },
      { tipo: "questao", banca: Q, enunciado: "Segundo o Decreto 1.171/1994, diante de pressões de superiores para obter vantagens indevidas, o servidor deve:", alternativas: ["cumprir as ordens, por respeito à hierarquia", "resistir a elas e denunciá-las", "pedir transferência imediatamente", "consultar o sindicato antes de agir", "ignorar, sem registrar"], correta: "B", comentario: "Regra XIV, i: resistir a todas as pressões e denunciá-las." }
    ]
  });

  E(DEC, "Vedações ao servidor", {
    resumo: "O que é proibido pela regra XV: usar o cargo para favorecimento, receber vantagens, usar informação privilegiada…",
    incidencia: "alta",
    fontes: [L.d1171],
    blocos: [
      { tipo: "tabela", titulo: "Vedações (regra XV, seleção)", cabecalho: ["É vedado ao servidor…"], linhas: [
        ["usar o cargo, função, facilidades, amizades, tempo, posição e influências para obter favorecimento para si ou para outrem"],
        ["prejudicar deliberadamente a reputação de outros servidores ou de cidadãos"],
        ["ser conivente com erro ou infração ao Código, por espírito de solidariedade"],
        ["usar de artifícios para procrastinar ou dificultar o exercício regular de direito"],
        ["permitir que perseguições, simpatias, antipatias, caprichos ou interesses pessoais interfiram no trato com o público ou com colegas"],
        ["pleitear, solicitar, sugerir ou receber ajuda financeira, gratificação, prêmio, comissão, doação ou vantagem de qualquer espécie"],
        ["alterar ou deturpar o teor de documentos"],
        ["desviar servidor público para atendimento a interesse particular"],
        ["retirar da repartição, sem autorização, documento, livro ou bem"],
        ["fazer uso de **informações privilegiadas** em benefício próprio, de parentes, amigos ou terceiros"],
        ["apresentar-se **embriagado** no serviço ou, **habitualmente**, fora dele"],
        ["exercer atividade profissional aética ou ligar o nome a empreendimentos de cunho duvidoso"]
      ]},
      { tipo: "atencao", texto: "Embriaguez: no serviço, **sempre** é vedada; fora dele, a vedação é para a embriaguez **habitual**." },
      { tipo: "questao", banca: Q, enunciado: "É vedado ao servidor, segundo o Decreto 1.171/1994:", alternativas: ["manter-se atualizado com a legislação", "representar contra irregularidades", "ser conivente com infração ao Código por espírito de solidariedade", "tratar com cortesia os usuários", "ser assíduo"], correta: "C", comentario: "Regra XV, c. As demais são deveres." }
    ]
  });

  E(DEC, "Comissões de Ética", {
    resumo: "Quem cria, o que faz e a única pena que aplica: a censura.",
    incidencia: "alta",
    fontes: [L.d1171, L.d6029],
    blocos: [
      { tipo: "texto", texto: [
        "Em todos os órgãos e entidades da Administração Pública Federal direta, indireta, autárquica e fundacional (e em quem exerça atribuições delegadas) deve existir uma **Comissão de Ética**, encarregada de **orientar e aconselhar** sobre a ética profissional do servidor e de **conhecer** de imputações ou procedimentos suscetíveis de **censura** (regra XVI).",
        "",
        "Pelo Decreto 6.029/2007, a comissão é formada por **3 membros titulares** e suplentes, servidores ou empregados do quadro permanente, com mandatos **não coincidentes** de **3 anos**."
      ]},
      lei1171(["XXII – A pena aplicável ao servidor público pela Comissão de Ética é a de censura e sua fundamentação constará do respectivo parecer, assinado por todos os seus integrantes, com ciência do faltoso."], "Decreto 1.171/1994, Anexo, regra XXII"),
      lei1171(["XXIV – Para fins de apuração do comprometimento ético, entende-se por servidor público todo aquele que, por força de lei, contrato ou de qualquer ato jurídico, preste serviços de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, desde que ligado direta ou indiretamente a qualquer órgão do poder estatal, como as autarquias, as fundações públicas, as entidades paraestatais, as empresas públicas e as sociedades de economia mista, ou em qualquer setor onde prevaleça o interesse do Estado."], "Decreto 1.171/1994, Anexo, regra XXIV"),
      { tipo: "atencao", texto: "A Comissão de Ética **não demite, não suspende e não adverte**: a única pena é a **censura**. Se a conduta também for infração disciplinar, o caso é encaminhado à autoridade competente para o PAD." },
      { tipo: "questao", banca: Q, enunciado: "A pena que a Comissão de Ética pode aplicar ao servidor, segundo o Decreto 1.171/1994, é:", alternativas: ["advertência", "suspensão", "censura", "demissão", "multa"], correta: "C", comentario: "Regra XXII." }
    ]
  });

  /* ================= NORMAS CORRELATAS ================= */

  E(NC, "Sistema de Gestão da Ética (Decreto 6.029/2007)", {
    resumo: "A Comissão de Ética Pública, as comissões dos órgãos e as redes de ética.",
    incidencia: "média",
    fontes: [L.d6029],
    conferir: "Detalhes de procedimento (prazos, sanções às autoridades) foram escritos de memória: confira no texto do decreto.",
    blocos: [
      { tipo: "tabela", titulo: "Integrantes do Sistema (art. 2º)", cabecalho: ["Órgão", "Composição e papel"], linhas: [
        ["Comissão de Ética Pública (CEP)", "**7** brasileiros de idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo **Presidente da República**, mandato de **3 anos** não coincidentes, permitida uma recondução; o trabalho não é remunerado e é considerado relevante serviço público"],
        ["Comissões de ética dos órgãos e entidades", "3 membros titulares e suplentes, do quadro permanente, mandatos de 3 anos"],
        ["Demais comissões de ética e equivalentes", "nas entidades e órgãos do Executivo federal"]
      ]},
      { tipo: "texto", texto: [
        "- A **CEP** cuida da conduta das **altas autoridades** (Código de Conduta da Alta Administração Federal) e coordena o sistema.",
        "- O Sistema deve promover atividades de ética, divulgar normas, articular ações com outros órgãos de controle e manter **registro** das decisões.",
        "- Os trabalhos das comissões têm caráter **sigiloso** até a conclusão, em regra."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A Comissão de Ética Pública (CEP) é composta por:", alternativas: ["3 servidores efetivos de cada Ministério", "7 brasileiros designados pelo Presidente da República", "5 senadores", "membros eleitos pelos servidores", "11 ministros do STF"], correta: "B", comentario: "Decreto 6.029/2007, art. 3º." }
    ]
  });

  E(NC, "Conflito de interesses (Lei 12.813/2013)", {
    resumo: "Situações de conflito durante e após o exercício do cargo e a quarentena de 6 meses.",
    incidencia: "média",
    fontes: [L.l12813],
    blocos: [
      { tipo: "texto", texto: [
        "A Lei 12.813/2013 trata do conflito de interesses no **Poder Executivo federal**: o confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar de maneira imprópria o desempenho da função (art. 3º, I).",
        "",
        "**Informação privilegiada** é a que diz respeito a assunto sigiloso ou relevante ao processo de decisão no Executivo federal, com repercussão econômica ou financeira, e que não é de amplo conhecimento público (art. 3º, II)."
      ]},
      { tipo: "tabela", titulo: "Durante o exercício (art. 5º, seleção)", cabecalho: ["Configura conflito…"], linhas: [
        ["divulgar ou fazer uso de informação privilegiada"],
        ["exercer atividade que implique prestar serviços a quem tenha interesse em decisão do agente ou de colegiado de que participe"],
        ["atuar como procurador, consultor, assessor ou intermediário de interesses privados junto à Administração"],
        ["praticar ato em benefício de pessoa jurídica de que participe o agente, seu cônjuge, companheiro ou parentes até o 3º grau"],
        ["receber presente de quem tenha interesse em decisão do agente, fora dos limites do regulamento"],
        ["prestar serviços a empresa controlada, fiscalizada ou regulada pelo ente ao qual o agente está vinculado"]
      ]},
      { tipo: "texto", titulo: "Depois do exercício: a quarentena (art. 6º)", texto: [
        "Para os ocupantes dos cargos do art. 2º (como Ministros, cargos de Natureza Especial e dirigentes de autarquias, fundações e estatais), é vedado por **6 meses** após deixar o cargo, salvo autorização da CEP ou da CGU: prestar serviço a quem tenha relação relevante com o órgão em que atuou, aceitar cargo em empresa da área de atuação ou intervir em favor de interesse privado junto ao órgão.",
        "",
        "A fiscalização cabe à **CEP** (altas autoridades) e à **CGU** (demais agentes). A violação configura **improbidade administrativa** e pode levar à **demissão** (art. 12)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Após deixar o cargo, a autoridade sujeita à Lei 12.813/2013 deve observar, em regra, período de impedimento (quarentena) de:", alternativas: ["30 dias", "3 meses", "6 meses", "1 ano", "2 anos"], correta: "C", comentario: "Art. 6º, II: seis meses." }
    ]
  });

  /* ================= REALIDADE BRASILEIRA ================= */

  G(RB, "Atualidades: política, economia e sociedade", {
    resumo: "Como estudar atualidades para o CNU: temas recorrentes e fontes confiáveis.",
    incidencia: "alta",
    conferir: "Atualidades mudam a cada mês. Este texto é um roteiro de estudo, não um resumo de notícias: complete com fatos dos 12 meses antes da prova, em fontes oficiais e jornais de referência.",
    blocos: [
      { tipo: "texto", texto: [
        "Em provas como o **CNU**, atualidades costumam aparecer ligadas a **políticas públicas**: a banca quer saber se você entende o problema, os dados e as respostas do Estado, mais do que datas.",
        "",
        "**Temas que se repetem**:",
        "- economia: inflação, juros (Selic), emprego, contas públicas e arcabouço fiscal, reforma tributária do consumo (EC 132/2023 e sua regulamentação);",
        "- sociedade: desigualdade, pobreza e programas de transferência de renda, educação básica, saúde pública (SUS), segurança pública;",
        "- política: eleições, relações entre os Poderes, federalismo;",
        "- meio ambiente e clima: desmatamento, transição energética, eventos extremos;",
        "- tecnologia: inteligência artificial, governo digital, proteção de dados."
      ]},
      { tipo: "passos", titulo: "Rotina de estudo", itens: [
        "Escolha 2 fontes: uma agência oficial (Agência Brasil, Agência Gov, IBGE Notícias) e um jornal de referência.",
        "Uma vez por semana, anote em 3 linhas cada fato relevante: o que aconteceu, por que importa e qual política pública está envolvida.",
        "Para cada tema, guarde **um dado** confiável (com fonte e data), como a taxa de desemprego do IBGE.",
        "Nas últimas semanas antes da prova, revise as anotações dos 12 meses anteriores."
      ]},
      { tipo: "dica", texto: "O **IBGE** é a fonte oficial de dados sobre população, emprego (PNAD Contínua), inflação (IPCA) e PIB. Use os dados mais recentes publicados por ele." },
      { tipo: "questao", banca: Q, enunciado: "O índice oficial de inflação usado como referência para o sistema de metas no Brasil é o:", alternativas: ["IGP-M", "INPC", "IPCA", "IPC-Fipe", "INCC"], correta: "C", comentario: "O IPCA, calculado pelo IBGE, é o índice de referência das metas de inflação." }
    ]
  });

  G(RB, "Desafios do Estado brasileiro", {
    resumo: "Desigualdade, federalismo, capacidade estatal, contas públicas e confiança nas instituições.",
    incidencia: "média",
    conferir: "Use dados atualizados (IBGE, IPEA, Tesouro Nacional) ao estudar cada desafio.",
    blocos: [
      { tipo: "tabela", titulo: "Desafios estruturais", cabecalho: ["Desafio", "Do que se trata"], linhas: [
        ["Desigualdade", "renda, raça, gênero e região; objetivo constitucional de reduzi-la (art. 3º, III)"],
        ["Federalismo", "coordenação entre União, Estados e Municípios; repartição de receitas e responsabilidades"],
        ["Equilíbrio fiscal", "conciliar gastos sociais com a sustentabilidade da dívida pública"],
        ["Capacidade estatal", "pessoal qualificado, dados, tecnologia e gestão para entregar políticas"],
        ["Qualidade dos serviços", "educação, saúde, segurança e transporte com resultados"],
        ["Integridade e confiança", "combate à corrupção, transparência e participação social"],
        ["Transição ecológica", "crescimento com proteção ambiental e adaptação ao clima"]
      ]},
      { tipo: "dica", texto: "Na discursiva ou na objetiva, ligue cada desafio a um **instrumento**: LRF e arcabouço fiscal (contas), LAI e controle social (confiança), concurso e capacitação (capacidade), Lei 14.129 (governo digital)." },
      { tipo: "questao", banca: Q, enunciado: "A redução das desigualdades sociais e regionais é, na Constituição de 1988:", alternativas: ["fundamento da República", "objetivo fundamental da República", "princípio das relações internacionais", "competência privativa dos Estados", "tema sem previsão constitucional"], correta: "B", comentario: "Art. 3º, III." }
    ]
  });

  G(RB, "Diversidade, inclusão e direitos humanos", {
    resumo: "Igualdade material, ações afirmativas, Estatuto da Igualdade Racial e direitos de grupos vulneráveis.",
    incidencia: "média",
    conferir: "A reserva de vagas em concursos federais foi alterada por lei recente (percentuais e grupos beneficiados). Confira a lei vigente e o que o edital prevê.",
    blocos: [
      { tipo: "texto", texto: [
        "- **Igualdade formal**: todos são iguais perante a lei (art. 5º). **Igualdade material**: tratar desigualmente os desiguais, na medida da desigualdade, para corrigir desvantagens.",
        "- **Ações afirmativas** são medidas temporárias para promover a igualdade material: cotas raciais e sociais em universidades e concursos, reserva de vagas para pessoas com deficiência.",
        "- O STF reconheceu a constitucionalidade das cotas raciais em universidades (ADPF 186) e em concursos públicos (ADC 41)."
      ]},
      { tipo: "tabela", titulo: "Normas principais", cabecalho: ["Norma", "Tema"], linhas: [
        ["Lei 12.288/2010", "Estatuto da Igualdade Racial"],
        ["Lei 7.716/1989", "crimes de racismo (inafiançáveis e imprescritíveis, art. 5º, XLII, da CF); o STF equiparou a homotransfobia ao racismo"],
        ["Lei 13.146/2015", "Estatuto da Pessoa com Deficiência"],
        ["Lei 11.340/2006", "Lei Maria da Penha"],
        ["Lei 10.741/2003", "Estatuto da Pessoa Idosa"],
        ["Lei 8.069/1990", "Estatuto da Criança e do Adolescente"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "Medidas temporárias destinadas a corrigir desigualdades históricas, como a reserva de vagas, são chamadas de:", alternativas: ["privilégios constitucionais", "ações afirmativas", "imunidades", "isenções", "garantias processuais"], correta: "B", comentario: "Ações afirmativas buscam a igualdade material." }
    ]
  });

  G(RB, "Desenvolvimento sustentável e meio ambiente", {
    resumo: "Art. 225 da CF, Agenda 2030 e os 17 ODS, Acordo de Paris.",
    incidencia: "média",
    fontes: [L.ods],
    blocos: [
      { tipo: "lei", titulo: "Constituição Federal, art. 225", texto: ["Art. 225. Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações."], referencia: "CF/88, art. 225", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
      { tipo: "texto", texto: [
        "**Desenvolvimento sustentável** é o que atende às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem às suas (Relatório Brundtland, 1987). Tem três dimensões: **ambiental, social e econômica**.",
        "",
        "- **Agenda 2030** da ONU: **17 Objetivos de Desenvolvimento Sustentável (ODS)** e 169 metas, adotados em 2015.",
        "- **Acordo de Paris** (2015): limitar o aquecimento global bem abaixo de 2 °C, buscando 1,5 °C, com metas nacionais (NDCs).",
        "- No serviço público, a Lei 14.133 inclui o **desenvolvimento nacional sustentável** entre os princípios das licitações."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Quantos são os ODS?", verso: "17, com 169 metas, até 2030." },
        { frente: "Três dimensões da sustentabilidade", verso: "Ambiental, social e econômica." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A Agenda 2030 da ONU estabelece:", alternativas: ["8 Objetivos do Milênio", "17 Objetivos de Desenvolvimento Sustentável", "10 metas climáticas", "5 pilares econômicos", "25 objetivos ambientais"], correta: "B", comentario: "17 ODS e 169 metas." }
    ]
  });

  /* ================= GESTÃO PÚBLICA FEDERAL ================= */

  G(GP, "Estrutura do Poder Executivo federal", {
    resumo: "Presidência, Ministérios, administração indireta e como a estrutura é definida.",
    incidencia: "média",
    conferir: "O número e o nome dos Ministérios mudam por lei e medida provisória. Confira a estrutura vigente no gov.br antes da prova.",
    blocos: [
      { tipo: "texto", texto: [
        "- O Executivo federal é exercido pelo **Presidente da República**, auxiliado pelos **Ministros de Estado** (art. 76 da CF).",
        "- A **criação e extinção de Ministérios** e órgãos depende de **lei** (art. 88 da CF). A organização interna, sem aumento de despesa, pode ser feita por **decreto** (art. 84, VI).",
        "- A **Presidência da República** reúne órgãos de assessoramento direto, como a Casa Civil e a Secretaria-Geral.",
        "- **Administração indireta**: autarquias (INSS, Banco Central, agências reguladoras), fundações (IBGE, FUNAI), empresas públicas (Caixa, Correios) e sociedades de economia mista (Banco do Brasil, Petrobras).",
        "- Órgãos centrais de sistemas estruturantes coordenam áreas comuns a todo o governo: pessoal (SIPEC), orçamento, controle interno (CGU), entre outros."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A criação de um novo Ministério depende de:", alternativas: ["decreto do Presidente", "portaria da Casa Civil", "lei", "resolução do Senado", "ato do TCU"], correta: "C", comentario: "Art. 88 da CF: a lei dispõe sobre a criação e extinção de Ministérios." }
    ]
  });

  G(GP, "Políticas públicas: ciclo e avaliação", {
    resumo: "As fases do ciclo de políticas públicas e os tipos de avaliação.",
    incidencia: "média",
    blocos: [
      { tipo: "svg", titulo: "Ciclo de políticas públicas", legenda: "Modelo didático: na prática, as fases se sobrepõem e o ciclo recomeça a partir da avaliação.", codigo: `
<svg viewBox="0 0 520 300" role="img" aria-label="Ciclo com cinco etapas em círculo: agenda, formulação, tomada de decisão, implementação e avaliação">
  <circle class="ln-f" cx="260" cy="150" r="105"></circle>
  <g>
    <rect class="fd-d" x="195" y="15" width="130" height="40" rx="8"></rect><text class="tx" x="260" y="40" text-anchor="middle">1. Agenda</text>
    <rect class="fd-d" x="370" y="90" width="140" height="40" rx="8"></rect><text class="tx" x="440" y="115" text-anchor="middle">2. Formulação</text>
    <rect class="fd-d" x="330" y="225" width="160" height="40" rx="8"></rect><text class="tx" x="410" y="250" text-anchor="middle">3. Tomada de decisão</text>
    <rect class="fd-d" x="30" y="225" width="160" height="40" rx="8"></rect><text class="tx" x="110" y="250" text-anchor="middle">4. Implementação</text>
    <rect class="fd-d" x="10" y="90" width="140" height="40" rx="8"></rect><text class="tx" x="80" y="115" text-anchor="middle">5. Avaliação</text>
  </g>
</svg>` },
      { tipo: "tabela", titulo: "As fases", cabecalho: ["Fase", "O que acontece"], linhas: [
        ["Formação da agenda", "um problema ganha atenção do governo"],
        ["Formulação", "estudam-se alternativas de solução"],
        ["Tomada de decisão", "escolhe-se a alternativa"],
        ["Implementação", "a política é executada (orçamento, pessoas, regras)"],
        ["Avaliação", "mede-se se funcionou: pode levar a ajustar, continuar ou encerrar"]
      ]},
      { tipo: "tabela", titulo: "Tipos de avaliação", cabecalho: ["Momento", "Tipo"], linhas: [["Antes", "**ex ante** (diagnóstico, viabilidade)"], ["Durante", "monitoramento, avaliação de processo"], ["Depois", "**ex post** (resultados e impacto)"]] },
      { tipo: "dica", texto: "Indicadores avaliam: **eficiência** (custo × produto), **eficácia** (metas atingidas) e **efetividade** (impacto real na vida das pessoas)." },
      { tipo: "questao", banca: Q, enunciado: "A avaliação que mede se uma política pública mudou de fato as condições de vida do público-alvo trata da:", alternativas: ["eficiência", "eficácia", "efetividade", "economicidade", "legalidade"], correta: "C", comentario: "Efetividade = impacto, transformação da realidade." }
    ]
  });

  G(GP, "Governo digital (Lei 14.129/2021)", {
    resumo: "Princípios do governo digital, gov.br, dados abertos e a não exigência de documentos já disponíveis.",
    incidencia: "média",
    fontes: [L.l14129],
    blocos: [
      { tipo: "texto", texto: [
        "A **Lei 14.129/2021** trata dos princípios, regras e instrumentos do **Governo Digital** e do aumento da eficiência pública. Vale para a administração federal e para Estados, DF e Municípios que a adotarem por ato próprio (art. 2º).",
        "",
        "Pontos que caem:",
        "- desburocratização, modernização e simplificação da relação com o cidadão;",
        "- **digitalização** dos serviços e atos, com atendimento presencial mantido para quem precisa;",
        "- **não exigência** de documentos e informações que a própria Administração já tem;",
        "- **dados abertos**, transparência e uso de linguagem clara;",
        "- **interoperabilidade** entre sistemas e bases de dados;",
        "- **governo como plataforma** e laboratórios de inovação;",
        "- identificação única do cidadão pelo **CPF** nos serviços públicos digitais."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 14.129/2021, é diretriz do Governo Digital:", alternativas: ["exigir do cidadão documentos que a Administração já possui, para conferência", "extinguir todo atendimento presencial", "a interoperabilidade de sistemas e a não exigência de informações já disponíveis na Administração", "restringir o acesso a dados abertos", "criar um número de identificação diferente para cada órgão"], correta: "C", comentario: "A lei busca simplificar: interoperabilidade e não exigência de dados já disponíveis; o CPF é o número único." }
    ]
  });
})();

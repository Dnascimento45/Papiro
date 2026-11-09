/* Ética no Serviço Público (Núcleo Comum) · todos os assuntos. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "etica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const FE = "Fundamentos da Ética";
  const CP = "Conduta Profissional";
  const AT = "Atendimento ao Público";
  const L = {
    d1171: { titulo: "Decreto 1.171/1994 (Código de Ética do Servidor Civil do Executivo Federal)", url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm" },
    l10048: { titulo: "Lei 10.048/2000 (atendimento prioritário)", url: "https://www.planalto.gov.br/ccivil_03/leis/l10048.htm" },
    l13146: { titulo: "Lei 13.146/2015 (Estatuto da Pessoa com Deficiência)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" },
    l13460: { titulo: "Lei 13.460/2017 (direitos do usuário de serviços públicos)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm" },
    l14457: { titulo: "Lei 14.457/2022 (prevenção ao assédio, entre outros temas)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14457.htm" },
    l12813: { titulo: "Lei 12.813/2013 (conflito de interesses)", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm" },
  };

  /* ================= FUNDAMENTOS ================= */

  A(FE, "Ética, moral e valores", {
    resumo: "Moral são os costumes; ética é a reflexão sobre eles; valores orientam as escolhas.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Diferenças", cabecalho: ["", "Moral", "Ética"], linhas: [
        ["O que é", "conjunto de regras e costumes de um grupo, numa época", "reflexão crítica, filosófica, sobre a moral"],
        ["Caráter", "prático, varia com a cultura e o tempo", "teórico, busca princípios mais universais"],
        ["Origem da palavra", "latim **mores** (costumes)", "grego **ethos** (caráter, modo de ser)"]
      ]},
      { tipo: "texto", texto: [
        "**Valores** são o que uma pessoa ou sociedade considera importante (honestidade, justiça, respeito). Eles orientam as escolhas.",
        "",
        "Na prática das provas, ética e moral aparecem muitas vezes como sinônimos. Quando a banca diferenciar, use a tabela acima."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A reflexão teórica sobre os costumes e as normas de conduta de uma sociedade corresponde à:", alternativas: ["moral", "ética", "lei", "etiqueta", "religião"], correta: "B", comentario: "A moral é o conjunto de costumes; a ética reflete sobre ele." }
    ]
  });

  A(FE, "Ética, direito e cidadania", {
    resumo: "Nem tudo que é legal é ético; a cidadania como exercício de direitos e deveres.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- O **direito** tem normas obrigatórias, com sanção aplicada pelo Estado. A **ética** e a moral dependem da consciência e da sanção social.",
        "- Nem tudo o que é **legal** é **moral** (\"nem tudo que é lícito é honesto\"), e há condutas imorais sem previsão legal.",
        "- No serviço público, a moralidade virou **princípio jurídico** (art. 37 da CF): agir de forma imoral pode tornar o ato **ilegal**.",
        "",
        "**Cidadania** é a participação na vida da sociedade: exercer direitos (civis, políticos e sociais) e cumprir deveres. O servidor é também cidadão e deve tratar o usuário como titular de direitos, não como alguém que pede favor."
      ]},
      { tipo: "svg", titulo: "Ética e direito se cruzam, mas não coincidem", codigo: `
<svg viewBox="0 0 460 200" role="img" aria-label="Dois círculos que se cruzam: ética e direito; na interseção, condutas éticas e legais">
  <circle class="fd" cx="170" cy="100" r="80"></circle>
  <circle class="fd" cx="290" cy="100" r="80"></circle>
  <path class="fd-d" d="M230,47 A80,80 0 0 1 230,153 A80,80 0 0 1 230,47 Z"></path>
  <text class="tx tx-t" x="130" y="104" text-anchor="middle">Ética</text>
  <text class="tx tx-t" x="330" y="104" text-anchor="middle">Direito</text>
  <text class="tx-m" x="230" y="104" text-anchor="middle">os dois</text>
  <text class="tx-m" x="120" y="195" text-anchor="middle">moral, sem lei</text>
  <text class="tx-m" x="340" y="195" text-anchor="middle">legal, mas discutível</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "No serviço público, a moralidade:", alternativas: ["é questão apenas de foro íntimo", "é princípio constitucional e pode invalidar atos", "só vale para agentes políticos", "não tem relação com a legalidade", "foi substituída pela eficiência"], correta: "B", comentario: "Art. 37 da CF: a moralidade é princípio jurídico; sua violação torna o ato inválido." }
    ]
  });

  A(FE, "Ética na Administração Pública", {
    resumo: "Por que o servidor tem deveres éticos maiores e quais normas tratam disso.",
    incidencia: "alta",
    fontes: [L.d1171],
    blocos: [
      { tipo: "texto", texto: [
        "O servidor administra o que é de todos. Por isso, a ética no serviço público tem regras próprias e mais rígidas que na vida privada.",
        "",
        "Normas principais (detalhadas no Bloco A, Ética Federal):",
        "- **Decreto 1.171/1994**: Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal.",
        "- **Decreto 6.029/2007**: Sistema de Gestão da Ética.",
        "- **Lei 12.813/2013**: conflito de interesses.",
        "- **Lei 8.112/1990**: deveres e proibições (arts. 116 e 117).",
        "- **Lei 8.429/1992**: improbidade administrativa."
      ]},
      { tipo: "lei", titulo: "Decreto 1.171/1994, Anexo, regra I", texto: ["I – A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados maiores que devem nortear o servidor público, seja no exercício do cargo ou função, ou fora dele, já que refletirá o exercício da vocação do próprio poder estatal. Seus atos, comportamentos e atitudes serão direcionados para a preservação da honra e da tradição dos serviços públicos."], referencia: "Decreto 1.171/1994", url: L.d1171.url },
      { tipo: "atencao", texto: "A conduta ética vale **também fora** do serviço: a vida privada do servidor pode refletir na imagem do órgão." },
      { tipo: "questao", banca: Q, enunciado: "Segundo o Código de Ética do Decreto 1.171/1994, os princípios morais devem nortear o servidor:", alternativas: ["apenas no horário de expediente", "apenas dentro da repartição", "no exercício do cargo ou fora dele", "apenas em atendimento ao público", "só quando ocupa cargo em comissão"], correta: "C", comentario: "Regra I: \"seja no exercício do cargo ou função, ou fora dele\"." }
    ]
  });

  /* ================= CONDUTA ================= */

  A(CP, "Postura e comportamento no serviço público", {
    resumo: "Assiduidade, cortesia, decoro, imparcialidade e uso correto dos recursos públicos.",
    incidencia: "alta",
    fontes: [L.d1171],
    blocos: [
      { tipo: "tabela", titulo: "O que se espera do servidor", cabecalho: ["Atitude", "Na prática"], linhas: [
        ["Assiduidade e pontualidade", "a ausência injustificada prejudica o serviço e os colegas"],
        ["Cortesia e urbanidade", "tratar o público e os colegas com respeito, sem distinção"],
        ["Imparcialidade", "não favorecer nem prejudicar ninguém por amizade, política ou preconceito"],
        ["Zelo com o patrimônio", "não usar bens, veículos e materiais do órgão para fins particulares"],
        ["Decoro", "comportamento compatível com a dignidade da função, dentro e fora do trabalho"],
        ["Responsabilidade", "cumprir prazos, não deixar serviço acumular, assumir os próprios erros"]
      ]},
      { tipo: "dica", texto: "Nas questões de ética, a alternativa certa costuma ser a que coloca o **interesse público** e o **respeito ao cidadão** acima da conveniência pessoal ou do corporativismo." },
      { tipo: "questao", banca: Q, enunciado: "Um servidor usa a impressora do órgão para imprimir panfletos da festa do seu condomínio. Essa conduta é:", alternativas: ["permitida, por ser pouca quantidade", "permitida, se for fora do expediente", "contrária ao zelo pelo patrimônio público", "obrigatória para integração social", "indiferente à ética"], correta: "C", comentario: "Bens públicos não podem ser usados para interesses particulares, mesmo em pequena escala." }
    ]
  });

  A(CP, "Sigilo e uso da informação", {
    resumo: "Guardar sigilo do que é sigiloso, sem esconder o que é público.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O servidor tem acesso a dados de cidadãos e a informações estratégicas. Duas regras convivem:",
        "",
        "- **Publicidade é a regra**: informação pública deve ser fornecida (Lei de Acesso à Informação).",
        "- **Sigilo é a exceção**: dados pessoais, informações classificadas, sigilo fiscal, bancário e de processos disciplinares devem ser protegidos (LGPD, LAI, leis específicas).",
        "",
        "É dever do servidor **guardar sigilo sobre assunto da repartição** (art. 116, VIII, da Lei 8.112) e é proibido **revelar segredo** de que se apropriou em razão do cargo (crime do art. 325 do Código Penal e improbidade)."
      ]},
      { tipo: "atencao", texto: "Usar informação privilegiada obtida no cargo em proveito próprio ou de terceiro (por exemplo, saber antes de uma licitação) é **conflito de interesses** (Lei 12.813/2013) e pode ser improbidade." },
      { tipo: "questao", banca: Q, enunciado: "Um servidor do setor de pessoal comenta, numa rede social, o diagnóstico médico de um colega, que viu no processo de licença. A conduta:", alternativas: ["é permitida, pois a informação é verdadeira", "viola o sigilo e a proteção de dados pessoais sensíveis", "é permitida se o colega não for identificado pelo nome completo", "é regular por se tratar de servidor público", "só seria irregular se fosse divulgada à imprensa"], correta: "B", comentario: "Dado de saúde é dado pessoal sensível (LGPD) e a informação foi obtida em razão do cargo." }
    ]
  });

  A(CP, "Assédio moral e sexual no trabalho", {
    resumo: "O que caracteriza cada assédio, exemplos e como denunciar.",
    incidencia: "média",
    fontes: [L.l14457],
    conferir: "As regras específicas de cada órgão (canais de denúncia, programas de prevenção) mudam. Confira se o edital cita norma do órgão.",
    blocos: [
      { tipo: "tabela", titulo: "Diferenças", cabecalho: ["", "Assédio moral", "Assédio sexual"], linhas: [
        ["O que é", "exposição **repetida e prolongada** a situações humilhantes e constrangedoras", "constranger alguém com intenção de obter vantagem ou favorecimento **sexual**"],
        ["Exemplos", "isolar, ridicularizar em público, sobrecarregar ou esvaziar de tarefas de propósito, ameaças constantes", "chantagem por promoção, insinuações, contato físico não desejado"],
        ["Na lei", "não há crime específico no Código Penal; pode ser improbidade e infração disciplinar", "crime do art. 216-A do Código Penal (quando há superioridade hierárquica)"]
      ]},
      { tipo: "texto", texto: [
        "O assédio pode ser **vertical descendente** (chefe → subordinado), **ascendente** (subordinados → chefe) ou **horizontal** (entre colegas).",
        "",
        "Como agir: registrar datas, testemunhas e mensagens; procurar a ouvidoria, a comissão de ética ou a corregedoria do órgão. Testemunhas também podem denunciar."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Uma chefe passa meses retirando todas as tarefas de um servidor e o expõe em reuniões como \"inútil\". Configura-se, em tese:", alternativas: ["assédio sexual", "assédio moral", "exercício regular do poder hierárquico", "conflito de interesses", "nepotismo"], correta: "B", comentario: "Condutas humilhantes, repetidas e prolongadas, com esvaziamento de funções: assédio moral vertical descendente." }
    ]
  });

  A(CP, "Conflito de interesses (noções)", {
    resumo: "Quando o interesse privado pode comprometer o interesse público ou o desempenho da função.",
    incidencia: "média",
    fontes: [L.l12813],
    blocos: [
      { tipo: "texto", texto: [
        "**Conflito de interesses** é a situação gerada pelo confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar, de maneira imprópria, o desempenho da função pública (Lei 12.813/2013, art. 3º, I).",
        "",
        "Exemplos: decidir processo de empresa de um parente; prestar consultoria a quem tem interesse em decisão do próprio órgão; receber presente de quem tem interesse em decisão sua.",
        "",
        "O detalhamento da Lei 12.813/2013 está no **Bloco A**, matéria Ética no Serviço Público Federal."
      ]},
      { tipo: "dica", texto: "Diante de um possível conflito, o servidor deve **se afastar da decisão** (declarar-se impedido) e **consultar** a Comissão de Ética ou o órgão competente." },
      { tipo: "questao", banca: Q, enunciado: "Um servidor responsável por fiscalizar empresas aceita viajar de férias com tudo pago por uma empresa que ele fiscaliza. Há, em tese:", alternativas: ["conduta ética, por ser fora do expediente", "conflito de interesses", "assédio moral", "apenas falta de pontualidade", "nenhuma irregularidade se ele declarar o presente"], correta: "B", comentario: "Receber vantagem de quem tem interesse em decisão do servidor compromete a imparcialidade: conflito de interesses." }
    ]
  });

  /* ================= ATENDIMENTO ================= */

  A(AT, "Qualidade no atendimento", {
    resumo: "Atender bem: cortesia, informação correta, resolutividade e respeito ao tempo do cidadão.",
    incidencia: "média",
    fontes: [L.l13460],
    blocos: [
      { tipo: "texto", texto: [
        "A **Lei 13.460/2017** define direitos do **usuário** de serviços públicos. Entre as diretrizes (art. 5º): urbanidade, respeito, acessibilidade e cortesia; presunção de **boa-fé** do usuário; igualdade de tratamento; cumprimento de prazos; eliminação de exigências desnecessárias; e **não exigir** documentos que a própria Administração já tem.",
        "",
        "Cada órgão deve publicar a **Carta de Serviços ao Usuário**, informando os serviços, requisitos, prazos e formas de atendimento."
      ]},
      { tipo: "tabela", titulo: "Bom atendimento × mau atendimento", cabecalho: ["Faça", "Evite"], linhas: [
        ["Ouvir com atenção até o fim", "interromper ou demonstrar pressa"],
        ["Dar informação correta, completa e clara", "\"empurrar\" para outro setor sem orientar"],
        ["Usar linguagem simples", "jargão técnico e siglas"],
        ["Assumir o problema e encaminhar", "dizer \"isso não é comigo\""],
        ["Tratar todos com igualdade", "privilegiar conhecidos"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 13.460/2017, no atendimento ao usuário de serviço público, presume-se:", alternativas: ["a má-fé do usuário até prova em contrário", "a boa-fé do usuário", "que o usuário conhece todos os procedimentos", "que o usuário deve apresentar todos os documentos, mesmo os que o órgão já possui", "a prioridade de quem chegar acompanhado de advogado"], correta: "B", comentario: "Art. 5º, II: presunção de boa-fé do usuário." }
    ]
  });

  A(AT, "Comunicação com o cidadão", {
    resumo: "Linguagem simples, escuta ativa e comunicação escrita clara.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Comunicar bem é fazer o cidadão **entender** o que precisa e **o que vai acontecer** com o pedido dele.",
        "",
        "- **Escuta ativa**: prestar atenção, confirmar o entendimento (\"O senhor quer saber se…\"), não julgar.",
        "- **Linguagem simples**: frases curtas, palavras comuns, ordem direta, exemplos. Explique siglas.",
        "- **Comunicação não verbal**: postura, contato visual e tom de voz também comunicam.",
        "- **Barreiras**: ruído, pressa, preconceito, uso de jargão, falta de informação."
      ]},
      { tipo: "exemplo", titulo: "Reescrevendo em linguagem simples", enunciado: "\"O requerente deverá proceder à juntada da documentação comprobatória no prazo regulamentar, sob pena de indeferimento.\"", resolucao: ["\"Envie os documentos que comprovam o seu pedido em até 10 dias. Sem eles, o pedido será negado.\"", "(Indique o prazo real, em vez de \"prazo regulamentar\".)"], resposta: "Frases curtas, prazo explícito, consequência clara" },
      { tipo: "questao", banca: Q, enunciado: "Na escuta ativa, o servidor deve:", alternativas: ["preparar a resposta enquanto o cidadão fala", "interromper para ganhar tempo", "confirmar o que entendeu antes de responder", "usar termos técnicos para mostrar domínio", "evitar contato visual"], correta: "C", comentario: "Confirmar o entendimento evita respostas erradas e mostra atenção." }
    ]
  });

  A(AT, "Atendimento prioritário", {
    resumo: "Quem tem prioridade por lei e como ela funciona.",
    incidencia: "média",
    fontes: [L.l10048],
    conferir: "A lista de beneficiários foi ampliada por leis posteriores à Lei 10.048/2000. Confira a redação atual do art. 1º.",
    blocos: [
      { tipo: "texto", texto: [
        "A **Lei 10.048/2000** garante atendimento prioritário, entre outros, a:",
        "- pessoas com **deficiência**;",
        "- pessoas **idosas** (60 anos ou mais), com prioridade especial aos maiores de **80 anos** (Estatuto da Pessoa Idosa);",
        "- **gestantes** e **lactantes**;",
        "- pessoas com **crianças de colo**;",
        "- **obesos**;",
        "- pessoas com **transtorno do espectro autista** e doadores de sangue, conforme leis posteriores.",
        "",
        "Repartições públicas devem garantir atendimento imediato ou com prioridade, inclusive em filas e guichês preferenciais."
      ]},
      { tipo: "atencao", texto: "Prioridade não significa \"passar na frente de qualquer jeito\": o órgão deve organizar o atendimento para que a prioridade seja real (guichê, senha, assento), sem descaso com os demais." },
      { tipo: "questao", banca: Q, enunciado: "Entre as pessoas idosas, a lei assegura prioridade especial às maiores de:", alternativas: ["60 anos", "65 anos", "70 anos", "75 anos", "80 anos"], correta: "E", comentario: "O Estatuto da Pessoa Idosa (Lei 10.741/2003, art. 3º, § 2º) dá prioridade especial aos maiores de 80 anos." }
    ]
  });

  A(AT, "Acessibilidade e inclusão", {
    resumo: "Barreiras, desenho universal, Libras e o Estatuto da Pessoa com Deficiência.",
    incidencia: "média",
    fontes: [L.l13146],
    blocos: [
      { tipo: "texto", texto: [
        "O **Estatuto da Pessoa com Deficiência (Lei 13.146/2015)** adota o **modelo social**: a deficiência resulta da interação entre um impedimento de longo prazo e as **barreiras** do ambiente. Remover as barreiras é dever de todos, inclusive do Poder Público.",
        "",
        "**Barreiras** (art. 3º, IV): urbanísticas, arquitetônicas, nos transportes, nas comunicações e na informação, **atitudinais** (preconceito) e tecnológicas."
      ]},
      { tipo: "tabela", titulo: "Conceitos", cabecalho: ["Termo", "Significado"], linhas: [
        ["Acessibilidade", "possibilidade de usar espaços, serviços e informações com segurança e autonomia"],
        ["Desenho universal", "produtos e ambientes pensados para todos, sem precisar de adaptação"],
        ["Adaptação razoável", "ajustes necessários num caso concreto, sem ônus desproporcional"],
        ["Tecnologia assistiva", "recursos que ampliam a funcionalidade (leitor de tela, cadeira de rodas)"],
        ["Libras", "Língua Brasileira de Sinais, reconhecida pela Lei 10.436/2002"]
      ]},
      { tipo: "dica", texto: "Termo correto: **pessoa com deficiência**. Evite \"portador de deficiência\", \"deficiente\" ou \"pessoa com necessidades especiais\"." },
      { tipo: "questao", banca: Q, enunciado: "O preconceito de um servidor que trata uma pessoa com deficiência como incapaz é, segundo a Lei 13.146/2015, uma barreira:", alternativas: ["arquitetônica", "urbanística", "atitudinal", "tecnológica", "nos transportes"], correta: "C", comentario: "Atitudes e comportamentos que impedem a participação social são barreiras atitudinais." }
    ]
  });
})();

/* Aprofundamento · Direito Constitucional.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/direito-constitucional.js.
   Emendas recentes vêm com “(conferir)”: confirme na Constituição atualizada do Planalto. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/direito-constitucional/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Constituição Federal atualizada (Planalto)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "Leia a lei seca: a maioria das questões copia o texto." },
    { titulo: "Direito Constitucional Esquematizado", autor: "Pedro Lenza", nota: "O mais usado em concursos; esquemas e quadros." },
    { titulo: "Direito Constitucional Descomplicado", autor: "Vicente Paulo e Marcelo Alexandrino", nota: "Linguagem direta, bom para nível médio." },
    { titulo: "Curso de Direito Constitucional Positivo", autor: "José Afonso da Silva", nota: "Clássico; origem da classificação da eficácia das normas." },
    { titulo: "Dizer o Direito", url: "https://www.dizerodireito.com.br", nota: "Resumos gratuitos da jurisprudência do STF." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar e consultar",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Direito Constitucional, filtrando pelo assunto e pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "Portal do STF", url: "https://portal.stf.jus.br", nota: "Súmulas vinculantes e a Constituição comentada pelo próprio STF." },
    ],
  };

  /* ================= TEORIA DA CONSTITUIÇÃO ================= */

  A("teoria-da-constituicao/conceito-e-classificacao-das-constituicoes", [
    aprofundar([
      "### A CF/88 em uma linha",
      "**Escrita**, **formal**, **rígida** (exige processo mais difícil para emendar), **dogmática**, **promulgada** (democrática, feita por assembleia eleita), **analítica** (longa e detalhada) e **dirigente** (traça programas e metas para o Estado).",
      "",
      "### Contrastes que caem",
      "- Promulgada × **outorgada** (imposta, como as de 1824, 1937 e 1967).",
      "- Rígida × flexível (muda como lei comum) × semirrígida (parte rígida, parte flexível, como a de 1824).",
      "- Analítica × **sintética** (curta, só princípios, como a dos EUA).",
      "",
      "### Supremacia",
      "Por ser rígida, a Constituição está no topo do ordenamento: lei que a contrarie é inconstitucional.",
    ]),
    PRATICAR,
    q("Quanto à estabilidade, a Constituição de 1988 é classificada como:", ["flexível", "rígida", "semirrígida", "imutável", "sintética"], "B", "Exige processo especial para emenda (art. 60)."),
    ce("A Constituição de 1988 é sintética, pois se limita a princípios gerais.", "Errado", "É analítica: longa e detalhada."),
    q("Constituição elaborada por uma assembleia eleita pelo povo é classificada, quanto à origem, como:", ["outorgada", "promulgada", "cesarista", "flexível", "histórica"], "B", "As outorgadas são impostas pelo governante."),
  ]);

  A("teoria-da-constituicao/poder-constituinte", [
    aprofundar([
      "### Espécies",
      "- **Originário**: cria uma nova Constituição; é inicial, ilimitado juridicamente e incondicionado.",
      "- **Derivado reformador**: altera a Constituição por **emendas**, com limites (art. 60).",
      "- **Derivado decorrente**: dos estados, para elaborar as **Constituições estaduais**.",
      "- **Difuso**: muda o sentido da Constituição sem mudar o texto (**mutação constitucional**).",
      "",
      "### Limites às emendas (art. 60)",
      "- **Formais**: proposta de 1/3 da Câmara ou do Senado, do Presidente ou de mais da metade das Assembleias Legislativas; aprovação em **dois turnos** em cada Casa por **3/5**; promulgação pelas Mesas da Câmara e do Senado (sem sanção).",
      "- **Circunstanciais**: não se emenda durante **intervenção federal, estado de defesa ou estado de sítio**.",
      "- **Materiais (cláusulas pétreas)**: não se admite proposta **tendente a abolir** a forma federativa, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais.",
      "- Proposta rejeitada ou prejudicada não volta na **mesma sessão legislativa**.",
    ]),
    PRATICAR,
    q("A elaboração das Constituições estaduais é manifestação do poder constituinte:", ["originário", "derivado reformador", "derivado decorrente", "difuso", "revisor"], "C", "Decorre da autonomia dos estados (art. 25)."),
    q("A emenda à Constituição é aprovada se obtiver, em cada Casa do Congresso, em dois turnos:", ["maioria simples", "maioria absoluta", "três quintos dos votos", "dois terços dos votos", "unanimidade"], "C", "Art. 60, § 2º."),
    ce("É possível aprovar emenda constitucional tendente a abolir o voto secreto.", "Errado", "O voto direto, secreto, universal e periódico é cláusula pétrea."),
    ce("A Constituição não pode ser emendada durante a vigência de estado de sítio.", "Certo", "É limite circunstancial, junto com a intervenção federal e o estado de defesa."),
  ]);

  A("teoria-da-constituicao/aplicabilidade-das-normas-constitucionais", [
    aprofundar([
      "### José Afonso da Silva em três perguntas",
      "- Produz todos os efeitos já e não pode ser restringida? **Eficácia plena** (ex.: art. 2º, separação dos Poderes).",
      "- Produz efeitos já, mas a lei **pode restringir**? **Eficácia contida** (ex.: art. 5º, XIII, livre exercício de profissão, “atendidas as qualificações que a lei estabelecer”).",
      "- Só produz efeitos plenos **depois de uma lei**? **Eficácia limitada**, que pode ser de princípio **institutivo** (cria órgãos ou institutos) ou **programático** (metas do Estado, como os objetivos do art. 3º).",
      "",
      "### Normas limitadas não são inúteis",
      "Mesmo sem a lei, já revogam normas anteriores contrárias e servem de parâmetro para controle de constitucionalidade. A falta da lei pode ser combatida por **mandado de injunção** ou por ação direta de inconstitucionalidade por omissão.",
    ]),
    PRATICAR,
    q("O art. 5º, XIII (“é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer”) é norma de eficácia:", ["plena", "contida", "limitada de princípio institutivo", "limitada programática", "exaurida"], "B", "Produz efeitos desde já, mas a lei pode restringi-la (ex.: exame da OAB)."),
    q("As normas programáticas, que traçam metas para o Estado, são de eficácia:", ["plena", "contida", "limitada", "absoluta", "exaurida"], "C", "Dependem de atuação legislativa e de políticas públicas."),
    ce("A omissão do legislador em editar a lei exigida por norma de eficácia limitada pode ser combatida por mandado de injunção.", "Certo", "Quando a falta da norma inviabiliza o exercício de direitos (art. 5º, LXXI)."),
  ]);

  /* ================= PRINCÍPIOS FUNDAMENTAIS ================= */

  A("principios-fundamentais/fundamentos-da-republica-art-1", [
    aprofundar([
      "### Fundamentos × objetivos",
      "Os **fundamentos** (art. 1º) são **substantivos**: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político (**SO-CI-DI-VA-PLU**).",
      "Os **objetivos** (art. 3º) começam com **verbos**: construir, garantir, erradicar, promover.",
      "",
      "### Parágrafo único",
      "“Todo o poder emana do **povo**, que o exerce por meio de representantes eleitos ou **diretamente**” (democracia semidireta: plebiscito, referendo e iniciativa popular).",
      "",
      "### Forma e sistema",
      "República (forma de governo), federação (forma de Estado), presidencialismo (sistema de governo) e Estado Democrático de Direito.",
    ]),
    PRATICAR,
    q("NÃO é fundamento da República Federativa do Brasil (art. 1º):", ["a soberania", "a cidadania", "o pluralismo político", "a erradicação da pobreza", "a dignidade da pessoa humana"], "D", "Erradicar a pobreza é objetivo (art. 3º), começa com verbo."),
    ce("O pluralismo político é um dos fundamentos da República Federativa do Brasil.", "Certo", "Art. 1º, V."),
    q("A forma de Estado adotada pela Constituição de 1988 é a:", ["república", "federação", "presidencialismo", "monarquia", "Estado unitário"], "B", "República é a forma de governo; presidencialismo, o sistema."),
  ]);

  A("principios-fundamentais/separacao-dos-poderes-art-2", [
    aprofundar([
      "### Funções típicas e atípicas",
      "Cada Poder tem uma função **principal** (típica) e exerce, em menor grau, as dos outros (**atípicas**):",
      "- Legislativo legisla e fiscaliza; atipicamente **julga** (Senado julga o Presidente por crime de responsabilidade) e administra (organiza seus serviços).",
      "- Executivo administra; atipicamente legisla (**medida provisória**, lei delegada) e julga (processos administrativos).",
      "- Judiciário julga; atipicamente administra (concursos, licitações dos tribunais) e legisla (regimentos internos).",
      "",
      "### Freios e contrapesos",
      "Mecanismos de controle recíproco: veto do Presidente, derrubada do veto pelo Congresso, controle de constitucionalidade pelo Judiciário, aprovação de ministros do STF pelo Senado.",
    ]),
    PRATICAR,
    q("Quando o Senado Federal julga o Presidente da República por crime de responsabilidade, exerce função:", ["típica de legislar", "típica de fiscalizar", "atípica de julgar", "atípica de administrar", "jurisdicional típica"], "C", "Julgar é função típica do Judiciário; para o Senado, é atípica."),
    ce("A edição de medida provisória pelo Presidente da República é exemplo de função atípica do Poder Executivo.", "Certo", "É atividade normativa, típica do Legislativo."),
  ]);

  A("principios-fundamentais/objetivos-fundamentais-art-3", [
    aprofundar([
      "### Os quatro objetivos (art. 3º)",
      "I. **construir** uma sociedade livre, justa e solidária;",
      "II. **garantir** o desenvolvimento nacional;",
      "III. **erradicar** a pobreza e a marginalização e **reduzir** as desigualdades sociais e regionais;",
      "IV. **promover** o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.",
      "",
      "### A pegadinha do inciso III",
      "Pobreza e marginalização se **erradicam**; desigualdades se **reduzem**. Questão que fala em “erradicar as desigualdades” está errada.",
    ]),
    PRATICAR,
    ce("Constitui objetivo fundamental da República erradicar as desigualdades sociais e regionais.", "Errado", "O texto fala em erradicar a pobreza e a marginalização e em reduzir as desigualdades."),
    q("É objetivo fundamental da República (art. 3º):", ["a soberania", "a independência nacional", "garantir o desenvolvimento nacional", "a prevalência dos direitos humanos", "a dignidade da pessoa humana"], "C", "Soberania e dignidade são fundamentos; independência e direitos humanos, princípios das relações internacionais."),
  ]);

  A("principios-fundamentais/principios-nas-relacoes-internacionais-art-4", [
    aprofundar([
      "### A lista do art. 4º",
      "Independência nacional; **prevalência dos direitos humanos**; autodeterminação dos povos; **não intervenção**; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; **repúdio ao terrorismo e ao racismo**; cooperação entre os povos para o progresso da humanidade; **concessão de asilo político**.",
      "",
      "### Parágrafo único",
      "O Brasil buscará a **integração econômica, política, social e cultural dos povos da América Latina**, visando à formação de uma comunidade latino-americana de nações.",
      "",
      "### Como separar dos outros artigos",
      "O art. 4º fala do Brasil **perante outros países**. Soberania (art. 1º) e desenvolvimento nacional (art. 3º) não estão nele.",
    ]),
    PRATICAR,
    q("É princípio que rege o Brasil nas relações internacionais:", ["pluralismo político", "concessão de asilo político", "valores sociais do trabalho", "garantir o desenvolvimento nacional", "cidadania"], "B", "Os demais são fundamentos ou objetivos."),
    ce("Segundo a Constituição, o Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina.", "Certo", "Art. 4º, parágrafo único."),
  ]);

  /* ================= DIREITOS E GARANTIAS FUNDAMENTAIS ================= */

  A("direitos-e-garantias-fundamentais/direitos-e-deveres-individuais-e-coletivos-art-5", [
    aprofundar([
      "### Casa é asilo inviolável (inciso XI)",
      "Sem consentimento do morador, só se entra: em **flagrante delito**, **desastre** ou para **prestar socorro** (a qualquer hora); ou por **ordem judicial**, **durante o dia**.",
      "",
      "### Reunião e associação",
      "- **Reunião** pacífica, sem armas, em local aberto ao público: **independe de autorização**, basta **aviso prévio** à autoridade.",
      "- **Associação**: dissolução compulsória só por **decisão judicial transitada em julgado**; suspensão das atividades, por decisão judicial.",
      "",
      "### Crimes",
      "- **Inafiançáveis e imprescritíveis**: **racismo** e ação de grupos armados contra a ordem constitucional e o Estado Democrático.",
      "- **Inafiançáveis e insuscetíveis de graça ou anistia**: **tortura, tráfico, terrorismo e hediondos** (3TH).",
      "",
      "### Prisão civil",
      "Só por dívida de **pensão alimentícia**. A do depositário infiel é ilícita (Súmula Vinculante 25).",
      "",
      "### Extradição",
      "Brasileiro **nato** nunca; **naturalizado**, por crime comum praticado antes da naturalização ou por tráfico de drogas.",
    ]),
    PRATICAR,
    q("Sem consentimento do morador, a entrada numa casa durante a noite é permitida:", ["com ordem judicial", "com ordem do delegado", "em caso de flagrante delito", "para cumprir mandado de busca", "nunca"], "C", "À noite, só flagrante, desastre ou socorro. A ordem judicial vale durante o dia."),
    q("São imprescritíveis, segundo a Constituição:", ["a tortura e o terrorismo", "o racismo e a ação de grupos armados contra a ordem constitucional", "os crimes hediondos", "o tráfico de drogas", "todos os crimes contra a vida"], "B", "Tortura, tráfico, terrorismo e hediondos são inafiançáveis e insuscetíveis de graça ou anistia, mas não imprescritíveis."),
    ce("O direito de reunião pacífica, sem armas, em local aberto ao público, depende de autorização prévia da autoridade.", "Errado", "Basta prévio aviso, para não frustrar outra reunião marcada para o mesmo local."),
    q("A única prisão civil por dívida admitida no Brasil, segundo o STF, é a do:", ["depositário infiel", "devedor de pensão alimentícia", "devedor de tributos", "fiador", "devedor de aluguel"], "B", "A do depositário infiel é ilícita (Súmula Vinculante 25)."),
  ]);

  A("direitos-e-garantias-fundamentais/remedios-constitucionais", [
    aprofundar([
      "### Qual remédio",
      "- **Habeas corpus**: liberdade de **locomoção**. Gratuito; qualquer pessoa impetra, **sem advogado**.",
      "- **Habeas data**: **conhecer ou retificar informações pessoais** em bancos de dados de entidades governamentais ou de caráter público. Gratuito.",
      "- **Mandado de segurança**: direito **líquido e certo** não amparado por HC nem HD, contra ato de autoridade. Prazo de **120 dias** (Lei 12.016/2009).",
      "- **Mandado de segurança coletivo**: partido político com representação no Congresso, organização sindical, entidade de classe ou associação em funcionamento há pelo menos **1 ano**.",
      "- **Mandado de injunção**: **falta de norma** regulamentadora que inviabiliza um direito.",
      "- **Ação popular**: qualquer **cidadão** (eleitor), para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. Sem custas, salvo má-fé.",
    ]),
    PRATICAR,
    q("O remédio para obter acesso a informações pessoais constantes de banco de dados de entidade governamental é o:", ["habeas corpus", "habeas data", "mandado de injunção", "mandado de segurança coletivo", "ação popular"], "B", "Também serve para retificar esses dados."),
    q("Tem legitimidade para propor ação popular:", ["qualquer pessoa, inclusive estrangeiro", "o cidadão", "apenas o Ministério Público", "apenas partidos políticos", "apenas associações"], "B", "Cidadão no sentido de eleitor, que comprova a condição com o título."),
    q("O prazo para impetrar mandado de segurança, contado da ciência do ato, é de:", ["30 dias", "60 dias", "90 dias", "120 dias", "5 anos"], "D", "Lei 12.016/2009, art. 23."),
    ce("O habeas corpus só pode ser impetrado por advogado.", "Errado", "Qualquer pessoa pode impetrar, em favor próprio ou de outro."),
  ]);

  A("direitos-e-garantias-fundamentais/direitos-sociais-arts-6-a-11", [
    aprofundar([
      "### Os direitos sociais do art. 6º",
      "Educação, saúde, alimentação, trabalho, moradia, **transporte**, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados.",
      "",
      "### Números do art. 7º que caem",
      "- Jornada de **8 horas** diárias e **44** semanais; turnos ininterruptos de revezamento, **6 horas**.",
      "- Hora extra com acréscimo de, no mínimo, **50%**.",
      "- Férias com **um terço** a mais; licença-gestante de **120 dias**.",
      "- Aviso prévio proporcional, no mínimo de **30 dias**.",
      "- Proibido trabalho noturno, perigoso ou insalubre a **menores de 18** e qualquer trabalho a **menores de 16**, salvo como **aprendiz**, a partir de **14**.",
      "",
      "### Sindicatos (art. 8º)",
      "Livre associação, mas **unicidade sindical**: um só sindicato da mesma categoria na mesma base territorial, que não pode ser menor que a área de um município. Ninguém é obrigado a filiar-se.",
    ]),
    PRATICAR,
    q("A remuneração do serviço extraordinário deve ser superior à do normal em, no mínimo:", ["20%", "30%", "40%", "50%", "100%"], "D", "Art. 7º, XVI."),
    q("Segundo a Constituição, o trabalho do menor aprendiz é permitido a partir dos:", ["12 anos", "14 anos", "15 anos", "16 anos", "18 anos"], "B", "Art. 7º, XXXIII."),
    ce("O transporte está entre os direitos sociais previstos no art. 6º da Constituição.", "Certo", "Incluído pela EC 90/2015."),
    ce("A Constituição permite a criação de mais de um sindicato da mesma categoria profissional num mesmo município.", "Errado", "Vigora a unicidade sindical na mesma base territorial, não inferior a um município."),
  ]);

  A("direitos-e-garantias-fundamentais/nacionalidade", [
    aprofundar([
      "### Brasileiro nato (art. 12, I)",
      "- Nascido no Brasil, ainda que de pais estrangeiros (desde que eles não estejam a serviço do país deles).",
      "- Nascido no estrangeiro de pai ou mãe brasileiros **a serviço do Brasil**.",
      "- Nascido no estrangeiro de pai ou mãe brasileiros, **registrado** em repartição brasileira, ou que venha a **residir** no Brasil e **opte**, depois dos 18 anos, pela nacionalidade brasileira.",
      "",
      "### Naturalizado (art. 12, II)",
      "- Originários de **países de língua portuguesa**: **1 ano** ininterrupto de residência e idoneidade moral.",
      "- Demais estrangeiros: **15 anos** ininterruptos de residência e sem condenação penal, se requererem.",
      "",
      "### Cargos privativos de nato (art. 12, § 3º)",
      "Presidente e Vice; Presidente da Câmara; Presidente do Senado; **Ministro do STF**; carreira diplomática; oficial das Forças Armadas; **Ministro de Estado da Defesa**.",
    ]),
    PRATICAR,
    q("É cargo privativo de brasileiro nato:", ["Ministro do STJ", "Senador", "Ministro do STF", "Governador", "Ministro da Fazenda"], "C", "Ministros do STJ, senadores e ministros comuns podem ser naturalizados."),
    q("Um cidadão português que quer se naturalizar brasileiro precisa, segundo a Constituição, de residência ininterrupta no Brasil por:", ["1 ano", "2 anos", "4 anos", "10 anos", "15 anos"], "A", "Para originários de países de língua portuguesa: 1 ano e idoneidade moral."),
    ce("O Presidente da Câmara dos Deputados deve ser brasileiro nato.", "Certo", "Está na linha de substituição do Presidente da República."),
  ]);

  A("direitos-e-garantias-fundamentais/direitos-politicos", [
    aprofundar([
      "### Alistamento e voto",
      "- **Obrigatórios** para maiores de 18 anos.",
      "- **Facultativos** para analfabetos, maiores de 70 anos e jovens de 16 e 17 anos.",
      "- **Inalistáveis**: estrangeiros e, durante o serviço militar obrigatório, os conscritos.",
      "",
      "### Idade mínima para se candidatar",
      "**35**: Presidente, Vice e Senador · **30**: Governador e Vice · **21**: Deputado, Prefeito, Vice-Prefeito e juiz de paz · **18**: Vereador.",
      "",
      "### Cassação é proibida",
      "Só há **perda** ou **suspensão** (art. 15): cancelamento da naturalização, incapacidade civil absoluta, condenação criminal transitada em julgado (enquanto durarem os efeitos), recusa de cumprir obrigação a todos imposta e **improbidade administrativa**.",
      "",
      "### Anterioridade eleitoral (art. 16)",
      "Lei que altera o processo eleitoral entra em vigor na publicação, mas **não se aplica** à eleição que ocorra **até um ano** depois.",
    ]),
    PRATICAR,
    q("A idade mínima para se candidatar a Senador é de:", ["21 anos", "25 anos", "30 anos", "35 anos", "40 anos"], "D", "A mesma exigida para Presidente e Vice."),
    q("O voto é facultativo para:", ["maiores de 60 anos", "maiores de 16 e menores de 18 anos", "servidores públicos", "conscritos", "estrangeiros residentes"], "B", "Também para analfabetos e maiores de 70."),
    ce("A Constituição admite a cassação dos direitos políticos em caso de improbidade administrativa.", "Errado", "A cassação é vedada; a improbidade gera suspensão."),
  ]);

  A("direitos-e-garantias-fundamentais/partidos-politicos", [
    aprofundar([
      "### Regras do art. 17",
      "- Criação livre, com **caráter nacional**.",
      "- **Proibido** receber recursos de entidade ou governo **estrangeiros**.",
      "- Prestação de contas à Justiça Eleitoral; funcionamento parlamentar conforme a lei.",
      "- **Pessoa jurídica de direito privado**: adquire personalidade na forma da lei civil e registra o estatuto no **TSE**.",
      "- Autonomia para definir estrutura interna e organização, com normas de disciplina e **fidelidade partidária**.",
      "- Acesso ao fundo partidário e ao tempo de rádio e TV depende de desempenho mínimo nas eleições (cláusula de desempenho).",
    ]),
    PRATICAR,
    ce("Os partidos políticos podem receber recursos financeiros de governos estrangeiros, desde que declarados.", "Errado", "A Constituição proíbe recursos de entidade ou governo estrangeiros."),
    q("Os partidos políticos têm natureza jurídica de:", ["autarquia", "órgão público", "pessoa jurídica de direito privado", "fundação pública", "empresa pública"], "C", "Registram o estatuto no Tribunal Superior Eleitoral."),
  ]);

  /* ================= ORGANIZAÇÃO DO ESTADO ================= */

  A("organizacao-do-estado/organizacao-politico-administrativa", [
    aprofundar([
      "### Quem é ente federativo",
      "União, estados, Distrito Federal e municípios, todos **autônomos** (art. 18). **Territórios** federais **não** são entes: integram a União (são autarquias territoriais).",
      "",
      "### Criação de municípios (art. 18, § 4º)",
      "Lei **estadual**, dentro do período fixado por lei complementar **federal**, depois de **estudos de viabilidade** e de **plebiscito** com as populações envolvidas.",
      "",
      "### Vedações a todos os entes (art. 19)",
      "Estabelecer ou subvencionar cultos religiosos (ressalvada a colaboração de interesse público), **recusar fé aos documentos públicos** e criar distinções entre brasileiros ou preferências entre si.",
    ]),
    PRATICAR,
    q("Integram a União, sem serem entes federativos:", ["os municípios", "os estados", "o Distrito Federal", "os territórios federais", "as regiões metropolitanas"], "D", "Territórios são autarquias territoriais da União."),
    ce("Os municípios são entes federativos autônomos.", "Certo", "Art. 18."),
    q("É vedado à União, aos estados, ao DF e aos municípios:", ["criar autarquias", "recusar fé aos documentos públicos", "instituir tributos", "celebrar convênios", "organizar seus servidores"], "B", "Art. 19, II."),
  ]);

  A("organizacao-do-estado/uniao-bens-e-competencias", [
    aprofundar([
      "### Quatro tipos de competência",
      "- **Exclusiva da União** (art. 21), administrativa e **indelegável**: emitir moeda, declarar guerra, manter o serviço postal.",
      "- **Privativa da União** (art. 22), legislativa e **delegável** aos estados por **lei complementar**, sobre questões específicas: direito civil, comercial, **penal**, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do **trabalho**.",
      "- **Comum** (art. 23), administrativa, de todos os entes: proteger o meio ambiente, cuidar da saúde, combater a pobreza.",
      "- **Concorrente** (art. 24), legislativa, da União, estados e DF: direito **tributário, financeiro, penitenciário, econômico e urbanístico**, educação, proteção ao consumidor.",
      "",
      "### Como funciona a concorrente",
      "A União faz **normas gerais**; os estados **suplementam**. Sem lei federal, os estados legislam **plenamente**; lei federal posterior **suspende** a eficácia da estadual no que for contrário.",
    ]),
    PRATICAR,
    q("Legislar sobre direito penal é competência:", ["comum", "concorrente", "privativa da União", "dos estados", "dos municípios"], "C", "Art. 22, I."),
    q("Legislar sobre direito tributário é competência:", ["privativa da União", "exclusiva da União", "concorrente", "comum", "residual dos municípios"], "C", "Art. 24, I."),
    ce("Na falta de lei federal sobre normas gerais, os estados exercem a competência legislativa plena nas matérias concorrentes.", "Certo", "Art. 24, § 3º."),
    q("Proteger o meio ambiente e combater a poluição é competência:", ["privativa da União", "exclusiva dos estados", "comum a todos os entes", "concorrente apenas da União e dos estados", "exclusiva dos municípios"], "C", "Art. 23, VI."),
  ]);

  A("organizacao-do-estado/estados-municipios-e-distrito-federal", [
    aprofundar([
      "### Estados",
      "Ficam com a competência **remanescente** (o que não for vedado nem dado aos outros) e com a exploração do **gás canalizado**. Podem instituir **regiões metropolitanas** por **lei complementar estadual**.",
      "",
      "### Municípios",
      "Legislam sobre **interesse local** e suplementam a legislação federal e estadual; organizam o **transporte coletivo** local, que é serviço essencial. A **Lei Orgânica** é votada em **dois turnos**, com intervalo mínimo de **10 dias**, e aprovada por **2/3** da Câmara Municipal.",
      "",
      "### Distrito Federal",
      "Acumula competências de estado e de município, é regido por lei orgânica e **não pode ser dividido em municípios**.",
    ]),
    PRATICAR,
    q("A Lei Orgânica do município é aprovada:", ["em turno único, por maioria simples", "em dois turnos, com intervalo mínimo de 10 dias, por 2/3 da Câmara", "por plebiscito", "pela Assembleia Legislativa", "por decreto do prefeito"], "B", "Art. 29, caput."),
    ce("O Distrito Federal pode ser dividido em municípios.", "Errado", "Art. 32: é vedada essa divisão."),
    q("As regiões metropolitanas são instituídas por:", ["lei ordinária federal", "lei complementar estadual", "decreto do governador", "lei municipal", "emenda constitucional"], "B", "Art. 25, § 3º."),
  ]);

  A("organizacao-do-estado/intervencao-federal-e-estadual", [
    aprofundar([
      "### Quem intervém em quem",
      "- A **União** intervém nos **estados** e no **DF** (art. 34) e nos municípios localizados em territórios federais.",
      "- Os **estados** intervêm nos seus **municípios** (art. 35). A União **não** intervém diretamente em município de estado.",
      "",
      "### Decreto e controle",
      "A intervenção federal é decretada pelo **Presidente**, que submete o decreto ao **Congresso** em **24 horas** (dispensado nos casos de requisição judicial em que basta suspender o ato impugnado).",
      "",
      "### Princípios sensíveis",
      "Forma republicana, sistema representativo e regime democrático; direitos da pessoa humana; autonomia municipal; prestação de contas; aplicação mínima em saúde e educação. A violação leva à **representação interventiva** do **Procurador-Geral da República** ao **STF**.",
      "",
      "### Efeito colateral",
      "Durante a intervenção federal, a Constituição **não pode ser emendada**.",
    ]),
    PRATICAR,
    ce("Durante a vigência de intervenção federal, a Constituição não pode ser emendada.", "Certo", "Art. 60, § 1º."),
    q("A intervenção num município localizado num estado é feita pelo:", ["Presidente da República", "Congresso Nacional", "estado", "STF", "Senado Federal"], "C", "A União só intervém em municípios localizados em territórios federais."),
    q("Na violação de princípio constitucional sensível, a intervenção federal depende de provimento, pelo STF, de representação do:", ["Presidente da República", "Procurador-Geral da República", "Governador", "Advogado-Geral da União", "Presidente do Senado"], "B", "Art. 36, III."),
  ]);

  /* ================= ADMINISTRAÇÃO PÚBLICA NA CONSTITUIÇÃO ================= */

  A("administracao-publica-na-constituicao/principios-da-administracao-publica-art-37", [
    aprofundar([
      "### O art. 37 além do LIMPE",
      "- **Teto remuneratório** (inciso XI): o subsídio dos Ministros do STF. Nos municípios, o subsídio do **prefeito**.",
      "- **Revisão geral anual** da remuneração, na mesma data e sem distinção de índices (inciso X).",
      "- Vedada a **vinculação ou equiparação** de remunerações (inciso XIII).",
      "- Ato sem concurso, quando exigido, é **nulo** e gera punição da autoridade (§ 2º).",
      "- A **publicidade** oficial deve ter caráter educativo, informativo ou de orientação social, **sem promoção pessoal** (§ 1º).",
      "",
      "### A quem se aplica",
      "À Administração direta e indireta de **qualquer** dos Poderes da União, dos estados, do DF e dos municípios.",
    ]),
    PRATICAR,
    q("Nos municípios, o teto remuneratório dos servidores é o subsídio do:", ["governador", "prefeito", "vereador", "Ministro do STF", "desembargador"], "B", "Art. 37, XI."),
    ce("Os princípios do art. 37 aplicam-se apenas ao Poder Executivo.", "Errado", "Valem para a Administração de qualquer dos Poderes, em todos os entes."),
    q("A nomeação para cargo efetivo sem o concurso exigido pela Constituição implica:", ["validade do ato, se houver boa-fé", "nulidade do ato e punição da autoridade responsável", "simples advertência", "convalidação após dois anos", "estabilidade automática"], "B", "Art. 37, § 2º."),
  ]);

  A("administracao-publica-na-constituicao/acesso-a-cargos-concurso-publico-e-acumulacao", [
    aprofundar([
      "### Concurso",
      "- Cargos, empregos e funções são acessíveis a **brasileiros** e a **estrangeiros**, na forma da lei.",
      "- Validade de **até 2 anos**, prorrogável **uma vez**, por **igual período**.",
      "- Durante a validade, o aprovado tem **prioridade** sobre novos concursados.",
      "- Reserva de vagas para **pessoas com deficiência**.",
      "",
      "### Acumulação (inciso XVI)",
      "Proibida, salvo com **compatibilidade de horários** e respeitado o teto: **dois cargos de professor**; **um de professor e outro técnico ou científico**; **dois de profissionais de saúde** com profissão regulamentada. A proibição alcança **empregos e funções** em autarquias, fundações, empresas públicas, sociedades de economia mista e subsidiárias.",
    ]),
    PRATICAR,
    q("O prazo de validade do concurso público é de:", ["até 1 ano, improrrogável", "até 2 anos, prorrogável uma vez por igual período", "até 2 anos, prorrogável duas vezes", "até 4 anos", "indeterminado"], "B", "Art. 37, III."),
    q("É permitida a acumulação, com compatibilidade de horários, de:", ["dois cargos técnicos", "dois cargos de professor", "dois cargos administrativos", "um cargo de juiz e outro de advogado público", "qualquer cargo com emprego público"], "B", "Também professor + técnico ou científico, e dois de saúde regulamentados."),
    ce("A proibição de acumular cargos alcança os empregos em sociedades de economia mista.", "Certo", "Art. 37, XVII."),
  ]);

  A("administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41", [
    aprofundar([
      "### Direitos do art. 7º que valem para servidores (art. 39, § 3º)",
      "Entre outros: salário mínimo, **13º**, adicional noturno, salário-família, jornada máxima, repouso semanal, **hora extra**, **férias com 1/3**, licença-gestante e licença-paternidade. O **FGTS** **não** está na lista.",
      "",
      "### Subsídio",
      "Parcela **única**, vedado acrescentar gratificação, adicional ou abono. Obrigatório para membros de Poder, ministros, secretários, mandatários eletivos e policiais, entre outros.",
      "",
      "### Aposentadoria (conferir)",
      "Compulsória aos **75 anos** (na forma de lei complementar). Desde a EC 103/2019, as idades e regras da aposentadoria voluntária dos servidores federais estão na própria emenda; estados e municípios têm regras próprias.",
    ]),
    PRATICAR,
    q("A aposentadoria compulsória do servidor público ocorre aos:", ["65 anos", "70 anos", "72 anos", "75 anos", "80 anos"], "D", "Art. 40, § 1º, II, com a LC 152/2015."),
    ce("O FGTS é um dos direitos estendidos aos servidores estatutários pelo art. 39, § 3º, da Constituição.", "Errado", "O FGTS não está entre os direitos do art. 7º estendidos aos servidores."),
    q("A remuneração em parcela única, vedado o acréscimo de gratificações e adicionais, chama-se:", ["vencimento", "subsídio", "salário", "provento", "abono"], "B", "Art. 39, § 4º."),
  ]);

  A("administracao-publica-na-constituicao/estabilidade-do-servidor", [
    aprofundar([
      "### Como se adquire (art. 41)",
      "**3 anos** de efetivo exercício em cargo de provimento **efetivo**, após concurso, **e** aprovação em **avaliação especial de desempenho** por comissão.",
      "",
      "### Como se perde",
      "- Sentença judicial **transitada em julgado**.",
      "- Processo administrativo com ampla defesa.",
      "- Avaliação **periódica** de desempenho, na forma de lei complementar.",
      "- **Excesso de despesa com pessoal** (art. 169, § 4º), depois de cortar 20% dos cargos em comissão e funções de confiança e de exonerar os não estáveis.",
      "",
      "### Extinção do cargo e reintegração",
      "Extinto o cargo, o estável fica em **disponibilidade** com remuneração **proporcional** ao tempo de serviço, até ser aproveitado. Invalidada a demissão por sentença, é **reintegrado**; quem ocupava a vaga é reconduzido, aproveitado ou posto em disponibilidade.",
    ]),
    PRATICAR,
    q("São requisitos para a estabilidade do servidor:", ["2 anos de exercício", "3 anos de efetivo exercício e aprovação em avaliação especial de desempenho", "3 anos de exercício em cargo em comissão", "aprovação em concurso, apenas", "5 anos de exercício e curso de formação"], "B", "Art. 41, caput e § 4º."),
    q("Extinto o cargo, o servidor estável:", ["é exonerado", "fica em disponibilidade, com remuneração proporcional ao tempo de serviço", "fica em disponibilidade, com remuneração integral", "é demitido", "aposenta-se compulsoriamente"], "B", "Art. 41, § 3º."),
    ce("O servidor estável pode perder o cargo por excesso de despesa com pessoal, depois de adotadas as medidas prévias exigidas pela Constituição.", "Certo", "Art. 169, § 4º."),
  ]);

  /* ================= ORGANIZAÇÃO DOS PODERES ================= */

  A("organizacao-dos-poderes/poder-legislativo", [
    aprofundar([
      "### Câmara × Senado",
      "- **Câmara**: representantes do **povo**, eleição **proporcional**, mandato de **4 anos**, de **8 a 70** deputados por estado.",
      "- **Senado**: representantes dos **estados e do DF**, eleição **majoritária**, **3 senadores** por estado, mandato de **8 anos**, renovação alternada de 1/3 e 2/3 a cada 4 anos.",
      "",
      "### Imunidades",
      "- **Material**: invioláveis civil e penalmente por opiniões, palavras e votos.",
      "- **Formal**: desde a diplomação, só podem ser presos em **flagrante de crime inafiançável**; a Casa decide sobre a prisão em 24 horas.",
      "",
      "### CPI (art. 58, § 3º)",
      "Criada por **1/3** dos membros, para **fato determinado** e **prazo certo**, com poderes de investigação próprios das autoridades judiciais. Pode quebrar sigilos bancário, fiscal e de dados, de forma fundamentada. **Não** pode decretar prisão (salvo flagrante) nem determinar **interceptação telefônica**. Conclusões vão ao Ministério Público.",
    ]),
    PRATICAR,
    q("Cada estado elege, para o Senado Federal:", ["2 senadores, com mandato de 4 anos", "3 senadores, com mandato de 8 anos", "3 senadores, com mandato de 4 anos", "número proporcional à população", "1 senador por eleição"], "B", "Art. 46."),
    ce("A CPI pode determinar a interceptação telefônica dos investigados.", "Errado", "A interceptação depende de ordem judicial (art. 5º, XII)."),
    q("Uma CPI é criada a requerimento de:", ["maioria absoluta", "um terço dos membros da Casa", "dois terços", "líder do governo", "Presidente da República"], "B", "Também exige fato determinado e prazo certo."),
  ]);

  A("organizacao-dos-poderes/processo-legislativo", [
    aprofundar([
      "### Quóruns",
      "Lei **ordinária**: maioria **simples**. Lei **complementar**: maioria **absoluta**. Emenda constitucional: **3/5**, em dois turnos, nas duas Casas.",
      "",
      "### Iniciativa popular",
      "Projeto subscrito por, no mínimo, **1% do eleitorado nacional**, distribuído por pelo menos **5 estados**, com não menos de **0,3%** dos eleitores de cada um.",
      "",
      "### Sanção e veto",
      "O Presidente tem **15 dias úteis**; o silêncio importa **sanção tácita**. O veto parcial abrange texto **integral** de artigo, parágrafo, inciso ou alínea. O Congresso aprecia o veto em sessão conjunta em 30 dias e pode derrubá-lo pela **maioria absoluta** de deputados e senadores.",
      "",
      "### Medida provisória",
      "Relevância e urgência; vigora por **60 dias**, prorrogáveis por mais **60**; depois de **45 dias** sem votação, **tranca a pauta**. Não pode tratar de nacionalidade, direitos políticos, **direito penal**, processual, organização do Judiciário e do MP, planos e orçamentos (salvo créditos extraordinários) nem de matéria de lei complementar.",
    ]),
    PRATICAR,
    q("A lei complementar é aprovada por:", ["maioria simples", "maioria absoluta", "três quintos", "dois terços", "unanimidade"], "B", "Art. 69."),
    q("O prazo para o Presidente sancionar ou vetar um projeto de lei é de:", ["10 dias corridos", "15 dias úteis", "30 dias", "45 dias", "60 dias"], "B", "Art. 66, § 1º. O silêncio vale como sanção."),
    ce("Medida provisória pode tratar de direito penal, desde que haja urgência.", "Errado", "Art. 62, § 1º, I, b: é vedada."),
    ce("O veto parcial pode recair sobre palavras isoladas de um artigo.", "Errado", "Deve abranger texto integral de artigo, parágrafo, inciso ou alínea."),
  ]);

  A("organizacao-dos-poderes/poder-executivo", [
    aprofundar([
      "### Eleição e sucessão",
      "Eleito por **maioria absoluta dos votos válidos** (com segundo turno se necessário), para mandato de **4 anos**, com uma reeleição. Substitutos, nesta ordem: **Vice-Presidente**, Presidente da **Câmara**, Presidente do **Senado** e Presidente do **STF**. Vagando os dois cargos, nova eleição em 90 dias; nos últimos dois anos do mandato, eleição **indireta** pelo Congresso em 30 dias.",
      "",
      "### Responsabilização",
      "- **Crime de responsabilidade**: a **Câmara** autoriza por **2/3**; o **Senado** julga, sob a presidência do Presidente do STF; condenação por 2/3, com perda do cargo e **inabilitação por 8 anos** para função pública.",
      "- **Crime comum**: a Câmara autoriza por 2/3 e o **STF** julga.",
      "- Durante o mandato, não responde por atos **estranhos** ao exercício das funções.",
      "",
      "### Atribuições delegáveis (art. 84, parágrafo único)",
      "Decreto autônomo (inciso VI), **conceder indulto** (XII) e **prover cargos** públicos (XXV, primeira parte), delegáveis a ministros, ao PGR e ao AGU.",
    ]),
    PRATICAR,
    q("Impedidos o Presidente e o Vice, assume primeiro a Presidência da República o:", ["Presidente do Senado", "Presidente da Câmara dos Deputados", "Presidente do STF", "Ministro mais antigo", "Procurador-Geral da República"], "B", "Art. 80."),
    q("No crime de responsabilidade, o Presidente da República é julgado:", ["pelo STF", "pela Câmara dos Deputados", "pelo Senado Federal", "pelo STJ", "pelo Congresso em sessão conjunta"], "C", "A Câmara autoriza; o Senado julga."),
    ce("O Presidente da República pode delegar a ministros de Estado a atribuição de conceder indulto.", "Certo", "Art. 84, parágrafo único."),
  ]);

  A("organizacao-dos-poderes/poder-judiciario", [
    aprofundar([
      "### STF",
      "**11 ministros**, brasileiros **natos**, com mais de 35 e menos de 70 anos (conferir: EC 122/2022), notável saber jurídico e reputação ilibada, nomeados pelo Presidente depois de aprovação pela **maioria absoluta** do Senado. Edita **súmula vinculante** por **2/3** dos membros.",
      "",
      "### CNJ",
      "Órgão do Judiciário que faz o **controle administrativo e financeiro** e fiscaliza os deveres dos juízes. **Não** tem função jurisdicional e não controla o STF.",
      "",
      "### Garantias dos juízes (art. 95)",
      "**Vitaliciedade** (no 1º grau, adquirida após **2 anos** de exercício), **inamovibilidade** e **irredutibilidade de subsídio**.",
      "",
      "### Quinto constitucional",
      "Um quinto das vagas dos TRFs e dos Tribunais de Justiça vai para membros do MP e advogados com mais de **10 anos** de carreira ou de atividade.",
    ]),
    PRATICAR,
    q("O Supremo Tribunal Federal é composto por:", ["9 ministros", "11 ministros", "15 ministros", "27 ministros", "33 ministros"], "B", "O STJ tem, no mínimo, 33."),
    ce("O Conselho Nacional de Justiça exerce função jurisdicional e pode rever decisões judiciais.", "Errado", "O CNJ tem atribuições administrativas, financeiras e disciplinares."),
    q("No primeiro grau, o juiz adquire a vitaliciedade após:", ["a posse", "1 ano de exercício", "2 anos de exercício", "3 anos de exercício", "5 anos de exercício"], "C", "Art. 95, I."),
  ]);

  A("organizacao-dos-poderes/funcoes-essenciais-a-justica", [
    aprofundar([
      "### Ministério Público",
      "Princípios: **unidade**, **indivisibilidade** e **independência funcional**. O **Procurador-Geral da República** é nomeado pelo Presidente entre integrantes da carreira, maiores de 35 anos, após aprovação da **maioria absoluta** do Senado, para mandato de **2 anos**, permitida a recondução.",
      "",
      "### Advocacia pública",
      "A AGU representa a União. O Advogado-Geral da União é de **livre nomeação** pelo Presidente, entre cidadãos maiores de 35 anos, de notável saber jurídico e reputação ilibada.",
      "",
      "### Advocacia e Defensoria",
      "O advogado é **indispensável** à administração da justiça. A **Defensoria Pública** presta **assistência jurídica integral e gratuita** aos necessitados e tem autonomia funcional e administrativa.",
    ]),
    PRATICAR,
    q("O mandato do Procurador-Geral da República é de:", ["1 ano", "2 anos, permitida a recondução", "2 anos, vedada a recondução", "4 anos", "vitalício"], "B", "Art. 128, § 1º."),
    q("São princípios institucionais do Ministério Público:", ["unidade, indivisibilidade e independência funcional", "hierarquia e disciplina", "legalidade e moralidade", "inamovibilidade e vitaliciedade", "oficialidade e informalismo"], "A", "Art. 127, § 1º."),
    ce("A Defensoria Pública presta assistência jurídica integral e gratuita aos necessitados.", "Certo", "Art. 134."),
  ]);
})();

/* Aprofundamento · Arquivologia (Bloco A e conteúdo compartilhado com o Bloco C).
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/arquivologia.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-a/arquivologia/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const atencao = (texto, titulo = "Pegadinha de prova") => ({ tipo: "atencao", titulo, texto });
  /* Embaralha as alternativas de forma fixa (a partir do enunciado), para o gabarito não ficar sempre na mesma letra.
     Listas numéricas ficam na ordem original. */
  const misturar = (alts, ix, semente) => {
    if (alts.length < 3 || alts.every((a) => /^\d/.test(a))) return [alts, ix];
    let h = 0;
    for (const c of semente) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const ordem = alts.map((_, i) => i);
    for (let i = ordem.length - 1; i > 0; i--) {
      h = (h * 1103515245 + 12345) >>> 0;
      const j = h % (i + 1);
      [ordem[i], ordem[j]] = [ordem[j], ordem[i]];
    }
    return [ordem.map((i) => alts[i]), ordem.indexOf(ix)];
  };
  const q = (enunciado, alternativas, correta, comentario) => {
    if (alternativas.length < 3) return { tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario }; // Certo/Errado
    const [alts, ix] = misturar(alternativas, "ABCDE".indexOf(correta), enunciado);
    return { tipo: "questao", banca: Q, enunciado, alternativas: alts, correta: "ABCDE"[ix], comentario };
  };
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Lei 8.159/1991 · Política Nacional de Arquivos Públicos e Privados", url: "https://www.planalto.gov.br/ccivil_03/leis/l8159.htm", nota: "Curta e muito cobrada: leia inteira." },
    { titulo: "Dicionário Brasileiro de Terminologia Arquivística", autor: "Arquivo Nacional", nota: "Fonte oficial dos conceitos; gratuito no site do Arquivo Nacional." },
    { titulo: "Conselho Nacional de Arquivos (CONARQ)", url: "https://www.gov.br/conarq", nota: "Resoluções, e-ARQ Brasil e orientações sobre digitalização e preservação digital." },
    { titulo: "Arquivo: teorias e práticas", autor: "Marilena Leite Paes", nota: "Clássico para concursos; trata de gestão de documentos, protocolo e métodos de arquivamento." },
    { titulo: "Gestão de Documentos: conceitos e procedimentos básicos", autor: "Arquivo Nacional", nota: "Material didático do Arquivo Nacional, direto ao ponto." },
  ];

  /* ================= CONCEITOS FUNDAMENTAIS ================= */

  A("conceitos-fundamentais/arquivo-documento-e-informacao", [
    aprofundar([
      "### Arquivo (Lei 8.159/1991, art. 2º)",
      "Conjuntos de **documentos produzidos e recebidos** por órgãos públicos, instituições de caráter público e entidades privadas, **em decorrência do exercício de atividades específicas**, bem como por pessoa física, **qualquer que seja o suporte** da informação ou a natureza dos documentos. Arquivo também é a **instituição** ou o **local** onde se guardam esses documentos.",
      "",
      "### Documento de arquivo (arquivístico)",
      "Documento **produzido ou recebido** no curso de uma atividade prática, como **instrumento ou resultado** dela, e **mantido** para ação ou referência. Tem **relação orgânica** com as demais peças do conjunto.",
      "- **Informação**: elemento de conhecimento; **suporte**: o material que a registra (papel, filme, disco).",
      "- **Documento** = **informação + suporte**.",
      "",
      "### Arquivo × biblioteca × museu",
      "- **Arquivo**: documentos **produzidos ou recebidos** na atividade da entidade; **orgânicos**, geralmente **únicos**, acumulados **naturalmente**.",
      "- **Biblioteca**: materiais (livros, periódicos) **reunidos** artificialmente por assunto; geralmente **vários exemplares**.",
      "- **Museu**: **objetos** de interesse cultural, científico ou artístico, coletados e expostos.",
      "",
      "### Funções arquivísticas básicas",
      "Criação, **classificação**, **avaliação**, **aquisição**, **descrição**, **difusão** e **conservação**.",
      "",
      "### Gestão de documentos (Lei 8.159, art. 3º)",
      "Conjunto de procedimentos e operações técnicas de **produção, tramitação, uso, avaliação e arquivamento** em fase **corrente e intermediária**, visando à **eliminação ou ao recolhimento para guarda permanente**.",
    ]),
    atencao("Documento de arquivo é **orgânico** e acumulado **naturalmente**. Biblioteca e museu **reúnem** itens por **coleta**. A Lei 8.159 define arquivo **independentemente do suporte**."),
    q("Segundo a Lei 8.159/1991, consideram-se arquivos os conjuntos de documentos produzidos e recebidos em decorrência do exercício de atividades específicas, qualquer que seja:", ["o valor histórico", "o suporte da informação ou a natureza dos documentos", "a quantidade de páginas", "a idade do documento", "o tipo de autoridade"], "B", "Art. 2º."),
    ce("A diferença entre um arquivo e uma biblioteca é que os documentos de arquivo são produzidos ou recebidos no exercício de atividades da entidade, enquanto os materiais de biblioteca são reunidos por coleta.", "Certo", "A organicidade é a marca do arquivo."),
    q("A gestão de documentos tem por objetivo, nas fases corrente e intermediária:", ["a eliminação ou o recolhimento para guarda permanente", "a venda dos documentos", "a criação de bibliotecas", "somente a digitalização", "a classificação por gênero apenas"], "A", "Art. 3º da Lei 8.159."),
  ]);

  A("conceitos-fundamentais/principios-arquivisticos", [
    aprofundar([
      "### Cinco princípios",
      "1. **Proveniência (respeito aos fundos)**: os documentos de uma **mesma origem** (órgão ou pessoa) **não se misturam** com os de outra. É o **princípio fundamental** da arquivística.",
      "2. **Organicidade**: os documentos refletem a **estrutura, as funções e as atividades** da entidade; existe **relação orgânica** entre eles.",
      "3. **Unicidade**: cada documento é **único** no conjunto, pelo **contexto** em que foi produzido, mesmo que haja cópias.",
      "4. **Indivisibilidade (integridade)**: o **fundo** não deve ser **dividido, mutilado nem fragmentado**; **eliminação** só com critério.",
      "5. **Cumulatividade**: o arquivo é uma **formação progressiva**, que se acumula ao longo do tempo.",
      "",
      "### Fundo",
      "**Conjunto de documentos de uma mesma proveniência**, acumulados por uma entidade no exercício de suas atividades. **Ordem original**: preservar a ordem em que os documentos foram acumulados, que reflete a **atividade** do produtor.",
      "",
      "### Conexões",
      "O princípio da **proveniência** gera o conceito de **fundo**; a **organicidade** explica a ligação entre documentos; a **unicidade** a identidade de cada peça; a **indivisibilidade**, a preservação do conjunto; a **cumulatividade**, a formação gradual.",
    ]),
    atencao("**Proveniência** = respeito aos fundos (origem). **Organicidade** = relação entre os documentos e as funções da entidade. Se a banca fala em **\"um mesmo documento é único no conjunto\"**, é **unicidade**."),
    q("O princípio segundo o qual os documentos produzidos por uma mesma entidade não devem ser misturados com os de outras origens é o da:", ["organicidade", "proveniência", "unicidade", "cumulatividade", "indivisibilidade"], "B", "Respeito aos fundos."),
    ce("Pelo princípio da cumulatividade, o arquivo é uma formação progressiva e natural, que se acumula ao longo do tempo.", "Certo", "A acumulação é contínua."),
    q("O princípio que impede o fracionamento ou a mutilação do fundo de arquivo é o da:", ["cumulatividade", "indivisibilidade (integridade)", "unicidade", "proveniência", "organicidade"], "B", "Indivisibilidade ou integridade."),
    ce("A organicidade refere-se à relação natural entre os documentos de um arquivo e a estrutura e as funções da entidade que os produziu.", "Certo", "A relação orgânica é a base da classificação arquivística."),
  ]);

  A("conceitos-fundamentais/classificacao-dos-arquivos-e-dos-documentos", [
    aprofundar([
      "### Arquivos quanto à entidade mantenedora",
      "- **Públicos** (federais, estaduais, do DF e municipais);",
      "- **Institucionais** (de entidades de caráter público ou instituições educacionais e religiosas);",
      "- **Comerciais** (empresas);",
      "- **Familiares**;",
      "- **Pessoais**.",
      "",
      "### Arquivos quanto ao estágio de evolução (três idades)",
      "**Corrente**, **intermediário** e **permanente**.",
      "",
      "### Arquivos quanto à extensão da atuação",
      "- **Setoriais**: ligados a um setor ou unidade;",
      "- **Gerais ou centrais**: concentram os documentos de vários setores.",
      "",
      "### Arquivos quanto à natureza dos documentos",
      "- **Especiais**: suportes não convencionais (fotos, discos, filmes);",
      "- **Especializados**: um **tipo de assunto** (médico, de engenharia).",
      "",
      "### Documentos quanto ao **gênero**",
      "**Textual** (papel escrito), **iconográfico** (imagens: fotografias, gravuras), **cartográfico** (mapas, plantas), **filmográfico** (filmes), **sonoro** (discos, fitas), **micrográfico** (microformas), **informático** (digital).",
      "",
      "### Documentos quanto à **espécie** e ao **tipo**",
      "- **Espécie**: a **configuração** que o documento adquire pela **disposição das informações** (ata, certidão, ofício, memorando, relatório).",
      "- **Tipo**: **espécie + atividade** que o gerou (**ata de reunião**, **relatório de gestão**, **ofício de encaminhamento**).",
      "",
      "### Documentos quanto à **natureza do assunto (informação)**",
      "**Ostensivos** (acesso livre) e **sigilosos** (acesso restrito).",
    ]),
    atencao("**Espécie** é a forma (ata, ofício); **tipo** é espécie **+** função (ata **de reunião**). **Gênero** é o **suporte e a forma de registro** (textual, iconográfico…)."),
    q("Os documentos cuja informação está registrada em imagens, como fotografias e gravuras, pertencem ao gênero:", ["textual", "cartográfico", "iconográfico", "sonoro", "informático"], "C", "Gênero iconográfico."),
    ce("O tipo documental resulta da junção da espécie documental com a atividade que gerou o documento.", "Certo", "Por exemplo, relatório de auditoria."),
    q("Os arquivos que concentram documentos de vários setores de uma entidade são classificados, quanto à extensão, como:", ["setoriais", "gerais ou centrais", "especiais", "pessoais", "especializados"], "B", "Setoriais são os de cada unidade."),
    q("Os arquivos que reúnem documentos de suportes não convencionais, como discos e filmes, são chamados de:", ["especiais", "especializados", "correntes", "institucionais", "gerais"], "A", "Arquivo especial refere-se ao suporte."),
  ]);

  /* ================= GESTÃO DE DOCUMENTOS ================= */

  A("gestao-de-documentos/teoria-das-tres-idades", [
    aprofundar([
      "### Ciclo vital dos documentos",
      "Os documentos passam por **três idades**, conforme sua frequência de uso e seu valor (Lei 8.159, art. 8º):",
      "- **Corrente (1ª idade)**: documentos **em curso** ou que, mesmo sem movimentação, são objeto de **consultas frequentes**. Ficam no **setor produtor**; **valor primário**.",
      "- **Intermediário (2ª idade)**: documentos que **não são mais de uso corrente**, mas aguardam **eliminação ou recolhimento** para guarda permanente, por razões **administrativas, legais ou fiscais**. Ficam em depósito ou no **arquivo central**.",
      "- **Permanente (3ª idade)**: documentos de **valor histórico, probatório e informativo** que devem ser **definitivamente preservados**.",
      "",
      "### Valores",
      "- **Valor primário**: **administrativo, legal, fiscal, jurídico**; relacionado à finalidade original do documento. Predomina nas **fases corrente e intermediária**.",
      "- **Valor secundário**: **probatório e informativo**; interesse da **pesquisa** e da memória. Define a **guarda permanente**.",
      "",
      "### Teoria",
      "O documento percorre essas fases em **ciclo vital** (Schellenberg e a teoria americana do *life cycle*). A **teoria das três idades** é a base da **gestão de documentos** e da **tabela de temporalidade**.",
      "",
      "### Recolhimento e transferência",
      "- **Transferência**: passagem do **corrente** para o **intermediário**.",
      "- **Recolhimento**: passagem do **intermediário** para o **permanente**.",
      "- **Eliminação**: destruição de documentos que **não têm valor permanente**, mediante **autorização** (Lei 8.159, art. 9º).",
    ]),
    atencao("**Transferência** = corrente → intermediário. **Recolhimento** = intermediário → **permanente**. Documentos permanentes são **inalienáveis e imprescritíveis** (Lei 8.159, art. 10)."),
    q("Os documentos que, não sendo de uso corrente, aguardam a eliminação ou o recolhimento para guarda permanente, são:", ["correntes", "intermediários", "permanentes", "históricos", "especiais"], "B", "Art. 8º, § 2º, da Lei 8.159."),
    ce("O valor primário dos documentos relaciona-se à finalidade original para a qual foram produzidos, como o valor administrativo, legal e fiscal.", "Certo", "O valor secundário é o probatório e informativo."),
    q("A passagem dos documentos do arquivo intermediário para o arquivo permanente chama-se:", ["transferência", "recolhimento", "eliminação", "avaliação", "arquivamento"], "B", "A transferência é do corrente para o intermediário."),
    ce("Segundo a Lei 8.159/1991, os documentos de valor permanente são inalienáveis e imprescritíveis.", "Certo", "Art. 10."),
  ]);

  A("gestao-de-documentos/plano-de-classificacao", [
    aprofundar([
      "### O que é",
      "Esquema de **distribuição de documentos em classes**, de acordo com métodos de **arquivamento específicos**, elaborado a partir do **estudo das estruturas e funções** de uma instituição e da **análise do arquivo** por ela produzido. Resulta em um **código** (por exemplo, decimal ou duplex).",
      "",
      "### Classificação × arquivamento",
      "- **Classificação**: **organização intelectual**, que agrupa por funções e atividades (definindo o **código**).",
      "- **Arquivamento**: **guarda física** na ordem estabelecida pelo método.",
      "",
      "### Método de classificação",
      "- **Funcional**: baseia-se nas **funções e atividades** da entidade (recomendado em arquivística).",
      "- **Estrutural**: baseado no **organograma**; sofre com reorganizações.",
      "- **Por assunto**: por temas; pode gerar **dispersão**.",
      "Níveis: **função → subfunção → atividade → tarefa → tipo documental**.",
      "",
      "### Código de classificação",
      "O **código** (por exemplo, **decimal**: 000 a 900, subdivididos) identifica a classe e **orienta** o arquivamento e a recuperação. É a base do **registro** e da **autuação** de processos.",
      "",
      "### Características do bom plano",
      "**Abrangente** (cobre todas as atividades), **hierárquico** (do geral ao específico), **lógico**, **flexível** e **atualizável**. Deve ser **elaborado antes** da tabela de temporalidade, já que ela se vincula às classes.",
    ]),
    atencao("A classificação arquivística é **funcional** (funções e atividades), e não pelo **organograma**: a estrutura muda, as funções permanecem. É por isso que o **método funcional** é o preferido."),
    q("A organização intelectual dos documentos, com base nas funções e atividades da entidade, que gera um código de classificação, denomina-se:", ["arquivamento", "classificação", "avaliação", "descrição", "eliminação"], "B", "Classificação."),
    ce("O método funcional de classificação baseia-se nas funções e atividades desempenhadas pela entidade produtora, e não apenas em seu organograma.", "Certo", "É o método mais estável."),
    q("O plano de classificação deve ser elaborado:", ["depois da eliminação dos documentos", "antes da tabela de temporalidade, pois ela se vincula às classes do plano", "apenas por assunto, sem estudo das funções", "sem análise do arquivo produzido", "somente para documentos digitais"], "B", "A tabela usa as classes do plano."),
  ]);

  A("gestao-de-documentos/avaliacao-e-tabela-de-temporalidade", [
    aprofundar([
      "### Avaliação",
      "**Análise** dos documentos para definir **prazos de guarda** e **destinação final** (**eliminação** ou **guarda permanente**), com base em seus **valores primário e secundário**. É conduzida por **Comissão Permanente de Avaliação de Documentos (CPAD)**, **multidisciplinar** (por exemplo, arquivista, historiador, jurista, gestor da área).",
      "",
      "### Tabela de temporalidade e destinação (TTD)",
      "Instrumento de avaliação que **registra**, para cada **classe** do plano:",
      "- **prazo de guarda** na **fase corrente**;",
      "- **prazo de guarda** na **fase intermediária**;",
      "- **destinação final**: **eliminação** ou **guarda permanente**;",
      "- **observações** (por exemplo, a existência de outros suportes).",
      "",
      "### Eliminação",
      "- Só **após a avaliação** e com **autorização da instituição arquivística pública**, na sua esfera de competência (Lei 8.159, art. 9º).",
      "- **Listagem de eliminação**, **edital de ciência** (para que interessados possam se manifestar) e **termo de eliminação**.",
      "- Eliminação de documentos **com valor permanente** é **proibida**.",
      "",
      "### Documentos essenciais e vitais",
      "**Documentos vitais** (essenciais) são os imprescindíveis à **continuidade** da instituição em caso de sinistro; recebem **proteção especial**.",
      "",
      "### Prazos",
      "A tabela define os prazos **de acordo com a legislação** (fiscal, trabalhista, previdenciária, civil) e o **uso administrativo**. **Prescrição** e **vigência** orientam o prazo.",
    ]),
    atencao("**Quem avalia:** a **CPAD**. **Quem autoriza** a eliminação: a **instituição arquivística pública**. A banca troca os dois papéis."),
    q("O instrumento que define os prazos de guarda dos documentos nas fases corrente e intermediária e sua destinação final denomina-se:", ["plano de classificação", "tabela de temporalidade e destinação", "índice onomástico", "inventário", "guia de fundos"], "B", "Tabela de temporalidade e destinação."),
    ce("A eliminação de documentos produzidos por instituições públicas somente poderá ocorrer mediante autorização da instituição arquivística pública, na sua esfera de competência.", "Certo", "Lei 8.159, art. 9º."),
    q("A comissão responsável por orientar e realizar a avaliação dos documentos de um órgão é a:", ["Comissão de Ética", "Comissão Permanente de Avaliação de Documentos (CPAD)", "Comissão de Licitação", "Comissão Disciplinar", "Comissão Parlamentar"], "B", "CPAD multidisciplinar."),
    q("Os documentos que, por sua importância, são essenciais à continuidade das atividades da instituição em caso de sinistro, são chamados de:", ["permanentes", "vitais (essenciais)", "ostensivos", "correntes", "intermediários"], "B", "Recebem proteção especial."),
  ]);

  A("gestao-de-documentos/protocolo-recebimento-registro-e-tramitacao", [
    aprofundar([
      "### Protocolo",
      "Setor ou serviço responsável pelo **recebimento, registro, distribuição, controle da tramitação e expedição** dos documentos. Na Administração Pública federal, a **Portaria Interministerial 1.677/2015** estabelece procedimentos gerais.",
      "",
      "### Fluxo",
      "1. **Recebimento** e **conferência** do documento;",
      "2. **Classificação** (pelo código do plano);",
      "3. **Registro** (identificação com número e dados em sistema ou livro);",
      "4. **Distribuição** (encaminhamento ao setor competente);",
      "5. **Tramitação**, com controle da movimentação;",
      "6. **Expedição** (envio de documentos à destinação externa);",
      "7. **Arquivamento**.",
      "",
      "### Documento × processo",
      "- **Documento**: registro isolado de informação.",
      "- **Processo**: conjunto de documentos **autuados** (reunidos em capa, numerados e com folhas rubricadas), que formam um procedimento administrativo. A **autuação** é o ato de formar o processo.",
      "",
      "### Operações com processos",
      "- **Juntada**: união de um documento ou processo a outro, **por anexação** (definitiva) ou **por apensação** (provisória).",
      "- **Apensação**: união **provisória** de processos, que **mantêm a individualidade**.",
      "- **Anexação**: união **definitiva** de documentos ou de processos, perdendo a identidade do anexado.",
      "- **Desentranhamento**: **retirada** de peça dos autos.",
      "- **Desmembramento**: **separação** de parte do processo.",
      "- **Numeração**: folhas numeradas e rubricadas em sequência.",
      "- **Desarquivamento** (reabertura) e **reativação**.",
      "",
      "### Documento digital",
      "No ambiente eletrônico, o protocolo é **integrado ao sistema** (por exemplo, o **SEI** no Executivo federal). Os **metadados** (data, origem, destino, assunto) são registrados automaticamente, e a **tramitação** deixa **trilha de auditoria**.",
    ]),
    atencao("**Apensação** = união **provisória** (os processos mantêm identidade). **Anexação** = **definitiva**. Na dúvida, associe \"A-pensa\" à ideia de algo que pode ser **desapensado**."),
    q("A união provisória de processos, em que cada um mantém sua individualidade, denomina-se:", ["anexação", "apensação", "desentranhamento", "desmembramento", "juntada por incorporação"], "B", "Apensação."),
    ce("O desentranhamento consiste na retirada de uma peça dos autos de um processo.", "Certo", "Operação usual de protocolo."),
    q("As atividades típicas do protocolo incluem:", ["recebimento, registro, distribuição, controle de tramitação e expedição", "apenas a eliminação de documentos", "somente a classificação de livros", "a restauração de documentos", "a digitalização, exclusivamente"], "A", "Funções básicas do protocolo."),
    ce("A autuação é o ato de reunir documentos em um processo, com capa e numeração.", "Certo", "Forma o processo administrativo."),
  ]);

  /* ================= ARQUIVAMENTO E PRESERVAÇÃO ================= */

  A("arquivamento-e-preservacao/metodos-de-arquivamento", [
    aprofundar([
      "### Métodos básicos",
      "- **Alfabético**: ordem alfabética de **nomes** (pessoa física ou jurídica); **direto**.",
      "- **Geográfico**: por **local** (país, estado, cidade); **direto**.",
      "- **Ideográfico (por assunto)**: por **assunto**; **direto** (pode ser **indireto** quando usa código com índice).",
      "- **Numérico**: por **número** atribuído; **indireto** (exige **índice alfabético** para localizar). Variantes: **simples**, **cronológico** e **dígito-terminal**.",
      "- **Cronológico**: por **data**.",
      "",
      "### Direto × indireto",
      "- **Direto**: a localização se faz **diretamente**, sem consulta a índice (alfabético, geográfico, por assunto simples).",
      "- **Indireto**: é preciso **consultar um índice** para saber o número ou código (numérico).",
      "",
      "### Método numérico",
      "- **Simples**: ordem **crescente** dos números de registro.",
      "- **Cronológico**: número + **data**; adequado para correspondência.",
      "- **Dígito-terminal**: o número é lido em **três grupos de dois dígitos, da direita para a esquerda**. Ex.: **12-34-56** → o primeiro grupo de arquivamento é o **56** (terminal), depois **34** e **12**. **Distribui** os documentos por igual, evitando concentrações.",
      "",
      "### Método misto",
      "**Alfanumérico**: combina letras e números (por exemplo, assunto com código numérico).",
      "",
      "### Escolha do método",
      "Depende do **tipo de documento**, da **forma de busca** e do **volume**. Documentos de **pessoas** → alfabético; de **processos** → numérico; **projetos** → por assunto.",
    ]),
    {
      tipo: "tabela",
      titulo: "Direto × indireto",
      cabecalho: ["Método", "Natureza", "Exige índice?"],
      linhas: [
        ["Alfabético", "Direto", "Não"],
        ["Geográfico", "Direto", "Não"],
        ["Ideográfico (assunto)", "Direto (ou indireto com código)", "Em geral, não"],
        ["Numérico (simples, cronológico, dígito-terminal)", "Indireto", "Sim (alfabético)"],
      ],
    },
    atencao("No **dígito-terminal**, o número 12-34-56 é lido **da direita para a esquerda**: o primeiro agrupamento a ser consultado é o **56**. O objetivo é **distribuir** os documentos uniformemente."),
    q("O método de arquivamento que exige a consulta a um índice alfabético para a localização do documento é o:", ["alfabético", "geográfico", "numérico", "por assunto simples", "cronológico direto"], "C", "O numérico é indireto."),
    ce("O método alfabético é um método direto, pois a localização do documento dispensa a consulta a índice.", "Certo", "Ordenação por nome."),
    q("No método dígito-terminal, o número do documento é lido em grupos de dois dígitos, da:", ["esquerda para a direita", "direita para a esquerda", "esquerda, ignorando o último grupo", "maior para o menor", "data mais antiga para a mais recente"], "B", "O grupo terminal é o da direita."),
    q("O método de arquivamento mais indicado para a guarda de prontuários de pessoas, ordenados pelo nome, é o:", ["numérico simples", "alfabético", "geográfico", "dígito-terminal", "por assunto"], "B", "O critério é o nome."),
  ]);

  A("arquivamento-e-preservacao/conservacao-e-preservacao-de-documentos", [
    aprofundar([
      "### Conceitos",
      "- **Preservação**: conjunto de **medidas e estratégias** administrativas, políticas e operacionais que contribuem para a **integridade** dos materiais.",
      "- **Conservação**: **medidas preventivas e de manutenção** para reduzir a deterioração.",
      "- **Restauração**: **intervenção** para **recompor** o material já danificado.",
      "- **Higienização**: limpeza para retirar sujidades.",
      "- **Acondicionamento**: embalagem e guarda adequadas.",
      "",
      "### Agentes de deterioração",
      "- **Físicos**: **luz** (visível e ultravioleta), **temperatura** e **umidade relativa** (variações bruscas).",
      "- **Químicos**: **acidez** do papel, **poluentes** atmosféricos e oxidação das tintas.",
      "- **Biológicos**: **fungos** (umidade), **insetos** (traças, cupins, brocas), **roedores**.",
      "- **Mecânicos/humanos**: **manuseio** inadequado, **fitas adesivas**, grampos e clipes, uso de **tinta** inadequada.",
      "- **Desastres**: inundações, incêndios.",
      "",
      "### Condições ambientais (valores de referência)",
      "Para papel, são usuais **temperatura em torno de 20 °C** e **umidade relativa entre 45% e 60%**, com **pouca variação**, **pouca luz** (sobretudo ultravioleta) e boa **ventilação**. **Conferir** os parâmetros nas normas do Arquivo Nacional e do CONARQ.",
      "",
      "### Preservação digital",
      "- Estratégias: **migração**, **emulação**, **refrescamento** (cópia para novo suporte), **encapsulamento**.",
      "- Risco: **obsolescência** de formatos, programas e equipamentos.",
      "- **Cópias de segurança (backup)** em locais diferentes.",
      "- Manter **autenticidade e integridade** (assinatura digital, metadados e **fixidez**).",
    ]),
    atencao("**Conservação** é **preventiva** (evitar o dano). **Restauração** é **corretiva** (consertar o dano). **Higienização** é só limpeza. Em digital, **migração** transfere para novos formatos; **emulação** recria o ambiente antigo."),
    q("A intervenção realizada para recompor um documento já danificado denomina-se:", ["conservação preventiva", "restauração", "higienização", "acondicionamento", "descrição"], "B", "Restauração."),
    ce("A alta umidade relativa favorece a proliferação de fungos nos documentos em papel.", "Certo", "É um agente biológico de deterioração."),
    q("A estratégia de preservação digital que consiste em converter o documento para um novo formato ou plataforma, mantendo-o acessível, é a:", ["emulação", "migração", "digitalização", "descarte", "eliminação"], "B", "A emulação recria o ambiente original."),
    ce("O uso de grampos metálicos, fitas adesivas e clipes é recomendável para a boa conservação de documentos em papel.", "Errado", "Podem oxidar e danificar o papel."),
  ]);

  A("arquivamento-e-preservacao/microfilmagem-e-digitalizacao", [
    aprofundar([
      "### Microfilmagem",
      "Reprodução fotográfica dos documentos em **filme** (rolo, microficha). Regulada pela **Lei 5.433/1968** e pelo **Decreto 1.799/1996**. O microfilme **autenticado** tem o **mesmo valor probatório** do documento original. Após a microfilmagem **autorizada**, os originais **podem ser eliminados**, desde que não tenham valor permanente. **Documentos de valor permanente** não são eliminados após a microfilmagem.",
      "",
      "### Digitalização",
      "Conversão de documento em suporte convencional para o **formato digital**, por **escaneamento**, com **metadados** e controle de qualidade.",
      "- **Lei 12.682/2012**: elaboração e arquivamento de documentos em **meio eletromagnético**.",
      "- **Decreto 10.278/2020**: regulamenta a **digitalização de documentos públicos e privados** para que a reprodução digital tenha **o mesmo valor legal do original**, mediante **requisitos técnicos** (**integridade e confiabilidade**, **assinatura digital com certificado ICP-Brasil**, **metadados mínimos**, entre outros).",
      "- A **eliminação** do original após digitalização depende da **legislação específica** e da **tabela de temporalidade**; documento de **valor permanente** deve ser preservado.",
      "",
      "### Documento nato digital × digitalizado",
      "- **Nato digital**: produzido **originalmente** em meio eletrônico.",
      "- **Digitalizado**: **representante digital** de um original físico.",
      "",
      "### Cuidados",
      "**Qualidade** da imagem, **formato** adequado (por exemplo, PDF/A para preservação), **integridade** (assinatura e *hash*), **backup** e **acesso controlado**.",
    ]),
    atencao("Digitalizar não autoriza, por si só, **eliminar** o original. É preciso respeitar a **tabela de temporalidade** e a **legislação**. Se o documento tem **valor permanente**, o original é preservado. Confira o Decreto 10.278/2020 e as resoluções do CONARQ vigentes.", "Conferir"),
    q("O documento microfilmado, quando autenticado nos termos da lei, tem:", ["valor apenas informativo", "o mesmo valor probatório do documento original", "valor menor que o do original", "nenhum valor legal", "validade de cinco anos"], "B", "Lei 5.433/1968 e Decreto 1.799/1996."),
    ce("A digitalização de documentos é regulamentada pelo Decreto 10.278/2020, que estabelece requisitos técnicos para que a cópia digital tenha o mesmo valor legal do documento original.", "Certo", "Exige integridade, confiabilidade, assinatura com certificado ICP-Brasil e metadados mínimos."),
    q("O documento produzido originalmente em meio eletrônico é denominado:", ["digitalizado", "nato digital", "microfilmado", "iconográfico", "intermediário"], "B", "Nato digital."),
    ce("Após a digitalização, é sempre permitido eliminar o documento original, independentemente de seu valor ou da tabela de temporalidade.", "Errado", "Há necessidade de observar legislação, tabela de temporalidade e o valor permanente do documento."),
  ]);

  A("arquivamento-e-preservacao/documento-arquivistico-digital", [
    aprofundar([
      "### Documento arquivístico digital",
      "Documento arquivístico **codificado em dígitos binários**, produzido ou recebido no curso de uma atividade, que mantém a **relação orgânica** com o conjunto. Pode ser **nato digital** ou **digitalizado**.",
      "",
      "### Características e requisitos",
      "- **Autenticidade**: é o que diz ser; produzido por quem diz.",
      "- **Confiabilidade**: capacidade de sustentar os fatos que atesta.",
      "- **Integridade** (completude e inalterabilidade).",
      "- **Fixidez**: forma e conteúdo **estáveis**.",
      "- **Organicidade** e **identidade**.",
      "- **Acessibilidade**: continua **legível** ao longo do tempo.",
      "- **Metadados**: dados que **descrevem** o documento (contexto, estrutura e gestão) e o acompanham.",
      "",
      "### SIGAD e e-ARQ Brasil",
      "- **SIGAD**: **Sistema Informatizado de Gestão Arquivística de Documentos**, que aplica a gestão (classificação, tramitação, temporalidade, destinação) a documentos **digitais e não digitais**.",
      "- **e-ARQ Brasil**: **modelo de requisitos** do CONARQ para SIGAD.",
      "- **GED** (Gerenciamento Eletrônico de Documentos) **não** é, por si só, um SIGAD, pois **não** garante a gestão arquivística (por exemplo, classificação e temporalidade).",
      "",
      "### Repositório arquivístico digital confiável (RDC-Arq)",
      "Infraestrutura para **armazenar, preservar e dar acesso** a documentos digitais **de longo prazo**, mantendo **autenticidade e organicidade**, em conformidade com o modelo **OAIS**. O **SIGAD** gerencia as fases **corrente e intermediária**; o **RDC-Arq**, a **guarda permanente**.",
      "",
      "### Assinatura digital e ICP-Brasil",
      "Assinatura digital com **certificado ICP-Brasil** garante **autenticidade, integridade e não repúdio**, com presunção de veracidade (MP 2.200-2/2001).",
    ]),
    atencao("**SIGAD** (gestão arquivística, corrente e intermediária) é diferente de **RDC-Arq** (preservação de longo prazo). E **GED** ≠ **SIGAD**: GED gerencia documentos, mas não necessariamente aplica a gestão arquivística."),
    q("O sistema informatizado que realiza a gestão arquivística de documentos, incluindo classificação e tabela de temporalidade, denomina-se:", ["SIGAD", "GED, apenas", "OAIS", "ICP-Brasil", "CPAD"], "A", "SIGAD."),
    ce("O e-ARQ Brasil é um modelo de requisitos para sistemas informatizados de gestão arquivística de documentos.", "Certo", "Elaborado pelo CONARQ."),
    q("O repositório arquivístico digital confiável (RDC-Arq) destina-se principalmente a:", ["manter documentos correntes em tramitação", "preservar documentos digitais de longo prazo, garantindo autenticidade e organicidade", "armazenar apenas correspondência", "substituir o plano de classificação", "eliminar documentos"], "B", "É a infraestrutura de guarda permanente."),
    ce("Um sistema de GED, por si só, é suficiente para cumprir os requisitos de gestão arquivística, equivalendo a um SIGAD.", "Errado", "O GED não garante, necessariamente, classificação e temporalidade."),
  ]);

  /* ================= LEGISLAÇÃO ARQUIVÍSTICA ================= */

  A("legislacao-arquivistica/lei-8-159-1991-politica-nacional-de-arquivos", [
    aprofundar([
      "### Pontos centrais",
      "- **Art. 1º**: é **dever do Poder Público** a **gestão documental** e a **proteção especial** a documentos de arquivos, como **instrumento de apoio à administração**, à **cultura**, ao **desenvolvimento científico** e como **elementos de prova e informação**.",
      "- **Art. 2º**: conceito de **arquivo**.",
      "- **Art. 3º**: conceito de **gestão de documentos**.",
      "- **Art. 4º**: todos têm **direito de receber** dos órgãos públicos informações de seu interesse particular ou coletivo, **ressalvadas** as **sigilosas** (hoje regulado também pela **Lei 12.527/2011**, a LAI).",
      "- **Art. 7º**: os **arquivos públicos** são os conjuntos de documentos produzidos e recebidos, **no exercício de suas atividades**, por órgãos públicos de âmbito **federal, estadual, do DF e municipal**, em decorrência de suas funções administrativas, legislativas e judiciárias. São também públicos os conjuntos de documentos **produzidos e recebidos por instituições de caráter público**, por entidades privadas encarregadas da gestão de serviços públicos no exercício de suas atividades.",
      "- **Art. 8º**: as **três idades** (corrente, intermediário e permanente).",
      "- **Art. 9º**: a **eliminação** só com **autorização** da instituição arquivística pública.",
      "- **Art. 10**: os documentos de valor **permanente** são **inalienáveis e imprescritíveis**.",
      "- **Art. 7º, §§ 1º e 2º**: também são públicos os documentos de **instituições de caráter público** e de **entidades privadas que gerem serviços públicos**; cessadas as atividades, a documentação é **recolhida à instituição arquivística pública** ou transferida à sucessora.",
      "- **Art. 11**: **arquivos privados** são os conjuntos de documentos produzidos ou recebidos por **pessoas físicas ou jurídicas** em decorrência de suas atividades.",
      "- **Art. 12**: os arquivos privados **podem ser identificados pelo Poder Público como de interesse público e social**, desde que sejam conjuntos de **fontes relevantes para a história e o desenvolvimento científico nacional**.",
      "- **Art. 13**: os arquivos privados identificados **não podem ser alienados com dispersão ou perda da unidade documental**, nem **transferidos para o exterior**. Na alienação, o **Poder Público tem preferência** na aquisição.",
      "- **Art. 14**: o **acesso** aos documentos de arquivos privados identificados depende de **autorização do proprietário ou possuidor**.",
      "- **Art. 15**: os arquivos privados podem ser **depositados a título revogável** ou **doados** a instituições arquivísticas públicas.",
      "- **Arts. 17 a 21**: **instituições arquivísticas**, por Poder e esfera. Ao **Arquivo Nacional** compete a gestão e o recolhimento dos documentos do **Poder Executivo Federal**; há arquivos do Legislativo, do Judiciário, dos Estados, do DF e dos Municípios.",
      "- **Art. 26**: cria o **CONARQ** (Conselho Nacional de Arquivos), órgão colegiado **vinculado ao Arquivo Nacional** e presidido por seu Diretor-Geral, que define a **política nacional de arquivos** e é o **órgão central do SINAR** (Sistema Nacional de Arquivos).",
      "",
      "### Relação com a LAI (Lei 12.527/2011)",
      "A **Lei 12.527/2011** (LAI) **revogou os arts. 22 a 24** da Lei 8.159, que tratavam do acesso e do sigilo. Hoje, a LAI regula o **acesso à informação**: a regra é a **publicidade**; o sigilo é a exceção, e as informações classificadas seguem os graus **ultrassecreto (25 anos)**, **secreto (15 anos)** e **reservado (5 anos)**, **prazos máximos de restrição** (**conferir** o texto da lei).",
    ]),
    {
      tipo: "tabela",
      titulo: "Artigos da Lei 8.159 mais cobrados",
      cabecalho: ["Artigo", "Assunto"],
      linhas: [
        ["2º", "Conceito de arquivo"],
        ["3º", "Gestão de documentos"],
        ["8º", "Documentos correntes, intermediários e permanentes"],
        ["9º", "Eliminação só com autorização da instituição arquivística pública"],
        ["10", "Documentos permanentes: inalienáveis e imprescritíveis"],
        ["11 a 15", "Arquivos privados: interesse público e social, unidade documental, preferência do Poder Público"],
        ["26", "CONARQ e SINAR"],
      ],
    },
    atencao("O **CONARQ** é **vinculado ao Arquivo Nacional** e define a política nacional; o **SINAR** é o sistema de que o CONARQ é o **órgão central**. Documentos **permanentes** são **inalienáveis e imprescritíveis**.", "Memorize"),
    q("Segundo a Lei 8.159/1991, os documentos de valor permanente são:", ["alienáveis e prescritíveis", "inalienáveis e imprescritíveis", "alienáveis, com autorização", "descartáveis após 20 anos", "sujeitos à eliminação periódica"], "B", "Art. 10."),
    ce("O Conselho Nacional de Arquivos (CONARQ) é órgão colegiado vinculado ao Arquivo Nacional, que define a política nacional de arquivos e é o órgão central do Sistema Nacional de Arquivos (SINAR).", "Certo", "Art. 26."),
    q("Segundo a Lei 8.159/1991, os arquivos privados identificados como de interesse público e social:", ["podem ser transferidos livremente para o exterior", "não podem ser alienados com dispersão ou perda da unidade documental, nem transferidos para o exterior", "passam automaticamente ao domínio da União", "perdem a proteção após dez anos", "deixam de pertencer ao proprietário"], "B", "Art. 13. O proprietário mantém o domínio, e o Poder Público tem preferência na alienação."),
    ce("Os arquivos privados podem ser identificados pelo Poder Público como de interesse público e social, desde que sejam conjuntos de fontes relevantes para a história e o desenvolvimento científico nacional.", "Certo", "Art. 12."),
    q("A eliminação de documentos produzidos por instituições públicas somente será realizada:", ["por decisão do chefe do setor", "mediante autorização da instituição arquivística pública, na sua esfera de competência", "após cinco anos, automaticamente", "por votação dos servidores", "sem qualquer autorização"], "B", "Art. 9º."),
  ]);
})();

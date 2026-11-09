/* Aprofundamento · Bloco C: Legislação do Paraná (Constituição Estadual e Estatuto dos Servidores).
   Acrescenta texto e questões DEPOIS do que já existe em textos/legislacao-local.js.

   IMPORTANTE: os artigos da Constituição do Paraná e do Estatuto NÃO estão aqui (o texto integral não pôde ser lido em fonte oficial legível).
   Este arquivo aprofunda o MODELO que a lei estadual segue (CF arts. 18, 23 a 28, 34, 37 a 41, 75, 125; Lei 1.079/1950) e marca o que conferir.
   Fatos locais confirmados em fonte aberta:
   - Constituição do Estado do Paraná: promulgada em 5 de outubro de 1989, com várias emendas (conferir o texto consolidado).
   - Estatuto dos Funcionários Civis do Poder Executivo do Estado: Lei 6.174, de 16 de novembro de 1970 (algumas fontes citam o dia 17).
   - Assembleia Legislativa do Paraná: 54 deputados (regra do art. 27 da CF: 36 + 18, pois o Estado tem 30 deputados federais).
   Questões aqui só cobram o modelo constitucional. */
(() => {
  const Q = "Questão autoral de fixação";
  const C = (caminho, blocos) => ESTUDO.assunto(`bloco-c/parana/constituicao-do-estado-do-parana/${caminho}`, { livros: LIVROS_CE, blocos });
  const E = (caminho, blocos) => ESTUDO.assunto(`bloco-c/parana/estatuto-dos-servidores-do-parana/${caminho}`, { livros: LIVROS_EST, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando (modelo constitucional)", texto });
  const atencao = (texto, titulo = "Pegadinha de prova") => ({ tipo: "atencao", titulo, texto });
  const conferir = (texto) => ({ tipo: "atencao", titulo: "Na lei do Paraná, confira", texto });
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

  const LIVROS_CE = [
    { titulo: "Constituição Federal, arts. 18, 23 a 28, 34 e 125", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "O modelo da Constituição Estadual." },
    { titulo: "Constituição do Estado do Paraná · texto consolidado", url: "https://www.assembleia.pr.leg.br", nota: "Busque o texto atualizado pelas emendas, na Assembleia Legislativa do Paraná." },
    { titulo: "Legislação do Estado do Paraná", url: "https://www.legislacao.pr.gov.br", nota: "Portal oficial de leis estaduais." },
    { titulo: "Lei 1.079/1950 · Crimes de responsabilidade", url: "https://www.planalto.gov.br/ccivil_03/leis/l1079.htm", nota: "Rito do julgamento do Governador, nos arts. 74 a 79." },
  ];
  const LIVROS_EST = [
    { titulo: "Constituição Federal, arts. 37 a 41", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    { titulo: "Lei 8.112/1990 (comparação)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm", nota: "Modelo e contraste para o estatuto estadual." },
    { titulo: "Legislação do Estado do Paraná", url: "https://www.legislacao.pr.gov.br", nota: "Estatuto dos Funcionários Civis (Lei 6.174/1970), com alterações." },
    { titulo: "Portal da Administração · Governo do Paraná", url: "https://www.administracao.pr.gov.br", nota: "Normas e orientações sobre servidores estaduais." },
  ];

  /* ================= CONSTITUIÇÃO ESTADUAL ================= */

  C("principios-fundamentais-e-organizacao-do-estado", [
    aprofundar([
      "### Poder constituinte decorrente (CF, art. 25)",
      "Os **Estados** organizam-se e regem-se pelas **Constituições e leis que adotarem**, **observados os princípios da Constituição Federal**. O **ADCT (art. 11)** deu às Assembleias Legislativas **um ano** para elaborar as Constituições estaduais após a de 1988. A **Constituição do Paraná** é de **5 de outubro de 1989**.",
      "",
      "### Limites ao poder estadual",
      "- **Princípios constitucionais sensíveis** (art. 34, VII): **forma republicana, sistema representativo e regime democrático**; **direitos da pessoa humana**; **autonomia municipal**; **prestação de contas** da administração pública; **aplicação mínima** de receita em **ensino** e **saúde**. Sua violação pode ensejar **intervenção federal**.",
      "- **Princípios estabelecidos** (normas de organização que a CF impõe aos Estados) e **extensíveis** (como o processo legislativo e as regras de CPI).",
      "- **Simetria**: o modelo federal serve de parâmetro para a organização estadual, como no processo legislativo e no regime dos servidores.",
      "",
      "### Controle de constitucionalidade estadual (art. 125, § 2º)",
      "Cabe aos Estados a **representação de inconstitucionalidade** de leis ou atos normativos **estaduais ou municipais** em face da **Constituição Estadual**, **vedada a atribuição da legitimação para agir a um único órgão**. O julgamento cabe ao **Tribunal de Justiça**.",
      "",
      "### Ente federativo e símbolos",
      "O Estado é **ente autônomo**, com **capacidade de auto-organização, autogoverno, autoadministração e autolegislação**. **Capital**: **Curitiba**. A **divisão** em **Municípios** e a **criação de novos** dependem de **lei estadual** e das regras da CF (art. 18, § 4º).",
    ]),
    conferir("O **preâmbulo**, os **princípios fundamentais** e o **título da organização do Estado** no texto consolidado da **Constituição do Paraná**, com as **emendas**."),
    q("A Constituição do Estado do Paraná foi promulgada em:", ["1988", "1989", "1991", "1995", "2000"], "B", "5 de outubro de 1989, após o prazo de um ano do ADCT (art. 11)."),
    ce("Os Estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios da Constituição Federal.", "Certo", "CF, art. 25, caput."),
    q("A violação dos chamados princípios constitucionais sensíveis pode ensejar:", ["intervenção da União no Estado", "estado de defesa", "impeachment do Presidente", "dissolução da Assembleia", "perda da capital"], "A", "CF, art. 34, VII."),
    ce("A Constituição Estadual pode atribuir a legitimação para propor a representação de inconstitucionalidade a um único órgão.", "Errado", "CF, art. 125, § 2º: é vedada a atribuição da legitimação a um único órgão."),
  ]);

  C("competencias-do-estado", [
    aprofundar([
      "### Competência residual (CF, art. 25, § 1º)",
      "São **reservadas aos Estados** as competências que **não lhes sejam vedadas** pela Constituição. É a **competência remanescente (residual)**.",
      "",
      "### Gás canalizado (art. 25, § 2º)",
      "Cabe aos Estados **explorar diretamente, ou mediante concessão**, os serviços locais de **gás canalizado**, na forma da lei, **vedada a edição de medida provisória** para a sua regulamentação.",
      "",
      "### Regiões metropolitanas (art. 25, § 3º)",
      "Os Estados podem, **mediante lei complementar**, instituir **regiões metropolitanas, aglomerações urbanas e microrregiões**, constituídas por **agrupamentos de Municípios limítrofes**, para **integrar a organização, o planejamento e a execução de funções públicas de interesse comum**. O **Estatuto da Metrópole** (Lei 13.089/2015) disciplina a **governança interfederativa**.",
      "",
      "### Competências comuns (art. 23)",
      "**União, Estados, DF e Municípios**: zelar pela **Constituição**, **saúde**, **assistência**, **patrimônio histórico**, **meio ambiente**, **combate à pobreza**, **educação, cultura e ciência**, **segurança no trânsito**, entre outras. **Lei complementar** fixa normas de cooperação (**LC 140/2011**, meio ambiente).",
      "",
      "### Competência concorrente (art. 24)",
      "**União, Estados e DF** legislam concorrentemente (direito tributário, financeiro, penitenciário, econômico, urbanístico, orçamento, juntas comerciais, consumo, educação, proteção ao patrimônio, meio ambiente, saúde, etc.). A **União** edita **normas gerais**; os **Estados** **suplementam**. **Inexistindo lei federal** sobre normas gerais, os Estados exercem **competência legislativa plena** (§ 3º), e a **superveniência** de lei federal **suspende** a eficácia da estadual no que lhe for contrário (§ 4º).",
      "",
      "### Bens do Estado (art. 26)",
      "Incluem as **águas superficiais ou subterrâneas, fluentes, emergentes e em depósito**, salvo as decorrentes de obras da União; as **áreas** nas ilhas oceânicas e costeiras que estiverem no seu domínio; as **ilhas fluviais e lacustres** não pertencentes à União; e as **terras devolutas** não compreendidas entre as da União.",
      "",
      "### Vedações (art. 19)",
      "Aos Estados é **vedado**, entre outras coisas, **estabelecer cultos religiosos**, **recusar fé** a documentos públicos e **criar distinções** entre brasileiros.",
    ]),
    conferir("O **rol de competências** do Estado e as normas sobre **regiões metropolitanas** (a **RMC** e outras) na **Constituição do Paraná** e nas **leis complementares estaduais**."),
    q("Segundo a Constituição Federal, cabe aos Estados explorar diretamente, ou mediante concessão, os serviços locais de:", ["energia elétrica", "gás canalizado, vedada a edição de medida provisória para a sua regulamentação", "telecomunicações", "transporte aéreo", "serviço postal"], "B", "CF, art. 25, § 2º."),
    ce("Os Estados podem instituir, mediante lei complementar, regiões metropolitanas, aglomerações urbanas e microrregiões, para integrar a organização, o planejamento e a execução de funções públicas de interesse comum.", "Certo", "CF, art. 25, § 3º."),
    q("Inexistindo lei federal sobre normas gerais, em matéria de competência concorrente, os Estados:", ["nada podem legislar", "exercem a competência legislativa plena, para atender a suas peculiaridades", "devem aguardar a lei", "submetem-se aos Municípios", "somente legislam com autorização do Presidente"], "B", "CF, art. 24, § 3º."),
    ce("A competência residual dos Estados abrange as matérias que não lhes sejam vedadas pela Constituição Federal.", "Certo", "CF, art. 25, § 1º."),
  ]);

  C("organizacao-dos-poderes-no-estado", [
    aprofundar([
      "### Poder Legislativo (CF, art. 27)",
      "- A **Assembleia Legislativa** é **unicameral**.",
      "- **Número de deputados estaduais**: **o triplo** da representação do Estado na **Câmara dos Deputados** e, atingido o **número de 12**, acrescido de **tantos quantos forem os deputados federais acima de 12**. O Paraná tem **30 deputados federais**: **36 + 18 = 54**.",
      "- **Mandato** de **quatro anos**; **subsídio** fixado por **lei de iniciativa da Assembleia**, na razão de, **no máximo, 75%** do subsídio dos deputados federais.",
      "- **Aplicam-se** aos deputados estaduais as regras da CF sobre **sistema eleitoral, inviolabilidade, imunidades, remuneração, perda de mandato, licença, impedimentos e incorporação às Forças Armadas**.",
      "- **Controle externo** com auxílio do **Tribunal de Contas do Estado (TCE-PR)**, de **sete conselheiros** (simetria com o art. 73), com **quatro** escolhidos pela **Assembleia** e **três** pelo **Governador** (um auditor, um membro do MP de Contas e um de livre escolha, com os requisitos constitucionais).",
      "",
      "### Poder Executivo (arts. 28, 77 e 78)",
      "- **Governador e Vice** eleitos para mandato de **quatro anos**, com **posse em 1º de janeiro**; **reeleição por uma única vez**.",
      "- **Segundo turno** se nenhum candidato obtiver **maioria absoluta** de votos válidos.",
      "- **Julgamento**: por **crimes comuns**, no **Superior Tribunal de Justiça** (CF, art. 105, I, a); por **crimes de responsabilidade**, em **tribunal misto** (cinco deputados e cinco desembargadores, presidido pelo Presidente do TJ), conforme a **Lei 1.079/1950**. A **admissão da acusação** depende de **dois terços** da Assembleia.",
      "- **Secretários de Estado**: nomeados e exonerados pelo Governador, com a sua prestação de contas e responsabilidade.",
      "",
      "### Poder Judiciário (arts. 92 e 125)",
      "O **Tribunal de Justiça do Paraná** é o órgão de **segundo grau**; os **desembargadores** são **vitalícios**; há **juízes de primeiro grau**, **juizados especiais** e **Justiça Militar estadual**, se houver. O TJ julga a **representação de inconstitucionalidade** local e os **Prefeitos**.",
      "",
      "### Funções essenciais à Justiça",
      "- **Ministério Público do Estado** (MPPR), com **autonomia funcional e administrativa**, chefiado pelo **Procurador-Geral de Justiça**, nomeado pelo Governador entre integrantes da carreira indicados em **lista tríplice**, para mandato de **dois anos**, permitida uma recondução (CF, art. 128, § 3º).",
      "- **Defensoria Pública** estadual (CF, art. 134).",
      "- **Procuradoria-Geral do Estado**: **representação judicial e consultoria jurídica** do Estado, por procuradores de carreira admitidos por **concurso** (CF, art. 132).",
    ]),
    conferir("A **composição e as competências** dos Poderes e dos órgãos na **Constituição do Paraná** (por exemplo, número de desembargadores, regras do **TCE-PR**, **processo legislativo estadual** e **prazos**)."),
    q("O número de deputados estaduais é calculado como o triplo da representação do Estado na Câmara dos Deputados, até 12, acrescido de tantos quantos forem os deputados federais acima de 12. O Paraná, que tem 30 deputados federais, tem:", ["30 deputados estaduais", "36 deputados estaduais", "48 deputados estaduais", "54 deputados estaduais", "90 deputados estaduais"], "D", "36 + 18 = 54, segundo o art. 27 da CF."),
    ce("O Governador do Estado é julgado, nos crimes comuns, pelo Superior Tribunal de Justiça.", "Certo", "CF, art. 105, I, a."),
    q("O subsídio dos deputados estaduais é fixado por lei de iniciativa da Assembleia Legislativa, na razão de, no máximo:", ["50% do subsídio dos deputados federais", "75% do subsídio dos deputados federais", "100% do subsídio dos deputados federais", "o subsídio do Governador", "o subsídio dos Ministros do STF"], "B", "CF, art. 27, § 2º."),
    ce("Os Tribunais de Contas estaduais são compostos, por simetria, de sete conselheiros.", "Certo", "CF, art. 75, parágrafo único."),
  ]);

  C("administracao-publica-estadual", [
    aprofundar([
      "### Princípios",
      "A Constituição Estadual repete e **adapta** os princípios do **art. 37 da CF**: **legalidade, impessoalidade, moralidade, publicidade e eficiência**. A Administração **direta** (secretarias) e a **indireta** (autarquias, fundações, empresas públicas e sociedades de economia mista) **obedecem** a esses princípios.",
      "",
      "### Estrutura",
      "- **Direta**: **Governadoria**, **secretarias de Estado** e órgãos subordinados.",
      "- **Indireta**: **autarquias** (por exemplo, o **DER/PR** e o **Detran-PR**, segundo a organização estadual; **conferir**), **fundações**, **empresas públicas** e **sociedades de economia mista** (como a **Copel** e a **Sanepar**, **conferir**).",
      "- A criação de **autarquia** exige **lei específica**; a de **empresa pública, sociedade de economia mista e fundação**, **autorização por lei específica** e **registro** (CF, art. 37, XIX).",
      "",
      "### Controle",
      "- **Interno**: sistema de cada Poder.",
      "- **Externo**: **Assembleia Legislativa**, com o **TCE-PR** (art. 71, por simetria): **parecer prévio** sobre as **contas do Governador** (em **60 dias**), **julgamento das contas dos administradores**, **fiscalização** de licitações e contratos.",
      "- **Controle social** e **transparência** (**Lei de Acesso à Informação**).",
      "",
      "### Licitações e contratos",
      "**Lei 14.133/2021**, de **normas gerais** federais, e **leis estaduais** suplementares. **Regra**: licitação; **exceções**: dispensa e inexigibilidade.",
      "",
      "### Responsabilidade",
      "**Responsabilidade civil objetiva** do Estado (art. 37, § 6º), **improbidade** (Lei 8.429/1992, alterada pela Lei 14.230/2021), **crimes de responsabilidade** do Governador e dos secretários.",
    ]),
    conferir("O **capítulo da administração pública** na **Constituição do Paraná**, a **estrutura administrativa vigente** (secretarias e entidades) e as **leis estaduais** de organização."),
    q("A criação de sociedade de economia mista estadual depende de:", ["decreto do Governador", "autorização por lei específica", "resolução da Assembleia", "portaria do secretário", "ato do TCE"], "B", "CF, art. 37, XIX."),
    ce("O controle externo da Administração estadual é exercido pela Assembleia Legislativa, com o auxílio do Tribunal de Contas do Estado.", "Certo", "Simetria com o art. 71 da CF."),
    q("Segundo a Constituição, a responsabilidade civil do Estado por danos causados por seus agentes é:", ["subjetiva, sempre", "objetiva, com direito de regresso contra o agente em caso de dolo ou culpa", "inexistente", "solidária com o município", "limitada a 12 meses"], "B", "CF, art. 37, § 6º."),
  ]);

  C("servidores-publicos-estaduais", [
    aprofundar([
      "### Constituição Federal (arts. 37 a 41)",
      "- **Concurso público**; **validade de dois anos**, prorrogável uma vez (art. 37, II e III).",
      "- **Cargos em comissão** e **funções de confiança** (V); **greve** (VII); **reserva para pessoas com deficiência** (VIII); **contratação temporária** (IX).",
      "- **Revisão geral anual** (X), **teto** (XI): no **Estado**, o **subsídio do Governador** no **Executivo**, o **dos deputados** no Legislativo e o **dos desembargadores** (**90,25%** do subsídio dos Ministros do STF) no Judiciário, com **limite único** (**art. 37, XI e § 12**, conforme a **EC 47/2005**; **conferir**).",
      "- **Estabilidade** (art. 41): **3 anos** e **avaliação especial de desempenho**.",
      "- **Aposentadoria** (art. 40) e **regime próprio** (no Paraná, a **ParanaPrevidência**, **conferir**).",
      "",
      "### O que a Constituição Estadual acrescenta",
      "A Constituição do Paraná **repete as regras da CF** e **detalha** garantias, **planos de carreira**, **fundo de previdência** e outras. Os concursos cobram a **letra** do capítulo estadual.",
      "",
      "### Regime jurídico",
      "Os **servidores civis do Poder Executivo** têm como **norma central** o **Estatuto dos Funcionários Civis** (**Lei 6.174/1970**), com **alterações** e leis específicas de **carreiras** (educação, saúde, segurança, entre outras).",
    ]),
    conferir("O **capítulo dos servidores** da **Constituição do Paraná** e a **lei previdenciária estadual** em vigor, com as **adequações** à EC 103/2019."),
    q("O limite de remuneração dos servidores estaduais do Poder Executivo é, em regra, o subsídio:", ["do Prefeito da capital", "do Governador do Estado", "do Presidente da República", "dos vereadores", "de dois salários mínimos"], "B", "CF, art. 37, XI."),
    ce("A estabilidade do servidor estadual de cargo efetivo exige três anos de efetivo exercício e avaliação especial de desempenho.", "Certo", "CF, art. 41."),
    q("A validade do concurso público para cargo efetivo estadual é de:", ["1 ano, improrrogável", "até 2 anos, prorrogável uma vez por igual período", "4 anos", "indeterminada", "6 meses"], "B", "CF, art. 37, III."),
  ]);

  /* ================= ESTATUTO ================= */

  E("provimento-e-investidura", [
    aprofundar([
      "### Modelo constitucional e comparação",
      "- **Acesso** a cargo efetivo por **concurso público** (CF, art. 37, II); **nomeação em comissão** livre.",
      "- **Súmulas e Súmulas Vinculantes úteis**: **SV 44** (exame psicotécnico só por lei), **SV 43** (vedado o provimento derivado sem concurso), **Súmula 683 do STF** (limite de idade só se justifica pela natureza das atribuições).",
      "- **Lei 8.112**: **sete** formas de provimento (nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução). O estatuto estadual tem **rol próprio**.",
      "",
      "### Estrutura do Estatuto (Lei 6.174/1970, índice conferido)",
      "O **Título III** trata do **provimento**, com capítulos sobre **nomeação**, **concurso**, **posse**, **estágio probatório** e **exercício**. A **estabilidade** e as **férias** estão no **Título V** (direitos). A **vacância** é o **Título IV**.",
    ]),
    conferir("Os **requisitos de investidura**, os **prazos de posse e de exercício**, a **inspeção médica** e as **formas de provimento** no texto consolidado da **Lei 6.174/1970**."),
    q("O ingresso em cargo público efetivo depende de:", ["indicação política", "aprovação prévia em concurso público de provas ou de provas e títulos", "sorteio", "decisão do Governador, sem concurso", "tempo de serviço em comissão"], "B", "CF, art. 37, II."),
    ce("A Súmula Vinculante 44 do STF estabelece que só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público.", "Certo", "Aplica-se a todos os entes."),
  ]);

  E("direitos-e-vantagens", [
    aprofundar([
      "### Modelo constitucional",
      "**Vencimento** e **vantagens** previstos em **lei**; **subsídio** em parcela única para carreiras indicadas (art. 39, § 4º); **revisão geral anual** (art. 37, X); **teto** (XI); **vedadas** a vinculação e a equiparação (XIII) e o efeito cascata (XIV); **irredutibilidade** (XV). **Direitos do art. 7º** aplicados aos servidores (art. 39, § 3º): 13º salário, férias com 1/3, adicional noturno, hora extra de 50%, salário-família, licença à gestante.",
      "",
      "### Súmulas",
      "**SV 37** (Judiciário não aumenta vencimento por isonomia); **SV 4** (salário mínimo não é indexador); **Súmula 679** (vencimentos não são objeto de convenção coletiva).",
      "",
      "### Estrutura do Estatuto (índice conferido)",
      "O **Título V** reúne **estabilidade, férias** (com seções sobre **período aquisitivo, concessão e pagamento**) e **licenças**, além de **vencimento e vantagens**. **Confira** o rol de **vantagens**, os **adicionais por tempo de serviço** e as **gratificações** previstos em lei.",
    ]),
    conferir("**Vencimento, adicionais e gratificações** da Lei 6.174/1970 e das leis de **planos de carreira**, e as regras de **férias** (período aquisitivo, concessão, pagamento)."),
    q("A revisão geral da remuneração dos servidores deve ocorrer:", ["a qualquer tempo, sem regra", "anualmente, sempre na mesma data e sem distinção de índices", "apenas a cada 5 anos", "só por decisão judicial", "por decreto, sem lei"], "B", "CF, art. 37, X."),
    ce("A Constituição veda a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público.", "Certo", "CF, art. 37, XIII."),
  ]);

  E("licencas-e-afastamentos", [
    aprofundar([
      "### Modelo",
      "**Licença à gestante** de **120 dias** (CF, art. 7º, XVIII, e art. 39, § 3º); **licença-paternidade** (art. 7º, XIX); **afastamento para mandato eletivo** (art. 38).",
      "",
      "### Estrutura do Estatuto (índice conferido)",
      "O **Título V, Capítulo X**, do Estatuto estadual trata das **licenças**, com seções sobre **tratamento de saúde**, **gestante**, **serviço militar**, **interesses particulares**, **licença especial** (semelhante à licença-prêmio) e **aperfeiçoamento**, entre outras. **Confira** **prazos**, **remuneração** e **requisitos** de cada uma.",
      "",
      "### Comparação com a Lei 8.112",
      "A Lei 8.112 tem **sete licenças** no art. 81, mais as dos arts. 202 a 211.",
    ]),
    conferir("**Prazos e remuneração** de cada licença no **texto consolidado da Lei 6.174/1970**, inclusive a **licença especial** e a de **aperfeiçoamento**."),
    q("A licença à gestante, aplicável às servidoras, tem duração, segundo a Constituição Federal, de:", ["60 dias", "90 dias", "120 dias", "150 dias", "180 dias"], "C", "CF, art. 7º, XVIII, c/c art. 39, § 3º."),
    ce("O servidor investido no mandato de Prefeito ficará afastado do cargo, podendo optar pela sua remuneração.", "Certo", "CF, art. 38, II."),
  ]);

  E("deveres-proibicoes-e-responsabilidades", [
    aprofundar([
      "### Modelo",
      "**Princípios** do art. 37; **improbidade** (§ 4º); **responsabilidade civil, penal e administrativa**, **independentes** (Lei 8.112, arts. 121 a 126); **responsabilidade civil do Estado** objetiva.",
      "",
      "### Estrutura do Estatuto (índice conferido)",
      "O **Título VIII** trata dos **deveres**, das **proibições** e das **penalidades**. **Confira** o rol de **deveres** e de **proibições** e a **penalidade** de cada infração.",
      "",
      "### Súmulas do STF",
      "**18** (falta residual e absolvição criminal), **19** (vedado bis in idem), **20** (processo com ampla defesa para demissão) e **SV 5** (advogado no PAD).",
    ]),
    conferir("O **rol de deveres e proibições** da Lei 6.174/1970 e a **gradação das penas** (advertência, repreensão, suspensão, demissão e outras) no texto vigente."),
    q("As responsabilidades civil, penal e administrativa do servidor são, em regra:", ["dependentes entre si", "independentes entre si, com a ressalva da absolvição criminal por negativa de fato ou de autoria", "inexistentes", "iguais em todos os casos", "excludentes da esfera administrativa"], "B", "Lei 8.112, arts. 125 e 126, como modelo."),
    ce("Segundo a Súmula 19 do STF, é inadmissível segunda punição de servidor público baseada no mesmo processo em que se fundou a primeira.", "Certo", "Vedação do bis in idem disciplinar."),
  ]);

  E("regime-disciplinar-e-processo", [
    aprofundar([
      "### Garantias (CF, art. 5º, LV)",
      "**Contraditório e ampla defesa**. **SV 5**: dispensa-se advogado. **Demissão** do estável só em **processo administrativo** com ampla defesa ou por **sentença judicial** (art. 41, § 1º).",
      "",
      "### Estrutura do Estatuto (índice conferido)",
      "O **Título IX** do Estatuto estadual trata de **sindicância**, **processo administrativo** e **revisão**. **Confira** a **composição das comissões**, os **prazos**, a **autoridade julgadora** e as **penalidades**.",
      "",
      "### Comparação com a Lei 8.112",
      "**Sindicância** (30 + 30 dias), **PAD** (comissão de 3 estáveis; 60 + 60 dias), **rito sumário** (2 estáveis; 30 + 15), **revisão** sem agravamento.",
    ]),
    conferir("**Prazos, composição das comissões e autoridade julgadora** no texto vigente. Os **prazos estaduais** podem **diferir** dos federais."),
    q("A revisão do processo disciplinar, no modelo estatutário clássico, não pode:", ["ser pedida pelo servidor", "resultar em agravamento da penalidade", "se basear em fatos novos", "ser feita de ofício", "ser julgada pela autoridade"], "B", "Lei 8.112, art. 182, parágrafo único."),
    ce("O processo administrativo disciplinar deve assegurar o contraditório e a ampla defesa ao acusado.", "Certo", "CF, art. 5º, LV."),
  ]);

  E("vacancia", [
    aprofundar([
      "### Modelo",
      "**Vacância** (Lei 8.112, art. 33): **exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento**. Na CF: **demissão** só com processo ou sentença (art. 41, § 1º), **disponibilidade** com remuneração proporcional (§ 3º), **reintegração** (§ 2º) e **aposentadoria compulsória aos 75 anos** (LC 152/2015).",
      "",
      "### Estrutura do Estatuto (índice conferido)",
      "O **Título IV, Capítulo Único**, do Estatuto estadual trata da **vacância dos cargos**. **Confira** as **formas** previstas.",
    ]),
    conferir("As **formas de vacância** previstas no **texto consolidado** da Lei 6.174/1970 e o **regime de aposentadoria** estadual vigente."),
    q("A aposentadoria compulsória do servidor titular de cargo efetivo ocorre, hoje, aos:", ["65 anos", "70 anos", "75 anos", "80 anos", "60 anos"], "C", "LC 152/2015."),
    ce("A reintegração é o retorno do servidor estável ao cargo quando invalidada a sua demissão por sentença judicial.", "Certo", "CF, art. 41, § 2º."),
  ]);
})();

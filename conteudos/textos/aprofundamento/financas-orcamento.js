/* Aprofundamento · Bloco C: Finanças e Orçamento Público (orçamento e Lei de Responsabilidade Fiscal).
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/financas-orcamento.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const O = (caminho, blocos) => ESTUDO.assunto(`bloco-c/gestao-publica/orcamento-publico/${caminho}`, { livros: LIVROS_ORC, blocos });
  const L = (caminho, blocos) => ESTUDO.assunto(`bloco-c/gestao-publica/lei-de-responsabilidade-fiscal-lc-101-2000/${caminho}`, { livros: LIVROS_LRF, blocos });
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

  const LIVROS_ORC = [
    { titulo: "Constituição Federal, arts. 163 a 169 (Finanças Públicas e Orçamento)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "O art. 165 (PPA, LDO e LOA) e o art. 167 (vedações) são os mais cobrados." },
    { titulo: "Lei 4.320/1964 · Normas gerais de direito financeiro", url: "https://www.planalto.gov.br/ccivil_03/leis/l4320.htm", nota: "Receita, despesa, créditos adicionais, restos a pagar." },
    { titulo: "Manual Técnico de Orçamento (MTO)", autor: "Ministério do Planejamento e Orçamento", nota: "Atualizado a cada ano; explica a classificação e o ciclo de forma prática." },
    { titulo: "Orçamento Público e Contabilidade Pública", autor: "James Giacomoni", nota: "Livro-base de orçamento: princípios, ciclo e classificações." },
  ];
  const LIVROS_LRF = [
    { titulo: "Lei Complementar 101/2000 · Lei de Responsabilidade Fiscal", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm", nota: "Atualizada pelas LCs 131/2009, 173/2020 e 178/2021; estude a versão compilada." },
    { titulo: "Tesouro Nacional · Transparência Fiscal", url: "https://www.tesourotransparente.gov.br", nota: "Relatórios (RREO e RGF) e manuais de demonstrativos fiscais." },
    { titulo: "Responsabilidade Fiscal", autor: "Flávio da Cruz et al.", nota: "Comentários à LRF, com ênfase em limites e prazos." },
  ];

  /* ================= ORÇAMENTO PÚBLICO ================= */

  O("principios-orcamentarios", [
    aprofundar([
      "### Princípios clássicos",
      "- **Unidade**: cada ente tem **um só orçamento** (a LOA), embora composto de três peças: **fiscal, da seguridade social e de investimento das estatais** (CF, art. 165, § 5º).",
      "- **Universalidade**: a LOA inclui **todas as receitas e despesas** de todos os Poderes, órgãos, fundos e entidades (Lei 4.320, arts. 3º e 4º). Veda a **compensação** (**orçamento bruto**): receitas e despesas entram pelo **total**, sem dedução.",
      "- **Anualidade (periodicidade)**: o orçamento vale por **um exercício financeiro**, que coincide com o **ano civil** (1º/jan a 31/dez; Lei 4.320, art. 34). Exceções: os **créditos especiais e extraordinários** abertos nos **últimos quatro meses** podem ser **reabertos** e vigorar no exercício seguinte (CF, art. 167, § 2º); e o **PPA** tem vigência de **quatro anos**.",
      "- **Exclusividade**: a LOA **não conterá dispositivo estranho** à previsão da receita e à fixação da despesa (CF, art. 165, § 8º). **Exceções**: autorização para **abertura de créditos suplementares** e para **contratação de operações de crédito**, ainda que por **antecipação de receita (ARO)**.",
      "- **Não afetação (não vinculação) de receitas**: **vedada a vinculação** da receita de **impostos** a órgão, fundo ou despesa (art. 167, IV). **Exceções**: repartição constitucional das receitas aos entes, **saúde, educação, atividades da administração tributária**, prestação de **garantias** às operações de crédito por antecipação de receita e **garantia** à União.",
      "- **Legalidade**: o orçamento é aprovado **por lei**, e toda despesa depende de **autorização orçamentária** (art. 167, I e II).",
      "- **Publicidade**: divulgação da lei orçamentária e dos relatórios de execução (CF, art. 165, § 3º, e LRF).",
      "- **Equilíbrio**: previsão de receitas **compatível** com a fixação das despesas.",
      "- **Especificação (discriminação)**: despesas e receitas **detalhadas**; vedada **dotação ilimitada** (art. 167, VII).",
      "- **Clareza**, **programação** e **regionalização**.",
      "",
      "### Princípios de execução",
      "**Vedada** a abertura de **crédito suplementar ou especial** sem **prévia autorização legislativa** e sem **indicação dos recursos** correspondentes (art. 167, V). **Vedada a transposição, remanejamento ou transferência** de recursos de uma categoria de programação para outra **sem prévia autorização legislativa** (art. 167, VI).",
      "",
      "### Regra de ouro (art. 167, III)",
      "**Vedada** a realização de **operações de crédito** que excedam o montante das **despesas de capital**, ressalvadas as autorizadas mediante **créditos suplementares ou especiais** com finalidade precisa, aprovados pelo Legislativo por **maioria absoluta**. A ideia: **não se endivida para pagar despesa corrente**.",
    ]),
    atencao("**Exclusividade** tem **duas exceções** (créditos suplementares e operações de crédito). **Não afetação** não se aplica a **saúde, educação, administração tributária e repartição constitucional**. **Unidade** não impede a LOA de ter **três orçamentos**."),
    q("O princípio orçamentário segundo o qual a lei orçamentária não conterá dispositivo estranho à previsão da receita e à fixação da despesa é o da:", ["universalidade", "unidade", "exclusividade", "anualidade", "não afetação"], "C", "CF, art. 165, § 8º; exceção: créditos suplementares e operações de crédito."),
    ce("O princípio da não afetação (ou não vinculação) veda a vinculação da receita de impostos a órgão, fundo ou despesa, ressalvadas as exceções constitucionais, como saúde e educação.", "Certo", "CF, art. 167, IV."),
    q("A chamada \"regra de ouro\" do art. 167, III, da Constituição veda:", ["a contratação de operações de crédito que excedam o montante das despesas de capital, ressalvadas as autorizadas por créditos suplementares ou especiais aprovados por maioria absoluta", "o gasto com pessoal acima de 60% da receita", "a abertura de crédito extraordinário", "a edição de medida provisória sobre matéria orçamentária", "a criação de fundos"], "A", "Não se pode contrair dívida para pagar despesas correntes."),
    ce("O princípio da universalidade impede a compensação entre receitas e despesas, devendo ambas figurar no orçamento pelos valores brutos.", "Certo", "É o chamado orçamento bruto."),
  ]);

  O("ppa-ldo-e-loa", [
    aprofundar([
      "### Iniciativa",
      "As leis do **PPA, da LDO e da LOA** são de **iniciativa exclusiva do Chefe do Poder Executivo** (CF, art. 165). Os projetos são apreciados pelas duas Casas do Congresso, **na forma do regimento comum**, após parecer da **Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO)**.",
      "",
      "### PPA (Plano Plurianual), art. 165, § 1º",
      "Estabelece, de forma **regionalizada**, as **diretrizes, objetivos e metas** da Administração Pública para as **despesas de capital** e outras delas decorrentes e para as relativas aos **programas de duração continuada**.",
      "- **Vigência**: **quatro anos**, do **início do 2º ano** do mandato do Chefe do Executivo ao **fim do 1º ano** do mandato seguinte, para garantir a **continuidade**.",
      "- Nenhum investimento cuja execução ultrapasse **um exercício financeiro** pode ser iniciado **sem prévia inclusão no PPA** ou sem lei que autorize a inclusão, sob pena de crime de responsabilidade (art. 167, § 1º).",
      "",
      "### LDO (Lei de Diretrizes Orçamentárias), art. 165, § 2º",
      "- Compreende as **metas e prioridades** da Administração Pública, incluindo as **despesas de capital** para o **exercício financeiro subsequente**;",
      "- **orienta a elaboração da LOA**;",
      "- dispõe sobre as **alterações na legislação tributária**;",
      "- estabelece a **política de aplicação das agências financeiras oficiais de fomento**.",
      "- Pela **LRF** (art. 4º), contém: **Anexo de Metas Fiscais** e **Anexo de Riscos Fiscais**; **equilíbrio entre receitas e despesas**; **critérios e forma de limitação de empenho**; **normas de controle de custos** e avaliação dos resultados; e condições para **transferências a entidades privadas**.",
      "",
      "### LOA (Lei Orçamentária Anual), art. 165, § 5º",
      "Compreende **três orçamentos**:",
      "1. **Orçamento fiscal**: Poderes, fundos, órgãos e entidades da administração direta e indireta, inclusive fundações;",
      "2. **Orçamento de investimento** das empresas em que a União, direta ou indiretamente, detenha **maioria do capital social com direito a voto**;",
      "3. **Orçamento da seguridade social**: entidades e órgãos a ela vinculados.",
      "- O projeto é acompanhado de **demonstrativo regionalizado** do efeito sobre receitas e despesas decorrente de **isenções, anistias, remissões, subsídios e benefícios** de natureza financeira, tributária e creditícia (§ 6º).",
      "- Os orçamentos, **compatibilizados com o PPA**, têm entre suas funções **reduzir desigualdades inter-regionais**, segundo critério populacional (§ 7º).",
      "- A **reserva de contingência** (LRF, art. 5º, III) atende a **passivos contingentes** e outros **riscos e eventos fiscais imprevistos**.",
      "",
      "### Prazos federais (ADCT, art. 35, § 2º)",
    ]),
    {
      tipo: "tabela",
      titulo: "Prazos do PPA, da LDO e da LOA (esfera federal)",
      cabecalho: ["Lei", "Projeto enviado ao Congresso até", "Devolvido para sanção até"],
      linhas: [
        ["PPA", "31 de agosto do 1º ano de mandato", "22 de dezembro"],
        ["LDO", "15 de abril", "17 de julho"],
        ["LOA", "31 de agosto", "22 de dezembro"],
      ],
    },
    aprofundar([
      "A **sessão legislativa não será interrompida** (não entra em recesso de julho) **sem a aprovação da LDO**. Nos Estados e Municípios, os **prazos** são fixados pelas **Constituições estaduais e Leis Orgânicas**.",
      "",
      "### Emendas (art. 166)",
      "- As emendas ao **projeto de LOA** só podem ser aprovadas se **compatíveis com o PPA e a LDO**, e se **indicarem os recursos** necessários (**admitidos apenas os provenientes de anulação de despesa**, excluídas as de **pessoal e encargos, serviço da dívida e transferências tributárias** aos entes) ou se relacionadas com a **correção de erros ou omissões** ou com os **dispositivos do texto do projeto**.",
      "- Há **emendas individuais e de bancada de execução obrigatória** (EC 86/2015, 100/2019 e 126/2022). **Conferir** a regra atual.",
    ]),
    atencao("PPA: **4 anos**, do **2º ano** do mandato ao **1º ano** do seguinte. LDO: **orienta a LOA**; **metas e prioridades**. LOA: **três orçamentos**. Prazos: **31/8 (PPA e LOA)**, **15/4 (LDO)**; devolução: **22/12 (PPA e LOA)** e **17/7 (LDO)**.", "Memorize"),
    q("O plano plurianual (PPA) tem vigência de:", ["1 ano", "2 anos", "4 anos, do início do 2º ano de mandato ao fim do 1º ano do mandato seguinte", "4 anos, coincidindo com o mandato", "8 anos"], "C", "Garante a continuidade administrativa."),
    ce("A lei orçamentária anual compreende o orçamento fiscal, o orçamento de investimento das empresas estatais e o orçamento da seguridade social.", "Certo", "CF, art. 165, § 5º."),
    q("O projeto de lei do orçamento anual da União deve ser encaminhado ao Congresso Nacional até:", ["15 de abril", "31 de agosto", "30 de setembro", "31 de outubro", "22 de dezembro"], "B", "ADCT, art. 35, § 2º, III. A LDO vai até 15 de abril."),
    ce("A iniciativa das leis do plano plurianual, das diretrizes orçamentárias e do orçamento anual é do Chefe do Poder Executivo.", "Certo", "CF, art. 165."),
    q("Compete à lei de diretrizes orçamentárias:", ["fixar a despesa pública para o exercício, em valores detalhados", "estabelecer as metas e prioridades da Administração e orientar a elaboração da lei orçamentária anual", "instituir tributos", "criar cargos públicos", "aprovar as contas do Presidente"], "B", "CF, art. 165, § 2º."),
  ]);

  O("ciclo-orcamentario", [
    aprofundar([
      "### Quatro fases",
      "1. **Elaboração** (**proposta orçamentária**): pelo **Poder Executivo**, que consolida as propostas dos demais Poderes e órgãos, com base no PPA e na LDO.",
      "2. **Discussão, votação e aprovação**: pelo **Poder Legislativo** (comissão específica, plenário), com **emendas** e **sanção**.",
      "3. **Execução**: pela **administração**, com **programação financeira** e **cronograma de execução mensal de desembolso**, que o Executivo estabelece em até **30 dias após a publicação** do orçamento (LRF, art. 8º).",
      "4. **Controle e avaliação**: controle **interno** (cada Poder), **externo** (Legislativo com auxílio do **Tribunal de Contas**) e **social**.",
      "",
      "### Execução",
      "- **Programação financeira**: compatibiliza o fluxo de **arrecadação** com o **de gastos**.",
      "- **Limitação de empenho** (LRF, art. 9º): se a **receita** realizada **não comportar** as **metas** fiscais, os Poderes e o Ministério Público promovem, em **30 dias**, a **limitação de empenho e de movimentação financeira**, segundo critérios da LDO. **Não** se limitam as **despesas obrigatórias**, o pagamento do **serviço da dívida** e as **ressalvadas na LDO**.",
      "- **Contingenciamento**: o termo usado na prática para a limitação de empenho.",
      "",
      "### Créditos adicionais (Lei 4.320, arts. 40 a 46)",
    ]),
    {
      tipo: "tabela",
      titulo: "Créditos adicionais",
      cabecalho: ["Tipo", "Destino", "Como se abre"],
      linhas: [
        ["Suplementar", "Reforço de dotação já existente", "Lei + decreto do Executivo (autorizada na LOA ou em lei)"],
        ["Especial", "Despesa sem dotação orçamentária específica", "Lei + decreto do Executivo"],
        ["Extraordinário", "Despesa urgente e imprevisível (guerra, comoção interna, calamidade pública)", "Medida provisória (União) ou decreto, com comunicação ao Legislativo"],
      ],
    },
    aprofundar([
      "### Fontes de recurso dos créditos (Lei 4.320, art. 43)",
      "**Superávit financeiro** do exercício anterior; **excesso de arrecadação**; **anulação parcial ou total** de dotações; **operações de crédito**.",
      "",
      "### Controle",
      "- **Interno**: sistema de cada Poder (por exemplo, a **CGU** no Executivo federal), com finalidades do art. 74 da CF.",
      "- **Externo** (art. 71): **Tribunal de Contas**, com **parecer prévio** sobre as contas do Chefe do Executivo, a ser **julgado pelo Legislativo**.",
      "- **Social**: transparência e participação.",
    ]),
    atencao("O crédito **extraordinário** só serve a **despesas imprevisíveis e urgentes**. **Suplementar** reforça dotação existente; **especial** cria dotação nova. A **limitação de empenho** tem **30 dias** de prazo.", "Memorize"),
    q("O crédito adicional destinado a despesas urgentes e imprevisíveis, como as decorrentes de guerra, comoção interna ou calamidade pública, é o:", ["suplementar", "especial", "extraordinário", "ordinário", "global"], "C", "CF, art. 167, § 3º."),
    ce("O crédito suplementar destina-se ao reforço de dotação orçamentária já existente.", "Certo", "Lei 4.320, art. 41, I."),
    q("O ciclo orçamentário compreende, na ordem:", ["elaboração, discussão e aprovação, execução, controle e avaliação", "execução, elaboração, aprovação e controle", "aprovação, controle, elaboração e execução", "controle, execução, elaboração e discussão", "elaboração, execução, aprovação e controle"], "A", "Ciclo orçamentário clássico."),
    ce("Segundo a LRF, se a receita realizada não comportar o cumprimento das metas fiscais, os Poderes promoverão, nos trinta dias subsequentes, a limitação de empenho e de movimentação financeira.", "Certo", "LRF, art. 9º."),
  ]);

  O("receita-e-despesa-publica", [
    aprofundar([
      "### Receita pública (Lei 4.320, art. 11)",
      "- **Receitas correntes**: **tributária**, de **contribuições**, **patrimonial**, **agropecuária**, **industrial**, de **serviços**, **transferências correntes** e outras.",
      "- **Receitas de capital**: **operações de crédito**, **alienação de bens**, **amortização de empréstimos**, **transferências de capital** e outras (**aumentam o patrimônio** ou diminuem o ativo).",
      "- **Receita originária** (do patrimônio ou da exploração de atividade econômica) × **derivada** (tributos, por poder de império).",
      "- **Receita orçamentária** (integra o orçamento) × **extraorçamentária** (ingressos compensatórios: cauções, depósitos, retenções).",
      "",
      "### Estágios da receita",
      "**Previsão**, **lançamento**, **arrecadação** e **recolhimento**.",
      "",
      "### Despesa pública",
      "- **Despesas correntes**: **pessoal e encargos sociais**, **juros e encargos da dívida** e **outras despesas correntes** (manutenção da máquina).",
      "- **Despesas de capital**: **investimentos**, **inversões financeiras** e **amortização da dívida**.",
      "- **Despesa orçamentária × extraorçamentária** (restituição dos ingressos extraorçamentários).",
      "",
      "### Estágios da despesa (Lei 4.320)",
      "1. **Fixação**: autorização na LOA.",
      "2. **Empenho** (art. 58): ato da **autoridade competente** que **cria para o Estado obrigação de pagamento**, pendente ou não de implemento de condição. **Nenhuma despesa** pode ser realizada **sem prévio empenho** (art. 60). Modalidades: **ordinário**, **por estimativa** e **global**.",
      "3. **Liquidação** (art. 63): **verificação do direito adquirido pelo credor**, com base nos títulos e documentos comprobatórios do crédito (origem, objeto, valor e quem recebe).",
      "4. **Pagamento** (art. 64): **despacho exarado por autoridade competente**, determinando que a despesa seja paga.",
      "",
      "### Restos a pagar (art. 36)",
      "Despesas **empenhadas** mas **não pagas até 31 de dezembro**. Distinguem-se as **processadas** (já **liquidadas**) das **não processadas** (ainda **não liquidadas**). Entram na dívida **flutuante**.",
      "",
      "### Despesas de exercícios anteriores e suprimento de fundos",
      "- **Despesas de exercícios anteriores**: relativas a exercícios encerrados, sem dotação específica ou com saldo insuficiente na época própria (art. 37).",
      "- **Suprimento de fundos (adiantamento)**: entrega de numerário a servidor, para **despesas miúdas e de pronto pagamento**, nos termos legais.",
      "",
      "### Resultados fiscais",
      "- **Resultado primário**: receitas **não financeiras** menos despesas **não financeiras** (**exclui juros**).",
      "- **Resultado nominal**: variação da **dívida fiscal líquida**.",
      "- **Superávit financeiro**: ativo financeiro menos passivo financeiro, apurado no **balanço patrimonial**.",
    ]),
    {
      tipo: "tabela",
      titulo: "Os quatro estágios da despesa",
      cabecalho: ["Estágio", "Definição"],
      linhas: [
        ["Fixação", "Autorização na lei orçamentária"],
        ["Empenho", "Cria a obrigação de pagamento"],
        ["Liquidação", "Verifica o direito adquirido pelo credor"],
        ["Pagamento", "Entrega do recurso ao credor"],
      ],
    },
    atencao("O **empenho** cria a **obrigação**; a **liquidação** verifica o **direito do credor**; o **pagamento** quita. **Restos a pagar** são despesas **empenhadas e não pagas** até 31/12: **processadas** = **já liquidadas**."),
    q("Segundo a Lei 4.320/1964, o empenho de despesa é o ato emanado de autoridade competente que:", ["verifica o direito adquirido pelo credor", "cria para o Estado obrigação de pagamento, pendente ou não de implemento de condição", "determina o pagamento", "autoriza a abertura do orçamento", "cancela a dotação"], "B", "Art. 58. Verificar o direito do credor é a liquidação."),
    ce("Consideram-se restos a pagar processados as despesas empenhadas e já liquidadas, mas não pagas até 31 de dezembro.", "Certo", "Lei 4.320, art. 36."),
    q("São despesas de capital:", ["pessoal e encargos sociais", "juros da dívida", "investimentos, inversões financeiras e amortização da dívida", "outras despesas correntes", "transferências correntes"], "C", "Pessoal e juros são correntes."),
    q("A receita proveniente de operações de crédito classifica-se, na Lei 4.320, como receita:", ["corrente", "de capital", "tributária", "patrimonial", "de serviços"], "B", "Art. 11, § 2º."),
  ]);

  /* ================= LRF ================= */

  L("planejamento-e-metas-fiscais", [
    aprofundar([
      "### Finalidade (art. 1º)",
      "A LRF estabelece **normas de finanças públicas voltadas para a responsabilidade na gestão fiscal**. A responsabilidade pressupõe **ação planejada e transparente**, que previna **riscos** e corrija **desvios** capazes de afetar o **equilíbrio das contas públicas**, mediante **metas de resultado** e **limites e condições** para: **renúncia de receita**, **despesas com pessoal**, **seguridade social**, **dívida consolidada e mobiliária**, **operações de crédito** (inclusive ARO), **concessão de garantia** e **inscrição em restos a pagar**.",
      "",
      "### Quem se submete",
      "Todos os **entes** (União, Estados, DF e Municípios) e seus **Poderes** (Executivo, Legislativo, **incluídos os Tribunais de Contas**, Judiciário) e o **Ministério Público**; as **autarquias**, **fundações**, **fundos** e **empresas estatais dependentes**.",
      "",
      "### Planejamento",
      "- **LDO** (art. 4º): contém o **Anexo de Metas Fiscais** e o **Anexo de Riscos Fiscais**.",
      "- **Anexo de Metas Fiscais**: **metas anuais**, em **valores correntes e constantes**, relativas a **receitas, despesas, resultados nominal e primário** e **montante da dívida pública**, para o **exercício a que se referirem** e para os **dois seguintes**.",
      "- **Anexo de Riscos Fiscais**: avalia os **passivos contingentes** e outros riscos, e informa as **providências** se se concretizarem.",
      "- **LOA** (art. 5º): consistente com PPA e LDO, com **reserva de contingência** definida na LDO.",
      "",
      "### Receita (arts. 11 a 14)",
      "- **Previsão e arrecadação** de **todos os tributos** da competência constitucional do ente são **requisitos essenciais** da responsabilidade na gestão fiscal. É **vedada** a realização de **transferências voluntárias** ao ente que **não instituir, prever e arrecadar** impostos de sua competência (**exceto** saúde, educação e assistência social).",
      "- **Renúncia de receita** (art. 14): **estimativa do impacto** orçamentário-financeiro e, **além disso**, **medidas de compensação** (aumento de receita) ou estar prevista nas **metas fiscais** da LDO.",
      "",
      "### Despesa (arts. 15 a 17)",
      "- **Despesa não autorizada** (art. 15): **aumento de despesa** sem **estimativa de impacto** e **declaração do ordenador** é **irregular e lesivo ao patrimônio**.",
      "- **Impacto** (art. 16): estimativa do impacto **no exercício e nos dois seguintes**, e **declaração do ordenador de despesa** de que o aumento tem **adequação orçamentária e financeira** com a LOA e **compatibilidade** com o PPA e a LDO.",
      "- **Despesa obrigatória de caráter continuado** (art. 17): despesa **corrente** derivada de **lei, MP ou ato administrativo normativo** com obrigação por **mais de dois exercícios**. Exige **estimativa de impacto** e **compensação** (aumento **permanente** de receita ou redução **permanente** de despesa).",
      "",
      "### Ação de aumento de despesa",
      "**Vedado** ao titular de Poder ou órgão assumir **obrigação** nos **dois últimos quadrimestres do mandato** que não possa ser cumprida integralmente dentro dele, ou que tenha **parcelas** a serem pagas no mandato seguinte **sem suficiente disponibilidade de caixa** (art. 42).",
    ]),
    atencao("**Metas fiscais**: anexo da **LDO**, com metas para **3 anos** (o exercício e os dois seguintes; para a **União**, a LC 200/2023 estendeu a previsão para o exercício e os três seguintes: **conferir**). A despesa de **caráter continuado** é a que dura **mais de dois exercícios** e exige **compensação**."),
    q("Segundo a LRF, o Anexo de Metas Fiscais, integrante da LDO, estabelecerá metas relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública, para o exercício a que se referirem e para:", ["o exercício anterior", "os dois exercícios seguintes", "os dez exercícios seguintes", "o mandato seguinte", "um semestre"], "B", "LRF, art. 4º, § 1º."),
    ce("Despesa obrigatória de caráter continuado é a despesa corrente derivada de lei, medida provisória ou ato administrativo normativo que fixe para o ente a obrigação legal de sua execução por um período superior a dois exercícios.", "Certo", "LRF, art. 17."),
    q("O Anexo de Riscos Fiscais avalia:", ["a arrecadação futura do ente", "os passivos contingentes e outros riscos capazes de afetar as contas públicas, informando as providências caso se concretizem", "a folha de pessoal", "o orçamento de investimento das estatais", "as emendas parlamentares"], "B", "LRF, art. 4º, § 3º."),
    ce("A concessão de renúncia de receita exige estimativa do impacto orçamentário-financeiro e medidas de compensação, ou a previsão nas metas fiscais da LDO.", "Certo", "LRF, art. 14."),
  ]);

  L("limites-de-despesa-com-pessoal", [
    aprofundar([
      "### Despesa total com pessoal (art. 18)",
      "Somatório dos gastos do ente com **ativos, inativos e pensionistas**, mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder, com **quaisquer espécies remuneratórias**, incluídos **adicionais, gratificações, horas extras, vantagens pessoais, subsídios**, e os **encargos sociais e contribuições** recolhidas pelo ente à previdência. A **terceirização** de mão de obra que **substitui servidores** é contabilizada como **\"Outras Despesas de Pessoal\"**. Apura-se pelo **somatório dos últimos 12 meses**, em relação à **receita corrente líquida (RCL)**.",
      "",
      "### Limites gerais (art. 19), em % da RCL",
      "- **União**: **50%**;",
      "- **Estados**: **60%**;",
      "- **Municípios**: **60%**.",
      "",
      "### Repartição por Poder (art. 20)",
    ]),
    {
      tipo: "tabela",
      titulo: "Limites por Poder (% da receita corrente líquida)",
      cabecalho: ["Ente", "Legislativo (com Tribunal de Contas)", "Judiciário", "Executivo", "Ministério Público"],
      linhas: [
        ["União (50%)", "2,5% (com TCU)", "6%", "40,9%", "0,6%"],
        ["Estados (60%)", "3% (com TCE)", "6%", "49%", "2%"],
        ["Municípios (60%)", "6% (com TCM, se houver)", "—", "54%", "—"],
      ],
    },
    aprofundar([
      "### Verificação",
      "A cada **quadrimestre**. **Municípios com menos de 50 mil habitantes** podem optar pela verificação **semestral** (art. 63, II).",
      "",
      "### Alerta e limite prudencial",
      "- **Alerta (90%)**: o **Tribunal de Contas** alerta o Poder quando a despesa ultrapassa **90% do limite** (art. 59, § 1º, II).",
      "- **Limite prudencial (95%)**: se a despesa total com pessoal exceder **95% do limite** do Poder ou órgão, ficam **vedados** (art. 22, parágrafo único):",
      "  1. **concessão de vantagem, aumento, reajuste ou adequação de remuneração**, salvo os derivados de **sentença judicial** ou **determinação legal ou contratual**, e a **revisão geral anual** (CF, art. 37, X);",
      "  2. **criação de cargo, emprego ou função**;",
      "  3. **alteração de estrutura de carreira** que implique aumento de despesa;",
      "  4. **provimento de cargo público**, admissão ou contratação de pessoal a qualquer título, **ressalvada a reposição** decorrente de **aposentadoria ou falecimento** de servidores das áreas de **educação, saúde e segurança**;",
      "  5. contratação de **hora extra**, salvo as situações previstas na **LDO**.",
      "",
      "### Excedido o limite (art. 23)",
      "- Prazo: **dois quadrimestres seguintes**, eliminando o excesso, sendo **pelo menos 1/3 no primeiro**.",
      "- Medidas (CF, art. 169, §§ 3º e 4º): **redução de pelo menos 20% das despesas com cargos em comissão e funções de confiança**; **exoneração de servidores não estáveis**; se não bastar, **perda do cargo de servidores estáveis**, com **indenização** (um mês de remuneração por ano de serviço), e extinção do cargo.",
      "- **Se a redução não for alcançada no prazo**, e **enquanto perdurar o excesso**, o ente **não pode**: receber **transferências voluntárias** (exceto as de **educação, saúde e assistência social**); obter **garantia** de outro ente; contratar **operações de crédito**, exceto as destinadas ao **pagamento da dívida mobiliária** e as que visem à **redução das despesas com pessoal** (art. 23, § 3º, com a redação da LC 178/2021). Se o excesso ocorrer no **primeiro quadrimestre do último ano de mandato**, as restrições valem **de imediato** (§ 4º).",
      "",
      "### Atos nulos (art. 21)",
      "É **nulo** de pleno direito o ato que provoque **aumento de despesa com pessoal** sem observar as exigências dos **arts. 16 e 17** ou o **limite** legal; e o **ato de que resulte aumento** da despesa com pessoal **nos 180 dias anteriores ao final do mandato** do titular do Poder ou órgão.",
    ]),
    atencao("**Alerta: 90%**. **Prudencial: 95%**. **Limite: 60%** (Estados e Municípios), **50%** (União). Excedeu: **dois quadrimestres**, com **1/3 no primeiro**. Proibido aumento de remuneração e **nova contratação** (com exceção da reposição em **educação, saúde e segurança**)."),
    q("O limite da despesa total com pessoal dos Municípios, em relação à receita corrente líquida, é de:", ["40%", "50%", "54%", "60%", "70%"], "D", "LRF, art. 19, III. Do limite, 54% para o Executivo e 6% para o Legislativo."),
    ce("Quando a despesa total com pessoal ultrapassa 95% do limite, a LRF veda a concessão de aumento de remuneração, a criação de cargos e a contratação de pessoal, ressalvadas as hipóteses legais.", "Certo", "Art. 22, parágrafo único."),
    q("Ultrapassado o limite de despesa com pessoal, o ente deve eliminar o excesso:", ["no mesmo quadrimestre", "nos dois quadrimestres seguintes, sendo pelo menos um terço no primeiro", "em 5 anos", "no exercício seguinte, integralmente", "nos seis meses seguintes, sem regra de proporção"], "B", "LRF, art. 23."),
    ce("Não alcançada a redução do excesso de despesa com pessoal no prazo legal, e enquanto perdurar o excesso, o ente não pode receber transferências voluntárias, salvo as destinadas a educação, saúde e assistência social.", "Certo", "Art. 23, § 3º, I, e art. 25, § 3º."),
  ]);

  L("transparencia-da-gestao-fiscal", [
    aprofundar([
      "### Instrumentos de transparência (art. 48)",
      "Os **planos, orçamentos e leis de diretrizes orçamentárias**; as **prestações de contas** e o respectivo **parecer prévio**; o **Relatório Resumido da Execução Orçamentária (RREO)** e o **Relatório de Gestão Fiscal (RGF)**; e as **versões simplificadas** desses documentos.",
      "",
      "### Participação popular (art. 48, § 1º)",
      "- **Incentivo à participação popular** e realização de **audiências públicas** nos **processos de elaboração e discussão** dos planos, LDOs e orçamentos;",
      "- **liberação ao pleno conhecimento e acompanhamento da sociedade, em tempo real**, de **informações pormenorizadas** sobre a execução orçamentária e financeira, **em meios eletrônicos de acesso público** (redação da **LC 131/2009**, a \"Lei da Transparência\");",
      "- adoção de **sistema integrado de administração financeira e controle**.",
      "",
      "### RREO (arts. 52 e 53)",
      "**Bimestral**, publicado em até **30 dias após o encerramento do bimestre**. Abrange o **orçamento fiscal e da seguridade social**, com demonstrativos de receitas e despesas, resultado primário e nominal, e **restos a pagar**.",
      "",
      "### RGF (arts. 54 e 55)",
      "**Quadrimestral**, até **30 dias após o encerramento do período** (**semestral** para **Municípios com menos de 50 mil habitantes**, se optarem). É assinado pelos titulares dos Poderes e órgãos, e traz: **despesa com pessoal**, **dívida consolidada e mobiliária**, **garantias e contragarantias**, **operações de crédito** e, no último quadrimestre, a **disponibilidade de caixa** e a inscrição em **restos a pagar**.",
      "",
      "### Contas (arts. 49 e 56)",
      "As **contas do Chefe do Executivo** ficam **disponíveis, durante todo o exercício**, no Poder Legislativo e no órgão técnico responsável pela elaboração, para **consulta e apreciação** pelos cidadãos e instituições. A **prestação de contas** inclui a dos **Poderes e do Ministério Público**.",
      "",
      "### Fiscalização (art. 59)",
      "O **Poder Legislativo**, diretamente ou com auxílio dos **Tribunais de Contas**, e o **sistema de controle interno** de cada Poder e do **Ministério Público** fiscalizam o cumprimento da LRF, com atenção para: **metas** fiscais, **limites e condições** de realização de operações de crédito e inscrição em restos a pagar, **medidas adotadas** para o retorno da despesa com pessoal ao limite, **providências** para recondução da dívida e **destinação de recursos** obtidos com a alienação de ativos. Os **Tribunais de Contas alertam** os Poderes quando constatarem fatos que comprometam os custos ou resultados.",
      "",
      "### Sanções",
      "A **Lei 10.028/2000** (Lei dos Crimes Fiscais) tipifica **crimes** e infrações administrativas contra as finanças públicas. Os **gestores** respondem por **crimes de responsabilidade** (**Decreto-Lei 201/1967**, para prefeitos) e por **improbidade administrativa**.",
    ]),
    {
      tipo: "tabela",
      titulo: "RREO × RGF",
      cabecalho: ["Relatório", "Periodicidade", "Prazo de divulgação", "Conteúdo central"],
      linhas: [
        ["RREO", "Bimestral", "Até 30 dias após o bimestre", "Execução do orçamento: receitas, despesas, resultados"],
        ["RGF", "Quadrimestral (semestral p/ municípios < 50 mil)", "Até 30 dias após o período", "Pessoal, dívida, garantias, operações de crédito, caixa"],
      ],
    },
    atencao("**RREO** = **bimestral** (execução orçamentária). **RGF** = **quadrimestral** (gestão fiscal: pessoal e dívida). A divulgação é em **tempo real** (LC 131/2009) e com **audiências públicas**."),
    q("O Relatório Resumido da Execução Orçamentária (RREO) é publicado:", ["mensalmente", "bimestralmente, até 30 dias após o encerramento de cada bimestre", "quadrimestralmente", "semestralmente, para todos os entes", "anualmente"], "B", "LRF, art. 52."),
    ce("O Relatório de Gestão Fiscal é emitido a cada quadrimestre e deve ser publicado até 30 dias após o encerramento do período.", "Certo", "LRF, arts. 54 e 55."),
    q("A LRF prevê, entre os instrumentos de transparência da gestão fiscal:", ["a restrição de acesso às contas públicas", "a liberação ao pleno conhecimento da sociedade, em tempo real, de informações pormenorizadas sobre a execução orçamentária e financeira, em meios eletrônicos de acesso público", "o sigilo das prestações de contas", "a divulgação apenas anual do orçamento", "a vedação de audiências públicas"], "B", "LRF, art. 48, § 1º, II, com a LC 131/2009."),
    ce("O sistema de controle interno de cada Poder e do Ministério Público também fiscaliza o cumprimento da Lei de Responsabilidade Fiscal.", "Certo", "LRF, art. 59."),
  ]);
})();

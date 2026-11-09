/* Aprofundamento · Bloco C: Legislação da Região Metropolitana (Araucária, São José dos Pinhais e Câmaras Municipais).
   Acrescenta texto e questões DEPOIS do que já existe em textos/legislacao-local.js.

   IMPORTANTE: as leis orgânicas e os estatutos de Araucária e de São José dos Pinhais NÃO estão aqui (texto não obtido em fonte oficial).
   Os assuntos locais trazem um roteiro de estudo e o modelo constitucional que essas leis seguem.
   As Câmaras Municipais são tratadas pelo modelo da CF (arts. 29 a 31 e 58), do DL 201/1967 e da simetria com o processo legislativo federal. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-c/regiao-metropolitana/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto, titulo = "Aprofundando (modelo constitucional)") => ({ tipo: "texto", titulo, texto });
  const atencao = (texto, titulo = "Pegadinha de prova") => ({ tipo: "atencao", titulo, texto });
  const conferir = (texto) => ({ tipo: "atencao", titulo: "Na lei do seu município, confira", texto });
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
    { titulo: "Constituição Federal, arts. 29 a 31 e 58", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "O modelo das Leis Orgânicas municipais e das Câmaras." },
    { titulo: "Decreto-Lei 201/1967 · Responsabilidade de prefeitos e vereadores", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0201.htm", nota: "O rito de cassação do Prefeito está no art. 5º." },
    { titulo: "Lei 8.112/1990 (comparação)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm", nota: "Modelo para o estatuto municipal." },
    { titulo: "Edital do concurso", nota: "É o edital que diz qual lei de qual município é cobrada. Baixe a lei no site da Câmara ou da Prefeitura do município indicado." },
  ];

  const ROTEIRO_LOM = [
    "### Como estudar uma Lei Orgânica (qualquer município)",
    "A **Lei Orgânica** repete o **modelo da Constituição** e acrescenta **detalhes locais**. Estude na ordem:",
    "1. **Disposições preliminares**: autonomia, **símbolos**, **limites**, **competências** (CF, art. 30).",
    "2. **Poder Legislativo**: **número de vereadores**, **sessões**, **quóruns**, **processo legislativo**, **fiscalização** e **contas** (CF, arts. 29, 29-A e 31).",
    "3. **Poder Executivo**: **Prefeito e Vice**, **atribuições**, **vedações**, **substituição**, **responsabilidade** (DL 201/1967).",
    "4. **Administração pública** e **servidores** (CF, arts. 37 a 41).",
    "5. **Tributos, finanças e orçamento** (CF, arts. 156 e 165).",
    "6. **Política urbana** (**plano diretor**, CF, art. 182), **saúde, educação, meio ambiente, transporte**.",
    "",
    "### Onde a lei local costuma variar",
    "**Prazos** (sanção, veto, convocação), **quóruns**, **número de vereadores**, **subsídios**, **nomes de órgãos** e **conselhos municipais**. Por isso, **leia a lei do município da prova** com o **edital** ao lado.",
  ];
  const ROTEIRO_EST = [
    "### Como estudar um estatuto de servidores municipais",
    "O estatuto segue, em geral, a **estrutura da Lei 8.112**: **provimento**, **vacância**, **direitos e vantagens**, **licenças**, **deveres e proibições**, **penalidades** e **processo disciplinar**. Para cada tema, **compare** com a Lei 8.112 e **anote a diferença**:",
    "- **Prazos** de posse e de exercício; **estágio probatório** (3 anos, CF art. 41);",
    "- **Licenças** (nomes, prazos e remuneração);",
    "- **Penalidades** e **prescrição**;",
    "- **Composição das comissões** e **prazos** do processo disciplinar.",
    "",
    "### Regra de ouro",
    "A **Constituição** (arts. 37 a 41) e as **súmulas** valem para **todos os estatutos**; o que **varia** são os **números** (prazos, dias, percentuais). **Não presuma** que o município copiou a Lei 8.112.",
  ];

  /* ================= ARAUCÁRIA ================= */

  A("araucaria/lei-organica-de-araucaria", [
    aprofundar(ROTEIRO_LOM, "Roteiro de estudo"),
    conferir("A **Lei Orgânica de Araucária** no site da **Câmara Municipal de Araucária** (texto consolidado): **número de vereadores**, **prazos do processo legislativo**, **competências** e **atribuições do Prefeito**."),
    aprofundar([
      "### O que cai em prova (modelo constitucional)",
      "- A **Lei Orgânica** é votada em **dois turnos**, com **interstício mínimo de dez dias**, e aprovada por **dois terços** da Câmara, que a **promulga** (CF, art. 29).",
      "- O Município **legisla sobre interesse local** e **suplementa** as legislações federal e estadual (art. 30).",
      "- O **Prefeito** é **julgado pelo Tribunal de Justiça** nos crimes comuns (art. 29, X).",
      "- O **parecer prévio** do Tribunal de Contas só deixa de prevalecer por **dois terços** da Câmara (art. 31, § 2º).",
    ]),
    q("A Lei Orgânica do Município é promulgada:", ["pelo Prefeito, após sanção", "pela Câmara Municipal", "pelo Governador", "pelo Tribunal de Justiça", "pelo Presidente da República"], "B", "CF, art. 29, caput."),
    ce("O Prefeito é julgado, nos crimes comuns, perante o Tribunal de Justiça.", "Certo", "CF, art. 29, X."),
    q("A Lei Orgânica é aprovada, segundo a Constituição Federal, por:", ["maioria simples", "dois terços dos membros da Câmara, em dois turnos, com interstício mínimo de dez dias", "maioria absoluta, em turno único", "três quintos, em um turno", "plebiscito"], "B", "CF, art. 29."),
  ]);

  A("araucaria/estatuto-dos-servidores-de-araucaria", [
    aprofundar(ROTEIRO_EST, "Roteiro de estudo"),
    conferir("O **estatuto dos servidores de Araucária** (ou a lei que o substituiu) no site da **Câmara Municipal** ou da **Prefeitura**: **prazos**, **licenças**, **penalidades** e **processo disciplinar**."),
    aprofundar([
      "### Modelo constitucional",
      "- **Estabilidade**: **3 anos** de efetivo exercício e **avaliação especial de desempenho** (CF, art. 41).",
      "- **Perda do cargo** do estável: sentença judicial, processo administrativo com ampla defesa ou avaliação periódica (art. 41, § 1º).",
      "- **Súmula Vinculante 5**: defesa técnica por advogado não é obrigatória no PAD.",
      "- **Súmula 19**: vedada segunda punição baseada no mesmo processo.",
    ]),
    q("A estabilidade do servidor estatutário de cargo efetivo é adquirida, segundo a Constituição, após:", ["1 ano", "2 anos", "3 anos de efetivo exercício, com avaliação especial de desempenho", "5 anos", "10 anos"], "C", "CF, art. 41."),
    ce("Segundo a Súmula Vinculante 5 do STF, a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.", "Certo", "Vale para todos os entes."),
  ]);

  /* ================= SÃO JOSÉ DOS PINHAIS ================= */

  A("sao-jose-dos-pinhais/lei-organica-de-sao-jose-dos-pinhais", [
    aprofundar(ROTEIRO_LOM, "Roteiro de estudo"),
    conferir("A **Lei Orgânica de São José dos Pinhais** no site da **Câmara Municipal** (texto consolidado): **número de vereadores**, **prazos**, **competências**, **política urbana** e **atribuições do Prefeito**."),
    aprofundar([
      "### O que cai em prova (modelo constitucional)",
      "- **Competências do Município** (CF, art. 30): **interesse local**, **transporte coletivo**, **educação infantil e ensino fundamental**, **saúde**, **ordenamento territorial** e **patrimônio histórico-cultural**.",
      "- **Plano diretor** obrigatório acima de **20 mil habitantes** (art. 182, § 1º).",
      "- **Limite da despesa da Câmara** (art. 29-A) e **limite da folha** (70% da receita).",
      "- **Imunidade material do vereador**: opiniões, palavras e votos, no exercício do mandato e **na circunscrição do Município** (art. 29, VIII).",
    ]),
    q("O vereador goza de inviolabilidade por suas opiniões, palavras e votos:", ["em todo o território nacional, sempre", "no exercício do mandato e na circunscrição do Município", "apenas em plenário", "se autorizado pela Mesa", "somente em reuniões de comissões"], "B", "CF, art. 29, VIII."),
    ce("Compete ao Município legislar sobre assuntos de interesse local e suplementar a legislação federal e a estadual no que couber.", "Certo", "CF, art. 30, I e II."),
    q("A Constituição exige plano diretor para cidades com mais de:", ["10 mil habitantes", "20 mil habitantes", "50 mil habitantes", "100 mil habitantes", "500 mil habitantes"], "B", "CF, art. 182, § 1º."),
  ]);

  A("sao-jose-dos-pinhais/estatuto-dos-servidores-de-sao-jose-dos-pinhais", [
    aprofundar(ROTEIRO_EST, "Roteiro de estudo"),
    conferir("O **estatuto dos servidores de São José dos Pinhais** (ou a lei vigente) no site da **Câmara Municipal** ou da **Prefeitura**: **prazos**, **licenças**, **penalidades** e **processo disciplinar**."),
    aprofundar([
      "### Modelo constitucional",
      "- **Concurso público** com validade de até **2 anos**, prorrogável uma vez (CF, art. 37, III).",
      "- **Cargos em comissão** (direção, chefia e assessoramento) e **funções de confiança** só para efetivos (art. 37, V).",
      "- **Teto**: subsídio do Prefeito (art. 37, XI).",
      "- **Acumulação**: exceções do art. 37, XVI, com compatibilidade de horários.",
    ]),
    q("Nos Municípios, o teto remuneratório dos servidores é:", ["o subsídio do Governador", "o subsídio do Prefeito", "o dos Ministros do STF em qualquer caso", "o dos vereadores", "o do Presidente da Câmara"], "B", "CF, art. 37, XI."),
    ce("As funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo.", "Certo", "CF, art. 37, V."),
  ]);

  /* ================= CÂMARAS MUNICIPAIS ================= */

  A("camaras-municipais/atribuicoes-da-camara-e-dos-vereadores", [
    aprofundar([
      "### Funções da Câmara",
      "- **Legislativa**: leis municipais, no limite do **interesse local**.",
      "- **Fiscalizadora** (CF, art. 31): **controle externo** da Administração municipal, com auxílio do **Tribunal de Contas**.",
      "- **Julgadora**: contas do Prefeito e **infrações político-administrativas** do Prefeito (DL 201/1967).",
      "- **Administrativa**: sua organização, **Mesa**, **polícia interna**, **servidores**.",
      "- **Investigativa**: **CPI** (art. 58, § 3º, por simetria).",
      "",
      "### Contas do Prefeito (art. 31)",
      "- A Câmara **julga** as contas **com parecer prévio do Tribunal de Contas**, que **só deixa de prevalecer por dois terços** dos vereadores.",
      "- As contas ficam **60 dias à disposição** de qualquer contribuinte, para exame e apreciação, que pode **questionar a legitimidade**.",
      "",
      "### Cassação do Prefeito: rito do art. 5º do DL 201/1967",
      "1. **Denúncia escrita** por qualquer eleitor, recebida pelo **Presidente da Câmara**; o **plenário** decide, por **maioria dos presentes**, se a recebe;",
      "2. **Comissão processante** de **três vereadores**, sorteados entre os desimpedidos;",
      "3. **Notificação** do denunciado, com **cópia**, para **defesa prévia em dez dias**;",
      "4. **Provas**, **depoimentos**, **parecer final** da comissão;",
      "5. **Julgamento** em sessão, com **votação nominal**; a **cassação** exige **dois terços** dos membros da Câmara;",
      "6. O processo deve ser **concluído em noventa dias**, contados da notificação do acusado; **não concluído**, **arquiva-se**.",
      "",
      "### Vereador: direitos e deveres",
      "- **Inviolabilidade** por opiniões, palavras e votos, **no exercício do mandato** e **na circunscrição** do Município (art. 29, VIII).",
      "- **Proibições e incompatibilidades** semelhantes às dos parlamentares (art. 29, IX, c/c art. 54): contratar com o Município (salvo cláusulas uniformes), ocupar cargo de confiança, patrocinar causa contra o Município, entre outras.",
      "- **Perda do mandato**: por **infração às proibições**, **quebra de decoro**, **faltas excessivas** (mais de um terço das sessões ordinárias, salvo licença ou missão autorizada), **perda ou suspensão dos direitos políticos**, entre outras (por simetria com o art. 55).",
    ]),
    conferir("O **rol de atribuições** da Câmara e as **causas de perda de mandato** na **Lei Orgânica** e no **Regimento Interno** do seu município."),
    q("Segundo a Constituição Federal, o parecer prévio emitido pelo Tribunal de Contas sobre as contas que o Prefeito deve anualmente prestar só deixará de prevalecer por decisão de:", ["maioria simples da Câmara", "dois terços dos membros da Câmara Municipal", "maioria absoluta do Tribunal", "um terço dos vereadores", "decisão do Prefeito"], "B", "CF, art. 31, § 2º."),
    ce("Pelo rito do Decreto-Lei 201/1967, a cassação do mandato do Prefeito exige o voto de dois terços dos membros da Câmara.", "Certo", "Art. 5º, VII."),
    q("A comissão processante, no processo de cassação do Prefeito pelo DL 201/1967, é composta por:", ["cinco vereadores indicados pelo Prefeito", "três vereadores sorteados entre os desimpedidos", "todos os vereadores", "o Presidente da Câmara, sozinho", "dois vereadores e um juiz"], "B", "Art. 5º, II."),
    ce("As contas do Município ficam, durante sessenta dias, anualmente, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade.", "Certo", "CF, art. 31, § 3º."),
  ]);

  A("camaras-municipais/processo-legislativo-municipal", [
    aprofundar([
      "### Fases (simetria com o processo legislativo federal)",
      "1. **Iniciativa**: vereador, comissão, Prefeito e **cidadãos** (**5% do eleitorado**, art. 29, XIII). **Privativa do Prefeito**: cargos, regime dos servidores, organização administrativa, orçamento.",
      "2. **Discussão e votação**: nas **comissões** (parecer) e no **plenário**. **Quórum**, por simetria: **maioria simples** (presente a **maioria absoluta**), **maioria absoluta** ou **dois terços**, conforme a matéria (art. 47).",
      "3. **Sanção ou veto** (Prefeito, **15 dias úteis**; silêncio = **sanção tácita**), **veto total ou parcial**, **por inconstitucionalidade ou contrariedade ao interesse público**.",
      "4. **Veto**: apreciado pela Câmara e **rejeitado por maioria absoluta**; mantido, o projeto é arquivado; **derrubado**, a lei é **enviada ao Prefeito** para promulgação em **48 horas**, e, se ele **não a promulgar**, o **Presidente da Câmara** a promulga.",
      "5. **Promulgação e publicação**.",
      "",
      "### Urgência",
      "Projetos de **iniciativa do Prefeito** podem ter **urgência**, e a Câmara tem **prazo** para deliberar, **sob pena de sobrestamento** da pauta, conforme a **Lei Orgânica**.",
      "",
      "### Espécies",
      "**Emenda à Lei Orgânica**, **leis complementares e ordinárias**, **decretos legislativos** e **resoluções**. **Decretos legislativos e resoluções** **não** passam por **sanção**.",
    ]),
    conferir("**Prazos, quóruns e regras de urgência** na **Lei Orgânica** e no **Regimento Interno** do seu município: **variam**."),
    q("O Chefe do Executivo, por simetria com a Constituição Federal, tem para sancionar ou vetar um projeto o prazo de:", ["5 dias úteis", "10 dias úteis", "15 dias úteis", "30 dias", "60 dias"], "C", "CF, art. 66, § 1º. O silêncio importa sanção tácita."),
    ce("A rejeição do veto exige, por simetria com a Constituição Federal, o voto da maioria absoluta dos membros da Câmara.", "Certo", "CF, art. 66, § 4º."),
    q("Não se sujeitam à sanção do Chefe do Executivo:", ["as leis ordinárias", "os decretos legislativos e as resoluções", "as leis complementares", "as leis orçamentárias", "as leis delegadas"], "B", "São atos de competência exclusiva do Legislativo."),
  ]);

  A("camaras-municipais/regimento-interno-da-camara", [
    aprofundar([
      "### O que é",
      "O **Regimento Interno** é o **ato normativo** pelo qual a Câmara **organiza o seu funcionamento**. Em regra, é aprovado por **resolução**, de **competência exclusiva** da Câmara, e **subordina-se** à **Constituição** e à **Lei Orgânica**.",
      "",
      "### O que regula",
      "- **Mesa Diretora** (Presidente, Vice-Presidentes e Secretários), **eleição** e **mandato**;",
      "- **Comissões**: **permanentes** e **temporárias** (especiais, de inquérito, processantes), **composição proporcional** aos partidos ou blocos;",
      "- **Sessões**: **ordinárias**, **extraordinárias**, **solenes** e **secretas**; **sessão legislativa** e **recesso**;",
      "- **Ordem dos trabalhos**: **expediente**, **ordem do dia**, **explicações pessoais**;",
      "- **Tramitação** dos projetos, **pareceres**, **emendas**, **urgência**;",
      "- **Quóruns e formas de votação**: **simbólica**, **nominal** e **secreta**, nos casos legais;",
      "- **Disciplina parlamentar**, **decoro** e **penalidades** (advertência, perda da palavra, suspensão e outras);",
      "- **Polícia interna** e **administração** da Câmara.",
      "",
      "### Regras gerais de quórum (por simetria)",
      "- **Abertura** das sessões e **deliberações**: **presença da maioria absoluta** dos membros;",
      "- **Aprovação**, em regra: **maioria simples** (dos presentes);",
      "- Casos de **maioria absoluta** e de **dois terços**: previstos na **Lei Orgânica** e no regimento (por exemplo, a aprovação e a emenda da própria **Lei Orgânica** exigem **dois terços**).",
      "",
      "### Hierarquia",
      "**Regimento Interno** **não pode contrariar** a **Lei Orgânica** nem a **Constituição**. **Matéria interna corporis** (disciplina interna do Legislativo) **tem controle judicial restrito**.",
      "",
      "### Como estudar",
      "Leia o **regimento do município do concurso**, destacando **Mesa**, **comissões**, **quóruns**, **sessões** e **processo de votação**.",
    ]),
    conferir("O **Regimento Interno** da Câmara Municipal do município da prova: **composição da Mesa**, **comissões permanentes**, **quóruns** e **ordem dos trabalhos**."),
    q("O Regimento Interno da Câmara Municipal:", ["pode contrariar a Lei Orgânica", "organiza o funcionamento da Casa, subordinando-se à Constituição e à Lei Orgânica", "é editado pelo Prefeito", "tem força de lei complementar federal", "dispensa quórum"], "B", "Aprovado, em regra, por resolução da Câmara."),
    ce("As comissões da Câmara podem ser permanentes ou temporárias, como as comissões especiais, de inquérito e processantes.", "Certo", "A composição respeita, em regra, a proporcionalidade partidária."),
    q("Em regra, a abertura da sessão e a deliberação dependem da presença:", ["de um terço dos vereadores", "da maioria absoluta dos membros da Câmara", "de dois terços dos vereadores", "apenas do Presidente", "de todos os vereadores"], "B", "Por simetria com o art. 47 da CF."),
  ]);
})();

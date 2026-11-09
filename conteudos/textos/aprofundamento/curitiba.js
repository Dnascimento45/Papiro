/* Aprofundamento · Bloco C: Legislação de Curitiba (Lei Orgânica e Estatuto dos Servidores).
   Acrescenta texto e questões DEPOIS do que já existe em textos/legislacao-local.js.

   IMPORTANTE: os artigos da lei local NÃO estão aqui (não foi possível obter o texto integral em fonte oficial legível).
   Este arquivo aprofunda o MODELO que a lei local segue: a Constituição Federal (arts. 29 a 31, 37 a 41, 156), o DL 201/1967,
   a Lei 8.112/1990 como comparação e as súmulas do STF. Fatos locais confirmados em fonte aberta:
   - Lei Orgânica do Município de Curitiba: 5 de abril de 1990, com emendas e revisão ampla em 2024 (conferir o texto consolidado).
   - Estatuto dos Funcionários Públicos Municipais de Curitiba: Lei 1.656/1958; o capítulo da estabilidade aparece como revogado pela Lei 16.037/2022.
   Questões aqui só cobram o modelo constitucional, que vale em qualquer município. */
(() => {
  const Q = "Questão autoral de fixação";
  const L = (caminho, blocos) => ESTUDO.assunto(`bloco-c/curitiba/lei-organica-do-municipio-de-curitiba/${caminho}`, { livros: LIVROS_LOM, blocos });
  const E = (caminho, blocos) => ESTUDO.assunto(`bloco-c/curitiba/estatuto-dos-servidores-de-curitiba/${caminho}`, { livros: LIVROS_EST, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando (modelo constitucional)", texto });
  const atencao = (texto, titulo = "Pegadinha de prova") => ({ tipo: "atencao", titulo, texto });
  const conferir = (texto) => ({ tipo: "atencao", titulo: "Na lei de Curitiba, confira", texto });
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

  const LIVROS_LOM = [
    { titulo: "Constituição Federal, arts. 18, 29 a 31 e 156", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "O modelo da Lei Orgânica: leia o art. 29 inteiro." },
    { titulo: "Câmara Municipal de Curitiba · Lei Orgânica", url: "https://www.curitiba.pr.leg.br", nota: "Texto consolidado da Lei Orgânica, com as emendas. Estude por ele." },
    { titulo: "Decreto-Lei 201/1967 · Responsabilidade de prefeitos e vereadores", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0201.htm" },
    { titulo: "Leis Municipais · Curitiba", url: "https://leismunicipais.com.br/prefeitura/pr/curitiba", nota: "Consulta à legislação municipal." },
  ];
  const LIVROS_EST = [
    { titulo: "Constituição Federal, arts. 37 a 41 (Administração Pública e Servidores)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    { titulo: "Lei 8.112/1990 (comparação)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm", nota: "Serve de modelo e de contraste para o estatuto municipal." },
    { titulo: "Câmara Municipal de Curitiba · Legislação", url: "https://www.curitiba.pr.leg.br", nota: "Busque a Lei 1.656/1958 em versão consolidada, e observe o que aparece como revogado." },
    { titulo: "Leis Municipais · Curitiba", url: "https://leismunicipais.com.br/prefeitura/pr/curitiba" },
  ];

  /* ================= LEI ORGÂNICA ================= */

  L("organizacao-do-municipio-e-competencias", [
    aprofundar([
      "### Município como ente federado",
      "A **República Federativa** é formada pela **união indissolúvel** de **União, Estados, DF e Municípios, todos autônomos** (CF, art. 18). A autonomia municipal tem quatro dimensões: **política** (eleição de Prefeito e vereadores), **normativa** (**Lei Orgânica** e leis próprias), **administrativa** e **financeira**.",
      "",
      "### Lei Orgânica (CF, art. 29)",
      "O Município se rege por **lei orgânica**, votada em **dois turnos**, com **interstício mínimo de dez dias**, e aprovada por **dois terços dos membros da Câmara**, que a promulga, **atendidos os princípios** da CF e da Constituição do Estado. A **promulgação** é **da Câmara**, e não do Prefeito: **não há sanção** da Lei Orgânica.",
      "",
      "### Competências (art. 30)",
      "Compete ao Município: **legislar sobre assuntos de interesse local**; **suplementar** a legislação federal e a estadual no que couber; **instituir e arrecadar tributos** e aplicar suas rendas; **criar, organizar e suprimir distritos**, observada a legislação estadual; **organizar e prestar**, diretamente ou sob regime de concessão ou permissão, os **serviços públicos de interesse local**, incluído o de **transporte coletivo**, que tem **caráter essencial**; manter, com a cooperação técnica e financeira da União e do Estado, programas de **educação infantil e de ensino fundamental**; prestar, com a cooperação da União e do Estado, **serviços de atendimento à saúde da população**; promover o **ordenamento territorial**, mediante **planejamento e controle do uso, do parcelamento e da ocupação do solo urbano**; promover a **proteção do patrimônio histórico-cultural local**.",
      "",
      "### Competência comum (art. 23)",
      "O Município participa das competências **comuns** (saúde, educação, proteção ao meio ambiente, patrimônio, combate à pobreza). **Interesse local** não é interesse **exclusivo**: é o **predominante**.",
      "",
      "### Plano diretor (art. 182)",
      "**Obrigatório** para cidades com **mais de 20 mil habitantes**; **instrumento básico** da política de desenvolvimento e expansão urbana, **aprovado pela Câmara**.",
      "",
      "### Fato local confirmado",
      "A **Lei Orgânica do Município de Curitiba** é de **5 de abril de 1990** e passou por **emendas** e por uma **revisão ampla em 2024**. Notícias indicam que a alteração pode ser proposta pelo **Prefeito**, por **um terço dos vereadores** ou por **iniciativa popular** (5% do eleitorado). **Confira no texto consolidado.**",
    ]),
    conferir("O texto consolidado da **Lei Orgânica de Curitiba** (Câmara Municipal): numeração dos artigos **após a revisão de 2024**, rol de competências do Município e as regras sobre o **Plano Diretor**. Os concursos cobram a **letra** da lei local."),
    q("Segundo a Constituição Federal, a Lei Orgânica do Município é votada em dois turnos, com interstício mínimo de dez dias, e aprovada por:", ["maioria simples dos vereadores", "dois terços dos membros da Câmara Municipal", "três quintos dos membros da Câmara", "maioria absoluta, com sanção do Prefeito", "plebiscito"], "B", "CF, art. 29, caput. É promulgada pela Câmara."),
    ce("A Lei Orgânica do Município é objeto de sanção ou veto do Prefeito.", "Errado", "É promulgada pela Câmara Municipal, sem sanção."),
    q("Compete ao Município, segundo o art. 30 da Constituição Federal:", ["legislar sobre direito penal", "legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber", "legislar sobre direito civil", "criar tribunais", "emitir moeda"], "B", "CF, art. 30, I e II."),
    ce("O transporte coletivo urbano é serviço público de interesse local, de caráter essencial, cuja organização compete ao Município.", "Certo", "CF, art. 30, V."),
    q("O Plano Diretor é obrigatório, segundo o art. 182 da Constituição Federal, para cidades com mais de:", ["5 mil habitantes", "10 mil habitantes", "20 mil habitantes", "50 mil habitantes", "100 mil habitantes"], "C", "CF, art. 182, § 1º."),
  ]);

  L("poder-executivo-prefeito-e-vice-prefeito", [
    aprofundar([
      "### Eleição e mandato (CF, art. 29, I a III)",
      "- **Prefeito e Vice-Prefeito** são eleitos **na mesma data** (primeiro domingo de outubro do ano anterior ao término do mandato), para mandato de **quatro anos**, com **posse em 1º de janeiro**.",
      "- Em **Municípios com mais de 200 mil eleitores**, pode haver **segundo turno**, se nenhum candidato obtiver **maioria absoluta** de votos válidos (art. 29, II, combinado com o art. 77). **Curitiba** está nessa situação.",
      "- **Reeleição**: **uma única vez** para o período subsequente (CF, art. 14, § 5º).",
      "",
      "### Subsídio (art. 29, V)",
      "O subsídio do Prefeito, do Vice e dos secretários municipais é **fixado por lei de iniciativa da Câmara**, observado o **teto** do art. 37, XI: **o subsídio do Prefeito** é o **limite** para a remuneração dos servidores municipais.",
      "",
      "### Julgamento e responsabilidade",
      "- **Foro**: o Prefeito é **julgado pelo Tribunal de Justiça** (art. 29, X).",
      "- **Decreto-Lei 201/1967**: define dois tipos de infração:",
      "  - **Crimes de responsabilidade** (art. 1º): **julgados pelo Poder Judiciário**, **independentemente** de pronunciamento da Câmara (por exemplo, apropriar-se de bens ou rendas públicas, utilizar-se indevidamente de bens, desviar verbas). Podem acarretar **perda do cargo** e inabilitação.",
      "  - **Infrações político-administrativas** (art. 4º): **julgadas pela Câmara de Vereadores**, com **cassação do mandato** (por exemplo, impedir o exame de contas, descumprir o orçamento, omitir-se na defesa de bens do Município).",
      "- **Prestação de contas**: o Prefeito presta contas à Câmara, que as julga com **parecer prévio do Tribunal de Contas** (art. 31).",
      "",
      "### Atribuições típicas (simetria com a CF, art. 84)",
      "**Representar** o Município; **iniciar** o processo legislativo; **sancionar, promulgar e fazer publicar** as leis e **vetar**; **expedir decretos e regulamentos**; **nomear e exonerar** servidores; **prestar contas**; **enviar** à Câmara o **PPA, a LDO e a LOA**.",
    ]),
    conferir("As **atribuições** e as **vedações** do Prefeito na **Lei Orgânica de Curitiba**, o regime de **ausências do Município** e de **substituição** pelo Vice-Prefeito, e as hipóteses de **cassação** da LOM, que costumam repetir o DL 201/1967."),
    q("O Prefeito é julgado, pela prática de crime comum, perante:", ["a Câmara Municipal", "o Tribunal de Justiça", "o Superior Tribunal de Justiça", "o juiz de primeira instância, em qualquer caso", "o Tribunal de Contas"], "B", "CF, art. 29, X."),
    ce("Pelo Decreto-Lei 201/1967, as infrações político-administrativas do Prefeito são julgadas pela Câmara de Vereadores, e os crimes de responsabilidade, pelo Poder Judiciário.", "Certo", "Dois regimes de apuração."),
    q("O teto remuneratório dos servidores do Município é:", ["o subsídio do Governador", "o subsídio do Prefeito", "o subsídio dos Ministros do STF, sempre", "o subsídio dos vereadores", "dois salários mínimos"], "B", "CF, art. 37, XI."),
    ce("Em Municípios com mais de 200 mil eleitores, pode haver segundo turno na eleição para Prefeito.", "Certo", "CF, art. 29, II."),
  ]);

  L("poder-legislativo-camara-municipal", [
    aprofundar([
      "### Composição (CF, art. 29, IV)",
      "O número de vereadores é **proporcional à população** do Município, entre **9 e 55**. Eleitos para mandato de **quatro anos**, pelo sistema **proporcional**.",
      "",
      "### Subsídio dos vereadores (art. 29, VI e VII)",
      "Fixado **pela própria Câmara**, em **cada legislatura para a subsequente** (**princípio da anterioridade**), observados os critérios da Lei Orgânica. O limite é um **percentual do subsídio dos deputados estaduais**, que **cresce com a população**: de **20%** (Municípios de até 10 mil habitantes) até **75%** (mais de 500 mil habitantes). Além disso, o **total da despesa com subsídio** dos vereadores **não pode ultrapassar 5% da receita do Município**.",
      "",
      "### Limites da despesa da Câmara (art. 29-A)",
      "O **total** da despesa do Legislativo municipal (**incluídos os subsídios** e **excluídos os inativos**) é limitado a um **percentual do somatório da receita tributária e das transferências** do exercício anterior, **conforme a população**: de **7%** (até 100 mil habitantes) a **3,5%** (mais de 8 milhões). Para **500.001 a 3 milhões** de habitantes, o limite é de **4,5%**. A **folha de pagamento** da Câmara não pode passar de **70%** de sua receita.",
      "",
      "### Imunidades e proibições (art. 29, VIII e IX)",
      "- **Inviolabilidade**: o vereador é **inviolável por suas opiniões, palavras e votos**, **no exercício do mandato** e **na circunscrição do Município**. **Não há** imunidade **processual** e **prisional** como a dos parlamentares federais.",
      "- **Proibições e incompatibilidades**: as **mesmas dos parlamentares** federais, **no que couber** (art. 54): por exemplo, firmar contratos com o Município, salvo cláusulas uniformes, e ocupar cargo comissionado.",
      "",
      "### Funções da Câmara",
      "**Legislativa**, **fiscalizadora** (controle externo, com o Tribunal de Contas, art. 31), **de assessoramento**, **julgadora** (infrações político-administrativas do Prefeito) e **administrativa**.",
      "",
      "### Fato local",
      "A Câmara Municipal de Curitiba tem **38 vereadores** (número que a imprensa associa ao quórum de um terço, 13, para propor emenda à Lei Orgânica). **Confira** na fonte oficial.",
    ]),
    conferir("O **regimento interno** da Câmara Municipal de Curitiba (Mesa, comissões, sessões, quórum), o **número de vereadores** e o regime de **licença** e de **suplência** na **Lei Orgânica** local."),
    q("O vereador é inviolável por suas opiniões, palavras e votos:", ["em qualquer lugar do País, sempre", "no exercício do mandato e na circunscrição do Município", "apenas em plenário", "somente se autorizado pela Câmara", "apenas quando relator de projeto"], "B", "CF, art. 29, VIII."),
    ce("O número de vereadores de cada Município é proporcional à sua população, observados os limites constitucionais de 9 a 55.", "Certo", "CF, art. 29, IV."),
    q("O subsídio dos vereadores é fixado:", ["pelo Prefeito, em decreto", "em cada legislatura para a subsequente, observados os limites constitucionais", "pelo Governador", "pelo Tribunal de Contas", "livremente, a cada ano"], "B", "CF, art. 29, VI: princípio da anterioridade."),
    ce("A folha de pagamento da Câmara Municipal, incluído o subsídio dos vereadores, não pode ultrapassar 70% de sua receita.", "Certo", "CF, art. 29-A, § 1º."),
  ]);

  L("processo-legislativo-municipal", [
    aprofundar([
      "### Espécies normativas (simetria com o art. 59 da CF)",
      "**Emenda à Lei Orgânica**, **leis complementares**, **leis ordinárias**, **leis delegadas**, **decretos legislativos** e **resoluções**. A **forma** segue o modelo federal, por **simetria**, embora a **Lei Orgânica** local defina os detalhes.",
      "",
      "### Iniciativa",
      "- **Concorrente**: **vereadores**, **comissões da Câmara**, **Prefeito** e **cidadãos**.",
      "- **Iniciativa popular** (art. 29, XIII): projetos de lei de **interesse específico do Município, da cidade ou de bairros**, por manifestação de, pelo menos, **5% do eleitorado**.",
      "- **Iniciativa privativa do Prefeito** (por simetria com o art. 61, § 1º): **criação de cargos e funções**, **regime jurídico dos servidores**, **organização administrativa**, **orçamento** (PPA, LDO e LOA), **criação de órgãos**. Projeto de vereador sobre essas matérias tem **vício de iniciativa** (inconstitucionalidade formal).",
      "- **Iniciativa da Câmara**: fixação do **subsídio** do Prefeito, Vice e secretários, e da **remuneração dos vereadores**.",
      "",
      "### Sanção e veto (por simetria com o art. 66)",
      "O Prefeito tem **15 dias úteis** para **sancionar ou vetar**, no todo ou em parte. O **silêncio** equivale a **sanção tácita**. O **veto** deve ser **apreciado** pela Câmara; a **rejeição** exige **maioria absoluta** dos vereadores. **Sanção, promulgação e publicação** completam a lei. **Prazos e quóruns locais** estão na **Lei Orgânica**: **confira**.",
      "",
      "### Emenda à Lei Orgânica",
      "Segue o rito da **Lei Orgânica** (dois turnos, **dois terços**) e **não está sujeita a sanção** do Prefeito, sendo promulgada pela **Mesa da Câmara**.",
      "",
      "### Controle",
      "Normas de **iniciativa** e de **processo legislativo federais** aplicam-se aos Estados e Municípios por **simetria**, e o **STF** reconhece o vício de iniciativa mesmo se o projeto foi sancionado (a **sanção não convalida** o vício).",
    ]),
    atencao("A **sanção do Prefeito não convalida** vício de iniciativa. A emenda à Lei Orgânica **não passa por sanção**. A **iniciativa popular** exige **5% do eleitorado**."),
    q("É de iniciativa privativa do Chefe do Executivo municipal, por simetria com a Constituição Federal, o projeto de lei que:", ["denomine uma rua", "disponha sobre o regime jurídico e a criação de cargos dos servidores municipais", "institua o Dia do Município", "conceda título honorífico", "altere o regimento interno da Câmara"], "B", "CF, art. 61, § 1º, II, por simetria."),
    ce("A iniciativa popular de projeto de lei municipal exige manifestação de, pelo menos, cinco por cento do eleitorado.", "Certo", "CF, art. 29, XIII."),
    ce("A sanção do Prefeito convalida o vício de iniciativa de projeto de lei de autoria de vereador sobre matéria de iniciativa privativa do Executivo.", "Errado", "Entendimento do STF: o vício de iniciativa não é sanado pela sanção."),
    q("O prazo de que dispõe o Chefe do Executivo para sancionar ou vetar o projeto, por simetria com a Constituição Federal, é de:", ["5 dias úteis", "10 dias úteis", "15 dias úteis", "30 dias corridos", "45 dias"], "C", "CF, art. 66, § 1º. Confira o prazo na Lei Orgânica."),
  ]);

  L("administracao-publica-municipal", [
    aprofundar([
      "### Princípios (CF, art. 37, caput)",
      "**Legalidade, impessoalidade, moralidade, publicidade e eficiência** (LIMPE). Aplicam-se à **administração direta e indireta** de **todos os Poderes** e entes.",
      "",
      "### Regras de pessoal (art. 37)",
      "- **Concurso público** para **cargos e empregos** (II); **validade de até 2 anos**, prorrogável **uma vez** por igual período (III).",
      "- **Cargos em comissão**: **direção, chefia e assessoramento**; **funções de confiança**: **exclusivamente servidores efetivos** (V).",
      "- **Direito de greve** (VII) nos termos de lei específica; **reserva para pessoas com deficiência** (VIII); **contratação temporária** por excepcional interesse público (IX).",
      "- **Revisão geral anual** (X), na mesma data e sem distinção de índices; **teto** (XI); **vedada vinculação** e equiparação (XIII); **irredutibilidade** (XV).",
      "- **Acumulação** de cargos (XVI): professor, professor e técnico/científico, e dois cargos de saúde, com compatibilidade de horários.",
      "- **Improbidade** (§ 4º): suspensão dos direitos políticos, perda da função, indisponibilidade dos bens e ressarcimento (Lei 8.429/1992, alterada pela Lei 14.230/2021).",
      "- **Publicidade** dos atos: **caráter educativo, informativo ou de orientação social**, **sem nomes, símbolos ou imagens** que caracterizem **promoção pessoal** (§ 1º).",
      "- **Responsabilidade civil do Estado** (§ 6º): **objetiva**, com **direito de regresso** contra o agente, em caso de **dolo ou culpa**.",
      "",
      "### Administração direta e indireta no Município",
      "- **Direta**: **Prefeitura e secretarias**.",
      "- **Indireta**: **autarquias**, **fundações públicas**, **empresas públicas** e **sociedades de economia mista**, criadas ou autorizadas **por lei específica** (art. 37, XIX), com **lei complementar** para definir as áreas de atuação das fundações.",
      "- Em Curitiba existem, por exemplo, **autarquias e entidades** como o **IPMC** (previdência dos servidores) e o **IPPUC** (planejamento urbano), e empresas como a **URBS** (transporte coletivo). **Confira** o rol atual na **lei de organização administrativa** do Município.",
    ]),
    conferir("A **lei de estrutura administrativa** e a **Lei Orgânica** de Curitiba: **secretarias**, **autarquias**, **fundações** e **empresas** vigentes, e as regras locais de **licitação, contratação e controle interno**."),
    q("A criação de autarquia exige:", ["decreto do Prefeito", "lei específica", "portaria do secretário", "resolução da Câmara", "ato da Mesa"], "B", "CF, art. 37, XIX."),
    ce("As funções de confiança só podem ser exercidas por servidores ocupantes de cargo efetivo, e os cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento.", "Certo", "CF, art. 37, V."),
    q("A responsabilidade civil do Estado por danos causados por seus agentes, segundo o art. 37, § 6º, é:", ["subjetiva, sempre", "objetiva, com direito de regresso contra o agente em caso de dolo ou culpa", "inexistente", "só do agente", "só da pessoa jurídica de direito privado"], "B", "Teoria do risco administrativo."),
    ce("A publicidade dos atos, programas, obras e serviços deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal de autoridades.", "Certo", "CF, art. 37, § 1º."),
  ]);

  L("servidores-municipais-na-lei-organica", [
    aprofundar([
      "### Regime jurídico (CF, art. 39)",
      "A Constituição exige que cada ente institua **conselho de política de administração e remuneração de pessoal**. Sobre o **regime jurídico único**, a redação do **art. 39** foi alterada pela **EC 19/1998** e o **STF** discutiu a validade dessa mudança (**ADI 2.135**): **confira** a decisão e o regime adotado por Curitiba (estatutário, na regra dos servidores efetivos).",
      "",
      "### Direitos sociais do art. 7º aplicados aos servidores (art. 39, § 3º)",
      "**Salário mínimo** (IV), **décimo terceiro** (VIII), **remuneração do trabalho noturno superior à do diurno** (IX), **salário-família** (XII), **jornada de oito horas diárias e quarenta e quatro semanais** (XIII), **repouso semanal remunerado** (XV), **hora extra com acréscimo de 50%** (XVI), **férias com acréscimo de um terço** (XVII), **licença à gestante de 120 dias** (XVIII), **licença-paternidade** (XIX), **proteção do mercado de trabalho da mulher** (XX), **redução dos riscos do trabalho** (XXII) e **proibição de diferenças salariais** por sexo, idade, cor ou estado civil (XXX).",
      "",
      "### Estabilidade (art. 41)",
      "- **3 anos de efetivo exercício**, com **avaliação especial de desempenho** por comissão (§ 4º).",
      "- **Perda do cargo**: **sentença judicial transitada em julgado**; **processo administrativo** com ampla defesa; **avaliação periódica de desempenho**, na forma de lei complementar, com ampla defesa (§ 1º).",
      "- **Reintegração** (§ 2º) e **disponibilidade** com remuneração **proporcional** ao tempo de serviço (§ 3º).",
      "",
      "### Aposentadoria (art. 40)",
      "O servidor efetivo tem **regime próprio de previdência**, de **caráter contributivo e solidário**. A **EC 103/2019** fixou **idade mínima** e outras regras para os entes federativos (os Municípios podem adotar regras próprias, **conferir**). Em Curitiba, o regime próprio é gerido pelo **IPMC**.",
      "",
      "### Fato local confirmado",
      "O capítulo da **estabilidade e disponibilidade** do Estatuto dos Funcionários de Curitiba (Lei 1.656/1958) aparece como **revogado pela Lei 16.037/2022**: **estude a estabilidade pela Constituição** e pela **lei municipal vigente**.",
    ]),
    conferir("Os **dispositivos da Lei Orgânica** de Curitiba sobre servidores: **regime jurídico**, **carreiras**, **planos de cargos**, **piso**, **política de remuneração** e **previdência municipal**, no texto consolidado."),
    q("Pelo art. 41 da Constituição Federal, o servidor público nomeado para cargo de provimento efetivo adquire estabilidade após:", ["1 ano de exercício", "2 anos de exercício", "3 anos de efetivo exercício, com avaliação especial de desempenho", "5 anos de exercício", "10 anos de exercício"], "C", "CF, art. 41, caput e § 4º."),
    ce("O servidor estável só perde o cargo em virtude de sentença judicial transitada em julgado, de processo administrativo em que lhe seja assegurada ampla defesa ou de procedimento de avaliação periódica de desempenho.", "Certo", "CF, art. 41, § 1º."),
    q("A licença à gestante, aplicável aos servidores titulares de cargo público por força do art. 39, § 3º, da Constituição, é de:", ["60 dias", "90 dias", "120 dias", "150 dias", "180 dias, sempre"], "C", "CF, art. 7º, XVIII."),
    ce("Extinto o cargo ou declarada sua desnecessidade, o servidor estável ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até o seu adequado aproveitamento.", "Certo", "CF, art. 41, § 3º."),
  ]);

  L("tributacao-financas-e-orcamento-municipal", [
    aprofundar([
      "### Impostos municipais (CF, art. 156)",
      "- **IPTU**: propriedade predial e territorial urbana. Pode ser **progressivo** em razão do **valor** do imóvel e ter **alíquotas diferentes** por localização e uso; pode ser **progressivo no tempo** para o solo urbano **não edificado, subutilizado ou não utilizado** (art. 182, § 4º).",
      "- **ITBI**: transmissão **inter vivos**, **a qualquer título, por ato oneroso**, de **bens imóveis** por natureza ou acessão física e de direitos reais sobre imóveis (**exceto garantia**), e cessão de direitos a sua aquisição. **Não incide** na incorporação de bens ao capital de pessoa jurídica nem na fusão, incorporação, cisão ou extinção, **salvo** se a atividade preponderante for **compra e venda ou locação** de imóveis.",
      "- **ISS**: **serviços de qualquer natureza**, não compreendidos no ICMS, **definidos em lei complementar** (**LC 116/2003**), com alíquotas **entre 2% e 5%** (mínimo da EC 37/2002 e máximo da LC 116).",
      "",
      "### Outras receitas",
      "**Taxas** (poder de polícia e serviços específicos e divisíveis), **contribuição de melhoria** (decorrente de obra pública) e **contribuição para custeio da iluminação pública** (**COSIP**, art. 149-A). **Transferências**: **100% do IR retido na fonte** dos servidores municipais (art. 158, I); **50% do ITR** dos imóveis no Município; **50% do IPVA** de veículos licenciados no Município; **25% do ICMS** (três quartos pelo **valor adicionado** e até um quarto conforme lei estadual: no **Paraná**, o **ICMS ecológico**, entre outros critérios); **FPM** (Fundo de Participação dos Municípios, art. 159).",
      "",
      "### Orçamento",
      "**PPA, LDO e LOA**, de iniciativa do **Prefeito**; **prazos** definidos na **Lei Orgânica**. Segue o regime do **art. 165** da CF e da **LRF** (limite de **60%** da RCL para pessoal, sendo **54% para o Executivo** e **6% para o Legislativo**).",
      "",
      "### Fiscalização (art. 31)",
      "**Controle externo** pela **Câmara**, com auxílio do **Tribunal de Contas**. No Paraná, o **Tribunal de Contas do Estado (TCE-PR)** fiscaliza os Municípios (a Constituição **veda** a criação de novos **tribunais ou conselhos de contas municipais**, art. 31, § 4º). O **parecer prévio** do TCE sobre as contas do Prefeito **só deixa de prevalecer** por **decisão de dois terços** da Câmara. As **contas ficam à disposição de qualquer contribuinte**, durante **60 dias**, para exame e apreciação.",
    ]),
    conferir("As **alíquotas**, **isenções** e **prazos** do **IPTU, ISS e ITBI** na legislação tributária de Curitiba (**Código Tributário Municipal**) e os **prazos** do orçamento na **Lei Orgânica**."),
    q("Compete ao Município instituir o imposto sobre:", ["a propriedade de veículos automotores", "a transmissão inter vivos, a título oneroso, de bens imóveis, e os serviços de qualquer natureza definidos em lei complementar", "a circulação de mercadorias", "a renda das pessoas jurídicas", "as operações financeiras"], "B", "CF, art. 156: IPTU, ITBI e ISS."),
    ce("O parecer prévio emitido pelo Tribunal de Contas sobre as contas do Prefeito só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal.", "Certo", "CF, art. 31, § 2º."),
    q("Pertence aos Municípios o produto da arrecadação do imposto da União sobre a renda incidente na fonte sobre rendimentos pagos, a qualquer título, por eles, suas autarquias e fundações, em percentual de:", ["25%", "50%", "75%", "100%", "10%"], "D", "CF, art. 158, I."),
    ce("A Constituição Federal permite que os Municípios criem Tribunais de Contas municipais.", "Errado", "Art. 31, § 4º: é vedada a criação de Tribunais, Conselhos ou órgãos de Contas Municipais."),
  ]);

  /* ================= ESTATUTO DOS SERVIDORES ================= */

  E("provimento-nomeacao-posse-e-exercicio", [
    aprofundar([
      "### Modelo constitucional (CF, art. 37)",
      "- O acesso a **cargo efetivo** é por **concurso público** de provas ou de provas e títulos; **validade de até 2 anos**, prorrogável **uma vez**; **prioridade** do aprovado dentro do prazo (art. 37, II a IV).",
      "- **Nomeação para cargo em comissão**: livre nomeação e exoneração.",
      "- **Súmulas do STF** úteis: **Súmula 683** (o limite de idade para a inscrição em concurso público só se legitima quando possa ser justificado pela natureza das atribuições do cargo); **Súmula 15** (dentro do prazo de validade do concurso, o candidato aprovado tem direito à nomeação quando o cargo for preenchido sem observância da classificação); **Súmula Vinculante 44** (só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público); **SV 43** (é inconstitucional toda modalidade de provimento que propicie ao servidor investir-se, sem prévia aprovação em concurso, em cargo que não integra a carreira na qual anteriormente investido).",
      "",
      "### Comparação com a Lei 8.112",
      "A Lei 8.112 fixa **posse em 30 dias** e **exercício em 15 dias**, e exige **inspeção médica**. Estatutos antigos como o de Curitiba (Lei **1.656/1958**) trazem **seções específicas sobre nomeação, posse e exercício**; os **prazos** devem ser lidos **na lei local**.",
      "",
      "### Estrutura do estatuto (índice conferido em fonte aberta)",
      "Título I: **conceitos** (funcionário, cargo público, **cargos de carreira e isolados**, classe, carreira, quadro). Título II: **provimento**, com **seções** sobre **nomeação, posse e exercício**. Os demais títulos tratam de **vacância**, **direitos**, **deveres**, **penalidades** e **processo disciplinar**.",
    ]),
    conferir("Na **Lei 1.656/1958** (versão consolidada, sem os artigos revogados): **requisitos** de investidura, **prazos de posse e de exercício**, **inspeção médica**, **declaração de bens** e as **formas de provimento** previstas."),
    q("Segundo a Súmula Vinculante 44 do STF, só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público. Esse entendimento aplica-se:", ["somente à União", "a todos os entes federativos, inclusive aos Municípios", "somente aos Estados", "somente ao Poder Judiciário", "somente aos concursos federais"], "B", "As súmulas vinculantes obrigam toda a Administração Pública."),
    ce("A validade do concurso público para cargo efetivo é de até dois anos, prorrogável uma única vez por igual período.", "Certo", "CF, art. 37, III."),
    q("A investidura em cargo ou emprego público efetivo depende de:", ["indicação do Prefeito", "aprovação prévia em concurso público de provas ou de provas e títulos", "decisão da Câmara", "mero requerimento", "tempo de serviço em cargo em comissão"], "B", "CF, art. 37, II."),
  ]);

  E("estagio-probatorio-e-estabilidade", [
    aprofundar([
      "### Modelo constitucional (CF, art. 41)",
      "- **Estágio probatório de 3 anos**, para o servidor efetivo, conforme a **EC 19/1998**, que também fixou a **estabilidade após 3 anos de efetivo exercício**, com **avaliação especial de desempenho** por comissão instituída para essa finalidade (§ 4º).",
      "- **Perda do cargo** do estável: **sentença judicial transitada em julgado**; **processo administrativo** com ampla defesa; **avaliação periódica** (§ 1º).",
      "- **Reintegração** (§ 2º): invalidada por sentença a demissão do estável, ele volta ao cargo, e o ocupante, se estável, é **reconduzido ao cargo de origem**, sem indenização, **aproveitado em outro cargo** ou posto em **disponibilidade**.",
      "- **Disponibilidade** (§ 3º): extinto o cargo ou declarada sua desnecessidade, o estável fica em **disponibilidade, com remuneração proporcional ao tempo de serviço**.",
      "",
      "### Súmulas do STF",
      "- **Súmula 21**: o funcionário **em estágio probatório não pode ser exonerado nem demitido sem inquérito** ou sem as formalidades legais de apuração de sua capacidade.",
      "- **Súmula 20**: é necessário **processo administrativo** com **ampla defesa** para a demissão de funcionário admitido por concurso.",
      "- **Súmula 22**: o **estágio probatório não protege** o funcionário contra a **extinção do cargo**.",
      "",
      "### Fato local confirmado",
      "O capítulo da **estabilidade e disponibilidade** da **Lei 1.656/1958** consta como **revogado pela Lei 16.037/2022**. **Confira** o que a lei municipal vigente prevê para **estágio probatório**, **avaliação** e **estabilidade**.",
    ]),
    conferir("A **lei municipal vigente** sobre **avaliação de estágio probatório** (quem avalia, fatores, prazos, recursos) e o que a **Lei 16.037/2022** alterou."),
    q("Segundo a Súmula 21 do STF, o funcionário em estágio probatório:", ["pode ser exonerado livremente", "não pode ser exonerado nem demitido sem inquérito ou sem as formalidades legais de apuração de sua capacidade", "é estável desde o primeiro dia", "não pode ser avaliado", "perde o direito à ampla defesa"], "B", "Garantia de apuração formal."),
    ce("A estabilidade é adquirida após três anos de efetivo exercício, desde que haja aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.", "Certo", "CF, art. 41, caput e § 4º."),
    q("O servidor estável, quando extinto o cargo ou declarada sua desnecessidade, fica em:", ["demissão", "disponibilidade, com remuneração proporcional ao tempo de serviço", "aposentadoria compulsória", "licença sem vencimentos", "exoneração, com indenização"], "B", "CF, art. 41, § 3º."),
  ]);

  E("direitos-e-vantagens", [
    aprofundar([
      "### Remuneração (CF, art. 37 e 39)",
      "- **Vencimento** e **vantagens** previstos em **lei**; **subsídio** para carreiras e cargos específicos, em **parcela única** (art. 39, § 4º).",
      "- **Revisão geral anual** (art. 37, X): **mesma data** e **sem distinção de índices**, por **lei de iniciativa do Chefe do Executivo**.",
      "- **Teto** (art. 37, XI): no Município, o **subsídio do Prefeito**.",
      "- **Vedada vinculação ou equiparação** de espécies remuneratórias (XIII) e **acumulação de acréscimos** sobre o mesmo fundamento (**vedado o efeito cascata**, art. 37, XIV).",
      "- **Irredutibilidade** de vencimentos (XV), ressalvadas as exceções.",
      "- **Direitos do art. 7º** aplicados aos servidores (art. 39, § 3º): 13º, férias com 1/3, adicional noturno, hora extra de 50%, salário-família, licença à gestante, etc.",
      "",
      "### Súmulas do STF",
      "- **Súmula Vinculante 37**: não cabe ao Poder Judiciário, que não tem função legislativa, aumentar vencimentos de servidores públicos sob o fundamento de isonomia.",
      "- **Súmula Vinculante 4**: salvo nos casos previstos na Constituição, o salário mínimo não pode ser usado como indexador de base de cálculo de vantagem de servidor público ou de empregado.",
      "- **Súmula 679**: a fixação de vencimentos dos servidores públicos não pode ser objeto de convenção coletiva.",
      "",
      "### Comparação com a Lei 8.112",
      "A Lei 8.112 distingue **indenizações, gratificações e adicionais** (art. 49), com **ajuda de custo, diárias, transporte e auxílio-moradia**, e adicionais de **insalubridade, periculosidade, noturno e de férias**. O estatuto municipal tem **rol próprio**, em geral com **adicional por tempo de serviço** e **licença-prêmio** (**conferir**).",
    ]),
    conferir("O **rol de vantagens** da **Lei 1.656/1958** e das leis municipais de **planos de cargos e carreiras**: **adicional por tempo de serviço**, **gratificações**, **férias** (período e abono), **diárias** e **licença-prêmio**."),
    q("Segundo a Súmula Vinculante 37 do STF, o Poder Judiciário:", ["pode aumentar vencimentos de servidores com base na isonomia", "não pode, sem função legislativa, aumentar vencimentos de servidores sob o fundamento de isonomia", "pode fixar o teto remuneratório", "pode conceder revisão geral", "pode vincular reajustes ao salário mínimo"], "B", "Separação dos Poderes."),
    ce("A revisão geral anual da remuneração dos servidores deve ser feita sempre na mesma data e sem distinção de índices.", "Certo", "CF, art. 37, X."),
    q("O teto remuneratório dos servidores do Município, segundo o art. 37, XI, é o subsídio:", ["do Governador", "do Prefeito", "dos Ministros do STF, em qualquer caso", "do Presidente da República", "dos vereadores"], "B", "Para os Municípios, o subsídio do Prefeito."),
  ]);

  E("deveres-e-proibicoes", [
    aprofundar([
      "### Modelo constitucional",
      "- **Princípios** do art. 37: **legalidade, impessoalidade, moralidade, publicidade e eficiência**.",
      "- **Improbidade** (art. 37, § 4º; Lei 8.429/1992, alterada pela Lei 14.230/2021).",
      "- **Acumulação**: vedada, salvo as exceções do art. 37, XVI (dois cargos de professor; professor com técnico ou científico; dois cargos de profissionais de saúde), com **compatibilidade de horários** e respeito ao **teto**.",
      "- **Conflito de interesses**: a **Lei 12.813/2013** disciplina o Poder Executivo **federal**, mas o **raciocínio** é geral.",
      "",
      "### Deveres e proibições típicos (comparação com a Lei 8.112, arts. 116 e 117)",
      "**Deveres**: zelo e dedicação; **lealdade às instituições**; **observância das normas**; **cumprimento de ordens superiores** (exceto manifestamente ilegais); **atendimento com presteza**; **representação** contra ilegalidade; **zelo pelo patrimônio**; **sigilo**; **moralidade**; **assiduidade e pontualidade**; **urbanidade**.",
      "**Proibições**: ausentar-se do serviço sem autorização; **retirar documento ou objeto** da repartição; **coagir subordinados**; **valer-se do cargo** para proveito pessoal; **receber propinas, comissões ou presentes**; **atuar como procurador** junto à repartição; **exercer comércio** ou gerir sociedade (com exceções); **usar recursos da repartição** em atividade particular.",
      "",
      "### Estrutura do estatuto (índice conferido)",
      "O Estatuto dos Funcionários de Curitiba tem **capítulos próprios** de **deveres** e de **proibições**, seguidos de **responsabilidades**, **penalidades** e **processo disciplinar**.",
    ]),
    conferir("O **rol de deveres e proibições** da **Lei 1.656/1958** e de leis municipais correlatas (**Código de Ética** do servidor municipal, se houver), e quais infrações levam a **cada penalidade**."),
    q("É, em regra, proibido ao servidor público:", ["comunicar irregularidades a seus superiores", "valer-se do cargo para obter proveito pessoal ou de outrem", "cumprir ordens superiores legais", "ser assíduo", "guardar sigilo funcional"], "B", "Violação do dever de moralidade."),
    ce("A acumulação remunerada de cargos públicos é vedada, salvo nos casos previstos na Constituição, e exige compatibilidade de horários.", "Certo", "CF, art. 37, XVI."),
    q("O servidor deve cumprir as ordens superiores, exceto quando:", ["contrárias à sua conveniência", "manifestamente ilegais", "verbais", "dadas por chefe de outro setor", "inoportunas"], "B", "Dever de obediência não alcança ordem manifestamente ilegal."),
  ]);

  E("licencas-e-afastamentos", [
    aprofundar([
      "### Modelo constitucional",
      "- **Licença à gestante**: **120 dias**, sem prejuízo do emprego e do salário (art. 7º, XVIII, aplicável aos servidores, art. 39, § 3º). **Licença-paternidade** (art. 7º, XIX; ADCT, art. 10, § 1º: **5 dias** até a lei regulamentar).",
      "- **Afastamento para mandato eletivo** (art. 38): **mandato federal, estadual ou distrital**: afastado do cargo; **Prefeito**: afastado, podendo **optar pela remuneração**; **Vereador**: havendo **compatibilidade de horário**, acumula; não havendo, **afasta-se**, podendo optar.",
      "- **Direito de associação sindical** e **greve** (art. 37, VI e VII).",
      "",
      "### Comparação com a Lei 8.112",
      "A Lei 8.112 prevê **sete licenças** no art. 81 (doença em pessoa da família, afastamento do cônjuge, serviço militar, atividade política, capacitação, interesses particulares e mandato classista), além da licença **para tratamento de saúde**, **à gestante, adotante e paternidade**.",
      "",
      "### Estrutura do estatuto de Curitiba (índice conferido)",
      "A Lei **1.656/1958** trata de **licença-prêmio**, **licença à gestante**, **licença por doença em pessoa da família**, **licença para serviço militar** e **licença para tratar de interesses particulares** (esta, com **regulamento** aprovado por **decreto**). **Confira** os **prazos** e a **remuneração** de cada uma no **texto consolidado**.",
    ]),
    conferir("**Prazos, requisitos e remuneração** de cada licença no **texto consolidado** da Lei 1.656/1958 e nas leis que a alteraram, inclusive a **licença-prêmio** (se ainda vigente)."),
    q("A Constituição Federal assegura aos servidores titulares de cargo público a licença à gestante, sem prejuízo do emprego e do salário, com duração de:", ["60 dias", "90 dias", "120 dias", "150 dias", "180 dias"], "C", "CF, art. 7º, XVIII, c/c art. 39, § 3º."),
    ce("O servidor investido no mandato de Prefeito ficará afastado de seu cargo, podendo optar pela sua remuneração.", "Certo", "CF, art. 38, II."),
    q("O servidor investido no mandato de vereador, havendo compatibilidade de horário, poderá:", ["acumular o cargo e o mandato, com as vantagens de ambos", "apenas se afastar, sempre", "perder o cargo", "exercer só o mandato", "ser transferido de ofício"], "A", "CF, art. 38, III."),
  ]);

  E("vacancia", [
    aprofundar([
      "### Formas de vacância (modelo da Lei 8.112, art. 33)",
      "**Exoneração**, **demissão**, **promoção**, **readaptação**, **aposentadoria**, **posse em outro cargo inacumulável** e **falecimento**.",
      "",
      "### Constituição",
      "- **Exoneração de cargo em comissão**: livre.",
      "- **Demissão**: **penalidade**, com **processo administrativo** e ampla defesa (art. 41, § 1º).",
      "- **Aposentadoria** (art. 40): **voluntária**, **compulsória** (**75 anos**, LC 152/2015), **por incapacidade permanente**.",
      "- **Disponibilidade** (art. 41, § 3º) e **reintegração** (§ 2º).",
      "",
      "### Exoneração × demissão",
      "**Exoneração** **não é pena** (a pedido, de ofício por razões legais, ou **ad nutum**, nos cargos em comissão). **Demissão é pena**. A **reintegração** exige **invalidação** da demissão.",
      "",
      "### Fato local",
      "O **capítulo da aposentadoria** do Estatuto de Curitiba tem **remissão a outra lei** (Lei 1.750/1959), e a aposentadoria dos servidores efetivos é regida hoje pelo **regime próprio** (IPMC). **Confira** a legislação previdenciária municipal vigente.",
    ]),
    conferir("As **formas de vacância** do **texto consolidado** da Lei 1.656/1958, a **aposentadoria** pela **lei previdenciária municipal** e a **idade de aposentadoria compulsória** vigente (75 anos, LC 152/2015)."),
    q("A idade da aposentadoria compulsória do servidor titular de cargo efetivo, hoje, é de:", ["65 anos", "70 anos", "75 anos", "80 anos", "60 anos"], "C", "LC 152/2015, com base no art. 40, § 1º, II."),
    ce("A exoneração, diferentemente da demissão, não tem caráter de penalidade.", "Certo", "A demissão é pena disciplinar."),
    q("A reintegração é o retorno do servidor ao cargo:", ["por promoção", "quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento das vantagens", "por aposentadoria", "por remoção", "por redistribuição"], "B", "Lei 8.112, art. 28; CF, art. 41, § 2º."),
  ]);

  E("responsabilidades-e-penalidades", [
    aprofundar([
      "### Três esferas",
      "O servidor responde **civil, penal e administrativamente**; as esferas são **independentes** (modelo da Lei 8.112, arts. 121 a 126). A **responsabilidade civil do Estado** é **objetiva** (CF, art. 37, § 6º), com **direito de regresso** contra o servidor em caso de **dolo ou culpa**.",
      "",
      "### Súmulas do STF sobre a punição administrativa",
      "- **Súmula 18**: pela **falta residual** não compreendida na **absolvição pelo juízo criminal**, é admissível a **punição administrativa**.",
      "- **Súmula 19**: é **inadmissível segunda punição** de servidor público baseada **no mesmo processo** em que se fundou a primeira.",
      "- **Súmula 20**: necessidade de **processo administrativo** com ampla defesa para demissão de funcionário admitido por concurso.",
      "- **Súmula Vinculante 5**: a **falta de defesa técnica por advogado** no processo administrativo disciplinar **não ofende a Constituição**.",
      "- **Súmula 651 do STJ**: a autoridade administrativa pode aplicar a **pena de demissão** por improbidade, sem condenação judicial prévia.",
      "",
      "### Penalidades-modelo (Lei 8.112, art. 127)",
      "**Advertência**, **suspensão**, **demissão**, **cassação de aposentadoria ou disponibilidade**, **destituição de cargo em comissão** e **destituição de função comissionada**. A **gravidade** e os **antecedentes** orientam a pena (art. 128). O estatuto municipal tem **rol e critérios próprios**.",
      "",
      "### Estrutura do estatuto de Curitiba (índice conferido)",
      "A Lei 1.656/1958 trata, em capítulos próprios, de **responsabilidade** e de **penalidades**. **Confira** quais são as penas, os casos de **demissão** e os **prazos de prescrição**.",
    ]),
    conferir("**Penalidades**, **hipóteses de demissão** e **prazos de prescrição** da ação disciplinar na lei municipal. **Não** presuma que são iguais aos da Lei 8.112."),
    q("A Súmula Vinculante 5 do STF estabelece que a falta de defesa técnica por advogado no processo administrativo disciplinar:", ["gera nulidade absoluta", "não ofende a Constituição", "só vale para suspensão", "só vale para a União", "exige a nomeação de defensor dativo"], "B", "Não é exigida a presença de advogado."),
    ce("Segundo a Súmula 19 do STF, é inadmissível uma segunda punição ao servidor público baseada no mesmo processo em que se fundou a primeira.", "Certo", "Vedação do bis in idem disciplinar."),
    q("A responsabilidade civil do Estado pelos danos que seus agentes, nessa qualidade, causarem a terceiros é:", ["subjetiva, sempre", "objetiva, assegurado o direito de regresso contra o agente em caso de dolo ou culpa", "inexistente", "apenas do agente", "criminal"], "B", "CF, art. 37, § 6º."),
  ]);

  E("processo-disciplinar", [
    aprofundar([
      "### Garantias (CF, art. 5º, LV)",
      "**Contraditório e ampla defesa**, com os meios e recursos a ela inerentes. Nenhuma pena disciplinar grave pode ser aplicada sem **processo**.",
      "",
      "### Modelo da Lei 8.112 (comparação)",
      "- **Sindicância**: investigativa ou acusatória, prazo de **30 dias**, prorrogável por igual período.",
      "- **PAD**: comissão de **3 servidores estáveis**, **60 dias** prorrogáveis por mais 60; **defesa em 10 dias**; **julgamento em 20 dias**.",
      "- **Rito sumário** para acumulação ilegal, abandono e inassiduidade: comissão de **2** estáveis, **30 + 15** dias.",
      "- **Revisão** a qualquer tempo, sem agravamento.",
      "",
      "### Estrutura do estatuto de Curitiba (índice conferido)",
      "A Lei **1.656/1958** prevê **sindicância administrativa**, **processo administrativo**, **prisão e suspensão preventiva** e **revisão do processo**. **Confira** prazos, composição das comissões e autoridade julgadora.",
      "",
      "### Entendimentos úteis",
      "- **Súmula Vinculante 5**: defesa técnica por advogado **não é obrigatória**.",
      "- A Administração pode **anular** o processo com **vício insanável**.",
      "- A **revisão** não pode **agravar** a pena.",
    ]),
    conferir("**Prazos** da sindicância e do processo, **composição e requisitos** da comissão, **suspensão preventiva** e **revisão** na lei municipal vigente. Os **prazos locais** podem **diferir** dos da Lei 8.112."),
    q("O processo administrativo disciplinar deve assegurar ao acusado:", ["apenas a oportunidade de recorrer", "o contraditório e a ampla defesa, com os meios e recursos a ela inerentes", "a presença obrigatória de advogado, sempre", "o sigilo absoluto, sem acesso aos autos", "a suspensão automática da pena"], "B", "CF, art. 5º, LV."),
    ce("Da revisão do processo administrativo disciplinar não pode resultar o agravamento da penalidade, como regra do modelo estatutário.", "Certo", "Lei 8.112, art. 182, parágrafo único."),
    q("A suspensão preventiva ou o afastamento cautelar do servidor, durante o processo disciplinar, tem natureza de:", ["pena", "medida cautelar, sem juízo sobre a culpa", "demissão", "exoneração", "advertência"], "B", "Não é punição, mas evita interferência na apuração."),
  ]);
})();

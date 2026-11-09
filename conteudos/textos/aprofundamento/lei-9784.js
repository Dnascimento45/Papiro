/* Aprofundamento · Lei 9.784/1999 (processo administrativo federal).
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/lei-9784.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-a/lei-9784/${caminho}`, { livros: LIVROS, blocos });
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
    { titulo: "Lei 9.784/1999 · Processo Administrativo Federal (texto compilado)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm", nota: "Lei curta (cerca de 70 artigos): leia inteira, principalmente os prazos." },
    { titulo: "Direito Administrativo Descomplicado", autor: "Marcelo Alexandrino e Vicente Paulo", nota: "Capítulo sobre processo administrativo, com quadros de prazos." },
    { titulo: "Direito Administrativo", autor: "Maria Sylvia Zanella Di Pietro", nota: "Referência para os princípios do processo e para anulação e revogação." },
    { titulo: "Súmulas 346 e 473 do STF", nota: "A Administração pode anular os próprios atos ilegais e revogar os inconvenientes, respeitados os direitos adquiridos." },
  ];

  /* ================= FUNDAMENTOS DO PROCESSO ================= */

  A("fundamentos-do-processo/disposicoes-gerais-e-principios", [
    aprofundar([
      "### Âmbito (art. 1º)",
      "A lei estabelece normas básicas sobre o processo administrativo no âmbito da **Administração Federal direta e indireta**, visando à proteção dos direitos dos administrados e ao melhor cumprimento dos fins da Administração. Aplica-se também aos órgãos dos **Poderes Legislativo e Judiciário da União**, quando no desempenho de função **administrativa**.",
      "Os processos **específicos** (como o PAD da Lei 8.112 e o processo tributário) regem-se por lei própria, e a Lei 9.784 se aplica a eles **subsidiariamente** (art. 69).",
      "",
      "### Os 11 princípios do art. 2º",
      "**Legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.**",
      "",
      "### Critérios de atuação (parágrafo único do art. 2º)",
      "A lei lista 13 critérios. Os mais cobrados:",
      "- atuação conforme a lei e o Direito;",
      "- atendimento a fins de interesse geral, **vedada a renúncia total ou parcial de poderes ou competências**, salvo autorização em lei;",
      "- **objetividade**, vedada a **promoção pessoal** de agentes ou autoridades;",
      "- atuação segundo padrões éticos de **probidade, decoro e boa-fé**;",
      "- **divulgação oficial** dos atos, ressalvado o sigilo constitucional;",
      "- **adequação entre meios e fins**: veda obrigações, restrições e sanções além do estritamente necessário;",
      "- indicação dos **pressupostos de fato e de direito** da decisão;",
      "- observância das **formalidades essenciais** à garantia dos direitos;",
      "- adoção de **formas simples**, suficientes para dar certeza e segurança;",
      "- garantia dos direitos à **comunicação, alegações finais, provas e recursos**, nos processos que possam gerar sanções ou litígio;",
      "- **proibição de cobrança de despesas processuais**, salvo previsão em lei;",
      "- **impulsão de ofício** do processo, sem prejuízo da atuação dos interessados;",
      "- interpretação da norma que melhor garanta o fim público, **vedada a aplicação retroativa de nova interpretação**.",
    ]),
    atencao("A Lei 9.784 **não** lista \"publicidade\" nem \"impessoalidade\" no caput do art. 2º; a ideia de divulgação oficial e de vedação à promoção pessoal está nos **critérios** do parágrafo único. Se a banca perguntar pelos princípios do **caput**, são os 11 acima."),
    q("Entre os princípios expressamente enumerados no caput do art. 2º da Lei 9.784/1999 **não** se encontra:", ["razoabilidade", "proporcionalidade", "segurança jurídica", "interesse público", "hierarquia"], "E", "O caput lista legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência."),
    ce("Nos processos administrativos específicos, as disposições da Lei 9.784/1999 aplicam-se de forma subsidiária.", "Certo", "Art. 69: os processos específicos continuam regidos por lei própria."),
    ce("Segundo a Lei 9.784/1999, a Administração pode cobrar despesas processuais, mediante regulamento do órgão.", "Errado", "Art. 2º, parágrafo único, XI: proibição de cobrança de despesas processuais, ressalvadas as previstas em lei."),
    q("A Lei 9.784/1999 veda a aplicação retroativa de:", ["nova lei", "nova interpretação da norma administrativa", "decreto regulamentador", "súmula do STF", "ato normativo interno, sem exceção"], "B", "Art. 2º, parágrafo único, XIII."),
  ]);

  A("fundamentos-do-processo/direitos-e-deveres-dos-administrados", [
    aprofundar([
      "### Direitos (art. 3º)",
      "1. Ser **tratado com respeito** pelas autoridades e servidores, que devem facilitar o exercício de seus direitos e o cumprimento de suas obrigações.",
      "2. Ter **ciência da tramitação**, **vista dos autos**, **obter cópias** de documentos e **conhecer as decisões** proferidas.",
      "3. **Formular alegações e apresentar documentos** antes da decisão, que serão objeto de consideração pelo órgão competente.",
      "4. **Fazer-se assistir, facultativamente, por advogado**, salvo quando a representação for obrigatória por lei.",
      "",
      "### Deveres (art. 4º)",
      "1. Expor os fatos **conforme a verdade**.",
      "2. Proceder com **lealdade, urbanidade e boa-fé**.",
      "3. **Não agir de modo temerário**.",
      "4. Prestar as informações solicitadas e **colaborar** para o esclarecimento dos fatos.",
      "",
      "### Vista e certidões (art. 46)",
      "Os interessados têm direito à vista do processo e a obter certidões ou cópias dos dados e documentos, ressalvados os de **terceiros protegidos por sigilo** ou pelo direito à privacidade, à honra e à imagem.",
    ]),
    atencao("**Advogado é facultativo** no processo administrativo federal. A obrigatoriedade só existe quando a lei exigir. É a mesma lógica da Súmula Vinculante 5 para o PAD."),
    q("Segundo a Lei 9.784/1999, constitui direito do administrado:", ["ser assistido por advogado, obrigatoriamente, em qualquer processo", "fazer-se assistir, facultativamente, por advogado, salvo quando obrigatória a representação por lei", "dispensar a Administração de motivar a decisão", "ter vista dos autos apenas após a decisão", "recusar-se a prestar informações, sem consequência"], "B", "Art. 3º, IV."),
    ce("É dever do administrado expor os fatos conforme a verdade e não agir de modo temerário.", "Certo", "Art. 4º, I e III."),
    q("Não constitui dever do administrado perante a Administração, segundo a Lei 9.784/1999:", ["proceder com lealdade, urbanidade e boa-fé", "expor os fatos conforme a verdade", "colaborar para o esclarecimento dos fatos", "não agir de modo temerário", "ser representado por advogado em todas as fases"], "E", "A representação por advogado é facultativa (art. 3º, IV), não um dever."),
  ]);

  A("fundamentos-do-processo/inicio-do-processo-e-interessados", [
    aprofundar([
      "### Início (art. 5º)",
      "O processo pode iniciar-se **de ofício** ou **a pedido** do interessado.",
      "",
      "### Requerimento (art. 6º)",
      "Por escrito, com: órgão ou autoridade a que se dirige; identificação do interessado ou de quem o represente; domicílio ou local para comunicações; **pedido com exposição dos fatos e fundamentos**; data e assinatura. É **vedada a recusa imotivada** de recebimento de documentos: o servidor deve orientar o interessado quanto ao suprimento de falhas.",
      "- Órgãos e entidades devem elaborar **modelos ou formulários padronizados** para pretensões equivalentes (art. 7º).",
      "- Pedidos de pluralidade de interessados com conteúdo e fundamentos idênticos podem ser feitos em **um único requerimento** (art. 8º).",
      "",
      "### Quem são os interessados (art. 9º)",
      "1. Quem **inicia** o processo como titular de direitos ou interesses individuais, ou no exercício do direito de representação.",
      "2. Quem, **sem ter iniciado**, tem direitos ou interesses que possam ser **afetados** pela decisão.",
      "3. **Organizações e associações representativas**, quanto a direitos e interesses **coletivos**.",
      "4. **Pessoas ou associações legalmente constituídas**, quanto a direitos ou interesses **difusos**.",
      "",
      "### Capacidade (art. 10)",
      "São capazes os **maiores de 18 anos**, ressalvada previsão especial em ato normativo próprio.",
    ]),
    q("Segundo a Lei 9.784/1999, o processo administrativo pode iniciar-se:", ["somente a pedido do interessado", "somente de ofício", "de ofício ou a pedido do interessado", "apenas por determinação judicial", "somente por ordem do Ministério Público"], "C", "Art. 5º."),
    ce("A Administração pode recusar imotivadamente o recebimento de documentos que lhe sejam apresentados em requerimento.", "Errado", "Art. 6º, parágrafo único: é vedada a recusa imotivada; o servidor deve orientar sobre o suprimento de falhas."),
    q("São capazes, para fins de processo administrativo, em regra, os maiores de:", ["14 anos", "16 anos", "18 anos", "21 anos", "25 anos"], "C", "Art. 10."),
    q("As organizações e associações representativas são consideradas interessadas no processo, quanto a:", ["direitos individuais homogêneos de quem não é associado", "direitos e interesses coletivos", "qualquer direito, sem restrição", "apenas direitos patrimoniais", "interesses do Estado"], "B", "Art. 9º, III. Quanto aos direitos difusos, art. 9º, IV: pessoas ou associações legalmente constituídas."),
  ]);

  A("fundamentos-do-processo/competencia-e-delegacao", [
    aprofundar([
      "### Regra (art. 11)",
      "A competência é **irrenunciável** e se exerce pelos órgãos a que foi atribuída como **própria**, salvo os casos de **delegação** e **avocação** admitidos em lei.",
      "",
      "### Delegação (arts. 12 e 14)",
      "Um órgão ou titular pode delegar **parte** de sua competência a outros órgãos ou titulares, **ainda que não lhe sejam hierarquicamente subordinados**, quando for conveniente por circunstâncias técnicas, sociais, econômicas, jurídicas ou territoriais. Vale também para a delegação dos **órgãos colegiados aos respectivos presidentes**.",
      "- O ato de delegação e sua revogação são **publicados em meio oficial**.",
      "- Especifica as **matérias e poderes** transferidos, os **limites**, a **duração**, os **objetivos** e o **recurso cabível**.",
      "- É **revogável a qualquer tempo** pela autoridade delegante.",
      "- As decisões tomadas por delegação **mencionam essa qualidade** e consideram-se **editadas pelo delegado** (por isso o delegado responde por elas).",
      "",
      "### O que não pode ser delegado (art. 13)",
      "1. a **edição de atos de caráter normativo**;",
      "2. a **decisão de recursos administrativos**;",
      "3. as **matérias de competência exclusiva** do órgão ou autoridade.",
      "",
      "### Avocação (art. 15)",
      "Chamar para si, **temporariamente**, a competência de órgão hierarquicamente inferior, em caráter **excepcional** e por **motivos relevantes devidamente justificados**.",
      "",
      "### Onde começa o processo (art. 17)",
      "Inexistindo competência legal específica, o processo inicia-se perante a **autoridade de menor grau hierárquico** para decidir.",
    ]),
    atencao("Delegação pode alcançar órgão **sem subordinação hierárquica**; avocação, **só** de órgão hierarquicamente **inferior**. A decisão de **recurso administrativo** nunca se delega."),
    q("Segundo a Lei 9.784/1999, **não** pode ser objeto de delegação:", ["a prática de atos de mero expediente", "a decisão de recursos administrativos", "a assinatura de ofícios de rotina", "a prática de atos instrutórios", "a convocação de reuniões"], "B", "Art. 13, II. Também não se delegam a edição de atos normativos e as matérias de competência exclusiva."),
    ce("A avocação temporária de competência de órgão hierarquicamente inferior é admitida em caráter excepcional e por motivos relevantes devidamente justificados.", "Certo", "Art. 15."),
    ce("A delegação de competência só é possível a órgãos hierarquicamente subordinados ao delegante.", "Errado", "Art. 12: a delegação é possível ainda que o delegado não seja hierarquicamente subordinado."),
    q("As decisões adotadas por delegação consideram-se editadas:", ["pelo delegante", "pelo delegado", "pelo órgão central do sistema", "pelo Presidente da República", "pelo órgão de controle interno"], "B", "Art. 14, § 3º."),
  ]);

  A("fundamentos-do-processo/impedimento-e-suspeicao", [
    aprofundar([
      "### Impedimento (art. 18): causas objetivas",
      "Está impedido de atuar o servidor ou a autoridade que:",
      "1. tenha **interesse direto ou indireto** na matéria;",
      "2. tenha participado ou venha a participar como **perito, testemunha ou representante**, ou se tais situações ocorrerem quanto ao **cônjuge, companheiro ou parente e afins até o terceiro grau**;",
      "3. esteja **litigando**, judicial ou administrativamente, com o interessado ou com o respectivo cônjuge ou companheiro.",
      "",
      "### Suspeição (art. 20): causa subjetiva",
      "**Amizade íntima** ou **inimizade notória** com algum dos interessados ou com os respectivos cônjuges, companheiros, parentes e afins **até o terceiro grau**.",
      "",
      "### Consequências",
      "- O impedido **deve comunicar** o fato à autoridade competente e **abster-se de atuar** (art. 19).",
      "- A **omissão** do dever de comunicar constitui **falta grave**, para efeitos disciplinares.",
      "- O **indeferimento** de alegação de suspeição pode ser objeto de **recurso, sem efeito suspensivo** (art. 21).",
    ]),
    atencao("Impedimento = **fatos objetivos** (interesse, participação, litígio). Suspeição = **sentimentos** (amizade íntima ou inimizade notória). Em ambos, o grau de parentesco é até o **terceiro**."),
    q("A amizade íntima ou a inimizade notória com o interessado configura:", ["impedimento", "suspeição", "avocação", "delegação", "revelia"], "B", "Art. 20."),
    ce("A omissão do dever de comunicar o impedimento constitui falta grave, para efeitos disciplinares.", "Certo", "Art. 19, parágrafo único."),
    q("É impedido de atuar no processo administrativo o servidor que:", ["tenha participado como testemunha na matéria", "tenha convivido com o interessado numa mesma faculdade", "seja colega do interessado", "tenha mais de 60 anos", "ocupe cargo comissionado"], "A", "Art. 18, II."),
    ce("O indeferimento de alegação de suspeição pode ser objeto de recurso, sem efeito suspensivo.", "Certo", "Art. 21."),
  ]);

  /* ================= ATOS E INSTRUÇÃO ================= */

  A("atos-e-instrucao/forma-tempo-e-lugar-dos-atos", [
    aprofundar([
      "### Forma (art. 22)",
      "Os atos **não dependem de forma determinada**, salvo quando a lei exigir. Devem ser produzidos **por escrito**, em **vernáculo**, com **data e local** e **assinatura da autoridade responsável**.",
      "- **Reconhecimento de firma**: só quando houver **dúvida de autenticidade**, salvo imposição legal.",
      "- A **autenticação** de cópias pode ser feita pelo próprio órgão.",
      "- As páginas do processo são **numeradas sequencialmente e rubricadas**.",
      "",
      "### Tempo (arts. 23 e 24)",
      "- Os atos realizam-se em **dias úteis**, no horário normal de funcionamento da repartição. Concluem-se depois do horário os atos **já iniciados** cujo adiamento prejudique o procedimento ou cause dano.",
      "- Não havendo disposição específica, os atos da Administração e dos administrados são praticados em **5 dias**, salvo força maior. O prazo pode ser **dilatado até o dobro**, com **justificação comprovada**.",
      "",
      "### Lugar (art. 25)",
      "Preferencialmente na **sede do órgão**, cientificando-se o interessado se for outro o local.",
    ]),
    q("Não havendo disposição específica, os atos do processo administrativo federal devem ser praticados no prazo de:", ["2 dias", "3 dias", "5 dias", "10 dias", "15 dias"], "C", "Art. 24. Pode ser dilatado até o dobro, com justificação."),
    ce("O reconhecimento de firma é sempre exigido nos documentos apresentados em processo administrativo federal.", "Errado", "Art. 22, § 2º: só quando houver dúvida de autenticidade, salvo imposição legal."),
    q("Os atos do processo administrativo devem ser produzidos, como regra:", ["verbalmente, com registro posterior", "por escrito, em vernáculo, com data e local e assinatura da autoridade responsável", "por meio eletrônico, exclusivamente", "em forma livre, sem exigência de assinatura", "em língua à escolha do interessado"], "B", "Art. 22, § 1º."),
  ]);

  A("atos-e-instrucao/comunicacao-dos-atos", [
    aprofundar([
      "### Intimação (art. 26)",
      "O órgão determina a **intimação** do interessado para ciência de decisão ou para efetivação de diligências. Ela deve conter: identificação do intimado e do órgão; **finalidade**; **data, hora e local** de comparecimento; se deve comparecer **pessoalmente** ou fazer-se representar; informação de que o processo **continua independentemente do comparecimento**; indicação dos **fatos e fundamentos legais**.",
      "- **Antecedência mínima de 3 dias úteis** para o comparecimento.",
      "- Meios: ciência no processo, **via postal com AR**, telegrama ou outro meio que assegure a certeza da ciência.",
      "- Interessados **indeterminados, desconhecidos ou com domicílio indefinido**: **publicação oficial**.",
      "- A intimação feita sem as prescrições legais é **nula**, mas o **comparecimento do administrado supre** a falta ou irregularidade.",
      "",
      "### Efeito do não atendimento (art. 27)",
      "O desatendimento da intimação **não importa reconhecimento da verdade dos fatos**, nem renúncia a direito. O processo prossegue, com **ampla defesa** garantida.",
      "",
      "### Quando intimar (art. 28)",
      "Os atos que imponham **deveres, ônus, sanções** ou **restrição** a direitos e atividades, e os de outra natureza de interesse do administrado.",
      "",
      "### Provas e diligências (art. 41)",
      "Intimação com antecedência mínima de **3 dias úteis**, com data, hora e local.",
    ]),
    {
      tipo: "tabela",
      titulo: "Prazos da comunicação e da instrução",
      cabecalho: ["Situação", "Prazo"],
      linhas: [
        ["Intimação para comparecer (art. 26)", "3 dias úteis de antecedência"],
        ["Intimação para prova ou diligência (art. 41)", "3 dias úteis de antecedência"],
        ["Atos em geral, sem prazo específico (art. 24)", "5 dias (dilatável até o dobro)"],
        ["Manifestação após a instrução (art. 44)", "até 10 dias"],
        ["Parecer obrigatório de órgão consultivo (art. 42)", "15 dias"],
      ],
    },
    q("A intimação do interessado para comparecimento observará a antecedência mínima de:", ["24 horas", "2 dias úteis", "3 dias úteis", "5 dias corridos", "10 dias úteis"], "C", "Art. 26, § 2º."),
    ce("O comparecimento do administrado supre a falta ou a irregularidade da intimação.", "Certo", "Art. 26, § 5º."),
    ce("O desatendimento da intimação implica o reconhecimento da verdade dos fatos alegados pela Administração.", "Errado", "Art. 27: não importa o reconhecimento da verdade dos fatos, nem renúncia a direito."),
    q("No caso de interessados indeterminados, desconhecidos ou com domicílio indefinido, a intimação é feita por:", ["telefone", "publicação oficial", "carta simples", "intimação verbal", "correio eletrônico, apenas"], "B", "Art. 26, § 4º."),
  ]);

  A("atos-e-instrucao/instrucao", [
    aprofundar([
      "### Quem produz a prova (arts. 29 a 38)",
      "A instrução se faz **de ofício** ou por impulso do órgão, sem prejuízo do direito do interessado de propor atuações probatórias. Cabe ao interessado **provar os fatos que alegou**, mas, se declarar que os dados constam de documentos **da própria Administração** (ou de outro órgão), o órgão da instrução **obtém de ofício** os documentos (art. 37).",
      "- **Provas ilícitas são inadmissíveis** (art. 30).",
      "- O interessado pode juntar documentos e pareceres, requerer diligências e perícias e aduzir alegações (art. 38). Só se recusam, **por decisão fundamentada**, provas **ilícitas, impertinentes, desnecessárias ou protelatórias**.",
      "- Atos de instrução que exijam a atuação do interessado devem fazer-se do **modo menos oneroso** para ele (art. 29, § 2º).",
      "",
      "### Participação social (arts. 31 a 35)",
      "- **Consulta pública**: assunto de **interesse geral**; aberta por **despacho motivado**, antes da decisão, se não houver prejuízo à parte interessada.",
      "- **Audiência pública**: a juízo da autoridade, diante da **relevância da questão**, antes da decisão.",
      "- Outros meios de participação, diretamente ou por organizações e associações.",
      "- O resultado deve ser apresentado **com a indicação do procedimento adotado**.",
      "- **Reunião conjunta** entre órgãos: lavra-se ata, juntada aos autos.",
      "",
      "### Quando faltam documentos ou informações (arts. 39 e 40)",
      "- Não sendo atendida a intimação para prestar informações, o órgão pode **suprir de ofício a omissão**, se entender relevante a matéria, sem deixar de decidir.",
      "- Se o dado ou documento **solicitado ao interessado** é necessário à apreciação do pedido e **não é apresentado no prazo**, o **processo é arquivado**.",
      "",
      "### Pareceres e laudos (arts. 42 e 43)",
      "- Prazo máximo de **15 dias** para parecer de órgão consultivo, salvo norma especial ou necessidade comprovada.",
      "- Parecer **obrigatório e vinculante** não emitido no prazo: o processo **não segue** até a apresentação.",
      "- Parecer **obrigatório e não vinculante**: o processo **pode prosseguir** sem ele, sem prejuízo da responsabilidade de quem se omitiu.",
      "- Laudo técnico não entregue no prazo: solicita-se a **outro órgão** de qualificação equivalente.",
      "",
      "### Encerramento (arts. 44 a 47)",
      "- Encerrada a instrução, o interessado tem **até 10 dias** para se manifestar.",
      "- Em **risco iminente**, a Administração pode, motivadamente, adotar **providências acauteladoras** sem manifestação prévia do interessado.",
      "- O órgão de instrução que **não decide** elabora **relatório** (pedido inicial, fases, proposta de decisão justificada) e envia à autoridade competente.",
    ]),
    atencao("**Parecer vinculante** atrasado **para o processo**; **parecer não vinculante** atrasado **não para**. É pergunta clássica."),
    q("Segundo a Lei 9.784/1999, o parecer obrigatório e vinculante que não for emitido no prazo fixado:", ["é dispensado, e o processo segue", "impede o seguimento do processo até a sua apresentação", "é substituído pelo do chefe imediato", "leva ao arquivamento do processo", "é tido como favorável ao interessado"], "B", "Art. 42, § 1º. Se for obrigatório e não vinculante, o processo pode seguir (§ 2º)."),
    ce("São inadmissíveis, no processo administrativo, as provas obtidas por meios ilícitos.", "Certo", "Art. 30."),
    q("Encerrada a instrução, o interessado terá o direito de manifestar-se no prazo máximo de:", ["3 dias", "5 dias", "10 dias", "15 dias", "30 dias"], "C", "Art. 44, salvo prazo legal diverso."),
    ce("As provas propostas pelos interessados só podem ser recusadas, mediante decisão fundamentada, se forem ilícitas, impertinentes, desnecessárias ou protelatórias.", "Certo", "Art. 38, § 2º."),
    q("A Administração pode adotar providências acauteladoras sem a prévia manifestação do interessado:", ["sempre", "em caso de risco iminente, motivadamente", "nunca", "apenas com autorização judicial", "somente nos processos tributários"], "B", "Art. 45."),
  ]);

  A("atos-e-instrucao/dever-de-decidir-e-motivacao", [
    aprofundar([
      "### Dever de decidir (art. 48)",
      "A Administração tem o dever de **emitir decisão explícita** nos processos administrativos e sobre solicitações ou reclamações, em matéria de sua competência.",
      "",
      "### Prazo (art. 49)",
      "Concluída a instrução, a Administração tem **até 30 dias** para decidir, salvo **prorrogação por igual período, expressamente motivada**.",
      "",
      "### Motivação obrigatória (art. 50)",
      "Os atos devem ser motivados, com **indicação dos fatos e dos fundamentos jurídicos**, quando:",
      "1. **neguem, limitem ou afetem** direitos ou interesses;",
      "2. **imponham ou agravem** deveres, encargos ou sanções;",
      "3. decidam **concurso ou seleção pública**;",
      "4. **dispensem ou declarem a inexigibilidade** de licitação;",
      "5. decidam **recursos administrativos**;",
      "6. decorram de **reexame de ofício**;",
      "7. deixem de aplicar **jurisprudência firmada** ou discrepem de pareceres, laudos, propostas e relatórios oficiais;",
      "8. importem **anulação, revogação, suspensão ou convalidação** de ato.",
      "",
      "### Como motivar",
      "- A motivação deve ser **explícita, clara e congruente**; pode consistir em **concordância com fundamentos de pareceres anteriores** (a chamada **motivação *per relationem***, que passam a integrar o ato).",
      "- Em vários assuntos da mesma natureza, pode-se usar **meio mecânico** que reproduza os fundamentos, se não prejudicar direito ou garantia.",
      "- Em **órgãos colegiados** e **decisões orais**, a motivação consta da ata ou de termo escrito.",
      "",
      "### Decisão coordenada (arts. 49-A a 49-G, Lei 14.210/2021)",
      "Na Administração federal, decisões que exijam a participação de **três ou mais setores, órgãos ou entidades** podem ser tomadas em decisão coordenada, quando for **justificável pela relevância da matéria** e houver **discordância** que prejudique a celeridade. **Não alcança** processos de **licitação**, os relacionados ao **poder sancionador** e os que envolvam **autoridades de Poderes distintos**. Segue os princípios da legalidade, da eficiência e da transparência.",
    ]),
    atencao("A decisão coordenada foi incluída em **2021**; provas recentes cobram. Os detalhes do procedimento (convocação, ata, recursos) estão nos arts. 49-A a 49-G: **confira o texto** se o edital citar o tema.", "Conferir"),
    q("Concluída a instrução do processo administrativo, a Administração tem o prazo de até ___ para decidir, salvo prorrogação por igual período expressamente motivada.", ["10 dias", "15 dias", "30 dias", "60 dias", "90 dias"], "C", "Art. 49."),
    ce("Devem ser motivados os atos administrativos que neguem, limitem ou afetem direitos ou interesses.", "Certo", "Art. 50, I."),
    q("A motivação que consiste em declaração de concordância com fundamentos de pareceres anteriores, que passam a integrar o ato, é admitida pela lei e conhecida como:", ["motivação aliunde (per relationem)", "motivação inexistente", "vício de forma insanável", "desvio de finalidade", "motivação implícita vedada"], "A", "Art. 50, § 1º."),
    ce("Nos processos de licitação, a decisão coordenada é o procedimento obrigatório previsto na Lei 9.784/1999.", "Errado", "O art. 49-A, § 1º, exclui expressamente os processos de licitação, os relacionados ao poder sancionador e os que envolvam autoridades de Poderes distintos."),
  ]);

  /* ================= DESFECHO, RECURSOS E PRAZOS ================= */

  A("desfecho-recursos-e-prazos/desistencia-e-extincao-do-processo", [
    aprofundar([
      "### Desistência e renúncia (art. 51)",
      "O interessado pode, **por manifestação escrita**, **desistir total ou parcialmente** do pedido ou **renunciar a direitos disponíveis**.",
      "- Havendo vários interessados, a desistência ou renúncia **atinge somente quem a formulou**.",
      "- Não prejudica o prosseguimento do processo se a Administração considerar que o **interesse público** o exige.",
      "",
      "### Extinção (art. 52)",
      "O órgão competente pode declarar **extinto** o processo quando exaurida sua finalidade ou quando o objeto da decisão se tornar **impossível, inútil ou prejudicado por fato superveniente**.",
      "",
      "### Não confundir",
      "- **Desistência** do pedido: o interessado abre mão do que pediu.",
      "- **Renúncia**: abre mão do próprio direito, só se for **disponível**.",
      "- **Arquivamento por falta de dados** solicitados ao interessado (art. 40) é outro mecanismo.",
    ]),
    q("Havendo vários interessados, a desistência manifestada por um deles:", ["extingue o processo para todos", "atinge somente quem a formulou", "depende da concordância dos demais", "é nula", "obriga a Administração a arquivar"], "B", "Art. 51, § 1º."),
    ce("A desistência do interessado obriga a Administração a encerrar o processo, mesmo que haja interesse público no seu prosseguimento.", "Errado", "Art. 51, § 2º: a Administração pode prosseguir se o interesse público exigir."),
    q("O processo pode ser declarado extinto quando:", ["o interessado se atrasa por um dia", "o objeto da decisão se tornar impossível, inútil ou prejudicado por fato superveniente", "a autoridade for substituída", "o processo tem mais de um ano", "o interessado falecer, em qualquer hipótese"], "B", "Art. 52."),
  ]);

  A("desfecho-recursos-e-prazos/anulacao-revogacao-e-convalidacao", [
    aprofundar([
      "### Poder-dever (art. 53)",
      "A Administração **deve anular** seus atos eivados de vício de **legalidade** e **pode revogá-los** por **conveniência ou oportunidade**, **respeitados os direitos adquiridos**. A base jurisprudencial são as Súmulas **346** e **473** do STF.",
      "",
      "### Decadência (art. 54)",
      "O direito de **anular** atos de que decorram **efeitos favoráveis** ao destinatário **decai em 5 anos**, contados da data em que foram praticados, **salvo comprovada má-fé**.",
      "- Em caso de **efeitos patrimoniais contínuos**, o prazo conta-se do **primeiro pagamento**.",
      "- Considera-se exercício do direito de anular qualquer **medida de autoridade administrativa que importe impugnação à validade do ato**.",
      "",
      "### Convalidação (art. 55)",
      "Em decisão que evidencie **não haver lesão ao interesse público** nem **prejuízo a terceiros**, os atos com **defeitos sanáveis** podem ser **convalidados** pela própria Administração.",
      "",
      "### Quadro-resumo",
    ]),
    {
      tipo: "tabela",
      titulo: "Anulação × revogação × convalidação",
      cabecalho: ["Instituto", "Motivo", "Natureza", "Efeitos"],
      linhas: [
        ["Anulação", "Ilegalidade", "Dever (a Administração deve anular)", "Retroativos (ex tunc)"],
        ["Revogação", "Conveniência e oportunidade", "Faculdade", "Daqui para a frente (ex nunc), respeitando direitos adquiridos"],
        ["Convalidação", "Defeito sanável, sem lesão ao interesse público", "Faculdade, pela própria Administração", "Retroativos, saneando o ato"],
      ],
    },
    atencao("O prazo de **5 anos** vale para anular atos **favoráveis** ao destinatário e **não vale** quando há **má-fé comprovada**. Para a Administração rever ato **desfavorável** não há essa decadência."),
    q("O direito da Administração de anular os atos de que decorram efeitos favoráveis para os destinatários decai em:", ["2 anos", "3 anos", "5 anos", "10 anos", "20 anos"], "C", "Art. 54, caput, salvo comprovada má-fé."),
    ce("Em se tratando de efeitos patrimoniais contínuos, o prazo de decadência para anular conta-se do primeiro pagamento.", "Certo", "Art. 54, § 1º."),
    q("A Administração pode revogar seus atos:", ["por ilegalidade, com efeitos retroativos", "por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos", "a qualquer tempo, sem limites", "apenas por ordem judicial", "somente após o prazo de cinco anos"], "B", "Art. 53."),
    ce("Atos com defeitos sanáveis podem ser convalidados pela própria Administração, desde que não haja lesão ao interesse público nem prejuízo a terceiros.", "Certo", "Art. 55."),
  ]);

  A("desfecho-recursos-e-prazos/recurso-administrativo-e-revisao", [
    aprofundar([
      "### Cabimento e trâmite (arts. 56 e 57)",
      "Das decisões administrativas cabe recurso, por **razões de legalidade e de mérito**.",
      "- O recurso é dirigido à **autoridade que proferiu a decisão**, que, se **não reconsiderar em 5 dias**, o encaminha à autoridade superior (**efeito de retratação**).",
      "- **Independe de caução**, salvo exigência legal.",
      "- Tramita no máximo por **três instâncias** administrativas, salvo lei diversa.",
      "- Se o recorrente alegar que a decisão contraria **súmula vinculante**, a autoridade prolatora, se não reconsiderar, explicita as razões da aplicabilidade ou não da súmula, antes de remeter.",
      "",
      "### Legitimidade (art. 58)",
      "Titulares de direitos que sejam parte; aqueles **indiretamente afetados**; organizações e associações representativas (direitos **coletivos**); cidadãos ou associações (direitos **difusos**).",
      "",
      "### Prazos (art. 59)",
      "- Interposição: **10 dias**, contados da **ciência ou divulgação oficial** da decisão (salvo prazo específico em lei).",
      "- Decisão do recurso: **30 dias** do recebimento dos autos pelo órgão competente, **prorrogáveis por igual período** com justificativa explícita.",
      "- Intimação dos demais interessados para alegações: **5 dias úteis** (art. 62).",
      "",
      "### Efeito suspensivo (art. 61)",
      "Como regra, o recurso **não tem efeito suspensivo**. Havendo **justo receio de prejuízo de difícil ou incerta reparação**, a autoridade recorrida ou a imediatamente superior pode conceder, **de ofício ou a pedido**.",
      "",
      "### Não conhecimento (art. 63)",
      "O recurso **não é conhecido** quando interposto: **fora do prazo**; perante **órgão incompetente**; por quem **não seja legitimado**; ou **após exaurida a esfera administrativa**. Se o órgão for incompetente, **indica-se a autoridade competente e devolve-se o prazo**. O não conhecimento **não impede** a Administração de rever de ofício o ato ilegal, desde que não ocorrida **preclusão administrativa**.",
      "",
      "### Julgamento (art. 64)",
      "O órgão pode **confirmar, modificar, anular ou revogar**, total ou parcialmente, a decisão. Se puder resultar **gravame** à situação do recorrente, ele é **cientificado para formular alegações antes** da decisão. Assim, a **reformatio in pejus** (piorar a situação do recorrente) só é admitida com **contraditório prévio**.",
      "",
      "### Revisão (art. 65)",
      "Processos de que resultem **sanções** podem ser **revistos a qualquer tempo**, a pedido ou de ofício, quando surgirem **fatos novos ou circunstâncias relevantes** que justifiquem a **inadequação da sanção**. **Não pode haver agravamento** da sanção.",
    ]),
    {
      tipo: "tabela",
      titulo: "Os números do recurso",
      cabecalho: ["Etapa", "Prazo"],
      linhas: [
        ["Reconsiderar antes de subir", "5 dias"],
        ["Interpor o recurso", "10 dias"],
        ["Alegações dos demais interessados", "5 dias úteis"],
        ["Decidir o recurso", "30 dias, prorrogáveis por mais 30"],
        ["Instâncias", "no máximo 3"],
      ],
    },
    atencao("Dois \"agravamentos\" diferentes: no **recurso**, a autoridade **pode** piorar a situação do recorrente, **desde que o ouça antes**; na **revisão** de processo sancionador, **nunca** pode agravar a sanção."),
    q("Salvo disposição legal específica, o prazo para interposição de recurso administrativo é de:", ["3 dias", "5 dias", "10 dias", "15 dias", "30 dias"], "C", "Art. 59, contado da ciência ou divulgação oficial da decisão."),
    ce("Em regra, o recurso administrativo não tem efeito suspensivo, salvo disposição legal em contrário ou justo receio de prejuízo de difícil ou incerta reparação.", "Certo", "Art. 61."),
    q("O recurso administrativo não será conhecido quando interposto:", ["por quem não seja legitimado", "dentro do prazo legal", "pelo titular do direito", "perante a autoridade competente", "por advogado"], "A", "Art. 63, III. Também: fora do prazo, perante órgão incompetente ou após exaurida a esfera administrativa."),
    ce("Da revisão do processo administrativo de que resultem sanções pode decorrer agravamento da sanção aplicada.", "Errado", "Art. 65, parágrafo único."),
    q("Se da decisão do recurso puder decorrer gravame à situação do recorrente, este deverá:", ["ser surpreendido, para evitar fraude", "ser cientificado para formular suas alegações antes da decisão", "ter o recurso indeferido", "ser substituído por outro interessado", "pagar caução"], "B", "Art. 64, parágrafo único."),
  ]);

  A("desfecho-recursos-e-prazos/contagem-de-prazos", [
    aprofundar([
      "### Regras do art. 66",
      "- Os prazos começam a correr da data da **cientificação oficial**, **excluindo-se o dia do começo** e **incluindo-se o do vencimento**.",
      "- Se o vencimento cair em dia sem expediente ou com expediente encerrado antes da hora normal, **prorroga-se** até o **primeiro dia útil seguinte**.",
      "- Prazos em **dias** contam-se de modo **contínuo** (não só dias úteis, salvo disposição específica de **dias úteis**, como as intimações).",
      "- Prazos em **meses ou anos** contam-se **de data a data**; se no mês do vencimento não houver o dia equivalente, o termo é o **último dia do mês**.",
      "",
      "### Suspensão (art. 67)",
      "Salvo **motivo de força maior devidamente comprovado**, os prazos processuais **não se suspendem**.",
      "",
      "### Exemplo",
      "Interessado cientificado numa **segunda-feira** (dia 1º) de recurso em **10 dias**: o dia 1º não conta; o prazo vence no dia **11**. Se o dia 11 cair num sábado, passa para a **segunda-feira seguinte**.",
    ]),
    q("Quanto à contagem dos prazos na Lei 9.784/1999, é correto afirmar que:", ["incluem o dia do começo e excluem o do vencimento", "excluem o dia do começo e incluem o do vencimento", "excluem os dois dias", "incluem os dois dias", "contam-se apenas em dias úteis, sempre"], "B", "Art. 66, caput."),
    ce("O prazo que vencer em dia sem expediente prorroga-se até o primeiro dia útil seguinte.", "Certo", "Art. 66, § 1º."),
    ce("Os prazos processuais suspendem-se por qualquer motivo, a pedido do interessado.", "Errado", "Art. 67: só não se suspendem se não houver motivo de força maior devidamente comprovado."),
    q("Os prazos fixados em meses ou anos contam-se:", ["de dia útil a dia útil", "de data a data", "em dias corridos, convertidos", "pelo calendário forense", "pelo número de sessões"], "B", "Art. 66, § 3º."),
  ]);

  A("desfecho-recursos-e-prazos/prioridade-na-tramitacao", [
    aprofundar([
      "### Quem tem prioridade (art. 69-A)",
      "Têm **prioridade na tramitação**, em qualquer órgão ou instância, os procedimentos em que figure como parte ou interessado:",
      "- pessoa com **60 anos ou mais**;",
      "- pessoa com **deficiência**, física ou mental;",
      "- pessoa com **doença grave**, com base em conclusão da **medicina especializada**, mesmo que contraída **após o início do processo**. A lei lista, por exemplo: tuberculose ativa, esclerose múltipla, neoplasia maligna, hanseníase, paralisia irreversível e incapacitante, cardiopatia grave, doença de Parkinson, nefropatia grave, hepatopatia grave, síndrome de imunodeficiência adquirida (aids), entre outras.",
      "",
      "### Como se obtém",
      "A pessoa interessada **junta prova de sua condição** e **requer** à autoridade competente, que determina as providências. Deferida a prioridade, os autos recebem **identificação própria** que evidencie o regime prioritário.",
    ]),
    atencao("Prioridade **depende de requerimento com prova**; não é automática. O art. 69-A foi incluído em **2009**. Se outras leis ampliarem a prioridade (idosos mais velhos, por exemplo), **confira** o texto atual.", "Conferir"),
    q("Têm prioridade na tramitação dos processos administrativos federais, segundo o art. 69-A da Lei 9.784/1999, as pessoas com idade igual ou superior a:", ["50 anos", "55 anos", "60 anos", "65 anos", "70 anos"], "C", "Art. 69-A, I."),
    ce("A prioridade na tramitação independe de requerimento da pessoa interessada, sendo concedida automaticamente pela Administração.", "Errado", "Art. 69-A, § 1º: a pessoa interessada deve juntar prova de sua condição e requerê-la."),
    ce("A pessoa que contraiu doença grave após o início do processo também tem direito à prioridade, desde que haja conclusão da medicina especializada.", "Certo", "Art. 69-A, IV."),
  ]);
})();

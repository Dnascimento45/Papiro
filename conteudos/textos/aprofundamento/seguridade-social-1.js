/* Aprofundamento · Seguridade Social (parte 1): Constituição, RGPS (Lei 8.213/1991) e Regulamento.
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/seguridade-social.js.
   Números conferidos no texto da Lei 8.213 e da EC 103/2019 (Planalto). */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-a/seguridade-social/${caminho}`, { livros: LIVROS, blocos });
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
    { titulo: "Constituição Federal, arts. 194 a 204 (Seguridade Social)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", nota: "Leia os arts. 194, 195, 196, 201, 203 e 204 inteiros." },
    { titulo: "Lei 8.213/1991 · Planos de Benefícios da Previdência Social", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm", nota: "Ordem sugerida: segurados (11 a 13), período de graça (15), dependentes (16), carência (25 e 26) e benefícios." },
    { titulo: "Lei 8.212/1991 · Plano de Custeio", url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm" },
    { titulo: "Emenda Constitucional 103/2019 (Reforma da Previdência)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm", nota: "Regras permanentes e de transição; leia o art. 19 em diante." },
    { titulo: "Manual de Direito Previdenciário", autor: "Frederico Amado", nota: "Referência didática para concursos; atualize sempre com a legislação vigente." },
    { titulo: "Curso de Direito Previdenciário", autor: "Fábio Zambitte Ibrahim", nota: "Aprofundamento teórico." },
  ];

  /* ================= SEGURIDADE NA CONSTITUIÇÃO ================= */

  A("seguridade-social-na-constituicao/conceito-e-composicao-saude-previdencia-e-assistencia", [
    aprofundar([
      "### Conceito (CF, art. 194)",
      "A seguridade social compreende **um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade**, destinadas a assegurar os direitos relativos à **saúde, à previdência e à assistência social**.",
      "",
      "### O tripé",
    ]),
    {
      tipo: "tabela",
      titulo: "Saúde × previdência × assistência",
      cabecalho: ["Área", "Quem tem direito", "Contribuição?", "Base"],
      linhas: [
        ["Saúde", "**Todos** (universal)", "Não", "Art. 196: direito de todos e dever do Estado"],
        ["Previdência", "Quem **contribui** (segurados e dependentes)", "Sim, caráter contributivo e filiação obrigatória", "Art. 201"],
        ["Assistência social", "Quem **dela necessitar**", "Não", "Art. 203"],
      ],
    },
    aprofundar([
      "### Saúde: o SUS (arts. 196 a 200)",
      "- **Diretrizes** (art. 198): **descentralização**, com direção única em cada esfera; **atendimento integral**, com prioridade para as atividades preventivas; e **participação da comunidade**.",
      "- Financiamento: recursos do **orçamento da seguridade social** da União, dos Estados, do DF e dos Municípios, além de outras fontes.",
      "- **Iniciativa privada**: a assistência à saúde é **livre** (art. 199), podendo participar do SUS de forma **complementar**, com preferência para as entidades **filantrópicas e sem fins lucrativos**. É **vedado** destinar recursos públicos a auxílios ou subvenções a instituições com **fins lucrativos**. É vedada a participação direta ou indireta de **empresas ou capitais estrangeiros** na assistência à saúde, salvo nos casos previstos em lei.",
      "- Leis: **Lei 8.080/1990** (organização do SUS) e **Lei 8.142/1990** (participação da comunidade e transferências).",
      "",
      "### Previdência (art. 201)",
      "Organizada sob a forma de **regime geral**, de caráter **contributivo** e de **filiação obrigatória**, observados critérios que preservem o **equilíbrio financeiro e atuarial**.",
      "",
      "### Assistência (art. 203)",
      "Prestada **a quem dela necessitar, independentemente de contribuição**: proteção à família, à maternidade, à infância, à adolescência e à velhice; amparo às crianças e adolescentes carentes; promoção da integração ao mercado de trabalho; habilitação e reabilitação das pessoas com deficiência; **garantia de um salário mínimo** à pessoa com deficiência e ao idoso sem meios de prover a própria manutenção ou de tê-la provida por sua família.",
    ]),
    atencao("Quem pergunta \"quem tem direito\": **saúde = todos**; **assistência = quem precisar**, sem contribuição; **previdência = quem contribui**."),
    q("Segundo a Constituição Federal, a assistência social será prestada:", ["somente a quem contribuir para a seguridade", "a quem dela necessitar, independentemente de contribuição", "apenas aos trabalhadores urbanos", "a todos, indistintamente, sem critério de necessidade", "somente aos aposentados"], "B", "CF, art. 203."),
    ce("A saúde é direito de todos e dever do Estado, não dependendo de contribuição específica do beneficiário.", "Certo", "CF, art. 196: acesso universal e igualitário."),
    q("É vedado pela Constituição:", ["a participação complementar das instituições privadas no SUS", "a destinação de recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos", "a assistência à saúde pela iniciativa privada", "a preferência às entidades filantrópicas", "o financiamento do SUS por mais de uma esfera"], "B", "CF, art. 199, § 2º."),
    ce("A Constituição prevê como diretriz do SUS o atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais.", "Certo", "CF, art. 198, II."),
  ]);

  A("seguridade-social-na-constituicao/principios-e-objetivos-art-194", [
    aprofundar([
      "### Os sete objetivos (parágrafo único do art. 194)",
      "1. **Universalidade** da cobertura e do atendimento.",
      "2. **Uniformidade e equivalência** dos benefícios e serviços às populações **urbanas e rurais**.",
      "3. **Seletividade e distributividade** na prestação dos benefícios e serviços.",
      "4. **Irredutibilidade** do valor dos benefícios.",
      "5. **Equidade** na forma de participação no **custeio**.",
      "6. **Diversidade da base de financiamento**, com receitas e despesas vinculadas identificadas por área, preservado o **caráter contributivo** da previdência.",
      "7. **Caráter democrático e descentralizado** da administração, mediante **gestão quadripartite**, com participação dos **trabalhadores, empregadores, aposentados e Poder Público** nos órgãos colegiados.",
      "",
      "### Como memorizar",
      "A banca costuma trocar palavras. Associe: **universalidade** (quem), **uniformidade** (urbano × rural), **seletividade** (quais riscos), **distributividade** (redistribuir renda), **irredutibilidade** (valor nominal não cai), **equidade** (custeio), **diversidade** (fontes), **gestão quadripartite**.",
      "",
      "### Seletividade × distributividade",
      "- **Seletividade**: escolher os **riscos** cobertos e os **beneficiários** de cada benefício (por exemplo, salário-família só para baixa renda).",
      "- **Distributividade**: reduzir **desigualdades** com a redistribuição de renda.",
      "",
      "### Quadripartite",
      "**Quatro** segmentos: **trabalhadores**, **empregadores**, **aposentados** e **Poder Público** (tripartite era antes da EC 20/1998, sem os aposentados).",
    ]),
    atencao("**Irredutibilidade** protege o **valor nominal** dos benefícios; o **reajuste** que preserva o valor **real** está no art. 201, § 4º. A gestão é **quadripartite** (incluem-se os **aposentados**)."),
    q("A gestão da seguridade social, segundo a Constituição, é quadripartite, com a participação de:", ["trabalhadores, empregadores, aposentados e Poder Público", "apenas empregadores e Poder Público", "somente trabalhadores e empregadores", "União, Estados, Municípios e DF", "contribuintes individuais, empregados, avulsos e domésticos"], "A", "CF, art. 194, VII."),
    ce("O princípio da seletividade e distributividade orienta a escolha dos riscos e beneficiários dos benefícios e serviços, buscando redistribuir renda.", "Certo", "CF, art. 194, III."),
    ce("A uniformidade e a equivalência dos benefícios e serviços impedem tratamento diferenciado entre as populações urbanas e rurais.", "Certo", "CF, art. 194, II."),
    q("Segundo a Constituição Federal, a diversidade da base de financiamento significa que:", ["só haverá contribuições dos empregadores", "o financiamento provém de várias fontes, com receitas e despesas identificadas por área e preservado o caráter contributivo da previdência", "somente a União financia", "não existe vinculação de receitas", "a previdência é gratuita"], "B", "CF, art. 194, VI."),
  ]);

  A("seguridade-social-na-constituicao/financiamento-art-195", [
    aprofundar([
      "### Regra geral",
      "A seguridade social é financiada **por toda a sociedade, de forma direta e indireta**, nos termos da lei, mediante **recursos dos orçamentos** da União, dos Estados, do DF e dos Municípios e das **contribuições sociais** (art. 195).",
      "",
      "### Contribuições sociais (art. 195, I a IV)",
      "- **Do empregador, da empresa e da entidade equiparada**, incidentes sobre: a **folha de salários** e demais rendimentos do trabalho (pagos ou creditados, a qualquer título, à pessoa física que lhe preste serviço, mesmo sem vínculo); a **receita ou o faturamento**; e o **lucro**.",
      "- **Do trabalhador e dos demais segurados da previdência**, **não incidindo** contribuição sobre **aposentadoria e pensão** concedidas pelo RGPS. Podem ser adotadas **alíquotas progressivas** conforme o valor do salário de contribuição.",
      "- Sobre a **receita de concursos de prognósticos** (loterias).",
      "- Do **importador de bens ou serviços do exterior**.",
      "",
      "### Regras importantes",
      "- **Precedência da fonte de custeio** (§ 5º): nenhum benefício ou serviço da seguridade pode ser **criado, majorado ou estendido** sem a **correspondente fonte de custeio total**.",
      "- **Anterioridade nonagesimal (noventena)** (§ 6º): as contribuições só podem ser exigidas **após 90 dias** da publicação da lei que as instituiu ou modificou (não se aplica a anterioridade anual).",
      "- **Débito com a seguridade** (§ 3º): a **pessoa jurídica em débito** com o sistema não pode **contratar com o Poder Público** nem dele receber **benefícios ou incentivos fiscais ou creditícios**.",
      "- **Orçamento da seguridade social** (§ 2º): elaborado de forma **integrada** pelos órgãos de saúde, previdência e assistência, com **gestão própria** dos recursos de cada área.",
      "- **Outras fontes** (§ 4º): por **lei complementar**, observado o art. 154, I.",
      "- **Alíquotas ou bases diferenciadas** (§ 9º), em razão da atividade econômica, da utilização intensiva de mão de obra, do porte da empresa ou da condição estrutural do mercado de trabalho.",
      "- **Entidades beneficentes de assistência social** (§ 7º): **imunes** (isentas, na linguagem do texto) das contribuições, nos termos da lei.",
    ]),
    atencao("A reforma tributária (EC 132/2023) mudou tributos sobre consumo e, com isso, parte das contribuições sobre **receita e faturamento** (PIS e COFINS). **Confira a redação atual do art. 195** antes da prova.", "Conferir"),
    q("O princípio segundo o qual nenhum benefício ou serviço da seguridade social pode ser criado, majorado ou estendido sem a correspondente fonte de custeio total é o da:", ["universalidade", "precedência da fonte de custeio (contrapartida)", "irredutibilidade", "seletividade", "equidade"], "B", "CF, art. 195, § 5º."),
    ce("As contribuições sociais da seguridade somente podem ser exigidas após decorridos 90 dias da data da publicação da lei que as houver instituído ou modificado.", "Certo", "Anterioridade nonagesimal, art. 195, § 6º."),
    q("Segundo a Constituição, a pessoa jurídica em débito com o sistema da seguridade social:", ["pode contratar com o Poder Público, mediante garantia", "não pode contratar com o Poder Público nem dele receber benefícios ou incentivos fiscais ou creditícios", "perde a personalidade jurídica", "fica isenta de novas contribuições", "só pode receber crédito privado"], "B", "CF, art. 195, § 3º."),
    ce("Incide contribuição previdenciária do segurado sobre as aposentadorias e pensões concedidas pelo regime geral de previdência social.", "Errado", "CF, art. 195, II: não incide contribuição sobre aposentadoria e pensão do RGPS."),
  ]);

  A("seguridade-social-na-constituicao/previdencia-social-na-constituicao-arts-201-e-202", [
    aprofundar([
      "### Caráter (art. 201)",
      "Previdência **contributiva**, de **filiação obrigatória**, com critérios que preservem o **equilíbrio financeiro e atuarial**. Atende, nos termos da lei, a:",
      "1. **cobertura dos eventos de incapacidade temporária ou permanente** para o trabalho e **idade avançada**;",
      "2. **proteção à maternidade**, especialmente à gestante;",
      "3. **proteção ao trabalhador em situação de desemprego involuntário**;",
      "4. **salário-família e auxílio-reclusão** para os dependentes dos segurados de **baixa renda**;",
      "5. **pensão por morte** do segurado, homem ou mulher, ao cônjuge ou companheiro e dependentes.",
      "",
      "### Regras do art. 201",
      "- **Piso**: nenhum benefício que **substitua** o salário de contribuição ou o rendimento do trabalho terá valor **inferior ao salário mínimo** (§ 2º).",
      "- Todos os **salários de contribuição** considerados no cálculo são **atualizados** (§ 3º).",
      "- **Reajustamento** periódico para preservar, em caráter permanente, o **valor real** (§ 4º).",
      "- **Vedada a filiação ao RGPS**, na qualidade de **facultativo**, de pessoa **participante de regime próprio** (§ 5º).",
      "- **Gratificação natalina** (13º) dos aposentados e pensionistas com base no valor dos proventos de **dezembro** (§ 6º).",
      "- **Aposentadoria** (§ 7º): **65 anos (homem) e 62 (mulher)**, observado tempo mínimo de contribuição; **60 e 55** para **trabalhadores rurais** e os de **economia familiar** (produtor rural, garimpeiro e pescador artesanal). Redução de **5 anos** para **professores** da educação infantil e dos ensinos fundamental e médio, com comprovação de efetivo exercício de magistério (§ 8º).",
      "- **Contagem recíproca** do tempo de contribuição entre RGPS e regimes próprios (§ 9º).",
      "- **Ganhos habituais** do empregado, a qualquer título, incorporados ao salário para efeito de contribuição e de repercussão em benefícios (§ 11).",
      "- **Sistema especial de inclusão previdenciária** para trabalhadores de **baixa renda** e sem renda própria que se dediquem exclusivamente ao trabalho doméstico no âmbito da residência (§§ 12 e 13).",
      "- **Vedado o tempo de contribuição fictício** (§ 14).",
      "- **Vedada a adoção de requisitos ou critérios diferenciados** para a concessão de benefícios, ressalvados os casos de **pessoas com deficiência** e de atividades com **efetiva exposição a agentes nocivos** à saúde (§ 1º).",
      "",
      "### Previdência complementar (art. 202)",
      "Regime de **caráter complementar**, **organizado de forma autônoma** em relação ao RGPS, **facultativo**, baseado na constituição de **reservas** que garantam o benefício contratado. Leis complementares tratam do tema (LC 108 e 109/2001).",
      "",
      "### Três regimes",
      "**RGPS** (iniciativa pública, INSS, setor privado), **RPPS** (regimes próprios de servidores titulares de cargo efetivo, art. 40) e **regime de previdência complementar** (facultativo, privado ou público).",
    ]),
    atencao("A Constituição fala em **incapacidade temporária ou permanente** (nomes novos dos antigos auxílio-doença e aposentadoria por invalidez). **Salário-família e auxílio-reclusão** são só para **baixa renda**; a pensão por morte, não."),
    q("Segundo o art. 201 da Constituição Federal, nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior:", ["a dois salários mínimos", "ao salário mínimo", "à metade do salário mínimo", "ao teto do RGPS", "a um terço do salário de contribuição"], "B", "CF, art. 201, § 2º."),
    ce("A Constituição veda a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.", "Certo", "CF, art. 201, § 5º."),
    q("O salário-família e o auxílio-reclusão são devidos, segundo a Constituição, aos dependentes dos segurados:", ["de qualquer renda", "de baixa renda", "somente rurais", "somente empregados domésticos", "com mais de 60 anos"], "B", "CF, art. 201, IV."),
    ce("O regime de previdência complementar é de caráter facultativo e organizado de forma autônoma em relação ao regime geral.", "Certo", "CF, art. 202."),
  ]);

  /* ================= RGPS: SEGURADOS, FILIAÇÃO, DEPENDENTES ================= */

  A("regime-geral-de-previdencia-social-lei-8-213-1991/filiacao-e-inscricao", [
    aprofundar([
      "### Filiação",
      "**Vínculo jurídico** que se estabelece entre a pessoa e a Previdência Social, do qual decorrem **direitos e obrigações**.",
      "- Para os segurados **obrigatórios**, a filiação ocorre **automaticamente** com o **exercício de atividade remunerada** abrangida pelo RGPS.",
      "- Para o **facultativo**, a filiação ocorre com a **inscrição** e o **primeiro recolhimento** de contribuição.",
      "",
      "### Inscrição",
      "**Ato administrativo** em que o segurado (ou o dependente) é **cadastrado** e identificado. Para o empregado, a inscrição se dá com o **registro** e a anotação do contrato; para os demais, o interessado se inscreve (em geral, nos canais do INSS ou da Receita). O **número de identificação** do trabalhador é o **NIT** (PIS, PASEP, NIT, e, na prática atual, o CPF como identificador).",
      "",
      "### Filiação × inscrição",
      "- **Filiação**: vínculo **material** (nasce do fato: trabalhar e contribuir);",
      "- **Inscrição**: ato **formal** (cadastro).",
      "",
      "### Obrigatórios × facultativo",
      "- **Obrigatório**: filiação **automática**, **independe da vontade** e do recolhimento (quem deve recolher, pelo empregado, é a empresa).",
      "- **Facultativo**: depende da **vontade** e do pagamento. **Não** há filiação retroativa de facultativo, e a contribuição em atraso **não** é computada para ele (sem recolhimento em dia, o período não conta).",
      "",
      "### Regimes próprios",
      "Quem é servidor titular de cargo efetivo em **regime próprio** não pode ser facultativo no RGPS, e o **militar** das Forças Armadas também tem regime próprio.",
    ]),
    atencao("**Filiação** nasce do **fato** (para obrigatórios) e é **automática**. **Inscrição** é o **cadastro**. Para o facultativo, a filiação só existe com a **inscrição + primeira contribuição**."),
    q("Para o segurado obrigatório do RGPS, a filiação:", ["depende da inscrição prévia e de requerimento", "ocorre automaticamente com o exercício da atividade remunerada abrangida pelo regime", "só ocorre após o primeiro recolhimento", "depende da vontade do segurado", "ocorre apenas aos 21 anos"], "B", "Filiação automática."),
    ce("A filiação do segurado facultativo ocorre com a inscrição e o primeiro recolhimento de contribuição.", "Certo", "Facultativo se filia por ato de vontade."),
    q("O ato pelo qual o segurado é cadastrado e identificado na Previdência Social denomina-se:", ["filiação", "inscrição", "carência", "habilitação", "revisão"], "B", "A filiação é o vínculo jurídico."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios", [
    aprofundar([
      "### Cinco categorias (art. 11)",
      "**Empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial.**",
      "",
      "### Empregado (inciso I)",
      "Quem presta serviço de natureza urbana ou rural, em caráter **não eventual**, sob **subordinação** e mediante **remuneração**. Inclui o **diretor empregado**, o brasileiro ou estrangeiro domiciliado e contratado no Brasil para trabalhar em **sucursal ou agência de empresa nacional no exterior**, o **servidor público ocupante de cargo em comissão, sem vínculo efetivo** (temporário, cargo em comissão), o **exercente de mandato eletivo** não vinculado a regime próprio, e os empregados de organismo oficial internacional.",
      "",
      "### Doméstico",
      "Quem presta serviço de forma **contínua, subordinada, onerosa e pessoal**, e **de finalidade não lucrativa** à pessoa ou à família, **no âmbito residencial** destas, por **mais de 2 dias por semana** (LC 150/2015).",
      "",
      "### Contribuinte individual (inciso V)",
      "- **Autônomo** (por conta própria) e **eventual** (prestador de serviço **sem relação de emprego**);",
      "- **empresário**: titular de firma individual, diretor não empregado, membro de conselho de administração de S.A., **sócio** (cotista, gerente, de indústria, solidário) que participe da gestão ou receba remuneração decorrente de seu trabalho;",
      "- **ministro de confissão religiosa** e membro de instituto de vida consagrada ou ordem religiosa;",
      "- **associado eleito para direção** de cooperativa, associação ou entidade de qualquer natureza ou finalidade, bem como o síndico ou administrador **eleito** para exercer atividade de direção condominial, desde que **recebam remuneração**;",
      "- **cooperado** de cooperativa de produção; **MEI** (microempreendedor individual) e o produtor rural **com área acima de 4 módulos fiscais** (ou com empregados permanentes).",
      "",
      "### Trabalhador avulso (inciso VI)",
      "Presta serviço de natureza urbana ou rural, **a diversas empresas**, **sem vínculo de emprego**, com **intermediação obrigatória** do **órgão gestor de mão de obra (OGMO)**, no caso do trabalhador portuário, ou do **sindicato da categoria**.",
      "",
      "### Segurado especial (inciso VII)",
      "Pessoa física residente no imóvel rural (ou em aglomerado próximo) que, **individualmente ou em regime de economia familiar**, ainda que com auxílio **eventual de terceiros**, é:",
      "- **produtor** (proprietário, usufrutuário, possuidor, assentado, parceiro, meeiro, comodatário, arrendatário) que explore atividade **agropecuária em área de até 4 módulos fiscais** ou de **seringueiro/extrativista**;",
      "- **pescador artesanal** ou assemelhado, que faça da pesca **profissão habitual ou principal meio de vida**;",
      "- **cônjuge ou companheiro** e **filho maior de 16 anos** (ou equiparado) que trabalhem **com o grupo familiar**.",
      "- A economia familiar é **sem empregados permanentes**; contratação **eventual** de empregados por prazo determinado fica limitada a **120 pessoas/dia** no ano civil.",
      "",
      "### Aposentado que continua trabalhando",
      "O aposentado pelo RGPS que permanece em atividade ou retorna a ela **continua segurado obrigatório** e **contribui**, mas, em regra, **não faz jus a prestação alguma** da Previdência em razão dessa atividade, **exceto salário-família e reabilitação profissional** (quando empregado).",
    ]),
    {
      tipo: "tabela",
      titulo: "Segurado especial × contribuinte individual rural",
      cabecalho: ["Situação", "Enquadramento"],
      linhas: [
        ["Produtor rural, economia familiar, até 4 módulos fiscais, sem empregados permanentes", "Segurado especial"],
        ["Produtor rural com mais de 4 módulos fiscais", "Contribuinte individual"],
        ["Pescador artesanal em regime de economia familiar", "Segurado especial"],
        ["Pescador com embarcação acima de 6 toneladas de arqueação bruta e empregados", "Contribuinte individual (conferir os limites atuais)"],
      ],
    },
    atencao("O **segurado especial** contribui sobre o **resultado da comercialização da produção**, e não sobre salário. O limite de **4 módulos fiscais** é a divisa com o contribuinte individual (produtor rural em área maior)."),
    q("São segurados obrigatórios da Previdência Social, nos termos da Lei 8.213/1991:", ["empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial", "somente empregados e avulsos", "empregado, doméstico e facultativo", "contribuinte individual e facultativo apenas", "apenas os trabalhadores com carteira assinada"], "A", "Art. 11, I a VII."),
    ce("O trabalhador avulso presta serviço a diversas empresas, sem vínculo de emprego, com intermediação obrigatória do órgão gestor de mão de obra ou do sindicato da categoria.", "Certo", "Art. 11, VI."),
    q("O produtor rural que, em regime de economia familiar, explora atividade agropecuária em área de até 4 módulos fiscais enquadra-se como:", ["empregado", "contribuinte individual", "segurado especial", "segurado facultativo", "doméstico"], "C", "Art. 11, VII, a."),
    ce("O aposentado pelo RGPS que retorna à atividade deixa de ser segurado obrigatório, ficando isento de contribuir.", "Errado", "Ele continua segurado obrigatório e contribui, mas, em regra, não tem direito a prestações em razão da nova atividade."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/segurado-facultativo", [
    aprofundar([
      "### Quem pode (art. 13)",
      "Pessoa **maior de 14 anos** que se filie ao RGPS **mediante contribuição**, **desde que não esteja incluída** nas categorias de segurados obrigatórios.",
      "",
      "### Exemplos de facultativos",
      "**Dona ou dono de casa**, **estudante**, **síndico não remunerado**, **desempregado**, **bolsista** e **estagiário** sem vínculo obrigatório, **presidiário que não exerce atividade remunerada**, **brasileiro que reside no exterior**, **pessoa que deixou de ser segurado obrigatório**.",
      "",
      "### Regras",
      "- **Idade mínima: 14 anos**.",
      "- **Não pode ser facultativo** quem já se enquadra como obrigatório e **quem participa de regime próprio** (servidor titular de cargo efetivo).",
      "- **Contribuição**: **20%** do salário de contribuição (plano normal); **11%** (plano simplificado, sobre o salário mínimo, **sem direito à aposentadoria por tempo de contribuição**); **5%** para **dona de casa de baixa renda** (família inscrita no CadÚnico, com renda de até 2 salários mínimos) e **MEI**, também sem direito à aposentadoria por tempo de contribuição. **Confira os percentuais vigentes**.",
      "- **Salário de contribuição**: valor **declarado** pelo segurado, entre o **mínimo e o teto**.",
      "- **Período de graça**: **6 meses** após cessar as contribuições (art. 15, VI).",
      "- **Não há** filiação retroativa: pagamentos em atraso **não** são computados, salvo hipóteses legais.",
      "",
      "### Direitos",
      "O facultativo **não tem direito a salário-família** nem a **auxílio-acidente** (este só cabe aos segurados dos incisos I, II, VI e VII do art. 11: empregado, doméstico, avulso e especial). Faz jus a **auxílio por incapacidade temporária, aposentadorias, salário-maternidade, pensão por morte e auxílio-reclusão** (a seus dependentes), se preencher os requisitos.",
    ]),
    atencao("Idade mínima do facultativo: **14 anos**. Período de graça: **6 meses**. **Não** há salário-família nem auxílio-acidente para ele."),
    q("A idade mínima para a filiação ao RGPS como segurado facultativo é de:", ["12 anos", "14 anos", "16 anos", "18 anos", "21 anos"], "B", "Lei 8.213, art. 13."),
    ce("O servidor público titular de cargo efetivo vinculado a regime próprio de previdência pode filiar-se ao RGPS como segurado facultativo.", "Errado", "A Constituição veda (art. 201, § 5º)."),
    q("O período de graça do segurado facultativo, após cessar as contribuições, é de:", ["3 meses", "6 meses", "12 meses", "24 meses", "36 meses"], "B", "Lei 8.213, art. 15, VI."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/dependentes", [
    aprofundar([
      "### Três classes (art. 16)",
      "- **Classe I**: **cônjuge, companheira, companheiro** e **filho não emancipado**, de qualquer condição, **menor de 21 anos**, **inválido** ou com **deficiência intelectual, mental ou grave**.",
      "- **Classe II**: os **pais**.",
      "- **Classe III**: **irmão não emancipado**, nas mesmas condições do filho (menor de 21 anos, inválido ou com deficiência).",
      "",
      "### Regras",
      "- **Exclusão** (§ 1º): a existência de dependente de uma classe **exclui** os das classes **seguintes**. Dentro da mesma classe, dividem-se **em partes iguais**.",
      "- **Dependência econômica** (§ 4º): **presumida** para a classe I; **deve ser comprovada** para as classes II e III.",
      "- **Equiparados a filho** (§ 2º): **enteado** e **menor tutelado** (e, na legislação recente, o **menor sob guarda judicial**), mediante **declaração do segurado** e comprovada dependência econômica. **Confira** a redação atual.",
      "- **Companheiro** (§ 3º): quem mantém **união estável** com o segurado, nos termos do art. 226, § 3º, da CF, o que inclui, por entendimento do STF, as **uniões homoafetivas**.",
      "- **Prova** (§ 5º): união estável e dependência econômica exigem **início de prova material contemporâneo** dos fatos, produzido em período **não superior a 24 meses** anteriores ao óbito ou à prisão, **não** admitida prova **exclusivamente testemunhal**.",
      "- **Exclusão do dependente** condenado por **homicídio doloso** contra o segurado (§ 7º).",
      "",
      "### Perda da qualidade de dependente",
      "- **Filho**: **emancipação**, **maioridade** (21 anos, salvo invalidez ou deficiência) ou **cessação da invalidez ou da deficiência**.",
      "- **Cônjuge**: **divórcio, separação ou anulação do casamento**, sem direito a pensão alimentícia.",
      "- **Companheiro**: fim da **união estável**.",
      "",
      "### Concorrência",
      "O **cônjuge ou companheiro** concorre com os **filhos** na classe I (dividem a pensão). Os **pais** e os **irmãos** só entram na **falta** de dependentes da classe anterior.",
    ]),
    {
      tipo: "tabela",
      titulo: "Classes de dependentes",
      cabecalho: ["Classe", "Quem", "Dependência econômica"],
      linhas: [
        ["I", "Cônjuge, companheiro(a), filho menor de 21, inválido ou com deficiência", "Presumida"],
        ["II", "Pais", "Deve ser comprovada"],
        ["III", "Irmão menor de 21, inválido ou com deficiência", "Deve ser comprovada"],
      ],
    },
    atencao("Dependente de **classe anterior exclui** os das seguintes. Se há **cônjuge e filhos** (classe I), **pais e irmãos ficam sem direito** à pensão. A dependência da **classe I** é **presumida**: não precisa provar."),
    q("Segundo a Lei 8.213/1991, a dependência econômica é presumida em relação:", ["aos dependentes de qualquer classe", "aos dependentes da classe I (cônjuge, companheiro e filho)", "aos pais", "aos irmãos", "somente ao cônjuge"], "B", "Art. 16, § 4º."),
    ce("A existência de dependente de qualquer das classes exclui do direito às prestações os das classes seguintes.", "Certo", "Art. 16, § 1º."),
    q("Os pais do segurado são dependentes:", ["da classe I", "da classe II, com dependência econômica a ser comprovada", "da classe III", "sempre, com dependência presumida", "apenas se o segurado for solteiro e sem filhos, sem necessidade de comprovar a dependência"], "B", "Art. 16, II e § 4º."),
    ce("A comprovação da união estável para fins previdenciários pode ser feita exclusivamente por prova testemunhal.", "Errado", "Art. 16, § 5º: exige início de prova material contemporânea, sem prova exclusivamente testemunhal."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/carencia", [
    aprofundar([
      "### Conceito (art. 24)",
      "**Número mínimo de contribuições mensais indispensáveis** para que o beneficiário faça jus ao benefício, consideradas as competências a partir do **transcurso do primeiro dia dos meses de suas competências**.",
      "",
      "### Carências (art. 25)",
      "- **Auxílio por incapacidade temporária** (antigo auxílio-doença) e **aposentadoria por incapacidade permanente** (antiga invalidez): **12** contribuições.",
      "- **Aposentadoria por idade** (programada), **por tempo** (na transição) e **especial**: **180** contribuições (15 anos).",
      "- **Salário-maternidade** das seguradas **contribuinte individual, facultativa e segurada especial**: **10** contribuições.",
      "- **Auxílio-reclusão**: **24** contribuições.",
      "- **No parto antecipado**, a carência do salário-maternidade é **reduzida** no mesmo número de meses da antecipação.",
      "",
      "### Dispensa de carência (art. 26)",
      "- **Pensão por morte**, **salário-família** e **auxílio-acidente**.",
      "- **Auxílio por incapacidade temporária** e **aposentadoria por incapacidade permanente** em caso de **acidente de qualquer natureza ou causa**, **doença profissional ou do trabalho** e das **doenças graves** de lista do Ministério (revista a cada 3 anos).",
      "- **Salário-maternidade** da **empregada, empregada doméstica e trabalhadora avulsa**.",
      "- **Serviço social** e **reabilitação profissional**.",
      "- **Benefícios do segurado especial** em valor de **um salário mínimo** (com comprovação de atividade rural).",
      "",
      "### Contagem",
      "Para **empregados e avulsos**, conta-se a partir da **filiação**. Para **contribuinte individual, facultativo e especial**, a partir do **primeiro pagamento sem atraso** (art. 27).",
      "",
      "### Recuperação da qualidade (art. 27-A)",
      "Quem **perdeu a qualidade de segurado** e volta a contribuir precisa, a partir da nova filiação, de **metade** da carência dos benefícios de **12 meses** (incapacidade), do **salário-maternidade** (10) e do **auxílio-reclusão** (24), ou seja, **6, 5 e 12** contribuições.",
    ]),
    {
      tipo: "tabela",
      titulo: "Carência dos principais benefícios",
      cabecalho: ["Benefício", "Carência (contribuições)"],
      linhas: [
        ["Auxílio por incapacidade temporária", "12"],
        ["Aposentadoria por incapacidade permanente", "12"],
        ["Aposentadoria por idade, tempo (transição) e especial", "180"],
        ["Salário-maternidade (CI, facultativa e especial)", "10"],
        ["Auxílio-reclusão", "24"],
        ["Pensão por morte, salário-família, auxílio-acidente", "Dispensada"],
      ],
    },
    atencao("**Pensão por morte** não exige carência, mas a **duração** da pensão do cônjuge depende de **18 contribuições** e de **2 anos de casamento ou união estável**. São coisas diferentes: carência × duração."),
    q("A carência para a concessão do auxílio por incapacidade temporária (antigo auxílio-doença) é, em regra, de:", ["6 contribuições mensais", "12 contribuições mensais", "24 contribuições mensais", "180 contribuições mensais", "não há carência"], "B", "Lei 8.213, art. 25, I."),
    q("O auxílio-reclusão exige carência de:", ["12 contribuições", "18 contribuições", "24 contribuições", "180 contribuições", "não há carência"], "C", "Lei 8.213, art. 25, IV (inclusão pela Lei 13.846/2019)."),
    ce("A pensão por morte e o auxílio-acidente são benefícios que independem de carência.", "Certo", "Art. 26, I."),
    ce("A carência do salário-maternidade da empregada é de 10 contribuições mensais.", "Errado", "A empregada, a doméstica e a avulsa são dispensadas de carência; a de 10 meses vale para contribuinte individual, facultativa e segurada especial."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/manutencao-e-perda-da-qualidade-de-segurado", [
    aprofundar([
      "### Qualidade de segurado",
      "Condição de quem **mantém o vínculo** com a Previdência e, por isso, tem direito às **prestações**. **Mantém-se** enquanto o segurado contribui e, **mesmo sem contribuir**, durante o **período de graça** (art. 15).",
      "",
      "### Período de graça: prazos (art. 15)",
    ]),
    {
      tipo: "tabela",
      titulo: "Períodos de graça",
      cabecalho: ["Situação", "Prazo de manutenção"],
      linhas: [
        ["Em gozo de benefício (exceto auxílio-acidente)", "Sem limite de prazo"],
        ["Deixou de exercer atividade remunerada, ou está suspenso ou licenciado sem remuneração", "Até 12 meses após cessar as contribuições"],
        ["Doença de segregação compulsória", "Até 12 meses após cessar a segregação"],
        ["Retido ou recluso (livramento)", "Até 12 meses após o livramento"],
        ["Incorporado às Forças Armadas para o serviço militar", "Até 3 meses após o licenciamento"],
        ["Segurado facultativo", "Até 6 meses após cessar as contribuições"],
      ],
    },
    aprofundar([
      "### Prorrogações",
      "- **+12 meses** (de 12 para **24**) se o segurado já tiver pago **mais de 120 contribuições mensais** sem interrupção que acarrete a perda da qualidade (§ 1º).",
      "- **+12 meses** se estiver **desempregado**, com a situação comprovada por **registro no órgão próprio do Ministério do Trabalho** (§ 2º). Os dois acréscimos podem somar-se: até **36 meses**.",
      "",
      "### Perda da qualidade (§ 4º)",
      "A perda ocorre **no dia seguinte ao término do prazo fixado no plano de custeio** para o **recolhimento da contribuição referente ao mês imediatamente posterior** ao fim dos prazos acima. Ou seja, o período de graça é acrescido do tempo até o **vencimento da contribuição do mês seguinte**. **Confira** no regulamento a data exata do vencimento de cada categoria.",
      "",
      "### Efeitos",
      "- **Enquanto mantém a qualidade**, o segurado **conserva todos os direitos** (§ 3º).",
      "- **Perdida**, as contribuições anteriores **só são computadas para a carência** depois que o segurado **contar, a partir da nova filiação, com a metade** do número de contribuições exigidas (art. 27-A).",
      "- **Direito adquirido**: quem já preencheu **todos os requisitos** de um benefício antes de perder a qualidade **não perde** o direito (art. 102, § 1º), como na aposentadoria **depois** do preenchimento dos requisitos.",
    ]),
    atencao("O **período de graça** de **12 meses** pode chegar a **36** (120 contribuições + desemprego comprovado). O **facultativo** tem **6** meses, e sem prorrogação por desemprego. **Em gozo de benefício**: **sem limite** (exceto **auxílio-acidente**)."),
    q("O segurado que deixa de exercer atividade remunerada mantém essa qualidade, independentemente de contribuições, em regra, por até:", ["3 meses", "6 meses", "12 meses", "24 meses", "36 meses"], "C", "Art. 15, II. Pode ser prorrogado para 24 e 36 meses."),
    ce("O prazo do período de graça de 12 meses é prorrogado para 24 meses se o segurado já tiver pago mais de 120 contribuições mensais sem interrupção que acarrete a perda da qualidade.", "Certo", "Art. 15, § 1º."),
    q("O segurado que esteja em gozo de benefício mantém a qualidade de segurado:", ["por 3 meses", "por 12 meses", "sem limite de prazo, em regra", "somente por 24 meses", "apenas enquanto contribuir"], "C", "Art. 15, I, exceto o auxílio-acidente."),
    ce("O segurado facultativo mantém a qualidade de segurado por até 6 meses após a cessação das contribuições.", "Certo", "Art. 15, VI."),
  ]);

  A("regime-geral-de-previdencia-social-lei-8-213-1991/salario-de-beneficio-e-renda-mensal", [
    aprofundar([
      "### Salário de benefício",
      "Valor-base sobre o qual se calcula a **renda mensal inicial (RMI)** de vários benefícios. **Nunca** inferior ao **salário mínimo** nem superior ao **teto** do salário de contribuição (RGPS).",
      "",
      "### Como se calcula hoje (EC 103/2019, art. 26)",
      "**Média aritmética simples de 100% dos salários de contribuição** e remunerações, a partir de **julho de 1994** (ou desde o início da contribuição, se posterior), **corrigidos**. **Atenção**: o texto da Lei 8.213 (art. 29) ainda mostra a regra **antiga** (80% dos maiores salários e **fator previdenciário**), **superada** pela EC 103 para as aposentadorias concedidas pelas novas regras. O fator previdenciário permanece em algumas **regras de transição** (como o pedágio de 50%).",
      "",
      "### Renda mensal (percentual do salário de benefício)",
    ]),
    {
      tipo: "tabela",
      titulo: "Percentuais mais cobrados",
      cabecalho: ["Benefício", "Renda mensal"],
      linhas: [
        ["Aposentadoria programada (EC 103)", "60% + 2% por ano de contribuição que exceder 20 anos (homem) ou 15 anos (mulher)"],
        ["Aposentadoria por incapacidade permanente", "60% + 2% por ano acima de 20 (homem) ou 15 (mulher); 100% se acidente de trabalho, doença profissional ou do trabalho"],
        ["Auxílio por incapacidade temporária", "91% do salário de benefício (limitado à média dos últimos 12 salários de contribuição)"],
        ["Auxílio-acidente", "50% do salário de benefício"],
        ["Salário-maternidade", "100% (valores específicos por categoria)"],
        ["Pensão por morte", "50% + 10% por dependente, até 100% (EC 103, art. 23)"],
      ],
    },
    aprofundar([
      "### Piso e teto",
      "Nenhum benefício que **substitua o salário de contribuição** ou o rendimento do trabalho do segurado pode ser **inferior ao salário mínimo**. O **teto** do RGPS é fixado em portaria e **reajustado anualmente** (**conferir o valor vigente**).",
      "",
      "### Reajuste dos benefícios",
      "Anualmente, para preservar o **valor real**, pelo **INPC** (índice do IBGE; Lei 11.430/2006), **na mesma data** do reajuste do salário mínimo, **exceto** o piso (que acompanha o salário mínimo).",
      "",
      "### Abono anual (13º)",
      "Devido ao segurado e ao dependente que, durante o ano, receberam **auxílio por incapacidade temporária, auxílio-acidente, aposentadoria, pensão por morte ou auxílio-reclusão** (art. 40). O **salário-maternidade não** gera abono anual. É calculado como a gratificação natalina, com base na **renda mensal de dezembro**, e **proporcional** ao número de meses de recebimento.",
    ]),
    atencao("O **salário de benefício** (média) é a **base**; a **renda mensal** é o **percentual** sobre ela. **Auxílio-acidente: 50%**; **auxílio por incapacidade temporária: 91%**. Confira o **teto** e o **salário mínimo** do ano.", "Conferir"),
    q("O auxílio por incapacidade temporária (antigo auxílio-doença) corresponde a:", ["100% do salário de benefício", "91% do salário de benefício", "80% do salário de benefício", "60% do salário de benefício", "50% do salário de benefício"], "B", "Lei 8.213, art. 61."),
    ce("O auxílio-acidente corresponde a 50% do salário de benefício que deu origem ao auxílio por incapacidade temporária.", "Certo", "Art. 86, § 1º."),
    q("Pela regra permanente da EC 103/2019, o salário de benefício é calculado com base na média aritmética:", ["dos 36 últimos salários de contribuição", "dos 80% maiores salários de contribuição", "simples de 100% dos salários de contribuição, desde julho de 1994", "dos últimos 12 salários", "do último salário de contribuição"], "C", "EC 103/2019, art. 26."),
    ce("Em nenhuma hipótese o valor de um benefício que substitua o salário de contribuição pode ser inferior ao salário mínimo.", "Certo", "CF, art. 201, § 2º."),
  ]);

  /* ================= REGULAMENTO ================= */

  A("regulamento-da-previdencia/decreto-3-048-1999-pontos-principais", [
    aprofundar([
      "### O que é",
      "O **Regulamento da Previdência Social (RPS)**, aprovado pelo **Decreto 3.048/1999**, **detalha** as Leis 8.212 (custeio) e 8.213 (benefícios) e a organização da previdência. Foi **muito alterado**, em especial pelo **Decreto 10.410/2020**, que o adequou à **EC 103/2019**.",
      "",
      "### Hierarquia",
      "**Constituição** (art. 201) → **leis** (8.212 e 8.213) → **decreto** (RPS) → **portarias e instruções normativas** (INSS, Receita Federal, Ministério). O decreto **regulamenta**, não cria direito novo nem vai contra a lei.",
      "",
      "### Quem faz o quê",
      "- **INSS** (autarquia federal): **reconhecimento de direitos** e **concessão e manutenção** dos benefícios do RGPS.",
      "- **Receita Federal do Brasil**: **arrecadação, fiscalização, lançamento e cobrança** das contribuições previdenciárias (Lei 11.457/2007).",
      "- **Perícia Médica Federal**: avaliação da incapacidade.",
      "- **Conselho Nacional de Previdência Social (CNPS)**: órgão **superior de deliberação colegiada**, de composição **quadripartite**.",
      "- **Ministério da Previdência Social**: formulação da política previdenciária.",
      "",
      "### Pontos que o RPS organiza",
      "Segurados e dependentes; inscrição; carência; período de graça; cálculo da renda mensal; os benefícios (aposentadorias, auxílios, pensão, salário-maternidade e salário-família); **perícia médica**; **contagem de tempo**; **reconhecimento de tempo especial**; **revisão**; **custeio** e **arrecadação**.",
      "",
      "### Documentos importantes",
      "- **CNIS** (Cadastro Nacional de Informações Sociais): registra **vínculos e contribuições**.",
      "- **Carta de concessão** e **memória de cálculo**.",
      "- **PPP** (Perfil Profissiográfico Previdenciário): comprova a **exposição a agentes nocivos**.",
    ]),
    atencao("Para concursos, **estude pela versão atualizada** do RPS: ele muda a cada alteração de lei ou emenda. O decreto **não pode** inovar além da lei.", "Conferir"),
    q("A arrecadação, a fiscalização, o lançamento e a cobrança das contribuições previdenciárias no âmbito federal competem, hoje, à:", ["Receita Federal do Brasil", "Perícia Médica Federal", "Defensoria Pública da União", "Caixa Econômica Federal, exclusivamente", "Controladoria-Geral da União"], "A", "Lei 11.457/2007 (a chamada Super-Receita)."),
    ce("O Regulamento da Previdência Social, aprovado por decreto, regulamenta as Leis 8.212 e 8.213, não podendo contrariá-las.", "Certo", "Decreto regulamentar não inova em relação à lei."),
    q("O cadastro que registra os vínculos e as contribuições do trabalhador, usado para a concessão de benefícios, é o:", ["CNIS", "CPAD", "SIGAD", "CadÚnico", "PPP"], "A", "Cadastro Nacional de Informações Sociais."),
  ]);
})();

/* Aprofundamento · Seguridade Social (parte 2): benefícios do RGPS, custeio (Lei 8.212/1991) e assistência social (LOAS).
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/seguridade-social.js.
   Prazos e percentuais da Lei 8.213 e da EC 103/2019 conferidos no Planalto. Valores em reais e alíquotas que mudam todo ano ficam como "conferir". */
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
    { titulo: "Lei 8.213/1991 · Planos de Benefícios da Previdência Social", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm" },
    { titulo: "Lei 8.212/1991 · Plano de Custeio da Seguridade Social", url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm" },
    { titulo: "Lei 8.742/1993 · Lei Orgânica da Assistência Social (LOAS)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8742.htm" },
    { titulo: "Emenda Constitucional 103/2019", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm", nota: "Os arts. 15 a 23 e 26 são os mais cobrados." },
    { titulo: "Meu INSS", url: "https://meu.inss.gov.br", nota: "Simuladores e informações oficiais, atualizados com os valores do ano." },
    { titulo: "Manual de Direito Previdenciário", autor: "Frederico Amado", nota: "Referência didática para concursos." },
  ];
  const VALORES = "Valores em reais (salário mínimo, teto, limites de renda, alíquotas por faixa) mudam todo ano: confira a portaria interministerial do ano da prova.";

  /* ================= BENEFÍCIOS ================= */

  A("beneficios-do-rgps/aposentadorias-apos-a-ec-103-2019", [
    aprofundar([
      "### Regra permanente do RGPS (EC 103/2019, art. 19)",
      "Quem se **filiou** ao RGPS depois da emenda:",
      "- **Mulher**: **62 anos de idade** e **15 anos de contribuição**.",
      "- **Homem**: **65 anos de idade** e **20 anos de contribuição**.",
      "- **Trabalhadores rurais** e de economia familiar: **60 anos (homem) e 55 anos (mulher)** (CF, art. 201, § 7º, II), com a carência de 15 anos de atividade rural.",
      "- **Professor** (educação infantil, fundamental e médio): **redução de 5 anos** na idade e **25 anos** de contribuição exclusivamente em magistério (**57 mulher, 60 homem**).",
      "",
      "### Cálculo (art. 26)",
      "**60% da média** de 100% dos salários de contribuição desde julho de 1994, **mais 2 pontos percentuais por ano** que exceder **20 anos** de contribuição (**homem**) ou **15 anos** (**mulher**).",
      "",
      "### As cinco regras de transição (para quem já estava filiado em 13/11/2019)",
    ]),
    {
      tipo: "tabela",
      titulo: "Regras de transição do RGPS",
      cabecalho: ["Regra", "Requisitos principais"],
      linhas: [
        ["Pontos (art. 15)", "Tempo de contribuição de 30 anos (mulher) e 35 (homem), mais pontuação (idade + tempo) de 86 (mulher) e 96 (homem) em 2019, subindo 1 ponto por ano até 100 e 105"],
        ["Idade mínima progressiva (art. 16)", "30 anos (mulher) e 35 (homem) de contribuição e idade de 56 anos (mulher) e 61 (homem) em 2019, subindo 6 meses por ano até 62 e 65"],
        ["Pedágio de 50% (art. 17)", "Para quem, em 13/11/2019, tinha mais de 28 anos (mulher) ou 33 (homem) de contribuição; exige 30 ou 35 anos mais um pedágio de 50% do tempo que faltava (calcula-se com fator previdenciário)"],
        ["Pedágio de 100% (art. 20)", "Idade de 57 anos (mulher) e 60 (homem), 30 ou 35 anos de contribuição e pedágio de 100% do tempo que faltava"],
        ["Idade (art. 18)", "Idade de 60 anos (mulher) e 65 (homem) em 2019, com 15 anos de contribuição; a idade da mulher sobe 6 meses por ano até 62"],
      ],
    },
    aprofundar([
      "### Extinção",
      "A **aposentadoria por tempo de contribuição** deixou de existir como regra para quem se filiou **depois** da emenda. A **aposentadoria por idade** passou a chamar-se **aposentadoria programada**.",
      "",
      "### Direito adquirido",
      "Quem já havia preenchido **todos os requisitos** da regra anterior até **13/11/2019** pode se aposentar por ela (**direito adquirido**), com **cálculo mais favorável** em alguns casos.",
      "",
      "### Cuidados",
      "- **Tempo mínimo** de 15 e 20 anos é **carência**, e não tempo para o cálculo.",
      "- A **idade mínima** da mulher é **menor** (62 anos), e o **tempo** exigido também.",
      "- Quem vai a prova precisa **conhecer o número das cinco transições** e as **idades finais** (62 e 65). Os pontos finais são **100 e 105**.",
    ]),
    atencao(`${VALORES} E as regras de transição são cobradas com os **números exatos**: confira os arts. 15 a 21 da EC 103/2019.`, "Conferir"),
    q("Pela regra permanente do RGPS (art. 19 da EC 103/2019), a mulher filiada após a emenda se aposenta aos:", ["60 anos de idade e 15 de contribuição", "62 anos de idade e 15 anos de contribuição", "65 anos de idade e 20 de contribuição", "55 anos de idade e 30 de contribuição", "62 anos de idade e 20 de contribuição"], "B", "Homem: 65 anos e 20 anos de contribuição."),
    ce("Na regra de transição por pontos, a pontuação (idade mais tempo de contribuição) inicial era de 86 pontos para a mulher e 96 para o homem em 2019, subindo 1 ponto por ano até 100 e 105.", "Certo", "EC 103/2019, art. 15."),
    q("A regra de transição do pedágio de 50% aplica-se a quem, em 13/11/2019, já tinha:", ["menos de 10 anos de contribuição", "mais de 28 anos (mulher) ou 33 anos (homem) de contribuição", "mais de 20 anos de contribuição, sem distinção de sexo", "mais de 40 anos de idade", "mais de 15 anos como servidor"], "B", "EC 103/2019, art. 17."),
    q("A aposentadoria programada pela regra permanente é calculada com:", ["100% da média, sem acréscimos", "60% da média de 100% dos salários de contribuição, mais 2 pontos percentuais por ano que exceder 20 anos (homem) ou 15 anos (mulher) de contribuição", "80% dos maiores salários, com fator previdenciário", "o último salário de contribuição", "100% do salário mínimo"], "B", "EC 103/2019, art. 26."),
  ]);

  A("beneficios-do-rgps/aposentadoria-por-incapacidade-permanente", [
    aprofundar([
      "### Conceito (Lei 8.213, arts. 42 a 47)",
      "Antiga **aposentadoria por invalidez**. Devida ao segurado considerado **incapaz e insuscetível de reabilitação** para atividade que lhe garanta a subsistência, **enquanto permanecer nessa condição**. Exige **perícia médica** do INSS.",
      "",
      "### Requisitos",
      "- **Qualidade de segurado**;",
      "- **Carência de 12 contribuições**, **dispensada** em caso de **acidente de qualquer natureza**, **doença profissional ou do trabalho** e das **doenças graves** de lista do Ministério (art. 26, II);",
      "- **Incapacidade total e permanente**, constatada por perícia;",
      "- **Doença preexistente** à filiação **não** gera direito, **salvo** se a incapacidade resultar de **progressão ou agravamento** da doença.",
      "",
      "### Início",
      "Devida **a partir do dia seguinte** à cessação do **auxílio por incapacidade temporária**. Para o empregado, conta-se do **16º dia** de afastamento ou da data do requerimento, se houver **mais de 30 dias** entre o afastamento e o pedido. Nos **15 primeiros dias**, a **empresa** paga o salário.",
      "",
      "### Valor",
      "Pela EC 103/2019: **60% da média** mais **2 pontos por ano** que exceder 20 anos (homem) ou 15 (mulher) de contribuição. **100% da média** se a incapacidade decorrer de **acidente de trabalho, doença profissional ou doença do trabalho**. (O texto da Lei 8.213, art. 44, ainda fala em 100%: o cálculo hoje segue a emenda.)",
      "",
      "### Grande invalidez (art. 45)",
      "**Acréscimo de 25%** ao valor do benefício quando o aposentado precisa da **assistência permanente de outra pessoa**. Vale **mesmo que ultrapasse o teto**; é recalculado nos reajustes; **cessa com a morte** do aposentado e **não é incorporado à pensão**.",
      "",
      "### Reavaliação e cessação",
      "- O aposentado pode ser **convocado** para **perícia periódica**. Há dispensa para quem tem **60 anos ou mais** (**conferir** a regra), para quem tem certas doenças e para quem tem incapacidade **irreversível**, salvo suspeita de fraude.",
      "- **Retorno voluntário à atividade** cancela a aposentadoria a partir da data do retorno (art. 46).",
      "- Em caso de **recuperação**, há regras de cessação ou **redução gradual** do benefício (art. 47).",
    ]),
    atencao(`**Carência de 12 meses**: dispensada em **acidente** e **doenças graves da lista**. O acréscimo de **25%** é da **grande invalidez** (assistência permanente de terceiro). ${VALORES}`),
    q("A carência exigida para a aposentadoria por incapacidade permanente é, em regra, de:", ["12 contribuições mensais", "6 contribuições", "180 contribuições", "24 contribuições", "não há carência em nenhum caso"], "A", "É dispensada em acidente, doença profissional ou do trabalho e doenças graves da lista."),
    ce("O acréscimo de 25% para o aposentado que necessita de assistência permanente de outra pessoa pode ultrapassar o teto do RGPS e não se incorpora à pensão por morte.", "Certo", "Art. 45."),
    q("A doença que o segurado já tinha ao se filiar ao RGPS:", ["gera sempre direito à aposentadoria por incapacidade", "não gera direito ao benefício, salvo se a incapacidade resultar de progressão ou agravamento", "gera direito apenas ao auxílio-acidente", "só vale para doenças do trabalho", "não é verificada pela perícia"], "B", "Art. 42, § 2º."),
    ce("O retorno voluntário do aposentado por incapacidade permanente à atividade implica o cancelamento da aposentadoria a partir da data do retorno.", "Certo", "Art. 46."),
  ]);

  A("beneficios-do-rgps/aposentadoria-especial", [
    aprofundar([
      "### Conceito",
      "Benefício para o segurado que trabalhou sujeito a **condições especiais que prejudiquem a saúde ou a integridade física**, por **efetiva exposição a agentes nocivos** (físicos, químicos, biológicos ou associação deles), **de forma permanente, não ocasional nem intermitente**. Tem **tempo reduzido** de **15, 20 ou 25 anos**, conforme o agente.",
      "",
      "### Regras após a EC 103/2019",
      "- **Segurado filiado depois da emenda** (art. 19, § 1º): **idade mínima de 55, 58 ou 60 anos**, com **15, 20 ou 25 anos** de efetiva exposição.",
      "- **Quem já estava filiado** (art. 21): regra de **pontos (idade + tempo de contribuição)**: **66 pontos** (15 anos de exposição), **76** (20) e **86** (25).",
      "- **Carência**: **180 contribuições** (15 anos).",
      "- A **conversão de tempo especial em comum** passou a valer **somente** para o tempo especial **até 13/11/2019** (art. 25, § 2º da EC 103).",
      "",
      "### Como se comprova",
      "Com o **PPP (Perfil Profissiográfico Previdenciário)**, baseado no **LTCAT (Laudo Técnico das Condições do Ambiente de Trabalho)**, que a empresa emite. O **EPI eficaz** pode **afastar** a atividade especial, salvo **ruído acima do limite** (entendimento do STF). **Confira** a jurisprudência atual.",
      "",
      "### Custeio específico",
      "A empresa paga **contribuição adicional** para financiar a aposentadoria especial, por grau de exposição: **6%, 9% ou 12%** sobre a remuneração do empregado exposto, conforme o tempo de 25, 20 ou 15 anos (**conferir**).",
      "",
      "### Cálculo",
      "Segue o **art. 26 da EC 103**, com 60% da média e acréscimos por ano. **Confira** a emenda para o percentual de cada tempo de exposição.",
    ]),
    atencao("Na aposentadoria especial, o que conta é a **efetiva exposição** a agente nocivo, **de forma habitual e permanente**, comprovada por **PPP/LTCAT**. A **conversão** de tempo especial em comum só vale para o período **até 13/11/2019**.", "Memorize"),
    q("Os prazos básicos de tempo de exposição na aposentadoria especial são de:", ["10, 15 e 20 anos", "15, 20 e 25 anos", "20, 25 e 30 anos", "25, 30 e 35 anos", "12, 18 e 24 anos"], "B", "Conforme o grau de nocividade do agente."),
    ce("A comprovação da atividade especial se faz, em regra, pelo Perfil Profissiográfico Previdenciário (PPP), baseado no laudo técnico de condições ambientais do trabalho.", "Certo", "PPP e LTCAT."),
    q("Pela EC 103/2019, a conversão de tempo de serviço especial em comum é admitida:", ["para qualquer período, sem limite", "somente para o tempo exercido até 13/11/2019", "apenas para ruído", "apenas para servidores", "nunca, em nenhuma hipótese"], "B", "EC 103/2019, art. 25, § 2º."),
  ]);

  A("beneficios-do-rgps/auxilio-por-incapacidade-temporaria", [
    aprofundar([
      "### Conceito (Lei 8.213, arts. 59 a 63)",
      "Antigo **auxílio-doença**. Devido ao segurado que, cumprida a **carência**, fica **incapacitado para o trabalho ou para a sua atividade habitual por mais de 15 dias consecutivos**.",
      "",
      "### Requisitos",
      "- **Qualidade de segurado**;",
      "- **Carência de 12 contribuições** (dispensada em acidente de qualquer natureza, doença profissional ou do trabalho e doenças da lista);",
      "- **Incapacidade temporária** por **mais de 15 dias**, constatada por **perícia médica**.",
      "- **Doença preexistente** à filiação não gera direito, **salvo** progressão ou agravamento.",
      "",
      "### Quando começa",
      "- **Empregado**: a partir do **16º dia** de afastamento. Os **15 primeiros dias** são pagos pela **empresa** (o salário integral). O empregado em benefício é considerado **licenciado** pela empresa.",
      "- **Demais segurados** (contribuinte individual, doméstico, avulso, especial, facultativo): a partir do **início da incapacidade**.",
      "- Se o **requerimento** ocorrer após **mais de 30 dias** do afastamento, o benefício começa na **data do requerimento**.",
      "",
      "### Valor",
      "**91% do salário de benefício**, e **não pode exceder a média dos últimos 12 salários de contribuição**.",
      "",
      "### Reabilitação",
      "O segurado **insuscetível de recuperação** para a sua atividade habitual deve ser submetido a **reabilitação profissional**. O benefício **é mantido** até a reabilitação ou, se não for possível, até a **aposentadoria por incapacidade permanente**.",
      "",
      "### Cessação",
      "Com a **recuperação**, a **reabilitação**, a **transformação** em aposentadoria ou a **morte**. Há possibilidade de fixar **data de cessação** (alta programada), com direito a **pedido de prorrogação**.",
    ]),
    atencao("Quem paga os **15 primeiros dias** do empregado é a **empresa**. A **perícia** do INSS só entra se a incapacidade passar de **15 dias**. O benefício é **91%** do salário de benefício, e **não** 100%."),
    q("O empregado afastado por incapacidade temporária recebe o salário integral, pago pela empresa, nos primeiros:", ["5 dias", "10 dias", "15 dias", "30 dias", "60 dias"], "C", "Art. 60, § 3º."),
    ce("O auxílio por incapacidade temporária é devido, em regra, quando a incapacidade para o trabalho ou para a atividade habitual dura mais de 15 dias consecutivos.", "Certo", "Art. 59."),
    q("O valor mensal do auxílio por incapacidade temporária é de:", ["100% do salário de benefício", "91% do salário de benefício", "80% do salário de benefício", "60% do salário de benefício", "um salário mínimo, sempre"], "B", "Art. 61."),
    ce("A doença preexistente à filiação do segurado gera sempre direito ao auxílio por incapacidade temporária.", "Errado", "Não gera, salvo se a incapacidade resultar de progressão ou agravamento."),
  ]);

  A("beneficios-do-rgps/auxilio-acidente", [
    aprofundar([
      "### Conceito (art. 86)",
      "**Indenização** paga ao segurado, após a **consolidação das lesões** decorrentes de **acidente de qualquer natureza**, quando resultarem **sequelas que impliquem redução da capacidade para o trabalho que habitualmente exercia**.",
      "",
      "### Características",
      "- **Natureza indenizatória**, e não substitutiva de renda: por isso **pode ser recebido junto com salário**.",
      "- **Carência**: **dispensada**.",
      "- **Valor**: **50% do salário de benefício**.",
      "- **Início**: no dia **seguinte à cessação** do auxílio por incapacidade temporária.",
      "- **Duração**: **até a véspera de qualquer aposentadoria** ou até o **óbito**.",
      "- **Não pode ser cumulado com aposentadoria**. Receber salário ou outro benefício (exceto aposentadoria) **não** prejudica o recebimento.",
      "",
      "### Quem tem direito",
      "Somente os segurados **empregados, domésticos, avulsos e especiais**. **Não têm** direito os **contribuintes individuais** e os **facultativos** (art. 18, § 1º).",
      "",
      "### Acidente de qualquer natureza",
      "Inclui o **acidente de trabalho** e o de **fora do trabalho**. Quem sofre acidente de trabalho tem proteção específica (estabilidade de 12 meses no emprego após a alta, art. 118).",
    ]),
    atencao("**Auxílio-acidente** é **indenização** (50%), **não** substitui o salário e pode ser acumulado com a remuneração. **Contribuinte individual e facultativo não têm direito**. E **não acumula com aposentadoria**."),
    q("O auxílio-acidente corresponde a:", ["100% do salário de benefício", "91% do salário de benefício", "60% do salário de benefício", "50% do salário de benefício", "um salário mínimo, apenas"], "D", "Art. 86, § 1º."),
    ce("O auxílio-acidente possui natureza indenizatória e pode ser recebido simultaneamente com o salário do segurado.", "Certo", "Não prejudica o recebimento a percepção de salário."),
    q("Não têm direito ao auxílio-acidente os segurados:", ["empregados", "avulsos", "contribuinte individual e facultativo", "especiais", "domésticos"], "C", "Lei 8.213, art. 18, § 1º."),
    ce("O auxílio-acidente pode ser acumulado com qualquer aposentadoria.", "Errado", "É devido até a véspera de qualquer aposentadoria; não acumula com ela."),
  ]);

  A("beneficios-do-rgps/salario-maternidade", [
    aprofundar([
      "### Duração (art. 71)",
      "**120 dias**, com início **entre 28 dias antes do parto** e a **data do parto**. Prorrogável: o benefício pode ser prorrogado em **casos de internação** da segurada ou do recém-nascido por mais de duas semanas, e em outras hipóteses legais. Há ainda a prorrogação de **60 dias** na **Empresa Cidadã** (adesão da empregadora). **Conferir** as regras atuais.",
      "",
      "### Quem tem direito",
      "Todas as seguradas: **empregada, doméstica, avulsa, contribuinte individual, facultativa e segurada especial**. Também ao **segurado ou segurada que adotar** ou obtiver guarda judicial para fins de adoção, **sem distinção** da idade da criança. Ao **cônjuge ou companheiro sobrevivente**, se a mãe falecer. **Aborto não criminoso**: **2 semanas**.",
      "",
      "### Carência",
      "- **Empregada, doméstica e avulsa**: **dispensada**.",
      "- **Contribuinte individual, facultativa e segurada especial**: **10 contribuições** (a segurada especial comprova **10 meses** de atividade rural). No **parto antecipado**, reduz-se a carência pelo número de meses antecipados.",
      "",
      "### Valor (arts. 72 e 73)",
    ]),
    {
      tipo: "tabela",
      titulo: "Quem paga e quanto",
      cabecalho: ["Segurada", "Valor", "Quem paga"],
      linhas: [
        ["Empregada", "Remuneração integral", "Empresa (compensa nas contribuições)"],
        ["Avulsa", "Remuneração integral equivalente a um mês de trabalho", "Previdência (INSS)"],
        ["Doméstica", "Último salário de contribuição", "Previdência (INSS)"],
        ["Contribuinte individual e facultativa", "1/12 da soma dos 12 últimos salários de contribuição, em período não superior a 15 meses", "Previdência (INSS)"],
        ["Segurada especial", "Um salário mínimo (piso)", "Previdência (INSS)"],
      ],
    },
    aprofundar([
      "### Observações",
      "- O benefício **não pode ser inferior ao salário mínimo**.",
      "- O salário-maternidade **não gera abono anual** (13º), mas a **empregada** recebe a gratificação natalina proporcional da empresa.",
      "- É **vedado** o trabalho da segurada durante o período, salvo situações legais.",
    ]),
    atencao("**Empregada**: a **empresa** paga e **compensa**. As demais: paga **direto o INSS**. **Sem carência** para empregada, doméstica e avulsa; **10 contribuições** para CI, facultativa e especial."),
    q("A duração do salário-maternidade, em regra, é de:", ["60 dias", "90 dias", "120 dias", "150 dias", "180 dias"], "C", "Lei 8.213, art. 71."),
    ce("O salário-maternidade da segurada empregada é pago pela empresa, que realiza a compensação nas contribuições sobre a folha de salários.", "Certo", "Art. 72, § 1º."),
    q("A carência do salário-maternidade das seguradas contribuinte individual, facultativa e especial é de:", ["não há carência", "6 contribuições", "10 contribuições", "12 contribuições", "24 contribuições"], "C", "Art. 25, III."),
    ce("O valor do salário-maternidade da segurada especial é de um salário mínimo.", "Certo", "Piso do benefício."),
  ]);

  A("beneficios-do-rgps/salario-familia", [
    aprofundar([
      "### Conceito (arts. 65 a 67)",
      "Benefício pago **mensalmente**, **por filho ou equiparado**, até **14 anos de idade** ou **inválido de qualquer idade**, ao segurado **de baixa renda**.",
      "",
      "### Quem recebe",
      "- **Empregado**, inclusive o **doméstico**, e o **trabalhador avulso**.",
      "- **Aposentados** por incapacidade permanente, por idade (**65 anos, se homem; 60, se mulher**, no regime anterior) e **trabalhadores rurais** aposentados nas condições legais, junto com a aposentadoria.",
      "- **Não** têm direito os **contribuintes individuais**, **facultativos** e (conforme a regra) **segurados especiais**.",
      "",
      "### Requisitos",
      "- **Baixa renda**: remuneração mensal **até o limite fixado anualmente** em portaria (**conferir** o valor do ano).",
      "- **Carência**: **dispensada**.",
      "- **Comprovações**: **certidão de nascimento**, **caderneta de vacinação** (até 6 anos) e **frequência escolar** (a partir da idade da educação obrigatória, hoje 4 anos; **conferir**).",
      "",
      "### Pagamento",
      "A **empresa** paga **junto com o salário** e **compensa** nas contribuições. Para o avulso, o **sindicato ou órgão gestor**. Para os aposentados, o **INSS**.",
      "",
      "### Cessação",
      "- Quando o filho completa **14 anos**, salvo se **inválido**.",
      "- Quando o segurado deixa de ser de **baixa renda**.",
      "- Pela **morte** do filho.",
      "- Pela **falta de comprovação** de vacinação e frequência escolar.",
      "",
      "### Observação",
      "O salário-família **não integra** o salário de contribuição e **não se incorpora** ao salário ou ao benefício para nenhum efeito.",
    ]),
    atencao(`O **valor** da cota e o **limite de renda** mudam por portaria. ${VALORES}`, "Conferir"),
    q("O salário-família é devido, por filho ou equiparado de até 14 anos, ao segurado:", ["de qualquer renda", "de baixa renda, empregado, doméstico ou avulso", "contribuinte individual", "facultativo", "segurado especial, sempre"], "B", "CF, art. 201, IV, e Lei 8.213, art. 65."),
    ce("O salário-família independe de carência.", "Certo", "Art. 26, I."),
    ce("O contribuinte individual de baixa renda faz jus ao salário-família.", "Errado", "O benefício é devido ao empregado, ao doméstico, ao avulso e a certos aposentados."),
    q("Para continuar recebendo o salário-família, o segurado deve comprovar:", ["apenas a idade dos filhos", "a vacinação e a frequência escolar, nos termos da lei", "a ausência de qualquer outra renda", "o pagamento de contribuição adicional", "a residência do filho"], "B", "Condições legais para a manutenção."),
  ]);

  A("beneficios-do-rgps/pensao-por-morte", [
    aprofundar([
      "### Quem recebe (art. 74)",
      "O **conjunto dos dependentes** do segurado, aposentado ou não. **Carência**: **dispensada**. O benefício é a **soma das cotas**.",
      "",
      "### Quando começa",
      "- **Do óbito**, se requerida em até **90 dias** (para os demais dependentes) ou **180 dias** (para os filhos menores de 16 anos).",
      "- **Da data do requerimento**, se pedida depois.",
      "- Na **morte presumida**, da data da decisão judicial.",
      "",
      "### Valor (EC 103/2019, art. 23)",
      "**Cota familiar de 50%** do valor da aposentadoria que o segurado recebia ou a que teria direito, **mais 10 pontos percentuais por dependente**, até **100%**. As **cotas individuais**, ao se extinguirem, **não revertem** aos demais dependentes. (A Lei 8.213, art. 75, ainda traz a regra anterior de 100%.)",
      "",
      "### Duração da pensão do cônjuge ou companheiro (art. 77, § 2º, V)",
      "- **4 meses**: se o óbito ocorrer sem **18 contribuições mensais** ou se o casamento ou a união estável tiver **menos de 2 anos**.",
      "- Com **18 contribuições** e **2 anos** de casamento ou união, a duração depende da **idade** do cônjuge na data do óbito:",
    ]),
    {
      tipo: "tabela",
      titulo: "Duração conforme a idade (texto da lei; conferir a portaria vigente)",
      cabecalho: ["Idade na data do óbito", "Duração"],
      linhas: [
        ["Menos de 21 anos", "3 anos"],
        ["21 a 26 anos", "6 anos"],
        ["27 a 29 anos", "10 anos"],
        ["30 a 40 anos", "15 anos"],
        ["41 a 43 anos", "20 anos"],
        ["44 anos ou mais", "Vitalícia"],
      ],
    },
    aprofundar([
      "Essas faixas são **atualizadas por ato do Ministério** conforme o aumento da **expectativa de sobrevida** (as portarias recentes subiram as idades). **Confira a tabela vigente**.",
      "- **Exceção**: se a morte decorrer de **acidente ou doença profissional**, **dispensam-se** as 18 contribuições e os 2 anos de casamento ou união.",
      "- O cônjuge **inválido ou com deficiência** recebe enquanto durar a invalidez ou a deficiência.",
      "- **Prova**: início de prova material contemporânea; sem prova só testemunhal.",
      "- **Simulação ou fraude** no casamento ou na união faz perder o direito.",
      "",
      "### Cessação da cota",
      "Morte do pensionista; **filho, equiparado ou irmão** aos **21 anos** (salvo invalidez ou deficiência); cessação da **invalidez** ou da **deficiência**; **condenação por homicídio doloso** contra o segurado; extinta a cota do **último** pensionista, extingue-se a pensão.",
    ]),
    atencao("A pensão **não tem carência**, mas a **duração** do cônjuge exige **18 contribuições** e **2 anos** de casamento ou união (senão, **4 meses**). Não confunda carência com duração.", "Pegadinha de prova"),
    q("A pensão por morte exige carência de:", ["12 contribuições", "18 contribuições", "24 contribuições", "180 contribuições", "não exige carência"], "E", "Art. 26, I. As 18 contribuições são requisito de duração para o cônjuge."),
    ce("Se o óbito do segurado ocorrer sem que ele tenha vertido 18 contribuições mensais, a pensão do cônjuge dura 4 meses, salvo se a morte decorrer de acidente ou doença profissional.", "Certo", "Art. 77, § 2º, V, b, e § 2º-A."),
    q("Pela EC 103/2019, o valor da pensão por morte corresponde a:", ["100% do valor da aposentadoria, sempre", "cota familiar de 50% mais 10 pontos percentuais por dependente, até 100%", "metade do salário mínimo", "um salário mínimo por dependente", "60% da média dos salários"], "B", "EC 103/2019, art. 23."),
    ce("Quando a cota de um dos pensionistas se extingue, o valor correspondente reverte automaticamente aos demais pensionistas, pelo regime da EC 103/2019.", "Errado", "A EC 103/2019 estabelece que as cotas individuais não são revertidas."),
  ]);

  A("beneficios-do-rgps/auxilio-reclusao", [
    aprofundar([
      "### Conceito (art. 80)",
      "Benefício devido, nas condições da **pensão por morte**, aos **dependentes do segurado de baixa renda** recolhido à prisão **em regime fechado**, enquanto durar a prisão.",
      "",
      "### Requisitos",
      "- **Qualidade de segurado** na data da prisão;",
      "- **Baixa renda**: renda do segurado (média dos salários de contribuição dos **12 meses anteriores** à prisão) **igual ou inferior** ao limite fixado em portaria (**conferir** o valor do ano);",
      "- **Carência de 24 contribuições**;",
      "- Recolhimento em **regime fechado**;",
      "- **Não** receber **remuneração** da empresa nem estar em gozo de **auxílio por incapacidade temporária, pensão por morte, salário-maternidade, aposentadoria ou abono**.",
      "",
      "### Como se prova",
      "O requerimento é instruído com **certidão judicial** que ateste o **recolhimento** à prisão. Para manter, o dependente apresenta, **periodicamente**, a prova de que o segurado **continua preso**. A base de dados do **CNJ** pode substituir os documentos.",
      "",
      "### Regras específicas",
      "- O **trabalho remunerado** do preso em regime fechado **não** faz perder o benefício.",
      "- A **fuga** extingue o benefício; a **recaptura** o restabelece, se ainda houver qualidade de segurado.",
      "- A **duração** e a **divisão de cotas** seguem a lógica da pensão por morte (4 meses, faixas de idade...).",
      "- O **dependente** precisa estar **inscrito** e provar a condição.",
      "- Prova da **união estável**: início de prova material, sem prova exclusivamente testemunhal.",
    ]),
    atencao("O auxílio-reclusão exige **carência de 24 meses** e é só para **regime fechado** e **baixa renda**. A baixa renda é **do segurado preso**, não dos dependentes.", "Memorize"),
    q("O auxílio-reclusão é devido aos dependentes do segurado:", ["de qualquer renda, preso em qualquer regime", "de baixa renda, recolhido à prisão em regime fechado", "de baixa renda, em regime semiaberto", "aposentado preso, com qualquer renda", "apenas aos filhos menores de 14 anos"], "B", "Art. 80 da Lei 8.213, com a redação da Lei 13.846/2019."),
    ce("O trabalho remunerado do segurado preso em regime fechado não impede, por si só, o recebimento do auxílio-reclusão pelos dependentes.", "Certo", "Art. 80, § 7º."),
    q("O auxílio-reclusão exige carência de:", ["12 contribuições", "18 contribuições", "24 contribuições", "180 contribuições", "não há carência"], "C", "Art. 25, IV."),
    ce("O segurado preso que continua recebendo remuneração da empresa gera direito ao auxílio-reclusão aos dependentes.", "Errado", "O benefício não é devido se o segurado recebe remuneração da empresa ou outro benefício listado."),
  ]);

  A("beneficios-do-rgps/servico-social-e-reabilitacao-profissional", [
    aprofundar([
      "### Serviço social (art. 88)",
      "Esclarece aos beneficiários, **individualmente ou em grupo**, os **direitos sociais** e os **meios de exercê-los**, e estabelece, conjuntamente com eles, o processo de **solução dos problemas** que emergirem da sua relação com a Previdência. Dá **prioridade** aos segurados em **auxílio por incapacidade temporária** e aos de **tempo de serviço** próximo de aposentar-se.",
      "",
      "### Reabilitação profissional (arts. 89 a 92)",
      "- **Habilitação e reabilitação profissional e social**: assistência **(re)educativa** e de **(re)adaptação profissional**, para que a pessoa **volte** ao trabalho.",
      "- Inclui o **fornecimento de aparelhos de prótese, órtese** e **instrumentos de auxílio para locomoção**, o **reparo ou a substituição** dos que sofrerem desgaste, e o **transporte do acidentado do trabalho**, quando necessário.",
      "- É **obrigatória** para os **segurados**, inclusive **aposentados**, e, na medida das possibilidades do órgão, para os **dependentes**.",
      "- Concluído o processo, a Previdência emite **certificado individual** indicando as atividades que podem ser exercidas.",
      "- **Sem carência** (art. 26).",
      "",
      "### Cotas de pessoas com deficiência e reabilitados (art. 93)",
      "Empresas com **100 ou mais empregados** devem preencher **de 2% a 5%** dos cargos com **beneficiários reabilitados** ou **pessoas com deficiência habilitadas**:",
    ]),
    {
      tipo: "tabela",
      titulo: "Percentuais do art. 93",
      cabecalho: ["Número de empregados", "Percentual obrigatório"],
      linhas: [
        ["100 a 200", "2%"],
        ["201 a 500", "3%"],
        ["501 a 1.000", "4%"],
        ["1.001 ou mais", "5%"],
      ],
    },
    aprofundar([
      "- A **dispensa** de trabalhador reabilitado ou de pessoa com deficiência, ao fim de contrato **por prazo determinado superior a 90 dias** ou **sem justa causa** em contrato por prazo indeterminado, **só pode ocorrer após a contratação de substituto** em condição semelhante.",
      "- Esse percentual vale para empresas privadas. **No serviço público**, a Constituição e a Lei 8.112 reservam **até 20%** das vagas.",
    ]),
    q("As empresas com 100 ou mais empregados devem preencher de 2% a 5% de seus cargos com beneficiários reabilitados ou pessoas com deficiência habilitadas. Para empresas com mais de 1.000 empregados, o percentual é de:", ["2%", "3%", "4%", "5%", "10%"], "D", "Art. 93, IV."),
    ce("A reabilitação profissional é prestação obrigatória do RGPS para os segurados, inclusive aposentados, e, na medida das possibilidades do órgão, para os dependentes.", "Certo", "Art. 90."),
    q("A dispensa de trabalhador reabilitado ou de pessoa com deficiência habilitada, nas condições do art. 93, § 1º, só pode ocorrer:", ["a qualquer tempo, sem restrição", "após a contratação de substituto de condição semelhante", "mediante autorização do juiz", "com aviso prévio de 90 dias", "se o empregado concordar"], "B", "Art. 93, § 1º."),
  ]);

  /* ================= CUSTEIO (LEI 8.212/1991) ================= */

  A("custeio-lei-8-212-1991/salario-de-contribuicao", [
    aprofundar([
      "### O que é",
      "A **base de cálculo** da contribuição do segurado. Tem **limite mínimo** (o **salário mínimo**) e **limite máximo** (o **teto**). Corresponde, conforme a categoria, a:",
      "- **Empregado e avulso**: a **remuneração** auferida em uma ou mais empresas: **totalidade dos rendimentos** pagos, devidos ou creditados a qualquer título durante o mês, destinados a retribuir o trabalho, inclusive **gorjetas**, **ganhos habituais sob a forma de utilidades** e **adiantamentos**.",
      "- **Doméstico**: a remuneração registrada na CTPS.",
      "- **Contribuinte individual**: a **remuneração** auferida em uma ou mais empresas ou pelo exercício de atividade por conta própria no mês.",
      "- **Facultativo**: o valor por ele **declarado**.",
      "",
      "### Parcelas que **não** integram (art. 28, § 9º), entre outras",
      "- **Benefícios da previdência**;",
      "- **ajuda de custo** e **diárias** (respeitado o limite legal), pagas por **mudança** ou **viagem**;",
      "- **alimentação** fornecida **in natura** ou por programa de alimentação aprovado (**PAT**);",
      "- **vale-transporte**, nos termos da lei;",
      "- **participação nos lucros e resultados** da empresa, paga conforme a lei específica;",
      "- **abono de férias** e a **licença-prêmio** indenizada;",
      "- **indenizações** (como a de rescisão e a de FGTS) e **multas**;",
      "- **plano de saúde** coletivo oferecido a todos os empregados e dirigentes.",
      "",
      "### Parcelas que integram",
      "**Salário**, horas extras, **adicionais** (noturno, insalubridade, periculosidade), **comissões**, **gorjetas**, **13º salário** e **ganhos habituais** (a contribuição do 13º é calculada **em separado**).",
      "",
      "### Limites",
      "Mínimo: **salário mínimo**. Máximo: **teto** (valor atualizado anualmente). **Confira** os valores do ano.",
    ]),
    atencao(`Para a prova, associe: **parcelas habituais de natureza salarial integram**; **indenizações e benefícios previdenciários não**. ${VALORES}`, "Dica"),
    q("Integra o salário de contribuição do empregado:", ["benefício previdenciário recebido do INSS", "o valor da ajuda de custo paga em parcela única por mudança de localidade", "as horas extras habituais", "a indenização de rescisão paga conforme a lei", "o valor do vale-transporte fornecido nos termos da lei"], "C", "Horas extras habituais têm natureza remuneratória."),
    ce("O salário de contribuição do contribuinte individual é a remuneração auferida em uma ou mais empresas ou pelo exercício de sua atividade por conta própria durante o mês.", "Certo", "Lei 8.212, art. 28, III."),
    ce("O salário de contribuição do segurado facultativo é o valor determinado pela Previdência, sem que o segurado possa escolher.", "Errado", "É o valor por ele declarado, entre o mínimo e o teto."),
  ]);

  A("custeio-lei-8-212-1991/contribuicao-dos-segurados", [
    aprofundar([
      "### Empregado, doméstico e avulso: alíquotas progressivas",
      "Desde 2020 (EC 103/2019, art. 28), a alíquota é **progressiva**, **aplicada faixa por faixa** (cada parte do salário é taxada pela alíquota da sua faixa):",
    ]),
    {
      tipo: "tabela",
      titulo: "Faixas da EC 103/2019 (valores do texto da emenda; reajustados todo ano)",
      cabecalho: ["Salário de contribuição", "Alíquota"],
      linhas: [
        ["Até 1 salário mínimo", "7,5%"],
        ["De 1 salário mínimo até R$ 2.000,00", "9%"],
        ["De R$ 2.000,01 até R$ 3.000,00", "12%"],
        ["De R$ 3.000,01 até o teto", "14%"],
      ],
    },
    aprofundar([
      "As **faixas** são **reajustadas** nas mesmas datas e índices dos benefícios do RGPS. **Confira os valores do ano.**",
      "",
      "### Contribuinte individual e facultativo",
      "- **Plano normal**: **20%** do salário de contribuição (entre o mínimo e o teto).",
      "- **Plano simplificado**: **11%** sobre o salário mínimo, **sem direito** à aposentadoria por tempo de contribuição (regra da lei anterior) e à contagem recíproca.",
      "- **Baixa renda** (facultativo, dona de casa de família de baixa renda inscrita no CadÚnico) e **MEI**: **5%** sobre o salário mínimo, com as mesmas restrições. **Conferir** a legislação vigente.",
      "- **Contribuinte individual que presta serviço a empresa**: a empresa **desconta 11%** da remuneração, limitado ao teto, e a empresa paga **20%** de cota patronal.",
      "",
      "### Segurado especial",
      "Contribui sobre o **resultado da comercialização da produção**: **1,2% + 0,1%** (financiamento dos benefícios por acidente do trabalho), ou seja, **1,3%**. **Conferir** os percentuais. Pode contribuir **facultativamente** também.",
      "",
      "### Aposentado que continua trabalhando",
      "Contribui **normalmente**, mas, em regra, não tem direito às prestações pela nova atividade (exceto salário-família e reabilitação profissional).",
    ]),
    atencao("A alíquota do empregado é **progressiva por faixa**, e não incide sobre todo o salário pela faixa mais alta. Para quem trabalha por conta própria, o **plano simplificado (11%)** e o de **baixa renda (5%)** não dão direito à aposentadoria **por tempo de contribuição** no regime anterior. **Conferir** o que mudou com a EC 103.", "Conferir"),
    q("Pela EC 103/2019, a alíquota da contribuição do empregado é:", ["fixa em 11%", "progressiva, aplicada por faixas do salário de contribuição, de 7,5% a 14%", "de 20% para todos", "isenta até 3 salários mínimos", "de 5% para qualquer renda"], "B", "EC 103/2019, art. 28."),
    ce("O segurado especial contribui sobre o resultado da comercialização de sua produção.", "Certo", "Lei 8.212, art. 25."),
    q("O contribuinte individual que opta pelo plano normal contribui com a alíquota de:", ["5%", "11%", "14%", "20% do salário de contribuição, entre o mínimo e o teto", "31%"], "D", "Lei 8.212, art. 21."),
    ce("Pela regra geral da Lei 8.212, a alíquota do empregado independe do valor de sua remuneração.", "Errado", "Desde a EC 103/2019, a alíquota é progressiva por faixas."),
  ]);

  A("custeio-lei-8-212-1991/contribuicao-da-empresa-e-do-empregador-domestico", [
    aprofundar([
      "### Empresa (Lei 8.212, art. 22)",
      "- **Cota patronal**: **20%** sobre o total das **remunerações** pagas, devidas ou creditadas a qualquer título, durante o mês, aos **segurados empregados e trabalhadores avulsos** que lhe prestem serviços, e também sobre a remuneração dos **contribuintes individuais**.",
      "- **RAT / SAT (Riscos Ambientais do Trabalho)**: **1%, 2% ou 3%** sobre a remuneração dos empregados, conforme o **grau de risco** da atividade (leve, médio ou grave), para financiar os benefícios por **acidente do trabalho** e a aposentadoria especial. Multiplica-se pelo **FAP (Fator Acidentário de Prevenção)**, que varia de **0,5 a 2,0** conforme o desempenho da empresa.",
      "- **Contribuições para terceiros** (Sistema S, salário-educação, INCRA): recolhidas junto, mas **não são previdenciárias**.",
      "- **Adicionais** para algumas atividades (por exemplo, instituições financeiras). **Conferir**.",
      "- **Desoneração da folha**: alguns setores recolhem sobre a **receita bruta**, em vez de 20% da folha. **Conferir** a lei vigente.",
      "",
      "### Empregador doméstico (LC 150/2015)",
      "- **8%** de contribuição patronal sobre a remuneração, e **0,8%** de contribuição para o seguro contra acidentes de trabalho;",
      "- **8%** de **FGTS** e **3,2%** para a indenização compensatória da perda do emprego, entre outras parcelas do **Simples Doméstico**;",
      "- A **contribuição do empregado doméstico**: **alíquotas progressivas** (7,5% a 14%), recolhidas pelo empregador.",
      "",
      "### Produtor rural pessoa física e agroindústria",
      "Contribuições sobre a **receita bruta da comercialização** da produção (**1,2% + RAT de 0,1%**, e a agroindústria **2,5% + 0,1%**), no lugar da folha. **Conferir**.",
      "",
      "### Entidades beneficentes",
      "As entidades beneficentes de assistência social que atendem aos requisitos legais são **imunes** às contribuições (CF, art. 195, § 7º).",
    ]),
    atencao(`**Cota patronal: 20%**. **RAT: 1%, 2% ou 3%** (graus leve, médio e grave), com **FAP**. ${VALORES} Confira a legislação sobre **desoneração da folha**.`, "Conferir"),
    q("A contribuição da empresa destinada ao financiamento dos benefícios por acidente do trabalho (RAT) varia, conforme o grau de risco da atividade, entre:", ["0,5% e 1,5%", "1%, 2% ou 3%", "5%, 10% ou 15%", "10% a 20%", "2% a 8%"], "B", "Lei 8.212, art. 22, II."),
    ce("A cota patronal da empresa é de 20% sobre o total das remunerações pagas ou creditadas aos empregados e avulsos.", "Certo", "Lei 8.212, art. 22, I."),
    q("O Fator Acidentário de Prevenção (FAP) multiplica as alíquotas do RAT e varia entre:", ["0,25 e 1", "0,5 e 2", "1 e 3", "2 e 5", "5 e 10"], "B", "Conforme o desempenho da empresa em acidentalidade."),
    ce("As contribuições destinadas a terceiros, como as do Sistema S, são contribuições previdenciárias destinadas ao financiamento dos benefícios do RGPS.", "Errado", "São contribuições a outras entidades e fundos, recolhidas junto, mas não previdenciárias."),
  ]);

  A("custeio-lei-8-212-1991/arrecadacao-e-recolhimento", [
    aprofundar([
      "### Quem arrecada",
      "A **Receita Federal do Brasil** arrecada, fiscaliza, lança e cobra as contribuições previdenciárias (Lei 11.457/2007), por meio do **eSocial**, da **DCTFWeb** e de guias (**GPS/DARF**).",
      "",
      "### Obrigação da empresa (Lei 8.212, art. 30)",
      "- **Arrecadar** as contribuições dos **segurados empregados, trabalhadores avulsos e contribuintes individuais a seu serviço**, **descontando-as** da remuneração e **recolhendo** junto com as suas.",
      "- **Presunção**: o desconto de contribuição legalmente autorizado **presume-se feito oportuna e regularmente**; a empresa **não pode alegar omissão** para eximir-se do pagamento.",
      "",
      "### Prazos de recolhimento (conferir os vigentes)",
      "- **Empresa**: até o **dia 20** do mês seguinte ao da competência.",
      "- **Contribuinte individual e facultativo** (por conta própria): até o **dia 15** do mês seguinte.",
      "- **Empregador doméstico** (Simples Doméstico): até o **dia 7** do mês seguinte (conferir).",
      "- Quando não há **expediente bancário** na data de vencimento, aplica-se a regra legal de **antecipar ou prorrogar** (conferir a regra de cada prazo).",
      "",
      "### Cessão de mão de obra (art. 31)",
      "A contratante de serviços executados mediante **cessão de mão de obra** (inclusive trabalho temporário) deve **reter 11%** do valor bruto da **nota fiscal, fatura ou recibo** e **recolher** em nome da cedente.",
      "",
      "### Decadência e prescrição",
      "O prazo para a Seguridade **constituir** (**decadência**) e **cobrar** (**prescrição**) os créditos de contribuições é de **5 anos**. Os arts. 45 e 46 da Lei 8.212, que previam **10 anos**, foram declarados **inconstitucionais** (**Súmula Vinculante 8 do STF**).",
      "",
      "### Consequências do atraso",
      "**Multa** e **juros** (taxa Selic), **inscrição em dívida ativa**, **impedimento** de obter **certidão** negativa de débito e, para a empresa, **impedimento de contratar** com o Poder Público (CF, art. 195, § 3º).",
    ]),
    atencao("**Decadência e prescrição das contribuições**: **5 anos** (SV 8 do STF, que declarou inconstitucionais os 10 anos). Os dias de vencimento (20, 15, 7) mudam por lei: **confira**.", "Conferir"),
    q("Segundo a Súmula Vinculante 8 do STF, o prazo de decadência e prescrição das contribuições previdenciárias é de:", ["5 anos", "10 anos", "15 anos", "20 anos", "30 anos"], "A", "Foram declarados inconstitucionais os arts. 45 e 46 da Lei 8.212."),
    ce("O desconto das contribuições dos segurados empregados presume-se feito oportuna e regularmente pela empresa, que não pode alegar omissão para eximir-se do pagamento.", "Certo", "Lei 8.212, art. 33, § 5º."),
    q("Na cessão de mão de obra, a empresa contratante deve reter, do valor bruto da nota fiscal, e recolher em nome da cedente:", ["5%", "11%", "15%", "20%", "31%"], "B", "Lei 8.212, art. 31."),
    ce("A arrecadação e a fiscalização das contribuições previdenciárias são feitas atualmente pela Receita Federal do Brasil.", "Certo", "Lei 11.457/2007."),
  ]);

  /* ================= ASSISTÊNCIA SOCIAL ================= */

  A("assistencia-social/loas-lei-8-742-1993-principios-e-organizacao", [
    aprofundar([
      "### Conceito (LOAS, art. 1º)",
      "A assistência social, **direito do cidadão e dever do Estado**, é **política de seguridade social não contributiva**, que **provê os mínimos sociais**, por meio de um **conjunto integrado de ações de iniciativa pública e da sociedade**, para garantir o atendimento às **necessidades básicas**.",
      "",
      "### Objetivos (art. 2º)",
      "**Proteção social** (garantia da vida, redução de danos e prevenção de riscos: família, maternidade, infância, adolescência, velhice, amparo a crianças e adolescentes carentes, integração ao mercado de trabalho, habilitação e reabilitação de pessoas com deficiência e **garantia de um salário mínimo** ao idoso e à pessoa com deficiência sem meios de se manter); **vigilância socioassistencial**; e **defesa de direitos**.",
      "",
      "### Princípios (art. 4º)",
      "- **Supremacia do atendimento às necessidades sociais** sobre as exigências de rentabilidade econômica;",
      "- **universalização dos direitos sociais**, a fim de tornar o destinatário da ação assistencial alcançável pelas demais políticas públicas;",
      "- **respeito à dignidade do cidadão**, à sua autonomia e ao seu direito a benefícios e serviços de qualidade, bem como à convivência familiar e comunitária, **vedando-se qualquer comprovação vexatória de necessidade**;",
      "- **igualdade de direitos no acesso ao atendimento**, sem discriminação, **garantindo-se equivalência às populações urbanas e rurais**;",
      "- **divulgação ampla** dos benefícios, serviços, programas e projetos assistenciais.",
      "",
      "### Diretrizes (art. 5º)",
      "- **Descentralização político-administrativa**, cabendo a **coordenação e as normas gerais à esfera federal** e a **coordenação e execução dos programas às esferas estadual e municipal**;",
      "- **participação da população**, por meio de organizações representativas, na formulação e no controle das ações;",
      "- **primazia da responsabilidade do Estado** na condução da política em cada esfera de governo.",
      "",
      "### SUAS (Sistema Único de Assistência Social)",
      "Organiza a assistência social em **todo o País**, de forma **descentralizada e participativa**, com **proteção social básica** e **especial**.",
      "- **Proteção social básica**: **prevenção** de situações de risco, fortalecimento de vínculos. Executada no **CRAS** (Centro de Referência de Assistência Social), com o **PAIF** (Serviço de Proteção e Atendimento Integral à Família).",
      "- **Proteção social especial**: para famílias e indivíduos em situação de **risco pessoal ou social**, com **direitos violados**.",
      "  - **Média complexidade**: **vínculos familiares mantidos**; **CREAS** (Centro de Referência Especializado de Assistência Social) e o **PAEFI**.",
      "  - **Alta complexidade**: **vínculos rompidos ou ameaçados**; **acolhimento** (abrigos, casas-lares, repúblicas).",
      "",
      "### Participação, financiamento e benefícios eventuais",
      "- **Conselhos** (nacional, estaduais, distrital e municipais) e **conferências**.",
      "- **Fundos** de assistência social (FNAS) e **planos**.",
      "- **Benefícios eventuais**: auxílio por **natalidade ou morte**, em situação de **vulnerabilidade temporária** e de **calamidade pública**, a cargo dos **Estados, DF e Municípios**.",
      "- Os **programas de transferência de renda** (Bolsa Família) se articulam à assistência e ao **CadÚnico** (Cadastro Único). **Conferir**.",
    ]),
    atencao("**CRAS** = proteção **básica** (prevenir). **CREAS** = proteção **especial de média complexidade** (direitos violados, vínculos mantidos). **Alta complexidade** = **acolhimento**, vínculos rompidos ou ameaçados."),
    q("O Centro de Referência de Assistência Social (CRAS) é a unidade pública responsável pela oferta de serviços da proteção social:", ["especial de alta complexidade", "básica", "especial de média complexidade", "previdenciária", "de saúde"], "B", "O CREAS é a unidade da proteção especial de média complexidade."),
    ce("A assistência social é política de seguridade social não contributiva, que provê os mínimos sociais.", "Certo", "LOAS, art. 1º."),
    q("É princípio da assistência social:", ["a supremacia das exigências de rentabilidade econômica sobre as necessidades sociais", "a supremacia do atendimento às necessidades sociais sobre as exigências de rentabilidade econômica", "a comprovação vexatória de necessidade", "a cobrança de contribuição do beneficiário", "a restrição aos moradores urbanos"], "B", "LOAS, art. 4º, I."),
    q("O atendimento em unidades de acolhimento, como abrigos, destina-se a situações em que os vínculos familiares foram rompidos ou ameaçados e integra a proteção social especial de:", ["baixa complexidade", "média complexidade", "alta complexidade", "proteção básica", "vigilância socioassistencial"], "C", "Alta complexidade."),
  ]);

  A("assistencia-social/beneficio-de-prestacao-continuada-bpc", [
    aprofundar([
      "### O que é (LOAS, art. 20)",
      "**Garantia de um salário mínimo mensal** à **pessoa com deficiência** e ao **idoso com 65 anos ou mais** que comprovem **não possuir meios de prover a própria manutenção nem de tê-la provida por sua família**. É **assistencial**: **não exige contribuição** nem filiação.",
      "",
      "### Critérios",
      "- **Idoso**: **65 anos ou mais**.",
      "- **Pessoa com deficiência**: **impedimento de longo prazo** (no mínimo **2 anos**) de natureza física, mental, intelectual ou sensorial, que, em interação com barreiras, possa obstruir sua participação plena e efetiva na sociedade em igualdade de condições. A deficiência é verificada por **avaliação social e médica**.",
      "- **Renda familiar per capita** **inferior a 1/4 do salário mínimo** (art. 20, § 3º). O STF entendeu que esse critério **não é o único** meio de prova da miserabilidade, e leis recentes **alteraram** a regra e o regulamento prevê limites ampliados em determinadas condições. **Confira o texto atual da lei e do decreto.**",
      "- **Família**: o requerente, o cônjuge ou companheiro, os pais (ou madrasta/padrasto), os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, **que vivam sob o mesmo teto**.",
      "- **Inscrição** no **CPF** e no **Cadastro Único** (CadÚnico).",
      "",
      "### Características",
      "- **Não é benefício previdenciário**: **não gera** pensão por morte, **não tem 13º salário**, **não é vitalício** nem hereditário, e **não exige carência**.",
      "- É **pago pelo INSS**, mas **operado com recursos da assistência social** (Fundo Nacional de Assistência Social).",
      "- **Revisão** a cada **2 anos**, para avaliar a continuidade das condições.",
      "- **Não acumulável** com outro benefício da seguridade social ou de outro regime, **salvo** assistência médica, pensões especiais de natureza indenizatória e remuneração de contrato de aprendizagem.",
      "- Cessa com a **superação** das condições, com a morte ou por **irregularidade**.",
    ]),
    atencao(`O BPC é **assistencial**: **sem contribuição, sem 13º, sem pensão por morte**. O critério de **renda per capita de 1/4 do salário mínimo** foi relativizado pelo STF e por lei: **confira** a redação atual. ${VALORES}`, "Conferir"),
    q("O Benefício de Prestação Continuada (BPC) é devido ao idoso e à pessoa com deficiência:", ["que tenham contribuído por 15 anos", "que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida pela família", "de qualquer renda", "apenas aos aposentados", "somente aos moradores de zona urbana"], "B", "LOAS, art. 20."),
    ce("O BPC garante um salário mínimo mensal e não gera pensão por morte nem direito a gratificação natalina.", "Certo", "Trata-se de benefício assistencial."),
    q("O idoso, para fins do BPC, é a pessoa com idade igual ou superior a:", ["60 anos", "62 anos", "65 anos", "70 anos", "75 anos"], "C", "LOAS, art. 20."),
    ce("O BPC exige carência de 180 contribuições mensais.", "Errado", "O BPC é assistencial e não exige contribuição nem carência."),
  ]);
})();

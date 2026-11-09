/* Bloco A · Seguridade Social (INSS). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "seguridade-social", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const L = {
    cf: { titulo: "Constituição Federal, arts. 194 a 204 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    ec103: { titulo: "Emenda Constitucional 103/2019 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm" },
    l8213: { titulo: "Lei 8.213/1991 (benefícios) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm" },
    l8212: { titulo: "Lei 8.212/1991 (custeio) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm" },
    l8742: { titulo: "Lei 8.742/1993 (LOAS) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8742.htm" },
    d3048: { titulo: "Decreto 3.048/1999 (Regulamento da Previdência Social) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm" },
  };
  const VALORES = "Valores (alíquotas, faixas, teto, cota do salário-família, limite de renda) mudam todo ano por portaria. Confira os números vigentes na data da prova.";
  const SC = "Seguridade Social na Constituição";
  const RG = "Regime Geral de Previdência Social (Lei 8.213/1991)";
  const BE = "Benefícios do RGPS";
  const CU = "Custeio (Lei 8.212/1991)";
  const AS = "Assistência Social";
  const RP = "Regulamento da Previdência";

  /* ================= CONSTITUIÇÃO ================= */

  A(SC, "Conceito e composição: saúde, previdência e assistência", {
    resumo: "O tripé da seguridade e quem tem direito a cada parte.",
    incidencia: "alta",
    fontes: [L.cf],
    blocos: [
      { tipo: "lei", titulo: "Constituição Federal, art. 194", texto: ["Art. 194. A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social."], referencia: "CF/88, art. 194, caput", url: L.cf.url },
      { tipo: "svg", titulo: "O tripé", codigo: `
<svg viewBox="0 0 540 220" role="img" aria-label="Seguridade social apoiada em três pilares: saúde para todos, previdência para quem contribui, assistência para quem dela necessitar">
  <rect class="fd-d" x="70" y="10" width="400" height="44" rx="8"></rect>
  <text class="tx tx-t" x="270" y="38" text-anchor="middle">Seguridade Social</text>
  <rect class="fd" x="40" y="80" width="140" height="120" rx="8"></rect>
  <text class="tx tx-t" x="110" y="110" text-anchor="middle">Saúde</text>
  <text class="tx-m" x="110" y="140" text-anchor="middle">para todos</text><text class="tx-m" x="110" y="160" text-anchor="middle">sem contribuição</text>
  <rect class="fd" x="200" y="80" width="140" height="120" rx="8"></rect>
  <text class="tx tx-t" x="270" y="110" text-anchor="middle">Previdência</text>
  <text class="tx-m" x="270" y="140" text-anchor="middle">para quem contribui</text><text class="tx-m" x="270" y="160" text-anchor="middle">filiação obrigatória</text>
  <rect class="fd" x="360" y="80" width="140" height="120" rx="8"></rect>
  <text class="tx tx-t" x="430" y="110" text-anchor="middle">Assistência</text>
  <text class="tx-m" x="430" y="140" text-anchor="middle">a quem necessitar</text><text class="tx-m" x="430" y="160" text-anchor="middle">sem contribuição</text>
</svg>` },
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "Saúde (art. 196)", "Previdência (art. 201)", "Assistência (art. 203)"], linhas: [
        ["Quem", "todos", "segurados e dependentes", "quem dela necessitar"],
        ["Contribuição", "não exige", "**exige** (caráter contributivo)", "não exige"],
        ["Órgão", "SUS", "INSS (RGPS)", "SUAS (o INSS opera o BPC)"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "Dentre as áreas da seguridade social, a que exige contribuição do beneficiário é a:", alternativas: ["saúde", "previdência social", "assistência social", "todas", "nenhuma"], correta: "B", comentario: "A previdência tem caráter contributivo e filiação obrigatória." }
    ]
  });

  A(SC, "Princípios e objetivos (art. 194)", {
    resumo: "Universalidade, uniformidade, seletividade, irredutibilidade, equidade, diversidade e gestão quadripartite.",
    incidencia: "alta",
    fontes: [L.cf],
    blocos: [
      { tipo: "tabela", titulo: "Objetivos do art. 194, parágrafo único", cabecalho: ["Inciso", "Objetivo", "Em poucas palavras"], linhas: [
        ["I", "universalidade da cobertura e do atendimento", "cobrir todos os riscos (cobertura) e todas as pessoas (atendimento)"],
        ["II", "uniformidade e equivalência dos benefícios e serviços às populações urbanas e rurais", "mesmo rol de benefícios e valor equivalente para urbanos e rurais"],
        ["III", "seletividade e distributividade na prestação dos benefícios e serviços", "escolher quem mais precisa e redistribuir renda"],
        ["IV", "irredutibilidade do valor dos benefícios", "o valor nominal não pode ser reduzido"],
        ["V", "equidade na forma de participação no custeio", "quem pode mais, contribui mais"],
        ["VI", "diversidade da base de financiamento", "várias fontes de receita, com rubricas separadas para saúde, previdência e assistência"],
        ["VII", "caráter democrático e descentralizado da administração", "gestão **quadripartite**: trabalhadores, empregadores, aposentados e Governo"]
      ]},
      { tipo: "dica", texto: "Gestão **quadri**partite = **4** partes: trabalhadores, empregadores, aposentados e Governo." },
      { tipo: "questao", banca: Q, enunciado: "O princípio que garante que o valor nominal dos benefícios não seja reduzido é o da:", alternativas: ["seletividade", "irredutibilidade", "universalidade", "equidade no custeio", "uniformidade"], correta: "B", comentario: "Art. 194, parágrafo único, IV." }
    ]
  });

  A(SC, "Financiamento (art. 195)", {
    resumo: "Quem financia a seguridade, as contribuições sociais e a regra da contrapartida.",
    incidencia: "alta",
    fontes: [L.cf],
    conferir: "A reforma tributária (EC 132/2023) mudou contribuições sobre receita e faturamento (PIS/COFINS → CBS). Confira a redação vigente do art. 195.",
    blocos: [
      { tipo: "texto", texto: [
        "A seguridade é financiada por **toda a sociedade**, de forma **direta** (contribuições sociais) e **indireta** (recursos dos orçamentos da União, Estados, DF e Municípios).",
        "",
        "**Contribuições sociais (art. 195)**:",
        "- do **empregador, empresa e equiparados**: sobre folha de salários, receita ou faturamento e lucro;",
        "- do **trabalhador e demais segurados** (não incide sobre aposentadoria e pensão do RGPS);",
        "- sobre a receita de **concursos de prognósticos** (loterias);",
        "- do **importador** de bens ou serviços."
      ]},
      { tipo: "tabela", titulo: "Regras do art. 195", cabecalho: ["Parágrafo", "Regra"], linhas: [
        ["§ 5º", "nenhum benefício ou serviço pode ser **criado, majorado ou estendido** sem a correspondente **fonte de custeio total** (regra da contrapartida)"],
        ["§ 6º", "as contribuições só podem ser exigidas **90 dias** após a lei que as instituiu ou modificou (anterioridade nonagesimal)"],
        ["§ 7º", "são **isentas** (imunes) as entidades beneficentes de assistência social que atendam aos requisitos da lei"]
      ]},
      { tipo: "atencao", texto: "As contribuições da seguridade **não** seguem a anterioridade do exercício (1º de janeiro): basta esperar 90 dias." },
      { tipo: "questao", banca: Q, enunciado: "Uma lei que aumenta contribuição social da seguridade publicada em 1º de outubro pode ser exigida a partir de:", alternativas: ["1º de janeiro do ano seguinte", "90 dias após a publicação", "imediatamente", "1 ano após a publicação", "30 dias após a publicação"], correta: "B", comentario: "Anterioridade nonagesimal (art. 195, § 6º)." }
    ]
  });

  A(SC, "Previdência Social na Constituição (arts. 201 e 202)", {
    resumo: "RGPS contributivo, riscos cobertos, piso de um salário mínimo e previdência complementar.",
    incidencia: "alta",
    fontes: [L.cf, L.ec103],
    blocos: [
      { tipo: "texto", texto: [
        "O **RGPS** tem caráter **contributivo**, **filiação obrigatória** e deve preservar o **equilíbrio financeiro e atuarial** (art. 201). Cobre:",
        "- incapacidade temporária ou permanente para o trabalho e idade avançada;",
        "- proteção à maternidade, especialmente à gestante;",
        "- proteção ao trabalhador em desemprego involuntário (seguro-desemprego, que não é pago pelo INSS);",
        "- salário-família e auxílio-reclusão para dependentes de segurados de **baixa renda**;",
        "- pensão por morte."
      ]},
      { tipo: "tabela", titulo: "Regras do art. 201", cabecalho: ["Regra", "Conteúdo"], linhas: [
        ["Piso (§ 2º)", "benefício que substitui o salário de contribuição não pode ser inferior ao **salário mínimo**"],
        ["Facultativo (§ 5º)", "vedada a filiação como facultativo de quem participa de regime próprio (RPPS)"],
        ["Aposentadoria (§ 7º, após EC 103)", "65 anos (homem) e 62 (mulher), com tempo mínimo de contribuição; trabalhadores rurais e em economia familiar: 60 e 55 anos"],
        ["Reajuste (§ 4º)", "para preservar o valor real"]
      ]},
      { tipo: "texto", titulo: "Previdência complementar (art. 202)", texto: ["É **autônoma** em relação ao RGPS, **facultativa** e baseada na constituição de reservas. Exemplo para servidores federais: Funpresp."] },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Constituição, o benefício previdenciário que substitui o rendimento do trabalho:", alternativas: ["pode ser inferior ao salário mínimo se o segurado contribuiu pouco", "não pode ter valor mensal inferior ao salário mínimo", "é sempre igual ao último salário", "é limitado a meio salário mínimo", "não tem piso"], correta: "B", comentario: "Art. 201, § 2º." }
    ]
  });

  /* ================= RGPS ================= */

  A(RG, "Segurados obrigatórios", {
    resumo: "As cinco categorias: empregado, doméstico, contribuinte individual, avulso e segurado especial.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "tabela", titulo: "Segurados obrigatórios (art. 11)", cabecalho: ["Categoria", "Quem é", "Exemplos"], linhas: [
        ["Empregado", "presta serviço de natureza urbana ou rural a empresa, com subordinação e remuneração", "com carteira assinada, servidor comissionado sem vínculo efetivo, temporário"],
        ["Empregado doméstico", "presta serviço contínuo a pessoa ou família, em âmbito residencial, sem fins lucrativos, por mais de 2 dias por semana", "diarista mensalista, cuidador, motorista particular"],
        ["Contribuinte individual", "trabalha por conta própria ou presta serviço eventual sem vínculo", "autônomo, empresário, MEI, motorista de aplicativo, síndico remunerado"],
        ["Trabalhador avulso", "presta serviço a várias empresas, sem vínculo, com intermediação de sindicato ou órgão gestor de mão de obra", "estivador, trabalhador portuário"],
        ["Segurado especial", "produtor rural, pescador artesanal e assemelhados, em regime de **economia familiar**, sem empregados permanentes", "pequeno agricultor, pescador artesanal, cônjuge e filhos maiores de 16 que trabalham com eles"]
      ]},
      { tipo: "dica", texto: "Mnemônico: **E-D-I-A-S** — Empregado, Doméstico, Individual (contribuinte), Avulso, Segurado especial." },
      { tipo: "questao", banca: Q, enunciado: "O pescador artesanal que trabalha com a família, sem empregados, é segurado:", alternativas: ["empregado", "contribuinte individual", "facultativo", "especial", "avulso"], correta: "D", comentario: "Atividade em regime de economia familiar: segurado especial." }
    ]
  });

  A(RG, "Segurado facultativo", {
    resumo: "Quem não exerce atividade remunerada e decide contribuir: exemplos e regras.",
    incidencia: "média",
    fontes: [L.l8213, L.d3048],
    blocos: [
      { tipo: "texto", texto: [
        "**Facultativo** é quem **não** exerce atividade que o torne segurado obrigatório e decide contribuir para ter proteção previdenciária.",
        "",
        "Idade mínima: a Lei 8.213 (art. 13) fala em **14 anos**, mas o **Regulamento (Decreto 3.048, art. 11)** fixa **16 anos**, em linha com a proibição constitucional de trabalho antes dos 16 (salvo aprendiz). Em prova, preste atenção à fonte citada.",
        "",
        "Exemplos (Decreto 3.048): dona ou dono de casa, síndico **não remunerado**, estudante, desempregado, bolsista e estagiário, presidiário que não exerce atividade remunerada, brasileiro que acompanha cônjuge no exterior."
      ]},
      { tipo: "atencao", texto: "Quem participa de **regime próprio** (servidor efetivo) **não** pode se filiar ao RGPS como facultativo (CF, art. 201, § 5º)." },
      { tipo: "questao", banca: Q, enunciado: "É exemplo de segurado facultativo:", alternativas: ["síndico remunerado", "estudante que não exerce atividade remunerada", "motorista de aplicativo", "servidor público efetivo federal", "empregado doméstico"], correta: "B", comentario: "Síndico remunerado e motorista de aplicativo são contribuintes individuais; servidor efetivo tem regime próprio." }
    ]
  });

  A(RG, "Dependentes", {
    resumo: "As três classes, a dependência presumida e a regra da exclusão.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "tabela", titulo: "Classes de dependentes (art. 16)", cabecalho: ["Classe", "Quem", "Dependência econômica"], linhas: [
        ["I", "cônjuge, companheiro(a) e filho não emancipado menor de 21 anos ou inválido ou com deficiência intelectual, mental ou grave", "**presumida**"],
        ["II", "os pais", "precisa ser **comprovada**"],
        ["III", "irmão não emancipado menor de 21 anos ou inválido ou com deficiência intelectual, mental ou grave", "precisa ser **comprovada**"]
      ]},
      { tipo: "texto", texto: [
        "- A existência de dependente de uma classe **exclui** as classes seguintes (§ 1º). Se há esposa, os pais não recebem.",
        "- **Enteado** e **menor tutelado** equiparam-se a filho, mediante declaração do segurado e comprovação de dependência econômica (§ 2º).",
        "- Dentro da mesma classe, os dependentes dividem o benefício em partes iguais."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segurado falece deixando esposa e mãe que dependia economicamente dele. Terá direito à pensão por morte:", alternativas: ["apenas a mãe", "a esposa e a mãe, em partes iguais", "apenas a esposa", "ninguém", "a mãe, que tem preferência"], correta: "C", comentario: "A esposa (classe I) exclui a mãe (classe II)." }
    ]
  });

  A(RG, "Manutenção e perda da qualidade de segurado", {
    resumo: "O período de graça: por quanto tempo o segurado fica protegido sem contribuir.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "tabela", titulo: "Período de graça (art. 15)", cabecalho: ["Situação", "Mantém a qualidade de segurado"], linhas: [
        ["Em gozo de benefício (exceto auxílio-acidente)", "**sem limite de prazo**"],
        ["Deixou de exercer atividade ou de contribuir (obrigatório)", "até **12 meses**"],
        ["… com mais de 120 contribuições sem perder a qualidade", "prorrogação para até **24 meses**"],
        ["… desempregado, comprovado no órgão do Ministério do Trabalho", "mais **12 meses** (até 36 no máximo)"],
        ["Segregado compulsoriamente por doença", "até 12 meses após cessar a segregação"],
        ["Recluso", "até 12 meses após o livramento"],
        ["Incorporado às Forças Armadas", "até 3 meses após o licenciamento"],
        ["Facultativo", "até **6 meses** após cessar as contribuições"]
      ]},
      { tipo: "python", titulo: "Calculando o período de graça", codigo: `
def periodo_graca(contribuicoes, desempregado_registrado, facultativo=False):
    if facultativo:
        return 6
    meses = 12
    if contribuicoes > 120:
        meses += 12
    if desempregado_registrado:
        meses += 12
    return meses

print(periodo_graca(80, False))
print(periodo_graca(150, False))
print(periodo_graca(150, True))
print(periodo_graca(50, False, facultativo=True))
`, saida: `
12
24
36
6
` },
      { tipo: "texto", titulo: "Quando ocorre a perda", texto: ["A perda ocorre no dia seguinte ao fim do prazo para recolher a contribuição referente ao mês imediatamente posterior ao término do período de graça (art. 15, § 4º). Na prática, há uns dias a mais além do período contado."] },
      { tipo: "questao", banca: Q, enunciado: "O segurado facultativo que deixa de contribuir mantém a qualidade de segurado por até:", alternativas: ["3 meses", "6 meses", "12 meses", "24 meses", "36 meses"], correta: "B", comentario: "Art. 15, VI." }
    ]
  });

  A(RG, "Filiação e inscrição", {
    resumo: "Filiação é o vínculo; inscrição é o cadastro. Para obrigatórios, a filiação é automática.",
    incidencia: "média",
    fontes: [L.l8213, L.d3048],
    blocos: [
      { tipo: "tabela", titulo: "Diferença", cabecalho: ["", "Filiação", "Inscrição"], linhas: [
        ["O que é", "o **vínculo jurídico** entre a pessoa e a Previdência, que gera direitos e deveres", "o **cadastro** no RGPS (dados pessoais, NIT)"],
        ["Obrigatório", "**automática**, com o exercício de atividade remunerada", "formalidade que pode vir depois"],
        ["Facultativo", "depende da inscrição **e** do primeiro recolhimento em dia", "ato de vontade"]
      ]},
      { tipo: "atencao", texto: "Para o **facultativo**, a filiação **não retroage**: não se pode pagar contribuições de meses anteriores à inscrição para contar como tempo." },
      { tipo: "questao", banca: Q, enunciado: "Para o segurado empregado, a filiação ao RGPS decorre:", alternativas: ["da inscrição no INSS", "do primeiro pagamento feito por ele", "automaticamente do exercício de atividade remunerada", "de requerimento após 12 meses", "da assinatura do contrato pelo INSS"], correta: "C", comentario: "Segurado obrigatório: filiação automática." }
    ]
  });

  A(RG, "Carência", {
    resumo: "Número mínimo de contribuições para cada benefício e os casos sem carência.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "tabela", titulo: "Carência (arts. 25 e 26)", cabecalho: ["Benefício", "Carência"], linhas: [
        ["Auxílio por incapacidade temporária e aposentadoria por incapacidade permanente", "**12** contribuições"],
        ["Aposentadorias programadas (idade e tempo) e especial", "**180** contribuições"],
        ["Salário-maternidade da contribuinte individual, segurada especial e facultativa", "**10** contribuições"],
        ["Auxílio-reclusão", "**24** contribuições (Lei 13.846/2019)"],
        ["Pensão por morte, salário-família, auxílio-acidente", "**sem** carência"],
        ["Salário-maternidade da empregada, doméstica e avulsa", "**sem** carência"],
        ["Incapacidade por acidente de qualquer natureza, doença profissional ou do trabalho, ou doenças graves da lista", "**sem** carência"]
      ]},
      { tipo: "dica", texto: "Números para decorar: **10** (maternidade de quem não é empregada), **12** (incapacidade), **24** (reclusão), **180** (aposentadorias)." },
      { tipo: "atencao", texto: "Pensão por morte não tem carência, mas a **duração** para cônjuge depende de 18 contribuições e 2 anos de casamento ou união (ver Pensão por morte)." },
      { tipo: "questao", banca: Q, enunciado: "A carência do auxílio por incapacidade temporária, quando a incapacidade não decorre de acidente, é de:", alternativas: ["sem carência", "10 contribuições", "12 contribuições", "24 contribuições", "180 contribuições"], correta: "C", comentario: "Art. 25, I." }
    ]
  });

  A(RG, "Salário de benefício e renda mensal", {
    resumo: "A média de todos os salários de contribuição desde 1994 e o percentual de cada benefício.",
    incidencia: "alta",
    fontes: [L.ec103, L.l8213],
    conferir: "Regras de cálculo da EC 103/2019 (art. 26) e das regras de transição: confira na emenda e no Decreto 3.048 atualizado.",
    blocos: [
      { tipo: "texto", texto: [
        "Depois da **EC 103/2019**, o **salário de benefício** é a **média aritmética simples de 100% dos salários de contribuição** desde julho de 1994 (ou desde o início das contribuições, se posterior), corrigidos.",
        "",
        "Sobre essa média se aplica o percentual de cada benefício (**renda mensal inicial**, RMI):"
      ]},
      { tipo: "tabela", titulo: "Percentuais", cabecalho: ["Benefício", "Renda mensal"], linhas: [
        ["Aposentadoria programada (e por incapacidade permanente comum)", "**60%** + **2%** por ano de contribuição que exceder 20 anos (homem) ou 15 anos (mulher)"],
        ["Aposentadoria por incapacidade permanente acidentária", "**100%** da média"],
        ["Auxílio por incapacidade temporária", "**91%** do salário de benefício (limitado à média dos 12 últimos salários de contribuição)"],
        ["Auxílio-acidente", "**50%** do salário de benefício"],
        ["Pensão por morte", "cota familiar de **50%** + **10%** por dependente, até 100%"]
      ]},
      { tipo: "python", titulo: "Calculando a aposentadoria programada", codigo: `
def aposentadoria(media, anos_contribuicao, sexo):
    base = 20 if sexo == "M" else 15
    percentual = 60 + 2 * max(0, anos_contribuicao - base)
    return percentual, media * percentual / 100

for sexo, anos in [("M", 20), ("M", 30), ("F", 25), ("F", 40)]:
    p, valor = aposentadoria(3000, anos, sexo)
    print(f"{sexo}, {anos} anos: {p}% da média -> R$ {valor:.2f}")
`, saida: `
M, 20 anos: 60% da média -> R$ 1800.00
M, 30 anos: 80% da média -> R$ 2400.00
F, 25 anos: 80% da média -> R$ 2400.00
F, 40 anos: 110% da média -> R$ 3300.00
`, legenda: "O percentual pode passar de 100% da média. O valor final respeita o piso de um salário mínimo e o teto do RGPS." },
      { tipo: "questao", banca: Q, enunciado: "Pela EC 103/2019, uma segurada com 25 anos de contribuição recebe, de aposentadoria programada, qual percentual da média?", alternativas: ["60%", "70%", "80%", "90%", "100%"], correta: "C", comentario: "60% + 2% × (25 − 15) = 80%." }
    ]
  });

  /* ================= BENEFÍCIOS ================= */

  A(BE, "Aposentadorias após a EC 103/2019", {
    resumo: "Aposentadoria programada: idade mínima, tempo de contribuição e a ideia das regras de transição.",
    incidencia: "alta",
    fontes: [L.ec103],
    conferir: "As regras de transição (pontos, idade mínima progressiva, pedágios de 50% e 100%) têm números que mudam a cada ano. Estude pela tabela oficial do ano da prova.",
    blocos: [
      { tipo: "tabela", titulo: "Regra permanente (quem se filiou depois da EC 103)", cabecalho: ["", "Homem", "Mulher"], linhas: [
        ["Idade mínima (urbano)", "65 anos", "62 anos"],
        ["Tempo de contribuição", "20 anos", "15 anos"],
        ["Rural / economia familiar", "60 anos + 15 de contribuição", "55 anos + 15 de contribuição"],
        ["Professor da educação básica", "60 anos + 25 de magistério", "57 anos + 25 de magistério"]
      ]},
      { tipo: "texto", titulo: "Ideias-chave", texto: [
        "- A EC 103 **acabou** com a aposentadoria por **tempo de contribuição** sem idade mínima para quem entrou depois dela.",
        "- Quem já era filiado antes de 13/11/2019 pode usar **regras de transição**: sistema de pontos (idade + contribuição), idade mínima progressiva, pedágio de 50% e pedágio de 100%.",
        "- Homens filiados **antes** da EC 103 precisam de **15** anos de contribuição (não 20) na regra de idade.",
        "- Quem cumpriu os requisitos antes da EC 103 tem **direito adquirido** às regras antigas."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Pela regra permanente da EC 103/2019, a aposentadoria programada de uma mulher urbana exige:", alternativas: ["60 anos e 15 de contribuição", "62 anos e 15 de contribuição", "65 anos e 20 de contribuição", "30 anos de contribuição, sem idade", "55 anos e 15 de contribuição"], correta: "B", comentario: "62 anos de idade e 15 de contribuição." }
    ]
  });

  A(BE, "Aposentadoria por incapacidade permanente", {
    resumo: "Antiga aposentadoria por invalidez: requisitos, cálculo e reavaliação.",
    incidencia: "média",
    fontes: [L.l8213],
    blocos: [
      { tipo: "texto", texto: [
        "Devida ao segurado **incapaz de forma total e permanente** para qualquer atividade que lhe garanta o sustento, sem possibilidade de reabilitação, verificada em **perícia médica** (art. 42).",
        "",
        "- **Carência**: 12 contribuições, dispensada em acidente de qualquer natureza, doença profissional ou do trabalho e doenças graves da lista.",
        "- Doença preexistente à filiação **não** dá direito, salvo se a incapacidade decorrer de agravamento posterior.",
        "- **Valor**: 60% da média + 2% por ano acima de 20 (homem) ou 15 (mulher); **100%** se acidentária.",
        "- **Adicional de 25%** para quem precisa da assistência permanente de outra pessoa (art. 45), mesmo acima do teto.",
        "- O segurado pode ser convocado para **reavaliação** periódica; se voltar a trabalhar voluntariamente, o benefício é cancelado."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O acréscimo de 25% na aposentadoria por incapacidade permanente é devido ao segurado que:", alternativas: ["tem mais de 60 anos", "necessita da assistência permanente de outra pessoa", "tem dependentes menores", "contribuiu mais de 30 anos", "mora em zona rural"], correta: "B", comentario: "Art. 45 da Lei 8.213/1991." }
    ]
  });

  A(BE, "Aposentadoria especial", {
    resumo: "Exposição a agentes nocivos à saúde: tempo especial e idade mínima após a EC 103.",
    incidencia: "média",
    fontes: [L.ec103, L.l8213],
    conferir: "Regras de transição da especial (pontuação) e conversão de tempo especial em comum: confira na EC 103 e no Decreto 3.048.",
    blocos: [
      { tipo: "texto", texto: [
        "Devida a quem trabalha **exposto a agentes nocivos** (químicos, físicos, biológicos) prejudiciais à saúde, de forma permanente. A comprovação é pelo **PPP** (Perfil Profissiográfico Previdenciário), baseado em laudo técnico (LTCAT).",
        "",
        "Após a EC 103 (regra permanente), exige **idade mínima** combinada com o tempo de exposição:"
      ]},
      { tipo: "tabela", titulo: "Regra permanente", cabecalho: ["Tempo de atividade especial", "Idade mínima", "Exemplo de atividade"], linhas: [["15 anos", "55 anos", "mineração subterrânea em frente de produção"], ["20 anos", "58 anos", "exposição a amianto, mineração afastada da frente"], ["25 anos", "60 anos", "demais casos (ruído, agentes químicos e biológicos)"]] },
      { tipo: "atencao", texto: "Depois da EC 103, **não** é mais possível converter tempo especial em comum para períodos trabalhados após 13/11/2019." },
      { tipo: "questao", banca: Q, enunciado: "O documento que comprova a exposição a agentes nocivos para a aposentadoria especial é o:", alternativas: ["CNIS", "PPP", "CAT", "NIT", "CTPS apenas"], correta: "B", comentario: "Perfil Profissiográfico Previdenciário." }
    ]
  });

  A(BE, "Auxílio por incapacidade temporária", {
    resumo: "Antigo auxílio-doença: incapacidade por mais de 15 dias, carência, valor e os 15 primeiros dias do empregado.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "texto", texto: [
        "Devido ao segurado que ficar **incapacitado** para o seu trabalho ou atividade habitual por mais de **15 dias consecutivos** (art. 59).",
        "",
        "- **Empregado**: os **15 primeiros dias** são pagos pela **empresa**; o INSS paga a partir do 16º dia.",
        "- Demais segurados: o INSS paga desde o início da incapacidade (se requerido em até 30 dias).",
        "- **Carência**: 12 contribuições (dispensada em acidente, doença do trabalho e doenças graves).",
        "- **Valor**: 91% do salário de benefício, limitado à média dos 12 últimos salários de contribuição.",
        "- O benefício tem **data estimada de cessação**; o segurado pode pedir prorrogação."
      ]},
      { tipo: "python", titulo: "Quem paga cada dia", codigo: `
dias_afastado = 40
empresa = min(dias_afastado, 15)
inss = max(0, dias_afastado - 15)
print(f"Empregado afastado {dias_afastado} dias: empresa paga {empresa}, INSS paga {inss}")
`, saida: `
Empregado afastado 40 dias: empresa paga 15, INSS paga 25
` },
      { tipo: "questao", banca: Q, enunciado: "Empregado afastado por doença por 10 dias:", alternativas: ["recebe auxílio do INSS desde o 1º dia", "tem os dias pagos pela empresa, sem benefício do INSS", "recebe auxílio-acidente", "perde a qualidade de segurado", "recebe salário-família"], correta: "B", comentario: "Até 15 dias a empresa paga; o auxílio do INSS só começa a partir do 16º dia." }
    ]
  });

  A(BE, "Auxílio-acidente", {
    resumo: "Indenização por sequela que reduz a capacidade para o trabalho habitual.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "texto", texto: [
        "Concedido como **indenização** ao segurado quando, após a consolidação das lesões de **acidente de qualquer natureza**, restarem **sequelas** que reduzam a capacidade para o trabalho que habitualmente exercia (art. 86).",
        "",
        "- **Valor**: 50% do salário de benefício. Pode ser **inferior ao salário mínimo** (não substitui a renda).",
        "- **Sem carência**.",
        "- Devido a: **empregado**, **doméstico**, **avulso** e **segurado especial** (não ao contribuinte individual nem ao facultativo).",
        "- O segurado **pode continuar trabalhando** e recebendo.",
        "- Cessa com a **aposentadoria** (não acumula) ou a morte."
      ]},
      { tipo: "atencao", texto: "Auxílio-acidente **não** é o benefício pago durante o afastamento (esse é o auxílio por incapacidade temporária). É pago **depois**, pela sequela." },
      { tipo: "questao", banca: Q, enunciado: "Sobre o auxílio-acidente, é correto afirmar:", alternativas: ["exige 12 contribuições de carência", "é devido ao contribuinte individual", "pode ser inferior ao salário mínimo e é acumulável com o salário", "acumula com qualquer aposentadoria", "é pago durante o afastamento do trabalho"], correta: "C", comentario: "Tem natureza indenizatória: 50% do salário de benefício, acumulável com o salário, sem carência." }
    ]
  });

  A(BE, "Pensão por morte", {
    resumo: "Benefício dos dependentes: sem carência, cota familiar e duração para o cônjuge.",
    incidencia: "alta",
    fontes: [L.l8213, L.ec103],
    conferir: "As faixas de idade que definem a duração da pensão do cônjuge são atualizadas por ato do Ministério conforme a expectativa de vida. Confira a tabela vigente.",
    blocos: [
      { tipo: "texto", texto: [
        "Devida aos **dependentes** do segurado que falecer, aposentado ou não (art. 74). **Sem carência**.",
        "",
        "- **Valor (EC 103)**: cota familiar de **50%** da aposentadoria que o segurado recebia (ou a que teria direito por incapacidade permanente) + **10% por dependente**, até 100%. As cotas **não** são reversíveis quando um dependente perde o direito (exceto regras especiais).",
        "- **Início**: data do óbito, se requerida em até 90 dias (180 dias para filhos menores de 16)."
      ]},
      { tipo: "tabela", titulo: "Duração para cônjuge ou companheiro", cabecalho: ["Situação", "Duração"], linhas: [
        ["Menos de 18 contribuições **ou** menos de 2 anos de casamento/união", "**4 meses**"],
        ["Com 18 contribuições e 2 anos de união", "conforme a idade do cônjuge na data do óbito: de 3 anos (mais jovens) até **vitalícia** (a partir de cerca de 45 anos)"],
        ["Morte por acidente ou doença do trabalho", "dispensa os requisitos de 18 contribuições e 2 anos"]
      ]},
      { tipo: "python", titulo: "Cota familiar da pensão", codigo: `
def pensao(aposentadoria, dependentes):
    cota = min(50 + 10 * dependentes, 100)
    return cota, aposentadoria * cota / 100

for d in (1, 2, 3, 5, 6):
    cota, valor = pensao(4000, d)
    print(f"{d} dependente(s): {cota}% -> R$ {valor:.2f}")
`, saida: `
1 dependente(s): 60% -> R$ 2400.00
2 dependente(s): 70% -> R$ 2800.00
3 dependente(s): 80% -> R$ 3200.00
5 dependente(s): 100% -> R$ 4000.00
6 dependente(s): 100% -> R$ 4000.00
`, legenda: "Simplificação: há regra especial (100%) quando há dependente inválido ou com deficiência grave, e o piso de um salário mínimo se aplica quando a pensão é a única fonte de renda." },
      { tipo: "questao", banca: Q, enunciado: "Pela EC 103/2019, a pensão por morte deixada para 2 dependentes corresponde a:", alternativas: ["50%", "60%", "70%", "100%", "120%"], correta: "C", comentario: "50% + 10% × 2 = 70% da aposentadoria." }
    ]
  });

  A(BE, "Auxílio-reclusão", {
    resumo: "Para dependentes de segurado de baixa renda preso em regime fechado.",
    incidencia: "média",
    fontes: [L.l8213],
    conferir: VALORES,
    blocos: [
      { tipo: "texto", texto: [
        "Devido aos **dependentes** do segurado de **baixa renda** recolhido à prisão em **regime fechado** (art. 80, com a Lei 13.846/2019), que não receba remuneração da empresa nem outro benefício.",
        "",
        "- **Carência**: **24** contribuições.",
        "- **Baixa renda**: média dos salários de contribuição dos 12 meses anteriores à prisão até o limite fixado em portaria anual.",
        "- **Valor**: calculado como a pensão por morte, mas **limitado a um salário mínimo** (EC 103).",
        "- Exige certidão de recolhimento à prisão, renovada periodicamente.",
        "- Em caso de fuga, o benefício é suspenso."
      ]},
      { tipo: "atencao", texto: "Desde 2019, **regime semiaberto** não dá direito ao auxílio-reclusão." },
      { tipo: "questao", banca: Q, enunciado: "O auxílio-reclusão é devido aos dependentes do segurado de baixa renda preso em regime:", alternativas: ["aberto", "semiaberto", "fechado", "domiciliar", "qualquer regime"], correta: "C", comentario: "Art. 80 da Lei 8.213/1991, com redação da Lei 13.846/2019." }
    ]
  });

  A(BE, "Salário-maternidade", {
    resumo: "120 dias para todas as seguradas, inclusive em adoção; carência só para algumas categorias.",
    incidencia: "alta",
    fontes: [L.l8213],
    blocos: [
      { tipo: "texto", texto: [
        "Devido à segurada (e ao segurado, em adoção ou guarda para adoção) durante **120 dias**, com início entre 28 dias antes do parto e a data dele (art. 71).",
        "",
        "- **Adoção ou guarda judicial para adoção**: 120 dias, **qualquer que seja a idade** da criança (art. 71-A).",
        "- **Carência**: **10** contribuições para contribuinte individual, segurada especial e facultativa; **sem** carência para empregada, doméstica e avulsa.",
        "- **Empregada**: a **empresa** paga e compensa com as contribuições devidas (exceto em alguns casos, como a do MEI). Demais seguradas: o **INSS** paga.",
        "- Aborto não criminoso: 2 semanas.",
        "- Falecimento da segurada: o cônjuge ou companheiro segurado recebe pelo período restante."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.213/1991, o salário-maternidade em caso de adoção é devido por:", alternativas: ["30 dias, se a criança tiver mais de 4 anos", "60 dias, se a criança tiver mais de 1 ano", "120 dias, independentemente da idade da criança", "180 dias sempre", "apenas se a criança tiver menos de 1 ano"], correta: "C", comentario: "Art. 71-A: 120 dias, sem distinção de idade." }
    ]
  });

  A(BE, "Salário-família", {
    resumo: "Cota por filho de até 14 anos para segurados de baixa renda.",
    incidencia: "média",
    fontes: [L.l8213],
    conferir: VALORES,
    blocos: [
      { tipo: "texto", texto: [
        "Pago mensalmente ao segurado de **baixa renda**, na proporção do número de **filhos ou equiparados de até 14 anos** ou inválidos de qualquer idade (art. 65).",
        "",
        "- Quem recebe: **empregado**, **empregado doméstico** e **trabalhador avulso** (e aposentados nessas condições). Contribuinte individual, segurado especial e facultativo **não** recebem.",
        "- **Sem carência**.",
        "- Valor de **cota fixa** por filho, atualizada por portaria; o limite de renda também.",
        "- Exige apresentação de certidão de nascimento, **atestado de vacinação** (até 6 anos) e **comprovante de frequência escolar** (a partir dos 4 anos).",
        "- Se pai e mãe forem segurados, **ambos** recebem.",
        "- O empregador paga e compensa."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Tem direito ao salário-família, preenchido o requisito de baixa renda:", alternativas: ["o contribuinte individual", "o segurado facultativo", "o empregado doméstico", "o segurado especial", "qualquer segurado, sem exceção"], correta: "C", comentario: "Empregado, doméstico e avulso (art. 65)." }
    ]
  });

  A(BE, "Serviço social e reabilitação profissional", {
    resumo: "Os serviços do RGPS: orientação social e reabilitação para voltar ao trabalho.",
    incidencia: "baixa",
    fontes: [L.l8213],
    blocos: [
      { tipo: "texto", texto: [
        "Além dos benefícios (prestações em dinheiro), o RGPS oferece **serviços**:",
        "",
        "- **Serviço social** (art. 88): esclarecer aos beneficiários seus direitos e a forma de exercê-los e estabelecer com eles o processo de solução dos problemas que surgirem na sua relação com a Previdência. Dá prioridade a segurados em benefício por incapacidade.",
        "- **Habilitação e reabilitação profissional** (arts. 89 a 93): proporcionar ao beneficiário incapacitado parcial ou totalmente os meios de **reeducação e readaptação** para voltar ao trabalho. É **obrigatória** para o segurado em benefício por incapacidade, sob pena de suspensão do benefício. Pode incluir próteses, órteses e cursos.",
        "",
        "Empresas com 100 ou mais empregados devem preencher de **2% a 5%** dos cargos com beneficiários reabilitados ou pessoas com deficiência habilitadas (art. 93, a \"lei de cotas\")."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A reabilitação profissional, para o segurado em gozo de benefício por incapacidade:", alternativas: ["é facultativa", "é obrigatória, sob pena de suspensão do benefício", "é paga pelo segurado", "só é oferecida a aposentados", "é exclusiva de acidentes de trabalho"], correta: "B", comentario: "Art. 101 da Lei 8.213/1991." }
    ]
  });

  /* ================= CUSTEIO ================= */

  A(CU, "Contribuição dos segurados", {
    resumo: "Alíquotas progressivas do empregado e alíquotas do contribuinte individual, facultativo e segurado especial.",
    incidencia: "alta",
    fontes: [L.ec103, L.l8212],
    conferir: VALORES,
    blocos: [
      { tipo: "tabela", titulo: "Empregado, doméstico e avulso (EC 103, progressivas por faixa)", cabecalho: ["Faixa de salário de contribuição", "Alíquota"], linhas: [["até 1 salário mínimo", "7,5%"], ["2ª faixa", "9%"], ["3ª faixa", "12%"], ["4ª faixa até o teto", "14%"]], legenda: "Como no imposto de renda: cada alíquota incide só sobre a parte do salário que está naquela faixa. Os limites das faixas mudam todo ano." },
      { tipo: "tabela", titulo: "Demais segurados", cabecalho: ["Segurado", "Alíquota"], linhas: [
        ["Contribuinte individual e facultativo (plano normal)", "20% do salário de contribuição"],
        ["Plano simplificado (sem aposentadoria por tempo)", "11% sobre o salário mínimo"],
        ["MEI e facultativo de baixa renda (dona de casa do CadÚnico)", "5% sobre o salário mínimo"],
        ["Contribuinte individual que presta serviço a empresa", "11% (a empresa retém), pois a empresa também contribui"],
        ["Segurado especial", "percentual sobre a **receita bruta da comercialização** da produção"]
      ]},
      { tipo: "python", titulo: "Contribuição progressiva", texto: "Faixas ilustrativas (use as do ano da prova).", codigo: `
faixas = [(1518.00, 0.075), (2793.88, 0.09), (4190.83, 0.12), (8157.41, 0.14)]

def contribuicao(salario):
    total, anterior = 0.0, 0.0
    for limite, aliquota in faixas:
        if salario > anterior:
            total += (min(salario, limite) - anterior) * aliquota
        anterior = limite
    return round(total, 2)

for s in (1518.00, 3000.00, 10000.00):
    c = contribuicao(s)
    print(f"Salário R$ {s:9.2f} -> contribuição R$ {c:7.2f} ({c / s:.2%} efetivo)")
`, saida: `
Salário R$   1518.00 -> contribuição R$  113.85 (7.50% efetivo)
Salário R$   3000.00 -> contribuição R$  253.41 (8.45% efetivo)
Salário R$  10000.00 -> contribuição R$  951.63 (9.52% efetivo)
`, legenda: "Faixas de 2025 usadas só como exemplo. O salário de 10.000 contribui só até o teto." },
      { tipo: "questao", banca: Q, enunciado: "Após a EC 103/2019, a contribuição do segurado empregado é calculada:", alternativas: ["com alíquota única de 11%", "com alíquotas progressivas por faixas de salário", "sobre o lucro da empresa", "somente sobre o 13º salário", "com alíquota de 20% para todos"], correta: "B", comentario: "7,5%, 9%, 12% e 14%, aplicadas por faixa." }
    ]
  });

  A(CU, "Contribuição da empresa e do empregador doméstico", {
    resumo: "Cota patronal de 20%, RAT/SAT, terceiros e a contribuição do empregador doméstico.",
    incidencia: "média",
    fontes: [L.l8212],
    conferir: VALORES,
    blocos: [
      { tipo: "tabela", titulo: "Empresa (art. 22 da Lei 8.212, regra geral)", cabecalho: ["Contribuição", "Alíquota"], linhas: [
        ["Cota patronal", "**20%** sobre o total das remunerações a empregados e avulsos"],
        ["Sobre serviços de contribuintes individuais", "**20%** sobre o valor pago"],
        ["RAT/SAT (riscos ambientais do trabalho)", "**1%, 2% ou 3%**, conforme o risco da atividade, ajustado pelo FAP"],
        ["Instituições financeiras", "adicional de 2,5% sobre a folha"]
      ]},
      { tipo: "texto", titulo: "Empregador doméstico (LC 150/2015)", texto: ["Recolhe pelo **eSocial** (Simples Doméstico): 8% de contribuição patronal + 0,8% de seguro contra acidentes, além do FGTS (8%) e da indenização compensatória (3,2%)."] },
      { tipo: "atencao", texto: "Há regimes especiais: empresas do **Simples Nacional** recolhem de forma unificada; e a **desoneração da folha** trocou, para alguns setores, a contribuição sobre a folha por uma sobre a receita (com regras de transição recentes)." },
      { tipo: "questao", banca: Q, enunciado: "A contribuição da empresa destinada ao financiamento dos benefícios decorrentes de riscos ambientais do trabalho (RAT) varia de:", alternativas: ["0,5% a 1%", "1% a 3%", "5% a 10%", "8% a 12%", "20% fixo"], correta: "B", comentario: "1%, 2% ou 3%, conforme o grau de risco (ajustado pelo FAP)." }
    ]
  });

  A(CU, "Salário de contribuição", {
    resumo: "Base de cálculo das contribuições: limites mínimo e máximo e o que integra ou não.",
    incidencia: "média",
    fontes: [L.l8212],
    conferir: VALORES,
    blocos: [
      { tipo: "texto", texto: [
        "**Salário de contribuição** é a base sobre a qual incide a contribuição do segurado (art. 28).",
        "",
        "- Para o **empregado**: a remuneração recebida no mês, incluindo gorjetas, ganhos habituais e adiantamentos.",
        "- Para o **contribuinte individual**: a remuneração auferida no mês por conta própria.",
        "- Para o **facultativo**: o valor que ele declarar.",
        "",
        "**Limites**: mínimo = **salário mínimo** (ou piso da categoria); máximo = **teto** do RGPS, reajustado anualmente."
      ]},
      { tipo: "tabela", titulo: "Não integram (art. 28, § 9º, exemplos)", cabecalho: ["Parcela"], linhas: [["benefícios da previdência (exceto salário-maternidade)"], ["férias indenizadas e o terço constitucional delas"], ["vale-transporte"], ["diárias para viagem"], ["participação nos lucros conforme lei específica"], ["ajuda de custo em parcela única por mudança de local de trabalho"]] },
      { tipo: "atencao", texto: "O **salário-maternidade** é o único benefício que **integra** o salário de contribuição." },
      { tipo: "questao", banca: Q, enunciado: "Integra o salário de contribuição:", alternativas: ["vale-transporte", "diárias de viagem", "salário-maternidade", "férias indenizadas", "auxílio-acidente"], correta: "C", comentario: "Art. 28, § 2º: o salário-maternidade é considerado salário de contribuição." }
    ]
  });

  A(CU, "Arrecadação e recolhimento", {
    resumo: "Quem recolhe, prazos e o papel da Receita Federal.",
    incidencia: "média",
    fontes: [L.l8212],
    conferir: "Prazos e sistemas (eSocial, DCTFWeb, GPS, DARF) mudam. Confira as regras atuais da Receita Federal.",
    blocos: [
      { tipo: "texto", texto: [
        "Desde a Lei 11.457/2007, a **Receita Federal** arrecada e fiscaliza as contribuições previdenciárias. O INSS concede e mantém os benefícios.",
        "",
        "Regras principais (art. 30):",
        "- A **empresa** desconta a contribuição dos empregados e avulsos e recolhe com a sua, até o **dia 20** do mês seguinte (antecipado para o dia útil anterior se não houver expediente).",
        "- O **contribuinte individual** e o **facultativo** recolhem por conta própria até o **dia 15** do mês seguinte.",
        "- A empresa que contrata contribuinte individual **retém** 11% e recolhe.",
        "- O **empregador doméstico** recolhe tudo pelo eSocial até o dia 7 do mês seguinte."
      ]},
      { tipo: "atencao", texto: "A empresa que desconta e **não** recolhe a contribuição do empregado pode responder pelo crime de **apropriação indébita previdenciária** (art. 168-A do Código Penal)." },
      { tipo: "questao", banca: Q, enunciado: "A arrecadação e a fiscalização das contribuições previdenciárias cabem hoje:", alternativas: ["ao INSS", "à Receita Federal do Brasil", "ao Ministério do Trabalho", "aos sindicatos", "à Caixa Econômica Federal"], correta: "B", comentario: "Lei 11.457/2007 (Super-Receita)." }
    ]
  });

  /* ================= ASSISTÊNCIA ================= */

  A(AS, "LOAS (Lei 8.742/1993): princípios e organização", {
    resumo: "Objetivos, princípios, diretrizes e a organização em SUAS, CRAS e CREAS.",
    incidencia: "média",
    fontes: [L.l8742],
    blocos: [
      { tipo: "texto", texto: [
        "A **assistência social** é direito do cidadão e dever do Estado, política de seguridade **não contributiva**, que provê os mínimos sociais (art. 1º)."
      ]},
      { tipo: "tabela", titulo: "Princípios (art. 4º) e diretrizes (art. 5º)", cabecalho: ["Princípios", "Diretrizes"], linhas: [
        ["supremacia do atendimento às necessidades sociais sobre exigências de rentabilidade econômica", "descentralização político-administrativa"],
        ["universalização dos direitos sociais", "participação da população na formulação e controle das ações"],
        ["respeito à dignidade e à autonomia do cidadão", "primazia da responsabilidade do Estado na condução da política"],
        ["igualdade de direitos no acesso ao atendimento", ""],
        ["divulgação ampla dos benefícios, serviços e programas", ""]
      ]},
      { tipo: "tabela", titulo: "Organização: o SUAS", cabecalho: ["Nível", "Equipamento", "Atende"], linhas: [
        ["Proteção social básica", "**CRAS** (Centro de Referência de Assistência Social)", "prevenção de riscos; famílias em vulnerabilidade"],
        ["Proteção social especial", "**CREAS** (Centro de Referência Especializado)", "famílias e pessoas com direitos violados (violência, abandono)"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O equipamento da assistência social que atende pessoas com direitos já violados, como vítimas de violência, é o:", alternativas: ["CRAS", "CREAS", "INSS", "CAPS", "UBS"], correta: "B", comentario: "Proteção social especial: CREAS." }
    ]
  });

  A(AS, "Benefício de Prestação Continuada (BPC)", {
    resumo: "Um salário mínimo para idoso de 65 anos ou mais e pessoa com deficiência de baixa renda.",
    incidencia: "alta",
    fontes: [L.l8742],
    conferir: "Critérios de renda e regras de revisão do BPC foram alterados por leis recentes. Confira a redação atual do art. 20 da LOAS.",
    blocos: [
      { tipo: "texto", texto: [
        "O **BPC** garante **um salário mínimo** mensal à **pessoa com deficiência** e ao **idoso com 65 anos ou mais** que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida pela família (art. 20).",
        "",
        "- Critério de renda: renda familiar **per capita** de até **1/4 do salário mínimo** (com possibilidade de outros elementos de prova de miserabilidade, conforme a lei).",
        "- Inscrição no **CadÚnico** é obrigatória.",
        "- É **assistencial**: não exige contribuição."
      ]},
      { tipo: "tabela", titulo: "Características", cabecalho: ["O BPC…", ""], linhas: [["não gera 13º", "✓"], ["não gera pensão por morte", "✓"], ["não acumula com outro benefício da seguridade ou de outro regime (salvo assistência médica e pensão especial indenizatória)", "✓"], ["é revisto periodicamente", "✓"], ["é operado pelo INSS, mas é benefício da assistência social", "✓"]] },
      { tipo: "python", titulo: "Testando o critério de renda", codigo: `
salario_minimo = 1518.00   # valor de exemplo
renda_familiar = 1200.00
pessoas = 4
per_capita = renda_familiar / pessoas
limite = salario_minimo / 4
print(f"Renda per capita: R$ {per_capita:.2f} | limite: R$ {limite:.2f}")
print("Atende ao critério de 1/4" if per_capita <= limite else "Não atende ao critério de 1/4")
`, saida: `
Renda per capita: R$ 300.00 | limite: R$ 379.50
Atende ao critério de 1/4
` },
      { tipo: "questao", banca: Q, enunciado: "Sobre o BPC, é correto afirmar:", alternativas: ["exige contribuição mínima de 15 anos", "é devido ao idoso a partir de 60 anos", "gera pensão por morte aos dependentes", "não exige contribuição e não gera 13º", "pode ser acumulado com aposentadoria"], correta: "D", comentario: "É assistencial: sem contribuição, sem 13º, sem pensão; idade de 65 anos; não acumula com aposentadoria." }
    ]
  });

  /* ================= REGULAMENTO ================= */

  A(RP, "Decreto 3.048/1999: pontos principais", {
    resumo: "O Regulamento da Previdência Social e o que ele detalha em relação às leis.",
    incidencia: "média",
    fontes: [L.d3048],
    conferir: "O Regulamento foi muito alterado pelo Decreto 10.410/2020 (adequação à EC 103) e por normas posteriores. Estude pela versão compilada atual.",
    blocos: [
      { tipo: "texto", texto: [
        "O **Decreto 3.048/1999** é o **Regulamento da Previdência Social (RPS)**. Ele detalha as Leis 8.212 e 8.213: segurados, dependentes, benefícios, custeio e procedimentos.",
        "",
        "Pontos que costumam cair:",
        "- **Idade mínima do facultativo**: 16 anos (o regulamento é mais restrito que a lei).",
        "- **Listas de segurados** detalhadas por categoria (quem é empregado, contribuinte individual etc.).",
        "- **Anexo IV**: classificação dos agentes nocivos para a aposentadoria especial.",
        "- **Comprovação** de tempo de contribuição: o **CNIS** (Cadastro Nacional de Informações Sociais) é a base de dados oficial.",
        "- **Processo administrativo previdenciário**: requerimento, recurso ao **Conselho de Recursos da Previdência Social (CRPS)** em **30 dias**.",
        "- **Revisão e decadência**: prazo decadencial de **10 anos** para o segurado pedir revisão do ato de concessão (art. 103 da Lei 8.213)."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Idade mínima do facultativo pelo Regulamento", verso: "16 anos." },
        { frente: "Prazo de recurso ao CRPS", verso: "30 dias." },
        { frente: "Base de dados oficial de vínculos e contribuições", verso: "CNIS." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo o Decreto 3.048/1999, pode filiar-se como segurado facultativo a pessoa com idade mínima de:", alternativas: ["14 anos", "16 anos", "18 anos", "21 anos", "não há idade mínima"], correta: "B", comentario: "Art. 11 do Regulamento: maior de 16 anos." }
    ]
  });
})();

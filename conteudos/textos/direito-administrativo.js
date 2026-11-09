/* Direito Administrativo · todos os assuntos. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "direito-administrativo", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const FU = "Fundamentos";
  const OA = "Organização Administrativa";
  const PA = "Poderes Administrativos";
  const AT = "Atos Administrativos";
  const AG = "Agentes Públicos";
  const LC = "Licitações e Contratos (Lei 14.133/2021)";
  const SB = "Serviços Públicos e Bens Públicos";
  const CR = "Controle e Responsabilidade";
  const L = {
    cf: { titulo: "Constituição Federal de 1988", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    l9784: { titulo: "Lei 9.784/1999 (processo administrativo federal)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm" },
    l14133: { titulo: "Lei 14.133/2021 (licitações e contratos)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" },
    l13303: { titulo: "Lei 13.303/2016 (estatais)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm" },
    l8987: { titulo: "Lei 8.987/1995 (concessões e permissões)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm" },
    l8429: { titulo: "Lei 8.429/1992 (improbidade administrativa)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" },
    l12527: { titulo: "Lei 12.527/2011 (Lei de Acesso à Informação)", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" },
    l13709: { titulo: "Lei 13.709/2018 (LGPD)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" },
    cc: { titulo: "Código Civil (Lei 10.406/2002), arts. 98 a 103", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
  };

  /* ================= FUNDAMENTOS ================= */

  A(FU, "Conceito, objeto e fontes do Direito Administrativo", {
    resumo: "O ramo do direito público que rege a Administração e suas fontes.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "**Direito Administrativo** é o ramo do **direito público** que reúne as normas e princípios que regem a Administração Pública, seus órgãos, agentes e a atividade de satisfazer o interesse público.",
        "",
        "No Brasil ele **não é codificado**: está espalhado na Constituição e em muitas leis (8.112, 9.784, 14.133…)."
      ]},
      { tipo: "tabela", titulo: "Fontes", cabecalho: ["Fonte", "Tipo", "Exemplo"], linhas: [
        ["Lei (em sentido amplo)", "primária, principal", "CF, leis, decretos"],
        ["Jurisprudência", "secundária", "decisões reiteradas; súmulas vinculantes obrigam a Administração"],
        ["Doutrina", "secundária", "obras de juristas"],
        ["Costumes", "secundária", "práticas reiteradas, desde que não contrariem a lei"]
      ]},
      { tipo: "atencao", texto: "Súmula **vinculante** do STF obriga toda a Administração Pública (art. 103-A da CF). As demais súmulas e julgados orientam, mas não vinculam." },
      { tipo: "questao", banca: Q, enunciado: "Sobre o Direito Administrativo brasileiro, é correto afirmar:", alternativas: ["é ramo do direito privado", "está todo reunido num código único", "é ramo do direito público, não codificado", "não admite jurisprudência como fonte", "só se aplica ao Poder Executivo"], correta: "C", comentario: "Direito público, com normas espalhadas em várias leis, aplicado à função administrativa de todos os Poderes." }
    ]
  });

  A(FU, "Regime jurídico-administrativo", {
    resumo: "Supremacia e indisponibilidade do interesse público: prerrogativas e sujeições.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O regime jurídico-administrativo se apoia em **duas pedras** (Celso Antônio Bandeira de Mello):",
        "- **Supremacia do interesse público** sobre o privado → dá **prerrogativas** à Administração (desapropriar, alterar contratos unilateralmente, presunção de legitimidade dos atos).",
        "- **Indisponibilidade do interesse público** → impõe **sujeições** (precisa de concurso, licitação, motivação; não pode abrir mão de bens e receitas)."
      ]},
      { tipo: "svg", titulo: "A balança do regime", codigo: `
<svg viewBox="0 0 520 200" role="img" aria-label="Balança: de um lado prerrogativas (supremacia do interesse público), do outro sujeições (indisponibilidade)">
  <line class="ln" x1="260" y1="40" x2="260" y2="170"></line>
  <line class="ln-d" x1="90" y1="60" x2="430" y2="60"></line>
  <polygon class="fd" points="230,170 290,170 260,150"></polygon>
  <line class="ln" x1="110" y1="60" x2="80" y2="110"></line><line class="ln" x1="110" y1="60" x2="140" y2="110"></line>
  <line class="ln" x1="410" y1="60" x2="380" y2="110"></line><line class="ln" x1="410" y1="60" x2="440" y2="110"></line>
  <rect class="fd-d" x="20" y="110" width="180" height="60" rx="8"></rect>
  <text class="tx tx-t" x="110" y="135" text-anchor="middle">Prerrogativas</text><text class="tx-m" x="110" y="155" text-anchor="middle">supremacia do interesse público</text>
  <rect class="fd-d" x="320" y="110" width="180" height="60" rx="8"></rect>
  <text class="tx tx-t" x="410" y="135" text-anchor="middle">Sujeições</text><text class="tx-m" x="410" y="155" text-anchor="middle">indisponibilidade</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "A exigência de licitação para contratar decorre principalmente do princípio da:", alternativas: ["supremacia do interesse público", "indisponibilidade do interesse público", "autoexecutoriedade", "hierarquia", "especialidade"], correta: "B", comentario: "O administrador não pode dispor livremente do interesse público: precisa de procedimento impessoal para contratar." }
    ]
  });

  A(FU, "Princípios expressos (LIMPE)", {
    resumo: "Legalidade, impessoalidade, moralidade, publicidade e eficiência na prática administrativa.",
    incidencia: "alta",
    fontes: [L.cf],
    blocos: [
      { tipo: "texto", texto: ["Os cinco princípios do caput do art. 37 da CF, com os desdobramentos que caem em prova:"] },
      { tipo: "tabela", titulo: "LIMPE na prática", cabecalho: ["Princípio", "Desdobramento cobrado"], linhas: [
        ["Legalidade", "a Administração só age quando a lei autoriza; o particular pode o que a lei não proíbe"],
        ["Impessoalidade", "finalidade pública; vedada promoção pessoal (art. 37, § 1º); atos imputados ao órgão, não ao agente"],
        ["Moralidade", "ética e boa-fé; vedado o **nepotismo** até o 3º grau (Súmula Vinculante 13)"],
        ["Publicidade", "condição de eficácia dos atos; transparência; exceções de sigilo previstas em lei"],
        ["Eficiência", "EC 19/1998; resultado com economicidade; avaliação de desempenho"]
      ]},
      { tipo: "atencao", texto: "A **SV 13** proíbe nomear cônjuge ou parente até o 3º grau da autoridade nomeante (ou de servidor em cargo de direção) para cargo em comissão ou função de confiança, inclusive o **nepotismo cruzado** (troca de favores entre autoridades). O STF costuma não aplicar a súmula a cargos **políticos** (secretário, ministro), salvo fraude." },
      { tipo: "questao", banca: Q, enunciado: "A nomeação do sobrinho do prefeito para cargo em comissão de chefe de setor viola diretamente o princípio da:", alternativas: ["publicidade", "eficiência", "moralidade (nepotismo, SV 13)", "continuidade", "autotutela"], correta: "C", comentario: "Sobrinho é parente de 3º grau; cargo em comissão não político: vedado pela SV 13." }
    ]
  });

  A(FU, "Princípios implícitos", {
    resumo: "Razoabilidade, proporcionalidade, autotutela, continuidade, segurança jurídica e motivação.",
    incidencia: "média",
    fontes: [L.l9784],
    blocos: [
      { tipo: "tabela", titulo: "Os principais", cabecalho: ["Princípio", "Ideia"], linhas: [
        ["Supremacia do interesse público", "em conflito, prevalece o interesse coletivo"],
        ["Indisponibilidade", "o gestor não é dono do interesse público"],
        ["Razoabilidade e proporcionalidade", "meios adequados, necessários e na medida certa (sem excessos)"],
        ["Autotutela", "a Administração anula seus atos ilegais e revoga os inconvenientes (Súmula 473 do STF)"],
        ["Continuidade", "serviço público não pode parar"],
        ["Segurança jurídica", "estabilidade das relações; proteção da confiança e da boa-fé"],
        ["Motivação", "indicar os fatos e fundamentos jurídicos das decisões (expresso no art. 2º da Lei 9.784)"]
      ]},
      { tipo: "dica", texto: "Vários deles são **expressos** na Lei 9.784/1999 (art. 2º): legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência. Na CF, são implícitos." },
      { tipo: "questao", banca: Q, enunciado: "A possibilidade de a Administração anular seus próprios atos ilegais, sem precisar do Judiciário, decorre do princípio da:", alternativas: ["continuidade", "autotutela", "tutela", "especialidade", "hierarquia"], correta: "B", comentario: "Autotutela (Súmula 473 do STF). Tutela é o controle sobre entidades da administração indireta." }
    ]
  });

  /* ================= ORGANIZAÇÃO ADMINISTRATIVA ================= */

  A(OA, "Centralização, descentralização e desconcentração", {
    resumo: "Distribuir atividades para outra pessoa jurídica (descentralizar) ou entre órgãos (desconcentrar).",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "As três técnicas", cabecalho: ["Técnica", "O que acontece", "Relação"], linhas: [
        ["Centralização", "o próprio ente (União, Estado, Município) executa diretamente", "—"],
        ["Desconcentração", "distribuição **dentro** da mesma pessoa jurídica, entre **órgãos**", "hierarquia"],
        ["Descentralização", "transferência para **outra pessoa** (física ou jurídica)", "controle (tutela), **sem** hierarquia"]
      ]},
      { tipo: "texto", titulo: "Formas de descentralização", texto: [
        "- **Por outorga (serviços, técnica)**: a lei cria ou autoriza uma entidade e transfere a **titularidade** e a execução do serviço. Ex.: autarquia INSS.",
        "- **Por delegação (colaboração)**: contrato ou ato transfere só a **execução**, por prazo determinado. Ex.: concessionária de ônibus."
      ]},
      { tipo: "svg", titulo: "Desconcentrar × descentralizar", codigo: `
<svg viewBox="0 0 560 210" role="img" aria-label="Esquerda: um ente dividido em órgãos internos (desconcentração). Direita: o ente cria outra pessoa jurídica fora dele (descentralização)">
  <rect class="fd" x="10" y="20" width="250" height="170" rx="12"></rect>
  <text class="tx tx-t" x="135" y="44" text-anchor="middle">União</text>
  <rect class="fd-d" x="30" y="70" width="95" height="40" rx="6"></rect><text class="tx-m" x="77" y="95" text-anchor="middle">Ministério A</text>
  <rect class="fd-d" x="145" y="70" width="95" height="40" rx="6"></rect><text class="tx-m" x="192" y="95" text-anchor="middle">Ministério B</text>
  <rect class="fd-d" x="87" y="128" width="95" height="40" rx="6"></rect><text class="tx-m" x="134" y="153" text-anchor="middle">Secretaria</text>
  <text class="tx" x="135" y="205" text-anchor="middle">Desconcentração (órgãos)</text>
  <rect class="fd" x="300" y="20" width="110" height="80" rx="12"></rect><text class="tx tx-t" x="355" y="66" text-anchor="middle">União</text>
  <line class="ln-d" x1="410" y1="60" x2="440" y2="120"></line>
  <rect class="fd-d" x="420" y="120" width="130" height="60" rx="12"></rect><text class="tx" x="485" y="148" text-anchor="middle">Autarquia</text><text class="tx-m" x="485" y="166" text-anchor="middle">outra pessoa jurídica</text>
  <text class="tx" x="425" y="205" text-anchor="middle">Descentralização</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "A criação de uma nova secretaria dentro de um Ministério é exemplo de:", alternativas: ["descentralização por outorga", "descentralização por delegação", "desconcentração", "privatização", "concessão"], correta: "C", comentario: "Distribuição de competências entre órgãos da mesma pessoa jurídica (a União)." }
    ]
  });

  A(OA, "Administração direta e órgãos públicos", {
    resumo: "Órgãos não têm personalidade jurídica: teoria do órgão e classificação.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "A **administração direta** é formada pelos entes políticos (União, Estados, DF, Municípios) e seus **órgãos**.",
        "",
        "- **Órgão** é um centro de competências **sem personalidade jurídica**. Seus atos são atribuídos à pessoa jurídica a que pertence (**teoria do órgão** ou da imputação, de Otto Gierke).",
        "- Por isso, em regra, órgão não é parte em processo judicial; quem responde é o ente. Exceção: alguns órgãos independentes e autônomos têm capacidade processual para defender suas prerrogativas (ex.: Câmara Municipal)."
      ]},
      { tipo: "tabela", titulo: "Classificação por posição (Hely Lopes Meirelles)", cabecalho: ["Tipo", "Exemplos"], linhas: [["Independentes", "Presidência, Congresso, tribunais, MP"], ["Autônomos", "Ministérios, Secretarias estaduais e municipais"], ["Superiores", "gabinetes, secretarias-gerais, departamentos"], ["Subalternos", "seções de expediente, protocolo"]] },
      { tipo: "questao", banca: Q, enunciado: "Sobre os órgãos públicos, é correto afirmar:", alternativas: ["têm personalidade jurídica própria", "seus atos são imputados à pessoa jurídica a que pertencem", "são criados por contrato", "só existem na administração indireta", "respondem com patrimônio próprio"], correta: "B", comentario: "Teoria do órgão: a atuação do órgão é imputada ao ente." }
    ]
  });

  A(OA, "Autarquias e fundações públicas", {
    resumo: "Pessoas jurídicas de direito público criadas por lei, com autonomia administrativa.",
    incidencia: "alta",
    fontes: [L.cf],
    blocos: [
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "Autarquia", "Fundação pública"], linhas: [
        ["Natureza", "direito público", "direito público (fundação autárquica) ou privado"],
        ["Criação", "**criada** por lei específica", "**autorizada** por lei específica (se de direito privado); lei complementar define as áreas de atuação"],
        ["Atividade", "típica de Estado", "interesse social (educação, cultura, pesquisa, assistência)"],
        ["Exemplos", "INSS, Banco Central, IBAMA, universidades federais", "IBGE, FUNAI, Fiocruz"]
      ]},
      { tipo: "texto", titulo: "Características das autarquias", texto: [
        "- Patrimônio e receita próprios; bens públicos (impenhoráveis).",
        "- Imunidade tributária de impostos sobre patrimônio, renda e serviços ligados às suas finalidades.",
        "- Prazos processuais em dobro e execução por precatório.",
        "- **Agências reguladoras** (ANATEL, ANVISA) são autarquias em **regime especial**: dirigentes com mandato fixo e maior autonomia."
      ]},
      { tipo: "atencao", texto: "Art. 37, XIX, da CF: lei específica **cria** autarquia e **autoriza** a instituição de empresa pública, sociedade de economia mista e fundação." },
      { tipo: "questao", banca: Q, enunciado: "O INSS é exemplo de:", alternativas: ["órgão da administração direta", "autarquia federal", "empresa pública", "sociedade de economia mista", "organização social"], correta: "B", comentario: "Pessoa jurídica de direito público, criada por lei, que executa atividade típica (previdência)." }
    ]
  });

  A(OA, "Empresas públicas e sociedades de economia mista", {
    resumo: "As estatais: pessoas de direito privado, autorizadas por lei, regidas pela Lei 13.303/2016.",
    incidencia: "alta",
    fontes: [L.l13303],
    blocos: [
      { tipo: "tabela", titulo: "EP × SEM", cabecalho: ["", "Empresa pública", "Sociedade de economia mista"], linhas: [
        ["Natureza", "direito privado", "direito privado"],
        ["Capital", "100% público", "público e privado, com **maioria do capital votante** do ente público"],
        ["Forma societária", "qualquer admitida em direito", "só **sociedade anônima**"],
        ["Foro (federais)", "Justiça **Federal**", "Justiça **Estadual**"],
        ["Exemplos", "Caixa, Correios, BNDES", "Banco do Brasil, Petrobras"]
      ]},
      { tipo: "texto", titulo: "Regras comuns", texto: [
        "- Criação **autorizada** por lei específica (art. 37, XIX, CF).",
        "- Empregados regidos pela **CLT**, mas contratados por **concurso** público.",
        "- Licitam e contratam pela **Lei 13.303/2016** (não pela 14.133).",
        "- Podem explorar atividade econômica (art. 173 da CF) ou prestar serviço público."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A sociedade de economia mista:", alternativas: ["é pessoa jurídica de direito público", "tem capital exclusivamente público", "deve ser constituída sob a forma de sociedade anônima", "é criada diretamente por lei", "não precisa de concurso para contratar empregados"], correta: "C", comentario: "SEM é sempre S.A., de direito privado, com criação autorizada por lei e empregados concursados." }
    ]
  });

  A(OA, "Terceiro setor", {
    resumo: "Entidades privadas sem fins lucrativos que colaboram com o Estado: OS, OSCIP, OSC e Sistema S.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["O **terceiro setor** reúne entidades **privadas, sem fins lucrativos**, que atuam em atividades de interesse público. Elas **não** integram a Administração Pública, mas recebem recursos e são fiscalizadas."] },
      { tipo: "tabela", titulo: "Entidades paraestatais", cabecalho: ["Entidade", "Lei", "Vínculo com o Estado"], linhas: [
        ["Organização Social (OS)", "Lei 9.637/1998", "**contrato de gestão**"],
        ["OSCIP", "Lei 9.790/1999", "**termo de parceria**"],
        ["Organização da Sociedade Civil (OSC)", "Lei 13.019/2014", "termo de colaboração, termo de fomento ou acordo de cooperação"],
        ["Serviços sociais autônomos (Sistema S)", "leis próprias", "recebem contribuições parafiscais (SESI, SENAI, SESC, SENAC)"]
      ]},
      { tipo: "dica", texto: "Associe: **O**S → **G**estão (contrato de gestão); OSC**IP** → **P**arceria (termo de parceria)." },
      { tipo: "questao", banca: Q, enunciado: "O instrumento que formaliza o vínculo entre o Poder Público e uma Organização Social é o:", alternativas: ["termo de parceria", "contrato de gestão", "termo de fomento", "convênio de concessão", "contrato de concessão"], correta: "B", comentario: "Lei 9.637/1998: contrato de gestão. Termo de parceria é da OSCIP." }
    ]
  });

  /* ================= PODERES ADMINISTRATIVOS ================= */

  A(PA, "Poder hierárquico", {
    resumo: "Ordenar, coordenar, fiscalizar, delegar, avocar e rever atos de subordinados.",
    incidencia: "média",
    fontes: [L.l9784],
    blocos: [
      { tipo: "texto", texto: [
        "O **poder hierárquico** organiza a estrutura interna e as relações de subordinação. Dele decorrem:",
        "- **Dar ordens** e **fiscalizar** o cumprimento.",
        "- **Rever** atos dos subordinados (anular ou revogar).",
        "- **Delegar** competências a subordinados (e até a quem não é subordinado, quando conveniente — art. 12 da Lei 9.784).",
        "- **Avocar**: chamar para si a competência de um subordinado, em caráter excepcional e temporário, por motivos relevantes (art. 15)."
      ]},
      { tipo: "atencao", titulo: "Não podem ser delegados (art. 13 da Lei 9.784)", texto: "**CE-NO-RA**: decisão de **R**ecursos administrativos, edição de atos de caráter **NO**rmativo e matérias de competência **E**xclusiva do órgão ou autoridade." },
      { tipo: "atencao", texto: "Não há hierarquia entre a administração direta e a indireta (há **tutela** ou supervisão), nem entre Poderes." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 9.784/1999, pode ser objeto de delegação:", alternativas: ["a edição de atos normativos", "a decisão de recursos administrativos", "matéria de competência exclusiva", "a assinatura de ofícios de rotina", "nenhuma competência pode ser delegada"], correta: "D", comentario: "Atos de rotina podem ser delegados; as três hipóteses de A, B e C são proibidas (art. 13)." }
    ]
  });

  A(PA, "Poder disciplinar", {
    resumo: "Apurar infrações e aplicar penalidades a servidores e a quem tem vínculo especial com a Administração.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O **poder disciplinar** permite apurar infrações e punir:",
        "- **servidores** públicos;",
        "- **particulares com vínculo especial** com a Administração (empresa contratada, aluno de escola pública, permissionário).",
        "",
        "É **vinculado** quanto ao dever de apurar (a autoridade que sabe de irregularidade **é obrigada** a apurar) e, em regra, tem alguma **discricionariedade** na escolha da sanção, sempre motivada e proporcional, com contraditório e ampla defesa."
      ]},
      { tipo: "atencao", texto: "Punir um **particular sem vínculo especial** (ex.: multar um motorista) não é poder disciplinar: é **poder de polícia**." },
      { tipo: "questao", banca: Q, enunciado: "A aplicação de multa a uma empresa contratada que atrasou a entrega de materiais decorre do poder:", alternativas: ["de polícia", "disciplinar", "regulamentar", "hierárquico", "normativo originário"], correta: "B", comentario: "A empresa tem vínculo contratual (especial) com a Administração." }
    ]
  });

  A(PA, "Poder regulamentar", {
    resumo: "Editar decretos para a fiel execução das leis; o decreto autônomo do art. 84, VI.",
    incidencia: "média",
    fontes: [L.cf],
    blocos: [
      { tipo: "texto", texto: [
        "O **poder regulamentar** (ou normativo) permite ao chefe do Executivo editar **decretos e regulamentos** para a **fiel execução das leis** (art. 84, IV, CF). Ele detalha a lei, mas **não pode** criar direitos ou obrigações novos nem contrariá-la.",
        "",
        "**Decreto autônomo** (art. 84, VI): o Presidente pode, por decreto, dispor sobre a **organização e o funcionamento** da administração federal, **sem** aumento de despesa e **sem** criar ou extinguir órgãos; e **extinguir** cargos ou funções **vagos**."
      ]},
      { tipo: "atencao", texto: "Se o decreto exorbitar o poder regulamentar, o **Congresso** pode sustá-lo por decreto legislativo (art. 49, V)." },
      { tipo: "questao", banca: Q, enunciado: "Por decreto autônomo, o Presidente da República pode:", alternativas: ["criar um novo Ministério", "extinguir cargos públicos vagos", "aumentar a remuneração de servidores", "criar tributos", "extinguir cargos ocupados"], correta: "B", comentario: "Art. 84, VI, b: extinção de funções ou cargos públicos, quando vagos." }
    ]
  });

  A(PA, "Poder de polícia", {
    resumo: "Limitar liberdade e propriedade em favor do interesse coletivo: atributos e ciclo.",
    incidencia: "alta",
    conferir: "Delegação do poder de polícia a estatais: o STF (Tema 532) admitiu em condições específicas. Confira os requisitos se o edital cobrar jurisprudência.",
    blocos: [
      { tipo: "texto", texto: [
        "**Poder de polícia** é a atividade de **condicionar e restringir** o uso de bens, o exercício de direitos e atividades individuais em benefício da coletividade. O conceito legal está no art. 78 do Código Tributário Nacional.",
        "",
        "Exemplos: fiscalização sanitária, alvará de funcionamento, multa de trânsito, interdição de estabelecimento, licença para construir."
      ]},
      { tipo: "tabela", titulo: "Atributos (DAC)", cabecalho: ["Atributo", "Significa"], linhas: [
        ["Discricionariedade", "em regra, há margem de escolha (mas a licença, por exemplo, é vinculada)"],
        ["Autoexecutoriedade", "executa sem precisar de ordem judicial (ex.: apreender mercadoria estragada)"],
        ["Coercibilidade", "impõe-se pela força, se necessário"]
      ]},
      { tipo: "passos", titulo: "Ciclo de polícia", itens: ["**Ordem** de polícia: a norma que limita.", "**Consentimento**: licença ou autorização.", "**Fiscalização**: verificação do cumprimento.", "**Sanção**: penalidade a quem descumpre."] },
      { tipo: "atencao", texto: "A **multa** não é autoexecutória: aplica-se administrativamente, mas a cobrança forçada exige execução fiscal no Judiciário." },
      { tipo: "questao", banca: Q, enunciado: "A interdição de um restaurante pela vigilância sanitária, por falta de higiene, é exercício do poder:", alternativas: ["disciplinar", "hierárquico", "de polícia", "regulamentar", "jurisdicional"], correta: "C", comentario: "Restrição de atividade privada em favor da saúde pública, sobre particular sem vínculo especial." }
    ]
  });

  A(PA, "Uso e abuso de poder", {
    resumo: "Excesso de poder (competência) e desvio de finalidade.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Formas de abuso de poder", cabecalho: ["Forma", "Vício", "Exemplo"], linhas: [
        ["Excesso de poder", "o agente atua **além da competência**", "um chefe de seção aplica pena de demissão, que é da autoridade máxima"],
        ["Desvio de finalidade (desvio de poder)", "o agente tem competência, mas busca **fim diverso** do interesse público ou do previsto em lei", "remover servidor como castigo, e não por necessidade do serviço"]
      ]},
      { tipo: "texto", texto: ["O abuso pode ser por **ação** ou **omissão** (deixar de agir quando devia). Em todos os casos, o ato é **ilegal** e deve ser anulado."] },
      { tipo: "questao", banca: Q, enunciado: "Um prefeito desapropria um terreno apenas para prejudicar um adversário político. Configura-se:", alternativas: ["excesso de poder", "desvio de finalidade", "uso regular do poder", "ato discricionário válido", "poder disciplinar"], correta: "B", comentario: "Ele tem competência, mas usou o ato para fim pessoal, alheio ao interesse público." }
    ]
  });

  /* ================= ATOS ADMINISTRATIVOS ================= */

  A(AT, "Conceito e elementos (requisitos)", {
    resumo: "Competência, finalidade, forma, motivo e objeto (CO-FI-FO-M-OB).",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["**Ato administrativo** é a manifestação unilateral de vontade da Administração, sob regime de direito público, que produz efeitos jurídicos. Tem cinco elementos:"] },
      { tipo: "tabela", titulo: "Elementos", cabecalho: ["Elemento", "Pergunta", "Vinculado ou discricionário?"], linhas: [
        ["Competência", "quem pode praticar?", "vinculado"],
        ["Finalidade", "para quê? (interesse público)", "vinculado"],
        ["Forma", "como se exterioriza?", "vinculado"],
        ["Motivo", "por quê? (fato e fundamento)", "pode ser discricionário"],
        ["Objeto", "o que o ato determina?", "pode ser discricionário"]
      ]},
      { tipo: "dica", texto: "**COFIFOMOB**. Motivo e objeto formam o **mérito administrativo** (a conveniência e oportunidade) nos atos discricionários; o Judiciário não entra no mérito, só na legalidade." },
      { tipo: "texto", titulo: "Teoria dos motivos determinantes", texto: ["Se a Administração declarou um motivo, o ato fica preso a ele. Se o motivo for falso ou inexistente, o ato é nulo, mesmo que nem precisasse ser motivado. Ex.: exonerar um comissionado \"por falta de verba\" e contratar outro no dia seguinte."] },
      { tipo: "questao", banca: Q, enunciado: "Nos atos discricionários, formam o mérito administrativo os elementos:", alternativas: ["competência e forma", "finalidade e forma", "motivo e objeto", "competência e finalidade", "forma e objeto"], correta: "C", comentario: "Motivo e objeto são os que admitem juízo de conveniência e oportunidade." }
    ]
  });

  A(AT, "Atributos", {
    resumo: "Presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade (PATI).",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "PATI", cabecalho: ["Atributo", "Significa", "Está em todo ato?"], linhas: [
        ["Presunção de legitimidade e veracidade", "o ato é presumido legal e verdadeiro até prova em contrário (presunção relativa)", "sim"],
        ["Autoexecutoriedade", "executado pela própria Administração, sem ordem judicial", "não (ex.: cobrança de multa)"],
        ["Tipicidade", "corresponde a uma figura prevista em lei", "sim"],
        ["Imperatividade", "impõe-se a terceiros independentemente da concordância", "não (atos negociais e enunciativos não têm)"]
      ]},
      { tipo: "dica", texto: "Presunção de legitimidade é **relativa** (juris tantum): inverte o ônus da prova para quem contesta o ato." },
      { tipo: "questao", banca: Q, enunciado: "A licença para construir, concedida a pedido do interessado, NÃO possui o atributo da:", alternativas: ["presunção de legitimidade", "tipicidade", "imperatividade", "legalidade", "veracidade"], correta: "C", comentario: "Ato negocial, praticado a pedido do particular: não impõe obrigação contra a vontade dele." }
    ]
  });

  A(AT, "Classificação e espécies", {
    resumo: "Vinculados e discricionários; normativos, ordinatórios, negociais, enunciativos e punitivos.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Espécies (Hely Lopes Meirelles)", cabecalho: ["Espécie", "Exemplos"], linhas: [
        ["Normativos", "decretos, regulamentos, instruções normativas, resoluções"],
        ["Ordinatórios", "portarias, ordens de serviço, circulares, ofícios, despachos"],
        ["Negociais", "licença (vinculada), autorização e permissão (discricionárias e precárias), admissão"],
        ["Enunciativos", "certidões, atestados, pareceres, apostilas"],
        ["Punitivos", "multas, interdições, advertências"]
      ]},
      { tipo: "tabela", titulo: "Licença × autorização", cabecalho: ["", "Licença", "Autorização"], linhas: [["Natureza", "vinculada", "discricionária"], ["Precariedade", "definitiva", "precária (pode ser revogada a qualquer tempo)"], ["Exemplo", "licença para construir, para dirigir (CNH)", "porte de arma, uso de bem público para evento"]] },
      { tipo: "questao", banca: Q, enunciado: "A certidão de tempo de serviço é ato administrativo:", alternativas: ["normativo", "ordinatório", "negocial", "enunciativo", "punitivo"], correta: "D", comentario: "Atesta ou certifica uma situação existente: ato enunciativo." }
    ]
  });

  A(AT, "Extinção: anulação, revogação e cassação", {
    resumo: "Anular o ilegal, revogar o inconveniente, cassar quando o beneficiário descumpre.",
    incidencia: "alta",
    fontes: [L.l9784],
    blocos: [
      { tipo: "tabela", titulo: "Anulação × revogação", cabecalho: ["", "Anulação", "Revogação"], linhas: [
        ["Motivo", "ilegalidade", "conveniência e oportunidade (mérito)"],
        ["Quem faz", "Administração (autotutela) **ou** Judiciário", "só a Administração que praticou o ato"],
        ["Efeitos", "**ex tunc** (retroagem)", "**ex nunc** (daqui para a frente)"],
        ["Alcança", "atos vinculados e discricionários", "só atos discricionários válidos"],
        ["Prazo", "5 anos para atos favoráveis ao destinatário, salvo má-fé (art. 54 da Lei 9.784)", "não há prazo, mas há limites (atos que geraram direito adquirido não se revogam)"]
      ]},
      { tipo: "texto", titulo: "Outras formas de extinção", texto: [
        "- **Cassação**: o **beneficiário descumpre** condições. Ex.: alvará cassado porque o bar virou casa de jogos.",
        "- **Caducidade**: **lei nova** torna o ato incompatível. Ex.: permissão de circo em área que virou residencial por lei.",
        "- **Contraposição**: ato novo com efeitos opostos ao anterior. Ex.: exoneração extingue a nomeação.",
        "- **Extinção natural**: cumprimento dos efeitos ou fim do prazo."
      ]},
      { tipo: "lei", titulo: "Súmula 473 do STF", texto: ["A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial."], referencia: "STF, Súmula 473" },
      { tipo: "questao", banca: Q, enunciado: "O Poder Judiciário, no exercício da função jurisdicional, pode:", alternativas: ["revogar atos administrativos por inconveniência", "anular atos administrativos ilegais", "rever o mérito de atos discricionários válidos", "revogar atos vinculados", "cassar alvarás por conveniência"], correta: "B", comentario: "O Judiciário controla legalidade (anula). Revogação é exclusiva da Administração." }
    ]
  });

  A(AT, "Convalidação", {
    resumo: "Corrigir vícios sanáveis de competência e de forma, com efeitos retroativos.",
    incidencia: "média",
    fontes: [L.l9784],
    blocos: [
      lei_9784(["Art. 55. Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração."], "Lei 9.784/1999, art. 55"),
      { tipo: "tabela", titulo: "O que pode ser convalidado", cabecalho: ["Elemento viciado", "Convalida?"], linhas: [
        ["Competência", "sim, se **não** for exclusiva (a autoridade competente ratifica)"],
        ["Forma", "sim, se **não** for essencial à validade"],
        ["Finalidade, motivo e objeto", "**não**"]
      ]},
      { tipo: "dica", texto: "Mnemônico: **FOCO** se convalida (FOrma e COmpetência). Os efeitos da convalidação são **ex tunc**: o ato é corrigido desde a origem." },
      { tipo: "questao", banca: Q, enunciado: "Pode ser convalidado o ato com vício de:", alternativas: ["finalidade", "objeto ilícito", "motivo inexistente", "competência não exclusiva", "competência exclusiva"], correta: "D", comentario: "Competência não exclusiva e forma não essencial são vícios sanáveis." }
    ]
  });

  /* ================= AGENTES PÚBLICOS ================= */

  A(AG, "Classificação dos agentes públicos", {
    resumo: "Agentes políticos, servidores, empregados, temporários e particulares em colaboração.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["**Agente público** é toda pessoa que exerce, ainda que transitoriamente ou sem remuneração, função pública. A expressão é a mais ampla de todas (a Lei de Improbidade usa esse conceito largo)."] },
      { tipo: "tabela", titulo: "Categorias", cabecalho: ["Categoria", "Quem", "Vínculo"], linhas: [
        ["Agentes políticos", "chefes do Executivo, Ministros, Secretários, parlamentares (e, para parte da doutrina, magistrados e membros do MP)", "constitucional"],
        ["Servidores estatutários", "ocupantes de cargo efetivo ou em comissão", "estatuto (lei)"],
        ["Empregados públicos", "das empresas estatais (e de entes que adotaram CLT)", "CLT, com concurso"],
        ["Temporários", "contratados por excepcional interesse público (art. 37, IX)", "regime especial"],
        ["Particulares em colaboração", "jurados, mesários, conscritos, delegatários (cartórios)", "honorífico ou delegação"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O mesário convocado para as eleições é classificado como:", alternativas: ["agente político", "servidor estatutário", "empregado público", "particular em colaboração (agente honorífico)", "servidor temporário"], correta: "D", comentario: "Presta serviço público relevante por convocação, sem vínculo profissional." }
    ]
  });

  A(AG, "Cargo, emprego e função pública", {
    resumo: "Cargo (estatutário), emprego (CLT) e função (atribuição sem cargo, ou de confiança).",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Diferenças", cabecalho: ["", "Cargo", "Emprego", "Função"], linhas: [
        ["Regime", "estatutário", "celetista (CLT)", "—"],
        ["Criação", "por lei", "por lei", "—"],
        ["Exemplos", "técnico do INSS, analista do TCU", "empregado da Caixa ou dos Correios", "função de confiança; atribuições de temporários"]
      ]},
      { tipo: "texto", titulo: "Cargo efetivo × em comissão × função de confiança", texto: [
        "- **Cargo efetivo**: provido por concurso; permite estabilidade.",
        "- **Cargo em comissão**: livre nomeação e exoneração (**ad nutum**); só para direção, chefia e assessoramento; pode ser ocupado por quem não é servidor (respeitado o percentual mínimo de servidores de carreira).",
        "- **Função de confiança**: conjunto de atribuições de direção, chefia ou assessoramento, exercido **só por servidor efetivo**."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Pode ser exercida apenas por servidor ocupante de cargo efetivo:", alternativas: ["cargo em comissão", "função de confiança", "emprego público", "mandato eletivo", "cargo de Ministro de Estado"], correta: "B", comentario: "Art. 37, V, da CF." }
    ]
  });

  A(AG, "Regime jurídico dos servidores (visão geral)", {
    resumo: "Estatutário × celetista, onde está cada regra e onde se aprofunda no caderno.",
    incidencia: "média",
    conferir: "A situação do regime jurídico único mudou com o julgamento da ADI 2135 pelo STF (2024). Confira os efeitos antes da prova.",
    blocos: [
      { tipo: "texto", texto: [
        "- **Estatutário**: regras fixadas por **lei** de cada ente; a Administração pode alterá-las unilateralmente (não há direito adquirido a regime jurídico). Federal: **Lei 8.112/1990**. Paraná e Curitiba: estatutos próprios (ver Bloco C).",
        "- **Celetista**: regido pela **CLT**, com regras de direito público (concurso, teto, proibição de acumular).",
        "",
        "Cada ente federativo tem **autonomia** para legislar sobre o regime dos seus servidores, respeitando a Constituição."
      ]},
      { tipo: "dica", texto: "No caderno, a Lei 8.112/1990 está no **Bloco A**, e os estatutos do Paraná e de Curitiba no **Bloco C**." },
      { tipo: "questao", banca: Q, enunciado: "Sobre o regime estatutário, é correto afirmar que:", alternativas: ["o servidor tem direito adquirido a manter o regime jurídico", "as regras podem ser alteradas por lei, respeitados os direitos adquiridos", "é regido pela CLT", "é exclusivo da União", "não admite estabilidade"], correta: "B", comentario: "Não há direito adquirido a regime jurídico (jurisprudência do STF), mas direitos já incorporados são respeitados." }
    ]
  });

  /* ================= LICITAÇÕES ================= */

  A(LC, "Princípios e agentes da licitação", {
    resumo: "Os princípios do art. 5º da Lei 14.133 e quem conduz a licitação.",
    incidencia: "alta",
    fontes: [L.l14133],
    blocos: [
      { tipo: "texto", texto: [
        "A **Lei 14.133/2021** é a nova lei de licitações e contratos. Substituiu as Leis 8.666/1993, 10.520/2002 (pregão) e parte da 12.462/2011 (RDC), que deixaram de valer em 30/12/2023.",
        "",
        "**Princípios (art. 5º)**: legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade administrativa, igualdade, **planejamento**, transparência, eficácia, **segregação de funções**, motivação, vinculação ao edital, julgamento objetivo, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável."
      ]},
      { tipo: "tabela", titulo: "Agentes", cabecalho: ["Agente", "Papel"], linhas: [
        ["Agente de contratação", "conduz a licitação; designado entre servidores efetivos ou empregados públicos dos quadros permanentes (art. 8º)"],
        ["Comissão de contratação", "no mínimo 3 membros, quando a licitação envolve bens ou serviços especiais"],
        ["Pregoeiro", "o agente de contratação no pregão"],
        ["Fiscal e gestor do contrato", "acompanham a execução"]
      ]},
      { tipo: "dica", texto: "**Segregação de funções**: a mesma pessoa não deve atuar em funções suscetíveis a riscos ao mesmo tempo (ex.: quem pede a compra não deve fiscalizar o próprio contrato)." },
      { tipo: "questao", banca: Q, enunciado: "É princípio expresso na Lei 14.133/2021 que não constava da Lei 8.666/1993:", alternativas: ["legalidade", "planejamento", "publicidade", "moralidade", "impessoalidade"], correta: "B", comentario: "Planejamento e segregação de funções são novidades expressas da Lei 14.133." }
    ]
  });

  A(LC, "Modalidades de licitação", {
    resumo: "Pregão, concorrência, concurso, leilão e diálogo competitivo.",
    incidencia: "alta",
    fontes: [L.l14133],
    blocos: [
      { tipo: "tabela", titulo: "As cinco modalidades (art. 28)", cabecalho: ["Modalidade", "Para quê", "Critério de julgamento"], linhas: [
        ["Pregão", "bens e serviços **comuns** (inclusive serviços comuns de engenharia)", "menor preço ou maior desconto"],
        ["Concorrência", "bens e serviços **especiais**, obras e serviços de engenharia", "menor preço, melhor técnica, técnica e preço, maior retorno econômico, maior desconto"],
        ["Concurso", "trabalho técnico, científico ou artístico", "melhor técnica ou conteúdo artístico; prêmio ou remuneração"],
        ["Leilão", "**alienação** de imóveis ou de móveis inservíveis ou apreendidos", "maior lance"],
        ["Diálogo competitivo", "contratações complexas, inovadoras, em que a Administração dialoga com licitantes para desenvolver soluções", "definido após o diálogo"]
      ]},
      { tipo: "atencao", texto: "A Lei 14.133 **extinguiu** a **tomada de preços** e o **convite**. E é **proibido** criar outras modalidades ou combinar as existentes." },
      { tipo: "python", titulo: "Julgamento por menor preço", texto: "Simulação da classificação das propostas num pregão.", codigo: `
propostas = {"Empresa A": 12_450.00, "Empresa B": 11_980.50, "Empresa C": 12_100.00}
classificacao = sorted(propostas.items(), key=lambda item: item[1])
for posicao, (empresa, valor) in enumerate(classificacao, start=1):
    print(f"{posicao}º {empresa}: R$ {valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."))
`, saida: `
1º Empresa B: R$ 11.980,50
2º Empresa C: R$ 12.100,00
3º Empresa A: R$ 12.450,00
` },
      { tipo: "questao", banca: Q, enunciado: "Para a aquisição de material de escritório (bem comum), a modalidade adequada é:", alternativas: ["concurso", "leilão", "pregão", "diálogo competitivo", "tomada de preços"], correta: "C", comentario: "Bens comuns: pregão. Tomada de preços não existe mais." }
    ]
  });

  A(LC, "Fases do processo licitatório", {
    resumo: "Da fase preparatória à homologação, com o julgamento antes da habilitação.",
    incidencia: "alta",
    fontes: [L.l14133],
    blocos: [
      { tipo: "passos", titulo: "Fases (art. 17)", itens: [
        "**Preparatória**: planejamento, estudo técnico preliminar, termo de referência ou projeto, orçamento estimado.",
        "**Divulgação do edital** (no Portal Nacional de Contratações Públicas, o PNCP).",
        "**Apresentação de propostas e lances**.",
        "**Julgamento**.",
        "**Habilitação**: verificação dos documentos de quem venceu.",
        "**Recursal**.",
        "**Homologação**."
      ]},
      { tipo: "atencao", texto: "Na regra da Lei 14.133, o **julgamento vem antes da habilitação**: só se examinam os documentos do primeiro colocado. A inversão (habilitação antes) é exceção, que precisa de justificativa. Na Lei 8.666 era o contrário." },
      { tipo: "texto", titulo: "Forma", texto: ["As licitações são preferencialmente **eletrônicas**; a forma presencial precisa de motivação e de gravação em áudio e vídeo da sessão."] },
      { tipo: "questao", banca: Q, enunciado: "Pela regra da Lei 14.133/2021, a fase de habilitação ocorre:", alternativas: ["antes da divulgação do edital", "antes do julgamento das propostas", "depois do julgamento das propostas", "depois da homologação", "somente no pregão presencial"], correta: "C", comentario: "Art. 17: julgamento (V) antes da habilitação (VI), como regra." }
    ]
  });

  A(LC, "Contratação direta: dispensa e inexigibilidade", {
    resumo: "Quando se contrata sem licitação: competição inviável (inexigibilidade) ou dispensável por lei.",
    incidencia: "alta",
    fontes: [L.l14133],
    conferir: "Os valores de dispensa por pequeno valor são atualizados todo ano por decreto. Confira o valor vigente (os da tabela são os originais da lei).",
    blocos: [
      { tipo: "tabela", titulo: "Inexigibilidade × dispensa", cabecalho: ["", "Inexigibilidade (art. 74)", "Dispensa (art. 75)"], linhas: [
        ["Causa", "competição **inviável**", "competição possível, mas a lei **permite** não licitar"],
        ["Rol", "exemplificativo", "taxativo"],
        ["Exemplos", "fornecedor exclusivo; artista consagrado; serviço técnico especializado de natureza intelectual com notória especialização; credenciamento; imóvel com características únicas", "pequeno valor; emergência ou calamidade (até 1 ano, sem prorrogação); licitação deserta ou fracassada (mantidas as condições); entre outros"]
      ]},
      { tipo: "tabela", titulo: "Dispensa por valor (art. 75, I e II, valores originais)", cabecalho: ["Objeto", "Até"], linhas: [["Obras e serviços de engenharia ou manutenção de veículos", "R$ 100.000,00"], ["Outros serviços e compras", "R$ 50.000,00"]], legenda: "Valores atualizados anualmente por decreto: confira o vigente." },
      { tipo: "atencao", texto: "**Licitação dispensada** (art. 76) é outra coisa: são alienações de bens em que a lei já dispensa a licitação (ex.: doação para outro órgão). Aí a Administração **não** pode licitar; na dispensável, ela **pode** escolher licitar." },
      { tipo: "questao", banca: Q, enunciado: "A contratação de um show de artista consagrado pela crítica e pelo público é caso de:", alternativas: ["dispensa por valor", "inexigibilidade", "licitação dispensada", "pregão", "concorrência obrigatória"], correta: "B", comentario: "Não há como comparar artistas objetivamente: competição inviável, art. 74, II." }
    ]
  });

  A(LC, "Contratos administrativos", {
    resumo: "Cláusulas exorbitantes, duração, alterações, garantias e extinção.",
    incidencia: "alta",
    fontes: [L.l14133],
    blocos: [
      { tipo: "tabela", titulo: "Prerrogativas da Administração (art. 104)", cabecalho: ["Cláusula exorbitante", "O que permite"], linhas: [
        ["Modificar unilateralmente", "para melhor adequação ao interesse público, respeitados os direitos do contratado"],
        ["Extinguir unilateralmente", "nos casos previstos em lei"],
        ["Fiscalizar", "acompanhar a execução"],
        ["Aplicar sanções", "advertência, multa, impedimento de licitar, declaração de inidoneidade"],
        ["Ocupar provisoriamente", "bens e pessoal do contratado, em serviços essenciais, durante apuração de faltas"]
      ]},
      { tipo: "tabela", titulo: "Números que caem", cabecalho: ["Regra", "Limite"], linhas: [
        ["Acréscimos e supressões unilaterais (art. 125)", "até **25%** do valor inicial; **50%** para reforma de edifício ou equipamento (só acréscimos)"],
        ["Serviços e fornecimentos contínuos (arts. 106 e 107)", "até **5 anos**, prorrogáveis até **10 anos**"],
        ["Garantia (art. 98)", "até **5%** do valor; até **10%** em contratos complexos"]
      ]},
      { tipo: "texto", titulo: "Equilíbrio econômico-financeiro", texto: ["A relação entre encargos e remuneração do contratado deve ser mantida. Fatos imprevisíveis (álea extraordinária), fato do príncipe e alterações unilaterais dão direito a **reequilíbrio** (revisão). A **repactuação** e o **reajuste** tratam da inflação."] },
      { tipo: "questao", banca: Q, enunciado: "Num contrato de fornecimento de R$ 200.000, a Administração pode, unilateralmente, acrescer o objeto em até:", alternativas: ["R$ 20.000", "R$ 40.000", "R$ 50.000", "R$ 100.000", "R$ 200.000"], correta: "C", comentario: "25% de 200.000 = 50.000 (art. 125)." }
    ]
  });

  /* ================= SERVIÇOS E BENS ================= */

  A(SB, "Serviços públicos: conceito e princípios", {
    resumo: "Atividade prestada pelo Estado ou por delegados e os princípios do serviço adequado.",
    incidencia: "média",
    fontes: [L.l8987, L.cf],
    blocos: [
      { tipo: "texto", texto: [
        "**Serviço público** é a atividade de oferecer utilidades à coletividade, prestada pelo Estado **diretamente** ou **sob regime de concessão ou permissão** (art. 175 da CF), sob regime de direito público.",
        "",
        "Exemplos: transporte coletivo, fornecimento de água, coleta de lixo, energia elétrica, educação e saúde públicas."
      ]},
      { tipo: "lei", titulo: "Serviço adequado (Lei 8.987/1995, art. 6º, § 1º)", texto: ["Serviço adequado é o que satisfaz as condições de regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia na sua prestação e modicidade das tarifas."], referencia: "Lei 8.987/1995, art. 6º, § 1º", url: L.l8987.url },
      { tipo: "atencao", texto: "Não é descontinuidade interromper o serviço em **emergência** ou, após aviso prévio, por razões técnicas ou de segurança, ou por **inadimplemento** do usuário, considerado o interesse da coletividade (art. 6º, § 3º)." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.987/1995, o corte do fornecimento de água por falta de pagamento, com aviso prévio:", alternativas: ["é sempre proibido", "não caracteriza descontinuidade do serviço", "depende de ordem judicial", "viola o princípio da generalidade", "só pode ocorrer após 1 ano de atraso"], correta: "B", comentario: "Art. 6º, § 3º, II: interrupção por inadimplemento, com aviso prévio, não é descontinuidade." }
    ]
  });

  A(SB, "Concessão e permissão", {
    resumo: "Delegação da execução de serviços públicos por contrato, com licitação.",
    incidencia: "média",
    fontes: [L.l8987],
    blocos: [
      { tipo: "tabela", titulo: "Concessão × permissão (Lei 8.987, art. 2º)", cabecalho: ["", "Concessão", "Permissão"], linhas: [
        ["Instrumento", "contrato", "contrato de adesão (precário)"],
        ["Licitação", "concorrência ou diálogo competitivo", "licitação (qualquer modalidade cabível)"],
        ["Delegatário", "pessoa jurídica ou consórcio de empresas", "pessoa física ou jurídica"],
        ["Prazo", "determinado", "precária e revogável (com prazo, na prática)"]
      ]},
      { tipo: "tabela", titulo: "Formas de extinção da concessão (art. 35)", cabecalho: ["Forma", "Causa"], linhas: [["Advento do termo", "fim do prazo"], ["Encampação", "interesse público, por lei autorizativa e com indenização prévia"], ["Caducidade", "inexecução total ou parcial pela concessionária"], ["Rescisão", "iniciativa da concessionária, por descumprimento do poder concedente, via ação judicial"], ["Anulação", "ilegalidade"], ["Falência ou extinção da empresa", "—"]] },
      { tipo: "dica", texto: "Não confunda: **encampação** = Estado retoma por interesse público (sem culpa da empresa). **Caducidade** = Estado retoma porque a empresa falhou." },
      { tipo: "questao", banca: Q, enunciado: "A retomada do serviço pelo poder concedente, durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa e indenização prévia, é a:", alternativas: ["caducidade", "encampação", "rescisão", "reversão", "anulação"], correta: "B", comentario: "Art. 37 da Lei 8.987/1995." }
    ]
  });

  A(SB, "Bens públicos", {
    resumo: "Uso comum, uso especial e dominicais; inalienabilidade, impenhorabilidade e imprescritibilidade.",
    incidencia: "média",
    fontes: [L.cc, L.cf],
    blocos: [
      { tipo: "tabela", titulo: "Classificação (Código Civil, art. 99)", cabecalho: ["Tipo", "Destinação", "Exemplos"], linhas: [
        ["Uso comum do povo", "uso por todos", "ruas, praças, praias, rios"],
        ["Uso especial", "serviço ou estabelecimento da Administração", "prédios de repartições, escolas, hospitais, veículos oficiais"],
        ["Dominicais", "patrimônio disponível, sem destinação específica", "terrenos baldios do ente, imóveis desocupados"]
      ]},
      { tipo: "tabela", titulo: "Características", cabecalho: ["Característica", "Significa"], linhas: [
        ["Inalienabilidade (relativa)", "os de uso comum e especial não podem ser vendidos enquanto afetados; os dominicais podem, observada a lei"],
        ["Impenhorabilidade", "não podem ser penhorados; dívidas do Estado se pagam por precatório"],
        ["Imprescritibilidade", "não podem ser adquiridos por usucapião (art. 183, § 3º, e 191, parágrafo único, da CF)"],
        ["Não onerabilidade", "não podem ser dados em garantia (hipoteca, penhor)"]
      ]},
      { tipo: "dica", texto: "**Afetação** é dar destinação pública a um bem; **desafetação** é retirá-la (o bem vira dominical e pode ser alienado)." },
      { tipo: "questao", banca: Q, enunciado: "Um imóvel público desocupado, sem destinação específica, é classificado como bem:", alternativas: ["de uso comum do povo", "de uso especial", "dominical", "privado", "afetado"], correta: "C", comentario: "Patrimônio disponível, sem destinação: dominical." }
    ]
  });

  /* ================= CONTROLE E RESPONSABILIDADE ================= */

  A(CR, "Controle da Administração Pública", {
    resumo: "Controle interno, externo (Legislativo com o TCU), judicial e social.",
    incidencia: "média",
    fontes: [L.cf],
    blocos: [
      { tipo: "tabela", titulo: "Tipos de controle", cabecalho: ["Classificação", "Tipo", "Exemplo"], linhas: [
        ["Quem controla", "Administrativo (interno)", "autotutela, controladorias (CGU)"],
        ["Quem controla", "Legislativo (externo)", "CPIs, sustação de atos, julgamento das contas pelo Congresso com auxílio do TCU"],
        ["Quem controla", "Judicial", "mandado de segurança, ação popular, ação civil pública (só legalidade)"],
        ["Quem controla", "Social", "cidadão denuncia ao Tribunal de Contas (art. 74, § 2º), ouvidorias, conselhos"],
        ["Momento", "Prévio, concomitante ou posterior", "aprovação prévia, fiscalização durante a obra, auditoria posterior"]
      ]},
      { tipo: "texto", titulo: "Tribunal de Contas da União", texto: [
        "O **TCU** auxilia o Congresso no controle externo (art. 71). Ele **aprecia** as contas do Presidente com **parecer prévio** (quem **julga** é o Congresso) e **julga** as contas dos demais administradores. Pode aplicar multas, e suas decisões que imputam débito têm eficácia de título executivo."
      ]},
      { tipo: "questao", banca: Q, enunciado: "As contas anuais do Presidente da República são:", alternativas: ["julgadas pelo TCU", "julgadas pelo Congresso Nacional, com parecer prévio do TCU", "julgadas pelo STF", "aprovadas pela CGU", "julgadas pela Câmara dos Deputados sozinha"], correta: "B", comentario: "Art. 49, IX, e art. 71, I, da CF." }
    ]
  });

  A(CR, "Responsabilidade civil do Estado", {
    resumo: "Responsabilidade objetiva (risco administrativo), excludentes e ação de regresso.",
    incidencia: "alta",
    fontes: [L.cf],
    blocos: [
      { tipo: "lei", titulo: "Constituição Federal, art. 37, § 6º", texto: ["§ 6º As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa."], referencia: "CF/88, art. 37, § 6º", url: L.cf.url },
      { tipo: "texto", texto: [
        "- É **objetiva**: basta provar **conduta**, **dano** e **nexo causal**. Não é preciso provar culpa (teoria do **risco administrativo**).",
        "- **Excludentes** ou atenuantes: culpa **exclusiva** da vítima (exclui), culpa concorrente (atenua), caso fortuito ou força maior, fato exclusivo de terceiro.",
        "- O agente responde **regressivamente**, perante o Estado, só se agiu com **dolo ou culpa**.",
        "- A vítima deve processar o **Estado** (ou a prestadora), não o agente diretamente (STF, Tema 940).",
        "- Na **omissão**, a regra é a responsabilidade subjetiva (falha do serviço), com exceções reconhecidas pelo STF (ex.: pessoas sob custódia do Estado)."
      ]},
      { tipo: "svg", titulo: "Caminho da indenização", codigo: `
<svg viewBox="0 0 560 160" role="img" aria-label="Vítima processa o Estado (responsabilidade objetiva); o Estado processa o agente em ação de regresso, se houve dolo ou culpa">
  <defs><marker id="seta-rc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="fd" x="10" y="50" width="130" height="56" rx="8"></rect><text class="tx" x="75" y="83" text-anchor="middle">Vítima</text>
  <rect class="fd-d" x="215" y="50" width="130" height="56" rx="8"></rect><text class="tx" x="280" y="83" text-anchor="middle">Estado</text>
  <rect class="fd" x="420" y="50" width="130" height="56" rx="8"></rect><text class="tx" x="485" y="83" text-anchor="middle">Agente</text>
  <line class="ln-d" x1="140" y1="78" x2="212" y2="78" marker-end="url(#seta-rc)"></line>
  <line class="ln-d" x1="345" y1="78" x2="417" y2="78" marker-end="url(#seta-rc)"></line>
  <text class="tx-m" x="177" y="40" text-anchor="middle">objetiva</text>
  <text class="tx-m" x="382" y="40" text-anchor="middle">regresso</text>
  <text class="tx-m" x="382" y="130" text-anchor="middle">só com dolo ou culpa</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Um ônibus de concessionária de transporte público atropela um pedestre. A responsabilidade da concessionária é:", alternativas: ["subjetiva, exigindo prova de culpa do motorista", "objetiva, bastando conduta, dano e nexo causal", "inexistente, por ser empresa privada", "exclusiva do motorista", "do Município, apenas"], correta: "B", comentario: "Prestadora de serviço público de direito privado também responde objetivamente (art. 37, § 6º), inclusive perante não usuários (STF)." }
    ]
  });

  A(CR, "Improbidade administrativa (Lei 8.429/1992)", {
    resumo: "Enriquecimento ilícito, dano ao erário e violação de princípios, com as mudanças de 2021.",
    incidencia: "alta",
    fontes: [L.l8429, L.cf],
    conferir: "A Lei 14.230/2021 mudou muito a lei de improbidade, e o STF julgou vários pontos depois (ex.: legitimidade para propor a ação). Confira a redação atual e a jurisprudência indicada no edital.",
    blocos: [
      { tipo: "tabela", titulo: "Os três tipos de ato", cabecalho: ["Tipo", "Artigo", "Exemplo"], linhas: [
        ["Enriquecimento ilícito", "art. 9º", "receber propina; usar veículo oficial para fins particulares"],
        ["Prejuízo ao erário", "art. 10", "permitir compra superfaturada; dispensar licitação indevidamente"],
        ["Atentado aos princípios", "art. 11 (rol taxativo desde 2021)", "revelar segredo funcional; frustrar concurso; nepotismo"]
      ]},
      { tipo: "texto", titulo: "Mudanças da Lei 14.230/2021", texto: [
        "- Todos os atos exigem **dolo** (vontade livre e consciente). Não existe mais improbidade **culposa**.",
        "- O rol do art. 11 passou a ser **taxativo**.",
        "- Prescrição de **8 anos** (art. 23).",
        "- Sanções graduadas: perda dos bens acrescidos ilicitamente, ressarcimento, perda da função, suspensão dos direitos políticos (até 14 anos no art. 9º; até 12 no art. 10), multa e proibição de contratar com o Poder Público."
      ]},
      { tipo: "lei", titulo: "Constituição Federal, art. 37, § 4º", texto: ["§ 4º Os atos de improbidade administrativa importarão a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário, na forma e gradação previstas em lei, sem prejuízo da ação penal cabível."], referencia: "CF/88, art. 37, § 4º", url: L.cf.url },
      { tipo: "questao", banca: Q, enunciado: "Após a Lei 14.230/2021, a caracterização de ato de improbidade administrativa exige:", alternativas: ["apenas culpa", "dolo", "culpa grave nos casos do art. 10", "apenas o dano, sem análise de intenção", "condenação criminal prévia"], correta: "B", comentario: "A lei passou a exigir dolo para todos os tipos." }
    ]
  });

  A(CR, "Lei de Acesso à Informação (Lei 12.527/2011)", {
    resumo: "Transparência ativa e passiva, prazos de resposta e classificação de sigilo.",
    incidencia: "alta",
    fontes: [L.l12527],
    blocos: [
      { tipo: "texto", texto: [
        "A **LAI** regulamenta o direito de acesso a informações públicas (art. 5º, XXXIII, da CF). A **publicidade é a regra** e o sigilo, a exceção.",
        "",
        "- **Transparência ativa**: o órgão divulga por iniciativa própria, na internet (estrutura, despesas, licitações, contratos, remunerações).",
        "- **Transparência passiva**: o cidadão pede, e o órgão responde.",
        "- O pedido **não precisa de motivação** e o serviço é **gratuito** (salvo custo de reprodução)."
      ]},
      { tipo: "tabela", titulo: "Prazos e sigilo", cabecalho: ["Regra", "Prazo"], linhas: [
        ["Resposta ao pedido", "imediata ou em até **20 dias**, prorrogáveis por **10** (com justificativa)"],
        ["Recurso contra negativa", "**10 dias**"],
        ["Informação ultrassecreta", "até **25 anos** (prorrogável uma vez)"],
        ["Informação secreta", "até **15 anos**"],
        ["Informação reservada", "até **5 anos**"],
        ["Informações pessoais", "acesso restrito por até **100 anos**"]
      ]},
      { tipo: "python", titulo: "Contando o prazo de resposta", codigo: `
from datetime import date, timedelta

pedido = date(2026, 11, 10)
prazo = pedido + timedelta(days=20)
prorrogado = prazo + timedelta(days=10)
print("Pedido:", pedido.strftime("%d/%m/%Y"))
print("Prazo normal:", prazo.strftime("%d/%m/%Y"))
print("Com prorrogação:", prorrogado.strftime("%d/%m/%Y"))
`, saida: `
Pedido: 10/11/2026
Prazo normal: 30/11/2026
Com prorrogação: 10/12/2026
`, legenda: "Simplificação: a contagem real segue as regras de prazo do regulamento (Decreto 7.724/2012 no âmbito federal)." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a LAI, o pedido de acesso à informação:", alternativas: ["deve ser motivado", "é cobrado por página", "dispensa a indicação dos motivos", "só pode ser feito por advogado", "só vale para o Executivo federal"], correta: "C", comentario: "Art. 10, § 3º: são vedadas exigências relativas aos motivos do pedido." }
    ]
  });

  A(CR, "Lei Geral de Proteção de Dados (Lei 13.709/2018)", {
    resumo: "Dados pessoais e sensíveis, agentes de tratamento, bases legais e o Poder Público.",
    incidencia: "média",
    fontes: [L.l13709],
    blocos: [
      { tipo: "tabela", titulo: "Conceitos (art. 5º)", cabecalho: ["Termo", "Significa"], linhas: [
        ["Dado pessoal", "informação relacionada a pessoa natural identificada ou identificável (nome, CPF, endereço)"],
        ["Dado pessoal sensível", "origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético ou biométrico"],
        ["Titular", "a pessoa a quem os dados se referem"],
        ["Controlador", "quem toma as decisões sobre o tratamento"],
        ["Operador", "quem trata os dados em nome do controlador"],
        ["Encarregado (DPO)", "canal de comunicação entre controlador, titulares e a ANPD"],
        ["ANPD", "Autoridade Nacional de Proteção de Dados: fiscaliza e aplica sanções"]
      ]},
      { tipo: "texto", titulo: "Bases legais e Poder Público", texto: [
        "Tratar dados exige uma **base legal** (art. 7º): consentimento, cumprimento de obrigação legal, **execução de políticas públicas**, estudos por órgão de pesquisa, contrato, exercício de direitos em processo, proteção da vida, tutela da saúde, legítimo interesse e proteção do crédito.",
        "",
        "O **Poder Público** trata dados para cumprir suas competências legais e executar políticas públicas, **sem precisar de consentimento** nesses casos (arts. 7º, III, e 23), mas deve informar o titular e respeitar os princípios (finalidade, necessidade, transparência, segurança…)."
      ]},
      { tipo: "atencao", texto: "A LGPD **não** se aplica ao tratamento para fins exclusivamente jornalísticos, artísticos, acadêmicos, de segurança pública, defesa nacional e investigação criminal (art. 4º)." },
      { tipo: "questao", banca: Q, enunciado: "Na LGPD, a informação sobre a religião de uma pessoa é classificada como:", alternativas: ["dado anonimizado", "dado público", "dado pessoal sensível", "dado empresarial", "dado irrelevante"], correta: "C", comentario: "Convicção religiosa está no rol do art. 5º, II." }
    ]
  });

  /* Ajudante local para blocos de lei da 9.784 (definido depois porque é usado acima) */
  function lei_9784(texto, referencia) {
    return { tipo: "lei", texto, referencia, url: L.l9784.url };
  }
})();

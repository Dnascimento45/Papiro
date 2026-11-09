/* Direito Constitucional · todos os assuntos. Base: Constituição Federal de 1988 (texto no Planalto). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "direito-constitucional", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const CF_URL = "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm";
  const CF = { titulo: "Constituição da República Federativa do Brasil de 1988 · Planalto", url: CF_URL };
  const TC = "Teoria da Constituição";
  const PF = "Princípios Fundamentais";
  const DG = "Direitos e Garantias Fundamentais";
  const OE = "Organização do Estado";
  const AP = "Administração Pública na Constituição";
  const OP = "Organização dos Poderes";
  const lei = (texto, referencia, titulo) => ({ tipo: "lei", titulo, texto, referencia, url: CF_URL });

  /* ================= TEORIA DA CONSTITUIÇÃO ================= */

  A(TC, "Conceito e classificação das constituições", {
    resumo: "O que é constituição e como se classifica a CF/88.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "texto", texto: [
        "A **Constituição** é a lei fundamental do Estado: organiza o poder (quem manda e como), limita esse poder e garante direitos. Está no topo do ordenamento: toda norma deve ser compatível com ela.",
        "",
        "A **Constituição Federal de 1988** foi promulgada em 5 de outubro de 1988 e é chamada de \"Constituição Cidadã\"."
      ]},
      { tipo: "tabela", titulo: "Classificação da CF/88", cabecalho: ["Critério", "A CF/88 é…", "Significa"], linhas: [
        ["Forma", "escrita", "reunida num documento único"],
        ["Origem", "promulgada (democrática)", "feita por representantes eleitos (Assembleia Nacional Constituinte)"],
        ["Estabilidade", "rígida", "muda por processo mais difícil que o das leis (emenda: 3/5, dois turnos)"],
        ["Extensão", "analítica (prolixa)", "longa e detalhada"],
        ["Conteúdo", "formal", "tudo que está nela tem força constitucional"],
        ["Elaboração", "dogmática", "feita de uma vez, por um órgão constituinte"]
      ]},
      { tipo: "dica", texto: "Ao contrário: constituição **outorgada** é imposta (1824, 1937, 1967); **flexível** muda como lei comum; **sintética** é curta (a dos EUA)." },
      { tipo: "questao", banca: Q, enunciado: "Quanto à estabilidade, a Constituição de 1988 é classificada como:", alternativas: ["flexível", "rígida", "imutável", "semirrígida", "outorgada"], correta: "B", comentario: "Exige processo especial e mais difícil para ser alterada (art. 60)." }
    ]
  });

  A(TC, "Poder constituinte", {
    resumo: "Originário, derivado reformador, decorrente e revisor.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Espécies", cabecalho: ["Poder", "O que faz", "Características"], linhas: [
        ["Originário", "cria uma nova Constituição", "inicial, ilimitado (juridicamente), incondicionado, autônomo"],
        ["Derivado reformador", "altera a Constituição por emendas (art. 60)", "limitado: não pode abolir cláusulas pétreas"],
        ["Derivado decorrente", "permite aos Estados fazer suas constituições (art. 25)", "limitado pelos princípios da CF"],
        ["Derivado revisor", "revisão única feita em 1993-1994 (art. 3º do ADCT)", "já se esgotou"]
      ]},
      { tipo: "dica", texto: "O titular do poder constituinte é o **povo** (art. 1º, parágrafo único: \"Todo o poder emana do povo…\"). Quem o exerce são os representantes." },
      { tipo: "questao", banca: Q, enunciado: "O poder que permite aos Estados-membros elaborar suas próprias constituições é o:", alternativas: ["originário", "reformador", "decorrente", "revisor", "difuso"], correta: "C", comentario: "Poder constituinte derivado decorrente (art. 25 da CF)." }
    ]
  });

  A(TC, "Aplicabilidade das normas constitucionais", {
    resumo: "Normas de eficácia plena, contida e limitada.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Classificação de José Afonso da Silva", cabecalho: ["Eficácia", "Aplicação", "Exemplo"], linhas: [
        ["Plena", "imediata, integral, não depende de lei", "art. 2º (separação dos Poderes)"],
        ["Contida", "imediata, mas a lei **pode restringir**", "art. 5º, XIII (livre exercício de profissão, atendidas as qualificações que a lei estabelecer)"],
        ["Limitada", "depende de lei para produzir todos os efeitos", "art. 37, VII (greve do servidor \"nos termos e nos limites definidos em lei específica\")"]
      ]},
      { tipo: "dica", texto: "Diferença-chave: a **contida** nasce valendo por inteiro e a lei pode reduzir; a **limitada** nasce incompleta e a lei precisa completar." },
      { tipo: "questao", banca: Q, enunciado: "A norma que garante o livre exercício de qualquer trabalho, \"atendidas as qualificações profissionais que a lei estabelecer\", tem eficácia:", alternativas: ["plena", "contida", "limitada", "exaurida", "programática pura"], correta: "B", comentario: "Vale desde já, mas a lei pode restringir (exigir diploma, inscrição em conselho)." }
    ]
  });

  /* ================= PRINCÍPIOS FUNDAMENTAIS ================= */

  A(PF, "Fundamentos da República (art. 1º)", {
    resumo: "Soberania, cidadania, dignidade, valores sociais do trabalho e livre iniciativa, pluralismo político.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      lei([
        "Art. 1º A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:",
        "I – a soberania;",
        "II – a cidadania;",
        "III – a dignidade da pessoa humana;",
        "IV – os valores sociais do trabalho e da livre iniciativa;",
        "V – o pluralismo político.",
        "Parágrafo único. Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição."
      ], "CF/88, art. 1º"),
      { tipo: "dica", titulo: "Para decorar", texto: "**SO-CI-DI-VA-PLU**: SOberania, CIdadania, DIgnidade, VAlores sociais do trabalho e da livre iniciativa, PLUralismo político." },
      { tipo: "atencao", texto: "Pluralismo **político** não é só partidário: inclui diversidade de ideias, religiões e culturas. E a união é **indissolúvel**: nenhum ente pode se separar (não há direito de secessão)." },
      { tipo: "questao", banca: Q, enunciado: "É fundamento da República Federativa do Brasil, segundo o art. 1º da CF:", alternativas: ["erradicar a pobreza", "a dignidade da pessoa humana", "a independência nacional", "a defesa da paz", "garantir o desenvolvimento nacional"], correta: "B", comentario: "A, E são objetivos (art. 3º); C, D são princípios das relações internacionais (art. 4º)." }
    ]
  });

  A(PF, "Separação dos Poderes (art. 2º)", {
    resumo: "Legislativo, Executivo e Judiciário, independentes e harmônicos.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      lei(["Art. 2º São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário."], "CF/88, art. 2º"),
      { tipo: "texto", texto: [
        "Cada Poder tem uma **função típica** e exerce também **funções atípicas**:",
        "- **Legislativo**: tipicamente legisla e fiscaliza; atipicamente administra (seus servidores) e julga (o Senado julga o Presidente por crime de responsabilidade).",
        "- **Executivo**: tipicamente administra; atipicamente legisla (medidas provisórias) e julga (processos administrativos).",
        "- **Judiciário**: tipicamente julga; atipicamente administra e legisla (regimentos internos).",
        "",
        "O controle recíproco é o sistema de **freios e contrapesos**: o Presidente veta leis, o Congresso derruba vetos, o Judiciário declara leis inconstitucionais."
      ]},
      { tipo: "atencao", texto: "A separação dos Poderes é **cláusula pétrea** (art. 60, § 4º, III): não pode ser abolida nem por emenda." },
      { tipo: "questao", banca: Q, enunciado: "A edição de medida provisória pelo Presidente da República é exemplo de:", alternativas: ["função típica do Executivo", "função atípica de legislar exercida pelo Executivo", "função típica do Legislativo exercida pelo Legislativo", "violação à separação dos Poderes", "função jurisdicional"], correta: "B", comentario: "O Executivo legisla de forma atípica ao editar MP (art. 62)." }
    ]
  });

  A(PF, "Objetivos fundamentais (art. 3º)", {
    resumo: "Os verbos de ação: construir, garantir, erradicar, promover.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      lei([
        "Art. 3º Constituem objetivos fundamentais da República Federativa do Brasil:",
        "I – construir uma sociedade livre, justa e solidária;",
        "II – garantir o desenvolvimento nacional;",
        "III – erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;",
        "IV – promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação."
      ], "CF/88, art. 3º"),
      { tipo: "dica", titulo: "Truque", texto: "Objetivos começam com **verbo**: **CON**struir, **GA**rantir, **ERRA**dicar, **PRO**mover (\"CONGA ERRA PRO\"). Fundamentos (art. 1º) são substantivos." },
      { tipo: "atencao", texto: "A pobreza é para **erradicar** (acabar), mas as desigualdades são para **reduzir**. As bancas trocam os verbos." },
      { tipo: "questao", banca: Q, enunciado: "Segundo o art. 3º da CF, é objetivo fundamental:", alternativas: ["erradicar as desigualdades regionais", "reduzir a pobreza", "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais", "garantir a soberania", "promover o pluralismo político"], correta: "C", comentario: "Texto literal do inciso III. A e B trocam os verbos; D e E são fundamentos." }
    ]
  });

  A(PF, "Princípios nas relações internacionais (art. 4º)", {
    resumo: "Independência nacional, direitos humanos, autodeterminação, asilo político e integração latino-americana.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      lei([
        "Art. 4º A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios:",
        "I – independência nacional; II – prevalência dos direitos humanos; III – autodeterminação dos povos; IV – não-intervenção; V – igualdade entre os Estados; VI – defesa da paz; VII – solução pacífica dos conflitos; VIII – repúdio ao terrorismo e ao racismo; IX – cooperação entre os povos para o progresso da humanidade; X – concessão de asilo político.",
        "Parágrafo único. A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações."
      ], "CF/88, art. 4º"),
      { tipo: "atencao", texto: "É asilo **político**, não \"asilo humanitário\". E a integração prevista é com a **América Latina**, não com \"as Américas\" ou o \"Mercosul\" por nome." },
      { tipo: "questao", banca: Q, enunciado: "Não é princípio do Brasil nas relações internacionais (art. 4º):", alternativas: ["concessão de asilo político", "não-intervenção", "repúdio ao terrorismo", "soberania", "defesa da paz"], correta: "D", comentario: "Soberania é fundamento (art. 1º, I). O art. 4º fala em independência nacional." }
    ]
  });

  /* ================= DIREITOS E GARANTIAS ================= */

  A(DG, "Direitos e deveres individuais e coletivos (art. 5º)", {
    resumo: "Igualdade, legalidade, liberdades, inviolabilidades e garantias processuais.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      lei(["Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:"], "CF/88, art. 5º, caput"),
      { tipo: "tabela", titulo: "Incisos mais cobrados", cabecalho: ["Inciso", "Conteúdo"], linhas: [
        ["II", "ninguém é obrigado a fazer ou deixar de fazer algo senão em virtude de lei (legalidade)"],
        ["IV", "é livre a manifestação do pensamento, sendo vedado o anonimato"],
        ["XI", "a casa é asilo inviolável: sem consentimento, só em flagrante, desastre, para prestar socorro ou, de dia, por ordem judicial"],
        ["XII", "sigilo de correspondência e comunicações; telefônicas só por ordem judicial, para investigação criminal ou instrução processual penal"],
        ["XVI", "reunião pacífica, sem armas, em locais abertos, sem autorização, com aviso prévio à autoridade"],
        ["XXXIII", "direito de receber dos órgãos públicos informações de interesse particular ou coletivo (base da LAI)"],
        ["XXXIV", "direito de petição e de obter certidões, sem taxas"],
        ["XXXV", "a lei não excluirá do Judiciário lesão ou ameaça a direito"],
        ["LV", "contraditório e ampla defesa, inclusive em processo administrativo"],
        ["LVII", "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória"],
        ["LXXVIII", "razoável duração do processo, judicial e administrativo"]
      ]},
      { tipo: "atencao", texto: "Os direitos do art. 5º também protegem estrangeiros **não residentes** (por interpretação do STF) e, no que couber, pessoas jurídicas. E não são absolutos: podem ser ponderados quando entram em conflito." },
      { tipo: "flashcards", cartas: [
        { frente: "Polícia pode entrar numa casa à noite com mandado judicial?", verso: "Não. Ordem judicial só durante o dia. À noite, só em flagrante, desastre ou para socorro." },
        { frente: "Reunião pública precisa de autorização?", verso: "Não, só de aviso prévio à autoridade." },
        { frente: "Manifestação de pensamento pode ser anônima?", verso: "Não, o anonimato é vedado." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo o art. 5º da CF, a interceptação de comunicações telefônicas:", alternativas: ["é livre para autoridades policiais", "depende de ordem judicial, para investigação criminal ou instrução processual penal", "pode ser autorizada por delegado em casos urgentes", "é sempre proibida", "pode ser usada em processo administrativo disciplinar por ordem do chefe"], correta: "B", comentario: "Art. 5º, XII: só por ordem judicial, nas hipóteses e na forma que a lei estabelecer, para fins de investigação criminal ou instrução processual penal." }
    ]
  });

  A(DG, "Remédios constitucionais", {
    resumo: "Habeas corpus, habeas data, mandado de segurança, mandado de injunção e ação popular.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Os cinco remédios", cabecalho: ["Remédio", "Protege", "Quem propõe"], linhas: [
        ["Habeas corpus (LXVIII)", "liberdade de locomoção (ir, vir e ficar)", "qualquer pessoa, sem advogado"],
        ["Habeas data (LXXII)", "acesso e retificação de **informações pessoais** em bancos de dados públicos", "o próprio interessado"],
        ["Mandado de segurança (LXIX)", "direito **líquido e certo** não amparado por HC ou HD, contra ato de autoridade", "o titular do direito; coletivo: partidos, sindicatos, associações (LXX)"],
        ["Mandado de injunção (LXXI)", "direito que não pode ser exercido por **falta de norma regulamentadora**", "o titular do direito"],
        ["Ação popular (LXXIII)", "anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente e ao patrimônio histórico", "qualquer **cidadão** (eleitor)"]
      ]},
      { tipo: "dica", texto: "São **gratuitos**: habeas corpus e habeas data (art. 5º, LXXVII). Na ação popular, o autor fica isento de custas, salvo comprovada má-fé." },
      { tipo: "svg", titulo: "Qual remédio usar?", codigo: `
<svg viewBox="0 0 560 250" role="img" aria-label="Fluxo de decisão: liberdade de locomoção leva a habeas corpus; dados pessoais leva a habeas data; falta de norma leva a mandado de injunção; patrimônio público leva a ação popular; outros direitos líquidos e certos levam a mandado de segurança">
  <rect class="fd" x="10" y="100" width="130" height="50" rx="8"></rect><text class="tx" x="75" y="130" text-anchor="middle">Qual direito?</text>
  <g class="ln"><line x1="140" y1="125" x2="250" y2="30"></line><line x1="140" y1="125" x2="250" y2="80"></line><line x1="140" y1="125" x2="250" y2="130"></line><line x1="140" y1="125" x2="250" y2="180"></line><line x1="140" y1="125" x2="250" y2="225"></line></g>
  <g class="tx-m"><text x="256" y="34">ir e vir</text><text x="256" y="84">meus dados</text><text x="256" y="134">falta lei que regulamente</text><text x="256" y="184">patrimônio público (cidadão)</text><text x="256" y="229">outro direito líquido e certo</text></g>
  <g class="tx tx-d tx-t"><text x="550" y="34" text-anchor="end">Habeas corpus</text><text x="550" y="84" text-anchor="end">Habeas data</text><text x="550" y="134" text-anchor="end">Mandado de injunção</text><text x="550" y="184" text-anchor="end">Ação popular</text><text x="550" y="229" text-anchor="end">Mandado de segurança</text></g>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Um cidadão quer corrigir dados incorretos sobre ele num cadastro de órgão público. O remédio adequado é:", alternativas: ["habeas corpus", "habeas data", "mandado de injunção", "ação popular", "mandado de segurança coletivo"], correta: "B", comentario: "Habeas data serve para conhecer e retificar informações relativas à pessoa do impetrante." }
    ]
  });

  A(DG, "Direitos sociais (arts. 6º a 11)", {
    resumo: "Direitos sociais do art. 6º, direitos dos trabalhadores, sindicatos e greve.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      lei(["Art. 6º São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição."], "CF/88, art. 6º"),
      { tipo: "tabela", titulo: "Direitos dos trabalhadores (art. 7º) que mais caem", cabecalho: ["Direito", "Regra"], linhas: [
        ["Jornada", "até 8 horas diárias e 44 semanais"],
        ["Hora extra", "no mínimo 50% acima da normal"],
        ["Férias", "anuais remuneradas com pelo menos 1/3 a mais"],
        ["Licença-gestante", "120 dias, sem prejuízo do emprego e do salário"],
        ["13º salário", "com base na remuneração integral"],
        ["Aviso prévio", "proporcional ao tempo de serviço, no mínimo 30 dias"],
        ["FGTS, seguro-desemprego, salário mínimo", "garantidos"]
      ]},
      { tipo: "texto", titulo: "Sindicatos e greve", texto: [
        "- Art. 8º: livre associação sindical, mas **unicidade**: um sindicato por categoria na mesma base territorial (não inferior a um Município).",
        "- Art. 9º: direito de **greve** dos trabalhadores.",
        "- Servidor público: greve nos termos de **lei específica** (art. 37, VII). Como a lei não veio, o STF manda aplicar, no que couber, a lei de greve do setor privado."
      ]},
      { tipo: "questao", banca: Q, enunciado: "É direito social expresso no art. 6º da CF:", alternativas: ["o transporte", "a propriedade", "a liberdade de crença", "o sigilo bancário", "a livre iniciativa"], correta: "A", comentario: "Transporte foi incluído pela EC 90/2015. Propriedade e crença estão no art. 5º; livre iniciativa é fundamento (art. 1º)." }
    ]
  });

  A(DG, "Nacionalidade", {
    resumo: "Brasileiro nato e naturalizado, cargos privativos de nato e perda da nacionalidade.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Brasileiro nato (art. 12, I)", cabecalho: ["Hipótese", "Requisito"], linhas: [
        ["Nascido no Brasil", "mesmo de pais estrangeiros, desde que eles não estejam a serviço do seu país"],
        ["Nascido no exterior, pai ou mãe brasileiros a serviço do Brasil", "basta isso"],
        ["Nascido no exterior, pai ou mãe brasileiros", "registro em repartição brasileira competente **ou** vir morar no Brasil e optar, depois dos 18 anos, pela nacionalidade brasileira"]
      ]},
      { tipo: "texto", titulo: "Naturalizado (art. 12, II)", texto: ["- Originários de **países de língua portuguesa**: 1 ano ininterrupto de residência e idoneidade moral.", "- Demais estrangeiros: mais de 15 anos ininterruptos de residência, sem condenação penal, desde que requeiram."] },
      { tipo: "tabela", titulo: "Cargos privativos de brasileiro nato (art. 12, § 3º)", cabecalho: ["Cargo"], linhas: [["Presidente e Vice-Presidente da República"], ["Presidente da Câmara dos Deputados"], ["Presidente do Senado Federal"], ["Ministro do Supremo Tribunal Federal"], ["Carreira diplomática"], ["Oficial das Forças Armadas"], ["Ministro de Estado da Defesa"]] },
      { tipo: "dica", texto: "Mnemônico **MP3.CODE**: **M**inistro do STF, **P**residente e vice (da República), **P**residente da Câmara, **P**residente do Senado, **C**arreira diplomática, **O**ficial das Forças Armadas, **DE**fesa (Ministro)." },
      { tipo: "questao", banca: Q, enunciado: "Pode ser ocupado por brasileiro naturalizado:", alternativas: ["Presidente do Senado", "Ministro do STF", "Senador da República", "Oficial das Forças Armadas", "Ministro de Estado da Defesa"], correta: "C", comentario: "Senador pode ser naturalizado; só o **Presidente** do Senado precisa ser nato." }
    ]
  });

  A(DG, "Direitos políticos", {
    resumo: "Voto obrigatório e facultativo, condições de elegibilidade e idades mínimas.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "texto", texto: [
        "A soberania popular é exercida pelo **sufrágio universal** e pelo **voto direto e secreto**, com valor igual para todos, e por **plebiscito**, **referendo** e **iniciativa popular** (art. 14).",
        "- Voto **obrigatório**: maiores de 18 anos.",
        "- Voto **facultativo**: analfabetos, maiores de 70 anos e jovens de 16 e 17 anos.",
        "- **Inalistáveis** (não podem votar): estrangeiros e conscritos durante o serviço militar obrigatório."
      ]},
      { tipo: "tabela", titulo: "Idade mínima para se candidatar (art. 14, § 3º, VI)", cabecalho: ["Idade", "Cargos"], linhas: [["35 anos", "Presidente, Vice-Presidente e Senador"], ["30 anos", "Governador e Vice-Governador"], ["21 anos", "Deputado (federal, estadual, distrital), Prefeito, Vice-Prefeito e juiz de paz"], ["18 anos", "Vereador"]] },
      { tipo: "atencao", texto: "Plebiscito é consulta **antes** do ato; referendo, **depois** (para confirmar ou rejeitar)." },
      { tipo: "questao", banca: Q, enunciado: "Para concorrer a Prefeito, a idade mínima é de:", alternativas: ["18 anos", "21 anos", "25 anos", "30 anos", "35 anos"], correta: "B", comentario: "Art. 14, § 3º, VI, c." }
    ]
  });

  A(DG, "Partidos políticos", {
    resumo: "Liberdade de criação, natureza de direito privado, fidelidade e vedações (art. 17).",
    incidencia: "baixa",
    fontes: [CF],
    blocos: [
      { tipo: "texto", texto: [
        "Art. 17: é **livre** a criação, fusão, incorporação e extinção de partidos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais.",
        "",
        "- Partidos são pessoas jurídicas de **direito privado**: adquirem personalidade na forma da lei civil e registram seus estatutos no **TSE**.",
        "- É **vedado** receber recursos de entidade ou governo estrangeiros e é vedada a organização paramilitar.",
        "- Desde a EC 97/2017, são **proibidas coligações** nas eleições proporcionais (deputados e vereadores).",
        "- O acesso ao fundo partidário e à propaganda gratuita depende de desempenho mínimo nas eleições (**cláusula de desempenho**)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Os partidos políticos, segundo a CF, são pessoas jurídicas de:", alternativas: ["direito público interno", "direito público externo", "direito privado", "natureza autárquica", "natureza estatal"], correta: "C", comentario: "Adquirem personalidade na forma da lei civil: direito privado." }
    ]
  });

  /* ================= ORGANIZAÇÃO DO ESTADO ================= */

  A(OE, "Organização político-administrativa", {
    resumo: "União, Estados, DF e Municípios, todos autônomos; Brasília capital; vedações do art. 19.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      lei(["Art. 18. A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta Constituição.", "§ 1º Brasília é a Capital Federal."], "CF/88, art. 18"),
      { tipo: "texto", texto: [
        "- O Brasil é uma **federação**: entes autônomos (não soberanos; soberana é a República). Autonomia = auto-organização, autogoverno, autoadministração e autolegislação.",
        "- **Territórios federais** integram a União e não são entes federativos (hoje não há nenhum).",
        "- **Criação de Municípios**: por lei estadual, dentro do período definido em lei complementar federal, após estudos de viabilidade e plebiscito com as populações envolvidas (art. 18, § 4º)."
      ]},
      { tipo: "tabela", titulo: "Vedações a todos os entes (art. 19)", cabecalho: ["É vedado…"], linhas: [["estabelecer, subvencionar ou embaraçar cultos religiosos ou igrejas (ressalvada a colaboração de interesse público)"], ["recusar fé aos documentos públicos"], ["criar distinções entre brasileiros ou preferências entre si"]] },
      { tipo: "questao", banca: Q, enunciado: "Sobre a federação brasileira, é correto afirmar:", alternativas: ["Os Estados são soberanos.", "Os Territórios são entes federativos.", "Os Municípios são entes autônomos.", "Um Estado pode se separar da federação por plebiscito.", "O Distrito Federal integra o Estado de Goiás."], correta: "C", comentario: "Art. 18: União, Estados, DF e Municípios são autônomos. A união é indissolúvel (art. 1º)." }
    ]
  });

  A(OE, "União: bens e competências", {
    resumo: "Bens da União (art. 20) e as competências exclusiva, privativa, comum e concorrente.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Tipos de competência", cabecalho: ["Competência", "Artigo", "Natureza", "Quem"], linhas: [
        ["Exclusiva", "21", "administrativa (fazer)", "só a União; **indelegável**"],
        ["Privativa", "22", "legislativa", "União; pode **delegar** aos Estados por lei complementar"],
        ["Comum", "23", "administrativa", "União, Estados, DF e Municípios juntos"],
        ["Concorrente", "24", "legislativa", "União (normas gerais), Estados e DF (suplementam)"]
      ]},
      { tipo: "dica", titulo: "Decorando o art. 22 (privativa da União)", texto: "**CAPACETE de PM**: direito **C**ivil, **A**grário, **P**enal, **A**eronáutico, **C**omercial, **E**leitoral, do **T**rabalho, **E**spacial, **P**rocessual e **M**arítimo." },
      { tipo: "texto", titulo: "Bens da União (art. 20, principais)", texto: ["Terras devolutas indispensáveis à defesa; lagos e rios de mais de um Estado ou que façam fronteira; ilhas oceânicas e costeiras (com exceções); mar territorial; terrenos de marinha; potenciais de energia hidráulica; **recursos minerais, inclusive do subsolo**; cavidades naturais subterrâneas e sítios arqueológicos; terras tradicionalmente ocupadas pelos índios."] },
      { tipo: "questao", banca: Q, enunciado: "Legislar sobre direito do trabalho é competência:", alternativas: ["comum", "concorrente", "privativa da União", "exclusiva dos Estados", "dos Municípios"], correta: "C", comentario: "Art. 22, I: competência privativa da União." }
    ]
  });

  A(OE, "Estados, Municípios e Distrito Federal", {
    resumo: "Competência residual dos Estados, interesse local dos Municípios e o DF híbrido.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "O que cabe a cada um", cabecalho: ["Ente", "Competência", "Base"], linhas: [
        ["Estados", "**remanescente** (residual): o que não for vedado nem atribuído à União e aos Municípios; gás canalizado; criar regiões metropolitanas", "art. 25"],
        ["Municípios", "assuntos de **interesse local**; suplementar a legislação federal e estadual; transporte coletivo local; educação infantil e fundamental", "art. 30"],
        ["Distrito Federal", "acumula competências de Estado e de Município; **não** pode ser dividido em Municípios", "art. 32"]
      ]},
      { tipo: "texto", texto: [
        "O Município se rege por **Lei Orgânica**, votada em dois turnos, com interstício mínimo de dez dias, e aprovada por **dois terços** da Câmara Municipal (art. 29). Não tem Poder Judiciário próprio."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O horário de funcionamento do comércio local, segundo o STF (Súmula Vinculante 38), é competência:", alternativas: ["da União", "dos Estados", "do Município", "concorrente da União e dos Estados", "do Distrito Federal apenas"], correta: "C", comentario: "É assunto de interesse local (art. 30, I). A SV 38 confirma a competência municipal." }
    ]
  });

  A(OE, "Intervenção federal e estadual", {
    resumo: "Exceção à autonomia: hipóteses, quem decreta e o controle do Congresso.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "texto", texto: [
        "A regra é a **não intervenção**. A exceção está nos arts. 34 a 36.",
        "- **Intervenção federal**: a União nos Estados e no DF (art. 34). Ex.: manter a integridade nacional, repelir invasão, pôr termo a grave comprometimento da ordem pública, garantir o livre exercício dos Poderes, prover a execução de lei federal ou decisão judicial, assegurar princípios sensíveis (forma republicana, direitos da pessoa humana, autonomia municipal, prestação de contas, aplicação mínima em saúde e educação).",
        "- **Intervenção estadual**: o Estado nos seus Municípios (art. 35). A União só intervém em Municípios de **Territórios**."
      ]},
      { tipo: "passos", titulo: "Rito da intervenção federal", itens: [
        "Decretada pelo **Presidente da República**, por decreto que especifica amplitude, prazo e condições e, se for o caso, nomeia o interventor.",
        "Em alguns casos, depende de requisição do Judiciário ou de solicitação do Poder coagido.",
        "O decreto é submetido ao **Congresso Nacional em 24 horas** (art. 36, § 1º).",
        "Enquanto durar, a Constituição **não pode ser emendada** (art. 60, § 1º)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Durante a vigência de intervenção federal, a Constituição:", alternativas: ["pode ser emendada livremente", "não pode ser emendada", "só pode ser emendada pelo Presidente", "pode ser emendada por maioria simples", "fica suspensa"], correta: "B", comentario: "Art. 60, § 1º: limite circunstancial — não se emenda a CF na vigência de intervenção federal, estado de defesa ou estado de sítio." }
    ]
  });

  /* ================= ADMINISTRAÇÃO PÚBLICA NA CF ================= */

  A(AP, "Princípios da Administração Pública (art. 37)", {
    resumo: "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      lei(["Art. 37. A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência e, também, ao seguinte:"], "CF/88, art. 37, caput"),
      { tipo: "tabela", titulo: "LIMPE", cabecalho: ["Princípio", "Significado"], linhas: [
        ["Legalidade", "o administrador só faz o que a lei **permite** (o particular pode tudo que a lei não proíbe)"],
        ["Impessoalidade", "atuar pelo interesse público, sem favorecer nem perseguir; vedada promoção pessoal em publicidade oficial (§ 1º)"],
        ["Moralidade", "honestidade, boa-fé e ética; base para o nepotismo ser proibido (SV 13)"],
        ["Publicidade", "transparência dos atos, salvo sigilo previsto em lei"],
        ["Eficiência", "melhores resultados com menos recursos; incluído pela EC 19/1998"]
      ]},
      { tipo: "atencao", texto: "Os princípios valem para a administração **direta e indireta** de **todos** os Poderes e de **todos** os entes, não só para o Executivo federal." },
      { tipo: "questao", banca: Q, enunciado: "A placa de inauguração de obra pública que traz o nome e a foto do prefeito viola principalmente o princípio da:", alternativas: ["legalidade", "impessoalidade", "eficiência", "publicidade", "continuidade"], correta: "B", comentario: "Art. 37, § 1º: a publicidade oficial não pode conter nomes, símbolos ou imagens que caracterizem promoção pessoal." }
    ]
  });

  A(AP, "Acesso a cargos, concurso público e acumulação", {
    resumo: "Concurso, validade, cargos em comissão, reserva para PcD e quando se pode acumular.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Regras do art. 37", cabecalho: ["Inciso", "Regra"], linhas: [
        ["I", "cargos acessíveis a brasileiros e, na forma da lei, a estrangeiros"],
        ["II", "investidura depende de **concurso** de provas ou de provas e títulos; exceção: cargos em comissão (livre nomeação e exoneração)"],
        ["III", "validade do concurso: **até 2 anos**, prorrogável **uma vez**, por igual período"],
        ["IV", "durante o prazo, o aprovado tem prioridade sobre novos concursados"],
        ["V", "funções de confiança só para servidores efetivos; cargos em comissão: percentual mínimo para servidores de carreira; só para direção, chefia e assessoramento"],
        ["VIII", "reserva de vagas para pessoas com deficiência"],
        ["IX", "contratação temporária por excepcional interesse público"]
      ]},
      { tipo: "texto", titulo: "Acumulação de cargos (art. 37, XVI)", texto: [
        "É **proibido** acumular cargos públicos, **exceto** quando houver compatibilidade de horários e respeitado o teto, nos casos:",
        "- dois cargos de **professor**;",
        "- um de **professor** com outro **técnico ou científico**;",
        "- dois cargos ou empregos de **profissionais de saúde**, com profissões regulamentadas.",
        "",
        "A proibição alcança empregos e funções na administração indireta (XVII)."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Validade máxima de um concurso", verso: "2 anos + prorrogação única por igual período (até 4 anos no total, se o edital fixar 2)." },
        { frente: "Função de confiança pode ser dada a quem não é efetivo?", verso: "Não. Só a servidores ocupantes de cargo efetivo." },
        { frente: "Dois cargos de médico em hospitais públicos?", verso: "Pode, se houver compatibilidade de horários (profissionais de saúde)." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Um edital fixou validade de 1 ano para o concurso. Pela CF, ele pode ser prorrogado:", alternativas: ["por 2 anos", "uma vez, por mais 1 ano", "quantas vezes for necessário", "não pode ser prorrogado", "por até 4 anos"], correta: "B", comentario: "Prorrogável uma vez, por **igual período** ao fixado: mais 1 ano." }
    ]
  });

  A(AP, "Servidores públicos (arts. 39 a 41)", {
    resumo: "Regime jurídico, remuneração, teto e direitos sociais estendidos aos servidores.",
    incidencia: "média",
    fontes: [CF],
    conferir: "Regime jurídico único: em 2024 o STF concluiu o julgamento da ADI 2135 sobre a EC 19/1998 (que tinha retirado a obrigatoriedade do regime único). Confira o resultado e seus efeitos antes da prova.",
    blocos: [
      { tipo: "texto", texto: [
        "- **Regime jurídico**: o art. 39 trata do regime dos servidores da administração direta, autarquias e fundações. A Lei 8.112/1990 é o regime dos servidores federais (estatutário).",
        "- **Remuneração** e **subsídio**: subsídio é parcela única (para membros de Poder, Ministros, Secretários, policiais, entre outros), vedados acréscimos de gratificação ou adicional (art. 39, § 4º).",
        "- **Teto remuneratório** (art. 37, XI): ninguém recebe mais que o subsídio dos Ministros do STF. Nos Estados e Municípios há subtetos.",
        "- Direitos do art. 7º estendidos aos servidores (art. 39, § 3º): salário mínimo, 13º, adicional noturno, salário-família, jornada de 8h/44h, hora extra, férias + 1/3, licença-gestante e paternidade, entre outros."
      ]},
      { tipo: "atencao", texto: "FGTS e seguro-desemprego **não** estão na lista do art. 39, § 3º: o servidor estatutário não tem esses direitos." },
      { tipo: "questao", banca: Q, enunciado: "É direito do art. 7º estendido ao servidor público ocupante de cargo pelo art. 39, § 3º:", alternativas: ["FGTS", "seguro-desemprego", "décimo terceiro salário", "aviso prévio", "participação nos lucros"], correta: "C", comentario: "O 13º está na lista. FGTS, seguro-desemprego e aviso prévio não." }
    ]
  });

  A(AP, "Estabilidade do servidor", {
    resumo: "Três anos de efetivo exercício, avaliação especial e as formas de perder o cargo.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      lei([
        "Art. 41. São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.",
        "§ 1º O servidor público estável só perderá o cargo: I – em virtude de sentença judicial transitada em julgado; II – mediante processo administrativo em que lhe seja assegurada ampla defesa; III – mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa.",
        "§ 4º Como condição para a aquisição da estabilidade, é obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade."
      ], "CF/88, art. 41"),
      { tipo: "tabela", titulo: "Situações especiais", cabecalho: ["Situação", "O que acontece"], linhas: [
        ["Demissão de estável anulada por sentença", "é **reintegrado**; quem ocupava a vaga volta ao cargo de origem, é aproveitado em outro ou posto em disponibilidade (§ 2º)"],
        ["Cargo extinto ou declarado desnecessário", "o estável fica em **disponibilidade**, com remuneração proporcional ao tempo de serviço, até ser aproveitado (§ 3º)"],
        ["Excesso de despesa com pessoal (art. 169, § 4º)", "o estável pode perder o cargo, depois de cortados comissionados e não estáveis"]
      ]},
      { tipo: "atencao", texto: "Estabilidade (3 anos, no **serviço público**) é diferente de estágio probatório (avaliação no **cargo**). E servidor em cargo **em comissão** não adquire estabilidade." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a CF, o servidor estável NÃO pode perder o cargo:", alternativas: ["por sentença judicial transitada em julgado", "por processo administrativo com ampla defesa", "por avaliação periódica de desempenho, na forma de lei complementar", "por decisão discricionária do chefe imediato", "por excesso de despesa com pessoal, nos termos do art. 169"], correta: "D", comentario: "Não há perda do cargo por mera vontade da chefia. As demais hipóteses estão nos arts. 41 e 169." }
    ]
  });

  /* ================= ORGANIZAÇÃO DOS PODERES ================= */

  A(OP, "Poder Legislativo", {
    resumo: "Congresso bicameral: Câmara e Senado, composição, mandatos e competências.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Câmara × Senado", cabecalho: ["", "Câmara dos Deputados", "Senado Federal"], linhas: [
        ["Representa", "o povo", "os Estados e o DF"],
        ["Sistema eleitoral", "proporcional", "majoritário"],
        ["Número", "proporcional à população (mín. 8, máx. 70 por Estado)", "3 por Estado e DF (81)"],
        ["Mandato", "4 anos", "8 anos, renovando 1/3 e 2/3 alternadamente a cada 4 anos"],
        ["Idade mínima", "21 anos", "35 anos"]
      ]},
      { tipo: "texto", titulo: "Competências e fiscalização", texto: [
        "- **Congresso** (art. 49): competências exclusivas por decreto legislativo, como julgar as contas do Presidente e sustar atos do Executivo que exorbitem o poder regulamentar.",
        "- **Câmara** (art. 51): autorizar, por 2/3, a instauração de processo contra o Presidente.",
        "- **Senado** (art. 52): processar e julgar o Presidente nos crimes de responsabilidade; aprovar ministros do STF, diretores do Banco Central e outros.",
        "- O **TCU** auxilia o Congresso no controle externo (art. 71)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Processar e julgar o Presidente da República nos crimes de responsabilidade compete:", alternativas: ["à Câmara dos Deputados", "ao Senado Federal", "ao STF", "ao TCU", "ao Congresso em sessão conjunta"], correta: "B", comentario: "Art. 52, I. A Câmara autoriza (por 2/3); o Senado julga." }
    ]
  });

  A(OP, "Processo legislativo", {
    resumo: "Espécies normativas, quóruns, emenda constitucional, medida provisória e veto.",
    incidencia: "alta",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Espécies (art. 59) e quóruns", cabecalho: ["Espécie", "Aprovação"], linhas: [
        ["Emenda constitucional", "3/5 dos membros, em 2 turnos, em cada Casa"],
        ["Lei complementar", "maioria **absoluta**"],
        ["Lei ordinária", "maioria **simples** (relativa)"],
        ["Lei delegada", "elaborada pelo Presidente, com delegação do Congresso por resolução"],
        ["Medida provisória", "editada pelo Presidente, com força de lei; vale 60 + 60 dias"],
        ["Decreto legislativo e resolução", "competências exclusivas do Congresso e de cada Casa"]
      ]},
      { tipo: "texto", titulo: "Emenda constitucional (art. 60)", texto: [
        "- **Propõem**: 1/3 dos Deputados ou dos Senadores; o Presidente da República; mais da metade das Assembleias Legislativas (cada uma pela maioria relativa).",
        "- **Não pode** ser emendada na vigência de intervenção federal, estado de defesa ou de sítio.",
        "- **Cláusulas pétreas** (§ 4º): não se admite proposta **tendente a abolir** a forma federativa; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.",
        "- A emenda é promulgada pelas Mesas da Câmara e do Senado: **não há sanção nem veto**."
      ]},
      { tipo: "texto", titulo: "Sanção e veto", texto: ["Aprovado o projeto, o Presidente tem **15 dias úteis** para sancionar ou vetar. O silêncio importa sanção (tácita). O veto é apreciado em sessão conjunta em 30 dias e só é derrubado pela **maioria absoluta** de Deputados e Senadores."] },
      { tipo: "dica", texto: "**Medida provisória**: tranca a pauta da Casa em que estiver se não for votada em **45 dias**; perde a eficácia se não for convertida em lei em 60 dias, prorrogáveis uma vez por mais 60." },
      { tipo: "questao", banca: Q, enunciado: "A aprovação de emenda constitucional exige:", alternativas: ["maioria simples em turno único", "maioria absoluta em dois turnos", "3/5 dos membros de cada Casa, em dois turnos", "2/3 dos membros em sessão conjunta", "sanção do Presidente da República"], correta: "C", comentario: "Art. 60, § 2º. E a emenda não passa por sanção." }
    ]
  });

  A(OP, "Poder Executivo", {
    resumo: "Presidente e Vice, eleição, mandato, atribuições e responsabilização.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "texto", texto: [
        "- O Executivo federal é exercido pelo **Presidente da República**, auxiliado pelos **Ministros de Estado** (art. 76).",
        "- Eleição por **maioria absoluta** dos votos válidos, em até dois turnos; mandato de **4 anos**, com uma reeleição permitida.",
        "- Vacância dos dois cargos: assumem, nesta ordem, o Presidente da Câmara, o do Senado e o do STF. Se a vacância ocorrer nos dois primeiros anos, nova eleição direta em 90 dias; nos últimos dois, eleição indireta pelo Congresso em 30 dias (art. 81)."
      ]},
      { tipo: "tabela", titulo: "Responsabilização do Presidente", cabecalho: ["Crime", "Autorização", "Julgamento"], linhas: [["Responsabilidade (impeachment)", "Câmara, por 2/3", "Senado, presidido pelo Presidente do STF"], ["Comum", "Câmara, por 2/3", "STF"]] },
      { tipo: "texto", titulo: "Atribuições privativas (art. 84, exemplos)", texto: ["Nomear e exonerar Ministros; sancionar, promulgar e vetar leis; expedir decretos e regulamentos; editar medidas provisórias; dispor por decreto sobre organização da administração federal (sem aumento de despesa nem criação ou extinção de órgãos); celebrar tratados (sujeitos ao Congresso); exercer o comando supremo das Forças Armadas."] },
      { tipo: "questao", banca: Q, enunciado: "Havendo vacância dos cargos de Presidente e Vice no último ano do mandato, a eleição para os cargos será:", alternativas: ["direta, em 90 dias", "indireta, pelo Congresso, em 30 dias", "dispensada, assumindo o Presidente da Câmara até o fim", "indireta, pelo STF", "direta, em 30 dias"], correta: "B", comentario: "Art. 81, § 1º: nos últimos dois anos, eleição pelo Congresso Nacional em 30 dias." }
    ]
  });

  A(OP, "Poder Judiciário", {
    resumo: "Órgãos, garantias dos juízes, STF, STJ e CNJ.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "Órgãos (art. 92)", cabecalho: ["Órgão", "Papel"], linhas: [
        ["STF", "guarda da Constituição; 11 Ministros"],
        ["CNJ", "controle administrativo e financeiro do Judiciário (não julga processos)"],
        ["STJ", "uniformiza a interpretação da lei federal; no mínimo 33 Ministros"],
        ["Justiça Federal, do Trabalho, Eleitoral e Militar", "justiças especializadas e federal"],
        ["Tribunais e juízes dos Estados e do DF", "justiça comum estadual"]
      ]},
      { tipo: "tabela", titulo: "Garantias dos magistrados (art. 95)", cabecalho: ["Garantia", "Significado"], linhas: [["Vitaliciedade", "no 1º grau, adquirida após 2 anos de exercício; só perde o cargo por sentença judicial transitada em julgado"], ["Inamovibilidade", "não pode ser removido contra a vontade, salvo interesse público"], ["Irredutibilidade de subsídio", "não pode ter a remuneração reduzida"]] },
      { tipo: "texto", titulo: "STF", texto: ["Ministros nomeados pelo Presidente, depois de aprovados pela maioria absoluta do Senado; brasileiros **natos**, com mais de 35 e menos de 70 anos, notável saber jurídico e reputação ilibada (art. 101)."] },
      { tipo: "questao", banca: Q, enunciado: "A vitaliciedade dos juízes de primeiro grau é adquirida após:", alternativas: ["3 anos de exercício", "2 anos de exercício", "a posse", "o estágio probatório de 3 anos", "aprovação do Senado"], correta: "B", comentario: "Art. 95, I: após dois anos de exercício (diferente dos 3 anos da estabilidade do servidor)." }
    ]
  });

  A(OP, "Funções essenciais à Justiça", {
    resumo: "Ministério Público, Advocacia Pública, Advocacia e Defensoria Pública.",
    incidencia: "média",
    fontes: [CF],
    blocos: [
      { tipo: "tabela", titulo: "As quatro funções", cabecalho: ["Instituição", "Papel", "Base"], linhas: [
        ["Ministério Público", "defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis; titular da ação penal pública", "arts. 127 a 130"],
        ["Advocacia Pública", "representa a União (AGU) e os Estados (Procuradorias) judicial e extrajudicialmente; consultoria jurídica", "arts. 131 e 132"],
        ["Advocacia", "o advogado é indispensável à administração da justiça", "art. 133"],
        ["Defensoria Pública", "orientação jurídica e defesa dos necessitados, em todos os graus", "art. 134"]
      ]},
      { tipo: "texto", titulo: "Princípios do Ministério Público", texto: ["Unidade, indivisibilidade e independência funcional (art. 127, § 1º). Membros têm vitaliciedade, inamovibilidade e irredutibilidade de subsídio."] },
      { tipo: "atencao", texto: "O MP **não** integra nenhum dos três Poderes: é instituição permanente e autônoma." },
      { tipo: "questao", banca: Q, enunciado: "A defesa judicial da União é feita pela:", alternativas: ["Defensoria Pública da União", "Advocacia-Geral da União", "Procuradoria-Geral da República", "Polícia Federal", "Ordem dos Advogados do Brasil"], correta: "B", comentario: "Art. 131: a AGU representa a União judicial e extrajudicialmente. A PGR chefia o MPU." }
    ]
  });
})();

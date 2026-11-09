/* Bloco C · Conhecimentos Gerais do Paraná. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-c", "conhecimentos-regionais", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const F = {
    ibge: { titulo: "IBGE Cidades e Estados · Paraná", url: "https://cidades.ibge.gov.br/brasil/pr/panorama" },
    ipardes: { titulo: "IPARDES · Instituto Paranaense de Desenvolvimento Econômico e Social", url: "https://www.ipardes.pr.gov.br/" },
    ippuc: { titulo: "IPPUC · Instituto de Pesquisa e Planejamento Urbano de Curitiba", url: "https://ippuc.org.br/" },
    pr: { titulo: "Portal do Governo do Paraná", url: "https://www.parana.pr.gov.br/" },
  };
  const CONF = "Datas e números foram escritos de memória a partir de obras de história regional. Confira em fonte oficial (IPARDES, IBGE, Arquivo Público do Paraná) antes de decorar.";
  const HI = "História do Paraná";
  const GE = "Geografia do Paraná";
  const CU = "Curitiba";
  const AT = "Atualidades";

  /* ================= HISTÓRIA ================= */

  A(HI, "Ocupação e povoamento", {
    resumo: "Povos indígenas, a busca de ouro no litoral e a fundação de Paranaguá e Curitiba.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.pr],
    blocos: [
      { tipo: "texto", texto: [
        "Antes dos europeus, o território era habitado por povos indígenas como **Guarani**, **Kaingang** e **Xetá**. Jesuítas espanhóis criaram reduções no oeste (Guairá) no início do século XVII, destruídas por **bandeirantes** paulistas.",
        "",
        "A ocupação portuguesa começou pelo **litoral**, movida pela busca de **ouro de aluvião** no século XVII:",
        "- **Paranaguá**: povoação na baía de mesmo nome, elevada a vila em **1648**.",
        "- Da busca de ouro subindo a Serra do Mar surgiu o povoado no planalto que se tornou **Curitiba**, elevada a vila em **1693** (Vila de Nossa Senhora da Luz dos Pinhais).",
        "",
        "Até 1853, a região era a **5ª Comarca da Província de São Paulo**."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Primeira vila do território paranaense", verso: "Paranaguá (1648)." },
        { frente: "O que atraiu os primeiros povoadores ao litoral?", verso: "A mineração de ouro de aluvião, no século XVII." },
        { frente: "Antes de 1853, o Paraná fazia parte de…", verso: "São Paulo (5ª Comarca)." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A atividade que motivou a ocupação inicial do litoral paranaense no século XVII foi:", alternativas: ["o cultivo de café", "a mineração de ouro", "a extração de erva-mate", "a pecuária de corte", "a imigração europeia"], correta: "B", comentario: "A busca de ouro de aluvião levou à fundação de Paranaguá e ao avanço para o planalto." }
    ]
  });

  A(HI, "Ciclos econômicos: ouro, tropeirismo, erva-mate, madeira e café", {
    resumo: "A sucessão de atividades que formaram a economia e as cidades do Paraná.",
    incidencia: "alta",
    conferir: CONF,
    fontes: [F.pr],
    blocos: [
      { tipo: "svg", titulo: "Linha do tempo dos ciclos", legenda: "Datas aproximadas; os ciclos se sobrepõem.", codigo: `
<svg viewBox="0 0 600 190" role="img" aria-label="Linha do tempo: ouro no século 17, tropeirismo nos séculos 18 e 19, erva-mate no século 19, madeira no início do século 20 e café em meados do século 20">
  <line class="ln" x1="20" y1="100" x2="585" y2="100"></line>
  <g class="tx-m" text-anchor="middle"><text x="40" y="125">1600</text><text x="160" y="125">1700</text><text x="280" y="125">1800</text><text x="400" y="125">1900</text><text x="520" y="125">2000</text></g>
  <rect class="fd-d" x="60" y="70" width="90" height="22" rx="4"></rect><text class="tx" x="105" y="86" text-anchor="middle" style="font-size:12px">ouro</text>
  <rect class="fd-d" x="190" y="45" width="190" height="22" rx="4"></rect><text class="tx" x="285" y="61" text-anchor="middle" style="font-size:12px">tropeirismo</text>
  <rect class="fd-d" x="310" y="140" width="130" height="22" rx="4"></rect><text class="tx" x="375" y="156" text-anchor="middle" style="font-size:12px">erva-mate</text>
  <rect class="fd-d" x="400" y="70" width="80" height="22" rx="4"></rect><text class="tx" x="440" y="86" text-anchor="middle" style="font-size:12px">madeira</text>
  <rect class="fd-d" x="445" y="165" width="80" height="22" rx="4"></rect><text class="tx" x="485" y="181" text-anchor="middle" style="font-size:12px">café</text>
</svg>` },
      { tipo: "tabela", titulo: "Os ciclos", cabecalho: ["Ciclo", "Época", "Marcas"], linhas: [
        ["Ouro", "século XVII", "litoral e primeiro planalto; fundação de Paranaguá e Curitiba"],
        ["Tropeirismo", "séculos XVIII e XIX", "tropas de gado e mulas do Sul para Sorocaba (SP); fazendas nos **Campos Gerais**; origem de Castro, Lapa, Ponta Grossa, Palmeira"],
        ["Erva-mate", "século XIX e início do XX", "principal economia da Província; engenhos em Curitiba e no litoral; exportação para Argentina, Uruguai e Chile; \"barões do mate\""],
        ["Madeira", "início do século XX", "exploração da **araucária**; impulso das ferrovias; serrarias no Sul e no Centro"],
        ["Café", "décadas de 1930 a 1970", "ocupação do **Norte** por companhias colonizadoras; Londrina e Maringá; a **geada negra de 1975** acelerou o fim do ciclo"]
      ]},
      { tipo: "texto", titulo: "Depois do café", texto: ["A partir dos anos 1970, o Paraná se modernizou com **soja**, **milho**, **cooperativas agroindustriais**, avicultura e suinocultura, e com a industrialização da Região Metropolitana de Curitiba."] },
      { tipo: "questao", banca: Q, enunciado: "O ciclo econômico que deu origem a cidades como Castro, Lapa e Ponta Grossa, nos Campos Gerais, foi o:", alternativas: ["do ouro", "do tropeirismo", "da erva-mate", "do café", "da soja"], correta: "B", comentario: "As tropas que iam do Sul a Sorocaba paravam nos Campos Gerais, onde surgiram fazendas e vilas." }
    ]
  });

  A(HI, "Emancipação política da Província", {
    resumo: "A criação da Província do Paraná em 1853, separada de São Paulo.",
    incidencia: "alta",
    conferir: CONF,
    fontes: [F.pr],
    blocos: [
      { tipo: "texto", texto: [
        "A **Província do Paraná** foi criada pela **Lei nº 704, de 29 de agosto de 1853**, desmembrando a 5ª Comarca da Província de **São Paulo**. Foi instalada em **19 de dezembro de 1853** (data comemorada como emancipação política do Paraná).",
        "",
        "- **Capital**: Curitiba.",
        "- **Primeiro presidente da Província**: **Zacarias de Góis e Vasconcelos**.",
        "- Contexto: a força econômica da erva-mate e do tropeirismo, a distância da capital paulista e o interesse do Império em ter presença no Sul depois de conflitos como a Revolução Farroupilha."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Ano de criação da Província do Paraná", verso: "1853 (Lei 704, de 29 de agosto)." },
        { frente: "Data da instalação (Dia do Paraná)", verso: "19 de dezembro de 1853." },
        { frente: "Primeiro presidente da Província", verso: "Zacarias de Góis e Vasconcelos." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A Província do Paraná foi criada, em 1853, por desmembramento da Província de:", alternativas: ["Santa Catarina", "Rio Grande do Sul", "São Paulo", "Mato Grosso", "Minas Gerais"], correta: "C", comentario: "Era a 5ª Comarca de São Paulo." }
    ]
  });

  A(HI, "Imigração", {
    resumo: "Alemães, poloneses, ucranianos, italianos, japoneses e holandeses na formação do Paraná.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.pr],
    blocos: [
      { tipo: "tabela", titulo: "Principais grupos", cabecalho: ["Grupo", "Período", "Regiões marcantes"], linhas: [
        ["Alemães", "a partir de meados do século XIX", "Curitiba, Rio Negro, Ponta Grossa"],
        ["Poloneses", "a partir de 1871", "Curitiba e arredores, Campos Gerais, Sul do Estado"],
        ["Italianos", "fim do século XIX", "Colônia Santa Felicidade (Curitiba), litoral (Morretes)"],
        ["Ucranianos", "a partir dos anos 1890", "Prudentópolis, Mallet, Sul e Centro do Estado"],
        ["Japoneses", "século XX", "Norte do Paraná (Londrina, Assaí, Maringá)"],
        ["Holandeses", "século XX", "Carambeí, Castrolanda, Arapoti (cooperativas leiteiras)"]
      ]},
      { tipo: "texto", texto: ["A imigração foi incentivada pelo governo provincial e imperial para povoar o território, produzir alimentos para as cidades e substituir a mão de obra escravizada. Deixou marcas na arquitetura, na culinária, na religião e nas cooperativas."] },
      { tipo: "questao", banca: Q, enunciado: "O município paranaense conhecido pela forte presença de imigrantes ucranianos é:", alternativas: ["Carambeí", "Prudentópolis", "Assaí", "Morretes", "Santa Felicidade"], correta: "B", comentario: "Prudentópolis é referência da imigração ucraniana." }
    ]
  });

  A(HI, "Conflitos: Revolução Federalista e Contestado", {
    resumo: "O Cerco da Lapa (1894) e a Guerra do Contestado (1912-1916).",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.pr],
    blocos: [
      { tipo: "tabela", titulo: "Os dois conflitos", cabecalho: ["", "Revolução Federalista", "Guerra do Contestado"], linhas: [
        ["Época", "1893 a 1895", "1912 a 1916"],
        ["Causa", "disputa entre federalistas (maragatos) e republicanos (pica-paus) no início da República", "disputa de terras entre Paraná e Santa Catarina; expulsão de posseiros pela ferrovia e por madeireira estrangeira; movimento messiânico"],
        ["No Paraná", "**Cerco da Lapa** (1894), resistência do general Gomes Carneiro; morte do **Barão do Serro Azul**, executado em 1894", "luta de sertanejos liderados por monges (José Maria) contra forças do governo"],
        ["Desfecho", "vitória do governo de Floriano Peixoto", "derrota dos sertanejos; **acordo de limites** entre PR e SC em 1916"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "A Guerra do Contestado ocorreu em região disputada entre o Paraná e:", alternativas: ["São Paulo", "Mato Grosso do Sul", "Santa Catarina", "Rio Grande do Sul", "Paraguai"], correta: "C", comentario: "O conflito terminou com o acordo de limites PR-SC de 1916." }
    ]
  });

  /* ================= GEOGRAFIA ================= */

  A(GE, "Relevo: litoral, Serra do Mar e planaltos", {
    resumo: "As cinco unidades de relevo do Paraná, de leste para oeste.",
    incidencia: "alta",
    conferir: "A altitude exata do Pico Paraná varia entre fontes. Confira o dado oficial do IBGE.",
    fontes: [F.ipardes],
    blocos: [
      { tipo: "svg", titulo: "Perfil leste-oeste do Paraná", legenda: "Do mar para o interior: planície, serra e três planaltos separados por escarpas; o terreno desce suavemente para o oeste, rumo ao rio Paraná.", codigo: `
<svg viewBox="0 0 600 240" role="img" aria-label="Perfil de relevo: litoral baixo à direita, Serra do Mar alta, primeiro planalto, escarpa devoniana, segundo planalto, escarpa da Serra Geral e terceiro planalto descendo para oeste">
  <path class="fd-d" d="M10,150 L150,130 L170,120 L210,100 L230,98 L250,70 L300,70 L330,74 L360,60 L420,60 L440,45 L470,40 L490,20 L510,45 L540,180 L590,190 L590,215 L10,215 Z"></path>
  <g class="tx-m" text-anchor="middle">
    <text x="90" y="232">3º planalto</text><text x="275" y="232">2º planalto</text><text x="395" y="232">1º planalto</text><text x="497" y="232">Serra do Mar</text><text x="565" y="232">litoral</text>
  </g>
  <text class="tx" x="245" y="60" text-anchor="middle" style="font-size:11px">Serra Geral</text>
  <text class="tx" x="360" y="50" text-anchor="middle" style="font-size:11px">Escarpa Devoniana</text>
  <text class="tx-m" x="20" y="22">oeste</text><text class="tx-m" x="580" y="22" text-anchor="end">leste</text>
</svg>` },
      { tipo: "tabela", titulo: "Unidades de relevo", cabecalho: ["Unidade", "Características", "Cidades"], linhas: [
        ["Planície litorânea", "faixa baixa, baías de Paranaguá e Guaratuba, mangues", "Paranaguá, Matinhos, Guaratuba"],
        ["Serra do Mar", "escarpa que separa litoral e planalto; ponto mais alto do Estado: **Pico Paraná**", "Morretes, Antonina (ao pé da serra)"],
        ["Primeiro Planalto (de Curitiba)", "relevo suave, altitude média de cerca de 900 m", "Curitiba e Região Metropolitana"],
        ["Segundo Planalto (de Ponta Grossa)", "separado do primeiro pela **Escarpa Devoniana**; Campos Gerais, Vila Velha", "Ponta Grossa, Castro"],
        ["Terceiro Planalto (de Guarapuava)", "o maior; separado do segundo pela escarpa da **Serra Geral** (da Esperança); solos de basalto (terra roxa)", "Guarapuava, Cascavel, Londrina, Maringá, Foz do Iguaçu"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "A cidade de Curitiba está localizada no:", alternativas: ["planície litorânea", "Primeiro Planalto", "Segundo Planalto", "Terceiro Planalto", "Serra do Mar"], correta: "B", comentario: "Também chamado Planalto de Curitiba." }
    ]
  });

  A(GE, "Hidrografia", {
    resumo: "Rios que correm para o interior, a bacia do Paraná, o Iguaçu e Itaipu.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.ipardes],
    blocos: [
      { tipo: "texto", texto: [
        "A maioria dos rios paranaenses nasce perto da Serra do Mar e corre para **oeste**, rumo ao **rio Paraná** (bacia do Paraná/Prata). Só os rios curtos do litoral vão direto ao Atlântico.",
        "",
        "Rios principais:",
        "- **Iguaçu**: nasce na Região Metropolitana de Curitiba, atravessa o Estado e forma as **Cataratas do Iguaçu** na fronteira com a Argentina.",
        "- **Ivaí**, **Tibagi** e **Piquiri**: afluentes que cortam o centro e o norte.",
        "- **Paranapanema**: divisa com São Paulo.",
        "- **Paraná**: divisa com Mato Grosso do Sul e Paraguai; nele está a usina de **Itaipu** (binacional, Brasil-Paraguai).",
        "",
        "Os rios de planalto, com muitas quedas, dão ao Paraná grande potencial **hidrelétrico**."
      ]},
      { tipo: "questao", banca: Q, enunciado: "As Cataratas do Iguaçu ficam na fronteira do Brasil com:", alternativas: ["o Paraguai", "o Uruguai", "a Argentina", "a Bolívia", "o Chile"], correta: "C", comentario: "As cataratas estão no rio Iguaçu, na divisa com a Argentina; Itaipu (no rio Paraná) é com o Paraguai." }
    ]
  });

  A(GE, "Clima e vegetação", {
    resumo: "Clima subtropical (Cfa e Cfb), geadas e as formações da Mata Atlântica.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.ipardes],
    blocos: [
      { tipo: "tabela", titulo: "Clima (classificação de Köppen)", cabecalho: ["Tipo", "Características", "Onde"], linhas: [
        ["Cfa (subtropical úmido)", "verões quentes, chuva bem distribuída", "litoral, Norte e Oeste"],
        ["Cfb (temperado)", "verões amenos, invernos frios com geadas", "planaltos mais altos: Curitiba, Campos Gerais, Sul"]
      ]},
      { tipo: "tabela", titulo: "Vegetação (todas do bioma Mata Atlântica, além dos campos)", cabecalho: ["Formação", "Onde"], linhas: [
        ["Floresta Ombrófila Densa", "litoral e Serra do Mar"],
        ["Floresta Ombrófila Mista (Mata de Araucária)", "planaltos do Centro-Sul; a araucária é símbolo do Estado"],
        ["Floresta Estacional Semidecidual", "Norte e Oeste (muito desmatada pela agricultura)"],
        ["Campos naturais", "Campos Gerais e Guarapuava"],
        ["Mangues e restingas", "litoral"]
      ]},
      { tipo: "atencao", texto: "A **araucária** (pinheiro-do-paraná) está ameaçada de extinção pela exploração madeireira do século XX. A gralha-azul, que espalha suas sementes, é a ave símbolo do Paraná." },
      { tipo: "questao", banca: Q, enunciado: "A Floresta Ombrófila Mista, característica dos planaltos do Paraná, é também chamada de:", alternativas: ["Mata dos Cocais", "Mata de Araucária", "Cerrado", "Caatinga", "Floresta Amazônica"], correta: "B", comentario: "A presença da araucária dá o nome popular." }
    ]
  });

  A(GE, "População e urbanização", {
    resumo: "População do Estado, urbanização, número de municípios e maiores cidades.",
    incidencia: "média",
    conferir: "Dados do Censo 2022 do IBGE. Confira os números atualizados em cidades.ibge.gov.br antes da prova.",
    fontes: [F.ibge],
    blocos: [
      { tipo: "tabela", titulo: "Números do Censo 2022 (IBGE)", cabecalho: ["Dado", "Valor aproximado"], linhas: [
        ["População do Paraná", "cerca de 11,4 milhões de habitantes"],
        ["População de Curitiba", "cerca de 1,8 milhão"],
        ["Número de municípios", "399"],
        ["Grau de urbanização", "acima de 85%"]
      ]},
      { tipo: "texto", texto: [
        "Maiores cidades: **Curitiba**, **Londrina**, **Maringá**, **Ponta Grossa**, **Cascavel**, **São José dos Pinhais** e **Foz do Iguaçu**.",
        "",
        "A urbanização se acelerou a partir dos anos 1970, com a mecanização do campo (soja) e a crise do café, que levaram muita gente do interior para as cidades e para outros Estados. A **Região Metropolitana de Curitiba** concentra a maior parte da população urbana."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O Paraná possui, segundo o IBGE:", alternativas: ["295 municípios", "399 municípios", "497 municípios", "853 municípios", "645 municípios"], correta: "B", comentario: "São 399 municípios. (295 é SC, 497 RS, 853 MG, 645 SP.)" }
    ]
  });

  A(GE, "Economia e regiões do Estado", {
    resumo: "Agronegócio, cooperativas, indústria automotiva, Porto de Paranaguá e energia.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.ipardes],
    blocos: [
      { tipo: "tabela", titulo: "Setores", cabecalho: ["Setor", "Destaques"], linhas: [
        ["Agronegócio", "grande produtor de **soja**, milho, trigo, feijão e de **carne de frango**; forte presença de **cooperativas** agroindustriais"],
        ["Indústria", "polo **automotivo** na RMC (São José dos Pinhais e Curitiba); refinaria em **Araucária**; papel e celulose; alimentos"],
        ["Logística", "**Porto de Paranaguá**, um dos maiores exportadores de grãos do país"],
        ["Energia", "usinas hidrelétricas, incluindo **Itaipu** (binacional) e as da Copel"],
        ["Turismo", "Foz do Iguaçu (Cataratas), Curitiba, Vila Velha, litoral e Ilha do Mel"]
      ]},
      { tipo: "texto", titulo: "Regiões", texto: ["O IBGE divide o Estado em **mesorregiões** e regiões geográficas intermediárias e imediatas. Em termos práticos: **Leste** (Curitiba, RMC e litoral: indústria, serviços, porto), **Norte** (Londrina, Maringá: agricultura e agroindústria), **Oeste** (Cascavel, Toledo, Foz: grãos, carnes e cooperativas), **Centro e Campos Gerais** (Ponta Grossa, Guarapuava: agroindústria, papel), **Sul e Sudoeste** (madeira, agricultura familiar)."] },
      { tipo: "questao", banca: Q, enunciado: "O principal porto do Paraná, importante exportador de grãos, é o de:", alternativas: ["Santos", "Itajaí", "Paranaguá", "Rio Grande", "São Francisco do Sul"], correta: "C", comentario: "O Porto de Paranaguá é o principal do Estado." }
    ]
  });

  /* ================= CURITIBA ================= */

  A(CU, "Formação histórica de Curitiba", {
    resumo: "Da vila de 1693 à capital da Província em 1853.",
    incidencia: "alta",
    conferir: CONF,
    fontes: [F.ippuc],
    blocos: [
      { tipo: "texto", texto: [
        "- Povoamento no planalto a partir da busca de ouro no século XVII.",
        "- **29 de março de 1693**: elevação a vila, com o nome de **Vila de Nossa Senhora da Luz dos Pinhais**. É a data de aniversário da cidade.",
        "- Século XVIII e XIX: ponto de passagem do **tropeirismo** e, depois, centro da economia da **erva-mate**.",
        "- **1853**: torna-se **capital** da nova Província do Paraná.",
        "- Fim do século XIX: chegada da **ferrovia Paranaguá–Curitiba** (inaugurada em 1885) e de imigrantes europeus, que mudaram a paisagem e a economia."
      ]},
      { tipo: "dica", texto: "O nome \"Curitiba\" é atribuído à língua tupi-guarani e costuma ser associado a \"muito pinhão\" ou \"pinheiral\", referência às araucárias." },
      { tipo: "questao", banca: Q, enunciado: "Curitiba se tornou capital em 1853, quando:", alternativas: ["foi proclamada a República", "foi criada a Província do Paraná", "chegou a ferrovia", "terminou o Contestado", "foi elevada a vila"], correta: "B", comentario: "Com a emancipação da Província, Curitiba virou capital. A elevação a vila foi em 1693." }
    ]
  });

  A(CU, "Planejamento urbano e transporte", {
    resumo: "Plano Agache, Plano Diretor de 1966, IPPUC, eixos estruturais, canaletas e estação-tubo.",
    incidencia: "alta",
    conferir: CONF,
    fontes: [F.ippuc],
    blocos: [
      { tipo: "tabela", titulo: "Marcos do planejamento", cabecalho: ["Ano", "Marco"], linhas: [
        ["1943", "**Plano Agache**: primeiro plano urbanístico, com avenidas radiais e perimetrais"],
        ["1965", "criação do **IPPUC** (Instituto de Pesquisa e Planejamento Urbano de Curitiba)"],
        ["1966", "**Plano Diretor**: crescimento linear por **eixos estruturais** integrando uso do solo, sistema viário e transporte"],
        ["1972", "**Rua XV de Novembro** fechada para carros: primeiro grande calçadão do país (Rua das Flores)"],
        ["1974", "ônibus **expresso** em canaletas exclusivas nos eixos"],
        ["1991", "**estação-tubo** e linha Ligeirinho: embarque em nível e pagamento antecipado"],
        ["anos 2000-2010", "**Linha Verde** (antiga BR-116 transformada em avenida)"]
      ]},
      { tipo: "texto", titulo: "O modelo de Curitiba", texto: [
        "O sistema de ônibus com canaletas exclusivas, estações de embarque e tarifa integrada (Rede Integrada de Transporte, **RIT**) inspirou o modelo **BRT** (Bus Rapid Transit) adotado em várias cidades do mundo.",
        "",
        "O **sistema trinário** dos eixos: uma via central com canaleta exclusiva para o expresso e vias rápidas paralelas em sentidos opostos."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O órgão municipal responsável pelo planejamento urbano de Curitiba, criado em 1965, é o:", alternativas: ["IPARDES", "IPPUC", "URBS", "COHAB", "IBGE"], correta: "B", comentario: "IPPUC: Instituto de Pesquisa e Planejamento Urbano de Curitiba. (A URBS gerencia o transporte.)" }
    ]
  });

  A(CU, "Meio ambiente e parques", {
    resumo: "Parques que controlam cheias, Jardim Botânico e programas de reciclagem.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.ippuc],
    blocos: [
      { tipo: "texto", texto: [
        "Muitos parques de Curitiba foram criados ao longo de rios, com **lagos que controlam enchentes** e, ao mesmo tempo, oferecem lazer: **Barigui**, **São Lourenço**, **Tingui**, **Tanguá**, **Iguaçu**.",
        "",
        "Marcos:",
        "- **Jardim Botânico** (1991), com a estufa de vidro e metal, cartão-postal da cidade.",
        "- **Ópera de Arame** e **Pedreira Paulo Leminski** (1992), em antigas pedreiras.",
        "- **Universidade Livre do Meio Ambiente (Unilivre)** (1992).",
        "- Bosques temáticos ligados à imigração (Bosque Alemão, Bosque do Papa, Memorial Ucraniano).",
        "",
        "Programas: **Lixo que não é Lixo** (1989), de separação do lixo reciclável, e **Câmbio Verde**, troca de recicláveis por alimentos."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Uma função importante dos lagos dos parques de Curitiba, como o Barigui, é:", alternativas: ["abastecer a cidade de água potável", "controlar enchentes", "gerar energia elétrica", "irrigar plantações", "servir de porto"], correta: "B", comentario: "Os lagos funcionam como bacias de contenção de cheias." }
    ]
  });

  A(CU, "Cultura e turismo", {
    resumo: "Festival de Teatro, Museu Oscar Niemeyer, Teatro Guaíra, Santa Felicidade e Largo da Ordem.",
    incidencia: "média",
    conferir: CONF,
    fontes: [F.ippuc],
    blocos: [
      { tipo: "tabela", titulo: "Atrativos e eventos", cabecalho: ["Atrativo", "O que é"], linhas: [
        ["Festival de Teatro de Curitiba", "um dos maiores festivais de teatro do país, realizado desde 1992"],
        ["Museu Oscar Niemeyer (MON)", "museu de arte projetado por Niemeyer (o \"Olho\"), inaugurado em 2002"],
        ["Teatro Guaíra", "principal teatro do Estado, sede do Balé Teatro Guaíra"],
        ["Largo da Ordem", "centro histórico, com feira de artesanato aos domingos"],
        ["Santa Felicidade", "bairro de origem italiana, conhecido pelos restaurantes"],
        ["Rua XV de Novembro", "calçadão e Boca Maldita"],
        ["Linha Turismo", "ônibus que percorre os principais pontos turísticos"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O museu de arte de Curitiba projetado por Oscar Niemeyer é conhecido popularmente como:", alternativas: ["Ópera de Arame", "Museu do Olho", "Estação-tubo", "Pedreira", "Memorial Ucraniano"], correta: "B", comentario: "O MON tem um anexo em forma de olho." }
    ]
  });

  /* ================= ATUALIDADES ================= */

  const ROTEIRO = "Atualidades mudam a cada mês. Este assunto é um roteiro de estudo: complete com notícias dos 12 meses antes da prova, de fontes oficiais (Agência Estadual de Notícias, IBGE, IPARDES) e jornais regionais.";

  A(AT, "Política e economia", {
    resumo: "Como acompanhar a política e a economia do Paraná e de Curitiba para a prova.",
    incidencia: "média",
    conferir: ROTEIRO,
    fontes: [F.pr, F.ipardes],
    blocos: [
      { tipo: "texto", texto: [
        "O que acompanhar:",
        "- **Governo do Estado e Prefeitura**: programas novos, concursos, obras grandes (rodovias, porto, saneamento), parcerias e concessões.",
        "- **Assembleia Legislativa e Câmara Municipal**: leis aprovadas que afetam servidores e serviços.",
        "- **Economia**: PIB estadual (IPARDES), emprego, exportações do agronegócio, safra, investimentos industriais na RMC.",
        "- **Eleições**: resultados estaduais e municipais do último pleito."
      ]},
      { tipo: "passos", titulo: "Rotina sugerida", itens: ["Assine o boletim da **Agência Estadual de Notícias** (aen.pr.gov.br).", "Uma vez por semana, anote 3 fatos: o quê, por que importa, qual órgão ou lei está envolvido.", "Guarde um dado de cada tema com fonte e data.", "Revise tudo nas duas últimas semanas antes da prova."] },
      { tipo: "questao", banca: Q, enunciado: "O órgão estadual que produz estatísticas econômicas e sociais oficiais do Paraná, como o PIB estadual, é o:", alternativas: ["IPPUC", "IPARDES", "COPEL", "SANEPAR", "DETRAN"], correta: "B", comentario: "Instituto Paranaense de Desenvolvimento Econômico e Social." }
    ]
  });

  A(AT, "Meio ambiente e sustentabilidade", {
    resumo: "Temas ambientais do Paraná para acompanhar: araucária, água, clima e energia.",
    incidencia: "média",
    conferir: ROTEIRO,
    fontes: [F.pr],
    blocos: [
      { tipo: "texto", texto: [
        "Temas recorrentes:",
        "- **Mata de Araucária** e Mata Atlântica: desmatamento, unidades de conservação, recuperação.",
        "- **Recursos hídricos**: crises hídricas recentes na RMC, qualidade dos rios (o Iguaçu já figurou entre os mais poluídos do país), saneamento.",
        "- **Eventos climáticos**: estiagens, enchentes, geadas e seus efeitos na agricultura.",
        "- **Energia**: hidrelétricas, solar e biogás no agronegócio.",
        "- **Litoral**: obras costeiras, erosão e proteção da Baía de Paranaguá e da Ilha do Mel."
      ]},
      { tipo: "dica", texto: "Junte com a matéria de Geografia (clima e vegetação) e com o tema federal de Desenvolvimento Sustentável: a prova costuma misturar." },
      { tipo: "questao", banca: Q, enunciado: "A espécie vegetal símbolo do Paraná, ameaçada pela exploração madeireira, é a:", alternativas: ["peroba", "araucária", "ipê-amarelo", "pau-brasil", "jacarandá"], correta: "B", comentario: "A araucária (pinheiro-do-paraná)." }
    ]
  });

  A(AT, "Ciência, tecnologia e sociedade", {
    resumo: "Inovação, universidades públicas, governo digital e temas sociais no Paraná.",
    incidencia: "média",
    conferir: ROTEIRO,
    fontes: [F.pr],
    blocos: [
      { tipo: "texto", texto: [
        "Temas para acompanhar:",
        "- **Universidades e institutos públicos**: UFPR (a mais antiga do país em funcionamento contínuo, segundo a própria instituição), UTFPR, IFPR e as universidades estaduais (UEL, UEM, UEPG, Unioeste, Unicentro, UENP, Unespar).",
        "- **Inovação**: parques tecnológicos, startups, agricultura de precisão, Tecpar.",
        "- **Governo digital**: serviços públicos online do Estado e da Prefeitura, uso de dados e inteligência artificial no setor público.",
        "- **Sociedade**: educação básica (indicadores como o IDEB), saúde pública, segurança e programas sociais."
      ]},
      { tipo: "questao", banca: Q, enunciado: "É universidade pública federal com sede no Paraná:", alternativas: ["UEL", "UEM", "UTFPR", "Unioeste", "UEPG"], correta: "C", comentario: "UTFPR é federal. As demais são estaduais." }
    ]
  });
})();

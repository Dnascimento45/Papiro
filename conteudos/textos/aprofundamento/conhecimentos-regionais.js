/* Aprofundamento · Bloco C: Conhecimentos Gerais do Paraná (história, geografia, Curitiba e atualidades).
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/conhecimentos-regionais.js.
   Datas e números conferidos em fonte aberta (Wikipédia, verbetes Paraná e Curitiba); o que varia ou não foi confirmado fica como "conferir". */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-c/conhecimentos-regionais/${caminho}`, { livros: LIVROS, blocos });
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
    { titulo: "IBGE Cidades e Estados · Paraná", url: "https://www.ibge.gov.br/cidades-e-estados/pr.html", nota: "População, área, municípios e indicadores oficiais e atualizados." },
    { titulo: "Atlas Geográfico do Paraná", autor: "ITCG / Governo do Estado", nota: "Mapas de relevo, hidrografia, clima e vegetação do Estado." },
    { titulo: "História do Paraná", autor: "Altiva Pilatti Balhana, Brasil Pinheiro Machado e Cecília Maria Westphalen", nota: "Obra clássica de referência para a história regional." },
    { titulo: "Curitiba · Instituto de Pesquisa e Planejamento Urbano (IPPUC)", url: "https://ippuc.org.br", nota: "Dados e história do planejamento urbano da cidade." },
    { titulo: "Agência Estadual de Notícias do Paraná", url: "https://www.aen.pr.gov.br", nota: "Para atualidades regionais; leia os últimos 12 meses antes da prova." },
  ];

  /* ================= HISTÓRIA DO PARANÁ ================= */

  A("historia-do-parana/ocupacao-e-povoamento", [
    aprofundar([
      "### Povos originários",
      "Antes dos europeus, o território era habitado por povos **Jê** (**Kaingang** e **Xokleng**, no planalto e nos campos), **Guarani** (litoral e oeste) e outros. A herança aparece em **nomes de lugares** (Paraná, Iguaçu, Curitiba, Tibagi) e em comunidades indígenas **ainda presentes**.",
      "",
      "### Presença espanhola",
      "No século XVI e início do XVII, a região do **Guairá** (oeste e norte) recebeu cidades espanholas (**Ciudad Real del Guairá**, **Vila Rica do Espírito Santo**) e **reduções jesuíticas**. Foram **destruídas pelas bandeiras** paulistas (**1628 a 1631**), que escravizaram indígenas.",
      "",
      "### Portugueses e ouro de aluvião",
      "- No **litoral**, a busca de **ouro de lavagem** atraiu povoadores no século XVII. **Paranaguá** é o primeiro núcleo, **elevada a vila em 1648**.",
      "- No **planalto**, surgem os arraiais de mineração que dão origem a **Curitiba**, elevada a **vila em 1693** (**Nossa Senhora da Luz dos Pinhais**), em **29 de março de 1693**.",
      "- O **ouro** declina com a descoberta das **Minas Gerais**, e a economia se volta ao **tropeirismo**.",
      "",
      "### Divisão administrativa",
      "O território pertenceu à **Capitania de São Paulo**. A **Comarca de Paranaguá e Curitiba** (1812) preparou a **emancipação** de 1853.",
      "",
      "### Povoamento do interior",
      "- **Campos Gerais** (Ponta Grossa, Castro, Lapa): pecuária e **rotas de tropeiros**.",
      "- **Norte**: colonização do século XX (café), com a **Companhia de Terras Norte do Paraná**.",
      "- **Sudoeste e oeste**: colonização por **gaúchos e catarinenses**, sobretudo a partir da **década de 1940**.",
    ]),
    atencao("**Paranaguá (1648)** antecede **Curitiba (1693)** como vila. O **Guairá espanhol** foi destruído pelos **bandeirantes**. Datas de fundação (1550, 1654, 1661) variam entre fontes: **confira** o que o edital adota.", "Conferir"),
    q("O primeiro núcleo de povoamento do litoral paranaense, que foi elevado a vila em 1648, é:", ["Curitiba", "Paranaguá", "Londrina", "Ponta Grossa", "Guaratuba"], "B", "Paranaguá, no litoral, antecede Curitiba."),
    ce("A região do Guairá, no oeste e norte do atual Paraná, abrigou cidades e reduções espanholas que foram destruídas pelas bandeiras paulistas no século XVII.", "Certo", "Entre 1628 e 1631."),
    q("Curitiba foi elevada à condição de vila em:", ["1553", "1648", "1693", "1842", "1853"], "C", "Em 1842, tornou-se cidade; em 1853, capital da nova Província."),
  ]);

  A("historia-do-parana/emancipacao-politica-da-provincia", [
    aprofundar([
      "### A criação da Província",
      "- Até 1853, o território era a **5ª Comarca de São Paulo**, a **Comarca de Paranaguá e Curitiba**.",
      "- A **Lei Imperial nº 704, de 29 de agosto de 1853**, desmembrou a comarca de São Paulo e criou a **Província do Paraná**, no reinado de **D. Pedro II**.",
      "- O **primeiro presidente** da Província foi **Zacarias de Góis e Vasconcelos**, que tomou posse em **19 de dezembro de 1853**, data lembrada como o **Dia do Paraná**, feriado estadual.",
      "- A **capital** foi **Curitiba**. Houve disputa entre Curitiba e Paranaguá pela sede, e a escolha de Curitiba se deu pela posição central no planalto.",
      "",
      "### Motivos",
      "A elite local, ligada à pecuária e à erva-mate, queria **autonomia administrativa e econômica**. A **distância** de São Paulo e a **diferença** de interesses regionais pesaram na decisão do Império.",
      "",
      "### Depois da emancipação",
      "- Estruturação da **administração provincial** e do **Legislativo**.",
      "- Com a **República** (1889), a Província passou a **Estado**.",
      "- **1889/1891**: Constituição estadual; **1989**: Constituição do Estado do Paraná.",
      "",
      "### Divisas",
      "- **Paraná × Santa Catarina**: disputa de limites, resolvida pelo **Acordo de 1916** após a **Guerra do Contestado**.",
      "- **Paraná × São Paulo**: **Rio Paranapanema**, no norte.",
    ]),
    atencao("A **data da lei** (29 de agosto de 1853) é diferente da **data da posse** (19 de dezembro de 1853), que é o **Dia do Paraná**. O primeiro presidente foi **Zacarias de Góis e Vasconcelos**."),
    q("A Província do Paraná foi criada em 1853, por lei imperial, por desmembramento da Província de:", ["Santa Catarina", "São Paulo", "Rio Grande do Sul", "Minas Gerais", "Rio de Janeiro"], "B", "Lei Imperial nº 704, de 29/8/1853."),
    ce("O primeiro presidente da Província do Paraná foi Zacarias de Góis e Vasconcelos, que tomou posse em 19 de dezembro de 1853.", "Certo", "A data é lembrada como Dia do Paraná."),
    q("A capital da Província do Paraná, a partir de 1853, foi:", ["Paranaguá", "Ponta Grossa", "Curitiba", "Londrina", "Guarapuava"], "C", "Curitiba foi escolhida capital da província."),
  ]);

  A("historia-do-parana/ciclos-economicos-ouro-tropeirismo-erva-mate-madeira-e-cafe", [
    aprofundar([
      "### Sucessão de atividades",
    ]),
    {
      tipo: "tabela",
      titulo: "Os ciclos econômicos do Paraná",
      cabecalho: ["Ciclo", "Quando", "Onde", "Marcas"],
      linhas: [
        ["Ouro de aluvião", "Século XVII", "Litoral e primeiro planalto (Paranaguá, Curitiba)", "Primeiros povoamentos; declínio com as Minas Gerais"],
        ["Tropeirismo e pecuária", "Séculos XVIII e XIX", "Campos Gerais (Lapa, Castro, Ponta Grossa)", "Caminho de tropas do Sul a Sorocaba, fazendas de criação, cidades de pouso"],
        ["Erva-mate", "Fim do século XIX até o início do XX", "Planalto e litoral (Curitiba, Paranaguá)", "Principal produto de exportação; Estrada da Graciosa; ferrovia Paranaguá–Curitiba (1885)"],
        ["Madeira (pinheiro)", "Fim do século XIX até meados do XX", "Interior, ao longo das ferrovias", "Exploração da araucária; serrarias; devastação da floresta"],
        ["Café", "A partir de 1920 (auge até os anos 1970)", "Norte do Paraná (Londrina, Maringá)", "Terra roxa, colonização planejada, Companhia de Terras Norte do Paraná"],
      ],
    },
    aprofundar([
      "### Observações",
      "- **Tropeirismo**: as tropas de **muares e gado** vinham do **Rio Grande do Sul** a **Sorocaba (SP)**, parando em **pousos** que viraram cidades. Foi decisivo para a ocupação dos **Campos Gerais**.",
      "- **Erva-mate**: a **Estrada da Graciosa** (1873) e a **ferrovia Paranaguá–Curitiba** (1885) ligaram o planalto ao **porto**. Curitiba teve **engenhos** de beneficiamento, e a elite do mate financiou a modernização urbana.",
      "- **Madeira**: a **ferrovia** abriu o interior. A **Companhia Lumber** (ligada à **Brazil Railway**) explorou a madeira no **Contestado**, o que contribuiu para o conflito.",
      "- **Café**: a **geada negra de 1975** devastou os cafezais e acelerou a **substituição** por **soja**, trigo e pastagens, a **mecanização** e o **êxodo rural**.",
      "- Em seguida, o **agronegócio** (soja, milho, trigo, aves e suínos) e a **indústria** (automotiva, papel e celulose, agroindústria) passaram a dominar a economia.",
    ]),
    atencao("Fique atento à **sequência**: **ouro → tropeirismo → erva-mate → madeira → café**. A **ferrovia** (1885) está ligada ao **mate**; a **geada negra** (1975) encerrou o auge do **café**. **Confira** as datas aproximadas que o edital usar."),
    q("O ciclo econômico associado às rotas de tropas que ligavam o Rio Grande do Sul a Sorocaba, e que impulsionou a ocupação dos Campos Gerais, é o:", ["do ouro", "do tropeirismo", "da erva-mate", "do café", "da soja"], "B", "O tropeirismo criou pousos que viraram cidades."),
    ce("O ciclo do café teve seu principal polo no norte do Paraná, em áreas de terra roxa e com colonização planejada por companhia de terras.", "Certo", "Londrina e Maringá."),
    q("A ferrovia que ligou Paranaguá a Curitiba, inaugurada em 1885, esteve ligada principalmente à economia da:", ["soja", "erva-mate", "cana-de-açúcar", "mineração de ferro", "pecuária de corte"], "B", "Era um escoadouro do mate."),
    ce("A geada de 1975 afetou intensamente os cafezais do norte do Paraná e acelerou a substituição do café por outras culturas.", "Certo", "Marca o declínio do ciclo do café."),
  ]);

  A("historia-do-parana/imigracao", [
    aprofundar([
      "### Política de colonização",
      "Depois de 1850, a Província incentivou **colônias de imigrantes** para **abastecer de alimentos** Curitiba e o litoral e ocupar áreas vazias. A **imigração** foi **fundamental** para a formação cultural do Estado.",
      "",
      "### Principais grupos",
    ]),
    {
      tipo: "tabela",
      titulo: "Grupos de imigrantes",
      cabecalho: ["Grupo", "Chegada (aprox.)", "Onde se fixaram", "Marcas"],
      linhas: [
        ["Alemães (inclusive alemães do Volga)", "Século XIX (a partir de 1829 em Rio Negro)", "Rio Negro, Curitiba, Ponta Grossa", "Colônias agrícolas, comércio, cultura de cerveja e de culinária"],
        ["Poloneses", "A partir de 1871; maior fluxo nas décadas finais do século XIX", "Região metropolitana de Curitiba (Colombo, Araucária, São José dos Pinhais)", "Maior grupo europeu do Estado; catolicismo, agricultura, culinária"],
        ["Italianos", "A partir da década de 1870", "Colombo, Santa Felicidade (Curitiba), Piraquara", "Vinhos, culinária, comércio"],
        ["Ucranianos", "A partir da década de 1890", "Prudentópolis, Mallet, Irati, Curitiba", "Igrejas de rito oriental, ovos pintados (pêssankas), artesanato"],
        ["Holandeses", "A partir de 1911", "Carambeí, Castro (Castrolanda), Arapoti", "Pecuária leiteira e cooperativismo"],
        ["Japoneses", "A partir da década de 1920 e no auge entre 1930 e 1950", "Norte do Paraná (Assaí, Londrina, Maringá)", "Cafeicultura, horticultura e cooperativas"],
        ["Menonitas", "Década de 1950", "Witmarsum (Palmeira)", "Agricultura e pecuária leiteira"],
      ],
    },
    aprofundar([
      "### Contribuições",
      "- **Agricultura de abastecimento** (hortifrutigranjeiros), **cooperativismo** e **artesanato**.",
      "- Em **Curitiba**, bairros e **memoriais** que preservam a **cultura** de cada grupo: **Santa Felicidade** (italianos), **Bosque do Papa** e **Memorial da Imigração Polonesa**, **Memorial Ucraniano**, **Portal Italiano**, **Bosque Alemão**.",
      "- **Culinária**, **festas**, **língua** e **arquitetura**.",
      "",
      "### Migração interna",
      "No século XX, o **sudoeste e o oeste** foram ocupados por **migrantes do Rio Grande do Sul e de Santa Catarina**, descendentes de europeus; o **norte** recebeu migrantes de **São Paulo, Minas Gerais** e do **Nordeste**.",
    ]),
    atencao("Os **poloneses** são o maior grupo europeu na RMC; os **ucranianos** estão fortes em **Prudentópolis**; os **holandeses**, em **Carambeí e Castrolanda**; os **japoneses**, no **norte**. **Confira** as datas, que variam entre as fontes.", "Conferir"),
    q("Os imigrantes holandeses estabeleceram-se no Paraná principalmente em:", ["Prudentópolis", "Carambeí e Castrolanda", "Rio Negro", "Londrina", "Paranaguá"], "B", "Pecuária leiteira e cooperativismo."),
    ce("Os poloneses formaram o maior grupo de imigrantes europeus da região metropolitana de Curitiba.", "Certo", "Colombo, Araucária e São José dos Pinhais estão entre as áreas de colonização."),
    q("A imigração japonesa no Paraná concentrou-se principalmente na região:", ["do litoral", "norte, ligada à cafeicultura", "sudoeste", "dos Campos Gerais", "da RMC"], "B", "Assaí, Londrina e Maringá."),
  ]);

  A("historia-do-parana/conflitos-revolucao-federalista-e-contestado", [
    aprofundar([
      "### Revolução Federalista (1893–1895)",
      "Guerra civil gaúcha que se estendeu a **Santa Catarina e ao Paraná**, entre **federalistas** (maragatos, opositores do governo de Júlio de Castilhos) e **republicanos** (pica-paus), apoiados pelo governo federal de **Floriano Peixoto**.",
      "- No Paraná, ocorreu o **Cerco da Lapa** (**janeiro a fevereiro de 1894**): cerca de **26 dias** de resistência das forças legalistas, comandadas pelo **general Antônio Ernesto Gomes Carneiro**, que morreu no cerco. O episódio é um símbolo da resistência legalista.",
      "- Em Curitiba, o **conflito** teve efeitos políticos, com **governos provisórios** e **ocupação** pelos federalistas.",
      "",
      "### Guerra do Contestado (1912–1916)",
      "Conflito na **região disputada entre o Paraná e Santa Catarina** (daí o nome), de **1912 a 1916**.",
      "- **Causas**: **disputa de limites**; **concessão de terras** à **Brazil Railway Company** (de **Percival Farquhar**) para a **Estrada de Ferro São Paulo–Rio Grande**, com **expulsão de posseiros**; **Lumber Company** (exploração da madeira); **crise social** e religiosa.",
      "- **Personagens**: o **monge José Maria** (movimento **messiânico**) e depois outros líderes sertanejos (como **Chico Alonso** e **Adeodato**).",
      "- **Desfecho**: o **Exército** reprimiu os sertanejos com **grande violência**, com **milhares de mortos**. O **Acordo de Limites de 1916** definiu a divisa **entre o Paraná e Santa Catarina**.",
      "",
      "### Outros episódios",
      "- **Revolta dos Posseiros (1957)**, no **sudoeste**: conflito de terras com companhias colonizadoras, que levou à regularização.",
      "- Disputas de limites e **conflitos agrários** marcam a história regional.",
    ]),
    atencao("**Revolução Federalista**: **Cerco da Lapa (1894)**, general **Gomes Carneiro**. **Contestado**: **1912–1916**, causa **terras e ferrovia**, terminou com o **acordo de limites de 1916**."),
    q("O Cerco da Lapa, em 1894, ocorreu durante:", ["a Guerra do Contestado", "a Revolução Federalista", "a Revolução de 1930", "a Revolta da Chibata", "a Guerra do Paraguai"], "B", "Resistência legalista comandada por Gomes Carneiro."),
    ce("A Guerra do Contestado ocorreu entre 1912 e 1916, em área disputada entre o Paraná e Santa Catarina, e foi encerrada com o acordo de limites de 1916.", "Certo", "Caracterizou-se por forte componente social e messiânico."),
    q("Entre as causas da Guerra do Contestado estava:", ["a instalação de uma monarquia no Paraná", "a concessão de terras a companhias ferroviárias e de madeira, com expulsão de posseiros", "a Guerra do Paraguai", "a emancipação do Paraná", "a abolição da escravidão"], "B", "Brazil Railway e Lumber."),
  ]);

  /* ================= GEOGRAFIA DO PARANÁ ================= */

  A("geografia-do-parana/relevo-litoral-serra-do-mar-e-planaltos", [
    aprofundar([
      "### Cinco unidades, do leste ao oeste",
    ]),
    {
      tipo: "tabela",
      titulo: "Relevo do Paraná",
      cabecalho: ["Unidade", "Características", "Exemplos"],
      linhas: [
        ["Planície litorânea", "Baixa, com mangues, restingas, baías e ilhas", "Paranaguá, Guaratuba, Antonina, Ilha do Mel"],
        ["Serra do Mar", "Escarpa de grande declividade, com a Mata Atlântica", "Pico Paraná (ponto mais alto do Sul, cerca de 1.877 m), Marumbi"],
        ["Primeiro Planalto (de Curitiba)", "Rochas cristalinas antigas; altitudes de 850 a 950 m", "Curitiba e região metropolitana"],
        ["Segundo Planalto (Campos Gerais)", "Rochas sedimentares paleozoicas, escarpa devoniana", "Ponta Grossa, Vila Velha, Furnas"],
        ["Terceiro Planalto (de Guarapuava)", "Derrame de basalto, relevo suave, solos de terra roxa; maior unidade em área", "Guarapuava, Cascavel, Foz do Iguaçu, Londrina"],
      ],
    },
    aprofundar([
      "### Observações",
      "- A **Serra do Mar** é a **primeira** escarpa; o **Primeiro Planalto** começa **depois** dela.",
      "- A **Escarpa Devoniana** separa o **Primeiro** do **Segundo** Planalto, e a **Serra da Esperança**, o **Segundo** do **Terceiro**.",
      "- O **Terceiro Planalto**, de origem **vulcânica** (derrame de lavas da bacia do Paraná), tem **solos férteis (terra roxa)**, base da **agricultura** do Estado.",
      "- Nos **Campos Gerais**, destacam-se o **Parque Estadual de Vila Velha** (arenito esculpido) e os **Canyons** (Guartelá).",
      "- O **litoral** tem **cerca de 100 km** de costa, entre Santa Catarina e São Paulo, com as **baías de Paranaguá e Guaratuba**.",
    ]),
    atencao("A ordem do leste para o oeste: **Litoral → Serra do Mar → Primeiro Planalto → Segundo Planalto → Terceiro Planalto**. O **Terceiro Planalto** é o de **basalto e terra roxa**. Confira a **altitude** do Pico Paraná em fonte oficial.", "Conferir"),
    q("A unidade de relevo do Paraná formada por derrames basálticos, com solos férteis de terra roxa, é o:", ["Primeiro Planalto", "Segundo Planalto", "Terceiro Planalto", "Planície litorânea", "Serra do Mar"], "C", "Também chamado Planalto de Guarapuava."),
    ce("A cidade de Curitiba está localizada no Primeiro Planalto paranaense.", "Certo", "Planalto de rochas cristalinas."),
    q("O ponto culminante do Paraná e da região Sul do Brasil é o:", ["Pico Paraná", "Morro do Anhangava", "Pico do Marumbi", "Serra da Esperança", "Pico da Bandeira"], "A", "O Pico Paraná fica na Serra do Mar."),
    ce("A Escarpa Devoniana separa o Primeiro do Segundo Planalto paranaense.", "Certo", "Marca o limite dos Campos Gerais."),
  ]);

  A("geografia-do-parana/clima-e-vegetacao", [
    aprofundar([
      "### Clima",
      "O Paraná está em **zona de transição** entre o trópico e o clima temperado, na **faixa subtropical**.",
      "- **Cfa** (Köppen): **subtropical úmido, com verões quentes**, no **litoral, norte e oeste**.",
      "- **Cfb**: **subtropical úmido com verões amenos** (clima **oceânico**), nas áreas **mais altas** (Curitiba e planaltos), com **geadas frequentes** no inverno.",
      "- **Chuvas bem distribuídas**: não há estação seca bem definida.",
      "- **Geadas** ocorrem principalmente no **sul e no centro-sul**; **neve** é **rara** e ocorre em pontos mais altos.",
      "- O litoral é o **mais úmido**.",
      "",
      "### Vegetação original",
    ]),
    {
      tipo: "tabela",
      titulo: "Formações vegetais",
      cabecalho: ["Formação", "Onde", "Características"],
      linhas: [
        ["Floresta Ombrófila Densa (Mata Atlântica)", "Litoral e Serra do Mar", "Floresta densa, úmida; alta biodiversidade"],
        ["Floresta Ombrófila Mista (Floresta com Araucária)", "Planaltos do centro-sul", "Pinheiro-do-paraná (Araucaria angustifolia), erva-mate e imbuia; hoje reduzida e ameaçada"],
        ["Floresta Estacional Semidecidual", "Norte e oeste", "Perde parte das folhas na estação mais seca ou fria; foi muito desmatada para o café e a pecuária"],
        ["Campos (estepe gramíneo-lenhosa)", "Campos Gerais e Palmas", "Campos naturais, com capões de mata"],
        ["Mangues e restingas", "Baías de Paranaguá e Guaratuba", "Berçários de vida marinha"],
        ["Cerrado (manchas)", "Pontos isolados", "Pequena área"],
      ],
    },
    aprofundar([
      "### Preservação",
      "- A **Mata Atlântica** e a **Floresta com Araucária** estão **muito reduzidas**. A **araucária** é espécie **ameaçada**.",
      "- Unidades de conservação: **Parque Nacional do Iguaçu**, **Parque Nacional do Superagui**, **Parque Estadual de Vila Velha**, **Parque Estadual do Marumbi**, **Ilha do Mel**, **Floresta Nacional de Irati**.",
      "- A **Serra do Mar paranaense** integra a **Reserva da Biosfera da Mata Atlântica**; o **litoral** tem sítios do **Patrimônio Natural da Humanidade** (Reservas da Mata Atlântica Sudeste, incluindo áreas do Paraná e de São Paulo).",
    ]),
    atencao("**Floresta com Araucária** = **Ombrófila Mista**, do **planalto**. **Mata Atlântica densa** = **litoral e Serra do Mar**. O **Cfb** é o clima das **áreas altas**, com geadas.", "Dica"),
    q("A formação vegetal típica dos planaltos do centro-sul paranaense, caracterizada pela presença do pinheiro-do-paraná, é a:", ["Floresta Ombrófila Densa", "Floresta Ombrófila Mista (Floresta com Araucária)", "Caatinga", "Mangue", "Cerrado"], "B", "Também chamada mata de araucárias."),
    ce("O clima predominante na região de Curitiba é o subtropical úmido com verões amenos (Cfb), com geadas frequentes no inverno.", "Certo", "Clima oceânico das áreas mais altas."),
    q("Os mangues, no Paraná, ocorrem principalmente:", ["no Segundo Planalto", "nas baías de Paranaguá e Guaratuba, no litoral", "no norte do Estado", "na bacia do Piquiri", "em Foz do Iguaçu"], "B", "Zona costeira."),
  ]);

  A("geografia-do-parana/hidrografia", [
    aprofundar([
      "### Regra geral",
      "Boa parte dos rios do Paraná **corre para o interior**, rumo ao **Rio Paraná** (do **leste para o oeste**), e não para o mar. Poucos rios, os da **Serra do Mar**, correm para o **Atlântico**.",
      "",
      "### Bacias",
      "- **Bacia do Paraná** (a maior parte do Estado), com sub-bacias: **Iguaçu**, **Piquiri**, **Ivaí**, **Tibagi** (afluente do Paranapanema) e **Paranapanema**.",
      "- **Bacias litorâneas (Atlântico)**: rios curtos que descem a Serra do Mar e deságuam nas **baías** (Nhundiaquara, Cubatão, Guaraguaçu).",
      "",
      "### Principais rios",
      "- **Rio Iguaçu**: nasce na **Serra do Mar**, na **região metropolitana de Curitiba**, e **corre para oeste** até o Rio Paraná, **cortando o Estado**. Recebe o **Rio Negro** e outros. Tem as **Cataratas do Iguaçu** (Foz do Iguaçu), com cerca de **275 quedas** e a **Garganta do Diabo**. **Forma parte da divisa** com a **Argentina**.",
      "- **Rio Paraná**: faz a **divisa a oeste** (com o Mato Grosso do Sul e o Paraguai). Nele fica **Itaipu**.",
      "- **Rio Paranapanema**: divisa **ao norte** com São Paulo.",
      "- **Rio Tibagi**, **Ivaí** e **Piquiri**: grandes rios do interior.",
      "",
      "### Usinas hidrelétricas",
      "- **Itaipu Binacional** (Brasil e Paraguai), no Rio Paraná: **tratado de 1973**; **primeira unidade em 1984**; **potência instalada de 14.000 MW** (20 unidades geradoras). A formação do lago **submergiu o Salto de Sete Quedas** (1982).",
      "- No **Iguaçu**: **Foz do Areia**, **Segredo**, **Salto Santiago**, **Salto Osório** e outras, administradas pela **Copel** e outras empresas. No **Paranapanema**: usinas como **Capivara**.",
      "",
      "### Aquífero",
      "O **Aquífero Guarani** abrange parte do **oeste** do Estado. A **gestão de recursos hídricos** é feita por **bacias**.",
    ]),
    atencao("O **Iguaçu** nasce perto de **Curitiba**, corre para **oeste** e termina no **Rio Paraná**. **Itaipu** está no **Rio Paraná** (não no Iguaçu). **Confira** a potência e os dados das usinas em fonte oficial.", "Conferir"),
    q("O rio paranaense que nasce na Serra do Mar, na região metropolitana de Curitiba, corre para oeste e abriga as Cataratas é o:", ["Tibagi", "Iguaçu", "Ivaí", "Piquiri", "Paranapanema"], "B", "As Cataratas ficam em Foz do Iguaçu."),
    ce("A Usina Hidrelétrica de Itaipu fica no Rio Paraná e é uma usina binacional, de Brasil e Paraguai.", "Certo", "Tratado de 1973; primeira unidade de 1984."),
    q("A maior parte dos rios do Paraná pertence à bacia:", ["do Atlântico Sul", "do Rio Paraná", "do São Francisco", "do Amazonas", "do Tocantins-Araguaia"], "B", "Correm do leste para o oeste."),
  ]);

  A("geografia-do-parana/populacao-e-urbanizacao", [
    aprofundar([
      "### Números principais (confira o IBGE)",
      "- **População**: cerca de **11,4 milhões** de habitantes (**Censo 2022**), o **5º Estado** mais populoso do país.",
      "- **Municípios**: **399**.",
      "- **Área**: cerca de **199,3 mil km²**.",
      "- **Urbanização**: mais de **85%** da população vive em **cidades**.",
      "- **Capital**: Curitiba, com cerca de **1,8 milhão** de habitantes.",
      "",
      "### Maiores cidades",
      "**Curitiba**, **Londrina**, **Maringá**, **Ponta Grossa**, **Cascavel**, **São José dos Pinhais** e **Foz do Iguaçu**.",
      "",
      "### Regiões metropolitanas e eixos",
      "- **Região Metropolitana de Curitiba (RMC)**: **dezenas de municípios** (cerca de 29; **conferir**), com forte **integração**, onde está **São José dos Pinhais**, **Colombo**, **Araucária**, **Pinhais** e outras.",
      "- Outras regiões metropolitanas: **Londrina** e **Maringá**, no **norte**.",
      "- **Polos regionais**: **Ponta Grossa** (Campos Gerais), **Cascavel** e **Foz do Iguaçu** (oeste), **Guarapuava** (centro), **Paranaguá** (litoral).",
      "",
      "### Formação do povoamento",
      "**Mosaico**: litoral e planalto (ocupação mais antiga), **Campos Gerais** (tropeirismo), **norte** (café, século XX), **sudoeste e oeste** (migração gaúcha e catarinense, a partir de 1940), com **imigração europeia e japonesa**.",
      "",
      "### Desafios",
      "**Concentração** na RMC, **êxodo rural**, **mobilidade urbana**, **habitação** e **saneamento**.",
    ]),
    atencao("Use os **números do IBGE do ano** (Censo 2022 e estimativas). O Paraná é o **5º** em população, com **399 municípios**. O número de municípios da RMC **muda** por lei: **confira**.", "Conferir"),
    q("O Paraná possui:", ["299 municípios", "399 municípios", "499 municípios", "199 municípios", "599 municípios"], "B", "IBGE."),
    ce("Londrina e Maringá, no norte do Estado, são importantes polos urbanos e sedes de regiões metropolitanas.", "Certo", "Resultado da colonização cafeeira."),
    q("As maiores cidades do Paraná, depois de Curitiba, incluem:", ["Paranaguá e Antonina", "Londrina, Maringá e Ponta Grossa", "Lapa e Morretes", "Prudentópolis e Irati", "Guaratuba e Pontal"], "B", "Também Cascavel, São José dos Pinhais e Foz do Iguaçu."),
  ]);

  A("geografia-do-parana/economia-e-regioes-do-estado", [
    aprofundar([
      "### Panorama",
      "O Paraná tem economia **diversificada**: **agropecuária forte**, **indústria**, **energia** e **serviços**. Está entre os **primeiros PIBs** do país (cerca do 4º lugar; **conferir**).",
      "",
      "### Agropecuária e agroindústria",
      "- **Soja, milho, trigo, feijão, mandioca, cana-de-açúcar** e **café**; destaque para a produção de **aves (frango)**, **suínos** e **leite**.",
      "- Forte **cooperativismo** (Coamo, C.Vale, Cocamar, Frimesa, Castrolanda, Capal, entre outras) e **agroindústria**.",
      "- **Extrativismo vegetal**: madeira e erva-mate.",
      "",
      "### Indústria",
      "- **Automotiva** (região metropolitana de Curitiba): montadoras de automóveis e caminhões, e **autopeças**.",
      "- **Papel e celulose** (Klabin e outras).",
      "- **Refino de petróleo** (Repar, em **Araucária**).",
      "- **Alimentos e bebidas**, **madeira e móveis**, **tecnologia e eletroeletrônicos**.",
      "",
      "### Energia",
      "**Hidrelétricas** (Itaipu e as do Iguaçu), **Copel**, e crescimento da **energia eólica e solar**.",
      "",
      "### Logística",
      "- **Porto de Paranaguá** e **Antonina**: importantes para o **escoamento de grãos** e a importação de **fertilizantes**.",
      "- **Rodovias** (BR-277, BR-376, BR-116) e **ferrovias** (a malha ligando o interior ao litoral).",
      "- **Fronteira** com o **Paraguai** (Ponte da Amizade) e a **Argentina**, em **Foz do Iguaçu**, polo de **turismo** (Cataratas) e **comércio**.",
      "",
      "### Regiões econômicas",
      "- **Metropolitana de Curitiba e litoral**: indústria, serviços e porto.",
      "- **Campos Gerais**: grãos, pecuária, indústria (Ponta Grossa).",
      "- **Oeste e sudoeste**: agroindústria, cooperativas, fronteira.",
      "- **Norte**: café, cana, grãos e serviços (Londrina e Maringá).",
      "- **Centro-sul**: madeira, papel e celulose, grãos (Guarapuava).",
    ]),
    atencao("Associe: **Paranaguá = porto de grãos**; **Araucária = refinaria (Repar)**; **São José dos Pinhais e RMC = automotiva**; **oeste = cooperativas e agroindústria**; **Foz = turismo e fronteira**. **Confira** os números atuais.", "Conferir"),
    q("O porto paranaense que movimenta grande parte da exportação de grãos do Estado é o de:", ["Foz do Iguaçu", "Paranaguá", "Londrina", "Ponta Grossa", "Maringá"], "B", "Também importa fertilizantes."),
    ce("A região metropolitana de Curitiba concentra importante polo da indústria automotiva do Paraná.", "Certo", "Montadoras e autopeças."),
    q("A refinaria de petróleo do Paraná (Repar) está localizada em:", ["Londrina", "Araucária", "Cascavel", "Paranaguá", "Guarapuava"], "B", "Na região metropolitana de Curitiba."),
    ce("O cooperativismo agropecuário tem papel importante na economia do oeste e do norte do Paraná.", "Certo", "Coamo, C.Vale e Cocamar são exemplos."),
  ]);

  /* ================= CURITIBA ================= */

  A("curitiba/formacao-historica-de-curitiba", [
    aprofundar([
      "### Linha do tempo",
    ]),
    {
      tipo: "tabela",
      titulo: "Marcos históricos de Curitiba",
      cabecalho: ["Data", "Fato"],
      linhas: [
        ["Século XVII", "Arraial de mineradores de ouro, no planalto"],
        ["29 de março de 1693", "Elevação a vila (Nossa Senhora da Luz dos Pinhais); é a data do aniversário da cidade"],
        ["1842", "Elevação a cidade (5 de fevereiro de 1842)"],
        ["1853", "Capital da recém-criada Província do Paraná (Lei Imperial nº 704)"],
        ["1885", "Inauguração da ferrovia Paranaguá–Curitiba"],
        ["Final do século XIX", "Chegada de imigrantes europeus (poloneses, italianos, alemães, ucranianos) e ciclo da erva-mate"],
        ["1943", "Plano Agache (planejamento urbano)"],
        ["1960–70", "Plano Diretor de 1966 e criação do IPPUC (1965); início do planejamento moderno"],
      ],
    },
    aprofundar([
      "### Observações",
      "- **A fundação** é de **meados do século XVII** (as fontes divergem: 1654 ou 1661); o **marco oficial** é a **vila de 1693**.",
      "- A **erva-mate** e a **madeira** enriqueceram uma elite que **modernizou** a cidade nas primeiras décadas do século XX.",
      "- Curitiba cresceu muito na segunda metade do século XX: de **cerca de 180 mil** habitantes (1950) a **mais de 1 milhão** em 1980 (**conferir** os números do IBGE).",
      "- Hoje tem cerca de **1,8 milhão** de habitantes e cerca de **435 km²**, em **altitude média de cerca de 930 m**, com clima **subtropical úmido de altitude (Cfb)**.",
    ]),
    atencao("O aniversário de Curitiba é **29 de março** (vila de **1693**). Tornou-se **cidade em 1842** e **capital em 1853**. **Confira** a data do Plano Agache e do IPPUC no material do edital.", "Conferir"),
    q("O aniversário oficial de Curitiba, em 29 de março, refere-se à elevação da povoação à condição de vila, em:", ["1648", "1693", "1842", "1853", "1885"], "B", "A cidade foi elevada a vila em 1693."),
    ce("Curitiba tornou-se capital da Província do Paraná em 1853, com a criação dessa Província.", "Certo", "Lei Imperial nº 704."),
    q("A ferrovia que ligou Paranaguá a Curitiba, e foi decisiva para o ciclo da erva-mate, foi inaugurada em:", ["1693", "1853", "1885", "1943", "1966"], "C", "Escoamento de mate para o porto."),
  ]);

  A("curitiba/planejamento-urbano-e-transporte", [
    aprofundar([
      "### Planejamento",
      "- **Plano Agache** (década de 1940): primeiro plano urbanístico; previa **avenidas radiais** e **setorização**.",
      "- **Plano Diretor de 1966**: abandonou o modelo radial e adotou o **crescimento linear**, ao longo de **eixos estruturais**, integrando **uso do solo, sistema viário e transporte**.",
      "- **IPPUC** (Instituto de Pesquisa e Planejamento Urbano de Curitiba), criado em **1965**: órgão que **executa e atualiza** o planejamento. A **continuidade** entre gestões foi marca do modelo.",
      "- **Jaime Lerner**, arquiteto, foi prefeito de Curitiba em **três períodos** (década de 1970, início dos anos 1980 e 1989–1992) e é associado às **inovações urbanas**.",
      "",
      "### Inovações do transporte coletivo",
      "- **Canaletas exclusivas** para ônibus (década de 1970) nos **eixos estruturais**, com ônibus **expressos**.",
      "- **Ônibus biarticulado** (década de 1990), com capacidade ampliada.",
      "- **Estação-tubo**: parada elevada com **embarque em nível**, **tarifa antecipada** e acessibilidade (inaugurada no início da década de 1990).",
      "- **Rede Integrada de Transporte (RIT)**: **integração** de linhas e **tarifa única**, em **terminais**, com ônibus **alimentadores**, **interbairros**, **expressos** e **ligeirinhos**.",
      "- O modelo inspirou outros sistemas de **BRT** no mundo (como o **TransMilenio**, de Bogotá).",
      "",
      "### Outros elementos",
      "- **Rua das Flores** (calçadão da **Rua XV**), um dos primeiros **calçadões** do país.",
      "- **Eixo de crescimento linear**, com **adensamento** nos eixos.",
      "- **Zoneamento** com **incentivos** a usos mistos.",
      "- **Setor histórico** e **proteção patrimonial**.",
    ]),
    atencao("**Plano Agache** (radial) → **Plano de 1966** (linear, eixos estruturais) → **IPPUC** (1965). **Canaleta** e **estação-tubo** são do transporte coletivo. **Confira as datas** em fonte do IPPUC.", "Conferir"),
    q("O modelo de crescimento urbano de Curitiba a partir do Plano Diretor de 1966 baseou-se em:", ["expansão radial concêntrica", "crescimento linear ao longo de eixos estruturais, integrando uso do solo, sistema viário e transporte", "dispersão sem planejamento", "verticalização no centro apenas", "criação de cidades satélites"], "B", "Eixos estruturais."),
    ce("O IPPUC é o órgão responsável pela pesquisa e pelo planejamento urbano de Curitiba.", "Certo", "Criado em 1965."),
    q("A estação-tubo é uma inovação do transporte coletivo de Curitiba que se caracteriza por:", ["embarque em nível e tarifa antecipada, com acessibilidade", "ônibus sem motorista", "uso exclusivo por ciclistas", "veículos sobre trilhos subterrâneos", "estações apenas para turismo"], "A", "Agiliza o embarque."),
    ce("A Rede Integrada de Transporte de Curitiba integra linhas de ônibus e permite a tarifa única nos terminais.", "Certo", "Mecanismo de integração."),
  ]);

  A("curitiba/meio-ambiente-e-parques", [
    aprofundar([
      "### Política de áreas verdes",
      "Curitiba criou muitos **parques** a partir da **década de 1970**, também como solução urbana: os **parques lineares** em **fundos de vale** **controlam enchentes** e preservam as margens dos rios.",
      "",
      "### Parques e espaços",
      "- **Passeio Público** (século XIX; o primeiro parque da cidade).",
      "- **Parque Barigui**, **Parque Tanguá**, **Parque Tingui**, **Bosque do Papa**, **Parque São Lourenço** e outros.",
      "- **Jardim Botânico** (estufa com estrutura metálica, inaugurado no início da década de 1990), cartão-postal.",
      "- **Parque Barigui** (Rio Barigui), com **capivaras** e grande uso para lazer.",
      "- **Ópera de Arame** e **Pedreira Paulo Leminski** são espaços culturais em áreas verdes.",
      "",
      "### Programas ambientais",
      "- **Lixo que Não é Lixo** (coleta seletiva, desde o fim da década de 1980).",
      "- **Câmbio Verde**: troca de **material reciclável** por **hortifrutigranjeiros**.",
      "- **Linha Verde**: reaproveitamento do antigo corredor da BR-116, com **parques**.",
      "- **Cuidados com rios** (Iguaçu, Barigui, Belém) e com as **áreas de manancial**.",
      "",
      "### Indicador",
      "Curitiba é conhecida pela **grande área verde por habitante** (os números variam; **conferir** a medição atual).",
    ]),
    atencao("Os **parques de fundo de vale** têm função **hidráulica** (conter cheias) e **ambiental**. **Confira** os números atuais de área verde por habitante, que variam por metodologia.", "Conferir"),
    q("O programa de Curitiba que troca material reciclável por hortifrutigranjeiros é o:", ["Lixo que Não é Lixo", "Câmbio Verde", "Linha Verde", "Ligeirão", "Passeio Público"], "B", "Une reciclagem e abastecimento."),
    ce("Muitos parques de Curitiba, instalados em fundos de vale, cumprem também função de contenção de enchentes.", "Certo", "Parques lineares."),
    q("O Jardim Botânico de Curitiba é conhecido por:", ["suas estufas de estrutura metálica", "ser um zoológico", "ser um estádio", "ficar no litoral", "ser um shopping"], "A", "Um dos cartões-postais da cidade."),
  ]);

  A("curitiba/cultura-e-turismo", [
    aprofundar([
      "### Equipamentos culturais",
      "- **Teatro Guaíra**: um dos maiores centros culturais da cidade, com o **Auditório Salvador de Ferrante** (Guairão).",
      "- **Museu Oscar Niemeyer (MON)**, conhecido como **\"Museu do Olho\"**, inaugurado em **2002** (**conferir**), com **exposições** de arte e arquitetura.",
      "- **Ópera de Arame** (estrutura metálica e transparente, dentro de uma pedreira, inaugurada no início da década de 1990).",
      "- **Pedreira Paulo Leminski**, espaço de **shows**.",
      "- **Memorial de Curitiba**, **Museu Paranaense**, **Casa Romário Martins**.",
      "",
      "### Festivais",
      "**Festival de Teatro de Curitiba** (**desde 1992**), um dos maiores do país, com **mostra principal** e **Fringe**.",
      "",
      "### Patrimônio e roteiros",
      "- **Largo da Ordem** e **Setor Histórico**, com **feira de domingo**.",
      "- **Rua XV de Novembro**: **calçadão** de pedestres.",
      "- **Santa Felicidade**: bairro de **tradição italiana** e gastronômica.",
      "- **Memorial Ucraniano**, **Bosque do Papa**, **Memorial da Imigração Polonesa**, **Portal Italiano** e **Bosque Alemão**: preservam a **cultura dos imigrantes**.",
      "- **Torre Panorâmica**, **Parque Tanguá** e **Jardim Botânico**.",
      "- **Linha Turismo**: ônibus que percorre os principais pontos.",
      "",
      "### Gastronomia e artesanato",
      "**Culinária** de **origem europeia** (polonesa, ucraniana, italiana, alemã) e **barreado** no litoral (**Morretes**).",
      "",
      "### Entorno",
      "**Serra Verde Express** (trem Curitiba–Morretes–Paranaguá) e a **Estrada da Graciosa**.",
    ]),
    atencao("O **MON** é o \"museu do olho\" (Oscar Niemeyer). A **Ópera de Arame** tem estrutura **metálica** e **tubular**. O **Festival de Teatro** é **anual**. **Confira** as datas de inauguração.", "Conferir"),
    q("O museu de Curitiba conhecido como \"Museu do Olho\" é o:", ["Museu Paranaense", "Museu Oscar Niemeyer", "Museu do Expedicionário", "Museu da Imagem e do Som", "Museu do Café"], "B", "O formato do edifício lembra um olho."),
    ce("Santa Felicidade é um bairro de Curitiba conhecido pela tradição da imigração italiana e pela gastronomia.", "Certo", "É um dos principais polos de gastronomia."),
    q("O Festival de Teatro de Curitiba, realizado anualmente desde 1992, tem como uma de suas mostras o:", ["Fringe", "Carnaval", "Oscar", "Rock in Rio", "Festival de Cannes"], "A", "Fringe é a mostra paralela."),
  ]);

  /* ================= ATUALIDADES DO PARANÁ ================= */

  A("atualidades/politica-e-economia", [
    aprofundar([
      "### O que o edital costuma cobrar",
      "**Atualidades** são **fatos recentes**. Este caderno **não traz notícias**, e sim o **mapa** de estudo. Antes da prova, **leia os últimos 12 meses** em fontes oficiais.",
      "",
      "### Eixos políticos e institucionais",
      "- **Governo do Estado**: Governador, secretarias, **Assembleia Legislativa** (com **54 deputados**; **conferir**), **Tribunal de Justiça**, **Tribunal de Contas do Estado (TCE-PR)** e **Ministério Público**.",
      "- **Eleições**: estaduais e municipais; calendário e resultados.",
      "- **Prefeitura de Curitiba**: Prefeito, Câmara Municipal, planos e obras em andamento.",
      "- **Segurança, saúde e educação** estaduais.",
      "",
      "### Eixos econômicos",
      "- **PIB do Paraná** e **setores** (agronegócio, indústria, serviços).",
      "- **Safra** (soja, milho, trigo): **clima** e **preços**.",
      "- **Exportações**: **soja, carnes, açúcar, veículos** e **celulose**; **Porto de Paranaguá**.",
      "- **Investimentos** (**concessões**, **pedágio** das rodovias, infraestrutura, **ferrovia**, **aeroportos**).",
      "- **Emprego e renda**: **IBGE** (PNAD) e **Caged**.",
      "",
      "### Fontes confiáveis",
      "**Agência Estadual de Notícias** (governo), **Assembleia Legislativa do Paraná**, **IBGE**, **IPARDES** (Instituto Paranaense de Desenvolvimento Econômico e Social), **TCE-PR**, **prefeituras**, e **jornais regionais**.",
      "",
      "### Técnica",
      "Monte **fichas** de 1 página por tema: **o que aconteceu**, **quando**, **quem**, **por que importa**. Revise **semanalmente**.",
    ]),
    atencao("O que mudou após a última revisão deste caderno **não está aqui**. Consulte o **edital** para o recorte de tempo (muitas bancas cobram os **últimos 12 meses**) e as **fontes oficiais** do Estado.", "Conferir"),
    q("O instituto paranaense que produz estudos e indicadores socioeconômicos do Estado é o:", ["IPARDES", "INSS", "IPPUC", "Copel", "Sanepar"], "A", "Instituto Paranaense de Desenvolvimento Econômico e Social."),
    ce("O Tribunal de Contas do Estado do Paraná auxilia a Assembleia Legislativa no controle externo.", "Certo", "Papel dos Tribunais de Contas."),
    q("Para estudar atualidades do Paraná, o procedimento mais adequado é:", ["decorar apenas dados antigos", "acompanhar os últimos meses em fontes oficiais e confiáveis e organizar fichas por tema", "usar apenas redes sociais", "ignorar o edital", "estudar só a história antiga"], "B", "Atualidades exigem informação recente."),
  ]);

  A("atualidades/meio-ambiente-e-sustentabilidade", [
    aprofundar([
      "### Temas permanentes (para acompanhar)",
      "- **Mata Atlântica e Floresta com Araucária**: **remanescentes**, **corredores ecológicos** e **recuperação**; a **araucária** é espécie **ameaçada**.",
      "- **Água**: **mananciais**, **abastecimento** e **crises hídricas** (a RMC depende de **barragens**); **Sanepar**; **saneamento**.",
      "- **Clima**: **geadas**, **estiagens** e eventos **extremos** (chuvas intensas, granizo, vendavais) que afetam a **safra**.",
      "- **Energia**: **hidrelétricas**, **eólica**, **solar** e **biomassa**.",
      "- **Resíduos**: **coleta seletiva**, **aterros** e **economia circular**.",
      "- **Litoral**: **Baía de Paranaguá**, **manguezais**, **Ilha do Mel** e **Superagui**.",
      "- **Agrotóxicos** e **solo** (**plantio direto**, integração lavoura-pecuária).",
      "",
      "### Instrumentos",
      "**Unidades de conservação** (parques nacionais e estaduais, APAs), **licenciamento ambiental**, **IAT** (Instituto Água e Terra), **IBAMA** e **ICMBio**, **ICMS ecológico** (repasse a municípios com áreas protegidas, **instrumento pioneiro do Paraná**), **Política Estadual de Recursos Hídricos**.",
      "",
      "### ICMS ecológico",
      "O **Paraná foi o primeiro** Estado a adotar o **ICMS ecológico** (**1991**): parte da arrecadação do ICMS é repassada aos municípios conforme **mananciais de abastecimento** e **unidades de conservação**, **incentivando a preservação**. **Conferir** os critérios atuais.",
      "",
      "### Como se preparar",
      "Acompanhe **notícias** sobre **clima e safra**, **crises hídricas** e **políticas ambientais** do Estado e do município. **Confira** as **datas e números** nas fontes oficiais.",
    ]),
    atencao("O **ICMS ecológico** nasceu **no Paraná**: é um **incentivo fiscal** à **conservação**. As notícias do período **devem ser conferidas** em fonte atual.", "Conferir"),
    q("O ICMS ecológico, mecanismo que repassa recursos a municípios com áreas de preservação e mananciais, teve origem no Estado do:", ["Paraná", "Rio de Janeiro", "Bahia", "Pará", "Ceará"], "A", "Foi pioneiro nesse mecanismo."),
    ce("A araucária é uma espécie símbolo do Paraná, hoje ameaçada em razão do desmatamento histórico.", "Certo", "Floresta com Araucária."),
    q("Instrumento de proteção ambiental que consiste em áreas legalmente protegidas, como parques e reservas, é a:", ["unidade de conservação", "balança comercial", "folha de pagamento", "curva ABC", "carta de serviços"], "A", "Parques e reservas são unidades de conservação."),
  ]);

  A("atualidades/ciencia-tecnologia-e-sociedade", [
    aprofundar([
      "### Eixos",
      "- **Educação superior pública**: **UFPR**, **UTFPR**, **UEL**, **UEM**, **UEPG**, **Unioeste**, **Unicentro**, **UENP**, **Unespar**. As **universidades estaduais** e a **autonomia universitária**.",
      "- **Pesquisa e inovação**: **Fundação Araucária** (fomento estadual), **Tecpar** (Instituto de Tecnologia do Paraná), **Parque Tecnológico de Itaipu** (**PTI**), **Vale do Pinhão** (programa de inovação de Curitiba), **parques tecnológicos**.",
      "- **Governo digital**: **serviços online**, **dados abertos** e **Lei 14.129/2021**.",
      "- **Saúde**: **SUS**, **hospitais universitários**, **vacinação**.",
      "- **Educação básica**: **IDEB**, **escola cívico-militar** e outras políticas (**confira o estado atual**).",
      "- **Segurança pública** e **proteção social**.",
      "- **Cultura e esporte**.",
      "",
      "### Temas sociais",
      "**Desigualdade e renda**, **mobilidade urbana**, **moradia**, **violência contra a mulher**, **inclusão** e **migração** (o Paraná é destino de **migrantes e refugiados**).",
      "",
      "### Fontes",
      "**IBGE**, **IPARDES**, **INEP**, **Datasus**, **governo estadual**, **prefeituras**.",
      "",
      "### Cuidados",
      "Os nomes de **programas**, **órgãos** e **normas** mudam com os governos. Para a prova, valem as **informações dos últimos 12 meses** e o **recorte do edital**.",
    ]),
    atencao("Estas são **áreas de estudo**, não notícias. O estado atual de **programas, órgãos e normas** deve ser **conferido** em fonte oficial.", "Conferir"),
    q("A Universidade Federal do Paraná tem sede em:", ["Londrina", "Curitiba", "Maringá", "Cascavel", "Ponta Grossa"], "B", "A UFPR é a universidade federal do Estado."),
    ce("O Parque Tecnológico de Itaipu e o Tecpar são exemplos de instituições ligadas à pesquisa, à tecnologia e à inovação no Paraná.", "Certo", "Ambos atuam em inovação."),
    q("O indicador usado para avaliar a qualidade do ensino nas escolas brasileiras, calculado pelo INEP, é o:", ["IDH", "IDEB", "IPCA", "PIB", "Gini"], "B", "Índice de Desenvolvimento da Educação Básica."),
  ]);
})();

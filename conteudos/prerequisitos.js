/* =====================================================================
   PRÉ-REQUISITOS
   ---------------------------------------------------------------------
   O que convém estudar ANTES de cada assunto. Aparece:
     - no topo do assunto ("Pré-requisitos"), com o que já foi estudado;
     - no fim do assunto pedido ("Este assunto é base para");
     - na matéria e no plano de estudos (que avisa quando a ordem contraria isto).

   Formato:  ESTUDO.prerequisitos("secao/conteudo", { "materia/assunto": ["antes", ...] })
     - Até duas partes ("materia/assunto" ou só "materia") = dentro do conteúdo do topo.
     - Três ou mais partes = caminho completo, para ligar conteúdos diferentes.
   Caminho errado gera aviso no topo do caderno.

   São sugestões de ordem de estudo (pedagogia), não dados do edital: ajuste à vontade.
   ===================================================================== */

/* ---------- Núcleo Comum ---------- */

ESTUDO.prerequisitos("nucleo/matematica", {
  "conjuntos-e-numeros/operacoes-com-conjuntos": ["conjuntos-e-numeros/conjuntos-numericos"],
  "conjuntos-e-numeros/mmc-e-mdc": ["conjuntos-e-numeros/divisibilidade-e-numeros-primos"],
  "conjuntos-e-numeros/fracoes-e-numeros-decimais": ["conjuntos-e-numeros/mmc-e-mdc"],
  "conjuntos-e-numeros/expressoes-numericas": ["conjuntos-e-numeros/fracoes-e-numeros-decimais", "conjuntos-e-numeros/potenciacao-e-radiciacao"],

  "aritmetica/razao-e-proporcao": ["conjuntos-e-numeros/fracoes-e-numeros-decimais"],
  "aritmetica/grandezas-diretamente-e-inversamente-proporcionais": ["aritmetica/razao-e-proporcao"],
  "aritmetica/regra-de-tres": ["aritmetica/grandezas-diretamente-e-inversamente-proporcionais"],
  "aritmetica/divisao-proporcional": ["aritmetica/grandezas-diretamente-e-inversamente-proporcionais"],
  "aritmetica/porcentagem": ["aritmetica/razao-e-proporcao"],
  "aritmetica/media-aritmetica-e-media-ponderada": ["conjuntos-e-numeros/expressoes-numericas"],

  "matematica-financeira-basica/juros-simples": ["aritmetica/porcentagem"],
  "matematica-financeira-basica/juros-compostos": ["matematica-financeira-basica/juros-simples", "conjuntos-e-numeros/potenciacao-e-radiciacao"],
  "matematica-financeira-basica/descontos": ["matematica-financeira-basica/juros-simples"],
  "matematica-financeira-basica/aumentos-e-descontos-sucessivos": ["aritmetica/porcentagem"],

  "algebra/equacoes-do-1-grau": ["conjuntos-e-numeros/expressoes-numericas"],
  "algebra/equacoes-do-2-grau": ["algebra/equacoes-do-1-grau", "conjuntos-e-numeros/potenciacao-e-radiciacao"],
  "algebra/sistemas-de-equacoes": ["algebra/equacoes-do-1-grau"],
  "algebra/inequacoes": ["algebra/equacoes-do-1-grau"],
  "algebra/funcoes-do-1-grau": ["algebra/equacoes-do-1-grau"],
  "algebra/funcoes-do-2-grau": ["algebra/funcoes-do-1-grau", "algebra/equacoes-do-2-grau"],
  "algebra/progressao-aritmetica-pa": ["algebra/equacoes-do-1-grau"],
  "algebra/progressao-geometrica-pg": ["algebra/progressao-aritmetica-pa", "conjuntos-e-numeros/potenciacao-e-radiciacao"],

  "geometria-e-medidas/sistema-metrico-decimal-e-conversao-de-unidades": ["conjuntos-e-numeros/fracoes-e-numeros-decimais"],
  "geometria-e-medidas/perimetro-e-area-de-figuras-planas": ["geometria-e-medidas/sistema-metrico-decimal-e-conversao-de-unidades"],
  "geometria-e-medidas/volume-de-solidos": ["geometria-e-medidas/perimetro-e-area-de-figuras-planas"],
  "geometria-e-medidas/teorema-de-pitagoras": ["conjuntos-e-numeros/potenciacao-e-radiciacao", "geometria-e-medidas/perimetro-e-area-de-figuras-planas"],

  "estatistica-basica/leitura-de-tabelas-e-graficos": ["aritmetica/porcentagem"],
  "estatistica-basica/media-moda-e-mediana": ["aritmetica/media-aritmetica-e-media-ponderada", "estatistica-basica/leitura-de-tabelas-e-graficos"],
  "estatistica-basica/nocoes-de-dispersao": ["estatistica-basica/media-moda-e-mediana"],
});

ESTUDO.prerequisitos("nucleo/raciocinio-logico", {
  "logica-proposicional/tabela-verdade": ["logica-proposicional/proposicoes-e-conectivos"],
  "logica-proposicional/tautologia-contradicao-e-contingencia": ["logica-proposicional/tabela-verdade"],
  "logica-proposicional/equivalencias-logicas": ["logica-proposicional/tabela-verdade"],
  "logica-proposicional/negacao-de-proposicoes-e-leis-de-de-morgan": ["logica-proposicional/equivalencias-logicas"],

  "logica-de-argumentacao/argumentos-validos-e-invalidos": ["logica-proposicional/tabela-verdade"],
  "logica-de-argumentacao/silogismos": ["logica-de-argumentacao/argumentos-validos-e-invalidos"],
  "logica-de-argumentacao/quantificadores-todo-algum-e-nenhum": ["logica-proposicional/proposicoes-e-conectivos"],
  "logica-de-argumentacao/diagramas-logicos": ["logica-de-argumentacao/quantificadores-todo-algum-e-nenhum", "nucleo/matematica/conjuntos-e-numeros/operacoes-com-conjuntos"],

  "raciocinio-sequencial-e-problemas/sequencias-numericas": ["nucleo/matematica/algebra/progressao-aritmetica-pa"],
  "raciocinio-sequencial-e-problemas/verdades-e-mentiras": ["logica-proposicional/proposicoes-e-conectivos"],
  "raciocinio-sequencial-e-problemas/calendarios-e-relogios": ["nucleo/matematica/conjuntos-e-numeros/divisibilidade-e-numeros-primos"],

  "contagem-e-probabilidade/permutacao": ["contagem-e-probabilidade/principio-fundamental-da-contagem"],
  "contagem-e-probabilidade/arranjo-e-combinacao": ["contagem-e-probabilidade/permutacao"],
  "contagem-e-probabilidade/probabilidade": ["contagem-e-probabilidade/arranjo-e-combinacao", "nucleo/matematica/conjuntos-e-numeros/fracoes-e-numeros-decimais"],
});

ESTUDO.prerequisitos("nucleo/portugues", {
  "compreensao-e-interpretacao-de-textos/inferencias-pressupostos-e-subentendidos": ["compreensao-e-interpretacao-de-textos/ideia-central-e-informacoes-explicitas"],
  "compreensao-e-interpretacao-de-textos/generos-textuais": ["compreensao-e-interpretacao-de-textos/tipologia-textual"],
  "compreensao-e-interpretacao-de-textos/coesao-textual": ["morfologia/pronomes-classificacao-e-emprego", "morfologia/conjuncao"],
  "compreensao-e-interpretacao-de-textos/coerencia-textual": ["compreensao-e-interpretacao-de-textos/coesao-textual"],
  "compreensao-e-interpretacao-de-textos/reescrita-de-frases-e-paragrafos": ["compreensao-e-interpretacao-de-textos/coesao-textual", "pontuacao/uso-da-virgula"],

  "ortografia-e-acentuacao/porque-por-que-porque-e-por-que": ["morfologia/conjuncao"],

  "morfologia/substantivo-adjetivo-e-artigo": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/numeral": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/pronomes-classificacao-e-emprego": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/verbos-tempos-modos-e-vozes": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/adverbio": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/preposicao": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/conjuncao": ["morfologia/classes-de-palavras-visao-geral"],
  "morfologia/interjeicao": ["morfologia/classes-de-palavras-visao-geral"],

  "sintaxe/termos-essenciais-da-oracao": ["sintaxe/frase-oracao-e-periodo", "morfologia/verbos-tempos-modos-e-vozes"],
  "sintaxe/termos-integrantes-da-oracao": ["sintaxe/termos-essenciais-da-oracao"],
  "sintaxe/termos-acessorios-e-vocativo": ["sintaxe/termos-essenciais-da-oracao"],
  "sintaxe/periodo-composto-por-coordenacao": ["sintaxe/frase-oracao-e-periodo", "morfologia/conjuncao"],
  "sintaxe/periodo-composto-por-subordinacao": ["sintaxe/periodo-composto-por-coordenacao", "sintaxe/termos-integrantes-da-oracao"],
  "sintaxe/concordancia-verbal": ["sintaxe/termos-essenciais-da-oracao"],
  "sintaxe/concordancia-nominal": ["morfologia/substantivo-adjetivo-e-artigo"],
  "sintaxe/regencia-verbal": ["sintaxe/termos-integrantes-da-oracao", "morfologia/preposicao"],
  "sintaxe/regencia-nominal": ["sintaxe/termos-integrantes-da-oracao", "morfologia/preposicao"],
  "sintaxe/crase": ["sintaxe/regencia-verbal", "sintaxe/regencia-nominal", "morfologia/substantivo-adjetivo-e-artigo"],
  "sintaxe/colocacao-pronominal": ["morfologia/pronomes-classificacao-e-emprego"],

  "pontuacao/uso-da-virgula": ["sintaxe/termos-acessorios-e-vocativo", "sintaxe/periodo-composto-por-coordenacao", "sintaxe/periodo-composto-por-subordinacao"],
  "pontuacao/ponto-ponto-e-virgula-e-dois-pontos": ["pontuacao/uso-da-virgula"],

  "semantica-e-estilistica/figuras-de-linguagem": ["semantica-e-estilistica/denotacao-e-conotacao"],

  "redacao-oficial/principios-clareza-concisao-impessoalidade-e-formalidade": ["redacao-oficial/manual-de-redacao-da-presidencia-da-republica"],
  "redacao-oficial/pronomes-de-tratamento": ["morfologia/pronomes-classificacao-e-emprego"],
  "redacao-oficial/padrao-oficio-e-e-mail-oficial": ["redacao-oficial/principios-clareza-concisao-impessoalidade-e-formalidade", "redacao-oficial/pronomes-de-tratamento"],
  "redacao-oficial/expedientes-oficiais": ["redacao-oficial/padrao-oficio-e-e-mail-oficial"],
});

ESTUDO.prerequisitos("nucleo/informatica", {
  "conceitos-basicos-e-hardware/dispositivos-de-entrada-e-saida": ["conceitos-basicos-e-hardware/componentes-do-computador"],
  "conceitos-basicos-e-hardware/memorias-e-armazenamento": ["conceitos-basicos-e-hardware/componentes-do-computador"],

  "sistemas-operacionais/atalhos-de-teclado-do-windows": ["sistemas-operacionais/windows-10-e-11-conceitos-e-interface"],
  "sistemas-operacionais/gerenciamento-de-arquivos-e-pastas": ["sistemas-operacionais/windows-10-e-11-conceitos-e-interface", "conceitos-basicos-e-hardware/memorias-e-armazenamento"],

  "editores-de-texto/libreoffice-writer": ["editores-de-texto/microsoft-word-formatacao-e-recursos"],
  "editores-de-texto/atalhos-dos-editores-de-texto": ["editores-de-texto/microsoft-word-formatacao-e-recursos"],

  "planilhas-eletronicas/formulas-e-funcoes-soma-media-se-procv": ["planilhas-eletronicas/microsoft-excel-conceitos-e-referencias"],
  "planilhas-eletronicas/libreoffice-calc": ["planilhas-eletronicas/microsoft-excel-conceitos-e-referencias"],
  "planilhas-eletronicas/graficos-filtros-e-classificacao": ["planilhas-eletronicas/formulas-e-funcoes-soma-media-se-procv"],

  "apresentacoes-e-ferramentas-colaborativas/microsoft-365-teams-e-onedrive": ["internet-e-redes/computacao-em-nuvem"],
  "apresentacoes-e-ferramentas-colaborativas/google-workspace-docs-planilhas-drive": ["internet-e-redes/computacao-em-nuvem"],

  "internet-e-redes/protocolos-http-https-tcp-ip-dns-ftp": ["internet-e-redes/conceitos-de-redes-lan-wan-intranet-extranet"],
  "internet-e-redes/navegadores": ["internet-e-redes/protocolos-http-https-tcp-ip-dns-ftp"],
  "internet-e-redes/correio-eletronico": ["internet-e-redes/protocolos-http-https-tcp-ip-dns-ftp"],
  "internet-e-redes/computacao-em-nuvem": ["internet-e-redes/conceitos-de-redes-lan-wan-intranet-extranet"],

  "seguranca-da-informacao/malwares-virus-worms-trojans-e-ransomware": ["seguranca-da-informacao/principios-confidencialidade-integridade-e-disponibilidade"],
  "seguranca-da-informacao/golpes-phishing-e-engenharia-social": ["seguranca-da-informacao/malwares-virus-worms-trojans-e-ransomware", "internet-e-redes/correio-eletronico"],
  "seguranca-da-informacao/firewall-antivirus-e-backup": ["seguranca-da-informacao/malwares-virus-worms-trojans-e-ransomware"],
  "seguranca-da-informacao/criptografia-certificado-e-assinatura-digital": ["seguranca-da-informacao/principios-confidencialidade-integridade-e-disponibilidade", "internet-e-redes/protocolos-http-https-tcp-ip-dns-ftp"],
});

ESTUDO.prerequisitos("nucleo/direito-constitucional", {
  "teoria-da-constituicao/poder-constituinte": ["teoria-da-constituicao/conceito-e-classificacao-das-constituicoes"],
  "teoria-da-constituicao/aplicabilidade-das-normas-constitucionais": ["teoria-da-constituicao/conceito-e-classificacao-das-constituicoes"],

  "direitos-e-garantias-fundamentais/remedios-constitucionais": ["direitos-e-garantias-fundamentais/direitos-e-deveres-individuais-e-coletivos-art-5"],
  "direitos-e-garantias-fundamentais/direitos-sociais-arts-6-a-11": ["direitos-e-garantias-fundamentais/direitos-e-deveres-individuais-e-coletivos-art-5"],
  "direitos-e-garantias-fundamentais/direitos-politicos": ["direitos-e-garantias-fundamentais/nacionalidade"],
  "direitos-e-garantias-fundamentais/partidos-politicos": ["direitos-e-garantias-fundamentais/direitos-politicos"],

  "organizacao-do-estado/uniao-bens-e-competencias": ["organizacao-do-estado/organizacao-politico-administrativa"],
  "organizacao-do-estado/estados-municipios-e-distrito-federal": ["organizacao-do-estado/organizacao-politico-administrativa"],
  "organizacao-do-estado/intervencao-federal-e-estadual": ["organizacao-do-estado/uniao-bens-e-competencias", "organizacao-do-estado/estados-municipios-e-distrito-federal"],

  "administracao-publica-na-constituicao/principios-da-administracao-publica-art-37": ["organizacao-do-estado/organizacao-politico-administrativa"],
  "administracao-publica-na-constituicao/acesso-a-cargos-concurso-publico-e-acumulacao": ["administracao-publica-na-constituicao/principios-da-administracao-publica-art-37"],
  "administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41": ["administracao-publica-na-constituicao/acesso-a-cargos-concurso-publico-e-acumulacao"],
  "administracao-publica-na-constituicao/estabilidade-do-servidor": ["administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41"],

  "organizacao-dos-poderes/poder-legislativo": ["principios-fundamentais/separacao-dos-poderes-art-2"],
  "organizacao-dos-poderes/processo-legislativo": ["organizacao-dos-poderes/poder-legislativo"],
  "organizacao-dos-poderes/poder-executivo": ["principios-fundamentais/separacao-dos-poderes-art-2"],
  "organizacao-dos-poderes/poder-judiciario": ["principios-fundamentais/separacao-dos-poderes-art-2"],
  "organizacao-dos-poderes/funcoes-essenciais-a-justica": ["organizacao-dos-poderes/poder-judiciario"],
});

ESTUDO.prerequisitos("nucleo/direito-administrativo", {
  "fundamentos/regime-juridico-administrativo": ["fundamentos/conceito-objeto-e-fontes-do-direito-administrativo"],
  "fundamentos/principios-expressos-limpe": ["fundamentos/regime-juridico-administrativo", "nucleo/direito-constitucional/administracao-publica-na-constituicao/principios-da-administracao-publica-art-37"],
  "fundamentos/principios-implicitos": ["fundamentos/principios-expressos-limpe"],

  "organizacao-administrativa/centralizacao-descentralizacao-e-desconcentracao": ["fundamentos/conceito-objeto-e-fontes-do-direito-administrativo"],
  "organizacao-administrativa/administracao-direta-e-orgaos-publicos": ["organizacao-administrativa/centralizacao-descentralizacao-e-desconcentracao"],
  "organizacao-administrativa/autarquias-e-fundacoes-publicas": ["organizacao-administrativa/centralizacao-descentralizacao-e-desconcentracao"],
  "organizacao-administrativa/empresas-publicas-e-sociedades-de-economia-mista": ["organizacao-administrativa/autarquias-e-fundacoes-publicas"],
  "organizacao-administrativa/terceiro-setor": ["organizacao-administrativa/centralizacao-descentralizacao-e-desconcentracao"],

  "poderes-administrativos/poder-hierarquico": ["organizacao-administrativa/administracao-direta-e-orgaos-publicos"],
  "poderes-administrativos/poder-disciplinar": ["poderes-administrativos/poder-hierarquico"],
  "poderes-administrativos/poder-regulamentar": ["nucleo/direito-constitucional/organizacao-dos-poderes/poder-executivo"],
  "poderes-administrativos/poder-de-policia": ["fundamentos/regime-juridico-administrativo"],
  "poderes-administrativos/uso-e-abuso-de-poder": ["poderes-administrativos/poder-hierarquico", "poderes-administrativos/poder-de-policia"],

  "atos-administrativos/conceito-e-elementos-requisitos": ["fundamentos/principios-expressos-limpe"],
  "atos-administrativos/atributos": ["atos-administrativos/conceito-e-elementos-requisitos"],
  "atos-administrativos/classificacao-e-especies": ["atos-administrativos/conceito-e-elementos-requisitos"],
  "atos-administrativos/extincao-anulacao-revogacao-e-cassacao": ["atos-administrativos/atributos"],
  "atos-administrativos/convalidacao": ["atos-administrativos/extincao-anulacao-revogacao-e-cassacao"],

  "agentes-publicos/classificacao-dos-agentes-publicos": ["organizacao-administrativa/administracao-direta-e-orgaos-publicos"],
  "agentes-publicos/cargo-emprego-e-funcao-publica": ["agentes-publicos/classificacao-dos-agentes-publicos"],
  "agentes-publicos/regime-juridico-dos-servidores-visao-geral": ["agentes-publicos/cargo-emprego-e-funcao-publica", "nucleo/direito-constitucional/administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41"],

  "licitacoes-e-contratos-lei-14-133-2021/principios-e-agentes-da-licitacao": ["fundamentos/principios-expressos-limpe"],
  "licitacoes-e-contratos-lei-14-133-2021/modalidades-de-licitacao": ["licitacoes-e-contratos-lei-14-133-2021/principios-e-agentes-da-licitacao"],
  "licitacoes-e-contratos-lei-14-133-2021/fases-do-processo-licitatorio": ["licitacoes-e-contratos-lei-14-133-2021/modalidades-de-licitacao"],
  "licitacoes-e-contratos-lei-14-133-2021/contratacao-direta-dispensa-e-inexigibilidade": ["licitacoes-e-contratos-lei-14-133-2021/modalidades-de-licitacao"],
  "licitacoes-e-contratos-lei-14-133-2021/contratos-administrativos": ["licitacoes-e-contratos-lei-14-133-2021/fases-do-processo-licitatorio"],

  "servicos-publicos-e-bens-publicos/concessao-e-permissao": ["servicos-publicos-e-bens-publicos/servicos-publicos-conceito-e-principios", "licitacoes-e-contratos-lei-14-133-2021/contratos-administrativos"],

  "controle-e-responsabilidade/controle-da-administracao-publica": ["fundamentos/principios-expressos-limpe", "nucleo/direito-constitucional/principios-fundamentais/separacao-dos-poderes-art-2"],
  "controle-e-responsabilidade/responsabilidade-civil-do-estado": ["agentes-publicos/classificacao-dos-agentes-publicos"],
  "controle-e-responsabilidade/improbidade-administrativa-lei-8-429-1992": ["fundamentos/principios-expressos-limpe", "agentes-publicos/classificacao-dos-agentes-publicos"],
  "controle-e-responsabilidade/lei-de-acesso-a-informacao-lei-12-527-2011": ["fundamentos/principios-expressos-limpe"],
  "controle-e-responsabilidade/lei-geral-de-protecao-de-dados-lei-13-709-2018": ["controle-e-responsabilidade/lei-de-acesso-a-informacao-lei-12-527-2011"],
});

ESTUDO.prerequisitos("nucleo/etica", {
  "fundamentos-da-etica/etica-direito-e-cidadania": ["fundamentos-da-etica/etica-moral-e-valores"],
  "fundamentos-da-etica/etica-na-administracao-publica": ["fundamentos-da-etica/etica-direito-e-cidadania"],
  "conduta-profissional/postura-e-comportamento-no-servico-publico": ["fundamentos-da-etica/etica-na-administracao-publica"],
  "conduta-profissional/sigilo-e-uso-da-informacao": ["conduta-profissional/postura-e-comportamento-no-servico-publico"],
  "conduta-profissional/conflito-de-interesses-nocoes": ["fundamentos-da-etica/etica-na-administracao-publica"],
  "atendimento-ao-publico/comunicacao-com-o-cidadao": ["atendimento-ao-publico/qualidade-no-atendimento"],
  "atendimento-ao-publico/atendimento-prioritario": ["atendimento-ao-publico/qualidade-no-atendimento"],
  "atendimento-ao-publico/acessibilidade-e-inclusao": ["atendimento-ao-publico/atendimento-prioritario"],
});

/* ---------- Bloco A · Federal ---------- */

ESTUDO.prerequisitos("bloco-a/etica-federal", {
  "decreto-1-171-1994/regras-deontologicas": ["nucleo/etica/fundamentos-da-etica/etica-na-administracao-publica"],
  "decreto-1-171-1994/principais-deveres-do-servidor": ["decreto-1-171-1994/regras-deontologicas"],
  "decreto-1-171-1994/vedacoes-ao-servidor": ["decreto-1-171-1994/principais-deveres-do-servidor"],
  "decreto-1-171-1994/comissoes-de-etica": ["decreto-1-171-1994/vedacoes-ao-servidor"],
  "normas-correlatas/sistema-de-gestao-da-etica-decreto-6-029-2007": ["decreto-1-171-1994/comissoes-de-etica"],
  "normas-correlatas/conflito-de-interesses-lei-12-813-2013": ["nucleo/etica/conduta-profissional/conflito-de-interesses-nocoes"],
});

ESTUDO.prerequisitos("bloco-a/lei-8112", {
  "disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro": ["nucleo/direito-administrativo/agentes-publicos/cargo-emprego-e-funcao-publica"],
  "disposicoes-preliminares-e-provimento/formas-de-provimento": ["disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
  "disposicoes-preliminares-e-provimento/concurso-publico": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/acesso-a-cargos-concurso-publico-e-acumulacao"],
  "disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio": ["disposicoes-preliminares-e-provimento/formas-de-provimento"],
  "disposicoes-preliminares-e-provimento/estagio-probatorio-e-estabilidade": ["disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio", "nucleo/direito-constitucional/administracao-publica-na-constituicao/estabilidade-do-servidor"],
  "disposicoes-preliminares-e-provimento/readaptacao-reversao-reintegracao-reconducao-e-aproveitamento": ["disposicoes-preliminares-e-provimento/formas-de-provimento", "disposicoes-preliminares-e-provimento/estagio-probatorio-e-estabilidade"],

  "vacancia-e-movimentacao/vacancia": ["disposicoes-preliminares-e-provimento/formas-de-provimento"],
  "vacancia-e-movimentacao/remocao": ["disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio"],
  "vacancia-e-movimentacao/redistribuicao": ["disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
  "vacancia-e-movimentacao/substituicao": ["disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],

  "direitos-e-vantagens/vencimento-e-remuneracao": ["disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
  "direitos-e-vantagens/indenizacoes-ajuda-de-custo-diarias-transporte-e-auxilio-moradia": ["direitos-e-vantagens/vencimento-e-remuneracao"],
  "direitos-e-vantagens/gratificacoes-e-adicionais": ["direitos-e-vantagens/vencimento-e-remuneracao"],
  "direitos-e-vantagens/ferias": ["disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio"],
  "direitos-e-vantagens/licencas": ["disposicoes-preliminares-e-provimento/estagio-probatorio-e-estabilidade"],
  "direitos-e-vantagens/afastamentos": ["direitos-e-vantagens/licencas"],
  "direitos-e-vantagens/concessoes": ["direitos-e-vantagens/licencas"],
  "direitos-e-vantagens/tempo-de-servico": ["direitos-e-vantagens/licencas", "direitos-e-vantagens/afastamentos"],

  "regime-disciplinar/deveres-do-servidor": ["nucleo/direito-administrativo/poderes-administrativos/poder-disciplinar"],
  "regime-disciplinar/proibicoes": ["regime-disciplinar/deveres-do-servidor"],
  "regime-disciplinar/acumulacao-de-cargos": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/acesso-a-cargos-concurso-publico-e-acumulacao"],
  "regime-disciplinar/responsabilidades-civil-penal-e-administrativa": ["regime-disciplinar/deveres-do-servidor"],
  "regime-disciplinar/penalidades": ["regime-disciplinar/proibicoes", "regime-disciplinar/responsabilidades-civil-penal-e-administrativa"],

  "processo-administrativo-disciplinar/disposicoes-gerais": ["regime-disciplinar/penalidades"],
  "processo-administrativo-disciplinar/afastamento-preventivo": ["processo-administrativo-disciplinar/disposicoes-gerais"],
  "processo-administrativo-disciplinar/sindicancia": ["processo-administrativo-disciplinar/disposicoes-gerais"],
  "processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento": ["processo-administrativo-disciplinar/sindicancia"],
  "processo-administrativo-disciplinar/rito-sumario": ["processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento", "regime-disciplinar/acumulacao-de-cargos"],
  "processo-administrativo-disciplinar/revisao-do-processo": ["processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento"],

  "seguridade-social-do-servidor/beneficios-do-servidor-visao-geral": ["disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
});

ESTUDO.prerequisitos("bloco-a/lei-9784", {
  "fundamentos-do-processo/disposicoes-gerais-e-principios": ["nucleo/direito-administrativo/fundamentos/principios-expressos-limpe"],
  "fundamentos-do-processo/direitos-e-deveres-dos-administrados": ["fundamentos-do-processo/disposicoes-gerais-e-principios"],
  "fundamentos-do-processo/inicio-do-processo-e-interessados": ["fundamentos-do-processo/disposicoes-gerais-e-principios"],
  "fundamentos-do-processo/competencia-e-delegacao": ["fundamentos-do-processo/disposicoes-gerais-e-principios", "nucleo/direito-administrativo/poderes-administrativos/poder-hierarquico"],
  "fundamentos-do-processo/impedimento-e-suspeicao": ["fundamentos-do-processo/inicio-do-processo-e-interessados"],

  "atos-e-instrucao/forma-tempo-e-lugar-dos-atos": ["fundamentos-do-processo/inicio-do-processo-e-interessados"],
  "atos-e-instrucao/comunicacao-dos-atos": ["atos-e-instrucao/forma-tempo-e-lugar-dos-atos"],
  "atos-e-instrucao/instrucao": ["atos-e-instrucao/comunicacao-dos-atos"],
  "atos-e-instrucao/dever-de-decidir-e-motivacao": ["atos-e-instrucao/instrucao"],

  "desfecho-recursos-e-prazos/desistencia-e-extincao-do-processo": ["fundamentos-do-processo/inicio-do-processo-e-interessados"],
  "desfecho-recursos-e-prazos/anulacao-revogacao-e-convalidacao": ["nucleo/direito-administrativo/atos-administrativos/extincao-anulacao-revogacao-e-cassacao", "nucleo/direito-administrativo/atos-administrativos/convalidacao"],
  "desfecho-recursos-e-prazos/recurso-administrativo-e-revisao": ["atos-e-instrucao/dever-de-decidir-e-motivacao"],
  "desfecho-recursos-e-prazos/contagem-de-prazos": ["atos-e-instrucao/forma-tempo-e-lugar-dos-atos"],
  "desfecho-recursos-e-prazos/prioridade-na-tramitacao": ["fundamentos-do-processo/inicio-do-processo-e-interessados"],
});

ESTUDO.prerequisitos("bloco-a/nocoes-de-administracao", {
  "teorias-da-administracao/teoria-das-relacoes-humanas": ["teorias-da-administracao/administracao-cientifica-e-teoria-classica"],
  "teorias-da-administracao/teoria-burocratica": ["teorias-da-administracao/administracao-cientifica-e-teoria-classica"],
  "teorias-da-administracao/abordagens-contemporaneas-sistemica-e-contingencial": ["teorias-da-administracao/teoria-burocratica", "teorias-da-administracao/teoria-das-relacoes-humanas"],

  "funcoes-administrativas/planejamento-estrategico-tatico-e-operacional": ["teorias-da-administracao/administracao-cientifica-e-teoria-classica"],
  "funcoes-administrativas/organizacao-e-estruturas-organizacionais": ["funcoes-administrativas/planejamento-estrategico-tatico-e-operacional"],
  "funcoes-administrativas/direcao": ["funcoes-administrativas/organizacao-e-estruturas-organizacionais"],
  "funcoes-administrativas/controle": ["funcoes-administrativas/direcao"],

  "gestao-de-pessoas/lideranca": ["funcoes-administrativas/direcao"],
  "gestao-de-pessoas/motivacao": ["teorias-da-administracao/teoria-das-relacoes-humanas"],
  "gestao-de-pessoas/trabalho-em-equipe-e-gestao-de-conflitos": ["gestao-de-pessoas/lideranca"],
  "gestao-de-pessoas/avaliacao-de-desempenho": ["funcoes-administrativas/controle"],

  "processos-qualidade-e-projetos/ferramentas-da-qualidade-pdca-5w2h-ishikawa-pareto": ["processos-qualidade-e-projetos/gestao-por-processos"],
  "processos-qualidade-e-projetos/nocoes-de-gestao-de-projetos": ["funcoes-administrativas/planejamento-estrategico-tatico-e-operacional"],

  "administracao-publica/modelos-patrimonialista-burocratico-e-gerencial": ["teorias-da-administracao/teoria-burocratica"],
  "administracao-publica/governanca-accountability-e-transparencia": ["administracao-publica/modelos-patrimonialista-burocratico-e-gerencial"],
  "administracao-publica/excelencia-no-atendimento-ao-cidadao": ["administracao-publica/modelos-patrimonialista-burocratico-e-gerencial"],

  "recursos-materiais-e-patrimonio/compras-e-almoxarifado": ["recursos-materiais-e-patrimonio/gestao-de-estoques"],
});

ESTUDO.prerequisitos("bloco-a/arquivologia", {
  "conceitos-fundamentais/principios-arquivisticos": ["conceitos-fundamentais/arquivo-documento-e-informacao"],
  "conceitos-fundamentais/classificacao-dos-arquivos-e-dos-documentos": ["conceitos-fundamentais/arquivo-documento-e-informacao"],

  "gestao-de-documentos/teoria-das-tres-idades": ["conceitos-fundamentais/classificacao-dos-arquivos-e-dos-documentos"],
  "gestao-de-documentos/protocolo-recebimento-registro-e-tramitacao": ["conceitos-fundamentais/arquivo-documento-e-informacao"],
  "gestao-de-documentos/plano-de-classificacao": ["conceitos-fundamentais/principios-arquivisticos"],
  "gestao-de-documentos/avaliacao-e-tabela-de-temporalidade": ["gestao-de-documentos/teoria-das-tres-idades", "gestao-de-documentos/plano-de-classificacao"],

  "arquivamento-e-preservacao/metodos-de-arquivamento": ["conceitos-fundamentais/classificacao-dos-arquivos-e-dos-documentos"],
  "arquivamento-e-preservacao/microfilmagem-e-digitalizacao": ["arquivamento-e-preservacao/conservacao-e-preservacao-de-documentos"],
  "arquivamento-e-preservacao/documento-arquivistico-digital": ["arquivamento-e-preservacao/microfilmagem-e-digitalizacao"],

  "legislacao-arquivistica/lei-8-159-1991-politica-nacional-de-arquivos": ["gestao-de-documentos/teoria-das-tres-idades"],
});

ESTUDO.prerequisitos("bloco-a/seguridade-social", {
  "seguridade-social-na-constituicao/principios-e-objetivos-art-194": ["seguridade-social-na-constituicao/conceito-e-composicao-saude-previdencia-e-assistencia"],
  "seguridade-social-na-constituicao/financiamento-art-195": ["seguridade-social-na-constituicao/conceito-e-composicao-saude-previdencia-e-assistencia"],
  "seguridade-social-na-constituicao/previdencia-social-na-constituicao-arts-201-e-202": ["seguridade-social-na-constituicao/principios-e-objetivos-art-194"],

  "regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios": ["seguridade-social-na-constituicao/previdencia-social-na-constituicao-arts-201-e-202"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/segurado-facultativo": ["regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/dependentes": ["regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/filiacao-e-inscricao": ["regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios", "regime-geral-de-previdencia-social-lei-8-213-1991/segurado-facultativo"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/manutencao-e-perda-da-qualidade-de-segurado": ["regime-geral-de-previdencia-social-lei-8-213-1991/filiacao-e-inscricao"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/carencia": ["regime-geral-de-previdencia-social-lei-8-213-1991/filiacao-e-inscricao"],
  "regime-geral-de-previdencia-social-lei-8-213-1991/salario-de-beneficio-e-renda-mensal": ["regime-geral-de-previdencia-social-lei-8-213-1991/carencia", "custeio-lei-8-212-1991/salario-de-contribuicao"],

  "beneficios-do-rgps/aposentadorias-apos-a-ec-103-2019": ["regime-geral-de-previdencia-social-lei-8-213-1991/carencia", "regime-geral-de-previdencia-social-lei-8-213-1991/salario-de-beneficio-e-renda-mensal"],
  "beneficios-do-rgps/aposentadoria-por-incapacidade-permanente": ["beneficios-do-rgps/auxilio-por-incapacidade-temporaria"],
  "beneficios-do-rgps/aposentadoria-especial": ["beneficios-do-rgps/aposentadorias-apos-a-ec-103-2019"],
  "beneficios-do-rgps/auxilio-por-incapacidade-temporaria": ["regime-geral-de-previdencia-social-lei-8-213-1991/carencia"],
  "beneficios-do-rgps/auxilio-acidente": ["beneficios-do-rgps/auxilio-por-incapacidade-temporaria"],
  "beneficios-do-rgps/pensao-por-morte": ["regime-geral-de-previdencia-social-lei-8-213-1991/dependentes"],
  "beneficios-do-rgps/auxilio-reclusao": ["regime-geral-de-previdencia-social-lei-8-213-1991/dependentes"],
  "beneficios-do-rgps/salario-maternidade": ["regime-geral-de-previdencia-social-lei-8-213-1991/carencia"],
  "beneficios-do-rgps/salario-familia": ["regime-geral-de-previdencia-social-lei-8-213-1991/dependentes"],

  "custeio-lei-8-212-1991/salario-de-contribuicao": ["regime-geral-de-previdencia-social-lei-8-213-1991/segurados-obrigatorios"],
  "custeio-lei-8-212-1991/contribuicao-dos-segurados": ["custeio-lei-8-212-1991/salario-de-contribuicao"],
  "custeio-lei-8-212-1991/contribuicao-da-empresa-e-do-empregador-domestico": ["seguridade-social-na-constituicao/financiamento-art-195"],
  "custeio-lei-8-212-1991/arrecadacao-e-recolhimento": ["custeio-lei-8-212-1991/contribuicao-dos-segurados", "custeio-lei-8-212-1991/contribuicao-da-empresa-e-do-empregador-domestico"],

  "assistencia-social/loas-lei-8-742-1993-principios-e-organizacao": ["seguridade-social-na-constituicao/conceito-e-composicao-saude-previdencia-e-assistencia"],
  "assistencia-social/beneficio-de-prestacao-continuada-bpc": ["assistencia-social/loas-lei-8-742-1993-principios-e-organizacao"],

  "regulamento-da-previdencia/decreto-3-048-1999-pontos-principais": ["beneficios-do-rgps/aposentadorias-apos-a-ec-103-2019", "regime-geral-de-previdencia-social-lei-8-213-1991/filiacao-e-inscricao"],
});

ESTUDO.prerequisitos("bloco-a/conhecimentos-gerais", {
  "gestao-publica-federal/estrutura-do-poder-executivo-federal": ["nucleo/direito-constitucional/organizacao-dos-poderes/poder-executivo", "nucleo/direito-administrativo/organizacao-administrativa/administracao-direta-e-orgaos-publicos"],
  "gestao-publica-federal/governo-digital-lei-14-129-2021": ["nucleo/direito-administrativo/controle-e-responsabilidade/lei-de-acesso-a-informacao-lei-12-527-2011"],
});

/* ---------- Bloco C · Paraná e municípios ---------- */
/* Leis locais: a base é a CF e a Lei 8.112, que servem de comparação nos textos. */

ESTUDO.prerequisitos("bloco-c/curitiba", {
  "lei-organica-do-municipio-de-curitiba/organizacao-do-municipio-e-competencias": ["nucleo/direito-constitucional/organizacao-do-estado/estados-municipios-e-distrito-federal"],
  "lei-organica-do-municipio-de-curitiba/poder-legislativo-camara-municipal": ["lei-organica-do-municipio-de-curitiba/organizacao-do-municipio-e-competencias", "nucleo/direito-constitucional/organizacao-dos-poderes/poder-legislativo"],
  "lei-organica-do-municipio-de-curitiba/processo-legislativo-municipal": ["lei-organica-do-municipio-de-curitiba/poder-legislativo-camara-municipal", "nucleo/direito-constitucional/organizacao-dos-poderes/processo-legislativo"],
  "lei-organica-do-municipio-de-curitiba/poder-executivo-prefeito-e-vice-prefeito": ["lei-organica-do-municipio-de-curitiba/organizacao-do-municipio-e-competencias"],
  "lei-organica-do-municipio-de-curitiba/administracao-publica-municipal": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/principios-da-administracao-publica-art-37"],
  "lei-organica-do-municipio-de-curitiba/servidores-municipais-na-lei-organica": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41"],
  "lei-organica-do-municipio-de-curitiba/tributacao-financas-e-orcamento-municipal": ["bloco-c/gestao-publica/orcamento-publico/ppa-ldo-e-loa"],

  "estatuto-dos-servidores-de-curitiba/provimento-nomeacao-posse-e-exercicio": ["bloco-a/lei-8112/disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio"],
  "estatuto-dos-servidores-de-curitiba/estagio-probatorio-e-estabilidade": ["bloco-a/lei-8112/disposicoes-preliminares-e-provimento/estagio-probatorio-e-estabilidade"],
  "estatuto-dos-servidores-de-curitiba/vacancia": ["bloco-a/lei-8112/vacancia-e-movimentacao/vacancia"],
  "estatuto-dos-servidores-de-curitiba/direitos-e-vantagens": ["bloco-a/lei-8112/direitos-e-vantagens/vencimento-e-remuneracao"],
  "estatuto-dos-servidores-de-curitiba/licencas-e-afastamentos": ["bloco-a/lei-8112/direitos-e-vantagens/licencas"],
  "estatuto-dos-servidores-de-curitiba/deveres-e-proibicoes": ["bloco-a/lei-8112/regime-disciplinar/deveres-do-servidor"],
  "estatuto-dos-servidores-de-curitiba/responsabilidades-e-penalidades": ["bloco-a/lei-8112/regime-disciplinar/penalidades"],
  "estatuto-dos-servidores-de-curitiba/processo-disciplinar": ["bloco-a/lei-8112/processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento"],
});

ESTUDO.prerequisitos("bloco-c/parana", {
  "constituicao-do-estado-do-parana/principios-fundamentais-e-organizacao-do-estado": ["nucleo/direito-constitucional/organizacao-do-estado/organizacao-politico-administrativa"],
  "constituicao-do-estado-do-parana/competencias-do-estado": ["nucleo/direito-constitucional/organizacao-do-estado/estados-municipios-e-distrito-federal"],
  "constituicao-do-estado-do-parana/administracao-publica-estadual": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/principios-da-administracao-publica-art-37"],
  "constituicao-do-estado-do-parana/servidores-publicos-estaduais": ["nucleo/direito-constitucional/administracao-publica-na-constituicao/servidores-publicos-arts-39-a-41"],
  "constituicao-do-estado-do-parana/organizacao-dos-poderes-no-estado": ["nucleo/direito-constitucional/principios-fundamentais/separacao-dos-poderes-art-2"],

  "estatuto-dos-servidores-do-parana/provimento-e-investidura": ["bloco-a/lei-8112/disposicoes-preliminares-e-provimento/formas-de-provimento"],
  "estatuto-dos-servidores-do-parana/vacancia": ["bloco-a/lei-8112/vacancia-e-movimentacao/vacancia"],
  "estatuto-dos-servidores-do-parana/direitos-e-vantagens": ["bloco-a/lei-8112/direitos-e-vantagens/vencimento-e-remuneracao"],
  "estatuto-dos-servidores-do-parana/licencas-e-afastamentos": ["bloco-a/lei-8112/direitos-e-vantagens/licencas"],
  "estatuto-dos-servidores-do-parana/deveres-proibicoes-e-responsabilidades": ["bloco-a/lei-8112/regime-disciplinar/deveres-do-servidor"],
  "estatuto-dos-servidores-do-parana/regime-disciplinar-e-processo": ["bloco-a/lei-8112/regime-disciplinar/penalidades", "bloco-a/lei-8112/processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento"],
});

ESTUDO.prerequisitos("bloco-c/regiao-metropolitana", {
  "sao-jose-dos-pinhais/lei-organica-de-sao-jose-dos-pinhais": ["nucleo/direito-constitucional/organizacao-do-estado/estados-municipios-e-distrito-federal"],
  "sao-jose-dos-pinhais/estatuto-dos-servidores-de-sao-jose-dos-pinhais": ["bloco-a/lei-8112/disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
  "araucaria/lei-organica-de-araucaria": ["nucleo/direito-constitucional/organizacao-do-estado/estados-municipios-e-distrito-federal"],
  "araucaria/estatuto-dos-servidores-de-araucaria": ["bloco-a/lei-8112/disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro"],
  "camaras-municipais/regimento-interno-da-camara": ["nucleo/direito-constitucional/organizacao-dos-poderes/poder-legislativo"],
  "camaras-municipais/processo-legislativo-municipal": ["nucleo/direito-constitucional/organizacao-dos-poderes/processo-legislativo"],
  "camaras-municipais/atribuicoes-da-camara-e-dos-vereadores": ["camaras-municipais/regimento-interno-da-camara"],
});

ESTUDO.prerequisitos("bloco-c/gestao-publica", {
  "orcamento-publico/ppa-ldo-e-loa": ["orcamento-publico/principios-orcamentarios"],
  "orcamento-publico/ciclo-orcamentario": ["orcamento-publico/ppa-ldo-e-loa"],
  "orcamento-publico/receita-e-despesa-publica": ["orcamento-publico/principios-orcamentarios"],
  "lei-de-responsabilidade-fiscal-lc-101-2000/planejamento-e-metas-fiscais": ["orcamento-publico/ppa-ldo-e-loa"],
  "lei-de-responsabilidade-fiscal-lc-101-2000/limites-de-despesa-com-pessoal": ["orcamento-publico/receita-e-despesa-publica"],
  "lei-de-responsabilidade-fiscal-lc-101-2000/transparencia-da-gestao-fiscal": ["lei-de-responsabilidade-fiscal-lc-101-2000/planejamento-e-metas-fiscais", "nucleo/direito-administrativo/controle-e-responsabilidade/lei-de-acesso-a-informacao-lei-12-527-2011"],
});

ESTUDO.prerequisitos("bloco-c/conhecimentos-regionais", {
  "historia-do-parana/ciclos-economicos-ouro-tropeirismo-erva-mate-madeira-e-cafe": ["historia-do-parana/ocupacao-e-povoamento"],
  "historia-do-parana/emancipacao-politica-da-provincia": ["historia-do-parana/ciclos-economicos-ouro-tropeirismo-erva-mate-madeira-e-cafe"],
  "historia-do-parana/imigracao": ["historia-do-parana/emancipacao-politica-da-provincia"],
  "historia-do-parana/conflitos-revolucao-federalista-e-contestado": ["historia-do-parana/emancipacao-politica-da-provincia"],
  "geografia-do-parana/economia-e-regioes-do-estado": ["geografia-do-parana/populacao-e-urbanizacao"],
  "curitiba/formacao-historica-de-curitiba": ["historia-do-parana/ocupacao-e-povoamento"],
  "curitiba/planejamento-urbano-e-transporte": ["curitiba/formacao-historica-de-curitiba", "geografia-do-parana/populacao-e-urbanizacao"],
  "curitiba/cultura-e-turismo": ["curitiba/formacao-historica-de-curitiba"],
});

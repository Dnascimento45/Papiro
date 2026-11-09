/* Aprofundamento · Informática.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/informatica.js.
   Atalhos de teclado: versões em português do Windows e do Microsoft Office. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/informatica/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Informática para Concursos", autor: "João Antonio Carvalho", nota: "Feito para prova: hardware, Windows, Office, redes e segurança." },
    { titulo: "Cartilha de Segurança para Internet (CERT.br)", url: "https://cartilha.cert.br", nota: "Gratuita e oficial; base de muitas questões de segurança." },
    { titulo: "Suporte da Microsoft em português", url: "https://support.microsoft.com/pt-br", nota: "Listas oficiais de atalhos do Windows, Word, Excel e PowerPoint." },
    { titulo: "Ajuda do LibreOffice", url: "https://help.libreoffice.org", nota: "Documentação oficial do Writer, Calc e Impress." },
    { titulo: "Redes de Computadores", autor: "Andrew S. Tanenbaum", nota: "Para aprofundar redes e protocolos além do que a prova pede." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Noções de Informática, filtrando pelo assunto e pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };

  /* ================= CONCEITOS BÁSICOS E HARDWARE ================= */

  A("conceitos-basicos-e-hardware/componentes-do-computador", [
    aprofundar([
      "### Dentro da CPU",
      "- **Unidade de Controle (UC)**: busca e interpreta as instruções e coordena o resto.",
      "- **Unidade Lógica e Aritmética (ULA)**: faz as contas e as comparações lógicas.",
      "- **Registradores**: memórias minúsculas e rapidíssimas dentro do processador.",
      "",
      "### Medidas do processador",
      "- **Clock** (frequência), em GHz: quantos ciclos por segundo.",
      "- **Núcleos (cores)**: processadores independentes no mesmo chip; **threads**: linhas de execução simultâneas.",
      "",
      "### Placa-mãe",
      "Liga tudo: soquete do processador, slots de memória, **barramentos** (caminhos de dados) e o **chipset**. A **GPU** (placa de vídeo) processa imagens; a **fonte** converte a energia da tomada.",
    ]),
    PRATICAR,
    q("O componente da CPU responsável pelas operações aritméticas e lógicas é a:", ["Unidade de Controle", "ULA", "memória cache", "placa-mãe", "GPU"], "B", "A UC coordena; a ULA calcula e compara."),
    q("A frequência de operação de um processador (clock) é medida, nos computadores atuais, em:", ["GB", "GHz", "Mbps", "rpm", "dpi"], "B", "Gigahertz: bilhões de ciclos por segundo. GB é capacidade e Mbps, velocidade de rede."),
    ce("A unidade de controle é o componente da CPU que executa os cálculos.", "Errado", "Quem executa os cálculos é a ULA; a UC coordena a execução das instruções."),
  ]);

  A("conceitos-basicos-e-hardware/dispositivos-de-entrada-e-saida", [
    aprofundar([
      "### Classificação pelo sentido do dado",
      "- **Entrada** (do usuário para o computador): teclado, mouse, scanner, microfone, webcam, leitor de código de barras.",
      "- **Saída** (do computador para o usuário): monitor, impressora, caixa de som, projetor.",
      "- **Entrada e saída** (os dois sentidos): tela sensível ao toque (touchscreen), impressora multifuncional (imprime e digitaliza), headset com microfone.",
      "",
      "Dispositivos de **armazenamento** (pendrive, HD externo) costumam ser classificados como entrada e saída, porque se lê e se grava neles.",
    ]),
    PRATICAR,
    q("A tela sensível ao toque de um tablet é um dispositivo de:", ["entrada apenas", "saída apenas", "entrada e saída", "processamento", "armazenamento apenas"], "C", "Mostra a imagem (saída) e recebe o toque (entrada)."),
    q("Qual dos dispositivos é apenas de entrada?", ["monitor", "impressora", "scanner", "caixa de som", "projetor"], "C", "O scanner só envia dados para o computador."),
    ce("O microfone é um dispositivo de saída.", "Errado", "Ele capta o som e o envia ao computador: entrada."),
  ]);

  A("conceitos-basicos-e-hardware/memorias-e-armazenamento", [
    aprofundar([
      "### Da mais rápida para a mais lenta",
      "Registradores → cache → RAM → SSD → HD. Quanto mais rápida, mais cara e menor.",
      "",
      "### Volátil × não volátil",
      "- **RAM** é **volátil**: perde tudo ao desligar. Guarda o que está aberto agora.",
      "- **ROM** e a memória **flash** (SSD, pendrive, cartão) são **não voláteis**. O **firmware** (BIOS/UEFI) fica numa memória desse tipo.",
      "- **SSD**: memória flash, sem partes móveis, muito mais rápido que o **HD**, que tem discos e cabeça de leitura.",
      "",
      "### Bits e bytes",
      "1 byte = 8 bits. Velocidade de internet se mede em **bits** por segundo: 100 Mbps ≈ 12,5 MB/s (divide por 8).",
    ]),
    PRATICAR,
    q("Qual é a ordem correta, da memória mais rápida para a mais lenta?", ["HD, SSD, RAM, cache", "cache, RAM, registradores, SSD", "registradores, cache, RAM, SSD, HD", "RAM, cache, HD, SSD", "SSD, HD, RAM, registradores"], "C", "Registradores ficam dentro da CPU; o HD mecânico é o mais lento."),
    q("Uma conexão de 100 Mbps transfere, no máximo, aproximadamente quantos megabytes por segundo?", ["8", "12,5", "100", "800", "1.000"], "B", "100 megabits ÷ 8 = 12,5 megabytes."),
    ce("A memória RAM é não volátil: mantém os dados mesmo com o computador desligado.", "Errado", "A RAM é volátil."),
  ]);

  /* ================= SISTEMAS OPERACIONAIS ================= */

  A("sistemas-operacionais/windows-10-e-11-conceitos-e-interface", [
    aprofundar([
      "### A Lixeira em detalhe",
      "- Arquivos apagados do disco do computador vão para a Lixeira e podem ser restaurados.",
      "- **Não** vão para a Lixeira: arquivos de **pendrive** e de **unidades de rede**, arquivos maiores que o espaço da Lixeira e o que se apaga com **Shift + Delete** (exclusão permanente).",
      "",
      "### Onde configurar",
      "**Configurações** (Win + I) é o painel moderno; o **Painel de Controle** ainda existe para opções antigas. **Segurança do Windows** reúne o antivírus (Microsoft Defender) e o firewall.",
      "",
      "### Recursos que caem",
      "Histórico da área de transferência (Win + V), captura de tela (Win + Shift + S), áreas de trabalho virtuais (Win + Tab), layouts de ajuste de janelas no Windows 11 (Win + Z) e o OneDrive integrado ao Explorador.",
    ]),
    PRATICAR,
    q("Um arquivo excluído de um pendrive com a tecla Delete, no Windows:", ["vai para a Lixeira e pode ser restaurado", "é excluído definitivamente, sem passar pela Lixeira", "fica oculto no pendrive", "é movido para Documentos", "é enviado ao OneDrive"], "B", "Unidades removíveis e de rede não usam a Lixeira."),
    ce("O atalho Shift + Delete envia o arquivo selecionado para a Lixeira.", "Errado", "Shift + Delete exclui permanentemente, sem passar pela Lixeira."),
    q("No Windows 10 e 11, o atalho Win + V abre:", ["o Explorador de Arquivos", "o histórico da área de transferência", "as Configurações", "a área de trabalho", "a captura de tela"], "B", "Mostra os itens copiados recentemente (quando o histórico está ativado)."),
  ]);

  A("sistemas-operacionais/atalhos-de-teclado-do-windows", [
    aprofundar([
      "### Os que mais caem",
      "- **Win + E**: Explorador de Arquivos · **Win + D**: área de trabalho · **Win + L**: bloquear · **Win + R**: Executar · **Win + I**: Configurações.",
      "- **Alt + Tab**: alternar janelas · **Alt + F4**: fechar a janela (na área de trabalho, abre o desligamento).",
      "- **Ctrl + Shift + Esc**: Gerenciador de Tarefas direto · **Ctrl + Alt + Del**: tela de opções de segurança.",
      "- **F2**: renomear o item selecionado · **F5**: atualizar.",
      "- **Win + Tab**: Visão de Tarefas · **Win + seta**: encaixar a janela na metade da tela.",
    ]),
    PRATICAR,
    q("Qual atalho abre diretamente o Gerenciador de Tarefas no Windows?", ["Ctrl + Alt + Del", "Ctrl + Shift + Esc", "Alt + F4", "Win + R", "Win + T"], "B", "Ctrl + Alt + Del abre uma tela de opções, da qual se escolhe o Gerenciador."),
    q("No Explorador de Arquivos, a tecla que permite renomear o item selecionado é:", ["F1", "F2", "F5", "F11", "Esc"], "B", "F2 entra no modo de edição do nome."),
    ce("No Windows, o atalho Win + D mostra a área de trabalho, minimizando as janelas abertas.", "Certo", "Pressionado de novo, restaura as janelas."),
    q("O atalho que abre a caixa “Executar” no Windows é:", ["Win + E", "Win + R", "Win + X", "Ctrl + R", "Alt + R"], "B", "Win + E abre o Explorador; Win + X, o menu de links rápidos."),
  ]);

  A("sistemas-operacionais/gerenciamento-de-arquivos-e-pastas", [
    aprofundar([
      "### Arrastar com o mouse",
      "- Na **mesma unidade**, arrastar **move**; para **outra unidade**, arrastar **copia**.",
      "- Segurando **Ctrl**, sempre copia; segurando **Shift**, sempre move; com **Alt**, cria atalho.",
      "",
      "### Nomes de arquivo",
      "Não são permitidos os caracteres \\ / : ? \" < > | nem o asterisco. O Windows não diferencia maiúsculas de minúsculas no nome (o Linux diferencia).",
      "",
      "### Extensões e caminhos",
      "A extensão indica o tipo (.docx, .xlsx, .pdf, .zip). Caminho absoluto começa pela unidade: C:\\Users\\Ana\\Documentos\\relatorio.docx.",
    ]),
    PRATICAR,
    q("Qual caractere NÃO pode ser usado no nome de um arquivo no Windows?", ["hífen (-)", "sublinhado (_)", "ponto de interrogação (?)", "parênteses ( )", "espaço"], "C", "Proibidos: \\ / : ? \" < > | e o asterisco."),
    q("Ao arrastar um arquivo, sem teclas, de uma pasta do disco C: para um pendrive, o Windows:", ["move o arquivo", "copia o arquivo", "cria um atalho", "exclui o arquivo", "compacta o arquivo"], "B", "Entre unidades diferentes, o padrão é copiar."),
    ce("No Windows, segurar a tecla Ctrl enquanto se arrasta um arquivo faz com que ele seja copiado.", "Certo", "Ctrl força a cópia; Shift força a movimentação."),
  ]);

  A("sistemas-operacionais/nocoes-de-linux", [
    aprofundar([
      "### Conceitos",
      "- **Kernel** (núcleo) é o Linux propriamente dito; **distribuições** (Ubuntu, Debian, Fedora, Mint) juntam o kernel a programas e interface.",
      "- É **software livre**: pode ser usado, estudado, modificado e redistribuído (licença GPL).",
      "- **root** é o superusuário; **sudo** executa um comando com privilégios de administrador.",
      "- Tudo parte da raiz **/**; as pastas pessoais ficam em **/home**.",
      "- Diferencia **maiúsculas e minúsculas**: Relatorio.txt e relatorio.txt são arquivos diferentes.",
      "",
      "### Comandos que caem",
      "ls (listar), cd (mudar de diretório), pwd (mostrar o diretório atual), mkdir (criar diretório), rm (remover), cp (copiar), mv (mover ou renomear), cat (mostrar conteúdo), chmod (mudar permissões).",
    ]),
    PRATICAR,
    q("No Linux, o comando que mostra o diretório em que o usuário está é:", ["ls", "cd", "pwd", "mkdir", "cat"], "C", "pwd = print working directory."),
    q("O comando usado para alterar as permissões de um arquivo no Linux é:", ["chmod", "chown", "mv", "sudo", "rm"], "A", "chown muda o dono; chmod muda as permissões."),
    ce("O Linux diferencia letras maiúsculas e minúsculas nos nomes de arquivos.", "Certo", "Ao contrário do Windows."),
  ]);

  /* ================= EDITORES DE TEXTO ================= */

  A("editores-de-texto/microsoft-word-formatacao-e-recursos", [
    aprofundar([
      "### Em que guia fica",
      "- **Página Inicial**: fonte, parágrafo, estilos, localizar e substituir.",
      "- **Inserir**: tabelas, imagens, cabeçalho e rodapé, número de página, quebra de página.",
      "- **Layout**: margens, orientação, colunas, **quebras de seção**.",
      "- **Referências**: **sumário**, notas de rodapé, citações, legendas.",
      "- **Correspondências**: **mala direta**.",
      "- **Revisão**: ortografia, comentários, **controlar alterações**.",
      "",
      "### Sumário automático",
      "Funciona quando os títulos usam os **estilos** Título 1, Título 2… Depois basta atualizar o sumário.",
      "",
      "### Quebra de seção",
      "Permite mudar orientação, margens, cabeçalho ou numeração **só numa parte** do documento.",
    ]),
    PRATICAR,
    q("No Word, o recurso para gerar várias cartas personalizadas a partir de uma lista de destinatários é:", ["controlar alterações", "mala direta", "sumário", "quebra de seção", "SmartArt"], "B", "Fica na guia Correspondências."),
    q("Para inserir um sumário automático no Word, os títulos do documento devem estar formatados com:", ["negrito e fonte maior", "estilos de título", "letras maiúsculas", "tabulação", "notas de rodapé"], "B", "O sumário lê os estilos Título 1, Título 2, etc."),
    ce("No Word, a quebra de seção permite usar orientação retrato numa parte do documento e paisagem em outra.", "Certo", "Cada seção pode ter configuração de página própria."),
  ]);

  A("editores-de-texto/libreoffice-writer", [
    aprofundar([
      "### Formatos ODF",
      "O LibreOffice usa o padrão aberto **ODF**: **.odt** (texto, Writer), **.ods** (planilha, Calc), **.odp** (apresentação, Impress). Também abre e salva .docx, .xlsx e .pptx.",
      "",
      "### Recursos",
      "- **Exportar como PDF** direto pelo menu Arquivo.",
      "- **Estilos e formatação**: F11.",
      "- **Navegador**: F5 (salta entre títulos, tabelas, imagens).",
      "- É software livre e gratuito.",
    ]),
    PRATICAR,
    q("A extensão padrão de um documento de texto do LibreOffice Writer é:", [".docx", ".odt", ".ods", ".txt", ".odp"], "B", ".ods é do Calc e .odp, do Impress."),
    ce("O LibreOffice Writer permite exportar o documento diretamente para PDF.", "Certo", "Arquivo > Exportar como PDF."),
    q("No LibreOffice Writer, a tecla que abre o painel de Estilos é:", ["F5", "F7", "F11", "F12", "F1"], "C", "F5 abre o Navegador e F7, a verificação ortográfica."),
  ]);

  A("editores-de-texto/atalhos-dos-editores-de-texto", [
    aprofundar([
      "### Onde Word (português) e Writer diferem",
      "- Negrito: Word **Ctrl + N**; Writer **Ctrl + B**.",
      "- Sublinhado: Word **Ctrl + S**; Writer **Ctrl + U**.",
      "- Salvar: Word **Ctrl + B**; Writer **Ctrl + S**.",
      "- Localizar: Word **Ctrl + L**; Writer **Ctrl + F**. Substituir: Word **Ctrl + U**; Writer **Ctrl + H**.",
      "- Alinhar à esquerda: Word **Ctrl + Q**; Writer **Ctrl + L**. À direita: Word **Ctrl + G**; Writer **Ctrl + R**.",
      "",
      "### Iguais nos dois",
      "Itálico (Ctrl + I), centralizar (Ctrl + E), justificar (Ctrl + J) e quebra de página (Ctrl + Enter).",
    ]),
    PRATICAR,
    q("No LibreOffice Writer, o atalho para negrito é:", ["Ctrl + N", "Ctrl + B", "Ctrl + G", "Ctrl + S", "Ctrl + I"], "B", "No Word em português, negrito é Ctrl + N."),
    q("No Microsoft Word em português, o atalho Ctrl + U:", ["sublinha o texto", "abre Substituir", "salva o documento", "alinha à direita", "insere um link"], "B", "No Word em português, sublinhado é Ctrl + S e salvar é Ctrl + B."),
    ce("Tanto no Word quanto no Writer, Ctrl + Enter insere uma quebra de página.", "Certo", "É um dos atalhos iguais nos dois."),
  ]);

  /* ================= PLANILHAS ELETRÔNICAS ================= */

  A("planilhas-eletronicas/microsoft-excel-conceitos-e-referencias", [
    aprofundar([
      "### O $ trava o que vem depois dele",
      "- **A1** (relativa): coluna e linha mudam ao copiar.",
      "- **$A$1** (absoluta): nada muda.",
      "- **$A1** (mista): a coluna fica; a linha muda. **A$1**: a linha fica; a coluna muda.",
      "",
      "Ao copiar uma fórmula, conte quantas colunas e linhas ela andou e aplique esse deslocamento só ao que **não** tem $.",
      "",
      "### Erros",
      "**#DIV/0!** (divisão por zero), **#NOME?** (função escrita errada), **#REF!** (referência apagada), **#VALOR!** (tipo errado, como texto numa conta), **#N/D** (valor não encontrado, comum no PROCV). **#####**: a coluna está estreita para mostrar o número.",
      "",
      "### Outra planilha",
      "No Excel: =Planilha2!A1. No Calc: =Planilha2.A1 (com ponto).",
    ]),
    PRATICAR,
    q("A célula C1 contém =A1*$B$1. Copiada para C3, a fórmula fica:", ["=A1*$B$1", "=A3*$B$3", "=A3*$B$1", "=C3*$B$1", "=A3*B3"], "C", "Andou 2 linhas: A1 vira A3; $B$1 é absoluta e não muda."),
    q("A célula B2 contém =$A2+C$1. Copiada para C3 (uma coluna à direita e uma linha abaixo), fica:", ["=$A3+D$1", "=$A2+D$1", "=$B3+D$1", "=$A3+C$2", "=$A3+D$2"], "A", "$A trava a coluna (a linha 2 vira 3); C$1 trava a linha (a coluna C vira D)."),
    q("O erro #DIV/0! indica que:", ["a coluna está estreita", "a função foi digitada errado", "houve divisão por zero", "uma referência foi apagada", "o valor procurado não existe"], "C", "#NOME? é função errada; #REF!, referência apagada; #N/D, valor não encontrado."),
    ce("No Excel, a sequência ##### numa célula costuma indicar que a coluna é estreita demais para exibir o valor.", "Certo", "Basta alargar a coluna."),
  ]);

  A("planilhas-eletronicas/formulas-e-funcoes-soma-media-se-procv", [
    aprofundar([
      "### Funções além das básicas",
      "- **CONT.NÚM** conta células com números; **CONT.VALORES** conta as não vazias; **CONT.SE** conta as que atendem a um critério.",
      "- **SOMASE**(intervalo; critério; [intervalo_soma]) soma só o que atende ao critério.",
      "- **MÁXIMO**, **MÍNIMO**, **ARRED**(número; casas), **HOJE**() (data atual).",
      "- **&** junta textos: =A1&\" \"&B1.",
      "",
      "### PROCV",
      "=PROCV(valor_procurado; tabela; nº_da_coluna; [procurar_intervalo]). Com **FALSO** (ou 0), busca correspondência **exata**. O valor procurado precisa estar na **primeira coluna** da tabela.",
      "",
      "### SE aninhado",
      "=SE(A1>=7;\"Aprovado\";SE(A1>=5;\"Recuperação\";\"Reprovado\")).",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Lendo uma planilha", enunciado: "As células A1 a A4 contêm 2, 4, 6 e 8. Quanto valem =SOMA(A1:A4), =MÉDIA(A1:A4), =CONT.SE(A1:A4;\">4\") e =MÁXIMO(A1:A4)-MÍNIMO(A1:A4)?",
      resolucao: "Soma: 20. Média: 20 ÷ 4 = 5. Maiores que 4: 6 e 8, então 2. Máximo − mínimo: 8 − 2 = 6.", resposta: "20, 5, 2 e 6" },
    PRATICAR,
    q("As células A1 a A4 contêm 2, 4, 6 e 8. O resultado de =CONT.SE(A1:A4;\">4\") é:", ["1", "2", "3", "14", "20"], "B", "Só 6 e 8 são maiores que 4."),
    q("A célula A1 contém 6,5. A fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\") retorna:", ["Aprovado", "Reprovado", "6,5", "VERDADEIRO", "#VALOR!"], "B", "6,5 não é maior ou igual a 7: vale o terceiro argumento."),
    q("No PROCV, o quarto argumento igual a FALSO indica:", ["busca na última coluna", "correspondência exata", "correspondência aproximada", "busca da direita para a esquerda", "que a tabela está ordenada"], "B", "Sem ele (ou com VERDADEIRO), a busca é aproximada e exige a tabela ordenada."),
    ce("A função SOMASE soma apenas os valores que atendem a um critério.", "Certo", "Ex.: =SOMASE(B2:B10;\"Compras\";C2:C10)."),
  ]);

  A("planilhas-eletronicas/libreoffice-calc", [
    aprofundar([
      "### Diferenças que as bancas cobram",
      "- Formato padrão **.ods**.",
      "- Referência a outra planilha com **ponto**: =Planilha2.A1 (no Excel, com exclamação: =Planilha2!A1).",
      "- As funções têm, em geral, os mesmos nomes em português (SOMA, MÉDIA, SE, PROCV) e o separador de argumentos é o ponto e vírgula.",
      "- Também aceita a concatenação com & e a referência absoluta com $.",
    ]),
    PRATICAR,
    q("No LibreOffice Calc, a fórmula que referencia a célula A1 da planilha chamada Planilha2 é:", ["=Planilha2!A1", "=Planilha2.A1", "=Planilha2:A1", "=Planilha2/A1", "=[Planilha2]A1"], "B", "No Excel seria =Planilha2!A1."),
    ce("O formato de arquivo padrão do LibreOffice Calc é o .ods.", "Certo", "OpenDocument Spreadsheet."),
  ]);

  A("planilhas-eletronicas/graficos-filtros-e-classificacao", [
    aprofundar([
      "### Que gráfico usar",
      "- **Pizza (setores)**: partes de um todo, em percentual.",
      "- **Colunas ou barras**: comparar categorias.",
      "- **Linhas**: evolução ao longo do tempo.",
      "- **Dispersão**: relação entre duas variáveis.",
      "",
      "### Filtrar × classificar",
      "- **Filtro** **oculta** as linhas que não atendem ao critério; não apaga nada.",
      "- **Classificar** reordena as linhas. Selecione todas as colunas da tabela, senão os dados de uma linha se separam.",
      "",
      "### Outros recursos",
      "**Formatação condicional** (cor automática conforme o valor) e **tabela dinâmica** (resume e cruza dados de uma tabela grande).",
    ]),
    PRATICAR,
    q("Para mostrar a participação percentual de cada setor no orçamento total, o gráfico mais adequado é o de:", ["linhas", "pizza (setores)", "dispersão", "área empilhada", "radar"], "B", "Pizza mostra partes de um todo."),
    ce("Ao aplicar um filtro numa planilha, as linhas que não atendem ao critério são excluídas.", "Errado", "Elas ficam ocultas; ao limpar o filtro, voltam a aparecer."),
    q("O recurso que resume uma tabela grande, cruzando categorias e somando valores, é a:", ["formatação condicional", "tabela dinâmica", "validação de dados", "classificação", "mala direta"], "B", "Também chamada de tabela dinâmica (Excel) ou tabela dinâmica/piloto de dados (Calc)."),
  ]);

  /* ================= APRESENTAÇÕES E FERRAMENTAS COLABORATIVAS ================= */

  A("apresentacoes-e-ferramentas-colaborativas/powerpoint-e-libreoffice-impress", [
    aprofundar([
      "### Transição × animação",
      "- **Transição**: efeito **entre slides** (na passagem de um para outro).",
      "- **Animação**: efeito em **objetos dentro do slide** (texto que entra, imagem que gira).",
      "",
      "### Apresentar",
      "**F5** começa do **primeiro** slide; **Shift + F5**, do **slide atual**. Esc encerra.",
      "",
      "### Slide mestre",
      "Define o padrão (fontes, cores, logotipo, posição dos títulos) de todos os slides de uma vez.",
      "",
      "### Formatos",
      ".pptx (PowerPoint), .ppsx (abre direto em modo de apresentação), .odp (Impress).",
    ]),
    PRATICAR,
    q("No PowerPoint, o atalho que inicia a apresentação a partir do slide atual é:", ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5", "F7"], "B", "F5 começa do primeiro slide."),
    ce("A transição é um efeito aplicado aos objetos dentro de um slide.", "Errado", "Isso é animação; a transição ocorre entre um slide e outro."),
    q("Para colocar o logotipo do órgão em todos os slides de uma vez, usa-se:", ["a transição", "o slide mestre", "a animação", "a classificação de slides", "as anotações"], "B", "O mestre padroniza todos os slides."),
  ]);

  A("apresentacoes-e-ferramentas-colaborativas/microsoft-365-teams-e-onedrive", [
    aprofundar([
      "### OneDrive",
      "Armazenamento em nuvem da Microsoft: sincroniza pastas entre dispositivos, guarda **histórico de versões** e permite **compartilhar** por link, definindo se a pessoa pode só ver ou também editar.",
      "",
      "### Coautoria",
      "Com o arquivo na nuvem (OneDrive ou SharePoint), várias pessoas editam o mesmo documento do Word, Excel ou PowerPoint **ao mesmo tempo**.",
      "",
      "### Teams",
      "Equipes, **canais** (conversas por assunto dentro da equipe), chats, reuniões por vídeo e arquivos compartilhados.",
    ]),
    PRATICAR,
    q("O recurso do OneDrive que permite recuperar uma versão anterior de um arquivo editado por engano é o:", ["histórico de versões", "modo de leitura", "controle de alterações", "backup diferencial", "slide mestre"], "A", "O OneDrive guarda versões anteriores dos arquivos."),
    ce("A coautoria permite que várias pessoas editem o mesmo documento ao mesmo tempo, quando ele está salvo na nuvem.", "Certo", "Cada um vê as alterações dos outros quase em tempo real."),
  ]);

  A("apresentacoes-e-ferramentas-colaborativas/google-workspace-docs-planilhas-drive", [
    aprofundar([
      "### Compartilhamento",
      "Três papéis: **leitor** (só vê), **comentarista** (vê e comenta) e **editor** (altera). O link pode ser restrito (só quem foi convidado) ou aberto a qualquer pessoa com o link.",
      "",
      "### Salvamento",
      "Docs, Planilhas e Apresentações **salvam automaticamente** na nuvem; o **histórico de versões** mostra quem mudou o quê.",
      "",
      "### Outras ferramentas",
      "Google Forms (formulários e questionários), Agenda, Meet (reuniões) e Drive (armazenamento).",
    ]),
    PRATICAR,
    q("No Google Drive, o papel que permite ver e comentar um documento, mas não editá-lo, é o de:", ["leitor", "comentarista", "editor", "proprietário", "administrador"], "B", "O leitor só vê; o editor altera."),
    ce("No Google Docs, é preciso salvar manualmente o documento para não perder as alterações.", "Errado", "O salvamento é automático."),
  ]);

  /* ================= INTERNET E REDES ================= */

  A("internet-e-redes/conceitos-de-redes-lan-wan-intranet-extranet", [
    aprofundar([
      "### Equipamentos",
      "- **Switch**: liga computadores numa mesma rede local (LAN).",
      "- **Roteador**: liga **redes diferentes** e escolhe o caminho dos pacotes pelo endereço IP.",
      "- **Modem**: converte o sinal da operadora. **Ponto de acesso (access point)**: oferece Wi-Fi.",
      "",
      "### Topologias",
      "**Estrela** (todos ligados a um equipamento central, a mais comum), barramento, anel e malha.",
      "",
      "### Intranet, extranet e VPN",
      "- **Intranet**: rede privada que usa as tecnologias da internet (TCP/IP, navegador).",
      "- **Extranet**: parte da intranet aberta, com controle, a parceiros externos.",
      "- **VPN**: “túnel” criptografado pela internet para acessar a rede da organização de fora.",
    ]),
    PRATICAR,
    q("O equipamento que interliga redes diferentes e encaminha os pacotes com base no endereço IP é o:", ["hub", "switch", "roteador", "repetidor", "modem"], "C", "O switch atua dentro da rede local."),
    q("Um servidor em home office acessa, com segurança, os sistemas internos do órgão por meio de um túnel criptografado pela internet. Trata-se de uma:", ["extranet", "VPN", "LAN", "intranet pública", "rede ponto a ponto"], "B", "VPN = rede privada virtual."),
    ce("A intranet usa os mesmos protocolos da internet, como o TCP/IP.", "Certo", "A diferença é o acesso restrito."),
  ]);

  A("internet-e-redes/protocolos-http-https-tcp-ip-dns-ftp", [
    aprofundar([
      "### Protocolos e portas que caem",
      "HTTP (80) · **HTTPS (443)**, com criptografia TLS · FTP (20 e 21) · SSH (22) · SMTP (25, envio de e-mail) · DNS (53) · POP3 (110) · IMAP (143).",
      "",
      "### Funções",
      "- **DNS**: traduz nomes (www.gov.br) em endereços IP.",
      "- **DHCP**: atribui endereço IP **automaticamente** aos dispositivos da rede.",
      "- **TCP**: confiável (confirma a entrega e reordena). **UDP**: mais rápido, sem garantia de entrega (vídeo ao vivo, jogos, chamadas).",
      "",
      "### IPv4 × IPv6",
      "IPv4 tem **32 bits** (ex.: 192.168.0.1); IPv6 tem **128 bits**, escrito em hexadecimal.",
    ]),
    PRATICAR,
    q("O protocolo que atribui automaticamente um endereço IP a um computador que entra na rede é o:", ["DNS", "DHCP", "FTP", "SMTP", "HTTP"], "B", "O DNS traduz nomes em IPs."),
    q("Um endereço IPv6 possui:", ["32 bits", "48 bits", "64 bits", "128 bits", "256 bits"], "D", "O IPv4 tem 32 bits."),
    q("A porta padrão do protocolo HTTPS é a:", ["21", "25", "80", "443", "110"], "D", "80 é do HTTP sem criptografia."),
    ce("O protocolo UDP garante a entrega e a ordem dos pacotes.", "Errado", "Quem garante é o TCP; o UDP privilegia a rapidez."),
  ]);

  A("internet-e-redes/navegadores", [
    aprofundar([
      "### Dados que o navegador guarda",
      "- **Cookies**: pequenos arquivos que os sites gravam (login, preferências, rastreamento).",
      "- **Cache**: cópia de páginas e imagens para carregar mais rápido.",
      "- **Histórico** e **favoritos**. Limpar dados de navegação: Ctrl + Shift + Delete.",
      "",
      "### Navegação anônima (privativa)",
      "Não grava histórico, cookies e dados de formulário **no computador** depois que a janela é fechada. **Não** esconde o acesso do provedor de internet, da rede da empresa nem do próprio site.",
      "",
      "### Cadeado",
      "Indica conexão HTTPS (criptografada). Não garante que o site seja honesto, só que a conversa com ele é cifrada.",
    ]),
    PRATICAR,
    ce("A navegação anônima impede que o provedor de internet saiba quais sites foram acessados.", "Errado", "Ela só evita que os dados fiquem gravados no próprio navegador."),
    q("Os pequenos arquivos gravados pelos sites no navegador, usados para lembrar login e preferências, são os:", ["plug-ins", "cookies", "favoritos", "proxies", "certificados"], "B", "Também são usados para rastrear o usuário entre sites."),
    q("O cadeado na barra de endereços indica que:", ["o site é oficial do governo", "a conexão com o site é criptografada (HTTPS)", "o site não tem vírus", "o computador tem antivírus", "a navegação é anônima"], "B", "Golpistas também usam HTTPS; o cadeado não garante honestidade."),
  ]);

  A("internet-e-redes/correio-eletronico", [
    aprofundar([
      "### Para, Cc e Cco",
      "- **Para**: destinatários principais.",
      "- **Cc** (cópia): todos veem quem recebeu.",
      "- **Cco** (cópia oculta): os demais **não** veem esse destinatário.",
      "",
      "### Responder × encaminhar",
      "**Responder** e **responder a todos** não levam os **anexos** originais; **encaminhar** leva.",
      "",
      "### Protocolos",
      "**SMTP** envia. Para receber: **POP3** baixa as mensagens para o computador (por padrão, apagando do servidor); **IMAP** mantém no servidor e **sincroniza** entre dispositivos.",
    ]),
    PRATICAR,
    q("Para enviar um e-mail a vários cidadãos sem que um veja o endereço dos outros, os endereços devem ir no campo:", ["Para", "Cc", "Cco", "Assunto", "Responder para"], "C", "Cópia oculta."),
    q("Ao clicar em “Encaminhar” uma mensagem que tem anexo:", ["o anexo é descartado", "o anexo segue junto", "o anexo vira link automaticamente", "a mensagem volta ao remetente", "só o assunto é enviado"], "B", "Ao responder, o anexo original não acompanha."),
    ce("O protocolo IMAP mantém as mensagens no servidor e as sincroniza entre os dispositivos do usuário.", "Certo", "Por isso é o mais usado em celular e computador ao mesmo tempo."),
  ]);

  A("internet-e-redes/ferramentas-de-busca", [
    aprofundar([
      "### Operadores do Google",
      "- **\"aspas\"**: frase exata.",
      "- **-palavra**: exclui resultados com a palavra.",
      "- **site:gov.br**: só resultados daquele domínio ou site.",
      "- **filetype:pdf**: só arquivos daquele tipo.",
      "- **OR**: um termo ou outro. O **asterisco** serve de curinga para uma palavra desconhecida.",
      "- **intitle:**: a palavra precisa estar no título da página.",
    ]),
    PRATICAR,
    q("Para encontrar apenas arquivos PDF sobre o edital, a busca adequada é:", ["edital pdf", "edital filetype:pdf", "edital site:pdf", "edital -pdf", "\"edital pdf\""], "B", "filetype: limita pelo tipo de arquivo."),
    q("O operador que exclui dos resultados as páginas que contêm determinada palavra é:", ["aspas", "sinal de menos (-)", "asterisco (*)", "site:", "OR"], "B", "Ex.: concurso -federal."),
    ce("A busca site:gov.br limita os resultados a páginas desse domínio.", "Certo", "Inclui subdomínios como www.gov.br e outros terminados em gov.br."),
  ]);

  A("internet-e-redes/computacao-em-nuvem", [
    aprofundar([
      "### Modelos de serviço",
      "- **SaaS** (software como serviço): o programa pronto, pelo navegador (Gmail, Microsoft 365, Google Docs).",
      "- **PaaS** (plataforma): ambiente para desenvolver e publicar sistemas.",
      "- **IaaS** (infraestrutura): servidores, armazenamento e redes virtuais.",
      "",
      "### Modelos de implantação",
      "Pública, privada, **híbrida** (combina as duas) e comunitária (compartilhada por organizações com interesses comuns).",
      "",
      "### Características",
      "Autoatendimento sob demanda, acesso pela rede, recursos compartilhados, **elasticidade** (cresce e diminui conforme a necessidade) e pagamento pelo uso.",
    ]),
    PRATICAR,
    q("O Gmail, usado diretamente pelo navegador, é exemplo de:", ["IaaS", "PaaS", "SaaS", "nuvem privada", "rede local"], "C", "Software pronto oferecido como serviço."),
    q("A contratação de máquinas virtuais e armazenamento, em que o cliente instala o próprio sistema operacional, é exemplo de:", ["SaaS", "PaaS", "IaaS", "intranet", "VPN"], "C", "Infraestrutura como serviço."),
    ce("A nuvem híbrida combina recursos de nuvem pública e de nuvem privada.", "Certo", "Por exemplo, dados sensíveis na privada e o resto na pública."),
  ]);

  /* ================= SEGURANÇA DA INFORMAÇÃO ================= */

  A("seguranca-da-informacao/principios-confidencialidade-integridade-e-disponibilidade", [
    aprofundar([
      "### Além do CID",
      "- **Autenticidade**: garante quem é o autor ou a origem.",
      "- **Não repúdio (irretratabilidade)**: o autor não pode negar que fez (assinatura digital).",
      "",
      "### Ataques e princípios",
      "Ataque de **negação de serviço (DoS/DDoS)** derruba o sistema: fere a **disponibilidade**. Vazamento de dados fere a **confidencialidade**. Alteração indevida fere a **integridade**.",
      "",
      "### Autenticação em dois fatores",
      "Combina duas categorias diferentes: algo que você **sabe** (senha), algo que você **tem** (celular, token) e algo que você **é** (biometria).",
    ]),
    PRATICAR,
    q("Um ataque de negação de serviço (DDoS) que deixa o site do órgão fora do ar afeta principalmente a:", ["confidencialidade", "integridade", "disponibilidade", "autenticidade", "irretratabilidade"], "C", "O sistema fica indisponível para os usuários legítimos."),
    q("É exemplo de autenticação em dois fatores:", ["duas senhas diferentes", "senha e código recebido no celular", "nome de usuário e senha", "senha e pergunta secreta", "duas impressões digitais"], "B", "Algo que se sabe (senha) + algo que se tem (celular)."),
    ce("A assinatura digital garante o não repúdio.", "Certo", "Quem assinou com a própria chave privada não pode negar a autoria."),
  ]);

  A("seguranca-da-informacao/malwares-virus-worms-trojans-e-ransomware", [
    aprofundar([
      "### Diferenças que caem",
      "- **Vírus**: infecta outros arquivos e precisa ser **executado** para se espalhar.",
      "- **Worm**: se **autorreplica** pela rede, sem precisar de hospedeiro nem de ação do usuário.",
      "- **Cavalo de Troia (trojan)**: parece útil, mas esconde uma função maliciosa.",
      "- **Ransomware**: **criptografa** os dados e pede **resgate**.",
      "- **Spyware**: espiona; **keylogger** registra as teclas; **screenlogger** registra telas e cliques.",
      "- **Backdoor**: porta dos fundos para acesso remoto. **Rootkit**: esconde a presença do invasor. **Bot**: transforma o computador num “zumbi” controlado à distância (rede de bots = botnet).",
    ]),
    PRATICAR,
    q("O código malicioso que se propaga sozinho pela rede, explorando vulnerabilidades, sem precisar infectar outros arquivos, é o:", ["vírus", "worm", "cavalo de Troia", "adware", "keylogger"], "B", "O vírus depende de um arquivo hospedeiro."),
    q("O programa que registra as teclas digitadas para capturar senhas é o:", ["rootkit", "keylogger", "ransomware", "worm", "backdoor"], "B", "Key logger = registrador de teclas."),
    ce("O ransomware criptografa os dados da vítima e exige pagamento para devolvê-los.", "Certo", "Backup atualizado e desconectado é a melhor defesa."),
  ]);

  A("seguranca-da-informacao/golpes-phishing-e-engenharia-social", [
    aprofundar([
      "### Família do phishing",
      "- **Phishing**: mensagem falsa que imita banco, órgão ou empresa para roubar dados.",
      "- **Spear phishing**: phishing **direcionado** a uma pessoa ou órgão específico.",
      "- **Smishing**: por **SMS**. **Vishing**: por **voz** (ligação).",
      "- **Pharming**: altera a resolução de nomes (DNS) e leva a vítima a um site falso **mesmo digitando o endereço certo**.",
      "",
      "### Engenharia social",
      "Explora a **confiança**, a pressa e o medo das pessoas, não uma falha técnica: “sou do suporte, preciso da sua senha”.",
      "",
      "### Hoax",
      "Boato espalhado por e-mail ou mensagem (corrente, falso alerta).",
    ]),
    PRATICAR,
    q("O usuário digita corretamente o endereço do banco, mas é levado a um site falso, porque a resolução de nomes foi adulterada. Esse golpe é o:", ["phishing", "pharming", "smishing", "hoax", "spam"], "B", "No phishing, a vítima clica num link falso; no pharming, mesmo o endereço certo leva ao site falso."),
    q("O golpe aplicado por mensagem SMS com link falso é chamado de:", ["vishing", "smishing", "pharming", "spoofing", "worm"], "B", "Vishing é por voz."),
    ce("A engenharia social explora principalmente a confiança e o comportamento das pessoas, e não falhas técnicas dos sistemas.", "Certo", "Por isso treinamento é tão importante quanto antivírus."),
  ]);

  A("seguranca-da-informacao/firewall-antivirus-e-backup", [
    aprofundar([
      "### Firewall",
      "Filtra o **tráfego** de rede conforme regras (bloqueia conexões não autorizadas). Não remove vírus de arquivos: isso é papel do **antivírus**.",
      "",
      "### Tipos de backup",
      "- **Completo**: copia tudo.",
      "- **Incremental**: copia o que mudou desde o **último backup de qualquer tipo**. Rápido de fazer; para restaurar, precisa do completo **e de todos** os incrementais.",
      "- **Diferencial**: copia o que mudou desde o **último completo**. Para restaurar, basta o completo **e o último** diferencial.",
      "",
      "### Regra 3-2-1",
      "3 cópias, em 2 mídias diferentes, 1 fora do local (ou na nuvem).",
    ]),
    PRATICAR,
    q("Um órgão faz backup completo no domingo e diferencial nos outros dias. Para restaurar os dados de quinta-feira, são necessários:", ["só o backup de quinta", "o completo de domingo e todos os diferenciais da semana", "o completo de domingo e o diferencial de quinta", "todos os backups do mês", "só o completo de domingo"], "C", "Cada diferencial acumula tudo desde o último completo."),
    ce("O backup incremental copia tudo o que mudou desde o último backup completo.", "Errado", "Essa é a definição do diferencial; o incremental copia o que mudou desde o último backup de qualquer tipo."),
    q("A principal função do firewall é:", ["remover vírus de arquivos", "filtrar o tráfego de rede conforme regras", "fazer backup", "criptografar o disco", "acelerar a internet"], "B", "Antivírus e firewall se complementam."),
  ]);

  A("seguranca-da-informacao/criptografia-certificado-e-assinatura-digital", [
    aprofundar([
      "### Qual chave usar",
      "- Para **sigilo** (só o destinatário ler): cifre com a chave **pública do destinatário**; só a **privada** dele abre.",
      "- Para **assinar**: o remetente usa a **própria chave privada**; qualquer um confere com a pública dele.",
      "",
      "### Simétrica × assimétrica",
      "Simétrica: **uma** chave para cifrar e decifrar, rápida (AES). Assimétrica: **par** de chaves pública e privada (RSA).",
      "",
      "### O que a assinatura garante",
      "**Autenticidade**, **integridade** e **não repúdio**. **Não** garante sigilo: o conteúdo continua legível.",
      "",
      "### Certificado digital",
      "Documento eletrônico emitido por uma **Autoridade Certificadora** (no Brasil, dentro da **ICP-Brasil**) que liga a chave pública à identidade do titular.",
    ]),
    PRATICAR,
    q("Ana quer enviar a Bruno um arquivo que só Bruno consiga ler. Ela deve cifrá-lo com:", ["a chave privada de Ana", "a chave pública de Ana", "a chave pública de Bruno", "a chave privada de Bruno", "qualquer chave simétrica pública"], "C", "Só a chave privada de Bruno decifra o que foi cifrado com a pública dele."),
    q("Para assinar digitalmente um documento, o remetente usa:", ["a chave pública do destinatário", "a própria chave privada", "a própria chave pública", "a chave privada do destinatário", "uma senha simples"], "B", "Quem recebe confere a assinatura com a chave pública do remetente."),
    ce("A assinatura digital garante a confidencialidade do documento assinado.", "Errado", "Garante autenticidade, integridade e não repúdio. Para sigilo, é preciso cifrar."),
  ]);
})();

/* Informática · todos os assuntos. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "informatica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const HW = "Conceitos Básicos e Hardware";
  const SO = "Sistemas Operacionais";
  const ED = "Editores de Texto";
  const PL = "Planilhas Eletrônicas";
  const AP = "Apresentações e Ferramentas Colaborativas";
  const IR = "Internet e Redes";
  const SG = "Segurança da Informação";
  const VERSOES = "Atalhos e menus mudam entre versões. Confira a versão do pacote Office/LibreOffice indicada no edital.";

  /* ================= HARDWARE ================= */

  A(HW, "Componentes do computador", {
    resumo: "Processador, memória, placa-mãe, armazenamento e periféricos: o que cada um faz.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O computador tem **hardware** (a parte física) e **software** (os programas). Os principais componentes de hardware:",
        "",
        "- **Processador (CPU)**: executa as instruções. Tem a **unidade de controle** e a **ULA** (unidade lógica e aritmética). Velocidade medida em GHz; vários **núcleos** trabalham em paralelo.",
        "- **Memória RAM**: guarda temporariamente o que está em uso. É volátil (apaga ao desligar).",
        "- **Armazenamento**: HD, SSD, pendrive. Guarda os dados de forma permanente.",
        "- **Placa-mãe**: conecta todos os componentes.",
        "- **Fonte**: fornece energia. **Placa de vídeo (GPU)**: processa imagens."
      ]},
      { tipo: "svg", titulo: "Como as partes conversam", legenda: "Os dados entram, são processados na CPU com ajuda da RAM e saem; o armazenamento guarda o que precisa durar.", codigo: `
<svg viewBox="0 0 560 230" role="img" aria-label="Diagrama: entrada para CPU, CPU ligada à memória RAM e ao armazenamento, CPU para saída">
  <defs><marker id="seta-hw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="fd" x="10" y="90" width="110" height="50" rx="8"></rect><text class="tx" x="65" y="120" text-anchor="middle">Entrada</text>
  <rect class="fd-d" x="215" y="80" width="130" height="70" rx="8"></rect><text class="tx tx-t" x="280" y="112" text-anchor="middle">CPU</text><text class="tx-m" x="280" y="132" text-anchor="middle">controle + ULA</text>
  <rect class="fd" x="440" y="90" width="110" height="50" rx="8"></rect><text class="tx" x="495" y="120" text-anchor="middle">Saída</text>
  <rect class="fd" x="150" y="10" width="110" height="44" rx="8"></rect><text class="tx" x="205" y="37" text-anchor="middle">RAM</text>
  <rect class="fd" x="300" y="176" width="140" height="44" rx="8"></rect><text class="tx" x="370" y="203" text-anchor="middle">Armazenamento</text>
  <line class="ln-d" x1="120" y1="115" x2="213" y2="115" marker-end="url(#seta-hw)"></line>
  <line class="ln-d" x1="345" y1="115" x2="438" y2="115" marker-end="url(#seta-hw)"></line>
  <line class="ln" x1="230" y1="78" x2="215" y2="56" marker-end="url(#seta-hw)" marker-start="url(#seta-hw)"></line>
  <line class="ln" x1="320" y1="152" x2="350" y2="174" marker-end="url(#seta-hw)" marker-start="url(#seta-hw)"></line>
</svg>` },
      { tipo: "flashcards", cartas: [
        { frente: "Qual componente executa as instruções?", verso: "O processador (CPU)." },
        { frente: "A RAM é volátil ou não volátil?", verso: "Volátil: perde os dados ao desligar." },
        { frente: "Software gravado no hardware, como a BIOS/UEFI, chama-se…", verso: "Firmware." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "O componente responsável por realizar cálculos e operações lógicas dentro do processador é:", alternativas: ["a memória RAM", "a ULA", "o barramento", "a fonte", "a placa de vídeo"], correta: "B", comentario: "A ULA (Unidade Lógica e Aritmética) faz cálculos e comparações; a unidade de controle coordena." }
    ]
  });

  A(HW, "Dispositivos de entrada e saída", {
    resumo: "Teclado entra, monitor sai, e alguns fazem as duas coisas.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Classificação", cabecalho: ["Tipo", "Exemplos"], linhas: [
        ["Entrada", "teclado, mouse, scanner, microfone, webcam, leitor de código de barras"],
        ["Saída", "monitor, impressora, caixa de som, projetor"],
        ["Entrada e saída (híbridos)", "tela touchscreen, multifuncional (imprime e digitaliza), headset, pendrive, modem"]
      ]},
      { tipo: "texto", titulo: "Conexões", texto: ["- **USB**: padrão universal; USB-C é reversível. - **HDMI** e **DisplayPort**: vídeo e áudio digitais. - **Bluetooth** e **Wi-Fi**: sem fio."] },
      { tipo: "atencao", texto: "Dispositivos de **armazenamento** (pendrive, HD externo) são classificados pelas bancas como de **entrada e saída**, porque gravam e leem dados." },
      { tipo: "questao", banca: Q, enunciado: "É dispositivo apenas de saída:", alternativas: ["scanner", "teclado", "impressora", "touchscreen", "pendrive"], correta: "C", comentario: "A impressora só envia informação para fora (papel). Scanner e teclado são de entrada; touchscreen e pendrive, híbridos." }
    ]
  });

  A(HW, "Memórias e armazenamento", {
    resumo: "RAM, ROM, cache, HD, SSD e as unidades bit, byte, KB, MB, GB, TB.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Tipos de memória", cabecalho: ["Memória", "Característica"], linhas: [
        ["Registradores", "dentro da CPU; a mais rápida e menor"],
        ["Cache", "entre a CPU e a RAM; muito rápida; guarda o que é usado com frequência"],
        ["RAM", "principal; volátil; leitura e escrita"],
        ["ROM", "só leitura (em tese); não volátil; guarda o firmware"],
        ["Secundária (HD, SSD, pendrive)", "não volátil; maior e mais lenta"]
      ]},
      { tipo: "svg", titulo: "Pirâmide da memória", legenda: "Quanto mais alto, mais rápida, menor e mais cara por byte.", codigo: `
<svg viewBox="0 0 440 230" role="img" aria-label="Pirâmide: registradores no topo, depois cache, RAM e armazenamento na base">
  <polygon class="fd-d" points="220,10 260,60 180,60"></polygon><text class="tx" x="275" y="45">registradores</text>
  <polygon class="fd" points="180,62 260,62 300,112 140,112"></polygon><text class="tx" x="220" y="94" text-anchor="middle">cache</text>
  <polygon class="fd" points="140,114 300,114 340,164 100,164"></polygon><text class="tx" x="220" y="146" text-anchor="middle">RAM</text>
  <polygon class="fd" points="100,166 340,166 380,216 60,216"></polygon><text class="tx" x="220" y="198" text-anchor="middle">HD / SSD</text>
  <text class="tx-m" x="20" y="30">+ rápida</text><text class="tx-m" x="20" y="210">+ capacidade</text>
</svg>` },
      { tipo: "texto", titulo: "Unidades", texto: [
        "1 **byte** = 8 **bits**. Cada unidade seguinte vale 1.024 vezes a anterior (em potências de 2): KB, MB, GB, TB, PB.",
        "",
        "**HD** usa discos magnéticos e partes móveis; **SSD** usa memória flash, sem partes móveis: mais rápido, silencioso e resistente."
      ]},
      { tipo: "python", titulo: "Bits, bytes e unidades", codigo: `
print("A letra 'A' em binário:", format(ord("A"), "08b"))
print("1 byte =", 8, "bits")
for i, unidade in enumerate(["KB", "MB", "GB", "TB"], start=1):
    print(f"1 {unidade} = {1024 ** i:,} bytes".replace(",", "."))
`, saida: `
A letra 'A' em binário: 01000001
1 byte = 8 bits
1 KB = 1.024 bytes
1 MB = 1.048.576 bytes
1 GB = 1.073.741.824 bytes
1 TB = 1.099.511.627.776 bytes
` },
      { tipo: "questao", banca: Q, enunciado: "A memória que se localiza entre o processador e a RAM, acelerando o acesso a dados usados com frequência, é a:", alternativas: ["ROM", "cache", "virtual", "flash", "secundária"], correta: "B", comentario: "A cache fica entre a CPU e a RAM e guarda cópias do que é muito usado." }
    ]
  });

  /* ================= SISTEMAS OPERACIONAIS ================= */

  A(SO, "Windows 10 e 11: conceitos e interface", {
    resumo: "Área de trabalho, barra de tarefas, menu Iniciar, Explorador de Arquivos e Configurações.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "texto", texto: [
        "O **sistema operacional** gerencia o hardware e serve de base para os outros programas. No Windows:",
        "- **Área de trabalho**: tela principal, com atalhos.",
        "- **Barra de tarefas**: mostra programas abertos e fixados; no canto, a **área de notificação** (relógio, rede, volume).",
        "- **Menu Iniciar**: acesso a programas e configurações. No Windows 11, fica centralizado por padrão.",
        "- **Explorador de Arquivos**: gerencia pastas e arquivos.",
        "- **Configurações** e **Painel de Controle**: ajustes do sistema (o Painel vem perdendo espaço para as Configurações)."
      ]},
      { tipo: "tabela", titulo: "Novidades do Windows 11", cabecalho: ["Recurso", "O que faz"], linhas: [["Menu Iniciar centralizado", "barra de tarefas com ícones no centro"], ["Layouts de Ajuste (Snap)", "organiza janelas lado a lado passando o mouse no botão maximizar"], ["Widgets", "painel com notícias, clima e agenda"], ["Requisitos maiores", "exige TPM 2.0 e processador mais novo"]] },
      { tipo: "texto", titulo: "Lixeira", texto: ["Arquivos excluídos do disco local vão para a **Lixeira** e podem ser restaurados. Excluídos com **Shift + Delete**, de pendrive ou de unidade de rede, são apagados direto, sem passar pela Lixeira."] },
      { tipo: "questao", banca: Q, enunciado: "No Windows, um arquivo excluído de um pendrive:", alternativas: ["vai para a Lixeira", "é excluído sem passar pela Lixeira", "vai para a pasta Documentos", "fica oculto no pendrive", "vai para o OneDrive"], correta: "B", comentario: "A Lixeira só recebe arquivos de unidades locais. Em mídias removíveis e de rede, a exclusão é definitiva." }
    ]
  });

  A(SO, "Atalhos de teclado do Windows", {
    resumo: "Os atalhos com a tecla Windows e os comuns a quase todos os programas.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "tabela", titulo: "Atalhos do sistema", cabecalho: ["Atalho", "Ação"], linhas: [
        ["Win", "abre o menu Iniciar"],
        ["Win + D", "mostra a área de trabalho"],
        ["Win + E", "abre o Explorador de Arquivos"],
        ["Win + L", "bloqueia o computador"],
        ["Win + R", "abre o Executar"],
        ["Win + I", "abre as Configurações"],
        ["Win + V", "histórico da área de transferência"],
        ["Win + Shift + S", "captura de parte da tela"],
        ["Alt + Tab", "alterna entre janelas"],
        ["Alt + F4", "fecha a janela ativa"],
        ["Ctrl + Shift + Esc", "abre o Gerenciador de Tarefas"],
        ["F2", "renomeia o item selecionado"]
      ]},
      { tipo: "tabela", titulo: "Atalhos gerais (quase todos os programas)", cabecalho: ["Atalho", "Ação"], linhas: [["Ctrl + C / X / V", "copiar / recortar / colar"], ["Ctrl + Z / Y", "desfazer / refazer"], ["Ctrl + A", "selecionar tudo"], ["Ctrl + S", "salvar na maioria dos programas (no Word em português, salvar é Ctrl + B e Ctrl + S sublinha)"], ["Ctrl + P", "imprimir"], ["Ctrl + F", "localizar"]] },
      { tipo: "flashcards", cartas: [
        { frente: "Win + L", verso: "Bloqueia a sessão." },
        { frente: "Win + D", verso: "Mostra a área de trabalho." },
        { frente: "Ctrl + Shift + Esc", verso: "Abre o Gerenciador de Tarefas." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Para bloquear rapidamente o computador ao sair da mesa, no Windows, usa-se:", alternativas: ["Win + D", "Win + E", "Win + L", "Alt + F4", "Ctrl + L"], correta: "C", comentario: "Win + L bloqueia a sessão, exigindo senha para voltar." }
    ]
  });

  A(SO, "Gerenciamento de arquivos e pastas", {
    resumo: "Extensões, caminhos, copiar e mover com o mouse, e atributos.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Extensão** indica o tipo: .docx (Word), .xlsx (Excel), .pdf, .jpg, .exe (executável), .zip (compactado), .txt.",
        "- **Caminho** indica onde o arquivo está: C:\\Usuários\\Ana\\Documentos\\relatorio.docx.",
        "- Nomes não podem conter: \\ / : * ? \" < > |"
      ]},
      { tipo: "tabela", titulo: "Arrastar com o mouse no Explorador", cabecalho: ["Situação", "Resultado"], linhas: [
        ["Arrastar para pasta na **mesma** unidade", "move"],
        ["Arrastar para **outra** unidade", "copia"],
        ["Arrastar com **Ctrl**", "copia"],
        ["Arrastar com **Shift**", "move"],
        ["Arrastar com **Alt** (ou Ctrl + Shift)", "cria atalho"]
      ]},
      { tipo: "python", titulo: "Lendo um caminho de arquivo", codigo: `
from pathlib import PureWindowsPath

caminho = PureWindowsPath(r"C:\\Usuarios\\Ana\\Documentos\\relatorio-final.docx")
print("Unidade:", caminho.drive)
print("Pasta:", caminho.parent)
print("Nome:", caminho.name)
print("Extensão:", caminho.suffix)
`, saida: `
Unidade: C:
Pasta: C:\\Usuarios\\Ana\\Documentos
Nome: relatorio-final.docx
Extensão: .docx
` },
      { tipo: "questao", banca: Q, enunciado: "No Explorador de Arquivos, arrastar um arquivo do disco C: para um pendrive, sem pressionar teclas:", alternativas: ["move o arquivo", "copia o arquivo", "cria um atalho", "exclui o original", "compacta o arquivo"], correta: "B", comentario: "Entre unidades diferentes, o padrão do arrastar é copiar." }
    ]
  });

  A(SO, "Noções de Linux", {
    resumo: "Software livre, distribuições, estrutura de diretórios e comandos básicos.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "O **Linux** é um sistema operacional **livre** e de código aberto (licença GPL). O núcleo é o **kernel**; as **distribuições** juntam o kernel com programas: Ubuntu, Debian, Fedora, Linux Mint.",
        "",
        "- Diferencia **maiúsculas e minúsculas** (Arquivo.txt ≠ arquivo.txt).",
        "- Tudo parte da raiz **/**. Pastas importantes: /home (usuários), /etc (configurações), /bin (programas), /root (administrador).",
        "- O administrador é o **root**; comandos administrativos usam **sudo**."
      ]},
      { tipo: "tabela", titulo: "Comandos básicos", cabecalho: ["Comando", "Ação"], linhas: [["ls", "lista arquivos"], ["cd", "muda de pasta"], ["pwd", "mostra a pasta atual"], ["mkdir", "cria pasta"], ["cp / mv / rm", "copia / move ou renomeia / remove"], ["cat", "mostra o conteúdo de um arquivo"], ["chmod", "muda permissões"], ["sudo", "executa como administrador"]] },
      { tipo: "questao", banca: Q, enunciado: "No Linux, o comando que mostra o diretório em que o usuário está é:", alternativas: ["ls", "cd", "pwd", "mkdir", "rm"], correta: "C", comentario: "pwd = print working directory." }
    ]
  });

  /* ================= EDITORES DE TEXTO ================= */

  A(ED, "Microsoft Word: formatação e recursos", {
    resumo: "Guias, formatação de fonte e parágrafo, estilos, sumário, cabeçalho e revisão.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "tabela", titulo: "Onde fica cada recurso (guias)", cabecalho: ["Guia", "Recursos"], linhas: [
        ["Página Inicial", "fonte, parágrafo, estilos, localizar e substituir"],
        ["Inserir", "tabela, imagem, cabeçalho e rodapé, número de página, quebra de página, símbolo"],
        ["Layout", "margens, orientação, tamanho, colunas, quebras"],
        ["Referências", "sumário, notas de rodapé, citações"],
        ["Correspondências", "mala direta"],
        ["Revisão", "ortografia, contar palavras, controlar alterações, comentários"],
        ["Exibir", "modos de exibição, régua, zoom"]
      ]},
      { tipo: "texto", titulo: "Recursos que mais caem", texto: [
        "- **Estilos** (Título 1, Título 2…) organizam o documento e permitem gerar o **sumário automático**.",
        "- **Controlar alterações** registra cada mudança para outra pessoa aceitar ou rejeitar.",
        "- **Pincel de formatação** copia a formatação de um trecho para outro.",
        "- **Quebra de seção** permite orientações ou cabeçalhos diferentes no mesmo documento.",
        "- **Mala direta** gera várias cartas personalizadas a partir de uma lista."
      ]},
      { tipo: "questao", banca: Q, enunciado: "No Word, o recurso que registra as modificações feitas no texto para que outra pessoa possa aceitá-las ou rejeitá-las é:", alternativas: ["Pincel de formatação", "Controlar alterações", "Mala direta", "Quebra de seção", "Hiperlink"], correta: "B", comentario: "Fica na guia Revisão." }
    ]
  });

  A(ED, "LibreOffice Writer", {
    resumo: "O editor livre: formato ODT, menus, estilos e diferenças em relação ao Word.",
    incidencia: "média",
    conferir: VERSOES,
    blocos: [
      { tipo: "texto", texto: [
        "O **Writer** faz parte do **LibreOffice**, pacote livre e gratuito. O formato padrão é o **.odt** (OpenDocument Text), mas ele abre e salva .docx e exporta PDF diretamente.",
        "",
        "Por padrão usa **menus** (Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Tabela…), e pode usar a interface em abas."
      ]},
      { tipo: "tabela", titulo: "Formatos do LibreOffice", cabecalho: ["Programa", "Formato padrão", "Equivalente Microsoft"], linhas: [["Writer (texto)", ".odt", "Word (.docx)"], ["Calc (planilha)", ".ods", "Excel (.xlsx)"], ["Impress (apresentação)", ".odp", "PowerPoint (.pptx)"], ["Draw (desenho)", ".odg", "—"]] },
      { tipo: "atencao", texto: "Alguns atalhos diferem do Word em português. No Writer, **Ctrl + B** é negrito (bold) e **Ctrl + S** é salvar; no Word em português, Ctrl + N é negrito e Ctrl + B, salvar." },
      { tipo: "questao", banca: Q, enunciado: "O formato de arquivo padrão do LibreOffice Writer é:", alternativas: [".docx", ".odt", ".ods", ".txt", ".pdf"], correta: "B", comentario: "Writer usa .odt; .ods é do Calc." }
    ]
  });

  A(ED, "Atalhos dos editores de texto", {
    resumo: "Negrito, itálico, sublinhado e alinhamentos no Word em português e no Writer.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "tabela", titulo: "Comparando os atalhos", cabecalho: ["Ação", "Word (português)", "LibreOffice Writer"], linhas: [
        ["Negrito", "Ctrl + N", "Ctrl + B"],
        ["Itálico", "Ctrl + I", "Ctrl + I"],
        ["Sublinhado", "Ctrl + S", "Ctrl + U"],
        ["Salvar", "Ctrl + B", "Ctrl + S"],
        ["Centralizar", "Ctrl + E", "Ctrl + E"],
        ["Justificar", "Ctrl + J", "Ctrl + J"],
        ["Alinhar à esquerda", "Ctrl + Q", "Ctrl + L"],
        ["Alinhar à direita", "Ctrl + G", "Ctrl + R"],
        ["Localizar", "Ctrl + L", "Ctrl + F"],
        ["Substituir", "Ctrl + U", "Ctrl + H"],
        ["Quebra de página", "Ctrl + Enter", "Ctrl + Enter"]
      ]},
      { tipo: "dica", texto: "O Word em **português** traduziu os atalhos (N de negrito, S de sublinhado). O Word em inglês e o Writer usam as letras em inglês (B de bold, U de underline). Leia com atenção qual programa o enunciado cita." },
      { tipo: "questao", banca: Q, enunciado: "No Microsoft Word em português, o atalho Ctrl + N aplica:", alternativas: ["novo documento", "negrito", "numeração", "nota de rodapé", "sublinhado"], correta: "B", comentario: "No Word em português, Ctrl + N é negrito (no Writer seria Ctrl + B)." }
    ]
  });

  /* ================= PLANILHAS ================= */

  A(PL, "Microsoft Excel: conceitos e referências", {
    resumo: "Células, intervalos e as referências relativas, absolutas e mistas.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "texto", texto: [
        "Uma **pasta de trabalho** (arquivo .xlsx) tem **planilhas** (abas). Cada **célula** é o cruzamento de uma coluna (letra) com uma linha (número): **B3**.",
        "",
        "- **Intervalo**: A1:A10 (de A1 até A10); A1;A10 no Excel em português (só as duas células).",
        "- Toda fórmula começa com **=**."
      ]},
      { tipo: "tabela", titulo: "Tipos de referência", cabecalho: ["Tipo", "Escrita", "Ao copiar a fórmula…"], linhas: [
        ["Relativa", "A1", "coluna e linha mudam"],
        ["Absoluta", "$A$1", "nada muda"],
        ["Mista", "$A1", "coluna fixa, linha muda"],
        ["Mista", "A$1", "linha fixa, coluna muda"]
      ], legenda: "A tecla F4 alterna entre os tipos ao editar a fórmula." },
      { tipo: "exemplo", titulo: "Copiando uma fórmula", enunciado: "Em C1 está =A1*$B$1. Ao copiar C1 para C3, qual fórmula aparece?", resolucao: ["Desceu 2 linhas. A1 é relativa → A3. $B$1 é absoluta → continua $B$1."], resposta: "=A3*$B$1" },
      { tipo: "python", titulo: "Simulando a cópia de referências", codigo: `
import re

def copiar(formula, linhas, colunas):
    def ajusta(m):
        trava_col, col, trava_lin, lin = m.groups()
        if not trava_col:
            col = chr(ord(col) + colunas)
        if not trava_lin:
            lin = str(int(lin) + linhas)
        return f"{trava_col}{col}{trava_lin}{lin}"
    return re.sub(r"(\\$?)([A-Z])(\\$?)(\\d+)", ajusta, formula)

print(copiar("=A1*$B$1", 2, 0))
print(copiar("=$A1+B$2", 1, 1))
`, saida: `
=A3*$B$1
=$A2+C$2
` },
      { tipo: "questao", banca: Q, enunciado: "A célula D2 contém =B2+$C$1. Copiando D2 para E5, a fórmula será:", alternativas: ["=B2+$C$1", "=C5+$C$1", "=C5+$D$4", "=B5+$C$1", "=C2+$C$1"], correta: "B", comentario: "Moveu 1 coluna e 3 linhas: B2 → C5; $C$1 é absoluta e não muda." }
    ]
  });

  A(PL, "Fórmulas e funções (SOMA, MÉDIA, SE, PROCV...)", {
    resumo: "As funções mais cobradas, com sintaxe e exemplos.",
    incidencia: "alta",
    conferir: VERSOES,
    blocos: [
      { tipo: "tabela", titulo: "Funções essenciais", cabecalho: ["Função", "Sintaxe", "O que faz"], linhas: [
        ["SOMA", "=SOMA(A1:A10)", "soma o intervalo"],
        ["MÉDIA", "=MÉDIA(A1:A10)", "média aritmética"],
        ["MÁXIMO / MÍNIMO", "=MÁXIMO(A1:A10)", "maior / menor valor"],
        ["CONT.NÚM", "=CONT.NÚM(A1:A10)", "conta células com números"],
        ["CONT.VALORES", "=CONT.VALORES(A1:A10)", "conta células não vazias"],
        ["CONT.SE", "=CONT.SE(A1:A10;\">7\")", "conta as que atendem ao critério"],
        ["SOMASE", "=SOMASE(A1:A10;\"RH\";B1:B10)", "soma B onde A = \"RH\""],
        ["SE", "=SE(B2>=7;\"Aprovado\";\"Reprovado\")", "testa e devolve um de dois valores"],
        ["PROCV", "=PROCV(valor;tabela;coluna;FALSO)", "procura na 1ª coluna e devolve a coluna indicada"],
        ["ARRED", "=ARRED(A1;2)", "arredonda para 2 casas"]
      ]},
      { tipo: "exemplo", titulo: "PROCV passo a passo", enunciado: "A tabela A2:C5 tem matrícula, nome e setor. Qual fórmula traz o setor da matrícula que está em E1?", resolucao: ["=PROCV(E1;A2:C5;3;FALSO)", "- E1: o valor procurado.", "- A2:C5: a tabela (a procura é sempre na **primeira** coluna).", "- 3: devolve a 3ª coluna da tabela (setor).", "- FALSO: correspondência exata."], resposta: "=PROCV(E1;A2:C5;3;FALSO)" },
      { tipo: "python", titulo: "SE e PROCV com Python", texto: "A mesma lógica das funções, para entender o que elas fazem.", codigo: `
notas = {"Ana": 8.5, "Beto": 6.0, "Caio": 7.0}
for nome, nota in notas.items():
    situacao = "Aprovado" if nota >= 7 else "Reprovado"   # =SE(B2>=7;...)
    print(nome, nota, situacao)

tabela = {101: ("Ana", "RH"), 102: ("Beto", "TI"), 103: ("Caio", "Protocolo")}
print("PROCV(102) ->", tabela[102][1])                       # coluna 3
print("CONT.SE(>=7) ->", sum(1 for n in notas.values() if n >= 7))
`, saida: `
Ana 8.5 Aprovado
Beto 6.0 Reprovado
Caio 7.0 Aprovado
PROCV(102) -> TI
CONT.SE(>=7) -> 2
` },
      { tipo: "atencao", texto: "No Excel em **português**, os argumentos são separados por **ponto e vírgula** (;). Em inglês, por vírgula. E o **PROCX** (versões novas) substitui o PROCV, procurando em qualquer coluna." },
      { tipo: "questao", banca: Q, enunciado: "Com A1 = 4, A2 = 8 e A3 = 6, o resultado de =SE(MÉDIA(A1:A3)>5;\"Alto\";\"Baixo\") é:", alternativas: ["4", "6", "Alto", "Baixo", "#VALOR!"], correta: "C", comentario: "Média = 18 ÷ 3 = 6, que é maior que 5: \"Alto\"." }
    ]
  });

  A(PL, "LibreOffice Calc", {
    resumo: "A planilha livre: formato ODS, referência a outras planilhas e diferenças do Excel.",
    incidencia: "média",
    conferir: VERSOES,
    blocos: [
      { tipo: "texto", texto: [
        "O **Calc** é a planilha do LibreOffice. Formato padrão **.ods**; abre e salva .xlsx.",
        "",
        "Funções têm os mesmos nomes em português da maioria das do Excel (SOMA, MÉDIA, SE, PROCV), com algumas diferenças de escrita."
      ]},
      { tipo: "tabela", titulo: "Diferenças que caem", cabecalho: ["Situação", "Excel", "Calc"], linhas: [
        ["Referência a outra planilha", "=Plan2!A1", "=Planilha2.A1 (ou $Planilha2.A1)"],
        ["Formato padrão", ".xlsx", ".ods"],
        ["Concatenar texto", "& ou CONCAT", "& ou CONCATENAR"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "No LibreOffice Calc, a referência à célula A1 da planilha chamada Planilha2 é escrita como:", alternativas: ["=Planilha2!A1", "=Planilha2.A1", "=Planilha2:A1", "=Planilha2;A1", "=A1@Planilha2"], correta: "B", comentario: "O Calc usa o ponto; o Excel usa o ponto de exclamação." }
    ]
  });

  A(PL, "Gráficos, filtros e classificação", {
    resumo: "Escolher o gráfico, filtrar linhas e ordenar dados sem perder a correspondência.",
    incidencia: "média",
    conferir: VERSOES,
    blocos: [
      { tipo: "texto", texto: [
        "- **Classificar**: ordena as linhas por uma ou mais colunas (A→Z, maior→menor). Selecione a tabela inteira para não desalinhar os dados.",
        "- **Filtro (AutoFiltro)**: esconde temporariamente as linhas que não atendem a um critério. Os dados continuam lá.",
        "- **Gráficos**: colunas e barras (comparar), linhas (evolução no tempo), pizza (partes de um todo), dispersão (relação entre duas variáveis).",
        "- **Tabela dinâmica**: resume grandes tabelas, agrupando e totalizando."
      ]},
      { tipo: "atencao", texto: "Filtrar **não apaga** linhas: elas ficam ocultas. Funções como SUBTOTAL somam só as linhas visíveis; a SOMA comum soma tudo." },
      { tipo: "questao", banca: Q, enunciado: "Para mostrar só as linhas do setor \"RH\" numa planilha, sem apagar as outras, usa-se:", alternativas: ["classificação", "filtro", "gráfico de pizza", "mesclar células", "congelar painéis"], correta: "B", comentario: "O filtro oculta as linhas que não atendem ao critério, sem excluí-las." }
    ]
  });

  /* ================= APRESENTAÇÕES E COLABORATIVAS ================= */

  A(AP, "PowerPoint e LibreOffice Impress", {
    resumo: "Slides, layouts, slide mestre, transições e animações.",
    incidencia: "média",
    conferir: VERSOES,
    blocos: [
      { tipo: "tabela", titulo: "Conceitos", cabecalho: ["Recurso", "O que é"], linhas: [
        ["Slide mestre", "modelo que controla fontes, cores e logotipo de todos os slides"],
        ["Layout", "disposição dos espaços (título, conteúdo, duas colunas)"],
        ["Transição", "efeito na **passagem** de um slide para outro"],
        ["Animação", "efeito em um **objeto** dentro do slide"],
        ["Modo apresentador", "mostra anotações e o próximo slide só para quem apresenta"]
      ]},
      { tipo: "tabela", titulo: "Atalhos de apresentação", cabecalho: ["Tecla", "Ação"], linhas: [["F5", "inicia do primeiro slide"], ["Shift + F5", "inicia do slide atual"], ["Esc", "encerra a apresentação"], ["B ou ponto (.) / W ou vírgula (,)", "tela preta / branca durante a apresentação (PowerPoint)"]] },
      { tipo: "texto", titulo: "Formatos", texto: ["PowerPoint: .pptx (editável) e .ppsx (abre direto na apresentação). Impress: .odp."] },
      { tipo: "questao", banca: Q, enunciado: "O efeito aplicado à passagem de um slide para o seguinte chama-se:", alternativas: ["animação", "transição", "layout", "slide mestre", "tema"], correta: "B", comentario: "Transição é entre slides; animação é em objetos dentro do slide." }
    ]
  });

  A(AP, "Microsoft 365, Teams e OneDrive", {
    resumo: "Pacote por assinatura na nuvem, reuniões e chat no Teams e arquivos no OneDrive.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- **Microsoft 365**: pacote por **assinatura** com Word, Excel, PowerPoint, Outlook, Teams e OneDrive, sempre atualizado.",
        "- **OneDrive**: armazenamento em nuvem. Arquivos sincronizam entre aparelhos; dá para compartilhar com link e definir se a pessoa pode **ver** ou **editar**.",
        "- **Teams**: chat, reuniões por vídeo, equipes e canais. Os arquivos de um canal ficam guardados no **SharePoint**.",
        "- **Coautoria**: várias pessoas editam o mesmo documento ao mesmo tempo, com salvamento automático."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Para que dois servidores editem o mesmo arquivo do Word ao mesmo tempo, de lugares diferentes, o arquivo deve estar:", alternativas: ["no pendrive de um deles", "na área de trabalho", "salvo na nuvem (OneDrive ou SharePoint) e compartilhado com permissão de edição", "em PDF", "em modo somente leitura"], correta: "C", comentario: "A coautoria exige o arquivo na nuvem e compartilhado com permissão de edição." }
    ]
  });

  A(AP, "Google Workspace (Docs, Planilhas, Drive)", {
    resumo: "Ferramentas online do Google: edição no navegador, compartilhamento e histórico de versões.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O **Google Workspace** funciona no **navegador**, com salvamento automático e edição colaborativa em tempo real.",
        "- **Drive**: armazenamento e compartilhamento.",
        "- **Documentos**, **Planilhas**, **Apresentações**: equivalentes ao Word, Excel e PowerPoint.",
        "- **Histórico de versões**: permite ver e restaurar versões anteriores."
      ]},
      { tipo: "tabela", titulo: "Níveis de compartilhamento", cabecalho: ["Permissão", "Pode"], linhas: [["Leitor", "só ver"], ["Comentarista", "ver e comentar"], ["Editor", "ver, comentar e editar"]] },
      { tipo: "questao", banca: Q, enunciado: "No Google Drive, para que alguém possa sugerir mudanças por comentários, sem alterar o texto, a permissão adequada é:", alternativas: ["Leitor", "Comentarista", "Editor", "Proprietário", "Administrador"], correta: "B", comentario: "O comentarista vê e comenta, mas não edita." }
    ]
  });

  /* ================= INTERNET E REDES ================= */

  A(IR, "Conceitos de redes (LAN, WAN, intranet, extranet)", {
    resumo: "Tipos de rede pelo alcance e as diferenças entre internet, intranet e extranet.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Por alcance", cabecalho: ["Sigla", "Nome", "Alcance"], linhas: [["PAN", "Personal Area Network", "pessoal (Bluetooth)"], ["LAN", "Local Area Network", "local: uma sala, um prédio"], ["MAN", "Metropolitan Area Network", "uma cidade"], ["WAN", "Wide Area Network", "países e continentes (a internet é a maior)"]] },
      { tipo: "tabela", titulo: "Internet, intranet e extranet", cabecalho: ["Rede", "Quem acessa", "Tecnologia"], linhas: [["Internet", "público em geral", "TCP/IP"], ["Intranet", "só a organização (rede privada)", "a mesma da internet"], ["Extranet", "parte da intranet aberta a parceiros externos autorizados", "a mesma da internet"]] },
      { tipo: "svg", titulo: "Intranet e extranet", legenda: "A intranet usa os protocolos da internet, mas só para dentro; a extranet abre uma porta controlada para parceiros.", codigo: `
<svg viewBox="0 0 520 220" role="img" aria-label="Círculo da internet contendo o órgão; dentro do órgão a intranet; parceiros acessam a extranet">
  <rect class="ln-f" x="5" y="5" width="510" height="210" rx="16"></rect>
  <text class="tx-m" x="20" y="28">Internet (público)</text>
  <rect class="fd" x="40" y="45" width="300" height="150" rx="12"></rect>
  <text class="tx tx-t" x="60" y="72">Órgão público</text>
  <rect class="fd-d" x="60" y="85" width="160" height="90" rx="10"></rect>
  <text class="tx" x="140" y="135" text-anchor="middle">Intranet</text>
  <rect class="fd" x="232" y="105" width="90" height="50" rx="8"></rect>
  <text class="tx" x="277" y="135" text-anchor="middle">Extranet</text>
  <rect class="fd" x="390" y="105" width="110" height="50" rx="8"></rect>
  <text class="tx" x="445" y="135" text-anchor="middle">Parceiro</text>
  <line class="ln-d" x1="390" y1="130" x2="324" y2="130"></line>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Uma rede privada de um órgão, que usa os mesmos protocolos da internet e é acessada só pelos servidores, é uma:", alternativas: ["internet", "intranet", "extranet", "WAN pública", "PAN"], correta: "B", comentario: "Intranet: rede interna com tecnologia de internet, restrita à organização." }
    ]
  });

  A(IR, "Protocolos (HTTP, HTTPS, TCP/IP, DNS, FTP)", {
    resumo: "As regras de comunicação da internet e as portas que mais caem.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Protocolos principais", cabecalho: ["Protocolo", "Função", "Porta padrão"], linhas: [
        ["HTTP", "transferir páginas web", "80"],
        ["HTTPS", "HTTP com criptografia (TLS)", "443"],
        ["DNS", "traduzir nomes (gov.br) em endereços IP", "53"],
        ["FTP", "transferir arquivos", "20 e 21"],
        ["SMTP", "enviar e-mail", "25 (587 para envio autenticado)"],
        ["POP3", "baixar e-mail para o computador", "110"],
        ["IMAP", "acessar e-mail mantendo no servidor", "143"],
        ["DHCP", "distribuir endereços IP automaticamente", "67 e 68"],
        ["SSH", "acesso remoto seguro", "22"]
      ]},
      { tipo: "texto", titulo: "TCP/IP", texto: [
        "O **TCP/IP** é o conjunto de protocolos da internet. O **IP** endereça e encaminha os pacotes; o **TCP** garante a entrega na ordem certa, com confirmação. O **UDP** é mais rápido e não confirma a entrega (usado em vídeo ao vivo e jogos).",
        "",
        "Endereços: **IPv4** tem 32 bits (192.168.0.1); **IPv6** tem 128 bits, criado porque os endereços IPv4 se esgotaram."
      ]},
      { tipo: "python", titulo: "IPv4 em binário", codigo: `
ip = "192.168.0.1"
partes = [int(p) for p in ip.split(".")]
binario = ".".join(format(p, "08b") for p in partes)
print(binario)
print("Total de bits:", len(partes) * 8)
print("Endereços IPv4 possíveis:", f"{2 ** 32:,}".replace(",", "."))
`, saida: `
11000000.10101000.00000000.00000001
Total de bits: 32
Endereços IPv4 possíveis: 4.294.967.296
` },
      { tipo: "questao", banca: Q, enunciado: "O protocolo que traduz um endereço como www.gov.br para o endereço IP do servidor é o:", alternativas: ["HTTP", "FTP", "DNS", "SMTP", "DHCP"], correta: "C", comentario: "O DNS (Domain Name System) faz a tradução de nomes em IPs." }
    ]
  });

  A(IR, "Navegadores", {
    resumo: "Chrome, Edge, Firefox: abas, navegação anônima, cookies, cache e histórico.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Conceitos", cabecalho: ["Recurso", "O que é"], linhas: [
        ["Navegação anônima / InPrivate", "não guarda histórico, cookies e formulários **no computador** ao fechar. Não esconde você do site, do provedor nem do empregador."],
        ["Cookies", "pequenos arquivos que o site grava para lembrar preferências e sessões"],
        ["Cache", "cópias de páginas e imagens para carregar mais rápido"],
        ["Histórico", "lista de páginas visitadas"],
        ["Favoritos", "endereços salvos"],
        ["Extensões", "complementos que adicionam funções ao navegador"]
      ]},
      { tipo: "tabela", titulo: "Atalhos comuns", cabecalho: ["Atalho", "Ação"], linhas: [["Ctrl + T", "nova aba"], ["Ctrl + Shift + T", "reabre a última aba fechada"], ["Ctrl + Shift + N (Chrome e Edge) / Ctrl + Shift + P (Firefox)", "janela anônima (InPrivate no Edge)"], ["Ctrl + H", "histórico"], ["Ctrl + D", "adicionar aos favoritos"], ["F5", "atualizar"]] },
      { tipo: "atencao", texto: "O **cadeado** na barra indica conexão HTTPS (criptografada). Ele **não** garante que o site é confiável: sites de golpe também podem ter HTTPS." },
      { tipo: "questao", banca: Q, enunciado: "Sobre a navegação anônima, é correto afirmar que:", alternativas: ["torna o usuário invisível para o provedor de internet", "impede que sites registrem o acesso", "não salva o histórico no computador após fechar a janela", "protege contra vírus", "criptografa todos os dados do computador"], correta: "C", comentario: "Ela só evita registros locais. O provedor, a rede e o site continuam vendo o acesso." }
    ]
  });

  A(IR, "Correio eletrônico", {
    resumo: "Campos Para, Cc e Cco, protocolos de envio e recebimento e webmail.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Campos da mensagem", cabecalho: ["Campo", "Uso"], linhas: [
        ["Para", "destinatário principal"],
        ["Cc (com cópia)", "recebe cópia; todos veem quem está em Cc"],
        ["Cco (com cópia oculta)", "recebe cópia sem que os outros saibam"],
        ["Responder", "responde só ao remetente"],
        ["Responder a todos", "responde ao remetente e a todos em Para e Cc (não aos de Cco)"],
        ["Encaminhar", "envia a mensagem a outra pessoa (anexos vão junto)"]
      ]},
      { tipo: "texto", titulo: "Protocolos", texto: ["**SMTP** envia; **POP3** baixa e normalmente apaga do servidor; **IMAP** sincroniza e mantém no servidor (ideal para usar em vários aparelhos). O **webmail** (Gmail, Outlook.com) funciona no navegador."] },
      { tipo: "dica", texto: "Ao mandar um aviso para muitas pessoas que não se conhecem, use **Cco**: protege os endereços de todos." },
      { tipo: "questao", banca: Q, enunciado: "Um servidor envia um e-mail para Ana (Para), Beto (Cc) e Caio (Cco). Ana clica em \"Responder a todos\". Quem recebe a resposta?", alternativas: ["só o remetente", "o remetente e Beto", "o remetente, Beto e Caio", "Beto e Caio", "todos, inclusive a própria Ana"], correta: "B", comentario: "Ana não sabe que Caio recebeu (Cco). \"Responder a todos\" vai para o remetente e para quem estava em Cc." }
    ]
  });

  A(IR, "Ferramentas de busca", {
    resumo: "Operadores de pesquisa do Google para achar exatamente o que se quer.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Operadores", cabecalho: ["Operador", "Exemplo", "Efeito"], linhas: [
        ["\" \"", "\"lei 8.112\"", "busca a frase exata"],
        ["-", "concurso -federal", "exclui a palavra"],
        ["site:", "edital site:gov.br", "busca só naquele domínio"],
        ["filetype:", "relatório filetype:pdf", "busca só aquele tipo de arquivo"],
        ["OR", "INSS OR previdência", "uma ou outra palavra"],
        ["*", "\"lei de * fiscal\"", "curinga para palavras desconhecidas"],
        ["intitle:", "intitle:edital", "palavra no título da página"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "Para buscar apenas arquivos PDF com o termo \"tabela de temporalidade\" em sites do governo, usa-se:", alternativas: ["\"tabela de temporalidade\" site:gov.br filetype:pdf", "tabela de temporalidade -pdf", "tabela OR temporalidade gov.br", "intitle:pdf tabela", "\"tabela\" + \"pdf\" + gov"], correta: "A", comentario: "Aspas para a frase exata, site: para o domínio e filetype: para o tipo de arquivo." }
    ]
  });

  A(IR, "Computação em nuvem", {
    resumo: "IaaS, PaaS e SaaS e os modelos pública, privada e híbrida.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["**Computação em nuvem** é usar recursos (armazenamento, processamento, programas) pela internet, sob demanda, pagando pelo uso, sem ter os equipamentos."] },
      { tipo: "tabela", titulo: "Modelos de serviço", cabecalho: ["Modelo", "O que o fornecedor entrega", "Exemplo"], linhas: [
        ["IaaS (infraestrutura)", "servidores, rede e armazenamento virtuais", "máquinas virtuais em AWS, Azure, Google Cloud"],
        ["PaaS (plataforma)", "ambiente pronto para desenvolver e rodar sistemas", "plataformas de hospedagem de aplicações"],
        ["SaaS (software)", "o programa pronto, usado pelo navegador", "Gmail, Microsoft 365, Google Docs"]
      ]},
      { tipo: "tabela", titulo: "Modelos de implantação", cabecalho: ["Modelo", "Característica"], linhas: [["Pública", "compartilhada, oferecida por um provedor a qualquer cliente"], ["Privada", "exclusiva de uma organização"], ["Híbrida", "combina pública e privada"], ["Comunitária", "compartilhada por organizações com interesses comuns"]] },
      { tipo: "questao", banca: Q, enunciado: "O uso do Google Docs pelo navegador, sem instalar nada, é exemplo de:", alternativas: ["IaaS", "PaaS", "SaaS", "nuvem privada", "LAN"], correta: "C", comentario: "O software é entregue pronto pela internet: SaaS." }
    ]
  });

  /* ================= SEGURANÇA ================= */

  A(SG, "Princípios: confidencialidade, integridade e disponibilidade", {
    resumo: "A tríade CID e os princípios de autenticidade e não repúdio.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Princípios da segurança da informação", cabecalho: ["Princípio", "Garante que…", "Ameaçado por"], linhas: [
        ["Confidencialidade", "só pessoas autorizadas acessam", "vazamento, espionagem"],
        ["Integridade", "a informação não foi alterada indevidamente", "adulteração, erro de transmissão"],
        ["Disponibilidade", "a informação está acessível quando precisa", "ataque de negação de serviço (DoS), ransomware, queda de energia"],
        ["Autenticidade", "a origem é quem diz ser", "falsificação de identidade"],
        ["Não repúdio (irretratabilidade)", "o autor não pode negar a autoria", "—"]
      ]},
      { tipo: "dica", texto: "Decore **CID**: Confidencialidade, Integridade, Disponibilidade. Muitas bancas acrescentam a **Autenticidade** (CIDA)." },
      { tipo: "python", titulo: "Integridade com hash", texto: "Um **hash** é uma \"impressão digital\" do conteúdo: qualquer alteração, por menor que seja, muda o resultado. É assim que se verifica a integridade de um arquivo.", codigo: `
import hashlib

original = "Pague R$ 100,00 ao fornecedor."
alterado = "Pague R$ 900,00 ao fornecedor."
for texto in (original, alterado):
    print(hashlib.sha256(texto.encode()).hexdigest()[:16], "<-", texto)
`, saida: `
af62306ce463b431 <- Pague R$ 100,00 ao fornecedor.
f1ddd19183f8ca8e <- Pague R$ 900,00 ao fornecedor.
` },
      { tipo: "questao", banca: Q, enunciado: "Um ataque que deixa o portal de um órgão fora do ar, impedindo o acesso dos cidadãos, compromete principalmente a:", alternativas: ["confidencialidade", "integridade", "disponibilidade", "autenticidade", "irretratabilidade"], correta: "C", comentario: "O serviço deixou de estar acessível: disponibilidade." }
    ]
  });

  A(SG, "Malwares: vírus, worms, trojans e ransomware", {
    resumo: "Os tipos de código malicioso e como cada um age.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Tipos de malware", cabecalho: ["Malware", "Como age"], linhas: [
        ["Vírus", "se anexa a arquivos e programas; precisa ser **executado** para agir e se espalhar"],
        ["Worm", "se **autorreplica** pela rede, sem precisar de um arquivo hospedeiro"],
        ["Cavalo de Troia (trojan)", "parece programa útil, mas executa ações maliciosas escondidas"],
        ["Ransomware", "**criptografa** os dados e pede resgate"],
        ["Spyware", "espiona e envia informações (keylogger registra teclas; screenlogger, a tela)"],
        ["Backdoor", "abre uma porta para o invasor voltar"],
        ["Bot / botnet", "computador controlado remotamente, em rede de máquinas zumbis"],
        ["Rootkit", "esconde a presença do invasor e de outros malwares"],
        ["Adware", "exibe propaganda indesejada"]
      ]},
      { tipo: "dica", texto: "Diferença clássica: o **vírus** precisa de hospedeiro e de execução; o **worm** se propaga sozinho pela rede." },
      { tipo: "questao", banca: Q, enunciado: "O malware que criptografa os arquivos da vítima e exige pagamento para liberá-los é o:", alternativas: ["worm", "spyware", "ransomware", "adware", "rootkit"], correta: "C", comentario: "Ransomware = sequestro de dados." }
    ]
  });

  A(SG, "Golpes: phishing e engenharia social", {
    resumo: "Ataques que enganam pessoas em vez de máquinas.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Engenharia social** é manipular pessoas para que revelem informações ou façam algo (clicar, transferir dinheiro). Explora confiança, urgência e medo.",
        "",
        "- **Phishing**: mensagem falsa (e-mail, SMS, WhatsApp) imitando banco, órgão público ou empresa para roubar senhas e dados. **Smishing** é por SMS; **vishing**, por ligação.",
        "- **Spear phishing**: phishing direcionado a uma pessoa ou órgão específico, com informações reais para parecer legítimo.",
        "- **Pharming**: redireciona o usuário para um site falso mesmo digitando o endereço certo (envenenamento de DNS).",
        "- **Golpe do falso funcionário/suporte**: alguém liga se passando pela TI e pede a senha."
      ]},
      { tipo: "passos", titulo: "Como se proteger", itens: [
        "Desconfie de **urgência** (\"sua conta será bloqueada hoje\").",
        "Confira o **remetente** e o **endereço** do link antes de clicar (passe o mouse sobre ele).",
        "Nunca informe senha ou código por telefone, e-mail ou mensagem. A TI de verdade não pede.",
        "Ative a **autenticação em dois fatores**.",
        "Na dúvida, entre no site digitando o endereço oficial."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Um servidor recebe e-mail com o logotipo do órgão pedindo que \"atualize a senha em 24 horas\" por um link. Trata-se de:", alternativas: ["worm", "phishing", "backup", "firewall", "cookie"], correta: "B", comentario: "Mensagem falsa que se passa por instituição para roubar credenciais, com senso de urgência." }
    ]
  });

  A(SG, "Firewall, antivírus e backup", {
    resumo: "As defesas básicas e os tipos de backup: completo, incremental e diferencial.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Firewall**: filtra o tráfego de rede, permitindo ou bloqueando conexões conforme regras. **Não** remove vírus.",
        "- **Antivírus/antimalware**: detecta e remove códigos maliciosos (por assinatura e por comportamento).",
        "- **VPN**: cria um túnel criptografado pela internet, como se o usuário estivesse na rede do órgão.",
        "- **Backup**: cópia de segurança para recuperar dados perdidos."
      ]},
      { tipo: "tabela", titulo: "Tipos de backup", cabecalho: ["Tipo", "Copia", "Restauração"], linhas: [
        ["Completo (full)", "tudo", "só o último completo"],
        ["Incremental", "o que mudou desde o **último backup de qualquer tipo**", "último completo + **todos** os incrementais"],
        ["Diferencial", "o que mudou desde o **último completo**", "último completo + **último** diferencial"]
      ]},
      { tipo: "svg", titulo: "Regra 3-2-1", legenda: "3 cópias dos dados, em 2 tipos de mídia, sendo 1 fora do local (nuvem ou outro prédio).", codigo: `
<svg viewBox="0 0 520 150" role="img" aria-label="Três blocos: 3 cópias, 2 mídias diferentes, 1 fora do local">
  <rect class="fd-d" x="10" y="20" width="150" height="110" rx="10"></rect>
  <text class="tx tx-t tx-d" x="85" y="72" text-anchor="middle" style="font-size:40px">3</text><text class="tx" x="85" y="108" text-anchor="middle">cópias</text>
  <rect class="fd-d" x="185" y="20" width="150" height="110" rx="10"></rect>
  <text class="tx tx-t tx-d" x="260" y="72" text-anchor="middle" style="font-size:40px">2</text><text class="tx" x="260" y="108" text-anchor="middle">mídias diferentes</text>
  <rect class="fd-d" x="360" y="20" width="150" height="110" rx="10"></rect>
  <text class="tx tx-t tx-d" x="435" y="72" text-anchor="middle" style="font-size:40px">1</text><text class="tx" x="435" y="108" text-anchor="middle">fora do local</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "O backup que copia apenas os arquivos alterados desde o último backup completo, e que exige só o completo e o último deste tipo para restaurar, é o:", alternativas: ["incremental", "diferencial", "completo", "espelho", "sintético"], correta: "B", comentario: "Diferencial acumula mudanças desde o último completo; basta o completo mais o último diferencial." }
    ]
  });

  A(SG, "Criptografia, certificado e assinatura digital", {
    resumo: "Chave simétrica e assimétrica, certificado ICP-Brasil e como a assinatura digital funciona.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Tipos de criptografia", cabecalho: ["Tipo", "Chaves", "Característica"], linhas: [
        ["Simétrica", "a **mesma** chave cifra e decifra", "rápida; o desafio é compartilhar a chave com segurança (AES)"],
        ["Assimétrica", "par de chaves: **pública** e **privada**", "o que uma cifra, só a outra decifra (RSA)"]
      ]},
      { tipo: "svg", titulo: "Qual chave para quê", legenda: "Para sigilo, cifra-se com a pública do destinatário. Para assinar, usa-se a privada do remetente.", codigo: `
<svg viewBox="0 0 560 210" role="img" aria-label="Duas linhas: sigilo usa chave pública do destinatário para cifrar e privada do destinatário para abrir; assinatura usa privada do remetente para assinar e pública do remetente para verificar">
  <text class="tx tx-t" x="10" y="30">Sigilo (confidencialidade)</text>
  <rect class="fd" x="10" y="42" width="160" height="44" rx="8"></rect><text class="tx-m" x="90" y="69" text-anchor="middle">cifra: pública do destinatário</text>
  <line class="ln-d" x1="172" y1="64" x2="380" y2="64"></line>
  <rect class="fd-d" x="382" y="42" width="168" height="44" rx="8"></rect><text class="tx-m" x="466" y="69" text-anchor="middle">abre: privada do destinatário</text>
  <text class="tx tx-t" x="10" y="130">Assinatura (autenticidade, integridade, não repúdio)</text>
  <rect class="fd-d" x="10" y="142" width="160" height="44" rx="8"></rect><text class="tx-m" x="90" y="169" text-anchor="middle">assina: privada do remetente</text>
  <line class="ln-d" x1="172" y1="164" x2="380" y2="164"></line>
  <rect class="fd" x="382" y="142" width="168" height="44" rx="8"></rect><text class="tx-m" x="466" y="169" text-anchor="middle">verifica: pública do remetente</text>
</svg>` },
      { tipo: "texto", titulo: "Certificado e assinatura digital", texto: [
        "- O **certificado digital** é um documento eletrônico que liga uma pessoa ou empresa à sua chave pública, emitido por uma **Autoridade Certificadora**. No Brasil, a estrutura oficial é a **ICP-Brasil** (MP 2.200-2/2001), cuja autoridade raiz é o ITI.",
        "- A **assinatura digital** garante **autenticidade, integridade e não repúdio**. Ela **não** garante confidencialidade (o documento assinado continua legível).",
        "- Tipos A1 (arquivo, validade de 1 ano) e A3 (token ou cartão)."
      ]},
      { tipo: "python", titulo: "Ideia da criptografia simétrica (cifra de César)", texto: "Exemplo didático, inseguro na prática: a mesma chave (o deslocamento) cifra e decifra.", codigo: `
def cesar(texto, chave):
    resultado = ""
    for c in texto:
        if c.isalpha():
            base = ord("A") if c.isupper() else ord("a")
            resultado += chr((ord(c) - base + chave) % 26 + base)
        else:
            resultado += c
    return resultado

cifrado = cesar("Reuniao as 15h", 3)
print(cifrado)
print(cesar(cifrado, -3))
`, saida: `
Uhxqldr dv 15k
Reuniao as 15h
` },
      { tipo: "questao", banca: Q, enunciado: "Na assinatura digital, o remetente assina o documento com:", alternativas: ["sua chave pública", "sua chave privada", "a chave pública do destinatário", "a chave privada do destinatário", "uma senha simétrica compartilhada"], correta: "B", comentario: "Assina-se com a chave privada (só o autor tem); qualquer um verifica com a pública do autor." }
    ]
  });
})();

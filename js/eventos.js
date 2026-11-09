/* Interações do usuário: menu, busca, atalhos, marcação de estudado, flashcards e questões. */
import { expandidos, pagina, salvarExpandidos } from './estado.js';
import { alternarEstudado } from './modelo.js';
import { registrarResposta } from './banco.js';
import {
  acoes as acoesQuestoes, aoFiltrar, formularios as formulariosQuestoes, marcarAlternativaSimulado, mudancas as mudancasQuestoes,
} from './vistas-questoes.js';
import { LETRAS } from './blocos.js';
import { renderArvore } from './sumario.js';

const corpo = document.body;

function abrirMenu() {
  corpo.classList.add('menu-aberto');
  document.getElementById('btn-menu').setAttribute('aria-expanded', 'true');
}

function fecharMenu() {
  corpo.classList.remove('menu-aberto');
  document.getElementById('btn-menu').setAttribute('aria-expanded', 'false');
}

/* ---------- Sumário e busca ---------- */

function ligarSumario() {
  document.getElementById('arvore').addEventListener('click', (e) => {
    const seta = e.target.closest('[data-alternar]');
    if (seta) {
      const caminho = seta.getAttribute('data-alternar');
      if (expandidos.has(caminho)) expandidos.delete(caminho);
      else expandidos.add(caminho);
      salvarExpandidos();
      renderArvore();
      return;
    }
    if (e.target.closest('a')) fecharMenu();
  });

  document.getElementById('navegacao').addEventListener('click', (e) => {
    if (e.target.closest('a')) fecharMenu();
  });

  const busca = document.getElementById('campo-busca');
  busca.addEventListener('input', renderArvore);
  busca.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      busca.value = '';
      renderArvore();
    }
    if (e.key === 'Enter') {
      const primeiro = document.querySelector('.res-busca a');
      if (primeiro) {
        location.hash = primeiro.getAttribute('href');
        busca.blur();
      }
    }
  });

  // "/" abre o menu e foca a busca.
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      abrirMenu();
      busca.focus();
    }
  });

  document.getElementById('btn-menu').addEventListener('click', () => {
    if (corpo.classList.contains('menu-aberto')) fecharMenu();
    else abrirMenu();
  });
  document.getElementById('veu').addEventListener('click', fecharMenu);
}

/* ---------- Ações dentro da página ---------- */

function aoMarcarEstudado(_el, { redesenhar }) {
  if (!pagina.atual) return;
  alternarEstudado(pagina.atual);
  redesenhar();
}

/** Copia o texto de `alvo`. Sem acesso à área de transferência (comum no artefato),
    seleciona o texto para a pessoa copiar com Ctrl+C. */
function copiar(botao, alvo) {
  const selecionar = () => {
    const faixa = document.createRange();
    faixa.selectNodeContents(alvo);
    const selecao = getSelection();
    selecao.removeAllRanges();
    selecao.addRange(faixa);
    botao.textContent = 'Selecionado: use Ctrl+C';
  };
  try {
    navigator.clipboard.writeText(alvo.textContent).then(() => { botao.textContent = 'Copiado'; }, selecionar);
  } catch (e) {
    selecionar();
  }
}

const aoCopiarCaminho = (botao) => copiar(botao, document.getElementById('caminho-assunto'));
const aoCopiarCodigo = (botao) => copiar(botao, botao.closest('.codigo').querySelector('code'));

function aoVirarCarta(carta) {
  const virada = carta.classList.toggle('virada');
  carta.setAttribute('aria-pressed', virada);
  carta.querySelector('small').textContent = virada ? 'Resposta' : 'Pergunta';
}

function aoResponderQuestao(botao) {
  const alternativas = botao.closest('.q-alts');
  const certa = +alternativas.getAttribute('data-correta');
  const escolhida = +botao.getAttribute('data-alt');

  alternativas.querySelectorAll('[data-alt]').forEach((b) => {
    const i = +b.getAttribute('data-alt');
    if (i === certa) b.classList.add('certa');
    else if (i === escolhida) b.classList.add('errada');
    b.disabled = true;
  });

  const retorno = alternativas.parentNode.querySelector('.q-retorno');
  const veredito = retorno.querySelector('.veredito');
  const acertou = escolhida === certa;
  veredito.className = `veredito ${acertou ? 'ok' : 'nao'}`;
  veredito.textContent = acertou ? 'Correta.' : `Incorreta. A resposta é a letra ${LETRAS[certa]}.`;
  retorno.hidden = false;

  const qid = alternativas.getAttribute('data-qid');
  if (qid) registrarResposta(qid, acertou);
}

function aoRefazerQuestao(botao) {
  const questao = botao.closest('.bloco-corpo');
  questao.querySelectorAll('[data-alt]').forEach((b) => {
    b.disabled = false;
    b.classList.remove('certa', 'errada');
  });
  questao.querySelector('.q-retorno').hidden = true;
}

/* Ações pelo nome: <button data-acao="nome">. */
const ACOES_NOMEADAS = {
  estudado: aoMarcarEstudado,
  copiar: aoCopiarCaminho,
  'copiar-codigo': aoCopiarCodigo,
  ...acoesQuestoes,
};

/* Ações pelo seletor do elemento clicado (componentes que não usam data-acao). */
const ACOES_POR_SELETOR = [
  ['[data-sim-alt]', marcarAlternativaSimulado],
  ['.carta', aoVirarCarta],
  ['[data-alt]', aoResponderQuestao],
  ['.q-refazer', aoRefazerQuestao],
];

function ligarConteudo(render) {
  const conteudo = document.getElementById('conteudo');
  /** Redesenha a página mantendo a posição de rolagem. */
  const redesenhar = () => {
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
  };
  const contexto = { render, redesenhar };

  conteudo.addEventListener('click', (e) => {
    const comAcao = e.target.closest('[data-acao]');
    if (comAcao && ACOES_NOMEADAS[comAcao.getAttribute('data-acao')]) {
      ACOES_NOMEADAS[comAcao.getAttribute('data-acao')](comAcao, contexto);
      return;
    }
    for (const [seletor, acao] of ACOES_POR_SELETOR) {
      const alvo = e.target.closest(seletor);
      if (alvo) {
        acao(alvo, contexto);
        return;
      }
    }
  });

  // Selects e campos de texto com data-filtro (banco) ou data-mudar (nome da ação).
  const aoMudar = (e) => {
    const el = e.target;
    if (el.hasAttribute('data-filtro')) aoFiltrar(el);
    else if (el.hasAttribute('data-mudar') && e.type === 'change') mudancasQuestoes[el.getAttribute('data-mudar')](el, contexto);
  };
  conteudo.addEventListener('input', aoMudar);
  conteudo.addEventListener('change', aoMudar);

  conteudo.addEventListener('submit', (e) => {
    const tratar = formulariosQuestoes[e.target.getAttribute('data-form')];
    if (!tratar) return;
    e.preventDefault();
    tratar(e.target, contexto);
  });
}

/** Liga todos os eventos. `render` redesenha a página atual. */
export function ligarEventos(render) {
  window.addEventListener('hashchange', () => {
    render();
    window.scrollTo(0, 0);
    fecharMenu();
  });
  ligarSumario();
  ligarConteudo(render);
}

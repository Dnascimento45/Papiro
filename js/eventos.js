/* Interações do usuário: menu, busca, atalhos, marcação de estudado, flashcards e questões. */
import { expandidos, pagina, salvarExpandidos } from './estado.js';
import { alternarEstudado } from './modelo.js';
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

function aoMarcarEstudado(_alvo, render) {
  if (!pagina.atual) return;
  alternarEstudado(pagina.atual);
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

function aoCopiarCaminho(botao) {
  const codigo = document.getElementById('caminho-assunto');
  const selecionar = () => {
    const faixa = document.createRange();
    faixa.selectNodeContents(codigo);
    const selecao = getSelection();
    selecao.removeAllRanges();
    selecao.addRange(faixa);
    botao.textContent = 'Selecionado';
  };
  try {
    navigator.clipboard.writeText(codigo.textContent).then(() => { botao.textContent = 'Copiado'; }, selecionar);
  } catch (e) {
    selecionar();
  }
}

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
}

function aoRefazerQuestao(botao) {
  const questao = botao.closest('.bloco-corpo');
  questao.querySelectorAll('[data-alt]').forEach((b) => {
    b.disabled = false;
    b.classList.remove('certa', 'errada');
  });
  questao.querySelector('.q-retorno').hidden = true;
}

/* Cada ação: seletor do elemento clicado -> o que fazer. */
const ACOES = [
  ['[data-acao="estudado"]', aoMarcarEstudado],
  ['[data-acao="copiar"]', aoCopiarCaminho],
  ['.carta', aoVirarCarta],
  ['[data-alt]', aoResponderQuestao],
  ['.q-refazer', aoRefazerQuestao],
];

function ligarConteudo(render) {
  document.getElementById('conteudo').addEventListener('click', (e) => {
    for (const [seletor, acao] of ACOES) {
      const alvo = e.target.closest(seletor);
      if (alvo) {
        acao(alvo, render);
        return;
      }
    }
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

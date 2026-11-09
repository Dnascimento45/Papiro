/* Confirmação dentro da página. O confirm() do navegador não funciona dentro de um artefato
   (devolve sempre "não"), então perguntas como "excluir esta lista?" usam este diálogo. */
import { esc } from '../nucleo/util.js';

/**
 * Pergunta e espera a resposta.
 * @returns {Promise<boolean>} true se a pessoa confirmou.
 */
export function confirmar(mensagem, { ok = 'Confirmar', perigo = false } = {}) {
  return new Promise((resolver) => {
    const anterior = document.activeElement;
    const fundo = document.createElement('div');
    fundo.className = 'dialogo-fundo';
    fundo.innerHTML = '<div class="dialogo" role="alertdialog" aria-modal="true" aria-labelledby="dialogo-msg">' +
      `<p id="dialogo-msg">${esc(mensagem)}</p>` +
      '<div class="dialogo-acoes"><button type="button" class="btn" data-r="nao">Cancelar</button>' +
      `<button type="button" class="btn ${perigo ? 'btn-perigo' : 'feito'}" data-r="sim">${esc(ok)}</button></div></div>`;

    const fechar = (resposta) => {
      document.removeEventListener('keydown', aoTeclar, true);
      fundo.remove();
      if (anterior && anterior.focus) anterior.focus();
      resolver(resposta);
    };
    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        fechar(false);
      }
    };
    fundo.addEventListener('click', (e) => {
      const botao = e.target.closest('[data-r]');
      if (botao) fechar(botao.getAttribute('data-r') === 'sim');
      else if (e.target === fundo) fechar(false);
    });
    document.addEventListener('keydown', aoTeclar, true);
    document.body.appendChild(fundo);
    fundo.querySelector('[data-r="nao"]').focus();
  });
}

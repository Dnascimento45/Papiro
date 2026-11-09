/* Apoio para as páginas que conversam com o Claude (assistente e redação):
   mensagens de erro em português e leitura dos arquivos anexados. */
import { esc } from './util.js';
import { plat } from './plataforma.js';

const COPIA = {
  not_granted: 'Você não autorizou o uso do Claude neste artefato. Autorize quando o aviso aparecer e envie de novo.',
  sampling_disabled: 'O Claude não está disponível para a sua conta ou organização.',
  not_declared: 'Este artefato não está autorizado a usar o Claude.',
  rate_limited: 'Muitos pedidos seguidos ou limite de uso atingido. Espere alguns minutos e tente de novo.',
  session_expired: 'Sua sessão expirou. Entre de novo na conta e abra o artefato.',
  image_rejected: 'Não consegui ler uma das imagens. Use JPEG, PNG, WebP ou GIF com menos de 20 MB.',
  images_unavailable: 'O envio de imagens não está disponível aqui. Cole o texto no lugar.',
  prompt_too_large: 'O texto ficou grande demais. Envie menos de uma vez.',
  refused: 'O Claude não respondeu a esse pedido. Reescreva de outro jeito.',
  empty_completion: 'O Claude não devolveu resposta. Reescreva o pedido de forma mais simples.',
  upstream_error: 'A conexão falhou no meio do caminho. Tente de novo.',
};

export function copiaErro(codigo) {
  return COPIA[codigo] || COPIA.upstream_error;
}

/** O Claude está disponível aqui? (sem isso, as páginas de assistente e redação se escondem). */
export const temClaude = () => !!plat.sample;

const MAX_CARACTERES_DOC = 60000;
const MAX_CARACTERES_TOTAL = 150000;
const EXTENSOES_TEXTO = /\.(txt|md|csv|json)$/i;

/** Tipos aceitos pelo seletor de arquivos (imagens, se disponíveis, e texto). */
export function tiposAceitos() {
  const imagens = plat.imagens ? plat.imagens.mediaTypes : [];
  return [...imagens, '.txt', '.md', '.csv', '.json'].join(',');
}

/**
 * Separa os arquivos em imagens (para o Claude ver) e textos (lidos e colados na mensagem).
 * PDF e outros formatos não são lidos: devolve um aviso para a pessoa colar o texto.
 */
export async function lerAnexos(arquivos) {
  const imagens = [];
  const textos = [];
  const avisos = [];
  let total = 0;
  for (const arq of arquivos) {
    const ehImagem = arq.type.startsWith('image/');
    if (ehImagem) {
      if (!plat.imagens || !plat.imagens.mediaTypes.includes(arq.type)) avisos.push(`"${arq.name}": tipo de imagem não aceito.`);
      else if (imagens.length >= plat.imagens.maxCount) avisos.push(`"${arq.name}": passou do limite de ${plat.imagens.maxCount} imagens.`);
      else imagens.push(arq);
    } else if (EXTENSOES_TEXTO.test(arq.name) || arq.type.startsWith('text/')) {
      let texto = await arq.text();
      if (texto.length > MAX_CARACTERES_DOC) {
        texto = texto.slice(0, MAX_CARACTERES_DOC);
        avisos.push(`"${arq.name}": só usei os primeiros ${MAX_CARACTERES_DOC.toLocaleString('pt-BR')} caracteres.`);
      }
      if (total + texto.length > MAX_CARACTERES_TOTAL) avisos.push(`"${arq.name}": ficou de fora (limite de texto por mensagem).`);
      else { total += texto.length; textos.push({ nome: arq.name, texto }); }
    } else {
      avisos.push(`"${arq.name}": não leio esse formato (PDF, por exemplo). Cole o texto ou envie uma foto da página.`);
    }
  }
  return { imagens, textos, avisos };
}

/**
 * Liga um seletor de arquivos a uma lista de "chips" removíveis.
 * Devolve { arquivos, adicionar(lista), limpar() }; `arquivos` é a lista viva.
 */
export function ligarAnexos({ entrada, lista }) {
  const arquivos = [];
  const desenhar = () => {
    lista.innerHTML = arquivos.map((a, i) => `<span class="anexo-chip">${esc(a.name || 'imagem colada')}` +
      `<button type="button" data-remover="${i}" aria-label="Remover ${esc(a.name || 'imagem')}">×</button></span>`).join('');
  };
  entrada.addEventListener('change', () => {
    arquivos.push(...entrada.files);
    entrada.value = '';
    desenhar();
  });
  lista.addEventListener('click', (e) => {
    const b = e.target.closest('[data-remover]');
    if (!b) return;
    arquivos.splice(+b.getAttribute('data-remover'), 1);
    desenhar();
  });
  return {
    arquivos,
    adicionar(novos) { arquivos.push(...novos); desenhar(); },
    limpar() { arquivos.length = 0; desenhar(); },
  };
}

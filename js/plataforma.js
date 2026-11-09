/* Acesso às capacidades do Artefato do claude.ai: identidade (user), banco compartilhado (db)
   e Claude (sample). Fora do artefato (servidor local) nada disso existe: tudo fica null
   e as páginas que dependem dele avisam em vez de quebrar. */

export const plat = {
  user: null,
  db: null,
  sample: null,
  eu: null,            // { id, name, avatarUrl, ... } da pessoa que está vendo
  imagens: null,       // limites de imagem do sample ({ maxCount, mediaTypes }) ou null
  ferramentas: false,  // o sample aceita funções da página (tools)?
  pronta: false,
};

const esperando = [];

/** Chama `fn` quando a plataforma terminou de responder (agora, se já terminou). */
export function aoPronta(fn) {
  if (plat.pronta) fn();
  else esperando.push(fn);
}

async function usar(nome) {
  try {
    return window.claude && window.claude.use ? await window.claude.use(nome) : null;
  } catch (e) {
    return null;
  }
}

export async function iniciarPlataforma() {
  const [user, db, sample] = await Promise.all([usar('user'), usar('db'), usar('sample')]);
  plat.user = user;
  plat.db = db;
  plat.sample = sample;
  if (user) {
    try { plat.eu = await user.me(); } catch (e) { /* sem identidade */ }
  }
  if (sample) {
    try {
      const limites = await sample.limits();
      plat.imagens = limites.images || null;
      plat.ferramentas = !!limites.tools;
    } catch (e) { /* segue sem imagens e sem ferramentas */ }
  }
  plat.pronta = true;
  esperando.splice(0).forEach((fn) => fn());
}

export const temIdentidade = () => !!(plat.user && plat.eu && plat.eu.id);
export const podeRank = () => !!(plat.db && temIdentidade());

/** Texto padrão para quando a página precisa de um recurso que só existe no artefato. */
export const AVISO_SO_NO_ARTEFATO = 'Este recurso só funciona com o Papiro publicado como artefato do claude.ai e com você logada na conta.';

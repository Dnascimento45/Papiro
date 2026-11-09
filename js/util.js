/* Utilidades puras, sem dependência do restante do motor. */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escapa texto para inserir com segurança dentro de HTML. */
export function esc(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/** Minúsculas e sem acentos, para comparar e buscar. */
export function norm(valor) {
  return String(valor || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** "Regra de três" -> "regra-de-tres". */
export function slug(valor) {
  return norm(valor).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Aplica slug a cada parte de "a/b/c". */
export function normCaminho(caminho) {
  return String(caminho).split('/').map(slug).filter(Boolean).join('/');
}

/** Comparador por `def.ordem`; itens sem ordem vão para o fim. */
export function porOrdem(a, b) {
  const ordem = (x) => (x.def.ordem == null ? 1e9 : +x.def.ordem);
  return ordem(a) - ordem(b);
}

/** 12345 -> "12.345". */
export function fmt(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/* Chaves do localStorage. O prefixo "papiro." separa do Dojo (que usa "dojo."). */
export const CHAVES = {
  estudados: 'papiro.estudados',
  abertos: 'papiro.abertos',
  ultimo: 'papiro.ultimo',
  respostas: 'papiro.respostas',
  listas: 'papiro.listas',
  simulados: 'papiro.simulados',
  horas: 'papiro.horas',
  perfil: 'papiro.perfil',
  rankUltimo: 'papiro.rankUltimo',
  backupEm: 'papiro.backupEm',
  assistente: 'papiro.assistente',
  redacoes: 'papiro.redacoes',
  plano: 'papiro.plano',
};

/** localStorage que nunca lança erro (modo privado, armazenamento cheio…). */
export const memoria = {
  ler(chave, padrao) {
    try {
      const v = localStorage.getItem(chave);
      return v ? JSON.parse(v) : padrao;
    } catch (e) {
      return padrao;
    }
  },
  gravar(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (e) { /* sem armazenamento: o caderno segue funcionando sem lembrar */ }
  },
};

/** Aceita só foto em data URL de imagem (jpeg/png/webp) e pequena; qualquer outra coisa vira ''.
    Usada para fotos de perfil que vêm do banco compartilhado (dado de outras pessoas). */
export function fotoSegura(valor) {
  return typeof valor === 'string' && valor.length < 60000 && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(valor) ? valor : '';
}

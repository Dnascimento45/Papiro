# 0002 · Código em camadas

**Data:** 2026-11-10 · **Situação:** adotada

## Contexto
Os 26 módulos de `js/` ficavam soltos numa só pasta, misturando dados, telas, recursos do artefato e a aplicação. A regra de dependência existia só no CLAUDE.md e já tinha exceções (o banco de questões, do núcleo, importava de `blocos.js`, de tela).

## Decisão
Organizar `js/` em cinco pastas, com dependência em um só sentido:

```
nucleo → interface → paginas → plataforma → app → main.js
```

- `nucleo/`: dados e regras (util, estado, registro, modelo, carga, provas, banco).
- `interface/`: peças de tela (texto, blocos, componentes, diálogo).
- `paginas/`: telas (vistas, vistas-questoes, plano, horas).
- `plataforma/`: recursos do artefato (plataforma, claude, rank, perfil, assistente, redação).
- `app/`: aplicação (app, rotas, sumário, eventos).

Ajustes para cumprir a regra: `sumario.js` foi para `app/` (monta o menu a partir das rotas) e `LETRAS`/`indiceDaCorreta` saíram de `interface/blocos.js` para `nucleo/util.js`.

A regra e a ausência de ciclos são verificadas em `testes/arquitetura.spec.js`.

## Alternativas descartadas
- **Só documentar**: menor risco, mas a regra continuaria dependendo de disciplina.
- **Quebrar também os arquivos grandes** (`vistas-questoes.js`): mais mudança de código sem ganho imediato; fica para quando o arquivo crescer mais.

## Consequências
- Comportamento igual; mudaram caminhos e imports (reescritos por script).
- A publicação no artefato precisou remover os caminhos antigos de `js/`.
- Um módulo novo precisa ir para a camada certa; o teste falha se importar de cima.

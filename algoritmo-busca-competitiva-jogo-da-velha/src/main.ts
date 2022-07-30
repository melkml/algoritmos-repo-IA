type utilidade = -1 | 0 | 1 | number | undefined;
type casa = " " | "x" | "o";
type node = { utilidade: utilidade; casas: casa[][] };
type result = "x" | "o" | "e";
export type jogador = "x" | "o";
const prompt = require("prompt-sync")();

function clone(a: any) {
  return JSON.parse(JSON.stringify(a));
}

function humano(estadoAtual: node): any {
  let movimento = undefined;

  while (!movimento) {
    console.log("Digite a posição desejada ou 's' para sair: ");
    movimento = prompt();

    if(movimento === 's') {
      console.log("Saindo...");
      process.exit();
    }

    movimento = parseInt(movimento);

    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(movimento)) {

      
      console.log("Posição inválida");
      movimento = undefined;
    }
  }

  const posicoesLivres = gerarPossiveisPosicoes(estadoAtual);

  const convercaoPosicao: Record<number, number[]> = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
  };

  const [linhaReq, colunaReq] = convercaoPosicao[movimento];

  for (const posicao of posicoesLivres) {
    const [linhaLivre, colunaLivre] = posicao as number[];
    if (linhaReq === linhaLivre && colunaReq === colunaLivre) {
      return movimento;
    }
  }

  return null;
}

function gerarNoInicial(): node {
  const noInicial: node = { utilidade: undefined, casas: [] };

  for (let index = 0; index < 3; index++) {
    noInicial.casas.push([" ", " ", " "]);
  }

  return noInicial;
}

function gerarPossiveisPosicoes(
  noInicial: node,
  jogadorAtual?: jogador
): node[] | number[][] {
  const posicoesLivres: number[][] = [];
  const nosPossiveis: node[] = [];

  //Verificando posições livres no nó
  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (noInicial.casas[linha][coluna] === " ") {
        posicoesLivres.push([linha, coluna]);
      }
    }
  }

  if (jogadorAtual) {
    for (const posicao of posicoesLivres) {
      const [linha, coluna] = posicao;
      let noGerado = clone(noInicial);

      noGerado.casas[linha][coluna] = jogadorAtual;
      nosPossiveis.push(noGerado);
    }

    return nosPossiveis;
  }

  return posicoesLivres;
}

function checkResultFinal(no: node): false | result {
  function checkHorizontal(no: node): false | result {
    let result: result;

    for (let linha = 0; linha < 3; linha++) {
      let hasThreeX = 0;
      let hasThreeO = 0;

      for (let coluna = 0; coluna < 3; coluna++) {
        if (no.casas[linha][coluna] === "x") {
          hasThreeX++;
        }

        if (no.casas[linha][coluna] === "o") {
          hasThreeO++;
        }

        if (hasThreeX === 3) {
          result = "x";
          return result;
        }

        if (hasThreeO === 3) {
          result = "o";
          return result;
        }
      }
    }

    return false;
  }

  function checkVertical(no: node): false | result {
    let result: result;
    let checkColuna = 0;

    for (let coluna = 0; coluna < 3; coluna++) {
      let hasThreeX = 0;
      let hasThreeO = 0;

      for (let linha = 0; linha < 3; linha++) {
        if (no.casas[linha][coluna] == "x") {
          hasThreeX++;
        } else if (no.casas[linha][coluna] == "o") {
          hasThreeO++;
        }
      }

      if (hasThreeX === 3) {
        return "x";
      }

      if (hasThreeO === 3) {
        return "o";
      }
    }

    return false;
  }

  function checkDiagonal(no: node): false | result {
    let result: false | result;
    let checkColuna = 0;
    let diagonal = 0; // esquerda = 0, direita = 1;
    let hasThreeO = 0;
    let hasThreeX = 0;

    //Diagonal esquerda
    for (let linha_coluna = 0; linha_coluna < 3; linha_coluna++) {
      if (no.casas[linha_coluna][linha_coluna] === "x") {
        hasThreeX++;
      } else if (no.casas[linha_coluna][linha_coluna] === "o") {
        hasThreeO++;
      }
    }

    if (hasThreeX === 3) {
      return "x";
    }

    if (hasThreeO === 3) {
      return "o";
    }

    //Diagonal direita
    hasThreeO = 0;
    hasThreeX = 0;
    let coluna = 2;
    for (let linha = 0; linha < 3; linha++) {
      if (no.casas[linha][coluna] === "x") {
        hasThreeX++;
      } else if (no.casas[linha][coluna] === "o") {
        hasThreeO++;
      }

      coluna--;
    }

    if (hasThreeX === 3) {
      return "x";
    }

    if (hasThreeO === 3) {
      return "o";
    }

    return false;
  }

  let result: false | result;

  result = checkHorizontal(no);
  result = result ? result : checkVertical(no);
  result = result ? result : checkDiagonal(no);

  // Condição de empate
  if (nodeFull(no) && !result) {
    return "e";
  }

  return result ? result : false;
}

function movimentar(
  no: node,
  jogadorAtual: jogador,
  posicao: number | number[]
) {
  let proxNo: node = clone(no);

  if (Array.isArray(posicao)) {
    proxNo = clone(no);
    proxNo.casas[posicao[0]][posicao[1]] = jogadorAtual;
    return proxNo;
  }

  const convercaoPosicao: Record<number, number[]> = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
  };

  const [proxLinha, proxColuna] = convercaoPosicao[posicao];

  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (proxLinha === linha && proxColuna === coluna) {
        proxNo.casas[linha][coluna] = jogadorAtual;
      }
    }
  }

  return proxNo;
}

function nodeFull(node: node): boolean {
  let hasNine = 0;

  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (node.casas[linha][coluna] != " ") {
        hasNine++;
      }
    }
  }

  return hasNine == 9 ? true : false;
}

function anunciarResultado(result: result) {
  const vencedor: Record<result, string> = {
    "x": "X venceu",
    "o": "O venceu",
    "e": "O jogo empatou.",
  };
  console.log(vencedor[result]);
}

function imprimeEstado(no: node) {
  const posicoes = [];

  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      posicoes.push(no.casas[linha][coluna]);
    }
  }

  console.log(`     |     |     `);
  console.log(`  ${posicoes[0]}  |  ${posicoes[1]}  |  ${posicoes[2]}  `);
  console.log(`_____|_____|_____`);
  console.log(`     |     |     `);
  console.log(`  ${posicoes[3]}  |  ${posicoes[4]}  |  ${posicoes[5]}  `);
  console.log(`_____|_____|_____`);
  console.log(`     |     |     `);
  console.log(`  ${posicoes[6]}  |  ${posicoes[7]}  |  ${posicoes[8]}  `);
  console.log(`     |     |     `);
}

function IA(estadoAtual: node, jogadorAtual: jogador) {
  return melhorMovimento(estadoAtual, jogadorAtual);
}

function minmax(estadoAtual: node, jogadorAtual: jogador): number {
  const nodesPossiveis = gerarPossiveisPosicoes(estadoAtual, jogadorAtual);
  const isTerminal = checkResultFinal(estadoAtual) ? true : false;
  let utilidade: utilidade;

  if (isTerminal) {
    return calcularUtilidade(estadoAtual) as number;
  }

  if (jogadorAtual === "o") {
    utilidade = -Infinity;

    for (const no of nodesPossiveis) {
      utilidade = max(utilidade, minmax(no as node, "x"));
    }
    return utilidade;
  }
  utilidade = Infinity;
  for (const no of nodesPossiveis) {
    utilidade = min(utilidade, minmax(no as node, "o"));
  }
  return utilidade;
}

function min(utilidade1: number, utilidade2: number) {
  return utilidade1 < utilidade2
    ? utilidade1
    : utilidade1 === utilidade2
    ? utilidade1
    : utilidade2;
}

function max(utilidade1: number, utilidade2: number) {
  return utilidade1 > utilidade2
    ? utilidade1
    : utilidade1 === utilidade2
    ? utilidade1
    : utilidade2;
}

function checkTurno(no: node): jogador {
  let countX = 0;
  let countO = 0;

  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (no.casas[linha][coluna] == "x") {
        countX++;
      }

      if (no.casas[linha][coluna] == "o") {
        countO++;
      }
    }
  }

  if (countX > countO && !nodeFull(estadoAtual)) return "o";

  return "x";
}

function calcularUtilidade(estadoAtual: node) {
  const result = checkResultFinal(estadoAtual);

  const map: Record<result, utilidade> = {
    x: -1,
    o: 1,
    e: 0,
  };

  if (result) {
    return map[result];
  }
}

function trocaJogador(jogadorAtual: jogador) {
  return jogadorAtual === "x" ? "o" : "x";
}

function melhorMovimento(estadoAtual: node, jogadorAtual: jogador) {
  const jogadas = gerarPossiveisPosicoes(estadoAtual);
  var melhorUtilidade = -Infinity;
  var melhorPosicao = null;

  for (let i in jogadas) {
    let resultado = movimentar(
      estadoAtual,
      jogadorAtual,
      jogadas[i] as number[]
    );
  
    let utilidade = minmax(resultado, jogadorAtual == "x"? "o" : "x");
   
    if (utilidade > melhorUtilidade) {
      melhorUtilidade = utilidade;
      melhorPosicao = jogadas[i];
    }
  }
  return melhorPosicao as number[];
}

function escolherPrimeiroJogador() {
  const random = Math.random();

  if(random < 0.5) return "x";
  
  return "o";
}

let jogadorAtual: jogador = escolherPrimeiroJogador();
let jogadaEscolhida: number[] | number | null;
let resultFinal: false | result = false;

let estadoAtual: node = gerarNoInicial();

console.log("JOGO DA VELHA\n\n");
console.log(`Primeiro jogador: ${jogadorAtual}`);
imprimeEstado(estadoAtual);
console.log("");

while (!resultFinal) {
  if (jogadorAtual === "x") {
    jogadaEscolhida = humano(estadoAtual);

    if (jogadaEscolhida) {
      estadoAtual = movimentar(estadoAtual, jogadorAtual, jogadaEscolhida);
    } else {
      console.log("Posição está ocupada.");
      continue;
    }
  } else {
    jogadaEscolhida = IA(estadoAtual, jogadorAtual);
    estadoAtual = movimentar(estadoAtual, jogadorAtual, jogadaEscolhida);
    imprimeEstado(estadoAtual);
  }

  resultFinal = checkResultFinal(estadoAtual);

  jogadorAtual = trocaJogador(jogadorAtual);
}

if (resultFinal !== "e") imprimeEstado(estadoAtual);

anunciarResultado(resultFinal);

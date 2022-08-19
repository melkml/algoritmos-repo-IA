import { checkXeque, checkXequeMate, clone, printBoard } from ".";
import { Jogador, material, Pieces, Positions, Roque } from "../libs";
import { Board } from "../types";
import { checkPossiveisNos, movimentar } from "../validation";

const promp = require("prompt-sync")();
const maxDepth = 3;

export function IA(board: Board, jogadorAtual: number) {
  return melhorMovimento(board, jogadorAtual);
}

function melhorMovimento(board: Board, jogadorAtual: number) {
  const jogadas = checkPossiveisNos(board, jogadorAtual);
  var melhorUtilidade = Infinity;
  var melhorPosicao = null;

  for (let jogada of jogadas) {
    const index = jogadas.indexOf(jogada as Board & [number, number]);
 
    let utilidade = minmax(
      jogada as Board,
      jogadorAtual === Jogador["b"]? Jogador["w"] : jogadorAtual,
      -Infinity,
      Infinity,
      0
    );
    console.log(utilidade);

    if (utilidade < melhorUtilidade) {
      melhorUtilidade = utilidade;
      melhorPosicao = jogadas[index];
    }
  }
  return melhorPosicao as Board;
}

export function checkNodeTerminal(board: Board, depth: number) {
  let isTerminal =
    checkXequeMate(board, Jogador["w"]) ||
    checkXequeMate(board, Jogador["b"]) ||
    depth === maxDepth ||
    false;

  return isTerminal;
}

export function minmax(
  board: Board,
  jogadorAtual: number,
  alpha: number,
  beta: number,
  depth: number
): number {
  const nodesPossiveis = checkPossiveisNos(board, jogadorAtual);
  const isTerminal = checkNodeTerminal(board, depth);
  let utilidade: number;
  
  if (isTerminal) {
   
    return calcularUtilidade(board, jogadorAtual) as number;
  }

  if (jogadorAtual === Jogador["b"]) {
    utilidade = -Infinity;

    for (const no of nodesPossiveis) {
      utilidade = max(
        utilidade,
        minmax(no as Board, Jogador["w"], alpha, beta, depth + 1)
      );

      alpha = max(alpha, utilidade);

      if (beta <= alpha) {
        break;
      }
    }


    return utilidade;
  }

  utilidade = Infinity;

  for (const no of nodesPossiveis) {
    utilidade = min(
      utilidade,
      minmax(no as Board, Jogador["b"], alpha, beta, depth + 1)
    );

    beta = min(beta, utilidade);

    if (beta <= alpha) {
      break;
    }
  }

 
  return utilidade;
}

export function calcularUtilidade(board: Board, jogadorAtual: number) {
  const result = checkXequeMate(board, jogadorAtual);

  const map: Record<string, number> = {
    w: -10000,
    b: 10000,
  };

  if (result) {
    return map[jogadorAtual === Jogador["w"] ? "w" : "b"];
  }
  

  let materialW = 0;
  let materialB = 0;

  for (let linha = 0; linha < 12; linha++) {
    for (let coluna = 0; coluna < 12; coluna++) {
      if (board.casas[linha][coluna] > 6) {
        materialB += material[board.casas[linha][coluna]];
      }

      if (board.casas[linha][coluna] < 7 && board.casas[linha][coluna] > 0) {
        materialW += material[board.casas[linha][coluna]];
      }
    }
  }

  return materialW - materialB;
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

export function humano(board: Board, jogador: number): any {
  let jogada: string = "";

  while (true) {
    console.log(
      "Digite a sua jogada ou 's' para desistir e sair (digite 'help' se precisar de ajuda com os movimentos): "
    );
    jogada = promp();

    if (!jogada) {
      continue;
    }

    if (jogada === "s") {
      console.log("Oponente venceu. Saindo...");
      process.exit();
    }

    if (jogada === "help") {
      console.log(
        "Sintaxe das movimentações: <posição-origem>-<posição-destino>"
      );
      console.log("Exemplo: e2-e4");
      console.log(
        "Movimento especial Roque: 'rE' para Roque à esquerda e 'rD' para Roque à direita."
      );
      continue;
    }

    if (jogada === "rD") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["D"]];
    }

    if (jogada === "rE") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["E"]];
    }

    if (!jogada.includes("-")) {
      console.log("Movimento precisa do hífen");
      printBoard(board.casas, jogador, true);
      continue;
    }

    let [posicaoOrigem, posicaoDestino] = jogada.split("-");

    if (
      !Object.keys(Positions).includes(posicaoOrigem) ||
      !Object.keys(Positions).includes(posicaoDestino)
    ) {
      console.log("Posição não existe.");
      printBoard(board.casas, jogador, true);
      continue;
    }

    const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];
    const [linhaDestino, colunaDestino] = Positions[posicaoDestino];

    let boardCopy = clone(board);

    boardCopy.casas[linhaDestino][colunaDestino] =
      boardCopy.casas[linhaOrigem][colunaOrigem];
    boardCopy.casas[linhaOrigem][colunaOrigem] = Pieces["--"];

    const isCheck = checkXeque(
      boardCopy,
      jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"]
    );

    if (isCheck) {
      console.log("Peça está cravada.");
      printBoard(board.casas, jogador, true);
      continue;
    }

    if (board.casas[linhaOrigem][colunaOrigem] === Pieces["--"]) {
      console.log("Casa está vazia.");
      printBoard(board.casas, jogador, true);
      continue;
    }

    break;
  }

  const [posicaoOrigem, posicaoDestino] = jogada.split("-");

  const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];

  return [
    board.casas[linhaOrigem][colunaOrigem],
    Positions[posicaoOrigem],
    Positions[posicaoDestino],
    true,
  ];
}

export function escolherPromocao() {
  let escolha;

  while (!escolha) {
    console.log("Peão promovido! Para qual peça você deseja promover o peão?");
    escolha = promp();

    if (Pieces[escolha] < 1 || Pieces[escolha] > 12) {
      escolha = undefined;
      console.log("Isso não é uma peça.");
    }
  }

  return Pieces[escolha];
}

export function checkJogador(
  jogadorHumano: number,
  jogadorAtual: number,
  board: Board
) {
  if (jogadorHumano === Jogador["w"] && jogadorAtual === Jogador["w"]) {
    return humano(board, jogadorAtual);
  }

  if (jogadorHumano === Jogador["b"] && jogadorAtual === Jogador["b"]) {
    return humano(board, jogadorAtual);
  }

  return IA(board, jogadorAtual); 
}

export function escolherModoDeJogo() {
  let escolha;

  while (!escolha) {
    console.log(
      "Escolha o modo de jogo:\n1 - HUMANO vs HUMANO\n2 - HUMANO vs MAQUINA"
    );
    escolha = promp();

    if (escolha != "1" || escolha != "2") {
      continue;
    }

    return escolha;
  }
}

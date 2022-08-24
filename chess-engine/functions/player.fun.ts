import {checkXeque, checkXequeMate, clone, printBoard} from ".";
import {Jogador, material, Pieces, Positions, Roque} from "../libs";
import {Board} from "../types";
import {checkPossiveisJogadasByPiece, checkPossiveisNos} from "../validation";

const promp = require("prompt-sync")();
let maxDepth = 3;

export function IA(board: Board, jogadorAtual: number) {
 const jogadasPossiveis = checkPossiveisNos(board, jogadorAtual);
  let utilidade = null;
  let melhorUtilidade = Infinity;
  let melhorJogada = null;

  for (const jogada of jogadasPossiveis) {

    utilidade = minmax(jogada, Jogador["w"], -Infinity, Infinity, 0);

    if(utilidade < melhorUtilidade) {
      melhorUtilidade = utilidade;
      melhorJogada = jogada;
    }
 }

  return melhorJogada as Board;
}

export function minmax(
  board: Board,
  jogadorAtual: number,
  alpha: number,
  beta: number,
  depth: number
): number {

  if (depth === maxDepth) {
    return calcularUtilidade(board, jogadorAtual) as number;
  }

  let nodesPossiveis = checkPossiveisNos(board, jogadorAtual);

  let utilidade: number;

  if (jogadorAtual === Jogador["w"]) {
    utilidade = -Infinity;

    for (const no of nodesPossiveis) {
      utilidade = Math.max(
        utilidade,
        minmax(no, Jogador["b"], alpha, beta, depth + 1)
      );

      alpha = Math.max(alpha, utilidade);

      if (beta <= alpha) {
        break;
      }
    }

    return utilidade;
  } else {
    utilidade = Infinity;

    for (const no of nodesPossiveis) {
      utilidade = Math.min(
          utilidade,
          minmax(no, Jogador["w"], alpha, beta, depth + 1)
      );

      beta = Math.min(beta, utilidade);

      if (beta <= alpha) {
        break;
      }
    }

    return utilidade;
  }
}

export function calcularUtilidade(board: Board, jogadorAtual: number) {
  let materialW = 0;
  let materialB = 0;

  for (let linha = 2; linha < 10; linha++) {
    for (let coluna = 2; coluna < 10; coluna++) {
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

import { Jogador, Pieces, Positions } from "../libs";
import {
  humano,
  newGame,
  printBoard,
  checkXequeMate,
  anunciarVencedor,
  clone,
} from "../functions";
import { checkPossiveisJogadasByPiece, checkPossiveisNos, movimentar } from "../validation";
import { Board } from "../types";
//? Main

let board: Board = new Board();

let jogadaEscolhida;
let jogadorAtual = Jogador["w"];
let resultFinal = false;

newGame(board.casas);
// board.casas[3][6] = Pieces["--"];
// board.casas[4][6] = Pieces["wP"];
// board.casas[2][4] = Pieces["bT"];

// checkPossiveisNos(board, Jogador['w']).forEach((node) => printBoard((node as Board).casas));

while (!resultFinal) {
  printBoard(board.casas);
  if (jogadorAtual === Jogador["w"]) {
    console.log("Turno: Brancas");
    jogadaEscolhida = humano(board, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] =
      jogadaEscolhida;

    let sucess = movimentar(
      jogadorAtual,
      board,
      piece,
      posicaoOrigem,
      posicaoDestino,
      isHumano,
      [roque, jogadorAtual]
    );

    if (!sucess) {
      console.log("Movimento inválido");
      continue;
    }

  } else {
    console.log("Turno: Pretas");
    jogadaEscolhida = humano(board, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] =
      jogadaEscolhida;

    let options;
    if (roque) {
      options = [roque, jogadorAtual];
    }

    let sucess = movimentar(
      jogadorAtual,
      board,
      piece,
      posicaoOrigem,
      posicaoDestino,
      isHumano,
      options as [number, number]
    );

    if (!sucess) {
      console.log("Movimento inválido");
      continue;
    }
  }

  resultFinal = checkXequeMate(board, jogadorAtual);

  jogadorAtual = jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];
}

anunciarVencedor(jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"]);

// /**
//  * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
//  */

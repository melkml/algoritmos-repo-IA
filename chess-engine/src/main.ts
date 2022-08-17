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

while (!resultFinal) {
  printBoard(board.casas);
  if (jogadorAtual === Jogador["w"]) {
    console.log("Turno: Brancas");
    jogadaEscolhida = humano(board, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] =
      jogadaEscolhida;

    if (piece > 6 || piece < 1) {
      console.log("Movimento inválido");
      continue;
    }

    let sucess = movimentar(
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

    printBoard(board.casas);
  } else {
    console.log("Turno: Pretas");
    jogadaEscolhida = humano(board, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] =
      jogadaEscolhida;

    if (piece < 7 && piece > 1) {
      console.log("Movimento inválido");
      continue;
    }

    let options;
    if (roque) {
      options = [roque, jogadorAtual];
    }

    let sucess = movimentar(
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

    printBoard(board.casas);
  }

  resultFinal = checkXequeMate(board, jogadorAtual);

  jogadorAtual = jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];
}

anunciarVencedor(jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"]);

// /**
//  * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
//  */

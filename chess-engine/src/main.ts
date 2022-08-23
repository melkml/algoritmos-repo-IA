import {Jogador, Pieces, Positions, sleep, syncWriteFile} from "../libs";
import {
  newGame,
  printBoard,
  checkXequeMate,
  anunciarVencedor,
  escolherModoDeJogo,
  checkJogador,
  calcularUtilidade,
  IA, checkXeque, minmax, teste, cache,
} from "../functions";
import {checkCasasAtacadas, checkPossiveisJogadasByPiece, checkPossiveisNos, movimentar} from "../validation";
import { Board } from "../types";

//? Main

let board: Board = new Board();

let jogadaEscolhida;
let jogadorAtual = Jogador["w"];

let jogadorHumano = Jogador["w"];
let jogadorHumano2;
// Math.random() < 0.5 ? Jogador["w"] : Jogador["b"];

let resultFinal = false;

newGame(board.casas);

board.casas[5][6] = board.casas[3][6];
board.casas[7][4] = board.casas[9][3];
board.casas[4][4] = board.casas[2][3];
board.casas[6][6] = board.casas[8][6];
board.casas[5][4] = board.casas[2][7];
board.casas[6][4] = board.casas[9][7];
board.casas[4][7] = board.casas[2][8];
board.casas[7][7] = board.casas[9][8];
board.casas[3][6] = Pieces["--"];
board.casas[9][3] = Pieces["--"];
board.casas[2][3] = Pieces["--"];
board.casas[8][6] = Pieces["--"];
board.casas[2][7] = Pieces["--"];
board.casas[9][7] = Pieces["--"];
board.casas[2][8] = Pieces["--"];
board.casas[9][8] = Pieces["--"];

printBoard(board.casas, Jogador["w"], true);

while (!resultFinal) {
  if (jogadorAtual === Jogador["w"]) {
    printBoard(board.casas, jogadorAtual, true);
    console.log("Turno: Brancas");

    jogadorAtual = Jogador["w"];

    jogadaEscolhida = checkJogador(jogadorHumano, jogadorAtual, board);

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
    printBoard(board.casas, Jogador["w"], true);
    console.log("Turno: Pretas");

    jogadaEscolhida = checkJogador(jogadorHumano, jogadorAtual, board);

   if(jogadorHumano2) {
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
    } else {
      board = jogadaEscolhida;
    }
  }

  resultFinal = checkXequeMate(board, jogadorAtual);

  if (resultFinal) {
    printBoard(board.casas, jogadorAtual, true);
  }

  jogadorAtual = jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];
}

anunciarVencedor(jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"]);

// /**
//  * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
//  */

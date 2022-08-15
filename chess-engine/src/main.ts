
import {Jogador, Pieces, Positions } from '../libs'
import {humano, newGame, printBoard, checkXequeMate, anunciarVencedor} from '../functions'
import { movimentar } from '../validation';
//? Main 
export let wRMove = false;
export let bRMove = false;
export let wDTMove = false;
export let wETMove = false;
export let bDTMove = false;
export let bETMove = false;


let endUnPassant = false;
let boardC: number[][] = [];

let jogadaEscolhida;
let jogadorAtual = Jogador["w"];
let resultFinal = false;


newGame(boardC);
boardC[8][8] = Pieces["wP"];
boardC[9][8] = Pieces["--"];
boardC[3][8] = Pieces["bP"];
boardC[2][8] = Pieces["--"];

while (!resultFinal) {
  printBoard(boardC);
  if (jogadorAtual === Jogador["w"]) {
    console.log("Turno: Brancas");
    jogadaEscolhida = humano(boardC, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] = jogadaEscolhida;

    if (piece > 6 || piece < 1) {
      console.log("Movimento inválido");
      continue;
    }

    let sucess = movimentar(boardC, piece, posicaoOrigem, posicaoDestino, isHumano, [
      roque,
      jogadorAtual,
    ]);

    if (!sucess) {
      console.log("Movimento inválido");
      continue;
    }

    // Gerenciando condições de roque
    if (piece === Pieces["wR"]) {
      wRMove = true;
    }

    const [linhaWTD, colunaWTD] = Positions["h1"];
    const [linhaWTE, colunaWTE] = Positions["a1"];

    if (boardC[linhaWTD][colunaWTD] === Pieces["--"]) {
      wDTMove = true;
    }

    if (boardC[linhaWTE][colunaWTE] === Pieces["--"]) {
      wETMove = true;
    }

    printBoard(boardC);
  } else {
    console.log("Turno: Pretas");
    jogadaEscolhida = humano(boardC, jogadorAtual);
    const [piece, posicaoOrigem, posicaoDestino, isHumano, roque] = jogadaEscolhida;

    if (piece < 7 && piece > 1) {
      console.log("Movimento inválido");
      continue;
    }

    let options;
    if (roque) {
      options = [roque, jogadorAtual];
    }

    let sucess = movimentar(
      boardC,
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

    if (piece === Pieces["bR"]) {
      bRMove = true;
    }

    const [linhaBTD, colunaBTD] = Positions["h8"];
    const [linhaBTE, colunaBTE] = Positions["a8"];

    if (boardC[linhaBTD][colunaBTD] === Pieces["--"]) {
      bDTMove = true;
    }

    if (boardC[linhaBTE][colunaBTE] === Pieces["--"]) {
      bETMove = true;
    }

    printBoard(boardC);
  }

  resultFinal = checkXequeMate(boardC, jogadorAtual);

  jogadorAtual = jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];
}

anunciarVencedor(jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"]);

// /**
//  * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
//  */

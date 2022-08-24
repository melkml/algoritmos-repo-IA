import {Jogador, mapPositions, Pieces, Positions, sleep, syncWriteFile} from "../libs";
import {
  newGame,
  printBoard,
  checkXequeMate,
  anunciarVencedor,
  checkJogador,
} from "../functions";
import { movimentar } from "../validation";
import { Board } from "../types";
import {calcularUtilidade, getValueHeuristicPiecePosition} from "../evaluation";

let board: Board = new Board();
let jogadaEscolhida;
let jogadorAtual = Jogador["w"];

let jogadorHumano = Jogador["w"];
let jogadorHumano2: number = 0;
// Math.random() < 0.5 ? Jogador["w"] : Jogador["b"];

let resultFinal = false;

function main() {
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
        console.clear();
    }

    anunciarVencedor(jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"]);
}
//? Main
newGame(board.casas);

main();



// /**
//  * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
//  */

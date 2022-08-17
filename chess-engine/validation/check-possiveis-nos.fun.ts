import {Roque} from '../libs'
import {clone} from '../functions/chess.fun'
import {checkPossiveisJogadasByPiece, movimentar} from '../validation'
import { Board } from '../types';

interface OptionsCheckPossiveisNos {
  returnPositionAttacked: boolean;
}

export function checkPossiveisNos(
    board: Board,
    jogador: number,
    options?: OptionsCheckPossiveisNos
  ): Board[] | [number, number][] {
    let jogadasPossiveis = [];
  
    for (let linha = 0; linha < 12; linha++) {
      for (let coluna = 0; coluna < 12; coluna++) {
        if (board.casas[linha][coluna] < 1) {
          continue;
        }
  
        if (board.casas[linha][coluna] > 6 && jogador === 0) {
          continue;
        }
  
        if (
          board.casas[linha][coluna] > 0 &&
          board.casas[linha][coluna] < 7 &&
          jogador === 1
        ) {
          continue;
        }
  
        jogadasPossiveis.push(
          ...checkPossiveisJogadasByPiece[board.casas[linha][coluna]](
            board,
            linha,
            coluna,
            options?.returnPositionAttacked
          )
        );
      }
    }
  
    let boardCCopy = clone(board);
  
    if (options?.returnPositionAttacked) {
      return jogadasPossiveis;
    }
  
    let canMove = movimentar(
      boardCCopy,
      NaN,
      [NaN, NaN],
      [NaN, NaN],
      false,
      [Roque["D"], jogador]
    );
  
    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
    }
  
    boardCCopy = clone(board);
  
    canMove = movimentar(
      boardCCopy,
      NaN,
      [NaN, NaN],
      [NaN, NaN],
      false, 
      [Roque["E"], jogador]
    );
  
    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
    }
  
    return jogadasPossiveis;
  }
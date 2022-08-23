import { Jogador, Pieces, Roque } from "../libs";
import { checkXeque, clone } from "../functions";
import { checkPossiveisJogadasByPiece, movimentar } from "../validation";
import { Board } from "../types";

export function checkCasasAtacadas(board: Board, jogador: number) {
  let casasAtacadas: [number, number][] = [];

  for (let linha = 2; linha < 10; linha++) {
    for (let coluna = 2; coluna < 10; coluna++) {
      if (board.casas[linha][coluna] === Pieces["--"]) {
        continue;
      }

      if (board.casas[linha][coluna] > 6 && jogador === Jogador["w"]) {
        continue;
      }

      if (
          board.casas[linha][coluna] > 0 &&
          board.casas[linha][coluna] < 7 &&
          jogador === Jogador["b"]
      ) {
        continue;
      }

      let jogadas = checkPossiveisJogadasByPiece[board.casas[linha][coluna]](
          jogador,
          board,
          linha,
          coluna,
          true,
      );

      casasAtacadas.push(...jogadas);
    }
  }
  return casasAtacadas;
}

export function checkPossiveisNos(
  board: Board,
  jogador: number,
): Board[] {
  let jogadasPossiveis: Board[] = [];

  for (let linha = 2; linha < 10; linha++) {
    for (let coluna = 2; coluna < 10; coluna++) {
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

      let jogadas = checkPossiveisJogadasByPiece[board.casas[linha][coluna]](
        jogador,
        board,
        linha,
        coluna,
        false
      );

      jogadasPossiveis.push(...jogadas);
    }
  }

  let boardCCopy = clone(board);

  let canMove = movimentar(
    jogador,
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
    jogador,
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

  //Validação de cravada

  const jogadorOposto = jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"];

  jogadasPossiveis = jogadasPossiveis.filter((jogada) => {
    const isCheck = checkXeque(jogada, jogadorOposto);

    return !isCheck;
  })

  return jogadasPossiveis;
}

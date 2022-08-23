import {Pieces} from '../libs'
import {clone} from '../functions/chess.fun'
import {movimentar} from '.'
import { Board } from '../types';

export let checkPossiveisJogadasByPiece: any[] = [];

checkPossiveisJogadasByPiece[Pieces["wP"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {

  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  const canMoveCimaOne = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 1, coluna]
  );

  if (canMoveCimaOne) {
    jogadasPossiveis.push(boardCCopy);
  }

  boardCCopy = clone(boardC);

  const canMoveCimaTwo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 2, coluna]
  );

  if (canMoveCimaTwo) {
    jogadasPossiveis.push(boardCCopy);
  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalDireita = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 1, coluna + 1]
  );

  if (canMoveDiagonalDireita) {
    jogadasPossiveis.push(boardCCopy);

  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalEsquerda = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerda) {
    jogadasPossiveis.push(boardCCopy);
  }

  if(boardC.casas[linha + 1][coluna + 1] === Pieces["--"] || boardC.casas[linha + 1][coluna + 1] > 6) {
    casasAtacadas.push([linha + 1, coluna + 1]);
  }

  if(boardC.casas[linha + 1][coluna - 1] === Pieces["--"] || boardC.casas[linha + 1][coluna - 1] > 6) {
    casasAtacadas.push([linha + 1, coluna - 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bP"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  const canMoveCimaOne = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 1, coluna]
  );

  if (canMoveCimaOne) {
    jogadasPossiveis.push(boardCCopy);
  }

  boardCCopy = clone(boardC);

  const canMoveCimaTwo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 2, coluna]
  );

  if (canMoveCimaTwo) {
    jogadasPossiveis.push(boardCCopy);
  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalDireita = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 1, coluna - 1]
  );

  if (canMoveDiagonalDireita) {
    jogadasPossiveis.push(boardCCopy);
  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalEsquerda = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 1, coluna + 1]
  );

  if (canMoveDiagonalEsquerda) {
    jogadasPossiveis.push(boardCCopy);
  }

  if(boardC.casas[linha - 1][coluna + 1] === Pieces["--"] || (boardC.casas[linha - 1][coluna + 1] < 7 && boardC.casas[linha - 1][coluna + 1] > 0)) {
    casasAtacadas.push([linha - 1, coluna + 1]);
  }

  if(boardC.casas[linha - 1][coluna - 1] === Pieces["--"] || (boardC.casas[linha - 1][coluna - 1] < 7 && boardC.casas[linha - 1][coluna - 1] > 0)) {
    casasAtacadas.push([linha - 1, coluna - 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wC"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha + 2, coluna + 1]
  );

  if (canMoveDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 2, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  canMoveDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha + 1, coluna + 2]
  );

  if (canMoveDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna + 2]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha + 1, coluna - 2]
  );

  if (canMoveEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna - 2]);
  }

  boardCCopy = clone(boardC);

  canMoveEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha + 2, coluna - 1]
  );

  if (canMoveEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 2, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha - 2, coluna - 1]
  );

  if (canMoveEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 2, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  canMoveEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha - 1, coluna - 2]
  );

  if (canMoveEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna - 2]);
  }

  boardCCopy = clone(boardC);

  let canMoveDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha - 1, coluna + 2]
  );

  if (canMoveDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna + 2]);
  }

  boardCCopy = clone(boardC);

  canMoveDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wC"],
    [linha, coluna],
    [linha - 2, coluna + 1]
  );

  if (canMoveDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 2, coluna + 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bC"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha + 2, coluna + 1]
  );

  if (canMoveDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 2, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  canMoveDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha + 1, coluna + 2]
  );

  if (canMoveDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna + 2]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha + 1, coluna - 2]
  );

  if (canMoveEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna - 2]);
  }

  boardCCopy = clone(boardC);

  canMoveEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha + 2, coluna - 1]
  );

  if (canMoveEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 2, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha - 2, coluna - 1]
  );

  if (canMoveEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 2, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  canMoveEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha - 1, coluna - 2]
  );

  if (canMoveEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna - 2]);
  }

  boardCCopy = clone(boardC);

  let canMoveDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha - 1, coluna + 2]
  );

  if (canMoveDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna + 2]);
  }

  boardCCopy = clone(boardC);

  canMoveDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bC"],
    [linha, coluna],
    [linha - 2, coluna + 1]
  );

  if (canMoveDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 2, coluna + 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wR"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha + 1, coluna]
  );

  if (canMoveCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna]);
  }

  boardCCopy = clone(boardC);

  let canMoveBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha - 1, coluna]
  );

  if (canMoveBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerda = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha, coluna - 1]
  );

  if (canMoveEsquerda) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDireita = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha, coluna + 1]
  );

  if (canMoveDireita) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha + 1, coluna + 1]
  );

  if (canMoveDiagonalDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha - 1, coluna + 1]
  );

  if (canMoveDiagonalDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha + 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["wR"],
    [linha, coluna],
    [linha - 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna - 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bR"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha + 1, coluna]
  );

  if (canMoveCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna]);
  }

  boardCCopy = clone(boardC);

  let canMoveBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha - 1, coluna]
  );

  if (canMoveBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna]);
  }

  boardCCopy = clone(boardC);

  let canMoveEsquerda = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha, coluna - 1]
  );

  if (canMoveEsquerda) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDireita = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha, coluna + 1]
  );

  if (canMoveDireita) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalDireitaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha + 1, coluna + 1]
  );

  if (canMoveDiagonalDireitaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalDireitaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha - 1, coluna + 1]
  );

  if (canMoveDiagonalDireitaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalEsquerdaCima = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha + 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerdaCima) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  let canMoveDiagonalEsquerdaBaixo = movimentar(
    jogadorAtual,
    boardCCopy,
    Pieces["bR"],
    [linha, coluna],
    [linha - 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerdaBaixo) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna - 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wT"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardCCopy.casas[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Baixo
  for (let li = linha - 1; boardCCopy.casas[li][coluna] !== -1; li--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Direita
  for (let co = coluna + 1; boardCCopy.casas[linha][co] !== -1; co++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Esquerda
  for (let co = coluna - 1; boardCCopy.casas[linha][co] !== -1; co--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bT"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardCCopy.casas[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Baixo
  for (let li = linha - 1; boardCCopy.casas[li][coluna] !== -1; li--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Direita
  for (let co = coluna + 1; boardCCopy.casas[linha][co] !== -1; co++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Esquerda
  for (let co = coluna - 1; boardCCopy.casas[linha][co] !== -1; co--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wB"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  let li = linha + 1;
  let co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co--;
  }

  boardCCopy = clone(boardC);

  li = linha + 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bB"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  let li = linha + 1;
  let co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co--;
  }

  boardCCopy = clone(boardC);

  li = linha + 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wQ"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis: Board[] = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  for (let li = linha + 1; boardC.casas[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wQ"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Baixo
  for (let li = linha - 1; boardC.casas[li][coluna] !== -1; li--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wQ"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Direita
  for (let co = coluna + 1; boardC.casas[linha][co] !== -1; co++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wQ"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Esquerda
  for (let co = coluna - 1; boardC.casas[linha][co] !== -1; co--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["wQ"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  let li = linha + 1;
  let co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co--;
  }

  boardCCopy = clone(boardC);

  li = linha + 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bQ"]] = (
  jogadorAtual: number,
  boardC: Board,
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis: Board[] = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  for (let li = linha + 1; boardC.casas[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bQ"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Baixo
  for (let li = linha - 1; boardC.casas[li][coluna] !== -1; li--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bQ"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Direita
  for (let co = coluna + 1; boardC.casas[linha][co] !== -1; co++) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bQ"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  boardCCopy = clone(boardC);
  //Esquerda
  for (let co = coluna - 1; boardC.casas[linha][co] !== -1; co--) {
    canMove = movimentar(
      jogadorAtual,
      boardCCopy,
      Pieces["bQ"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  let li = linha + 1;
  let co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna + 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co++;
  }

  boardCCopy = clone(boardC);

  li = linha - 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li--;
    co--;
  }

  boardCCopy = clone(boardC);

  li = linha + 1;
  co = coluna - 1;

  while (true) {
    canMove = movimentar(
      jogadorAtual,boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, co]);
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};
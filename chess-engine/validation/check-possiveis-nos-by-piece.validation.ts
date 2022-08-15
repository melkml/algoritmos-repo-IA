import {Pieces} from '../libs'
import {clone} from '../functions/chess.fun'
import {movimentar} from '.'

export let checkPossiveisJogadasByPiece: any[] = [];

checkPossiveisJogadasByPiece[Pieces["wP"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  const canMoveCimaOne = movimentar(
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
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 1, coluna + 1]
  );

  if (canMoveDiagonalDireita) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna + 1]);
  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalEsquerda = movimentar(
    boardCCopy,
    Pieces["wP"],
    [linha, coluna],
    [linha + 1, coluna - 1]
  );

  if (canMoveDiagonalEsquerda) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha + 1, coluna - 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bP"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  const canMoveCimaOne = movimentar(
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
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 1, coluna - 1]
  );

  if (canMoveDiagonalDireita) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna - 1]);
  }

  boardCCopy = clone(boardC);

  const canMoveDiagonalEsquerda = movimentar(
    boardCCopy,
    Pieces["bP"],
    [linha, coluna],
    [linha - 1, coluna + 1]
  );

  if (canMoveDiagonalEsquerda) {
    jogadasPossiveis.push(boardCCopy);
    casasAtacadas.push([linha - 1, coluna + 1]);
  }

  return returnPositionAttacked ? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wC"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveDireitaCima = movimentar(
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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveDireitaCima = movimentar(
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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveCima = movimentar(
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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMoveCima = movimentar(
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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardCCopy[linha][coluna] !== -1; li++) {
    canMove = movimentar(
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
  for (let li = linha - 1; boardCCopy[li][coluna] !== -1; li--) {
    canMove = movimentar(
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
  for (let co = coluna + 1; boardCCopy[linha][co] !== -1; co++) {
    canMove = movimentar(
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
  for (let co = coluna - 1; boardCCopy[linha][co] !== -1; co--) {
    canMove = movimentar(
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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardCCopy[linha][coluna] !== -1; li++) {
    canMove = movimentar(
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
  for (let li = linha - 1; boardCCopy[li][coluna] !== -1; li--) {
    canMove = movimentar(
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
  for (let co = coluna + 1; boardCCopy[linha][co] !== -1; co++) {
    canMove = movimentar(
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
  for (let co = coluna - 1; boardCCopy[linha][co] !== -1; co--) {
    canMove = movimentar(
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
  boardC: number[][],
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
    canMove = movimentar(boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wB"], [linha, coluna], [li, co]);

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
  boardC: number[][],
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
    canMove = movimentar(boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bB"], [linha, coluna], [li, co]);

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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis: number[][][] = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  for (let li = linha + 1; boardC[linha][coluna] !== -1; li++) {
    canMove = movimentar(
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
  for (let li = linha - 1; boardC[li][coluna] !== -1; li--) {
    canMove = movimentar(
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
  for (let co = coluna + 1; boardC[linha][co] !== -1; co++) {
    canMove = movimentar(
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
  for (let co = coluna - 1; boardC[linha][co] !== -1; co--) {
    canMove = movimentar(
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
    canMove = movimentar(boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["wQ"], [linha, coluna], [li, co]);

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
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean
) => {
  let jogadasPossiveis: number[][][] = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;
  for (let li = linha + 1; boardC[linha][coluna] !== -1; li++) {
    canMove = movimentar(
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
  for (let li = linha - 1; boardC[li][coluna] !== -1; li--) {
    canMove = movimentar(
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
  for (let co = coluna + 1; boardC[linha][co] !== -1; co++) {
    canMove = movimentar(
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
  for (let co = coluna - 1; boardC[linha][co] !== -1; co--) {
    canMove = movimentar(
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
    canMove = movimentar(boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

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
    canMove = movimentar(boardCCopy, Pieces["bQ"], [linha, coluna], [li, co]);

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
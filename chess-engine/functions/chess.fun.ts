import {printPieces, Jogador, Pieces, Positions, Roque, material} from "../libs";
import { Board } from "../types";
import {checkCasasAtacadas, checkPossiveisNos} from "../validation/check-possiveis-nos.fun";

export function clone(board: Board) {
  let boardClone = new Board();

  const {casas, moveWR, moveBR, moveBTD, moveBTE, moveWTD, moveWTE, unPassantW, unPassantB} = JSON.parse(JSON.stringify(board));
  
  boardClone.casas = casas;
  boardClone.moveWR = moveWR;
  boardClone.moveBR = moveBR;
  boardClone.moveBTD = moveBTD;
  boardClone.moveBTE = moveBTE;
  boardClone.moveWTD = moveWTD;
  boardClone.moveWTE = moveWTE;
  boardClone.unPassantW = unPassantW;
  boardClone.unPassantB = unPassantB;

  return boardClone;
}

export function printBoard(board: number[][], jogador: number, humano?: boolean) {

  if(humano) {
    if(jogador === Jogador["w"]) {
      console.log(`
     8 | ${printPieces[board[9][2]]} | ${printPieces[board[9][3]]} | ${
      printPieces[board[9][4]]
    } | ${printPieces[board[9][5]]} | ${printPieces[board[9][6]]} | ${
      printPieces[board[9][7]]
    } | ${printPieces[board[9][8]]} | ${printPieces[board[9][9]]} |
     7 | ${printPieces[board[8][2]]} | ${printPieces[board[8][3]]} | ${
      printPieces[board[8][4]]
    } | ${printPieces[board[8][5]]} | ${printPieces[board[8][6]]} | ${
      printPieces[board[8][7]]
    } | ${printPieces[board[8][8]]} | ${printPieces[board[8][9]]} |
     6 | ${printPieces[board[7][2]]} | ${printPieces[board[7][3]]} | ${
      printPieces[board[7][4]]
    } | ${printPieces[board[7][5]]} | ${printPieces[board[7][6]]} | ${
      printPieces[board[7][7]]
    } | ${printPieces[board[7][8]]} | ${printPieces[board[7][9]]} |
     5 | ${printPieces[board[6][2]]} | ${printPieces[board[6][3]]} | ${
      printPieces[board[6][4]]
    } | ${printPieces[board[6][5]]} | ${printPieces[board[6][6]]} | ${
      printPieces[board[6][7]]
    } | ${printPieces[board[6][8]]} | ${printPieces[board[6][9]]} |
     4 | ${printPieces[board[5][2]]} | ${printPieces[board[5][3]]} | ${
      printPieces[board[5][4]]
    } | ${printPieces[board[5][5]]} | ${printPieces[board[5][6]]} | ${
      printPieces[board[5][7]]
    } | ${printPieces[board[5][8]]} | ${printPieces[board[5][9]]} |
     3 | ${printPieces[board[4][2]]} | ${printPieces[board[4][3]]} | ${
      printPieces[board[4][4]]
    } | ${printPieces[board[4][5]]} | ${printPieces[board[4][6]]} | ${
      printPieces[board[4][7]]
    } | ${printPieces[board[4][8]]} | ${printPieces[board[4][9]]} |
     2 | ${printPieces[board[3][2]]} | ${printPieces[board[3][3]]} | ${
      printPieces[board[3][4]]
    } | ${printPieces[board[3][5]]} | ${printPieces[board[3][6]]} | ${
      printPieces[board[3][7]]
    } | ${printPieces[board[3][8]]} | ${printPieces[board[3][9]]} |
     1 | ${printPieces[board[2][2]]} | ${printPieces[board[2][3]]} | ${
      printPieces[board[2][4]]
    } | ${printPieces[board[2][5]]} | ${printPieces[board[2][6]]} | ${
      printPieces[board[2][7]]
    } | ${printPieces[board[2][8]]} | ${printPieces[board[2][9]]} |
         a   b   c   d   e   f   g   h   
      `);
      return;
    } 
  
    console.log(`
    1 | ${printPieces[board[2][2]]} | ${printPieces[board[2][3]]} | ${
      printPieces[board[2][4]]
    } | ${printPieces[board[2][5]]} | ${printPieces[board[2][6]]} | ${
      printPieces[board[2][7]]
    } | ${printPieces[board[2][8]]} | ${printPieces[board[2][9]]} |
    2 | ${printPieces[board[3][2]]} | ${printPieces[board[3][3]]} | ${
      printPieces[board[3][4]]
    } | ${printPieces[board[3][5]]} | ${printPieces[board[3][6]]} | ${
      printPieces[board[3][7]]
    } | ${printPieces[board[3][8]]} | ${printPieces[board[3][9]]} |
    3 | ${printPieces[board[4][2]]} | ${printPieces[board[4][3]]} | ${
      printPieces[board[4][4]]
    } | ${printPieces[board[4][5]]} | ${printPieces[board[4][6]]} | ${
      printPieces[board[4][7]]
    } | ${printPieces[board[4][8]]} | ${printPieces[board[4][9]]} |
    4 | ${printPieces[board[5][2]]} | ${printPieces[board[5][3]]} | ${
      printPieces[board[5][4]]
    } | ${printPieces[board[5][5]]} | ${printPieces[board[5][6]]} | ${
      printPieces[board[5][7]]
    } | ${printPieces[board[5][8]]} | ${printPieces[board[5][9]]} |
    5 | ${printPieces[board[6][2]]} | ${printPieces[board[6][3]]} | ${
      printPieces[board[6][4]]
    } | ${printPieces[board[6][5]]} | ${printPieces[board[6][6]]} | ${
      printPieces[board[6][7]]
    } | ${printPieces[board[6][8]]} | ${printPieces[board[6][9]]} |
    6 | ${printPieces[board[7][2]]} | ${printPieces[board[7][3]]} | ${
      printPieces[board[7][4]]
    } | ${printPieces[board[7][5]]} | ${printPieces[board[7][6]]} | ${
      printPieces[board[7][7]]
    } | ${printPieces[board[7][8]]} | ${printPieces[board[7][9]]} |
    7 | ${printPieces[board[8][2]]} | ${printPieces[board[8][3]]} | ${
      printPieces[board[8][4]]
    } | ${printPieces[board[8][5]]} | ${printPieces[board[8][6]]} | ${
      printPieces[board[8][7]]
    } | ${printPieces[board[8][8]]} | ${printPieces[board[8][9]]} |
    8 | ${printPieces[board[9][2]]} | ${printPieces[board[9][3]]} | ${
      printPieces[board[9][4]]
    } | ${printPieces[board[9][5]]} | ${printPieces[board[9][6]]} | ${
      printPieces[board[9][7]]
    } | ${printPieces[board[9][8]]} | ${printPieces[board[9][9]]} |
         a   b   c   d   e   f   g   h   
      `);
  }

}

export function newGame(board: number[][]) {
  board[0] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  board[1] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  board[2] = [
    -1,
    -1,
    Pieces["wT"],
    Pieces["wC"],
    Pieces["wB"],
    Pieces["wQ"],
    Pieces["wR"],
    Pieces["wB"],
    Pieces["wC"],
    Pieces["wT"],
    -1,
    -1,
  ];
  board[3] = [
    -1,
    -1,
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    Pieces["wP"],
    -1,
    -1,
  ];
  board[4] = [
    -1,
    -1,
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    -1,
    -1,
  ];
  board[5] = [
    -1,
    -1,
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    -1,
    -1,
  ];

  board[6] = [
    -1,
    -1,
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    -1,
    -1,
  ];

  board[7] = [
    -1,
    -1,
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    Pieces["--"],
    -1,
    -1,
  ];

  board[8] = [
    -1,
    -1,
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    Pieces["bP"],
    -1,
    -1,
  ];
  board[9] = [
    -1,
    -1,
    Pieces["bT"],
    Pieces["bC"],
    Pieces["bB"],
    Pieces["bQ"],
    Pieces["bR"],
    Pieces["bB"],
    Pieces["bC"],
    Pieces["bT"],
    -1,
    -1,
  ];

  board[10] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

  board[11] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
}

export function checkXeque(board: Board, jogadorAtual: number) {
  const jogadorOposto =
    jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];

  let positionRei: [number, number] = [NaN, NaN];

  board.casas.find((linha, indexlinha) => {

    return linha.find((piece, indexcoluna) => {

      if(piece < 1) return false;

      if(piece === Pieces["wR"] && jogadorOposto === Jogador["w"]) {
        positionRei = [indexlinha, indexcoluna];
        return true;
      }

      if(piece === Pieces["bR"] && jogadorOposto === Jogador["b"]) {
        positionRei = [indexlinha, indexcoluna];
        return true;
      }

      return false;

    })});

  // for (let linha = 2; linha < 10; linha++) {
  //   for (let coluna = 2; coluna < 10; coluna++) {
  //     if (
  //       jogadorOposto === Jogador["w"] &&
  //       board.casas[linha][coluna] === Pieces["wR"]
  //     ) {
  //       positionRei = [linha, coluna];
  //       hasRei++;
  //       break;
  //     }
  //
  //     if (
  //       jogadorOposto === Jogador["b"] &&
  //       board.casas[linha][coluna] === Pieces["bR"]
  //     ) {
  //       positionRei = [linha, coluna];
  //       hasRei++;
  //       break;
  //     }
  //   }
  //
  //   if (hasRei) {
  //     break;
  //   }
  // }

  const positionAtacadas = checkCasasAtacadas(board, jogadorAtual);


  const [linhaRei, colunaRei] = positionRei;

  for (const positionAtacada of positionAtacadas) {
    const [linhaAtacada, colunaAtacada] = positionAtacada as [number, number];

    if (linhaAtacada === linhaRei && colunaAtacada === colunaRei) {
      return true;
    }
  }

  return false;
}

export function checkXequeMate(board: Board, jogadorAtual: number) {
  const isCheck = checkXeque(board, jogadorAtual);

  if (!isCheck) {
    return false;
  }

  const jogadorOposto =
    jogadorAtual === Jogador["w"] ? Jogador["b"] : Jogador["w"];

  const jogadasPossiveis = checkPossiveisNos(board, jogadorOposto);

  for (const jogadaPossivel of jogadasPossiveis) {
    const isCheckAgain = checkXeque(jogadaPossivel as Board, jogadorAtual);

    if (!isCheckAgain) {
      return false;
    }
  }

  return true;
}

export function anunciarVencedor(jogadorAtual: number) {
  if (jogadorAtual === Jogador["w"]) {
    console.log("As brancas venceram.");
    return;
  }

  console.log("As pretas venceram.");
}

export function checkRoque(
  board: Board,
  ladoRoque: number,
  jogador: number
) {
  const rei = jogador === Jogador["w"] ? Pieces["wR"] : Pieces["bR"];
  const torre = jogador === Jogador["w"] ? Pieces["wT"] : Pieces["bT"];
  const positionRei = rei === Pieces["wR"] ? Positions["e1"] : Positions["e8"];
  let positionTorre;

  if (ladoRoque === Roque["D"]) {
    positionTorre = torre === Pieces["wT"] ? Positions["h1"] : Positions["h8"];
  } else {
    positionTorre = torre === Pieces["wT"] ? Positions["a1"] : Positions["a8"];
  }

  const [linhaRei, colunaRei] = positionRei;
  const [linhaTorre, colunaTorre] = positionTorre;

  if (board.casas[linhaRei][colunaRei] !== rei) {
    return false;
  }

  if (board.casas[linhaTorre][colunaTorre] !== torre) {
    return false;
  }

  if (ladoRoque === Roque["D"] && jogador === Jogador["w"]) {
    if (board.casas[2][7] !== Pieces["--"] || board.casas[2][8] !== Pieces["--"]) {
      return false;
    }

    if (board.moveWR || board.moveWTD) {
      return false;
    }
  } else if (ladoRoque === Roque["D"] && jogador === Jogador["b"]) {
    if (board.casas[9][7] !== Pieces["--"] || board.casas[9][8] !== Pieces["--"]) {
      return false;
    }

    if (board.moveBR || board.moveBTD) {
      return false;
    }
  } else if (ladoRoque === Roque["E"] && jogador === Jogador["w"]) {
    if (
      board.casas[2][3] !== Pieces["--"] ||
      board.casas[2][4] !== Pieces["--"] ||
      board.casas[2][5] !== Pieces["--"]
    ) {
      return false;
    }

    if (board.moveWR  || board.moveWTE) {
      return false;
    }
  } else if (ladoRoque === Roque["E"] && jogador === Jogador["b"]) {
    if (
      board.casas[9][3] !== Pieces["--"] ||
      board.casas[9][4] !== Pieces["--"] ||
      board.casas[9][5] !== Pieces["--"]
    ) {
      return false;
    }

    if (board.moveBR || board.moveBTE) {
      return false;
    }
  }

  const jogadorOposto = jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"];

  const casasAtacadas = checkCasasAtacadas(board, jogadorOposto);

  for (const casaAtacada of casasAtacadas) {
    const [linhaAtacada, colunaAtacada] = casaAtacada as [number, number];

    if (ladoRoque === Roque["D"] && jogador === Jogador["w"]) {
      if (
        linhaAtacada === 2 &&
        (colunaAtacada === 6 || colunaAtacada === 7 || colunaAtacada === 8)
      ) {
        return false;
      }
    } else if (ladoRoque === Roque["D"] && jogador === Jogador["b"]) {
      if (
        linhaAtacada === 9 &&
        (colunaAtacada === 6 || colunaAtacada === 7 || colunaAtacada === 8)
      ) {
        return false;
      }
    } else if (ladoRoque === Roque["E"] && jogador === Jogador["w"]) {
      if (
        linhaAtacada === 2 &&
        (colunaAtacada === 6 ||
          colunaAtacada === 5 ||
          colunaAtacada === 4 ||
          colunaAtacada === 3 ||
          colunaAtacada === 2)
      ) {
        return false;
      }
    } else if (ladoRoque === Roque["E"] && jogador === Jogador["b"]) {
      if (
        linhaAtacada === 9 &&
        (colunaAtacada === 6 ||
          colunaAtacada === 5 ||
          colunaAtacada === 4 ||
          colunaAtacada === 3 ||
          colunaAtacada === 2)
      ) {
        return false;
      }
    }
  }

  return true;
}

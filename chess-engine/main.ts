
//? Maps
function clone(array: any[]) {
  return JSON.parse(JSON.stringify(array));
}

function humano(board: number[][]): any {
  let posicaoDestino = undefined;
  let posicaoOrigem = undefined;


  while(!posicaoOrigem) {
    console.log("Digite a posição da peça que deseja mover ou 's' pra desistir e sair: ");
    posicaoOrigem = prompt();

      if(posicaoOrigem === 's') {
        console.log("Saindo...");
        process.exit();
      }
  }

  while (!posicaoDestino) { 

    console.log("Digite a posição que você deseja que a peça vá ou 's' para desistir e sair: ");
    posicaoDestino = prompt();

    if(posicaoDestino === 's') {
      console.log("Saindo...");
      process.exit();
    }
  }

    const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];

    return [board[linhaOrigem][colunaOrigem], Positions[posicaoOrigem], Positions[posicaoDestino]];
}


const Jogador: Record<string, number> = {
  w: 0,
  b: 1,
}

const Pieces: Record<string, number> = {
  "--": 0,
  wP: 1,
  wC: 2,
  wB: 3,
  wT: 4,
  wQ: 5,
  wR: 6,
  bP: 7,
  bC: 8,
  bB: 9,
  bT: 10,
  bQ: 11,
  bR: 12,
};

const printPieces: Record<number, string> = {
  0: "--",
  1: "wP",
  2: "wC",
  3: "wB",
  4: "wT",
  5: "wQ",
  6: "wR",
  7: "bP",
  8: "bC",
  9: "bB",
  10: "bT",
  11: "bQ",
  12: "bR",
};

const Positions: Record<string, [number, number]> = {
  a1: [2, 2],
  a2: [3, 2],
  a3: [4, 2],
  a4: [5, 2],
  a5: [6, 2],
  a6: [7, 2],
  a7: [8, 2],
  a8: [9, 2],

  b1: [2, 3],
  b2: [3, 3],
  b3: [4, 3],
  b4: [5, 3],
  b5: [6, 3],
  b6: [7, 3],
  b7: [8, 3],
  b8: [9, 3],

  c1: [2, 4],
  c2: [3, 4],
  c3: [4, 4],
  c4: [5, 4],
  c5: [6, 4],
  c6: [7, 4],
  c7: [8, 4],
  c8: [9, 4],

  d1: [2, 5],
  d2: [3, 5],
  d3: [4, 5],
  d4: [5, 5],
  d5: [6, 5],
  d6: [7, 5],
  d7: [8, 5],
  d8: [9, 5],

  e1: [2, 6],
  e2: [3, 6],
  e3: [4, 6],
  e4: [5, 6],
  e5: [6, 6],
  e6: [7, 6],
  e7: [8, 6],
  e8: [9, 6],

  f1: [2, 7],
  f2: [3, 7],
  f3: [4, 7],
  f4: [5, 7],
  f5: [6, 7],
  f6: [7, 7],
  f7: [8, 7],
  f8: [9, 7],

  g1: [2, 8],
  g2: [3, 8],
  g3: [4, 8],
  g4: [5, 8],
  g5: [6, 8],
  g6: [7, 8],
  g7: [8, 8],
  g8: [9, 8],

  h1: [2, 9],
  h2: [3, 9],
  h3: [4, 9],
  h4: [5, 9],
  h5: [6, 9],
  h6: [7, 9],
  h7: [8, 9],
  h8: [9, 9],
};

let boardC: number[][] = [];

function printBoard(b?: number[][]) {
  const board = b ? b : boardC;

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
     a    b    c    d    e    f    g    h   
  `);
}

function newGame() {
  boardC[0] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  boardC[1] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  boardC[2] = [
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
  boardC[3] = [
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
  boardC[4] = [
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
  boardC[5] = [
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

  boardC[6] = [
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

  boardC[7] = [
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

  boardC[8] = [
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
  boardC[9] = [
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

  boardC[10] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

  boardC[11] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
}

let checkPositionValid: any = [];

checkPositionValid[Pieces["wP"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // diagonal direita
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] > 6
  ) {
    return true;
  }

  // diagonal esquerda
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] > 6
  ) {
    return true;
  }

  // frente
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  if (
    linhaOrigem === 3 &&
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  
  return false;
};

checkPositionValid[Pieces["bP"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // diagonal direita
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] > 0
  ) {
    return true;
  }

  // diagonal esquerda
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] > 0
  ) {
    return true;
  }

  // frente
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  if (
    linhaOrigem === 8 &&
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  if (linhaOrigem === 3) 
  return false;
};

checkPositionValid[Pieces["wC"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Direita pra cima
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem + 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 2 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda pra cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 2 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem - 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda pra baixo
  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem - 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 2 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Direita pra baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 2 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem + 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  
  return false;
};

checkPositionValid[Pieces["bC"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Direita pra cima
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 2 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda pra cima
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 2 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }
  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda pra baixo
  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 2 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Direita pra baixo
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 2 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  
  return false;
};

checkPositionValid[Pieces["wR"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  //Baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem - 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  //Direita
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem + 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal direita cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal direita baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal esquerda cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal esquerda baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 1 &&
    (boardC[linhaDestino][colunaDestino] > 6 ||
      boardC[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  
  return false;
};

checkPositionValid[Pieces["bR"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  //Baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  //Direita
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal direita cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal direita baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal esquerda cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal esquerda baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 1 &&
    boardC[linhaDestino][colunaDestino] < 7 &&
    boardC[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  
  return false;
};

checkPositionValid[Pieces["wT"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  if (colunaOrigem === colunaDestino) {
    if (linhaOrigem === linhaDestino) {
      return false;
    }
    //Cima
    if (linhaOrigem < linhaDestino) {
      for (
        let linha = linhaOrigem + 1;
        boardC[linha][colunaOrigem] !== -1;
        linha++
      ) {
        if (
          linhaDestino === linha &&
          (boardC[linha][colunaDestino] > 6 ||
            boardC[linha][colunaDestino] === Pieces["--"])
        ) {
          return true;
        }

        if (boardC[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (linhaOrigem > linhaDestino) {
      //Baixo
      for (
        let linha = linhaOrigem - 1;
        boardC[linha][colunaOrigem] !== -1;
        linha--
      ) {
        if (
          linhaDestino === linha &&
          (boardC[linha][colunaDestino] > 6 ||
            boardC[linha][colunaDestino] === Pieces["--"])
        ) {
          return true;
        }

        if (boardC[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }

  //Horizontal
  if (linhaDestino === linhaOrigem) {
    if (colunaOrigem === colunaDestino) {
      return false;
    }
    //Direita
    if (colunaOrigem < colunaDestino) {
      for (
        let coluna = colunaOrigem + 1;
        boardC[linhaOrigem][coluna] !== -1;
        coluna++
      ) {
        if (
          coluna === colunaDestino &&
          (boardC[linhaOrigem][coluna] > 6 ||
            boardC[linhaOrigem][coluna] === Pieces["--"])
        ) {
          return true;
        }

        if (boardC[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (colunaOrigem > colunaDestino) {
      //Esquerda
      for (
        let coluna = colunaOrigem - 1;
        boardC[linhaOrigem][coluna] !== -1;
        coluna--
      ) {
        if (
          coluna === colunaDestino &&
          (boardC[linhaOrigem][coluna] > 6 ||
            boardC[linhaOrigem][coluna] === Pieces["--"])
        ) {
          return true;
        }

        if (boardC[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }
};

checkPositionValid[Pieces["bT"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Vertical
  if (colunaOrigem === colunaDestino) {
    if (linhaOrigem === linhaDestino) {
      return false;
    }
    //Cima
    if (linhaOrigem < linhaDestino) {
      for (
        let linha = linhaOrigem + 1;
        boardC[linha][colunaOrigem] !== -1;
        linha++
      ) {
        if (
          linhaDestino === linha &&
          boardC[linha][colunaDestino] > -1 &&
          boardC[linha][colunaDestino] < 7
        ) {
          return true;
        }

        if (boardC[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (linhaOrigem > linhaDestino) {
      //Baixo
      for (
        let linha = linhaOrigem - 1;
        boardC[linha][colunaOrigem] !== -1;
        linha--
      ) {
        if (
          linhaDestino === linha &&
          boardC[linha][colunaDestino] > -1 &&
          boardC[linha][colunaDestino] < 7
        ) {
          return true;
        }

        if (boardC[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }

  //Horizontal
  if (linhaDestino === linhaOrigem) {
    if (colunaOrigem === colunaDestino) {
      return false;
    }
    //Direita
    if (colunaOrigem < colunaDestino) {
      for (
        let coluna = colunaOrigem + 1;
        boardC[linhaOrigem][coluna] !== -1;
        coluna++
      ) {
        if (
          coluna === colunaDestino &&
          boardC[linhaOrigem][coluna] > -1 &&
          boardC[linhaOrigem][coluna] < 7
        ) {
          return true;
        }

        if (boardC[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (colunaOrigem > colunaDestino) {
      //Esquerda
      for (
        let coluna = colunaOrigem - 1;
        boardC[linhaOrigem][coluna] !== -1;
        coluna--
      ) {
        if (
          coluna === colunaDestino &&
          boardC[linhaOrigem][coluna] > -1 &&
          boardC[linhaOrigem][coluna] < 7
        ) {
          return true;
        }

        if (boardC[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }
};

checkPositionValid[Pieces["wB"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  if (linhaDestino === linhaOrigem || colunaDestino === colunaOrigem) {
    return false;
  }

  //Diagonal direita cima

  if (linhaOrigem < linhaDestino && colunaOrigem < colunaDestino) {
    let linha = linhaOrigem + 1;
    let coluna = colunaOrigem + 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] > 6 || boardC[linha][coluna] === 0)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna++;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem > linhaDestino && colunaOrigem < colunaDestino) {
    //Direita baixo
    let linha = linhaOrigem - 1;
    let coluna = colunaOrigem + 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] > 6 || boardC[linha][coluna] === 0)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha--;
        coluna++;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem > linhaDestino && colunaOrigem > colunaDestino) {
    //Esquerda baixo
    let linha = linhaOrigem - 1;
    let coluna = colunaOrigem - 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] > 6 || boardC[linha][coluna] === 0)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha--;
        coluna--;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem < linhaDestino && colunaOrigem > colunaDestino) {
    //Esquerda cima
    let linha = linhaOrigem + 1;
    let coluna = colunaOrigem - 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] > 6 || boardC[linha][coluna] === 0)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna--;
        continue;
      }

      return false;
    }
  }
};

checkPositionValid[Pieces["bB"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  if (linhaDestino === linhaOrigem || colunaDestino === colunaOrigem) {
    return false;
  }

  //Diagonal direita cima

  if (linhaOrigem < linhaDestino && colunaOrigem < colunaDestino) {
    let linha = linhaOrigem + 1;
    let coluna = colunaOrigem + 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] === 0 || boardC[linha][coluna] < 7)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna++;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem > linhaDestino && colunaOrigem < colunaDestino) {
    //Direita baixo
    let linha = linhaOrigem - 1;
    let coluna = colunaOrigem + 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] === 0 || boardC[linha][coluna] < 7)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha--;
        coluna++;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem > linhaDestino && colunaOrigem > colunaDestino) {
    //Esquerda baixo
    let linha = linhaOrigem - 1;
    let coluna = colunaOrigem - 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] === 0 || boardC[linha][coluna] < 7)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha--;
        coluna--;
        continue;
      }

      return false;
    }
  } else if (linhaOrigem < linhaDestino && colunaOrigem > colunaDestino) {
    //Esquerda cima
    let linha = linhaOrigem + 1;
    let coluna = colunaOrigem - 1;

    while (boardC[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (boardC[linha][coluna] === 0 || boardC[linha][coluna] < 7)
      ) {
        return true;
      }

      if (boardC[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna--;
        continue;
      }

      return false;
    }
  }
};

checkPositionValid[Pieces["wQ"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  return (
    checkPositionValid[Pieces["wB"]](
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    ) ||
    checkPositionValid[Pieces["wT"]](
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    )
  );
};

checkPositionValid[Pieces["bQ"]] = (
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  return (
    checkPositionValid[Pieces["bB"]](
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    ) ||
    checkPositionValid[Pieces["bT"]](
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    )
  );
};

function movimentar(
  board: number[][],
  piece: number,
  positionOrigem: [number, number],
  positionDestion: [number, number]
) {
  const [linhaOrigem, colunaOrigem] = positionOrigem;
  const [linhaDestino, colunaDestino] = positionDestion;

  if (board[linhaOrigem][colunaOrigem] !== piece) {
    return false;
  }

  const canMoviment = checkPositionValid[piece](
    linhaOrigem,
    colunaOrigem,
    linhaDestino,
    colunaDestino
  );

  if (!canMoviment) {
    return false;
  }

  board[linhaOrigem][colunaOrigem] = Pieces["--"];
  board[linhaDestino][colunaDestino] = piece;

  return true;
}

let checkPossiveisJogadasByPiece: any[] = [];

checkPossiveisJogadasByPiece[Pieces["wP"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha + 1, coluna])
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
    casasAtacadas.push([linha + 2, coluna])
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
    casasAtacadas.push([linha + 1, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna - 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bP"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha - 1, coluna])
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
    casasAtacadas.push([linha - 2, coluna])
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
    casasAtacadas.push([linha - 1, coluna - 1])
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
    casasAtacadas.push([linha - 1, coluna + 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wC"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha + 2, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna + 2])
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
    casasAtacadas.push([linha + 1, coluna - 2])
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
    casasAtacadas.push([linha + 2, coluna - 1])
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
    casasAtacadas.push([linha - 2, coluna - 1])
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
    casasAtacadas.push([linha - 1, coluna - 2])
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
    casasAtacadas.push([linha - 1, coluna + 2])
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
    casasAtacadas.push([linha - 2, coluna + 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bC"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha + 2, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna + 2])
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
    casasAtacadas.push([linha + 1, coluna - 2])
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
    casasAtacadas.push([linha + 2, coluna - 1])
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
    casasAtacadas.push([linha - 2, coluna - 1])
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
    casasAtacadas.push([linha - 1, coluna - 2])
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
    casasAtacadas.push([linha - 1, coluna + 2])
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
    casasAtacadas.push([linha - 2, coluna + 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wR"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha + 1, coluna])
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
    casasAtacadas.push([linha - 1, coluna])
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
    casasAtacadas.push([linha, coluna - 1])
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
    casasAtacadas.push([linha, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna + 1])
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
    casasAtacadas.push([linha - 1, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna - 1])
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
    casasAtacadas.push([linha - 1, coluna - 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bR"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
    casasAtacadas.push([linha + 1, coluna])
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
    casasAtacadas.push([linha - 1, coluna])
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
    casasAtacadas.push([linha, coluna - 1])
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
    casasAtacadas.push([linha, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna + 1])
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
    casasAtacadas.push([linha - 1, coluna + 1])
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
    casasAtacadas.push([linha + 1, coluna - 1])
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
    casasAtacadas.push([linha - 1, coluna - 1])
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wT"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
) => {
  
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardC[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      boardCCopy,
      Pieces["wT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna])
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
      Pieces["wT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna])
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
      Pieces["wT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co])
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
      Pieces["wT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co])
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bT"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
) => {
  let jogadasPossiveis = [];
  let casasAtacadas = [];
  let boardCCopy = clone(boardC);

  let canMove;

  for (let li = linha + 1; boardC[linha][coluna] !== -1; li++) {
    canMove = movimentar(
      boardCCopy,
      Pieces["bT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna])
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
      Pieces["bT"],
      [linha, coluna],
      [li, coluna]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([li, coluna])
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
      Pieces["bT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co])
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
      Pieces["bT"],
      [linha, coluna],
      [linha, co]
    );

    if (canMove) {
      jogadasPossiveis.push(boardCCopy);
      casasAtacadas.push([linha, co])
    } else {
      break;
    }

    boardCCopy = clone(boardC);
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wB"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bB"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["wQ"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
      casasAtacadas.push([li, coluna])
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
      casasAtacadas.push([li, coluna])
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
      casasAtacadas.push([linha, co])
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
      casasAtacadas.push([linha, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

checkPossiveisJogadasByPiece[Pieces["bQ"]] = (
  boardC: number[][],
  linha: number,
  coluna: number,
  returnPositionAttacked: boolean,
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
      casasAtacadas.push([li, coluna])
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
      casasAtacadas.push([li, coluna])
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
      casasAtacadas.push([linha, co])
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
      casasAtacadas.push([linha, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
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
      casasAtacadas.push([li, co])
      boardCCopy = clone(boardC);
    } else {
      break;
    }

    li++;
    co--;
  }

  return returnPositionAttacked? casasAtacadas : jogadasPossiveis;
};

interface OptionsCheckPossiveisNos {
  returnPositionAttacked: boolean;
}

function checkPossiveisNos(board: number[][], jogador: number, options?: OptionsCheckPossiveisNos): number[][][] | [number, number][] {
  let jogadasPossiveis = [];


  for (let linha = 0; linha < 12; linha++) {
    for (let coluna = 0; coluna < 12; coluna++) {
      if (board[linha][coluna] < 1) {
        continue;
      }

      if(board[linha][coluna] > 6 && jogador == 0) {
        continue;
      }

      if(board[linha][coluna] > 0 && board[linha][coluna] < 7 && jogador == 1) {
        continue;
      }
      
      jogadasPossiveis.push(
        ...checkPossiveisJogadasByPiece[board[linha][coluna]](
          board,
          linha,
          coluna,
          options?.returnPositionAttacked,
        )
      );
    }
  }

  return jogadasPossiveis;
}

function checkXeque(board: number[][], jogadorAtual: number) {

  const jogadorOposto = jogadorAtual === Jogador["w"]? Jogador["b"] : Jogador["w"];
  let hasRei = 0;
  let positionRei: [number, number] = [NaN, NaN];

  for (let linha = 0; linha < 12; linha++) {
    for (let coluna = 0; coluna < 12; coluna++) {
          if(jogadorOposto === Jogador["w"] && board[linha][coluna] === Pieces["wR"]) {
            positionRei = [linha, coluna];
            hasRei++;
            break;
          }

          if(jogadorOposto === Jogador["b"] && board[linha][coluna] === Pieces["bR"]) {
            positionRei = [linha, coluna];
            hasRei++;
            break;
          }
      } 

      if(hasRei) {
        break;
      }
    }
    
  const positionAtacadas = checkPossiveisNos(board, jogadorAtual, {
    returnPositionAttacked: true,
  });

  const [linhaRei, colunaRei] = positionRei;

  for(const positionAtacada of positionAtacadas) {
    const [linhaAtacada, colunaAtacada] = positionAtacada;

    if(linhaAtacada === linhaRei && colunaAtacada === colunaRei) {
      return true;
    }
  }

  return false;
}

function checkXequeMate(board: number[][], jogadorAtual: number) {

  const isCheck = checkXeque(board, jogadorAtual)

  if(!isCheck) {
    return false;
  }

  const jogadorOposto = jogadorAtual === Jogador["w"]? Jogador["b"] : Jogador["w"];

  const jogadasPossiveis = checkPossiveisNos(board, jogadorOposto);

  for(const jogadaPossivel of jogadasPossiveis) {
    const isCheckAgain =  checkXeque(jogadaPossivel as number[][], jogadorAtual);

    if(!isCheckAgain) {
      return false;
    }
  }

  return true;
}

newGame();
printBoard();
movimentar(boardC, Pieces["wP"], Positions["f2"], Positions["f3"]); printBoard();
movimentar(boardC, Pieces["bP"], Positions["e7"], Positions["e6"]); printBoard();
movimentar(boardC, Pieces["wP"], Positions["g2"], Positions["g4"]); printBoard();
movimentar(boardC, Pieces["wP"], Positions["e2"], Positions["e3"]); printBoard();
movimentar(boardC, Pieces["bQ"], Positions["d8"], Positions["h4"]); printBoard();

console.log("Xeque:", checkXeque(boardC, Jogador["b"]));
console.log("Xeque-Mate:", checkXequeMate(boardC, Jogador["b"]));





// let casas = checkPossiveisNos(boardC, Jogador["w"], {
//   returnPositionAttacked: true,
// });

// for(const casa of casas) {
//   const key = Object.keys(Positions).find((key) => {
//     const [linha, coluna] = Positions[key];
//     const [l, c] = casa;

//     return linha === l && coluna === c;
//   });

//   console.log(key);
// }



//? Main

// newGame();
// printBoard();
// let jogadaEscolhida;
// let jogadorAtual = Jogador["w"];
// let resultFinal = false;

// while (!resultFinal) {
//   if (jogadorAtual === Jogador["w"]) {
//     jogadaEscolhida = humano(boardC);

//     const [piece, posicaoOrigem, posicaoDestino] = jogadaEscolhida;

//       let sucess = movimentar(boardC, piece, posicaoOrigem, posicaoDestino);

//       if(!sucess) {
//         console.log("Movimento inválido");
//         continue;
//       }
//   } else {
//     jogadaEscolhida = IA();

//     const [piece, posicaoOrigem, posicaoDestino] = jogadaEscolhida;

//     movimentar(boardC, piece, posicaoOrigem, posicaoDestino);

//     printBoard();
//   }

//   resultFinal = checkResultFinal(estadoAtual);

//   jogadorAtual = jogadorAtual === Jogador["w"]? Jogador["b"] : Jogador["w"];
// }

/**
 * Recebe uma posição e um tabuleiro, retorna a peça relativa a posição.
 */

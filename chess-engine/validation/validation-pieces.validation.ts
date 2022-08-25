import { Pieces } from "../libs";
import { Board } from "../types";

export let checkPositionValid: any = [];

checkPositionValid[Pieces["wP"]] = (
  board: Board,
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number,
  canUnPassant?: boolean,
) => {
  // diagonal direita
  if (linhaDestino === linhaOrigem + 1 && colunaDestino === colunaOrigem + 1) {
    if (board.casas[linhaDestino][colunaDestino] > 6) {
      return true;
    }
  }

  // diagonal esquerda
  if (linhaDestino === linhaOrigem + 1 && colunaDestino === colunaOrigem - 1) {
    if (board.casas[linhaDestino][colunaDestino] > 6) {
      return true;
    }
  }

  // frente
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    board.casas[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  if (
    linhaOrigem === 3 &&
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem &&
    board.casas[linhaDestino - 1][colunaDestino] === Pieces["--"] &&
      board.casas[linhaDestino -1][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  //validaçao de un passant
  if (board.unPassantB) {
    const [linhaUnPassant, colunaUnPassant] = board.unPassantB;

    if (
      linhaUnPassant === linhaDestino - 1 &&
      linhaOrigem === linhaUnPassant &&
      colunaDestino === colunaUnPassant
    ) {
      return canUnPassant? [true] : true;
    }

    if (
      linhaUnPassant === linhaDestino - 2 &&
      linhaOrigem === linhaUnPassant + 1 &&
      colunaDestino === colunaUnPassant &&
      (colunaOrigem === colunaUnPassant + 1 ||
        colunaOrigem === colunaUnPassant - 1)
    ) {
      return canUnPassant? [true] : true;
    }
  }

  return false;
};

checkPositionValid[Pieces["bP"]] = (
  board: Board,
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number,
  canUnPassant?: boolean,
) => {
  // diagonal direita
  if (linhaDestino === linhaOrigem - 1 && colunaDestino === colunaOrigem + 1) {
    if (
      board.casas[linhaDestino][colunaDestino] < 7 &&
      board.casas[linhaDestino][colunaDestino] > 0
    ) {
      return true;
    }
  }

  // diagonal esquerda
  if (linhaDestino === linhaOrigem - 1 && colunaDestino === colunaOrigem - 1) {
    if (
      board.casas[linhaDestino][colunaDestino] < 7 &&
      board.casas[linhaDestino][colunaDestino] > 0
    ) {
      return true;
    }
  }

  // frente
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    board.casas[linhaDestino][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  if (
    linhaOrigem === 8 &&
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem &&
    board.casas[linhaDestino][colunaDestino] === Pieces["--"]  &&
      board.casas[linhaOrigem - 1][colunaDestino] === Pieces["--"]
  ) {
    return true;
  }

  //validacao unPassant
  if (board.unPassantW) {
    const [linhaUnPassant, colunaUnPassant] = board.unPassantW;

    if (
      linhaUnPassant === linhaDestino + 1 &&
      linhaOrigem === linhaUnPassant &&
      colunaDestino === colunaUnPassant
    ) {
      
      return canUnPassant? [true] : true;
    }

    if (
      linhaUnPassant === linhaDestino + 2 &&
      linhaOrigem === linhaUnPassant - 1 &&
      colunaDestino === colunaUnPassant &&
      (colunaOrigem === colunaUnPassant + 1 ||
        colunaOrigem === colunaUnPassant - 1)
    ) {
      return canUnPassant? [true] : true;
    }
  }
  
  return false;
};

checkPositionValid[Pieces["wC"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Direita pra cima
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem + 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 2 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda pra cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 2 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem - 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda pra baixo
  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem - 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 2 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Direita pra baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 2 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem + 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  return false;
};

checkPositionValid[Pieces["bC"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Direita pra cima
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem + 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 2 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda pra cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 2 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }
  if (
    linhaDestino === linhaOrigem + 2 &&
    colunaDestino === colunaOrigem - 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda pra baixo
  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem - 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 2 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Direita pra baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 2 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  if (
    linhaDestino === linhaOrigem - 2 &&
    colunaDestino === colunaOrigem + 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  return false;
};

checkPositionValid[Pieces["wR"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  //Baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Esquerda
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem - 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  //Direita
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem + 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal direita cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal direita baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal esquerda cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  // Diagonal esquerda baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 1 &&
    (board[linhaDestino][colunaDestino] > 6 ||
      board[linhaDestino][colunaDestino] === 0)
  ) {
    return true;
  }

  return false;
};

checkPositionValid[Pieces["bR"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  // Cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  //Baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Esquerda
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem - 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  //Direita
  if (
    linhaDestino === linhaOrigem &&
    colunaDestino === colunaOrigem + 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal direita cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem + 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal direita baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem + 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal esquerda cima
  if (
    linhaDestino === linhaOrigem + 1 &&
    colunaDestino === colunaOrigem - 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  // Diagonal esquerda baixo
  if (
    linhaDestino === linhaOrigem - 1 &&
    colunaDestino === colunaOrigem - 1 &&
    board[linhaDestino][colunaDestino] < 7 &&
    board[linhaDestino][colunaDestino] !== -1
  ) {
    return true;
  }

  return false;
};

checkPositionValid[Pieces["wT"]] = (
  board: number[][],
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
        board[linha][colunaOrigem] !== -1;
        linha++
      ) {
        if (
          linhaDestino === linha &&
          (board[linha][colunaDestino] > 6 ||
            board[linha][colunaDestino] === Pieces["--"])
        ) {
          return true;
        }

        if (board[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (linhaOrigem > linhaDestino) {
      //Baixo
      for (
        let linha = linhaOrigem - 1;
        board[linha][colunaOrigem] !== -1;
        linha--
      ) {
        if (
          linhaDestino === linha &&
          (board[linha][colunaDestino] > 6 ||
            board[linha][colunaDestino] === Pieces["--"])
        ) {
          return true;
        }

        if (board[linha][colunaDestino] === Pieces["--"]) {
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
        board[linhaOrigem][coluna] !== -1;
        coluna++
      ) {
        if (
          coluna === colunaDestino &&
          (board[linhaOrigem][coluna] > 6 ||
            board[linhaOrigem][coluna] === Pieces["--"])
        ) {
          return true;
        }

        if (board[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (colunaOrigem > colunaDestino) {
      //Esquerda
      for (
        let coluna = colunaOrigem - 1;
        board[linhaOrigem][coluna] !== -1;
        coluna--
      ) {
        if (
          coluna === colunaDestino &&
          (board[linhaOrigem][coluna] > 6 ||
            board[linhaOrigem][coluna] === Pieces["--"])
        ) {
          return true;
        }

        if (board[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }
};

checkPositionValid[Pieces["bT"]] = (
  board: number[][],
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
        board[linha][colunaOrigem] !== -1;
        linha++
      ) {
        if (
          linhaDestino === linha &&
          board[linha][colunaDestino] > -1 &&
          board[linha][colunaDestino] < 7
        ) {
          return true;
        }

        if (board[linha][colunaDestino] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (linhaOrigem > linhaDestino) {
      //Baixo
      for (
        let linha = linhaOrigem - 1;
        board[linha][colunaOrigem] !== -1;
        linha--
      ) {
        if (
          linhaDestino === linha &&
          board[linha][colunaDestino] > -1 &&
          board[linha][colunaDestino] < 7
        ) {
          return true;
        }

        if (board[linha][colunaDestino] === Pieces["--"]) {
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
        board[linhaOrigem][coluna] !== -1;
        coluna++
      ) {
        if (
          coluna === colunaDestino &&
          board[linhaOrigem][coluna] > -1 &&
          board[linhaOrigem][coluna] < 7
        ) {
          return true;
        }

        if (board[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    } else if (colunaOrigem > colunaDestino) {
      //Esquerda
      for (
        let coluna = colunaOrigem - 1;
        board[linhaOrigem][coluna] !== -1;
        coluna--
      ) {
        if (
          coluna === colunaDestino &&
          board[linhaOrigem][coluna] > -1 &&
          board[linhaOrigem][coluna] < 7
        ) {
          return true;
        }

        if (board[linhaDestino][coluna] === Pieces["--"]) {
          continue;
        }

        return false;
      }
    }
  }
};

checkPositionValid[Pieces["wB"]] = (
  board: number[][],
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] > 6 || board[linha][coluna] === 0)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] > 6 || board[linha][coluna] === 0)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] > 6 || board[linha][coluna] === 0)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] > 6 || board[linha][coluna] === 0)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna--;
        continue;
      }

      return false;
    }
  }
};

checkPositionValid[Pieces["bB"]] = (
  board: number[][],
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] === 0 || board[linha][coluna] < 7)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] === 0 || board[linha][coluna] < 7)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] === 0 || board[linha][coluna] < 7)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
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

    while (board[linha][coluna] !== -1) {
      if (
        linha === linhaDestino &&
        coluna === colunaDestino &&
        (board[linha][coluna] === 0 || board[linha][coluna] < 7)
      ) {
        return true;
      }

      if (board[linha][coluna] === Pieces["--"]) {
        linha++;
        coluna--;
        continue;
      }

      return false;
    }
  }
};

checkPositionValid[Pieces["wQ"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  return (
    checkPositionValid[Pieces["wB"]](
      board,
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    ) ||
    checkPositionValid[Pieces["wT"]](
      board,
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    )
  );
};

checkPositionValid[Pieces["bQ"]] = (
  board: number[][],
  linhaOrigem: number,
  colunaOrigem: number,
  linhaDestino: number,
  colunaDestino: number
) => {
  return (
    checkPositionValid[Pieces["bB"]](
      board,
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    ) ||
    checkPositionValid[Pieces["bT"]](
      board,
      linhaOrigem,
      colunaOrigem,
      linhaDestino,
      colunaDestino
    )
  );
};

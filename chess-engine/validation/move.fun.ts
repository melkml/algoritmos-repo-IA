import { Jogador, Pieces, Roque } from "../libs";
import { checkRoque, escolherPromocao, printBoard } from "../functions";
import { checkPositionValid } from "../validation";
import { Board } from "../types";

export function movimentar(
  board: Board,
  piece: number,
  positionOrigem: [number, number],
  positionDestion: [number, number],
  isHumano?: boolean,
  roqueAndJogador?: [number, number]
) {
  const [r] = roqueAndJogador ? roqueAndJogador : [undefined];

   //Validação e movimentação de roque
  if (r) {
    const [roque, jogador] = roqueAndJogador ? roqueAndJogador : [NaN, NaN];
    const canRoque = checkRoque(board, roque, jogador);

    if (canRoque) {
      if (roque === Roque["D"] && jogador === Jogador["w"]) {
        board.casas[2][6] = Pieces["--"];
        board.casas[2][9] = Pieces["--"];
        board.casas[2][8] = Pieces["wR"];
        board.casas[2][7] = Pieces["wT"];
      } else if (roque === Roque["D"] && jogador === Jogador["b"]) {
        board.casas[9][6] = Pieces["--"];
        board.casas[9][9] = Pieces["--"];
        board.casas[9][8] = Pieces["bR"];
        board.casas[9][7] = Pieces["bT"];
      } else if (roque === Roque["E"] && jogador === Jogador["w"]) {
        board.casas[2][6] = Pieces["--"];
        board.casas[2][2] = Pieces["--"];
        board.casas[2][4] = Pieces["wR"];
        board.casas[2][5] = Pieces["wT"];
      } else if (roque === Roque["E"] && jogador === Jogador["b"]) {
        board.casas[9][6] = Pieces["--"];
        board.casas[9][2] = Pieces["--"];
        board.casas[9][4] = Pieces["bR"];
        board.casas[9][5] = Pieces["bT"];
      }
      return true;
    }

    return false;
  }

  const [linhaOrigem, colunaOrigem] = positionOrigem;
  const [linhaDestino, colunaDestino] = positionDestion;

  if (
    linhaOrigem < 0 ||
    linhaDestino < 0 ||
    colunaOrigem < 0 ||
    colunaDestino < 0
  ) {
    return false;
  }

  if (board.casas[linhaOrigem][colunaOrigem] !== piece) {
    return false;
  }

  //Validação de movimento por peça
  const canMoviment = checkPositionValid[piece](
    piece === Pieces["wP"]
      ? board
      : piece === Pieces["bP"]
      ? board
      : board.casas,
    linhaOrigem,
    colunaOrigem,
    linhaDestino,
    colunaDestino
  );

  if (!canMoviment) {
    return false;
  }

  board.casas[linhaOrigem][colunaOrigem] = Pieces["--"];
  board.casas[linhaDestino][colunaDestino] = piece;

  //Validação de unPassant
  if (piece === Pieces['wP'] || piece === Pieces['bP']) {
    
    let returnUnPassant = true;

    let isUnPassant = checkPositionValid[piece](board, linhaOrigem, colunaOrigem, linhaDestino, colunaDestino, returnUnPassant);
    
    if(Array.isArray(isUnPassant)) {
      const [linhaUnPassant, colunaUnPassant] = board.unPassantB
      ? board.unPassantB
      : board.unPassantW
      ? board.unPassantW
      : [NaN, NaN];

      board.casas[linhaUnPassant][colunaUnPassant] = Pieces["--"];
      console.log("Entrou");
    }
  }

  // Validação de promoção de peao
  if (piece === Pieces["wP"] && linhaDestino === 9) {
    let piecePromovida = isHumano ? escolherPromocao() : Pieces["wQ"];

    while (
      piecePromovida > 6 ||
      piecePromovida === Pieces["wP"] ||
      piecePromovida === Pieces["wR"]
    ) {
      console.log("Peça precisa ser branca e/ou diferente de peão e rei.");
      piecePromovida = escolherPromocao();
    }

    board.casas[linhaDestino][colunaDestino] = piecePromovida;
  }

  if (piece === Pieces["bP"] && linhaDestino === 2) {
    let piecePromovida = isHumano ? escolherPromocao() : Pieces["bQ"];

    while (
      piecePromovida < 7 ||
      piecePromovida === Pieces["bP"] ||
      piecePromovida === Pieces["bR"]
    ) {
      console.log("Peça precisa ser preta e/ou diferente de peão.");
      piecePromovida = escolherPromocao();
    }

    board.casas[linhaDestino][colunaDestino] = piecePromovida;
  }

  const jogadorAtual =
    piece > 6
      ? Jogador["b"]
      : piece < 7 && piece > 0
      ? Jogador["w"]
      : undefined;

  board.checkRoqueAfterMove(jogadorAtual as number);

  board.checkUnPassant();

  if (piece === Pieces["wP"] && linhaDestino === linhaOrigem + 2) {
    board.unPassantW = [linhaDestino, colunaDestino];
  }

  if (piece === Pieces["bP"] && linhaDestino === linhaOrigem + 2) {
    board.unPassantB = [linhaDestino, colunaDestino];
  }

  return true;
}

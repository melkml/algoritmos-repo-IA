import {Jogador, Pieces, Roque} from '../libs'
import { checkRoque, escolherPromocao } from '../functions';
import { checkPositionValid } from '../validation';

export function movimentar(
    board: number[][],
    piece: number,
    positionOrigem: [number, number],
    positionDestion: [number, number],
    isHumano?: boolean,
    roqueAndJogador?: [number, number],
  ) {
    const [r] = roqueAndJogador ? roqueAndJogador : [undefined];
  
    if (r) {
      const [roque, jogador] = roqueAndJogador ? roqueAndJogador : [NaN, NaN];
      const canRoque = checkRoque(board, roque, jogador);
  
      if (canRoque) {
        if (roque === Roque["D"] && jogador === Jogador["w"]) {
          board[2][6] = Pieces["--"];
          board[2][9] = Pieces["--"];
          board[2][8] = Pieces["wR"];
          board[2][7] = Pieces["wT"];
        } else if (roque === Roque["D"] && jogador === Jogador["b"]) {
          board[9][6] = Pieces["--"];
          board[9][9] = Pieces["--"];
          board[9][8] = Pieces["bR"];
          board[9][7] = Pieces["bT"];
        } else if (roque === Roque["E"] && jogador === Jogador["w"]) {
          board[2][6] = Pieces["--"];
          board[2][2] = Pieces["--"];
          board[2][4] = Pieces["wR"];
          board[2][5] = Pieces["wT"];
        } else if (roque === Roque["E"] && jogador === Jogador["b"]) {
          board[9][6] = Pieces["--"];
          board[9][2] = Pieces["--"];
          board[9][4] = Pieces["bR"];
          board[9][5] = Pieces["bT"];
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
  
    if (board[linhaOrigem][colunaOrigem] !== piece) {
      return false;
    }
  
    const canMoviment = checkPositionValid[piece](
      board,
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
    
      // Validação de promoção de peao
      if(piece === Pieces['wP'] && linhaDestino === 9) {
    
        let piecePromovida = isHumano? escolherPromocao() : Pieces['wQ'];
  
        while(piecePromovida > 6 || piecePromovida === Pieces["wP"] || piecePromovida === Pieces["wR"]) {
          console.log("Peça precisa ser branca e/ou diferente de peão e rei.");
          piecePromovida = escolherPromocao();
        }
  
        board[linhaDestino][colunaDestino] = piecePromovida;
      }
  
      if(piece === Pieces['bP'] && linhaDestino === 2) {
        let piecePromovida = isHumano? escolherPromocao() : Pieces['bQ'];
  
        while(piecePromovida < 7 || piecePromovida === Pieces["bP"] || piecePromovida === Pieces["bR"]) {
          console.log("Peça precisa ser preta e/ou diferente de peão.");
          piecePromovida = escolherPromocao();
        }
  
        board[linhaDestino][colunaDestino] = piecePromovida;
      }

    return true;
  }
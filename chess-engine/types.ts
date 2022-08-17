import { Jogador, Pieces, Positions } from "./libs";

export class Board {
  casas: number[][];
  moveWR: boolean;
  moveBR: boolean;
  moveWTD: boolean;
  moveBTD: boolean;
  moveWTE: boolean;
  moveBTE: boolean;
  unPassantW?: [number, number];
  unPassantB?: [number, number];

  constructor() {
    this.casas = [];
    this.moveWR = false;
    this.moveBR = false;
    this.moveWTD = false;
    this.moveBTD = false;
    this.moveWTE = false;
    this.moveBTE = false;
  }

  //! Sempre que movimentar uma peça, chamar o metodo.
  checkRoqueAfterMove(jogadorAtual: number) {

    const [linhaRei, colunaRei] =
      jogadorAtual === Jogador["w"] ? Positions["e1"] : Positions["e8"];

    if (this.casas[linhaRei][colunaRei] === Pieces["--"]) {
      if (jogadorAtual === Jogador["w"]) {
        this.moveWR = true;
      }

      this.moveBR = true;
    }

    const [linhaTorreDireita, colunaTorreDireita] =
      jogadorAtual === Jogador["w"] ? Positions["h1"] : Positions["h8"];

    const [linhaTorreEsquerda, colunaTorreEsquerda] =
      jogadorAtual === Jogador["w"] ? Positions["a1"] : Positions["a8"];

      if (this.casas[linhaTorreDireita][colunaTorreDireita] === Pieces["--"]) {
        if (jogadorAtual === Jogador["w"]) {
          this.moveWTD = true;
        }
  
        this.moveBTD = true;
      }

      if (this.casas[linhaTorreEsquerda][colunaTorreEsquerda] === Pieces["--"]) {
        if (jogadorAtual === Jogador["w"]) {
          this.moveWTE = true;
        }
  
        this.moveBTE = true;
      }
  }

  //! Sempre chamar função apos movimentar
  checkUnPassant() {
    if(this.unPassantW) {
        this.unPassantW = undefined;
    }

    if(this.unPassantB) {
        this.unPassantB = undefined;
    }
  }
}

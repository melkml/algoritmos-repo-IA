import {Jogador, Pieces, Positions, Roque} from '../libs'
import {clone, checkXeque} from './chess.fun'

const promp = require("prompt-sync")();

export function humano(board: number[][], jogador: number): any {
    let jogada: string = "";
  
    while (!jogada) {
      console.log("Digite a sua jogada ou 's' para desistir e sair: ");
      jogada = promp();
  
      if (jogada === "s") {
        console.log("Saindo...");
        process.exit();
      }
    }
  
    if (jogada === "rD") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["D"]];
    }
  
    if (jogada === "rE") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["E"]];
    }
  
    const [posicaoOrigem, posicaoDestino] = jogada.split("-");
  
    const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];
    const [linhaDestino, colunaDestino] = Positions[posicaoDestino];
  
    let boardCopy = clone(board);
    boardCopy[linhaDestino][colunaDestino] = boardCopy[linhaOrigem][colunaOrigem];
    boardCopy[linhaOrigem][colunaOrigem] = Pieces["--"];
  
    const jogadorOposto = jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"];
    const isCheck = checkXeque(boardCopy, jogadorOposto);
  
    if (isCheck) {
      return [-2, [-1, -1], [-1, -1], true];
    }
  
    return [
      board[linhaOrigem][colunaOrigem],
      Positions[posicaoOrigem],
      Positions[posicaoDestino],
      true,
    ];
  }

  export function escolherPromocao() {
    let escolha;

    while(!escolha) {
      console.log("Peão promovido! Para qual peça você deseja promover o peão?");
      escolha = promp();

      if(Pieces[escolha] < 1 || Pieces[escolha] > 12) {
        escolha = undefined;
        console.log("Isso não é uma peça.");
      }
    }
    
    return Pieces[escolha];
  }
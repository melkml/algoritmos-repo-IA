import {Jogador, Pieces, Positions, Roque} from '../libs'
import { Board } from '../types';
import {clone, checkXeque} from './chess.fun'

const promp = require("prompt-sync")();

export function humano(board: Board, jogador: number): any {
    let jogada: string = "";
  
    while (true) {
      console.log("Digite a sua jogada ou 's' para desistir e sair (digite 'help' se precisar de ajuda com os movimentos): ");
      jogada = promp();
  
      if(!jogada) {
        continue;
      }
      
      if (jogada === "s") {
        console.log("Saindo...");
        process.exit();
      }

     if(jogada === "help") {
      console.log("Sintaxe das movimentações: <posição-origem>-<posição-destino>");
      console.log("Exemplo: e2-e4");
      console.log("Movimento especial Roque: 'rE' para Roque à esquerda e 'rD' para Roque à direita.");
      continue;
     }

      if (jogada === "rD") {
        return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["D"]];
      }
    
      if (jogada === "rE") {
        return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["E"]];
      }
      
      if(!jogada.includes("-")) {
        console.log("Movimento precisa do hífen");
        continue;
      }

      let [posicaoOrigem, posicaoDestino] = jogada.split("-");

      if(!Object.keys(Positions).includes(posicaoOrigem) || !Object.keys(Positions).includes(posicaoDestino)) {
        console.log("Posição não existe.");
        continue
      }

      break; 
    }
  
   
    const [posicaoOrigem, posicaoDestino] = jogada.split("-");
  
    const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];
    const [linhaDestino, colunaDestino] = Positions[posicaoDestino];
  
    let boardCopy = clone(board);
    boardCopy.casas[linhaDestino][colunaDestino] = boardCopy.casas[linhaOrigem][colunaOrigem];
    boardCopy.casas[linhaOrigem][colunaOrigem] = Pieces["--"];
  
    const jogadorOposto = jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"];

    const isCheck = checkXeque(boardCopy, jogadorOposto);

    if (isCheck) {
      return [-2, [-1, -1], [-1, -1], true];
    }
  
    return [
      board.casas[linhaOrigem][colunaOrigem],
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
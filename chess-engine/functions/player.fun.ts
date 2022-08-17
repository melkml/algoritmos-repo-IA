import { checkXeque, clone, printBoard } from ".";
import { Jogador, Pieces, Positions, Roque } from "../libs";
import { Board } from "../types";

const promp = require("prompt-sync")();

export function humano(board: Board, jogador: number): any {
  let jogada: string = "";

  while (true) {
    console.log(
      "Digite a sua jogada ou 's' para desistir e sair (digite 'help' se precisar de ajuda com os movimentos): "
    );
    jogada = promp();

    if (!jogada) {
      continue;
    }

    if (jogada === "s") {
      console.log("Oponente venceu. Saindo...");
      process.exit();
    }

    if (jogada === "help") {
      console.log(
        "Sintaxe das movimentações: <posição-origem>-<posição-destino>"
      );
      console.log("Exemplo: e2-e4");
      console.log(
        "Movimento especial Roque: 'rE' para Roque à esquerda e 'rD' para Roque à direita."
      );
      continue;
    }

    if (jogada === "rD") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["D"]];
    }

    if (jogada === "rE") {
      return [NaN, [NaN, NaN], [NaN, NaN], true, Roque["E"]];
    }

    if (!jogada.includes("-")) {
      console.log("Movimento precisa do hífen");
      printBoard(board.casas, jogador, true);
      continue;
    }

    let [posicaoOrigem, posicaoDestino] = jogada.split("-");

    if (
      !Object.keys(Positions).includes(posicaoOrigem) ||
      !Object.keys(Positions).includes(posicaoDestino)
    ) {
      console.log("Posição não existe.");
      printBoard(board.casas, jogador, true);
      continue;
    }

    const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];
    const [linhaDestino, colunaDestino] = Positions[posicaoDestino];

    let boardCopy = clone(board);

    boardCopy.casas[linhaDestino][colunaDestino] =
      boardCopy.casas[linhaOrigem][colunaOrigem];
    boardCopy.casas[linhaOrigem][colunaOrigem] = Pieces["--"];

    const isCheck = checkXeque(
      boardCopy,
      jogador === Jogador["w"] ? Jogador["b"] : Jogador["w"]
    );

    if (isCheck) {
      console.log("Peça está cravada.");
      printBoard(board.casas, jogador, true);
      continue;
    }


    if(board.casas[linhaOrigem][colunaOrigem] === Pieces["--"]) {
      console.log("Casa está vazia.");
      printBoard(board.casas, jogador, true);
      continue
    }

    break;
  }

  const [posicaoOrigem, posicaoDestino] = jogada.split("-");

  const [linhaOrigem, colunaOrigem] = Positions[posicaoOrigem];

  return [
    board.casas[linhaOrigem][colunaOrigem],
    Positions[posicaoOrigem],
    Positions[posicaoDestino],
    true,
  ];
}

export function escolherPromocao() {
  let escolha;

  while (!escolha) {
    console.log("Peão promovido! Para qual peça você deseja promover o peão?");
    escolha = promp();

    if (Pieces[escolha] < 1 || Pieces[escolha] > 12) {
      escolha = undefined;
      console.log("Isso não é uma peça.");
    }
  }

  return Pieces[escolha];
}

export function IA(board: Board, jogadorAtual: number) {
  return [0, 0];
}

export function checkJogadorHumano(
  jogadorHumano: number,
  jogadorAtual: number,
  board: Board
) {

 if(jogadorHumano === Jogador["w"] && jogadorAtual === Jogador["w"]) {
  return humano(board, jogadorAtual)
 }

 if(jogadorHumano === Jogador["b"] && jogadorAtual === Jogador["b"]) {
  return humano(board, jogadorAtual)
 }

return humano(board, jogadorAtual); //TODO: mudar pra IA() quando for implementada.
}

export function escolherModoDeJogo() {
  let escolha;

  while(!escolha) {
    console.log("Escolha o modo de jogo:\n1 - HUMANO vs HUMANO\n2 - HUMANO vs MAQUINA");
    escolha = promp()

    if(escolha != "1" || escolha != "2") {
      continue;
    }

    return escolha;
  }
}

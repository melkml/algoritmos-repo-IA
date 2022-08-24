import {mapPositions, material, printPieces, prtsMapPosition} from "../libs";
import {checkHeuristicaByPiecePosition} from "./check-heurist-by-piece";
import {Board} from "../types";

export function calcularUtilidade(board: Board) {
   let vantagemMaterial = calcularVantagemMaterial(board);
   let valorHeuristicoByPiecePositionW: number = 0;
   let valorHeuristicoByPiecePositionB: number = 0;

    for (let linha = 2; linha < 10; linha++)
        for (let coluna = 2; coluna < 10; coluna++) {

            if(board.casas[linha][coluna] < 1) {
                continue;
            }

            let value;

            if(board.casas[linha][coluna] > 6) {
                valorHeuristicoByPiecePositionB += getValueHeuristicPiecePosition(board.casas[linha][coluna], [linha, coluna]) as number;
            }

            if(board.casas[linha][coluna] < 7) {
                valorHeuristicoByPiecePositionW -= getValueHeuristicPiecePosition(board.casas[linha][coluna], [linha, coluna]) as number;
            }
        }

    return vantagemMaterial + valorHeuristicoByPiecePositionB + valorHeuristicoByPiecePositionW;
}

function calcularVantagemMaterial(board: Board) {
    let materialW = 0;
    let materialB = 0;

    for (let linha = 2; linha < 10; linha++) {
        for (let coluna = 2; coluna < 10; coluna++) {
            if (board.casas[linha][coluna] > 6) {
                materialB += material[board.casas[linha][coluna]];
            }

            if (board.casas[linha][coluna] < 7 && board.casas[linha][coluna] > 0) {
                materialW += material[board.casas[linha][coluna]];
            }
        }
    }

    return materialW - materialB;
}

 export function getValueHeuristicPiecePosition(piece: number, position: [number, number]): number | undefined {
    const [linhaDesejada, colunaDesejada] = position;

    for (let key = 0; key < prtsMapPosition.length; key++) {
        const [linha, coluna] = prtsMapPosition[key];

        if(linhaDesejada === linha && colunaDesejada === coluna) {

            const codedPosition = mapPositions.get(prtsMapPosition[key as number]) as string;

            return checkHeuristicaByPiecePosition[piece](codedPosition) as number;;
        }
    }

}
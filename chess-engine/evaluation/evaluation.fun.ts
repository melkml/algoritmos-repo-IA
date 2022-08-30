import { mapPositions, material, prtsMapPosition} from "../libs";
import {checkHeuristicaByPiecePosition} from "./check-heurist-by-piece";
import {Board} from "../types";

export function calcularUtilidade(board: Board) {
   let materialW = 0;
   let materialB = 0;
   let valorHeuristicoByPiecePositionW: number = 0;
   let valorHeuristicoByPiecePositionB: number = 0;

    for (let linha = 2; linha < 10; linha++)
        for (let coluna = 2; coluna < 10; coluna++) {

            if(board.casas[linha][coluna] < 1) {
                continue;
            }

            if(board.casas[linha][coluna] > 6) {
                valorHeuristicoByPiecePositionB += getValueHeuristicPiecePosition(board.casas[linha][coluna], [linha, coluna]) as number;
                materialB += material[board.casas[linha][coluna]];
            }

            if(board.casas[linha][coluna] < 7) {
                valorHeuristicoByPiecePositionW -= getValueHeuristicPiecePosition(board.casas[linha][coluna], [linha, coluna]) as number;
                materialW += material[board.casas[linha][coluna]];
            }
        }

    const valorPiecePosition = valorHeuristicoByPiecePositionW - valorHeuristicoByPiecePositionB;

    const vantagemMaterial = materialW - materialB;


    return vantagemMaterial + valorPiecePosition;
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

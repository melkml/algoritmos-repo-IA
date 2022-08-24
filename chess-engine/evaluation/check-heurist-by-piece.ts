import {
    heuristicaBB,
    heuristicaBC,
    heuristicaBP, heuristicaBQ, heuristicaBT, heuristicaMBR, heuristicaMWR,
    heuristicaWB,
    heuristicaWC,
    heuristicaWP, heuristicaWQ,
    heuristicaWT,
    Pieces
} from "../libs";

export let checkHeuristicaByPiecePosition: ((position: string) => {})[] = [];

checkHeuristicaByPiecePosition[Pieces["wP"]] = (position: string) => heuristicaWP[position];
checkHeuristicaByPiecePosition[Pieces["bP"]] = (position: string) => heuristicaBP[position];
checkHeuristicaByPiecePosition[Pieces["wC"]] = (position: string) => heuristicaWC[position];
checkHeuristicaByPiecePosition[Pieces["bC"]] = (position: string) => heuristicaBC[position];
checkHeuristicaByPiecePosition[Pieces["wB"]] = (position: string) => heuristicaWB[position];
checkHeuristicaByPiecePosition[Pieces["bB"]] = (position: string) => heuristicaBB[position];
checkHeuristicaByPiecePosition[Pieces["wT"]] = (position: string) => heuristicaWT[position];
checkHeuristicaByPiecePosition[Pieces["bT"]] = (position: string) => heuristicaBT[position];
checkHeuristicaByPiecePosition[Pieces["wQ"]] = (position: string) => heuristicaWQ[position];
checkHeuristicaByPiecePosition[Pieces["bQ"]] = (position: string) => heuristicaBQ[position];
checkHeuristicaByPiecePosition[Pieces["wR"]] = (position: string) => heuristicaMWR[position];
checkHeuristicaByPiecePosition[Pieces["bR"]] = (position: string) => heuristicaMBR[position];

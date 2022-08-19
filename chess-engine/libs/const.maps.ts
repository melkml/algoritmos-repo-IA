export const Jogador: Record<string, number> = {
  w: 0,
  b: 1,
};

export const Pieces: Record<string, number> = {
  "--": 0,
  wP: 1,
  wC: 2,
  wB: 3,
  wT: 4,
  wQ: 5,
  wR: 6,
  bP: 7,
  bC: 8,
  bB: 9,
  bT: 10,
  bQ: 11,
  bR: 12,
};

export const printPieces: Record<number, string> = {
  0: "-",
  1: "♟",
  2: "♞",
  3: "♝",
  4: "♜",
  5: "♛",
  6: "♚",
  7: "♙",
  8: "♘",
  9: "♗",
  10: "♖",
  11: "♕",
  12: "♔",
};

export const Positions: Record<string, [number, number]> = {
  a1: [2, 2],
  a2: [3, 2],
  a3: [4, 2],
  a4: [5, 2],
  a5: [6, 2],
  a6: [7, 2],
  a7: [8, 2],
  a8: [9, 2],

  b1: [2, 3],
  b2: [3, 3],
  b3: [4, 3],
  b4: [5, 3],
  b5: [6, 3],
  b6: [7, 3],
  b7: [8, 3],
  b8: [9, 3],

  c1: [2, 4],
  c2: [3, 4],
  c3: [4, 4],
  c4: [5, 4],
  c5: [6, 4],
  c6: [7, 4],
  c7: [8, 4],
  c8: [9, 4],

  d1: [2, 5],
  d2: [3, 5],
  d3: [4, 5],
  d4: [5, 5],
  d5: [6, 5],
  d6: [7, 5],
  d7: [8, 5],
  d8: [9, 5],

  e1: [2, 6],
  e2: [3, 6],
  e3: [4, 6],
  e4: [5, 6],
  e5: [6, 6],
  e6: [7, 6],
  e7: [8, 6],
  e8: [9, 6],

  f1: [2, 7],
  f2: [3, 7],
  f3: [4, 7],
  f4: [5, 7],
  f5: [6, 7],
  f6: [7, 7],
  f7: [8, 7],
  f8: [9, 7],

  g1: [2, 8],
  g2: [3, 8],
  g3: [4, 8],
  g4: [5, 8],
  g5: [6, 8],
  g6: [7, 8],
  g7: [8, 8],
  g8: [9, 8],

  h1: [2, 9],
  h2: [3, 9],
  h3: [4, 9],
  h4: [5, 9],
  h5: [6, 9],
  h6: [7, 9],
  h7: [8, 9],
  h8: [9, 9],
};

export const Roque: Record<string, number> = {
  D: 1,
  E: 2,
};

export const material: Record<number, number> = {
  0: 0,
  1: 1,
  2: 3,
  3: 3,
  4: 5,
  5: 9,
  6: 1000,
  7: 1,
  8: 3,
  9: 3,
  10: 5,
  11: 9,
  12: 1000,
};

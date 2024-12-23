import { getSudoku } from 'sudoku-gen';

export const generateSudoku = (difficulty: 'easy' | 'medium' | 'hard' | 'expert' = 'easy') => {
  const { puzzle, solution } = getSudoku(difficulty);

  // Convert the puzzle string into a 2D array for easier rendering
  const grid = [];
  for (let i = 0; i < 81; i += 9) {
    grid.push(puzzle.slice(i, i + 9).split('').map((v) => (v === '-' ? 0 : Number(v))));
  }

  return { grid, solution };
};

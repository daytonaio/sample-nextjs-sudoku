import React, { useState, useEffect } from 'react';
import { generateSudoku } from '../utils/sudokuGenerator';
import type { SudokuData, CellPosition } from '../types/sudoku';
import SudokuCell from './SudokuCell';
import { NumberButton, ControlButton } from './SudokuControls';

const SudokuGame = () => {
  const [sudoku, setSudoku] = useState<SudokuData | null>(null);
  const [userGrid, setUserGrid] = useState<number[][] | null>(null);
  const [initialGrid, setInitialGrid] = useState<number[][] | null>(null);
  const [selectedCell, setSelectedCell] = useState<CellPosition | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isOriginalCell, setIsOriginalCell] = useState<boolean[][]>([]);
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(null);

  useEffect(() => {
    startNewGame('easy');
  }, []);

  const startNewGame = (difficulty: 'easy' | 'medium' | 'hard' | 'expert') => {
    const { grid, solution } = generateSudoku(difficulty);
    setSudoku({ grid, solution });
    setInitialGrid(grid.map((row) => [...row]));
    setUserGrid(grid.map((row) => [...row]));
    setIsOriginalCell(grid.map(row => row.map(cell => cell !== 0)));
    setMessage('');
    setSelectedCell(null);
    setHighlightedNumber(null);
  };

  const resetGame = () => {
    if (!initialGrid) return;
    setUserGrid(initialGrid.map((row) => [...row]));
    setMessage('');
    setSelectedCell(null);
    setHighlightedNumber(null);
  };

  const handleCellClick = (row: number, col: number) => {
    if (!userGrid) return;
    
    setSelectedCell({ row, col });
    setMessage('');
    
    const clickedNumber = userGrid[row][col];
    setHighlightedNumber(clickedNumber !== 0 ? clickedNumber : null);
  };

  const handleInputChange = (value: number) => {
    if (!selectedCell || !userGrid || !isOriginalCell) return;

    const { row, col } = selectedCell;

    if (!isOriginalCell[row][col]) {
      const updatedGrid = userGrid.map(row => [...row]);
      updatedGrid[row][col] = value;
      setUserGrid(updatedGrid);
      setHighlightedNumber(value);
    }
  };

  const validateSudoku = () => {
    if (!userGrid || !sudoku) return;

    const isComplete = userGrid.every(row => row.every(cell => cell !== 0));
    if (!isComplete) {
      setMessage('Please fill in all cells before validating.');
      return;
    }

    const userSolution = userGrid.flat().join('');
    if (userSolution === sudoku.solution) {
      setMessage('Congratulations! You solved the puzzle correctly! 🎉');
    } else {
      setMessage('That\'s not quite right. Keep trying!');
    }
  };

  if (!sudoku || !userGrid || !isOriginalCell) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Sudoku Game</h1>

      <div className="grid grid-cols-9 gap-0.5 bg-gray-800 p-0.5 rounded shadow-lg mb-6">
        {userGrid.map((row, i) =>
          row.map((cell, j) => (
            <div key={`${i}-${j}`} className={`
              ${(i + 1) % 3 === 0 && i < 8 ? 'border-b-2 border-gray-800' : ''}
              ${(j + 1) % 3 === 0 && j < 8 ? 'border-r-2 border-gray-800' : ''}
            `}>
              <SudokuCell
                value={cell}
                isOriginal={isOriginalCell[i][j]}
                isSelected={selectedCell?.row === i && selectedCell?.col === j}
                isHighlighted={cell !== 0 && cell === highlightedNumber && !(selectedCell?.row === i && selectedCell?.col === j)}
                onClick={() => handleCellClick(i, j)}
              />
            </div>
          ))
        )}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <NumberButton
            key={number}
            number={number}
            isSelected={number === highlightedNumber}
            onClick={handleInputChange}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {['easy', 'medium', 'hard', 'expert'].map((level) => (
          <ControlButton
            key={level}
            label={level}
            onClick={() => startNewGame(level as 'easy' | 'medium' | 'hard' | 'expert')}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <ControlButton
          label="Check Solution"
          onClick={validateSudoku}
          variant="primary"
        />
        <ControlButton
          label="Reset Game"
          onClick={resetGame}
          variant="secondary"
        />
      </div>

      {message && (
        <p className={`mt-4 text-lg font-medium ${
          message.includes('Congratulations') ? 'text-green-600' : 'text-gray-600'
        }`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SudokuGame;
// components/SudokuCell.tsx
import React from 'react';
import type { CellProps } from '../types/sudoku';

const SudokuCell: React.FC<CellProps> = ({
  value,
  isOriginal,
  isSelected,
  isHighlighted,
  onClick
}) => {
  const getCellStyles = () => {
    const baseStyles = `
      w-10 h-10 flex items-center justify-center
      font-semibold text-lg cursor-pointer
      transition-colors duration-200
    `;

    if (isSelected) {
      return `${baseStyles} bg-blue-600 text-white hover:bg-blue-600`;
    }

    if (isHighlighted) {
      return `${baseStyles} ${isOriginal 
        ? 'bg-blue-200 text-gray-900 hover:bg-blue-300' 
        : 'bg-blue-200 text-blue-800 hover:bg-blue-300'}`;
    }

    return `${baseStyles} ${isOriginal 
      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
      : 'bg-white text-blue-700 hover:bg-gray-50'}`;
  };

  return (
    <div onClick={onClick} className={getCellStyles()}>
      {value !== 0 && (
        <span className={isOriginal ? 'font-bold' : 'font-semibold'}>
          {value}
        </span>
      )}
    </div>
  );
};

export default SudokuCell;
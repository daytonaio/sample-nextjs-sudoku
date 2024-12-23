// components/SudokuControls.tsx
import React from 'react';
import type { NumberButtonProps, ControlButtonProps } from '../types/sudoku';

export const NumberButton: React.FC<NumberButtonProps> = ({ number, isSelected, onClick }) => (
  <button
    onClick={() => onClick(number)}
    className={`
      w-12 h-12 rounded-lg shadow font-bold text-xl
      transition-colors duration-200
      ${isSelected 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-white text-gray-800 hover:bg-gray-50'}
    `}
  >
    {number}
  </button>
);

export const ControlButton: React.FC<ControlButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'secondary' 
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg transition-colors duration-200 capitalize
      ${variant === 'primary'
        ? 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'
        : 'bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900'}
    `}
  >
    {label}
  </button>
);
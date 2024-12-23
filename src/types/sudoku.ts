export interface SudokuData {
    grid: number[][];
    solution: string;
  }
  
  export interface CellPosition {
    row: number;
    col: number;
  }
  
  export interface CellProps {
    value: number;
    isOriginal: boolean;
    isSelected: boolean;
    isHighlighted: boolean;
    onClick: () => void;
  }
  
  export interface NumberButtonProps {
    number: number;
    isSelected: boolean;
    onClick: (number: number) => void;
  }
  
  export interface ControlButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }
// src/pages/index.tsx
import dynamic from 'next/dynamic';

// Dynamically load SudokuGame without SSR
const SudokuGame = dynamic(() => import('../components/SudokuGame'), { ssr: false });

const Home = () => {
  return <SudokuGame />;
};

export default Home;

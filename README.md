# Sudoku Game

## Description
A Sudoku game built with Next.js and TailwindCSS. The game generates Sudoku puzzles of varying difficulties (easy, medium, hard, expert) and allows users to interactively fill in the grid. The game validates the user’s solution and provides feedback on correctness. This project uses TailwindCSS for styling and is built to be simple and user-friendly.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [License](#license)

## Features

- **Responsive Design:** Fully responsive layout that works seamlessly across all devices.
- **Interactive Grid:** Clickable Sudoku cells to input numbers (1-9).
- **Puzzle Generation:** Random Sudoku puzzles generated for different difficulty levels (easy, medium, hard, expert).
- **Validation:** Validate the Sudoku grid to check if the user has solved it correctly.
- **Dynamic Difficulty:** Option to start a new game with different difficulty levels.
- **User-Friendly Interface:** Simple UI with buttons for selecting numbers and easy-to-use grid interface.

## Getting Started

### Open Using Daytona

1. **Install Daytona:** Follow the 

2. **Create the Workspace:**

   ```bash
   daytona create https://github.com/daytonaio/sample-nextjs-sudoku
   ```

3. **Start the application:**

   ```bash
   npm run dev
   ```

### Game Features
- **Start a new game** with your desired difficulty.
- **Select a cell** and input a number between 1 and 9 using the number buttons.
- **Validate your solution** to see if you solved the puzzle correctly.
- **Responsive Design**: The game layout adapts to different screen sizes for a seamless experience across devices.

## Technologies

This project is built using the following technologies:

- **Next.js:** A React framework for building server-rendered and statically generated web applications.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.
- **TypeScript:** TypeScript is used for type safety and better development experience.
- **Sudoku-gen:** A utility to generate Sudoku puzzles of varying difficulty.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
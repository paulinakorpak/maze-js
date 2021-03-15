import { boards } from './boards';
import { path } from './fields';

export const Board = (element, fieldSize) => {
  let board = null;

  const getRandomBoard = () => boards[Math.floor(Math.random() * boards.length)];

  const init = () => {
    board = getRandomBoard();

    let html = '';
    for (let row = 0; row < board.grid.length; row++) {
      for (let col = 0; col < board.grid[row].length; col++) {
        const fieldType = board.grid[row][col].description;
        html = `${html} <div class="${fieldType}" style="width: ${fieldSize}px; height: ${fieldSize}px"></div>`;
      }
    }

    const boardSize = board.grid.length * fieldSize;
    element.style.width = `${boardSize}px`;
    element.style.height = `${boardSize}px`;

    element.innerHTML = html;
  };

  const canMove = (row, col) => {
    const { grid } = board;
    return grid[row] && grid[row][col] && grid[row][col].toString() === path.toString();
  };

  return { init, canMove };
};

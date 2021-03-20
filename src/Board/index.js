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
        const fieldType = board.grid[row][col];
        html = `${html} <div class="${fieldType}" style="width: ${fieldSize}px; height: ${fieldSize}px"></div>`;
      }
    }

    const boardSize = board.grid.length * fieldSize;
    element.style.width = `${boardSize}px`;
    element.style.height = `${boardSize}px`;

    element.innerHTML = html;
  };

  const getEnterPosition = () => board.enter;
  const getExitPosition = () => board.exit;

  const canMove = (row, col) => board.grid[row] && board.grid[row][col] && board.grid[row][col] === path;

  return {
    init, canMove, getEnterPosition, getExitPosition,
  };
};

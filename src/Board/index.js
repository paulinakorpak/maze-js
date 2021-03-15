import { boards } from './boards';

export const Board = (element, fieldSize) => {
  const getRandomBoard = () => boards[Math.floor(Math.random() * boards.length)];

  const init = () => {
    const board = getRandomBoard();

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

  return { init };
};

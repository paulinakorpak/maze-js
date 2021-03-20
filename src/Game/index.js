import { Board } from '../Board';
import { Hero } from '../Hero';

export const Game = (element, fieldSize) => {
  const state = {
    position: null,
  };

  let board = null;
  let hero = null;

  const calculateNewPosition = (e) => {
    const newPosition = { ...state.position };

    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (arrows.includes(e.key)) {
      e.key === 'ArrowUp' && newPosition.row--;
      e.key === 'ArrowDown' && newPosition.row++;
      e.key === 'ArrowLeft' && newPosition.col--;
      e.key === 'ArrowRight' && newPosition.col++;
      e.preventDefault();
    }

    return newPosition;
  };

  const showResultScreen = () => {
    const result = element.querySelector('.result');
    const wrapper = element.querySelector('.wrapper');
    wrapper.style.display = 'none';
    result.style.display = 'flex';
  };

  const move = (row, col) => {
    if (board.canMove(row, col)) {
      hero.move(row, col);
      state.position = { row, col };
    }

    const exitPosition = board.getExitPosition();
    if (row === exitPosition.row && col === exitPosition.col) {
      showResultScreen();
    }
  };

  const init = () => {
    const boardElement = element.querySelector('.board');
    board = Board(boardElement, fieldSize);
    board.init();

    const heroElement = element.querySelector('.hero');
    hero = Hero(heroElement, fieldSize);
    hero.init();

    const enterPosition = board.getEnterPosition();
    move(enterPosition.row, enterPosition.col);

    document.addEventListener('keydown', (e) => {
      const newPosition = calculateNewPosition(e);
      move(newPosition.row, newPosition.col);
    });
  };

  return { init };
};

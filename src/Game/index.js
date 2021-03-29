import { Board } from '../Board';
import { Hero } from '../Hero';

export const Game = (element, fieldSize) => {
  const state = {
    position: null,
  };

  let board = null;
  let hero = null;

  const handleMove = (e) => {
    const { row, col } = calculateNewPosition(e);
    move(row, col);
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

  const calculateNewPosition = (e) => {
    let newPosition;

    if (e.type === 'keydown') {
      newPosition = handleKeys(e);
    }
    if (e.type === 'click') {
      newPosition = handleButtons(e);
    }

    return newPosition;
  };

  const handleKeys = (e) => {
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

  const handleButtons = (e) => {
    const newPosition = { ...state.position };
    const { key } = e.target.dataset;

    key === 'up' && newPosition.row--;
    key === 'down' && newPosition.row++;
    key === 'left' && newPosition.col--;
    key === 'right' && newPosition.col++;

    return newPosition;
  };

  const showResultScreen = () => {
    const wrapper = element.querySelector('.wrapper');
    const arrows = element.querySelector('.arrows');
    const result = element.querySelector('.result');

    wrapper.style.display = 'none';
    arrows.style.display = 'none';
    result.style.display = 'flex';
  };

  const restart = () => {
    window.location.reload(true);
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

    document.addEventListener('keydown', handleMove);

    const arrowButtons = element.querySelectorAll('.arrows i');
    Array.from(arrowButtons).map((arrow) => arrow.addEventListener('click', handleMove));

    const restartButton = element.querySelector('.result button');
    restartButton.addEventListener('click', restart);
  };

  return { init };
};

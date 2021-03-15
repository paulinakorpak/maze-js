import { Board } from '../Board';

export const Game = (element, fieldSize) => {
  const init = () => {
    const boardElement = element.querySelector('.board');
    const board = Board(boardElement, fieldSize).init();

    const heroElement = element.querySelector('.hero');
  };

  return { init };
};

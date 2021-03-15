import { Board } from '../Board';
import { Hero } from '../Hero';

export const Game = (element, fieldSize) => {
  const init = () => {
    const boardElement = element.querySelector('.board');
    const board = Board(boardElement, fieldSize).init();

    const heroElement = element.querySelector('.hero');
    const hero = Hero(heroElement, fieldSize).init();
  };

  return { init };
};

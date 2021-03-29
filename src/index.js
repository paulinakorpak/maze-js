import { Game } from './Game';

const appElement = document.querySelector('.app');

let fieldSize;

if (globalThis.innerWidth > 768) {
  fieldSize = 20;
} else {
  fieldSize = 10;
  document.querySelector('.arrows').style.display = 'grid';
}

setTimeout(() => Game(appElement, fieldSize).init(), 2000);

import { Game } from './Game';

const appElement = document.querySelector('.app');
const fieldSize = 20;

setTimeout(() => Game(appElement, fieldSize).init(), 2000);

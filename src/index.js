import { Game } from './Game';

const appElement = document.querySelector('.app');
const fieldSize = 20;

Game(appElement, fieldSize).init();

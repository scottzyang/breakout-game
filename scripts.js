/* eslint-disable import/extensions */
// imports
import Game from './classes/game.js';

// // gameboard
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const game = new Game(canvas, ctx);

game.initializeGameObjects();
game.run();

// keyboard event listeners
document.addEventListener('keydown', (e) => {
  game.paddle.keyDownHandler(e);
}, false);
document.addEventListener('keyup', (e) => {
  game.paddle.keyUpHandler(e);
}, false);
document.addEventListener('mousemove', (e) => {
  game.paddle.mouseMoveHandler(e);
}, false);

/* eslint-disable import/extensions */
// imports
import Game from './game';

// gameboard
const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// instantiate game class
const game = new Game(canvas, ctx);

// run game
game.run();

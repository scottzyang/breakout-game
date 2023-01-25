/* eslint-disable import/extensions */
// imports
import Game from './classes/game.js';

// gameboard
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// instantiate game class
const game = new Game(canvas, ctx);

// run game
game.run();

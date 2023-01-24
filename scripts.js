/* eslint-disable import/extensions */
// imports
// import Brick from './classes/brick.js';
import Bricks from './classes/bricks.js';
import Ball from './classes/ball.js';
import Paddle from './classes/paddle.js';
import Score from './classes/score.js';
import Lives from './classes/lives.js';

// gameboard
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ball information
const x = canvas.width / 2;
const y = canvas.height - 30;

// paddle information
const paddleHeight = 10;
const paddleWidth = 75;
const paddleX = (canvas.width - paddleWidth) / 2;
const paddleY = canvas.height - paddleHeight;

// brick information
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffset = 30;
const bricks = [];

// create lives
const livesX = canvas.width - 65;
const lives = new Lives(livesX);

// create score
const score = new Score();

// create paddle
const paddle = new Paddle(canvas, paddleX, paddleY);

// create ball
const ball = new Ball(x, y);

// eslint-disable-next-line max-len
const brickGroup = new Bricks(ctx, bricks, brickColumnCount, brickRowCount, brickWidth, brickHeight, brickPadding, brickOffset);
brickGroup.initializeBricks();

// -------------------------------------------------------------------
function collisionDetection() {
  for (let c = 0; c < brickGroup.column; c += 1) {
    for (let r = 0; r < brickGroup.row; r += 1) {
      const b = brickGroup.bricks[c][r];
      if (b.status === 1) {
        if (
          ball.x > b.x
          && ball.x < b.x + brickGroup.width
          && ball.y > b.y
          && ball.y < b.y + brickGroup.height
        ) {
          ball.dy = -ball.dy;
          b.status = 0;
          score.update(1);
          if (score.score === brickGroup.row * brickGroup.column) {
            // eslint-disable-next-line no-alert
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

// -------------------------------------------------------------------
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw bricks
  brickGroup.drawBricks();

  // draw ball
  ball.render(ctx);

  // draw paddle
  // drawPaddle();
  paddle.render(ctx);
  collisionDetection();
  score.render(ctx);
  lives.render(ctx);

  // reverse direction if left or right are hit
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  // reverse direction if top is hit, or game over if bottom is hit
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      lives.update(1);
      if (!lives.lives) {
        // eslint-disable-next-line no-alert
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }
  // paddle movement
  if (paddle.rightPressed) {
    paddle.x = Math.min(paddle.x + 7, canvas.width - paddle.width);
  } else if (paddle.leftPressed) {
    paddle.x = Math.max(paddle.x - 7, 0);
  }
  ball.move();
  requestAnimationFrame(draw);
}
// -------------------------------------------------------------------
// keyboard event listeners
document.addEventListener('keydown', (e) => {
  paddle.keyDownHandler(e);
}, false);
document.addEventListener('keyup', (e) => {
  paddle.keyUpHandler(e);
}, false);
document.addEventListener('mousemove', (e) => {
  paddle.mouseMoveHandler(e);
}, false);

// draw function will be executed every 10 ms
draw();

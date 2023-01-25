/* eslint-disable import/extensions */
import Ball from './ball.js';
import Bricks from './bricks.js';
import Paddle from './paddle.js';
import Score from './score.js';
import Lives from './lives.js';

class Game {
  constructor(canvas, ctx) {
    // game board
    this.canvas = canvas;
    this.ctx = ctx;

    // ball information
    this.ballX = this.canvas.width / 2;
    this.ballY = this.canvas.height - 30;
    this.ball = new Ball(this.ballX, this.ballY);

    // brick information
    this.brickGroup = new Bricks(this.ctx);
    this.brickGroup.initializeBricks();

    // paddle information
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = this.canvas.width - this.paddleWidth / 2;
    this.paddleY = this.canvas.height - this.paddleHeight;
    this.paddle = new Paddle(this.canvas, this.paddleX, this.paddleY);

    // score and lives information
    this.livesX = this.canvas.width - 65;
    this.lives = new Lives(this.livesX);
    this.score = new Score();
  }

  collisionDetection() {
    for (let c = 0; c < this.brickGroup.column; c += 1) {
      for (let r = 0; r < this.brickGroup.row; r += 1) {
        const b = this.brickGroup.bricks[c][r];
        if (b.status === 1) {
          if (
            this.ball.x > b.x
            && this.ball.x < b.x + this.brickGroup.width
            && this.ball.y > b.y
            && this.ball.y < b.y + this.brickGroup.height
          ) {
            this.ball.dy = -this.ball.dy;
            b.status = 0;
            this.score.update(1);
            if (this.score.score === this.brickGroup.row * this.brickGroup.column) {
              // eslint-disable-next-line no-alert
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  run() {
    // clearRect
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw game objects
    this.brickGroup.drawBricks();
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.collisionDetection();
    this.score.render(this.ctx);
    this.lives.render(this.ctx);

    // reverse direction if left or right are hit
    // eslint-disable-next-line max-len
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
    }
    // reverse direction if top is hit, or game over if bottom is hit
    if (this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.lives.update(1);
        if (!this.lives.lives) {
          // eslint-disable-next-line no-alert
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.ball.x = this.canvas.width / 2;
          this.ball.y = this.canvas.height - 30;
          this.ball.dx = 2;
          this.ball.dy = -2;
          this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
        }
      }
    }
    // paddle movement
    if (this.paddle.rightPressed) {
      this.paddle.x = Math.min(this.paddle.x + 7, this.canvas.width - this.paddle.width);
    } else if (this.paddle.leftPressed) {
      this.paddle.x = Math.max(this.paddle.x - 7, 0);
    }
    this.ball.move();
    requestAnimationFrame(() => {
      this.run();
    });
  }
}

export default Game;

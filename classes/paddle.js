/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Paddle extends Sprite {
  constructor(canvas, x, y = 0, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color);
    this.canvas = canvas;
    this.rightPressed = false;
    this.leftPressed = false;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.x = relativeX - this.width / 2;
    }
  }
}

export default Paddle;
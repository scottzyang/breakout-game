/* eslint-disable import/extensions */
import Sprite from './sprite.js';

// x, y, and color are passed to the sprite class
class Ball extends Sprite {
  constructor(x = 0, y = 0, radius = 10, color = '#00447c') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;

/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Lives extends Sprite {
  constructor(x, y = 20, color = '#f44336', lives = 3, font = '16px Arial') {
    super(x, y);
    this.color = color;
    this.lives = lives;
    this.font = font;
  }

  update(loss) {
    this.lives -= loss;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }
}

export default Lives;

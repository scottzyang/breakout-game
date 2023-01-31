/* eslint-disable import/extensions */
import Sprite from './sprite';

class Score extends Sprite {
  score: number
  font: string

  constructor(x = 8, y = 20, color = '#f44336', score = 0, font = '16px Arial') {
    super(x, y);
    this.color = color;
    this.score = score;
    this.font = font;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  update(points: number) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;

/* eslint-disable import/extensions */
import Brick from './brick.js';

class Bricks {
  constructor(ctx, bricks, column, row, width, height, padding, offset) {
    this.ctx = ctx;
    this.bricks = bricks;
    this.column = column;
    this.row = row;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offset = offset;
  }

  initializeBricks() {
    for (let c = 0; c < this.column; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.column; r += 1) {
        const brickX = c * (this.width + this.padding) + this.offset;
        const brickY = r * (this.height + this.padding) + this.offset;
        this.bricks[c][r] = new Brick(brickX, brickY);
      }
    }
  }

  drawBricks() {
    for (let c = 0; c < this.column; c += 1) {
      for (let r = 0; r < this.row; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(this.ctx);
        }
      }
    }
  }
}

export default Bricks;

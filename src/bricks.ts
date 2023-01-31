/* eslint-disable import/extensions */
import Brick from './brick';

class Bricks {
  // eslint-disable-next-line max-len
  x: number
  y: number
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  column: number
  row: number
  bricks: Brick[][]
  padding: number
  offset: number
  rowColor: string[]

  constructor(ctx: CanvasRenderingContext2D, bricks: Brick[][] = [], column = 5, row = 3, width = 75, height = 20, padding = 10, offset = 30) {
    this.ctx = ctx;
    this.bricks = bricks;
    this.column = column;
    this.row = row;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offset = offset;
    this.rowColor = ['#f44336', '#ffa500', '#8fce00'];
  }

  initializeBricks() {
    for (let c = 0; c < this.column; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.column; r += 1) {
        const brickX = c * (this.width + this.padding) + this.offset;
        const brickY = r * (this.height + this.padding) + this.offset;
        this.bricks[c][r] = new Brick(brickX, brickY, this.rowColor[r]);
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

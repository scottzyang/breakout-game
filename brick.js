import Sprite from './sprite';

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = true;
    this.column = 5;
    this.row = 3;
    this.padding = 10;
    this.offset = 30;
    this.bricks = [];
  }

  render(ctx) {
    for (let c = 0; c < this.column; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.column; r += 1) {
        this.bricks[c][r] = new Brick(0, 0);
      }
    }
    for (let c = 0; c < this.column; c += 1) {
      for (let r = 0; r < this.row; r += 1) {
        if (this.bricks[c][r].status === true) {
          const brickX = c * (this.width + this.padding) + this.offset;
          const brickY = r * (this.height + this.padding) + this.offset;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          ctx.fillStyle = '#0095DD';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brick;

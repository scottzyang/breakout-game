/* eslint-disable import/extensions */
import Sprite from './sprite';

class Brick extends Sprite {
  status: number
  isBall: boolean

  constructor(x: number, y: number, color = '#0095DD', width = 75, height = 20) {
    super(x, y, width, height, color);
    this.status = 1;
    this.isBall = false;
  }
}

export default Brick;
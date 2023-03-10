/* eslint-disable import/extensions */
import Sprite from './sprite.js';

class Brick extends Sprite {
  constructor(x, y, color = '#0095DD', width = 75, height = 20) {
    super(x, y, width, height, color);
    this.status = 1;
    this.isBall = false;
  }
}

export default Brick;

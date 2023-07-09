import { drawCircle } from '../logic/graphics';
import { Board } from '../logic/board';
import { Point } from '../utils/point';

export class Food extends EventTarget {
  public location!: Point;

  constructor() {
    super();
    this.regeneratePosition();
  }

  draw() {
    const { x, y } = this.location;

    drawCircle(x, y);
  }

  regeneratePosition(): void {
    const { width, height } = Board.getInstance();

    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    this.location = new Point(x, y);
    this.dispatchEvent(new Event('redraw'));
  }
}

import { drawCircle } from '../logic/graphics';
import { Board } from '../logic/board';
import { Point } from '../utils/point';
import { GameObject } from './partials/gameObject.class';
import { randomColor } from '../utils/colors';

export class Food extends EventTarget {
  public _basicData!: GameObject;

  constructor() {
    super();
    this.regeneratePosition();
  }

  private set basicData(value: GameObject) {
    if (value.location.isEqual(this.basicData.location)) {
      return;
    }
    this._basicData = value;
  }

  private get basicData() {
    return this._basicData;
  }

  draw() {
    const { x, y } = this.basicData.location;

    drawCircle(x, y, this.basicData.color);
  }

  regeneratePosition(): void {
    const { width, height } = Board.getInstance();

    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    this.basicData = new GameObject(new Point(x, y), randomColor());
    this.dispatchEvent(new Event('redraw'));
  }
}

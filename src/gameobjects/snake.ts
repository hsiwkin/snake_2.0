import { Board, BoardState } from '../logic/board';
import { Point } from '../utils/point';
import { drawRect } from '../logic/graphics';

export class Snake extends EventTarget {
  body: Point[] = [];

  constructor() {
    super();
    const startingPoint = new Point(0, 0);
    this.body.push(startingPoint);
    this.triggerRedraw();
  }

  get headIndex() {
    return this.body.length - 1;
  }

  draw() {
    for (const { x, y } of this.body) {
      drawRect(x, y);
    }
  }

  move(dirX: number, dirY: number) {
    const head = this.body[this.headIndex];
    const newPoint = new Point(head.x + dirX, head.y + dirY);

    const newPositionInfo = Board.getInstance().positionInfo(newPoint);
    if (newPositionInfo === BoardState.notAvailable) {
      return;
    }

    if (newPositionInfo === BoardState.food) {
      this.body.push(newPoint);
      this.triggerRedraw();
      this.dispatchEvent(new Event('foodEaten'));
      return;
    }

    // empty position
    this.body.shift();
    this.body.push(newPoint);
    this.triggerRedraw();
  }

  moveUp() {
    this.move(0, -1);
  }

  moveDown() {
    this.move(0, 1);
  }

  moveLeft() {
    this.move(-1, 0);
  }

  moveRight() {
    this.move(1, 0);
  }

  triggerRedraw() {
    this.dispatchEvent(new Event('redraw'));
  }
}

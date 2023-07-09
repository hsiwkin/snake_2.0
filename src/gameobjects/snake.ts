import { Board, BoardState } from '../logic/board';
import { Point } from '../utils/point';
import { drawRect } from '../logic/graphics';
import { Direction } from '../types';

export class Snake extends EventTarget {
  private body: Point[] = [];
  private _direction?: Direction;

  constructor() {
    super();
    const startingPoint = new Point(0, 0);
    this.body.push(startingPoint);
    this.triggerRedraw();
  }

  get headIndex() {
    return this.body.length - 1;
  }

  set direction(value: Direction | undefined) {
    if (value === undefined) {
      return;
    }
    this._direction = value;
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

  autoMove() {
    if (this._direction === undefined) {
      return;
    }

    if (this._direction === Direction.Up) {
      this.moveUp();
      return;
    }

    if (this._direction === Direction.Down) {
      this.moveDown();
      return;
    }

    if (this._direction === Direction.Left) {
      this.moveLeft();
      return;
    }

    if (this._direction === Direction.Right) {
      this.moveRight();
      return;
    }
  }

  moveUp() {
    this.move(0, -1);
    this._direction = Direction.Up;
  }

  moveDown() {
    this.move(0, 1);
    this._direction = Direction.Down;
  }

  moveLeft() {
    this.move(-1, 0);
    this._direction = Direction.Left;
  }

  moveRight() {
    this.move(1, 0);
    this._direction = Direction.Right;
  }

  triggerRedraw() {
    this.dispatchEvent(new Event('redraw'));
  }
}

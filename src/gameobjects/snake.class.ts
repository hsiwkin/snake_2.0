import { Board, BoardState } from '../logic/board';
import { Point } from '../utils/point';
import { drawRect } from '../logic/graphics';
import { Direction } from '../types';
import { GameObject } from './partials/gameObject.class';
import { colors as colorPalette } from '../utils/colors';
import { getOppositeDirection } from '../logic/inputProcessing/inputProcessing';

export class Snake extends EventTarget {
  private body: GameObject[] = [];
  private colors: string[] = [];
  private _direction?: Direction;

  constructor() {
    super();
    const startingPoint = new GameObject(new Point(0, 0));
    this.colors.push(colorPalette.black);
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

    if (value === getOppositeDirection(this._direction)) {
      return;
    }
    this._direction = value;
  }

  draw() {
    const n = this.colors.length;
    for (const [index, part] of this.body.entries()) {
      drawRect(part.location.x, part.location.y, this.colors[n - index - 1]);
    }
  }

  move(dirX: number, dirY: number) {
    const head = this.body[this.headIndex].location;
    const newPoint = new Point(head.x + dirX, head.y + dirY);

    const board = Board.getInstance();
    const newPositionInfo = board.positionInfo(newPoint);
    if (newPositionInfo === BoardState.notAvailable) {
      return;
    }

    if (newPositionInfo === BoardState.food) {
      const newColor = board.getFoodColor();
      this.colors.push(newColor);
      this.body.push(new GameObject(newPoint, board.getFoodColor()));
      this.triggerRedraw();
      this.dispatchEvent(new Event('foodEaten'));
      return;
    }

    // empty position on board
    this.body.shift();
    this.body.push(new GameObject(newPoint));
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

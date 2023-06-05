import { canDraw, draw } from './graphics';

export class Snake {
  private _positionX: number;
  private _positionY: number;

  private set positionX(value: number) {
    if (canDraw(this.positionX + value, this.positionY)) {
      this._positionX += value;
    }
  }

  private set positionY(value: number) {
    if (canDraw(this.positionX, this.positionY + value)) {
      this._positionY += value;
    }
  }

  private get positionX() {
    return this._positionX;
  }

  private get positionY() {
    return this._positionY;
  }

  private drawCurrentPosition(): boolean {
    return draw(this.positionX, this.positionY);
  }

  constructor() {
    this._positionX = 0;
    this._positionY = 0;
    this.drawCurrentPosition();
  }

  moveUp() {
    this.positionY = -1;
    this.drawCurrentPosition();
  }

  moveDown() {
    this.positionY = 1;
    this.drawCurrentPosition();
  }

  moveLeft() {
    this.positionX = -1;
    this.drawCurrentPosition();
  }

  moveRight() {
    this.positionX = 1;
    this.drawCurrentPosition();
  }
}

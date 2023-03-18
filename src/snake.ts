import { currentPosition } from './inputProcessing';
import { draw } from './graphics';

export class Snake {
  private readonly currentPosition: [number, number];

  private drawCurrentPosition() {
    draw(currentPosition[0], currentPosition[1]);
  }

  constructor() {
    this.currentPosition = [0, 0];
  }

  moveUp() {
    this.currentPosition[1]--;
    this.drawCurrentPosition();
  }

  moveDown() {
    this.currentPosition[1]++;
    this.drawCurrentPosition();
  }

  moveLeft() {
    this.currentPosition[0]--;
    this.drawCurrentPosition();
  }

  moveRight() {
    this.currentPosition[0]++;
    this.drawCurrentPosition();
  }
}

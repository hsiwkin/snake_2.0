import { canDraw, clear, draw } from './graphics';

export class Snake {
  body: (readonly number[])[] = [];

  constructor() {
    const startingPoint = [0, 0] as const;
    this.body.push(startingPoint);
    draw(...startingPoint);
  }

  get headIndex() {
    return this.body.length - 1;
  }

  move(dirX: number, dirY: number) {
    const head = this.body[this.headIndex];
    const tail = this.body[0];
    const newPoint = [head[0] + dirX, head[1] + dirY] as const;
    if (canDraw(...newPoint)) {
      draw(...newPoint);
      clear(tail[0], tail[1]);
      this.body.shift();
      this.body.push(newPoint);
    }
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
}
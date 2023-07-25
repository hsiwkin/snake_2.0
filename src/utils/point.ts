export class Point {
  constructor(public x: number, public y: number) {}

  isEqual(p: Point) {
    return this.x === p.x && this.y === p.y;
  }
}

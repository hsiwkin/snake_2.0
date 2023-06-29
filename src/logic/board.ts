import { Position } from '../types';
import { Point } from '../utils/point';
import { clearBoard } from './graphics';

export enum BoardState {
  empty,
  notAvailable,
  food,
}

const DEFAULT_SIZE = 15;

export class Board {
  private food?: Position;
  private static instance: Board;
  private constructor(private _width: number, private _height: number) {}

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  static initializeBoard(
    width: number = DEFAULT_SIZE,
    height: number = DEFAULT_SIZE
  ): Board {
    return (Board.instance = new Board(width, height));
  }

  static getInstance(): Board {
    if (!Board.instance) {
      console.warn('Board not initialized, using default size');
      Board.instance = Board.initializeBoard();
    }

    return Board.instance;
  }

  clear() {
    clearBoard();
  }

  private isFoodPosition(x: number, y: number): boolean {
    if (!this.food) {
      return false;
    }

    return this.food[0] === x && this.food[1] === y;
  }

  public setFoodPosition(x: number, y: number) {
    this.food = [x, y];
  }

  positionInfo({ x, y }: Point): BoardState {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return BoardState.notAvailable;
    }

    if (this.isFoodPosition(x, y)) {
      return BoardState.food;
    }

    return BoardState.empty;
  }
}

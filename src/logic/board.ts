import { Point } from '../utils/point';
import { clearBoard } from './graphics';
import { Food } from '../gameobjects/food.class';
import { Snake } from '../gameobjects/snake.class';

export enum BoardState {
  empty,
  notAvailable,
  food,
}

const DEFAULT_SIZE = 15;

export class Board {
  private food?: Food;
  private snake?: Snake;
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
    Board.instance = new Board(width, height);
    Board.instance.food = new Food();
    Board.instance.snake = new Snake();

    return Board.instance;
  }

  static getInstance(): Board {
    if (!Board.instance) {
      console.warn('Board not initialized, using default size');
      Board.instance = Board.initializeBoard();
    }

    return Board.instance;
  }

  getGameObjects() {
    return {
      snake: this.snake as Snake,
      food: this.food as Food,
    };
  }

  clear() {
    clearBoard();
  }

  private isFoodPosition(x: number, y: number): boolean {
    if (!this.food) {
      return false;
    }

    return (
      this.food.basicData.location.x === x &&
      this.food.basicData.location.y === y
    );
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

  getFoodColor(): string {
    if (!this.food) {
      throw new Error('Food object NOT INITIALIZED');
    }

    return this.food?.basicData.color;
  }
}

import { Direction } from './types';
import { isUndefined } from './typeguards';
import { drawCurrentPosition } from './graphics';

export const currentPosition = [0, 0];

const UP_CODES = ['ArrowUp', 'KeyW'];
const DOWN_CODES = ['ArrowDown', 'KeyS'];
const LEFT_CODES = ['ArrowLeft', 'KeyA'];
const RIGHT_CODES = ['ArrowRight', 'KeyD'];

const processUp = () => {
  currentPosition[1]--;
  drawCurrentPosition();
};
const processDown = () => {
  currentPosition[1]++;
  drawCurrentPosition();
};
const processLeft = () => {
  currentPosition[0]--;
  drawCurrentPosition();
};
const processRight = () => {
  currentPosition[0]++;
  drawCurrentPosition();
};

const directionMap = {
  [Direction.Right]: processRight,
  [Direction.Left]: processLeft,
  [Direction.Up]: processUp,
  [Direction.Down]: processDown,
};

const processDirection = (direction: Direction): void => {
  directionMap[direction]();
};

const getDirection = (evt: KeyboardEvent): Direction | undefined => {
  const code = evt.code;

  if (UP_CODES.includes(code)) {
    return Direction.Up;
  }

  if (DOWN_CODES.includes(code)) {
    return Direction.Down;
  }

  if (LEFT_CODES.includes(code)) {
    return Direction.Left;
  }

  if (RIGHT_CODES.includes(code)) {
    return Direction.Right;
  }

  return undefined;
};

export const startInputProcessing = () => {
  document.addEventListener('keydown', (evt) => {
    const direction = getDirection(evt);
    !isUndefined(direction) && processDirection(direction);
  });
};

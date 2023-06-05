import { Direction } from './types';
import { isUndefined } from './typeguards';
import { Snake } from './snake';

const UP_CODES = ['ArrowUp', 'KeyW'];
const DOWN_CODES = ['ArrowDown', 'KeyS'];
const LEFT_CODES = ['ArrowLeft', 'KeyA'];
const RIGHT_CODES = ['ArrowRight', 'KeyD'];

const processDirection = (snake: Snake, direction: Direction): void => {
  switch (direction) {
    case Direction.Left:
      snake.moveLeft();
      break;
    case Direction.Right:
      snake.moveRight();
      break;
    case Direction.Up:
      snake.moveUp();
      break;
    case Direction.Down:
      snake.moveDown();
      break;
    default:
      break;
  }
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

export const startInputProcessing = (snake: Snake) => {
  document.addEventListener('keydown', (evt) => {
    const direction = getDirection(evt);
    !isUndefined(direction) && processDirection(snake, direction);
  });
};

import { Direction } from '../../types';
import { Snake } from '../../gameobjects/snake.class';

const UP_CODES = ['ArrowUp', 'KeyW'];
const DOWN_CODES = ['ArrowDown', 'KeyS'];
const LEFT_CODES = ['ArrowLeft', 'KeyA'];
const RIGHT_CODES = ['ArrowRight', 'KeyD'];

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

export const getOppositeDirection = (direction?: Direction) => {
  switch (direction) {
    case Direction.Down:
      return Direction.Up;
    case Direction.Up:
      return Direction.Down;
    case Direction.Right:
      return Direction.Left;
    case Direction.Left:
      return Direction.Right;
    default:
      return undefined;
  }
};

export const startInputProcessing = (snake: Snake) => {
  document.addEventListener('keydown', (evt) => {
    snake.direction = getDirection(evt);
  });
};

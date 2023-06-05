import { randomColor } from './utils';

let ctx: CanvasRenderingContext2D;
const canvasOptions = {
  width: 300,
  height: 300,
  scale: 20,
};

const initializeContext = () => {
  if (!document) {
    throw new Error('document is NOT defined');
  }

  const canvas = document.getElementById('game') as HTMLCanvasElement;
  canvas.setAttribute('width', String(canvasOptions.width));
  canvas.setAttribute('height', String(canvasOptions.height));
  const ctxCandidate = canvas.getContext('2d');

  if (!ctxCandidate) {
    throw new Error('getContext method returned null');
  }

  ctx = ctxCandidate;
};
export const getContext = (): CanvasRenderingContext2D => {
  if (!ctx) {
    initializeContext();
  }

  return ctx;
};

const withinBoundaries = (
  x: number,
  y: number,
  width: number,
  height: number
): boolean => {
  if (x + width > canvasOptions.width) {
    return false;
  }

  if (y + height > canvasOptions.height) {
    return false;
  }

  return true;
};

const getRectParams = (x: number, y: number) => {
  return [
    x * canvasOptions.scale,
    y * canvasOptions.scale,
    canvasOptions.scale,
    canvasOptions.scale,
  ] as const;
};

export const canDraw = (x: number, y: number): boolean => {
  return withinBoundaries(...getRectParams(x, y));
};

export const draw = (x: number, y: number): boolean => {
  const ctx = getContext();

  const rectParams = getRectParams(x, y);

  if (withinBoundaries(...rectParams)) {
    ctx.fillStyle = randomColor();
    ctx.fillRect(...rectParams);
    return true;
  } else {
    console.error('You have tried to draw an object outside of game board');
    return false;
  }
};

import { randomColor } from './utils';
import { currentPosition } from './inputProcessing';

let ctx: CanvasRenderingContext2D;

const initializeContext = () => {
  if (!document) {
    throw new Error('document is NOT defined');
  }

  const canvas = document.getElementById('game') as HTMLCanvasElement;
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

export const draw = (x: number, y: number) => {
  const ctx = getContext();
  const scale = 20;
  ctx.fillStyle = randomColor();
  ctx.fillRect(x * scale, y * scale, scale, scale);
};
export const drawCurrentPosition = () => {
  draw(currentPosition[0], currentPosition[1]);
};

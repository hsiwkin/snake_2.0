import { randomColor } from './utils';
import { Board } from './board';

let ctx: CanvasRenderingContext2D;
const canvasOptions = {
  scale: 20,
};

const initializeContext = () => {
  if (!document) {
    throw new Error('document is NOT defined');
  }

  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const { width, height } = Board.getInstance();
  canvas.setAttribute('width', String(canvasOptions.scale * width));
  canvas.setAttribute('height', String(canvasOptions.scale * height));
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

const getRectParams = (x: number, y: number) => {
  return [
    x * canvasOptions.scale,
    y * canvasOptions.scale,
    canvasOptions.scale,
    canvasOptions.scale,
  ] as const;
};

export const draw = (x: number, y: number) => {
  const ctx = getContext();
  const rectParams = getRectParams(x, y);

  ctx.fillStyle = randomColor();
  ctx.fillRect(...rectParams);
};

export const clear = (x: number, y: number) => {
  const ctx = getContext();

  const rectParams = getRectParams(x, y);
  ctx.clearRect(...rectParams);
};

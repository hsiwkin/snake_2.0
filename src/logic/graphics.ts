import { randomColor } from '../utils/colors';
import { Board } from './board';

let ctx: CanvasRenderingContext2D;
const canvasOptions = {
  scale: 20,
};

export const initializeContext = () => {
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

const getPixelParams = (x: number, y: number) => {
  return [
    x * canvasOptions.scale,
    y * canvasOptions.scale,
    canvasOptions.scale,
    canvasOptions.scale,
  ] as const;
};

export const drawRect = (x: number, y: number, color?: string) => {
  const ctx = getContext();
  const rectParams = getPixelParams(x, y);

  ctx.fillStyle = color ?? randomColor();
  ctx.fillRect(...rectParams);
};

export const drawCircle = (x: number, y: number) => {
  const ctx = getContext();
  const rectParams = getPixelParams(x, y);

  ctx.fillStyle = randomColor();
  ctx.beginPath();
  ctx.arc(
    rectParams[0] + canvasOptions.scale / 2,
    rectParams[1] + canvasOptions.scale / 2,
    canvasOptions.scale / 2,
    0,
    2 * Math.PI
  );
  ctx.fill();
};

export const clearBoard = () => {
  const ctx = getContext();
  const { width, height } = Board.getInstance();

  ctx.clearRect(
    0,
    0,
    width * canvasOptions.scale,
    height * canvasOptions.scale
  );
};

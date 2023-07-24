import { startInputProcessing } from './inputProcessing';
import { Board } from './board';
import { initializeContext } from './graphics';

const framerate = 30;
let lastRedraw: number;
const second = 1_000;

const startGame = () => {
  initializeContext();
  const board = Board.getInstance();
  const { snake, food } = board.getGameObjects();

  const drawGame = () => {
    Board.getInstance().clear();
    snake.draw();
    food.draw();
  };

  snake.addEventListener('foodEaten', () => food.regeneratePosition());
  snake.addEventListener('redraw', () => drawGame());
  food.addEventListener('redraw', () => drawGame());

  startInputProcessing(snake);
  drawGame();
  lastRedraw = performance.now();
  const move = (timestamp: number) => {
    if (timestamp - lastRedraw > second / framerate) {
      snake.autoMove();
      lastRedraw = performance.now();
    }

    requestAnimationFrame(move);
  };

  requestAnimationFrame(move);
};

startGame();

import { startInputProcessing } from './inputProcessing';
import { Board } from './board';
import { initializeContext } from './graphics';

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

  setInterval(() => snake.autoMove(), 200);
};

startGame();

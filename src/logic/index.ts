import { startInputProcessing } from './inputProcessing';
import { Board } from './board';
import { initializeContext } from './graphics';

const startGame = () => {
  const board = Board.initializeBoard();
  const { snake, food } = board.getGameObjects();
  initializeContext();

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
};

startGame();

import { startInputProcessing } from './inputProcessing';
import { Snake } from '../gameobjects/snake';
import { Board } from './board';
import { Food } from '../gameobjects/food';
import { initializeContext } from './graphics';

const startGame = () => {
  Board.initializeBoard();
  initializeContext();
  const snake = new Snake();
  const food = new Food();

  const drawGame = () => {
    Board.getInstance().clear();
    snake.draw();
    food.draw();
  };

  snake.addEventListener('foodEaten', () => food.regeneratePosition());
  snake.addEventListener('redraw', () => drawGame());
  food.addEventListener('redraw', () => drawGame());
  startInputProcessing(snake);
};

startGame();

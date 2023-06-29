import { startInputProcessing } from './inputProcessing';
import { Snake } from '../gameobjects/snake';
import { Board } from './board';
import { Food } from '../gameobjects/food';

const startGame = () => {
  Board.initializeBoard();
  const snake = new Snake();
  const food = new Food();

  const drawGame = () => {
    Board.getInstance().clear();
    snake.draw();
    food.draw();
  };

  snake.on('redraw', () => drawGame());
  snake.on('foodEaten', () => food.regeneratePosition());
  food.on('redraw', () => drawGame());

  startInputProcessing(snake);
};

startGame();

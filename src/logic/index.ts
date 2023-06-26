import { startInputProcessing } from './inputProcessing';
import { Snake } from './snake';
import { Board } from './board';

const startGame = () => {
  const snake = new Snake();
  Board.initializeBoard();
  startInputProcessing(snake);
};

startGame();

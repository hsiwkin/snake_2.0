import { startInputProcessing } from './inputProcessing';
import { Snake } from './snake';

const startGame = () => {
  const snake = new Snake();
  startInputProcessing(snake);
};

startGame();

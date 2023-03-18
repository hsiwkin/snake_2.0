import { startInputProcessing } from './inputProcessing';
import { drawCurrentPosition } from './graphics';

const startGame = () => {
  drawCurrentPosition();
  startInputProcessing();
};

startGame();

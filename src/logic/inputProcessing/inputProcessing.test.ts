import { Direction } from '../../types';
import { getOppositeDirection } from './inputProcessing';

describe('inputProcessing', () => {
  describe('getOppositeDirection', () => {
    it('find opposite direction to UP', () => {
      // given
      const initialDirection = Direction.Up;
      const expectedOppositeDirection = Direction.Down;

      // when
      const resultDirection = getOppositeDirection(initialDirection);

      // then
      expect(resultDirection).toEqual(expectedOppositeDirection);
    });

    it('find opposite direction to DOWN', () => {
      // given
      const initialDirection = Direction.Down;
      const expectedOppositeDirection = Direction.Up;

      // when
      const resultDirection = getOppositeDirection(initialDirection);

      // then
      expect(resultDirection).toEqual(expectedOppositeDirection);
    });

    it('find opposite direction to LEFT', () => {
      // given
      const initialDirection = Direction.Left;
      const expectedOppositeDirection = Direction.Right;

      // when
      const resultDirection = getOppositeDirection(initialDirection);

      // then
      expect(resultDirection).toEqual(expectedOppositeDirection);
    });

    it('find opposite direction to RIGHT', () => {
      // given
      const initialDirection = Direction.Right;
      const expectedOppositeDirection = Direction.Left;

      // when
      const resultDirection = getOppositeDirection(initialDirection);

      // then
      expect(resultDirection).toEqual(expectedOppositeDirection);
    });
  });
});

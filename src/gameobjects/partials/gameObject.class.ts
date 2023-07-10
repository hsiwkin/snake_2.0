import { Point } from '../../utils/point';
import { colors } from '../../utils/colors';

const DEFAULT_COLOR = colors.black;

export class GameObject {
  constructor(public location: Point, public color: string = DEFAULT_COLOR) {}
}

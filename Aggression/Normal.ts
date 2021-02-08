import Aggression from '../Aggression';
import Leader from '@civ-clone/core-civilization/Leader';

export class Normal extends Aggression {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0.5);
  }
}

export default Normal;

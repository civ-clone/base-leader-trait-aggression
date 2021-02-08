import Aggression from '../Aggression';
import Leader from '@civ-clone/core-civilization/Leader';

export class Aggressive extends Aggression {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 1);
  }
}

export default Aggressive;

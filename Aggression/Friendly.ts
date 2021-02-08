import Aggression from '../Aggression';
import Leader from '@civ-clone/core-civilization/Leader';

export class Friendly extends Aggression {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0);
  }
}

export default Friendly;

import { write } from '../database';

import Player from './base';

class Tiger extends Player {
  constructor(playerIndex) {
    super(playerIndex);
    this.isTiger = true;
    write(this.playerIndex, { isTiger: this.isTiger });
  }
}

export default (playerIndex) => new Tiger(playerIndex);

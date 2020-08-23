import { write } from '../database';

import Player from './base';

class Children extends Player {
  constructor(playerIndex) {
    super(playerIndex);
    this.isTiger = false;
    // dev-web
    write(this.playerIndex, { isTiger: this.isTiger });
    //
  }
}

export default (playerIndex) => new Children(playerIndex);

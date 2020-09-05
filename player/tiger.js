import { write } from '../database';

import Player from './base';

class Tiger extends Player {
  constructor(playerIndex) {
    super(playerIndex);
    this.isTiger = true;
    write(this.playerIndex, {
      isAlive: this.isAlive,
      isTiger: this.isTiger,
      rope: this.rope,
      playerIndex: this.playerIndex,
      xPos: this.xPos,
      yPos: this.yPos,
    });
  }
}

export default (playerIndex) => new Tiger(playerIndex);

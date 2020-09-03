const DIRECTION_FACTOR = [1, 0, -1, 0];

export const checkDownNearByPlayer = (players, movingPlayerIndex) => {
  for (let i = 0; i < players.length; i += 1) {
    if (players[movingPlayerIndex].getXpos()
      + DIRECTION_FACTOR[(movingPlayerIndex + 2) % 4] === players[i].getXpos()
      && players[movingPlayerIndex].getYpos()
      + DIRECTION_FACTOR[(movingPlayerIndex + 3) % 4] === players[i].getYpos()) {
      return players[i];
    }
  }
  return false;
};

export const checkLeftNearByPlayer = (players, movingPlayerIndex) => {
  for (let i = 0; i < players.length; i += 1) {
    if (players[movingPlayerIndex].getXpos()
      + DIRECTION_FACTOR[(movingPlayerIndex + 3) % 4] === players[i].getXpos()
      && players[movingPlayerIndex].getYpos()
      + DIRECTION_FACTOR[(movingPlayerIndex) % 4] === players[i].getYpos()) {
      return players[i];
    }
  }
  return false;
};

export const checkRightNearByPlayer = (players, movingPlayerIndex) => {
  for (let i = 0; i < players.length; i += 1) {
    if (players[movingPlayerIndex].getXpos()
    + DIRECTION_FACTOR[(movingPlayerIndex + 1) % 4] === players[i].getXpos()
    && players[movingPlayerIndex].getYpos()
    + DIRECTION_FACTOR[(movingPlayerIndex + 2) % 4] === players[i].getYpos()) {
      return players[i];
    }
  }
  return false;
};

export const checkUpNearByPlayer = (players, movingPlayerIndex) => {
  for (let i = 0; i < players.length; i += 1) {
    if (players[movingPlayerIndex].getXpos()
    + DIRECTION_FACTOR[(movingPlayerIndex) % 4] === players[i].getXpos()
    && players[movingPlayerIndex].getYpos()
    + DIRECTION_FACTOR[(movingPlayerIndex + 1) % 4] === players[i].getYpos()) {
      return players[i];
    }
  }
  return false;
};

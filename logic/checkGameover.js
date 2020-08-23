const getDistance = (player1, player2) => (
  Math.abs(player1.getXPos() - player2.getXPos()) + Math.abs(player1.getYPos() - player2.getYPos())
);

const checkAllChildrenAreKilled = (players) => (
  players.filter((player) => !player.getIsTiger()).every((children) => !children.getIsAlive()));

const checkRopeChildrenIsKilled = (players) => (
  players.some((player) => !player.getIsTiger() && player.getRope() && !player.getIsAlive()));

const checkTigerHasRope = (players) => (
  players.some((player) => player.getIsTiger() && player.getRope()));

const checkNeer = (players) => {
  const children = players.filter((player) => player.getIsAlive() && !player.getIsTiger());
  const alivePlayerNum = children.length;

  if (alivePlayerNum === 2) {
    return getDistance(children[0], children[1]) === 1;
  }
  if (alivePlayerNum === 3) {
    return getDistance(children[0], children[1])
      + getDistance(children[1], children[2])
      + getDistance(children[0], children[2]) === 4;
  }
  return true;
};

const checkChildrenVictory = (players) => players.some((player) => (
  !player.getIsTiger() && player.getRope() && player.getIsAlive() && checkNeer(players)));

export default (players) => {
  if (checkChildrenVictory(players)) {
    return 1;
  }
  // eslint-disable-next-line max-len
  if (checkRopeChildrenIsKilled(players) || checkTigerHasRope(players) || checkAllChildrenAreKilled()) {
    return -1;
  }
  return 0;
};

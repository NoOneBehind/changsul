const DIRECTION_FACTOR = [1, 0, -1, 0];
const START_POS = [[0, 0], [0, 5], [5, 5], [5, 0]];

export default class Player {
  constructor (playerIndex) {
    this.playerIndex = playerIndex;
    this.pos = { x: START_POS[playerIndex][0], y: START_POS[playerIndex][1] };
    this.isAlive = true;
    this.rope = false;
  }

  moveDown() {
    this.pos.x += DIRECTION_FACTOR[(this.playerIndex + 2) % 4];
    this.pos.y += DIRECTION_FACTOR[(this.playerIndex + 3) % 4]
    // TODO: move xyPlotter
  }

  moveLeft() {
    this.pos.x += DIRECTION_FACTOR[(this.playerIndex + 3) % 4];
    this.pos.y += DIRECTION_FACTOR[(this.playerIndex)]
    // TODO: move xyPlotter
  }

  moveRight() {
    this.pos.x += DIRECTION_FACTOR[(this.playerIndex + 1) % 4];
    this.pos.y += DIRECTION_FACTOR[(this.playerIndex + 2) % 4];
    // TODO: move xyPlotter
  }

  moveUp() {
    this.pos.x += DIRECTION_FACTOR[(this.playerIndex)];
    this.pos.y += DIRECTION_FACTOR[(this.playerIndex + 1) % 4];
    // TODO: move xyPlotter
  }

  getIsAlive() {
    return this.isAlive;
  }

  getIsTiger() {
    return this.isTiger;
  }

  getRope() {
    return this.rope;
  }

  setIsAlive(isAlive) {
    this.isAlive = isAlive;
  }

  setRope(rope) {
    this.rope = rope;
  }
}

import { write } from '../database';

const DIRECTION_FACTOR = [1, 0, -1, 0];
const START_POS = [[0, 0], [0, 5], [5, 5], [5, 0]];

export default class Player {
  constructor(playerIndex) {
    this.bell = false;
    this.playerIndex = playerIndex;
    [this.xPos, this.yPos] = START_POS[this.playerIndex];
    this.isAlive = true;
    this.rope = false;
    // dev-web
    write(this.playerIndex, {
      isAlive: this.isAlive,
      rope: this.rope,
      playerIndex: this.playerIndex,
      xPos: this.xPos,
      yPos: this.yPos,
    });
    //
  }

  checkDownWall() {
    if ((this.xPos + DIRECTION_FACTOR[(this.playerIndex + 2) % 4]) > 5
      || (this.yPos + DIRECTION_FACTOR[(this.playerIndex + 3) % 4]) > 5) {
      return true;
    }

    return false;
  }

  checkLeftWall() {
    if ((this.xPos + DIRECTION_FACTOR[(this.playerIndex + 3) % 4]) > 5
      || (this.yPos + DIRECTION_FACTOR[(this.playerIndex) % 4]) > 5) {
      return true;
    }

    return false;
  }

  checkRightWall() {
    if ((this.xPos + DIRECTION_FACTOR[(this.playerIndex + 1) % 4]) > 5
      || (this.yPos + DIRECTION_FACTOR[(this.playerIndex + 2) % 4]) > 5) {
      return true;
    }

    return false;
  }

  checkUpWall() {
    if ((this.xPos + DIRECTION_FACTOR[(this.playerIndex) % 4]) > 5
      || (this.yPos + DIRECTION_FACTOR[(this.playerIndex + 1) % 4]) > 5) {
      return true;
    }

    return false;
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

  getPlayerIndex() {
    return this.playerIndex;
  }

  getXPos() {
    return this.xPos;
  }

  getYPos() {
    return this.yPos;
  }

  async moveDown() {
    this.xPos += DIRECTION_FACTOR[(this.playerIndex + 2) % 4];
    this.yPos += DIRECTION_FACTOR[(this.playerIndex + 3) % 4];
    // TODO: move xyPlotter
    // dev-web
    await write(this.playerIndex, { xPos: this.xPos, yPos: this.yPos });
    //
  }

  async moveLeft() {
    this.xPos += DIRECTION_FACTOR[(this.playerIndex + 3) % 4];
    this.yPos += DIRECTION_FACTOR[(this.playerIndex)];
    // TODO: move xyPlotter
    // dev-web
    await write(this.playerIndex, { xPos: this.xPos, yPos: this.yPos });
    //
  }

  async moveRight() {
    this.xPos += DIRECTION_FACTOR[(this.playerIndex + 1) % 4];
    this.yPos += DIRECTION_FACTOR[(this.playerIndex + 2) % 4];
    // TODO: move xyPlotter
    // dev-web
    await write(this.playerIndex, { xPos: this.xPos, yPos: this.yPos });
    //
  }

  async moveUp() {
    this.xPos += DIRECTION_FACTOR[(this.playerIndex)];
    this.yPos += DIRECTION_FACTOR[(this.playerIndex + 1) % 4];
    // TODO: move xyPlotter
    // dev-web
    await write(this.playerIndex, { xPos: this.xPos, yPos: this.yPos });
    //
  }

  async setIsAlive(isAlive) {
    this.isAlive = isAlive;
    await write(this.playerIndex, { isAlive: this.isAlive });
  }

  async setRope(rope) {
    this.rope = rope;
    await write(this.playerIndex, { rope: this.rope });
  }

  async setXPos(pos) {
    this.xPos = pos;
    await write(this.playerIndex, { xPos: this.xPos });
  }

  async setYPos(pos) {
    this.yPos = pos;
    await write(this.playerIndex, { yPos: this.yPos });
  }
}

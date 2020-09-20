/* eslint-disable no-await-in-loop */

import RegexParser from '@serialport/parser-regex';

import SerialPort from '../lib/serialport';

const ACK = 'ACK';
const DONE = 'Done';

class XYPlotter extends SerialPort {
  constructor(connection) {
    super({ connection, commandEnter: '\r', maxRetry: 10 });
    this.regex = '\r';
  }

  open() {
    return super.open().then(() => this.setParser(new RegexParser({ regex: this.regex })));
  }

  async moveTo(xPos, yPos) {
    const [x, y] = await this.getCurrentPosition();
    if (x === xPos && y === yPos) {
      return true;
    }
    const { data } = await this.write(`MV ${xPos} ${yPos}`, 500);
    if (data === ACK) {
      return (await this.read()) === DONE;
    }
    return false;
  }

  async getCurrentPosition() {
    const { data } = await this.write('POS', 500);
    const [, xPos, yPos] = data.split(' ');
    return [+xPos, +yPos];
  }
}

export default (option) => new XYPlotter(option);

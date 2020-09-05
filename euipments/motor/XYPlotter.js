/* eslint-disable no-await-in-loop */

import RegexParser from '@serialport/parser-regex';

import SerialPort from '../lib/serialport';

const ACK = 'ACK';
const DONE = 'Done';

class XYPlotter extends SerialPort {
  constructor(connection) {
    super({ connection, commandEnter: '\r' });
    this.regex = '\r';
  }

  open() {
    return super.open().then(() => this.setParser(new RegexParser({ regex: this.regex })));
  }

  async moveTo(xPos, yPos) {
    const { data } = await this.writeWithRetry(`MV ${xPos} ${yPos}`, 100);
    if (data === ACK) {
      return (await this.read() === DONE);
    }
    return false;
  }

  async getCurrentPosition() {
    const { data } = await this.writeWithRetry('POS', 100);
    const [, xPos, yPos] = data.split(' ');
    return [+xPos, +yPos];
  }
}

export default (option) => new XYPlotter(option);

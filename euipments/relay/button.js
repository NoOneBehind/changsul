/* eslint-disable no-await-in-loop */

import RegexParser from '@serialport/parser-regex';
import SerialPort from '../lib/serialport';

class Button extends SerialPort {
  constructor(connection) {
    super({
      commandEnter: '\r',
      connection,
    });
    this.regex = /\r/;
  }

  open() {
    return super.open().then(() => this.setParser(new RegexParser({ regex: this.regex })));
  }

  up(ch) {
    return this.writeWithRetry(`RY ${[].concat(ch).join(' ')} 1`, 500);
  }

  down(ch) {
    return this.writeWithRetry(`RY ${[].concat(ch).join(' ')} 0`, 500);
  }
}

export default (connection) => new Button(connection);

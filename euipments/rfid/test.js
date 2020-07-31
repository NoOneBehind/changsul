/* eslint-disable no-await-in-loop */

import { sleep } from '../lib/util';
import Rfid from './rfid';

const run = async () => {
  const rfid = new Rfid({ path: '/dev/tty.usbserial-A600MFOW' });
  await rfid.open();

  // log(await rfid.readTag({ listen: true }, log));
  // await rfid.setPowerGain(250);
  await rfid.readTest();

  await sleep(100);
  await rfid.close();
};

run().catch(console.log);

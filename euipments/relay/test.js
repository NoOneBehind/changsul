/* eslint-disable no-await-in-loop */
import { createButton } from './index';
import { sleep } from '../lib/util';

const run = async () => {
  const button = createButton({ path: '/dev/ttyACM0' });

  await button.open();
  console.log('opened!');

  await button.up(15);

  await button.close();
};

// eslint-disable-next-line no-console
run().catch(console.error);

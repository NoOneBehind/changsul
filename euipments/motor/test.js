import { createXYPlotter } from './index';
import { createButton } from '../relay';
import { sleep } from '../lib/util';

const run = async () => {
  const XYPlotter = createXYPlotter({ path: '/dev/ttyUSB0' });
  const button = createButton({ path: '/dev/ttyACM0' });

  await XYPlotter.open();
  await button.open();
  console.log('Open!');
  await sleep(5000);
  // await button.down(14);
  await XYPlotter.moveTo(1, 0);
  await sleep(1500);
  // await XYPlotter.moveTo(3, 4);
  // await button.up(14);
  await XYPlotter.moveTo(1, 1);
  await sleep(1500);
  // await button.down(14);
  await XYPlotter.moveTo(0, 0);

  await XYPlotter.close();
  await button.close();
};

// eslint-disable-next-line no-console
run().catch(console.error);

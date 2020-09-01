/* eslint-disable no-await-in-loop */
import readline from 'readline';

import { createChildren, createTiger } from './player';

const MAX_MOVEMENT = 2;
// 플레이어는 4명으로 고정이라 가정
const PLAYER_NUM = 4;
const TIGER_INDEX = (Math.round(Math.random() * 10)) % 4;

const DOWN = 'down';
const ENTER = 'return';
const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';

const killTheChild = (child) => {
  child.setIsAlive(false);
};



const readKeyInput = () => new Promise((resolve) => {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.once('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      resolve(key.name);
    }
  });
});

const run = async () => {
  const players = Array(PLAYER_NUM).fill(null).map((v, idx) => (
    idx === TIGER_INDEX ? createTiger(idx) : createChildren(idx)));
  let alivePlayerNum = 4;

  for (;;) {
    for (let i = 0; i < PLAYER_NUM; i += 1) {
      for (let movementCount = 0; movementCount < MAX_MOVEMENT; movementCount += 1) {
        const input = await readKeyInput();
        if (input === ENTER) {
          break;
        }

        switch (input) {
          case UP:
            console.log(input);
            if (players[i].checkUpWall()) {
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            } else if (checkUpNearByPlayer(players, i)){
              if (players[i].getIsTiger()){
                killTheChild(checkUpNearByPlayer(players, i));
              }
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            }
            await players[i].moveUp();
            break;
          case DOWN:
            if (players[i].checkDownWall()) {
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            } else if (checkDownNearByPlayer(players, i)){
              if (players[i].getIsTiger()){
                killTheChild(checkDownNearByPlayer(players, i));
              }
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            }
            await players[i].moveDown();
            break;
          case LEFT:
            if (players[i].checkLeftWall()) {
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            } else if (checkLeftNearByPlayer(players, i)){
              if (players[i].getIsTiger()){
                killTheChild(checkLeftNearByPlayer(players, i));
              }
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            }
            await players[i].moveLeft();
            break;
          case RIGHT:
            if (players[i].checkRightWall()) {
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            } else if (checkRightNearByPlayer(players, i)){
              if (players[i].getIsTiger()){
                killTheChild(checkRightNearByPlayer(players, i));
              }
              console.log('Invalid Movement');
              movementCount -= 1;
              break;
            }
            await players[i].moveRight();
            break;
          default:
            console.log('Invalid Key!');
            console.log('Try Again');
            movementCount -= 1;
            break;
        }
      }
    }
  }
};

run();

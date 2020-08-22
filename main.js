import { createChildren, createTiger } from './player';

// 플레이어는 4명으로 고정이라 가정
const PLAYER_NUM = 4;
const TIGER_INDEX = (Math.round(Math.random() * 10)) % 4;

const players = Array(PLAYER_NUM).fill(null).map((v, idx) => (
  idx === TIGER_INDEX ? createTiger(idx) : createChildren(idx)));

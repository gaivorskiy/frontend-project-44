#!/usr/bin/env node
import { engine, engineCheck, returnGame } from '../src/index.js';
import { question, answer } from '../src/games/brain-calc-game.js';
const description = 'brain-calc';
engine(description);
let i = 0;
while (i < 3) {
  i += 1;
  engineCheck(question(), answer, i);
  if (returnGame === false) {
    break;
  }
}

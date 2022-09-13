#!/usr/bin/env node
import { engine, engineCheck, returnGame } from '../src/index';
import { question, answer } from '../src/games/brain-progression-game';

const description = 'brain-progression';
engine(description);
let i = 0;
while (i < 3) {
  i += 1;
  engineCheck(question(), answer, i);
  if (returnGame === false) {
    break;
  }
}

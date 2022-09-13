#!/usr/bin/env node
import { engine, engineCheck, returnGame } from '../src/index';
import { question, answer } from '../src/games/brain-gcd-game';

const description = 'brain-gcd';
engine(description);
let i = 0;
while (i < 3) {
  i += 1;
  engineCheck(question(), answer, i);
  if (returnGame === false) {
    break;
  }
}

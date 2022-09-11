#!/usr/bin/env node

import {engine, engineCheck, returnGame} from '../src/index.js';
import {question, answer} from '../src/games/brain-even-game.js';

const description = 'brain-even';
engine(description);
let i = 0;
while (i < 3) {
    i += 1;
    engineCheck(question(), answer, i);
    if (returnGame === false) {
        break;
    }
};

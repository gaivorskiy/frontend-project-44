#!/usr/bin/env node
// import readlineSync from 'readline-sync';
import even from '../src/games/brain-even-game.js';
import {userName, userHello} from '../src/index.js';

// const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

// console.log('Hello, ' + userName + '!');

console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')

even();
import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';

export let answer;
export const question = () => {
  let mass = '';
  let startNumber = getRandomFloat(1, 9);
  let multiplier = getRandomFloat(1, 9);
  let getRandomDots = getRandomFloat(0, 10);
  let quantity = 10;
  let j = 0;
  let correctResult;
    
  while (j < quantity) {
    let getStartNumber = startNumber;
    if (getRandomDots === j) {
      mass += ' ';
      correctResult = startNumber;
      startNumber += multiplier;
      mass += '..';
    } else if (getRandomDots !== j) {
    startNumber += multiplier;
    mass += ' ' + getStartNumber;
    };
    j++;
  };
  answer = correctResult;
  return `Question:${mass}`;
};
question();
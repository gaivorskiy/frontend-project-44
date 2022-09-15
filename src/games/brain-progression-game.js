import getRandomFloat from '../getRandomFloat.js';
import { engine, engineCheck, returnGame } from '../index.js';

const progression = () => {
  let answer;
  const question = () => {
    let mass = '';
    let startNumber = getRandomFloat(1, 9);
    const multiplier = getRandomFloat(1, 9);
    const getRandomDots = getRandomFloat(0, 10);
    const quantity = 10;
    let j = 0;
    let correctResult;

    while (j < quantity) {
      const getStartNumber = startNumber;
      if (getRandomDots === j) {
        mass += ' ';
        correctResult = startNumber;
        startNumber += multiplier;
        mass += '..';
      } else if (getRandomDots !== j) {
        startNumber += multiplier;
        mass += ` ${getStartNumber}`;
      }
      j += 1;
    }
    answer = String(correctResult);
    return `Question:${mass}`;
  };


  const description = 'brain-progression';
  engine(description);
  question();
  let i = 0;
  while (i < 3) {
    i += 1;
    engineCheck(question(), answer, i);
    if (returnGame === false) {
      break;
    }
  }
};
progression();
export default progression;
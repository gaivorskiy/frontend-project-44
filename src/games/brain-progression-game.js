import getRandomFloat from '../getRandomFloat';

export let answer;
export const question = () => {
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
  answer = correctResult;
  return `Question:${mass}`;
};
question();

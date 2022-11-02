import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runProgression = () => {
  const answer = [];
  const getQuestion = () => {
    let mass = '';
    let startNumber = getRandomNumber(1, 9);
    const multiplier = getRandomNumber(1, 9);
    const getRandomDots = getRandomNumber(0, 10);
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
    answer.push(String(correctResult));
    const getThisQuestion = `Question:${mass}`;
    return getThisQuestion;
  };
  const description = 'What number is missing in the progression?';
  engine(description, getQuestion, answer);
};
export default runProgression;

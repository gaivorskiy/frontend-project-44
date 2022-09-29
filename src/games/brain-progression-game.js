import getRandomFloat from '../getRandomFloat.js';
import engine from '../index.js';

const progression = () => {
  const answer = [];
  const getQuestion = [];
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
    answer.push(String(correctResult));
    const getThisQuestion = `Question:${mass}`;
    return getThisQuestion;
  };
  let i = 0;
  while (i < 3) {
    i += 1;
    getQuestion.push(question());
  }
  const description = 'brain-progression';
  engine(description, getQuestion, answer);
};
export default progression;

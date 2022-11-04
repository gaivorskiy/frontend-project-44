import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runProgression = () => {
  const answer = [];
  const getQuestion = () => {
    const getProgression = () => {
      const mass = [];
      let startNumber = getRandomNumber(1, 9);
      const multiplier = getRandomNumber(1, 9);
      const quantity = 10;
      for (let i = 0; i < quantity; i += 1) {
        if (i === 0) {
          mass.push(startNumber);
        } else if (i !== 0) {
          startNumber += multiplier;
          mass.push(startNumber);
        }
      }
      return mass;
    };
    const massProgression = getProgression();
    const getRandomDots = getRandomNumber(0, 10);
    const correctResult = massProgression[getRandomDots];
    let mass = '';
    for (let i = 0; i < massProgression.length; i += 1) {
      const replacingWithDots = (i !== getRandomDots) ? mass += ` ${massProgression[i]}` : mass += ' ..';
    }
    answer.push(String(correctResult));
    const getThisQuestion = `Question:${mass}`;
    return getThisQuestion;
  };
  const description = 'What number is missing in the progression?';
  engine(description, getQuestion, answer);
};
export default runProgression;

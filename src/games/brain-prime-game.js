import getRandomFloat from '../getRandomFloat.js';
import { engine, engineCheck, returnGame } from '../index.js';

const prime = () => {
  let answer;
  const question = () => {
    const getNumber = getRandomFloat(1, 100);
    const primeNumber = (n) => {
      let result;
      if (n === 1) {
        result = 'no';
      }
      for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i !== 0) {
          result = 'yes';
        }
        if (n % i === 0) {
          result = 'no';
        }
      }
      return result;
    };
    answer = primeNumber(getNumber);
    const resultQuestion = `Question: ${getNumber}`;
    return resultQuestion;
  };

  const description = 'brain-prime';
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
export default prime;

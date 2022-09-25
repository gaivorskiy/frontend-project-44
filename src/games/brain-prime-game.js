import getRandomFloat from '../getRandomFloat.js';
import { engine, engineCheck, returnGame } from '../index.js';

const prime = () => {
  let answer;
  const question = () => {
    const getNumber = getRandomFloat(1, 100);
    const primeNumber = (n) => {
      let result;
      if (n === 1) {
        return (result = 'yes');
      }
      for (let i = 2; n > i; i += 1) {
        if (n % i !== 0) {
          return (result = 'yes');
        }
        if (n % i === 0) {
          return (result = 'no');
        }
      }
    };
    answer = primeNumber(getNumber);
    return `Question: ${getNumber}`;
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

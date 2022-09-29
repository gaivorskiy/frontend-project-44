import getRandomFloat from '../getRandomFloat.js';
import engine from '../index.js';

const prime = () => {
  const answer = [];
  const getQuestion = [];
  const question = () => {
    const getNumber = getRandomFloat(1, 100);
    function primeNumber(n) {
      let result = '';
      if (n === 1) {
        result = 'no';
        return result;
      }
      for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i !== 0) {
          result = 'yes';
        }
        if (n % i === 0) {
          result = 'no';
          return result;
        }
      }
      return result;
    }
    answer.push(primeNumber(getNumber));
    const resultQuestion = `Question: ${getNumber}`;
    return resultQuestion;
  };
  let i = 0;
  while (i < 3) {
    i += 1;
    getQuestion.push(question());
  }
  const description = 'brain-prime';
  engine(description, getQuestion, answer);
};
export default prime;

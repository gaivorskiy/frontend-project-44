import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runPrime = () => {
  const answer = [];
  const getQuestion = () => {
    const getNumber = getRandomNumber(1, 100);
    function primeNumber(n) {
      let result = '';
      if (n === 1) {
        result = 'no';
        return result;
      }
      if (n <= 3) {
        result = 'yes';
        return result;
      }
      for (let i = 2; i <= Math.sqrt(n); i += 1) {
        const checkOnRemains = (num) => num % i !== 0;
        result = (checkOnRemains(n) === true) ? 'yes' : 'no';
        if (result === 'no') {
        return result;
        }
      }
      return result;
    };
    answer.push(primeNumber(getNumber));
    const resultQuestion = `Question: ${getNumber}`;
    return resultQuestion;
  };
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(description, getQuestion, answer);
};
export default runPrime;

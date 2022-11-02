import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runGcd = () => {
  const answer = [];
  const getQuestion = () => {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);

    const checkAnswer = (n, n1) => {
      let num = n;
      let num1 = n1;
      while (num1 !== 0) {
        const numTemp = num % num1;
        num = num1;
        num1 = numTemp;
      }
      return num;
    };
    answer.push(String(checkAnswer(firstNumber, secondNumber)));
    const getThisQuestion = `Question: ${firstNumber} ${secondNumber}`;
    return getThisQuestion;
  };
  const description = 'Find the greatest common divisor of given numbers.';
  engine(description, getQuestion, answer);
};
export default runGcd;

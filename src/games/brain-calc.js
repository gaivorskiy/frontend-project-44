import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runCalc = () => {
  const answer = [];
  const getQuestion = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const getIndex = getRandomNumber(0, 3);
    const mathOperator = ['*', '+', '-'];
    const getMathOperator = mathOperator[getIndex];
    const mathOperation = {
      '*': number1 * number2,
      '+': number1 + number2,
      '-': number1 - number2,
    };
    const resultMathOperation = mathOperation[getMathOperator];
    answer.push(String(resultMathOperation));
    const resultQuestion = `Question: ${number1} ${getMathOperator} ${number2}`;
    return resultQuestion;
  };
  const description = 'What is the result of the expression?';
  engine(description, getQuestion, answer);
};
export default runCalc;

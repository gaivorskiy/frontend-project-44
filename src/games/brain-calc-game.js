import getRandomFloat from '../getRandomFloat.js';
import { engine, engineCheck, returnGame } from '../index.js';

const calc = () => {
  let answer;
  const question = () => {
    let resultQuestion;
    const firstNumber = getRandomFloat(1, 100);
    const secondNumber = getRandomFloat(1, 100);
    const getOperators = getRandomFloat(1, 4);

    const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];

    if (getOperators === 1) {
      const [getQuestion, getAnswer] = a;
      answer = String(getAnswer);
      resultQuestion = `Question: ${getQuestion}`;
    }
    if (getOperators === 2) {
      const [getQuestion, getAnswer] = b;
      answer = String(getAnswer);
      resultQuestion = `Question: ${getQuestion}`;
    }
    if (getOperators === 3) {
      const [getQuestion, getAnswer] = c;
      answer = String(getAnswer);
      resultQuestion = `Question: ${getQuestion}`;
    }
    return resultQuestion;
  };

  const description = 'brain-calc';
  engine(description);
  let i = 0;
  while (i < 3) {
    i += 1;
    engineCheck(question(), answer, i);
    if (returnGame === false) {
      break;
    }
  }
};
export default calc;

import getRandomFloat from '../getRandomFloat.js';
import engine from '../index.js';

const calc = () => {
  const answer = [];
  const getQuestion = [];
  const question = () => {
    let resultQuestion;
    const firstNumber = getRandomFloat(1, 100);
    const secondNumber = getRandomFloat(1, 100);
    const getOperators = getRandomFloat(1, 4);

    const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];

    if (getOperators === 1) {
      const [getThisQuestion, getAnswer] = a;
      answer.push(String(getAnswer));
      resultQuestion = `Question: ${getThisQuestion}`;
    }
    if (getOperators === 2) {
      const [getThisQuestion, getAnswer] = b;
      answer.push(String(getAnswer));
      resultQuestion = `Question: ${getThisQuestion}`;
    }
    if (getOperators === 3) {
      const [getThisQuestion, getAnswer] = c;
      answer.push(String(getAnswer));
      resultQuestion = `Question: ${getThisQuestion}`;
    }
    return resultQuestion;
  };
  let i = 0;
  while (i < 3) {
    i += 1;
    getQuestion.push(question());
  }
  const description = 'brain-calc';
  engine(description, getQuestion, answer);
};
export default calc;

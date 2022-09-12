import getRandomFloat from '../getRandomFloat.js';

export let answer = 0;
export const question = () => {
  const firstNumber = getRandomFloat(1, 100);
  const secondNumber = getRandomFloat(1, 100);
  const getOperators = getRandomFloat(1, 4);

  const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
  const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
  const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];

  if (getOperators === 1) {
    const [getQuestion, getAnswer] = a;
    answer = getAnswer;
    return `Question: ${getQuestion}`;
  }
  if (getOperators === 2) {
    const [getQuestion, getAnswer] = b;
    answer = getAnswer;
    return `Question: ${getQuestion}`;
  }
  if (getOperators === 3) {
    const [getQuestion, getAnswer] = c;
    answer = getAnswer;
    return `Question: ${getQuestion}`;
  }
};
question();

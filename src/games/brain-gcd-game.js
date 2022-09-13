import getRandomFloat from '../getRandomFloat.js';

export let answer;
export const question = () => {
  const firstNumber = getRandomFloat(1, 100);
  const secondNumber = getRandomFloat(1, 100);

  const checkAnswer = (num, num1) => {
    const resultOne = [];
    const resultTwo = [];
    let resultFinal = 0;
    let whoMax;
    let whoMin;

    for (let i = 0; num >= i; i += 1) {
      if (num % i === 0) {
        resultOne.push(i);
      }
    }
    for (let i = 0; num1 >= i; i += 1) {
      if (num1 % i === 0) {
        resultTwo.push(i);
      }
    }
    if (resultOne.length >= resultTwo.length) {
      whoMax = resultOne;
      whoMin = resultTwo;
    } else if (resultOne.length < resultTwo.length) {
      whoMin = resultOne;
      whoMax = resultTwo;
    }

    for (let i = 0; whoMax.length > i; i += 1) {
      for (let j = 0; whoMin.length > j; j += 1) {
        if (whoMax[i] === whoMin[j]) {
          resultFinal = whoMax[i];
        }
      }
    }
    return resultFinal;
  };
  answer = checkAnswer(firstNumber, secondNumber);
  return `Question: ${firstNumber} ${secondNumber}`;
};
question();

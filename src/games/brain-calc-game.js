import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';

export let answer;
export const question = () => {

      const firstNumber = getRandomFloat(1, 100);
      const secondNumber = getRandomFloat(1, 100);
      const getOperators = getRandomFloat(1, 4);
      
      const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
      const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
      const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];
  
      if (getOperators === 1 ) {
        answer = a[1];
       return 'Question: ' + a[0];
      }
      if (getOperators === 2 ) {
        answer = b[1];
        return 'Question: ' + b[0];
      }
      if (getOperators === 3 ) {
        answer = c[1];
        return 'Question: ' + c[0];
      }
  
  };
  question();
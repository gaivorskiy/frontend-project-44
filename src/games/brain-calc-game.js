import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';
import {userName, correctAnswer, wrongAnswer, letsTry, congratulations} from '../index.js';

const calc = () => {
    let i = 0;
    while (i < 3) {
      i += 1;
      const firstNumber = getRandomFloat(1, 25);
      const secondNumber = getRandomFloat(1, 25);
      const getOperators = getRandomFloat(1, 4);
      let correctResult;
  
      const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
      const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
      const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];
  
      if (getOperators === 1 ) {
        correctResult = a[1];
        console.log('Question: ' + a[0]);
      }
      if (getOperators === 2 ) {
        correctResult = b[1];
        console.log('Question: ' + b[0]);
      }
      if (getOperators === 3 ) {
        correctResult = c[1];
        console.log('Question: ' + c[0]);
      }
  
      const firstAnswer = readlineSync.question('Your answer: ');
  
      if (firstAnswer != correctResult) {
        console.log (`\'${firstAnswer}\' ${wrongAnswer} \"${correctResult}\".\n${letsTry} ${userName}!`);
        return;
      } else if (firstAnswer == correctResult && i === 3) {
        console.log(`${correctAnswer}\n${congratulations}${userName}!`);
      } else if (firstAnswer == correctResult) {
        console.log(`${correctAnswer}`);
      }
    }
  }
  export default calc;
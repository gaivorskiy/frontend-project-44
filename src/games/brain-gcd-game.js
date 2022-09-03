import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';
import {userName, correctAnswer, wrongAnswer, letsTry, congratulations} from '../index.js';

const gcd = () => {
    let i = 0;
    while (i < 3) {
      i += 1;
      const firstNumber = getRandomFloat(1, 100);
      const secondNumber = getRandomFloat(1, 100);

      const checkAnswer = (num, num1) => {
        let resultOne = [];
        let resultTwo = [];
        let resultFinal = 0;
        let whoMax;
        let whoMin;
        
        for(let i = 2; num >= i; i += 1) {
          if (num % i === 0) {
          resultOne.push(i);
          }
        }
        for(let i = 2; num1 >= i; i += 1) {
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
          if (whoMax[i] === whoMin[i] && whoMax !== undefined) {
            resultFinal = whoMax[i];
          }
        }
        return resultFinal;
      };

      let correctResult = checkAnswer(firstNumber, secondNumber);
      console.log(`Question: ${firstNumber} ${secondNumber}`);
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

export default gcd;

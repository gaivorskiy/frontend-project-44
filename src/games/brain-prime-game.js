import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';
import {userName, answerNo, answerYes, correctAnswer, wrongAnswer, letsTry, congratulations} from '../index.js';

const prime = () => {
    let i = 0;
    while (i < 3) {
      i += 1;
      const getNumber = getRandomFloat(1, 100);
      const primeNumber = (n) => {
        let result;
        for (let i = 2; n > i; i +=1) {
          if (n % i !== 0 && i <= n) {
           result = 'yes'; 
          } else if (n % i === 0 && i < n) {
           return result = 'no';
          }
        }
        return result
      };
      let correctResult = primeNumber(getNumber);

      console.log(`Question: ${getNumber}`);
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

export default prime;
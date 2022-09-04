import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';
import {userName, correctAnswer, wrongAnswer, letsTry, congratulations} from '../index.js';

const progression = () => {
    let i = 0;
    while (i < 3) {
      i += 1;
      let mass = '';
      let startNumber = getRandomFloat(1, 9);
      let multiplier = getRandomFloat(1, 9);
      let getRandomDots = getRandomFloat(0, 10);
      let quantity = 10;
      let j = 0;
      let correctResult;
        
      while (j < quantity) {
          let getStartNumber = startNumber;
          if (getRandomDots === j) {
            mass += ' ';
            correctResult = startNumber;
            startNumber += multiplier;
            mass += '..';
          } else if (getRandomDots !== j) {
          startNumber += multiplier;
          mass += ' ' + getStartNumber;
          };
          j++;
        }

        console.log(`Question: ${mass}`);
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
export default progression;
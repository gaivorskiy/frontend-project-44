import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';
import {userName, answerNo, answerYes, correctAnswer, wrongAnswer, letsTry, congratulations} from '../index.js';

const even = () => {
    let i = 0;
    while (i < 3) {
    i += 1;    

    const randomNumber = getRandomFloat(1, 9);

    console.log('Question: ' + randomNumber);

    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
        if (answer === answerYes && i === 3) {
            console.log(`${correctAnswer}\n${congratulations}${userName}!`);
        } else if (answer === answerYes) {
            console.log(`${correctAnswer}`);
        } else if (answer !== answerYes) {
            console.log (`\'${answer}\' ${wrongAnswer} \"${answerYes}\".\n${letsTry} ${userName}!`);
            return;
        }
    } else if (answer % 2 !== 0) {
        if (answer === answerNo && i === 3) {
            console.log(`${correctAnswer}\n${congratulations}${userName}!`);
        } else if (answer === answerNo) {
            console.log(`${correctAnswer}`);
        } else if (answer !== answerNo) {
            console.log (`\'${answer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
            return;
        } 
    }
    }
}
export default even;
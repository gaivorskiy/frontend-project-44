import getRandomFloat from '../getRandomFloat.js';
import { engine, engineCheck, returnGame } from '../index.js';
const even = () => {
  let answer;
  const question = () => {
    const answerNo = 'no';
    const answerYes = 'yes';
    const randomNumber = getRandomFloat(1, 9);

    if (randomNumber % 2 === 0) {
      answer = answerYes;
    } else if (answer % 2 !== 0) {
      answer = answerNo;
    }
    return `Question: ${randomNumber}`;
  };
  const description = 'brain-even';
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
even();
export default even;
import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const runEven = () => {
  const answer = [];
  const getQuestion = () => {
    const answerNo = 'no';
    const answerYes = 'yes';
    const randomNumber = getRandomNumber(1, 9);

    if (randomNumber % 2 === 0) {
      answer.push(answerYes);
    } else if (randomNumber % 2 !== 0) {
      answer.push(answerNo);
    }
    const resultQuestion = `Question: ${randomNumber}`;
    return resultQuestion;
  };
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(description, getQuestion, answer);
};
export default runEven;

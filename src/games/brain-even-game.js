import getRandomFloat from '../getRandomFloat.js';
import engine from '../index.js';

const even = () => {
  const answer = [];
  const getQuestion = [];
  const question = () => {
    const answerNo = 'no';
    const answerYes = 'yes';
    const randomNumber = getRandomFloat(1, 9);

    if (randomNumber % 2 === 0) {
      answer.push(answerYes);
    } else if (randomNumber % 2 !== 0) {
      answer.push(answerNo);
    }
    const resultQuestion = `Question: ${randomNumber}`;
    return resultQuestion;
  };
  let i = 0;
  while (i < 3) {
    i += 1;
    getQuestion.push(question());
  }
  const description = 'brain-even';
  engine(description, getQuestion, answer);
};
export default even;

import getRandomFloat from '../getRandomFloat.js';

export let answer;
export const question = () => {
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
question();

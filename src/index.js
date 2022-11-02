import readlineSync from 'readline-sync';

const engine = (description, getQuestion, answer) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ',);
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    console.log(getQuestion());
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = 'Correct!';

    if (userAnswer !== answer[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer[i]}'.`);
      console.log(`Let\'s try again, ${userName}!`);
      return;
    }
    if (userAnswer === answer[i]) {
      console.log(`${correctAnswer}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default engine;

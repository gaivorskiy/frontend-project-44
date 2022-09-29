import readlineSync from 'readline-sync';

const engine = (description, getQuestion, answer) => {
  const userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name?: ',
  );
  console.log(`Hello, ${userName}!`);
  if (description === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (description === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (description === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (description === 'brain-prime') {
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    );
  } else if (description === 'brain-progression') {
    console.log('What number is missing in the progression?');
  }
  let i = 0;
  while (i < 3) {
    console.log(getQuestion[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    const wrongAnswer = 'is wrong answer ;(. Correct answer was';
    const correctAnswer = 'Correct!';
    const letsTry = "Let's try again,";
    const congratulations = 'Congratulations, ';

    if (userAnswer !== answer[i]) {
      console.log(
        `'${userAnswer}' ${wrongAnswer} '${answer[i]}'.\n${letsTry} ${userName}!`,
      );
      return;
    }
    if (userAnswer === answer[i] && i === 2) {
      console.log(`${correctAnswer}\n${congratulations}${userName}!`);
    } else if (userAnswer === answer[i]) {
      console.log(`${correctAnswer}`);
    }
    i += 1;
  }
};
export default engine;

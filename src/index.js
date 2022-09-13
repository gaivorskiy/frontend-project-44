#!/usr/bin/env node
import readlineSync from 'readline-sync';

export let userName;
export const engine = (description) => {
  userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name?: ',
  );
  const userHello = console.log(`Hello, ${userName}!`);
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
};
export let returnGame;
export const engineCheck = (question, answer, i) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  const wrongAnswer = 'is wrong answer ;(. Correct answer was';
  const correctAnswer = 'Correct!';
  const letsTry = "Let's try again,";
  const congratulations = 'Congratulations, ';

  if (userAnswer !== answer) {
    console.log(
      `'${userAnswer}' ${wrongAnswer} '${answer}'.\n${letsTry} ${userName}!`,
    );
    returnGame = false;
  } else if (userAnswer === answer && i === 3) {
    console.log(`${correctAnswer}\n${congratulations}${userName}!`);
  } else if (userAnswer === answer) {
    console.log(`${correctAnswer}`);
  }
};

#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

console.log('Hello, ' + userName + '!');

console.log('What is the result of the expression?')

const calc = () => {
  let i = 0;
  while (i < 3) {
    i += 1;
    const getRandomFloat = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
    };

    const wrongAnswer = 'is wrong answer ;(. Correct answer was';
    const letsTry = 'Let\'s try again,';
    const congratulations = 'Congratulations, ';
    const correctAnswer = 'Correct!';
    const firstNumber = getRandomFloat(1, 100);
    const secondNumber = getRandomFloat(1, 100);
    const getOperators = getRandomFloat(1, 3);
    let correctResult;

    // const arithmeticOperators = [`${firstNumber} + ${secondNumber}`, 
    //                              `${firstNumber} + ${secondNumber}`, 
    //                              `${firstNumber} + ${secondNumber}`];

    const a = [`${firstNumber} + ${secondNumber}`, firstNumber + secondNumber];
    const b = [`${firstNumber} - ${secondNumber}`, firstNumber - secondNumber];
    const c = [`${firstNumber} * ${secondNumber}`, firstNumber * secondNumber];

    if (getOperators === 1 ) {
      correctResult = a[1];
      console.log('Question: ' + a[0]);
    }
    if (getOperators === 2 ) {
      correctResult = b[1];
      console.log('Question: ' + b[0]);
    }
    if (getOperators === 3 ) {
      correctResult = c[1];
      console.log('Question: ' + c[0]);
    }

    // const getResult = arithmeticOperators[getOperators];

    // console.log('Question: ' + getResult);

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
calc();

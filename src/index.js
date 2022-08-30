#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

export const userHello = console.log('Hello, ' + userName + '!');

export const answerNo = 'no';
export const answerYes = 'yes';
export const wrongAnswer = 'is wrong answer ;(. Correct answer was';
export const correctAnswer = 'Correct!';
export const letsTry = 'Let\'s try again,';
export const congratulations = 'Congratulations, ';

//export const gameSelection = readlineSync.question('Сhoose a game!\nbrain-calc\nbrain-even\nbrain-games');
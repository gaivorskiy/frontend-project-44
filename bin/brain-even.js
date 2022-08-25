#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

console.log('Hello, ' + userName + '!');

console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')

const getRandomFloat = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

const firstQuestion = getRandomFloat(1, 9);
const secondQuestion = getRandomFloat(1, 9);
const thirdQuestion = getRandomFloat(1, 9);
const answerNo = 'no';
const answerYes = 'yes';
const correctAnswer = 'Correct!';
const wrongAnswer = 'is wrong answer ;(. Correct answer was';
const letsTry = 'Let\'s try again,';
const congratulations = 'Congratulations, ';

console.log('Question: ' + firstQuestion);

const firstAnswer = readlineSync.question('Your answer: ');

if (firstQuestion % 2 === 0) {
    if (firstAnswer === answerYes) {
        console.log(`${correctAnswer}`);
    } else if (firstAnswer !== answerYes) {
        console.log (`\'${firstAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }
} else if (firstQuestion % 2 !== 0) {
    if (firstAnswer === answerNo) {
        console.log(`${correctAnswer}`);
    } else if (firstAnswer !== answerNo) {
        console.log (`\'${firstAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }  
}

console.log('Question: ' + secondQuestion);

const secondAnswer = readlineSync.question('Your answer: ');

if (secondQuestion % 2 === 0) {
    if (secondAnswer === answerYes) {
        console.log(`${correctAnswer}`);
    } else if (firstAnswer !== answerYes) {
        console.log (`\'${secondAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }
} else if (secondQuestion % 2 !== 0) {
    if (secondAnswer === answerNo) {
        console.log(`${correctAnswer}`);
    } else if (firstAnswer !== answerNo) {
        console.log (`\'${secondAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }  
}

console.log('Question: ' + thirdQuestion);

const thirdAnswer = readlineSync.question('Your answer: ');

if (thirdQuestion % 2 === 0) {
    if (thirdAnswer === answerYes) {
        console.log(`${correctAnswer}\n${congratulations}${userName}!`);
    } else if (firstAnswer !== answerYes) {
        console.log (`\'${secondAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }
} else if (thirdQuestion % 2 !== 0) {
    if (thirdAnswer === answerNo) {
        console.log(`${correctAnswer}\n${congratulations}${userName}!`);
    } else if (firstAnswer !== answerNo) {
        console.log (`\'${secondAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
        process.exit(1);
    }  
}

// if (secondAnswer === answerYes) {
//     console.log(`${correctAnswer}`);
// } else if (secondAnswer !== answerYes) {
//     console.log (`\'${secondAnswer}\' ${wrongAnswer} \"${answerYes}\".\n${letsTry} ${userName}!`);
//     process.exit(1);
// } 

// console.log('Question: ' + thirdQuestion);

// const thirdAnswer = readlineSync.question('Your answer: ');

// if (thirdAnswer === answerNo) {
//     console.log(`${correctAnswer}\n${congratulations}${userName}!`);
// } else if (thirdAnswer !== answerNo) {
//     console.log (`\'${thirdAnswer}\' ${wrongAnswer} \"${answerNo}\".\n${letsTry} ${userName}!`);
//     process.exit(1);
// } 

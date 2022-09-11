import readlineSync from 'readline-sync';
import getRandomFloat from '../getRandomFloat.js';

export let answer;
export const question = () => {
  const getNumber = getRandomFloat(1, 100);
  const primeNumber = (n) => {
    let result;
    if (n === 1) {
        return result = 'yes';
    }
    for (let i = 2; n > i; i +=1) {
        if (n % i !== 0) {
        result = 'yes'; 
        } else if (n % i === 0) {
        return result = 'no';
        }
    }
    return result
  };
  answer = primeNumber(getNumber);
  return `Question: ${getNumber}`;
};

question();
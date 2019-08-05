import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const getDataforPrime = () => {
  const firstNumber = getRandomInt(1, 47);
  const question = `${firstNumber}`;
  const correctAnswer = isPrime(firstNumber);
  return cons(`${question}`, correctAnswer);
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export default () => core(rule, getDataforPrime);

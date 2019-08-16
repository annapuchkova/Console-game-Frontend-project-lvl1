import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = getRandomInt(1, 47);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => core(description, getData);

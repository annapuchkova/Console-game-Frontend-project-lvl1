import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const getGcd = (n1, n2) => ((!n2) ? n1 : getGcd(n2, n1 % n2));

const getData = () => {
  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = getGcd(firstOperand, secondOperand).toString();
  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => core(description, getData);

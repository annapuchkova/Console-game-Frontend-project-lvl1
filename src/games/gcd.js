import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const getGCD = (n1, n2) => ((!n2) ? n1 : getGCD(n2, n1 % n2));

export const getDataForGCD = () => {
  const firstNumber = getRandomInt(1, 10);
  const secontNumber = getRandomInt(1, 10);
  const question = `${firstNumber} ${secontNumber}`;
  const correctAnswer = getGCD(firstNumber, secontNumber);
  return cons(question, correctAnswer);
};

const rule = 'Find the greatest common divisor of given numbers.\n';

export default () => core(rule, getDataForGCD);

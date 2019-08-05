import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const operations = ['+', '-', '*'];
const actions = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

export const getDataForCalc = () => {
  const firstNumber = getRandomInt(1, 10);
  const secontNumber = getRandomInt(1, 10);
  const operator = operations[getRandomInt(0, 2)];
  const question = `${firstNumber} ${operator} ${secontNumber}`;
  const correctAnswer = actions[operator](firstNumber, secontNumber);
  return cons(`${question}`, correctAnswer);
};

const rule = 'What is the result of the expression?.\n';

export default () => core(rule, getDataForCalc);

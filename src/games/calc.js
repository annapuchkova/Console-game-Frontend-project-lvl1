import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const operations = ['+', '-', '*'];
const operationsRange = getRandomInt(0, operations.length - 1);
const actions = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const getData = () => {
  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const operator = operations[operationsRange];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = actions[operator](firstOperand, secondOperand);
  return cons(question, `${correctAnswer}`);
};

const description = 'What is the result of the expression?.';

export default () => core(description, getData);

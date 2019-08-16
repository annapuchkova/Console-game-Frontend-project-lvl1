import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const actions = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const operations = Object.keys(actions);

const getData = () => {
  const first = getRandomInt(1, 10);
  const second = getRandomInt(1, 10);
  const operator = operations[getRandomInt(0, operations.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = actions[operator](first, second).toString();
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

export default () => core(description, getData);

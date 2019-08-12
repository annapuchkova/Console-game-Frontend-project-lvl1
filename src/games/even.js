import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const isEven = num => num % 2 === 0;

const getData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => core(description, getData);

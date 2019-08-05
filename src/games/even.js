import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const getDataForEven = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(`${question}`, correctAnswer);
};

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

export default () => core(rule, getDataForEven);

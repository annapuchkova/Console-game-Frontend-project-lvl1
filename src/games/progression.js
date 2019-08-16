import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const getProgression = (first, diff, length) => {
  const iter = (acc, i) => {
    if (i === length) {
      return acc;
    }
    const nextElement = first + diff * i;
    return iter([...acc, nextElement], i + 1);
  };
  return iter([], 0);
};

const length = 10;

const getData = () => {
  const first = getRandomInt(1, 20);
  const diff = getRandomInt(1, 3);
  const progression = getProgression(first, diff, length);
  const hiddenElementIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  const question = progression
    .map((item, index) => (index === hiddenElementIndex ? '..' : item)).join(' ');
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?';

export default () => core(description, getData);

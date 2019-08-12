import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const lengthOfProgression = 10;

const getProgression = () => {
  const startElement = getRandomInt(1, 20);
  const diff = getRandomInt(1, 3);
  const iter = (range, i) => {
    if (range.length === lengthOfProgression) {
      return range;
    }
    const nextElement = startElement + diff * i;
    return iter([...range, nextElement], i + 1);
  };
  return iter([], 0);
};

const getData = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomInt(0, lengthOfProgression - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  const question = progression
    .map((item, index) => (index === hiddenElementIndex ? '..' : item)).join(' ');
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?.';

export default () => core(description, getData);

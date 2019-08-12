import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import core from '..';

const lengthOfProgression = 10;
const diff = getRandomInt(1, 3);
const hiddenElementIndex = getRandomInt(0, lengthOfProgression - 1);
const startElement = getRandomInt(1, 20);

const getProgression = () => {
  const iter = (range, i) => {
    if (range.length === lengthOfProgression) {
      /* const progression = range.join(' ');
      const hiddenElement = range[hiddenElementIndex];
      return progression.replace(hiddenElement, '..'); */
      return range;
    }
    const nextElement = startElement + diff * i;
    return iter([...range, nextElement], i + 1);
  };
  return iter([], 0);
};

  /* const getProgressionAnswer = (start, step, i) => start + step * i;
const arr = progression.split(' ');
  const indexHidden = arr.indexOf('..');
  const result = start + diff * step;
  if (indexHidden !== 0 && indexHidden !== 9) {
    const sum = Number(arr[indexHidden - 1]) + Number(arr[indexHidden + 1]);
    return sum / 2;
  }
  const step = Number(arr[2]) - Number(arr[1]);
  return (indexHidden === 0) ? Number(arr[1]) - step : Number(arr[8]) + step;

}; */

const getData = () => {
  const progression = getProgression();
  const correctAnswer = progression[hiddenElementIndex];
  const question = progression
    .map((item, index) => (index === hiddenElementIndex ? '..' : item)).join(' ');
  /*
  const correctAnswer = toString(getProgressionAnswer(startElement, diff, hiddenElementIndex)); */
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?.';

export default () => core(description, getData);

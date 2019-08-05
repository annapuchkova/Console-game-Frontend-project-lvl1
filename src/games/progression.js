import { cons } from '@hexlet/pairs';
import getRandomInt from '../maths';
import core from '..';

const getProgression = () => {
  const hiddenNumIndex = getRandomInt(0, 9);
  const start = getRandomInt(1, 20);
  const commonDiff = getRandomInt(1, 3);
  const lengthOfProgression = 10;
  const iter = (range, step, maxLen) => {
    if (range.length === maxLen) {
      const str = range;
      const newSrt = str.toString(' ').replace(/,/g, ' ');
      const re = range[hiddenNumIndex];
      return newSrt.replace(re, '..');
    }
    const nextNum = start + commonDiff * range.length;
    return iter([...range, nextNum], step, maxLen);
  };
  return iter([start], commonDiff, lengthOfProgression);
};

const getProgressionAnswer = (progression) => {
  const arr = progression.split(' ');
  const indexHidden = arr.indexOf('..');
  if (indexHidden !== 0 && indexHidden !== 9) {
    const sum = Number(arr[indexHidden - 1]) + Number(arr[indexHidden + 1]);
    return sum / 2;
  }
  const step = Number(arr[2]) - Number(arr[1]);
  return (indexHidden === 0) ? Number(arr[1]) - step : Number(arr[8]) + step;
};

export const getDataForProgression = () => {
  const question = `${getProgression()}`;
  const correctAnswer = getProgressionAnswer(question);
  return cons(question, `${correctAnswer}`);
};

const rule = 'What number is missing in the progression?.\n';

export default () => core(rule, getDataForProgression);
import { cons } from '@hexlet/pairs';
import { greeting, sayHello } from '../greeting';
import { getProgression, progressionAnswer } from '../maths';
import core from '..';

export const getPairCalc = () => {
  const question = `${getProgression()}`;
  const correctAnswer = progressionAnswer(question);
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => {
  greeting();
  const rule = 'What number is missing in the progression?.\n';
  console.log(rule);
  const name = sayHello();
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const pair = getPairCalc();
    const result = core(name, pair);
    if (!result) {
      return questions(counter + 1);
    }
    return undefined;
  };
  return questions(1);
};

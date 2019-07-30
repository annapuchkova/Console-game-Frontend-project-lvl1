import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../maths';
import { greeting, sayHello } from '../greeting';
import core from '..';

export const getPairCalc = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  greeting();
  const rule = 'Answer "yes" if number even otherwise answer "no".\n';
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

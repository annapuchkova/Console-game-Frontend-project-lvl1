import { cons } from '@hexlet/pairs';
import { greeting, sayHello } from '../greeting';
import { getRandomInt, checkSimple } from '../maths';
import core from '..';

export const getPairCalc = () => {
  const firstNumber = getRandomInt(1, 47);
  const question = `${firstNumber}`;
  const correctAnswer = checkSimple(firstNumber);
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => {
  greeting();
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
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

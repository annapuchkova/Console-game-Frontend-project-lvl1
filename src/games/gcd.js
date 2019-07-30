import { cons } from '@hexlet/pairs';
import { greeting, sayHello } from '../greeting';
import { getGCD, getRandomInt } from '../maths';
import core from '..';

export const getPairCalc = () => {
  const firstNumber = getRandomInt(1, 10);
  const secontNumber = getRandomInt(1, 10);
  const question = `${firstNumber} ${secontNumber}`;
  const correctAnswer = getGCD(firstNumber, secontNumber);
  return cons(question, correctAnswer);
};

export default () => {
  greeting();
  const rule = 'Find the greatest common divisor of given numbers.\n';
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

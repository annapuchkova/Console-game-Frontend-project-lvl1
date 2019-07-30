import { cons } from '@hexlet/pairs';
import { greeting, sayHello } from '../greeting';
import { getRandomInt, ops, actionMap } from '../maths';
import core from '..';

export const getPairCalc = () => {
  const firstNumber = getRandomInt(1, 10);
  const secontNumber = getRandomInt(1, 10);
  const operator = ops[getRandomInt(0, 2)];
  const question = `${firstNumber} ${operator} ${secontNumber}`;
  const correctAnswer = actionMap[operator](firstNumber, secontNumber);
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => {
  greeting();
  const rule = 'What is the result of the expression?.\n';
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

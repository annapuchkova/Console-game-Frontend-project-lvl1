import readlineSync from 'readline-sync';
import { getProgression, progressionAnswer, getGCD } from './maths';
import checkSimple from './checkSimple';
import { getRandomInt, ops, actionMap } from './randoms';
import rules from './rules';
import greeting from './greeting';
import sayHello from './sayHello';
import { cons, car, cdr, toString } from '@hexlet/pairs';

export default (rule, expected) => {
  greeting();
  console.log(rule);
  const name = sayHello();
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    /*const firstNumber = getRandomInt(1, 47);
    const secontNumber = getRandomInt(1, 47);
    const operator = ops[getRandomInt(0, 2)];
    const question = {
      even: `${firstNumber}`,
      calc: `${firstNumber} ${operator} ${secontNumber}`,
      gcd: `${firstNumber} ${secontNumber}`,
      progression: `${getProgression()}`,
      prime: `${firstNumber}`,
    };*/
    /*
    const correctAnswer = {
      even: (question[gameType] % 2 === 0) ? 'yes' : 'no',
      calc: actionMap[operator](firstNumber, secontNumber),
      gcd: getGCD(firstNumber, secontNumber),
      progression: progressionAnswer(question[gameType]),
      prime: checkSimple(firstNumber),
    };*/
    console.log(`Question: ${car(expected)}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (toString(cdr(expected)) === actualAnswer) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${actualAnswer}" is wrong answer ;(. Correct answer was "${cdr(expected)}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};

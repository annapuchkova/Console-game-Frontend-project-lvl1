import readlineSync from 'readline-sync';
import { getRandomInt, ops, actionMap } from '../randoms';
import greeting from '../greeting';
import sayHello from '../sayHello';


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
    const firstNumber = getRandomInt(1, 10);
    const secontNumber = getRandomInt(1, 10);
    const operator = ops[getRandomInt(0, 2)];
    const question = `${firstNumber} ${operator} ${secontNumber}`;
    const correctAnswer = actionMap[operator](firstNumber, secontNumber);
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === actualAnswer) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};

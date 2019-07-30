import readlineSync from 'readline-sync';
import { getRandomInt } from '../randoms';
import { getGCD } from '../maths';
import greeting from '../greeting';
import sayHello from '../sayHello';


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
    const firstNumber = getRandomInt(1, 10);
    const secontNumber = getRandomInt(1, 10);
    const question = `${firstNumber} ${secontNumber}`;
    const correctAnswer = getGCD(firstNumber, secontNumber);
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

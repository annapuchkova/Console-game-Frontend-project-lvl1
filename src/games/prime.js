import readlineSync from 'readline-sync';
import { getRandomInt } from '../randoms';
import checkSimple from '../checkSimple';
import greeting from '../greeting';
import sayHello from '../sayHello';


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
    const firstNumber = getRandomInt(1, 10);
    const question = `${firstNumber}`;
    const correctAnswer = checkSimple(firstNumber);
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

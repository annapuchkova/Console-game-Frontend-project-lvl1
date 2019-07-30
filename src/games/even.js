import readlineSync from 'readline-sync';
import { getRandomInt } from '../randoms';
import greeting from '../greeting';
import sayHello from '../sayHello';


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
    const question = getRandomInt(1, 100);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === actualAnswer) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};

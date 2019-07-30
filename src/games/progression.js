import readlineSync from 'readline-sync';
import { getProgression, progressionAnswer } from '../maths';
import greeting from '../greeting';
import sayHello from '../sayHello';


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
    const question = `${getProgression()}`;
    const correctAnswer = progressionAnswer(question);
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

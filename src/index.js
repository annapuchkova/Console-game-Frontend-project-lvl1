import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (counter) => {
    if (counter > roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const roundData = getRoundData();
    const question = car(roundData);
    const correctAnswer = cdr(roundData);
    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === actualAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    }
    console.log(`\n"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
  };
  iter(1);
};

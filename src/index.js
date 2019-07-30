import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';


export default (userName, param) => {
  console.log(`Question: ${car(param)}`);
  const actualAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(cdr(param));
  if (correctAnswer === actualAnswer) {
    console.log('Correct!');
    return false;
  }
  console.log(`\n"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return true;
};

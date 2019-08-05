import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';


export default (rule, questionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const rounds = (roundNumber) => {
    if (roundNumber > 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const nextQuestionAndAnswer = questionAndCorrectAnswer();
    const question = car(nextQuestionAndAnswer);
    const correctAnswer = cdr(nextQuestionAndAnswer);

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === actualAnswer) {
      console.log('Correct!');
      rounds(roundNumber + 1);
    } else {
      console.log(`\n"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  rounds(1);
};

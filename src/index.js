import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const totalRounds = 3;

const congratulate = name => console.log(`Congratulations, ${name}!`);

const askAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const sayCorrect = () => console.log('Correct!');

const sayPity = (actualAnswer, correctAnswer, name) => {
  console.log(`\n"${actualAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

const greeting = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
};

const sayHello = name => console.log(`Hello, ${name}!\n`);

export default (rule, questionAndCorrectAnswer) => {
  greeting(rule);

  const name = readlineSync.question('May I have your name? ');
  sayHello(name);

  const playRounds = (roundNumber) => {
    if (roundNumber > totalRounds) {
      return congratulate(name);
    }
    const nextQuestionAndAnswer = questionAndCorrectAnswer();
    const question = car(nextQuestionAndAnswer);
    const correctAnswer = cdr(nextQuestionAndAnswer);

    const actualAnswer = askAnswer(question);

    if (correctAnswer === actualAnswer) {
      sayCorrect();
      return playRounds(roundNumber + 1);
    }
    return sayPity(actualAnswer, correctAnswer, name);
  };
  playRounds(1);
};

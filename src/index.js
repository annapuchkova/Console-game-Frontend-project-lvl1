/*
import readlineSync from 'readline-sync';
import greeting from './greeting';
import sayHello from './sayHello';

export default (rule, expected) => {
  greeting();
  console.log(rule);
  const name = sayHello();
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
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
*/

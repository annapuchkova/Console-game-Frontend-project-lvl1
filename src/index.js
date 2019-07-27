import readlineSync from 'readline-sync';
import { getProgression, progressionAnswer } from './progression';
import { getRandomInt, ops, actionMap } from './randoms';
import rules from './rules';
import greeting from './greeting';
import sayHello from './sayHello';
import { getGCD } from './getGCD';

export default (gameType) => {
  greeting();
  console.log(rules[gameType]);
  const name = sayHello();
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const firstNumber = getRandomInt(1, 47);
    const secontNumber = getRandomInt(1, 47);
    const operator = ops[getRandomInt(0, 2)];
    const question = {
      even: `${firstNumber}`,
      calc: `${firstNumber} ${operator} ${secontNumber}`,
      gcd: `${firstNumber} ${secontNumber}`,
      progression: `${getProgression()}`,
    };
    const correctAnswer = {
      even: (question[gameType] % 2 === 0) ? 'yes' : 'no',
      calc: actionMap[operator](firstNumber, secontNumber),
      gcd: getGCD(firstNumber, secontNumber),
      progression: progressionAnswer(question[gameType]),
    };
    console.log(`Question: ${question[gameType]}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(correctAnswer[gameType])) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer[gameType]}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};

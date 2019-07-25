import readlineSync from 'readline-sync';

const rules = {
  even: 'Answer "yes" if number even otherwise answer "no".\n',
  calc: 'What is the result of the expression?\n',
};

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
const ops = ['+', '-', '*'];
const firstNumber = getRandomInt(1, 10);
const secontNumber = getRandomInt(1, 10);
const operator = ops[getRandomInt(0, 2)];



export default (gameType) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules[gameType]);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const firstNumber = getRandomInt(1, 10);
    const secontNumber = getRandomInt(1, 10);
    const operator = ops[getRandomInt(0, 2)];
    const question = {
      'even': `${firstNumber}`,
      'calc': `${firstNumber} ${operator} ${secontNumber}`,
    };
    const correctAnswer = {
      'even': (question[gameType] % 2 === 0) ? 'yes' : 'no',
      'calc': eval(question[gameType]),
    };
    console.log(`Question!!!: ${question[gameType]}`);
    const answer = readlineSync.question('Your answer: ');
    console.log('zzz ' + correctAnswer[gameType] + ' fff');
    if (answer == correctAnswer[gameType]) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer[gameType]}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};



/*

export const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?.\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const firstNumber = getRandomInt(1, 10);
    const secontNumber = getRandomInt(1, 10);
    const operator = ops[getRandomInt(0, 2)];
    const question = `${firstNumber} ${operator} ${secontNumber}`;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = eval(question);
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};
*/
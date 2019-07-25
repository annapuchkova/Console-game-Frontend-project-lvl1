import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
const ops = ['+', '-', '*'];

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
const rules = {
  even: 'Answer "yes" if number even otherwise answer "no".\n',
  calc: 'What is the result of the expression?'
};

export const game = (gameType) => {
  greeting();
  console.log(rules.gameType);
  const name = sayHello();
  const questions = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const randomNumber = getRandomInt(1, 20);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      return questions(counter + 1);
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return questions(1);
};
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

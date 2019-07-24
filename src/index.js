import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
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

#!/usr/bin/env node

//import { greeting, sayHello } from '..';
import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
  };
const sayHello = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    return userName;
  };

greeting();
sayHello();

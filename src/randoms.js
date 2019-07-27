
export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
export const ops = ['+', '-', '*'];
export const actionMap = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

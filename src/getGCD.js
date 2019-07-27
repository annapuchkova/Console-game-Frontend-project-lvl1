
export const getGCD = (n1, n2) => ((!n2) ? n1 : getGCD(n2, n1 % n2));

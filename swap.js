// swap two numbers
let number1 = 3;
let number2 = 7;

// sol 1
const tempNum = number1;
number1 = number2;
number2 = tempNum;

console.log(number1, number2);

// sol 2
[number1, number2] = [number2, number1];

console.log(number1, number2);

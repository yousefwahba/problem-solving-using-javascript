// Write function that take n as paramter and sum from 1 to n
// write function that sum all number between 1 to n

//sol 1
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(5));

//sol 2
function sumToN(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sumToN(5));

// find factorial

// sol 1
function factorial(n) {
  let fac = 1;
  for (let i = n; i >= 1; i--) {
    fac *= i;
  }
  return fac;
}

console.log(factorial(5));

//sol 2
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

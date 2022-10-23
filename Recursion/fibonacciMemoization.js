//method 2 :recursion, store
//time complexity o(n)  //space complexity o(n)
function fib(n) {
  //base case
  let obj = { 0: 0, 1: 1 };
  if (n in obj) {
    return obj[n];
  } else {
    obj[n] = fib(n - 1) + fib(n - 2);
    return obj[n];
  }
}
console.log(fib(8));

//iteration method
//space complexity o(1) //time complexity o(n)
function fib(n) {
  let count = 1,
    pre = 0,
    curr = 1,
    next;
  while (count < n) {
    next = pre + curr;
    count++;
    pre = curr;
    curr = next;
  }
  return curr;
}
console.log(fib(8));

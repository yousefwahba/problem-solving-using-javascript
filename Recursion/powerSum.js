//Power Sum - Let’s define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to it’s equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2

// [1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2
//time complexity o(N) where N is all elements in all array
//space complexity o(d) d= max depth of call stack
function powerSum(array, power = 1) {
  let sum = 0;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      sum += powerSum(element, power + 1);
    } else {
      sum += element;
    }
  });
  return Math.pow(sum, power);
}
let arr = [1, 2, [3, 4], [[2]]];
console.log(powerSum(arr));

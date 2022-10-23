// Two Sum - You are given an array of Integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

//sol1
//val=14 [1,3,7,4,5,6,7]
//brute force solution //time complexity o(n power 2) space complexity o(1)
function twoSum(array, val) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (val == array[i] + array[j]) {
        return [i, j];
      }
    }
  }
}
let arr = [1, 3, 7, 4, 5, 6, 7];
//console.log(twoSum(arr, 5));

//sol2
//time complexity o(n) //space complexity o(n)
function findIndicesSumGiven(array, targetValue) {
  const hashTable = {};
  let neededValue;
  for (let i = 0; i < array.length; i++) {
    neededValue = targetValue - array[i];
    if (neededValue in hashTable) {
      return [i, hashTable[neededValue]];
    } else {
      hashTable[array[i]] = i;
    }
  }
  return [];
}

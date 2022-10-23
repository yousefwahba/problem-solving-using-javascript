// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

//check if it not monotonicIncreasing or Md
let arr = [1, 3, 4, 5, 5, 6];
function monotonicArray(array) {
  let first = array[0];
  let last = array[array.length - 1];

  if (first > last) {
    for (let i = 0; i < array.length - 1; i++) {
      //non increasing
      if (array[i + 1] > array[i]) return false;
    }
  } else if (last > first) {
    for (let i = 0; i < array.length - 1; i++) {
      //non decreasing
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      //all number must be same
      if (array[i + 1] != array[i]) return false;
    }
  }
  return true;
}
console.log(monotonicArray(arr));

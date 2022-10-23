//Rotate Array - Given an array, rotate the array to the right by k steps, where k is non-negative.

//ex [1,2,3,4,5,6,7] k=2   sol = [6,7,1,2,3,4,5]

//first solution
//time complexity o(k) space complexity o(n)  //slice o(k)
function rotateArray(array, k) {
  let length = array.length;
  k = k % length;
  let temp = array.slice(length - k);
  let temp2 = array.slice(0, length - k);
  let res = [...temp, ...temp2];
  return res;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
// rotateArray(arr, 4);

//second solution
//brute force   //time complexity o(n) //space complexity o(n)
const rotateArray2 = function (array, k) {
  const length = array.length;
  k = k % length;
  const temp = array.slice(length - k); // slice is O(k) where k = end - start
  for (let i = length - k - 1; i >= 0; i--) {
    array[i + k] = array[i];
  }
  for (let i = 0; i < k; i++) {
    array[i] = temp[i];
  }
  return array;
};

array = [1, 2, 3, 4, 5];
// rotateArray2(array,2);

//third solution
//time complexity o(n) //space complexity o(1)

const reverse = function (nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
const rotate = function (nums, k) {
  k = k % nums.length;
  //reverse all array
  reverse(nums, 0, nums.length - 1);
  //reverse first part of array
  reverse(nums, 0, k - 1);
  //reverse second part of array
  reverse(nums, k, nums.length - 1);
  return nums;
};
console.log(rotate(arr, 3));

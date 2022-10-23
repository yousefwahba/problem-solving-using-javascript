//problem
/*Container with most Water - You are given an integer array height of 
length n. There are n vertical lines drawn such that the two endpoints of 
the ith line are (i, 0) and (i, height[i]). Find two lines that together
with the x-axis form a container, such that the container contains the most
water(depth is constant across containers). Return the area(that the 2 lines
and the X axis make) of container which can store the max amount of water. 
Notice that you may not slant the container.
Notice that you may not slant the container. 
*/
//sol1
//brute force solution //time complexity o(n power 2) // space complexity o(1)
function getMaxWater(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const height = Math.min(array[i], array[j]);
      const width = j - i;

      max = Math.max(max, height * width);
    }
  }
  return max;
}
let arr = [3, 7, 5, 6, 8, 4];
// console.log(getMaxWater(arr));

//sol2
//time complexity o(n) //space complexity o(1)
function getMax(array) {
  let max = 0;
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let height = Math.min(array[i], array[j]);
    let width = j - i;
    max = Math.max(max, height * width);
    if (array[i] < array[j]) i++;
    else j--;
  }
  return max;
}

console.log(getMax(arr));

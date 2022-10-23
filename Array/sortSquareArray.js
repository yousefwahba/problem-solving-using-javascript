//You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

let arr = [-9, 0, 1, 2, 4, 5, 6];

//sol1
//brute force solution  space complexity o(n)  time complexity o(nlon(n))
function sortSquareArray(array) {
  //get array square then sorted it
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort((a, b) => a - b);
  return newArray;
}

//console.log(sortSquareArray(arr));

//sol2
//time complexity o(n)  //space complexity o(n)

function sortSquaredArray(array) {
  //pl pr
  //pl >pr add pl pl++
  //pl == pr add pl pl++
  //pl <pr add pr pr--
  let newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.pow(array[pointerLeft], 2) < Math.pow(array[pointerRight], 2)) {
      newArray[i] = Math.pow(array[pointerRight], 2);
      pointerRight--;
    } else {
      newArray[i] = Math.pow(array[pointerLeft], 2);
      pointerLeft++;
    }
  }
  return newArray;
}

console.log(sortSquaredArray(arr));

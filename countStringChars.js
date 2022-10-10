// abcda => {a: 2, b:1, c:1, d:1}

function countStringChars(str) {
  let obj = {};
  //convert string to arr
  str.split('').map((char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  });
  return obj;
}
console.log(countStringChars('yousefe'));

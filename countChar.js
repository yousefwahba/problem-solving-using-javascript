// Write function that take 2 params
// first paramter is string of one word
// second paramter is a character
// calculate the number of char that apper in the string

function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) count++;
  }
  if (count == 0) return 'char not found';
  return count;
}
console.log(countChar('hello world', 'i'));

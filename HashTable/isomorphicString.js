//Isomorphic Strings - Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.

//sol1
//time complexity o(n) //space complexity o(n)
function isomorphicString(string1, string2) {
  if (string1.length !== string2.length) return false;
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] in obj) {
      if (obj[string1[i]] !== string2[i]) return false;
      if (obj2[string2[i]] !== string1[i]) return false;
    } else {
      obj[string1[i]] = string2[i];
      obj2[string2[i]] = string1[i]; //to prevent repetition
    }
  }
  return true;
}

console.log(isomorphicString('aba', 'uup'));

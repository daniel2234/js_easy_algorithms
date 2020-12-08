// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

function penultimate(string) {
  // if(string.split('').length < 2 ) return true;
  let splitStr = string.split(' ');
  return splitStr[splitStr.length - 2];
}

// console.log(penultimate('four square'));
console.log(penultimate('four') === 'four');

console.log(penultimate('four square') === 'four');
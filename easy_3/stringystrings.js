// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
// 

function stringy(number) {
  let emptyString = ""
  for (let i = 1; i <= number; i++){
    if (i % 2 == 1) {
      emptyString += '1'
    } else {
      emptyString += '0'
    }
  }

  return emptyString;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
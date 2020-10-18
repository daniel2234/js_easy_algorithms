// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.


function shortLongShort(firstString, secondString) {
  if(firstString.length < secondString.length) {
    console.log(`${firstString + secondString + firstString}`)
  } else {
    console.log(`${secondString + firstString + secondString}`)
  }
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
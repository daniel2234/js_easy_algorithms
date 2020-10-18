


function asciiValue(string) {
  let sum = 0;
  for(let i = 0; i < string.length; i++){
    sum += string[i].charCodeAt()
  }
  return sum;
}

console.log(asciiValue('Four score'));
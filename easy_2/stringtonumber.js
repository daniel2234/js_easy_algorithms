function stringToInteger(number) {
  let outcome = [];
  for(let i = 0; i < number.length; i++) {
    outcome.push(number[i] * 1)
  }
  return Number(outcome.join(''))
}

stringToInteger("4321")
console.log(stringToInteger("4321") === 4321);
console.log(stringToInteger("570") === 570);
// figured it out will get back to it.


}
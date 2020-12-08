function multiply(first, second) {
  return first * second;
}

function square(number) {
  let result = multiply(number, number);
  return result;
}

console.log(square(5) == 25);
console.log(square(-8) === 64);
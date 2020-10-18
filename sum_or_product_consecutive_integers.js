// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let readline = require('readline-sync');

let enterInteger = readline.question('Please enter an integer greater than 0: ');

let inputChoice = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (inputChoice == 's') {
  let result = sumOfIntegers(enterInteger);
  console.log(`The sum of the integers between 1 and ${enterInteger} is ${result}.`);
}

if(inputChoice == 'p') {
  let result = productOfIntegers(enterInteger);
  console.log(`The sum of the integers between 1 and ${enterInteger} is ${result}.`);
}

function sumOfIntegers(integer) {
  let sum = 0;
  for (let i = 0; i <= integer; i++) {
    sum += i;
  }
  return sum;
}

function productOfIntegers(integer) {
  let product = 1;
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }
  return product;
}
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
let readline = require('readline-sync');

function prompt(string) {
  console.log('==> ' + string);
}

prompt('Enter the first number:');
let firstNumber = readline.question();

prompt('Enter the second number:');
let secondNumber = readline.question();


prompt(`${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`)
prompt(`${firstNumber} - ${secondNumber} = ${Number(firstNumber) - Number(secondNumber)}`)
prompt(`${firstNumber} * ${secondNumber} = ${Number(firstNumber) * Number(secondNumber)}`)
prompt(`${firstNumber} / ${secondNumber} = ${Math.round(Number(firstNumber) / Number(secondNumber))}`)
prompt(`${firstNumber} % ${secondNumber} = ${Number(firstNumber) % Number(secondNumber)}`)
prompt(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`)
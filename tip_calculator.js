let readline = require('readline-sync');

let billTotal = readline.question('What is the bill?');

let tipPercentage = readline.question('What is the tip percentage?');

let tipAmount = billTotal * 0.15

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${Number(billTotal) + Number(tipAmount)}`);
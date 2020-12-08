//write a function that will take a short line of text
//and write it to the console.log within a box


//-----------------------
//|                     |
//|                     |
//|       ${string}     |
//|                     |
//|                     |
//-----------------------
function logInBox(message) {

  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;



  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('');
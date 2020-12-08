// write a function that takes a string argument and returns a new string that contains the value of the original string with consecutive duplicate collapsed into a single character


function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

function double(test) {
  let original = '';
  for(let i = 0; i < test.length - 1; i++) {
    if(test[i] !== test[i + 1]) {
      original += test[i];
    }
  }

  return original;
}
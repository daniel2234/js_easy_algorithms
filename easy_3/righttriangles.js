//Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

//my attempt
function triangle(number){
  for (let i = 1; i <= number + 1; i++){
    let str = 'j'.repeat(number - 1);
    let str2 = '*'.repeat(i*1 - 1)
    console.log(str2)
  }
}


console.log(triangle(5));

    // *
  //  **
  // ***
//  ****
// *****



function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
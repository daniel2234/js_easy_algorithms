//convert number to string without toString, ''+number, String()

let DIGITS = ['0','1','2','3','4','5','6','7','8','9']

function numberToString(number){
  let result = ''
  do {
    let remainder = number % 10
    number = Math.floor(number / 10)

    result = DIGITS[remainder] + result
  } while (number > 0)

  return result

}


//alternate approach found
//all within requirements
function numberToString(number){
  let stringNumber = `${number}`
  return stringNumber
}
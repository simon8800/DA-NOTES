function printString(string) {
  if (string.length > 1) {
    console.log(string[0]);
    printString(string.substring(1));
  } else {
    console.log(string);
  }
}

function printStringReverse(string) {
  if (string.length > 1) {
    console.log(string[string.length-1]);
    printStringReverse(string.substring(0, string.length-1));
  } else {
    console.log(string);
  }
}

let x = 'hello there';
let y = 'hi';
let z = 'heyyeh';

function palindrome(string) {
  let l = string.length;

  if (l < 2) {
    return true;
  } else if (string[0] === string[l-1]) {
    return palindrome(string.substring(1, l-1))
  } else {
    return false;
  }
}
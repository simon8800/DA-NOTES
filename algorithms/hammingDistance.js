/*
Given integers x and y,
find the hamming distance between them.

Example:
x = 93
y = 73
Output: 2;
*/

var hammingDistance = function(x, y) {
  function euclideanAlgo(num) {
    let bits = []
    let quotient = num;
    while (quotient >= 1) {
      if (quotient != 1) {
        bits.unshift(quotient % 2)
        quotient = Math.floor(quotient / 2);
      } else {
        bits.unshift(1)
        quotient = 0;
      }
    }
    return bits;
  }
  
  function compareBits(arg1, arg2) {
    let counter = 0
    for (let i = 0, len = xBits.length; i < len; i++) {
      if (xBits[i] != yBits[i]) {
        counter++
      }
    }
    return counter;
  }
  
  let xBits = euclideanAlgo(x)
  let yBits = euclideanAlgo(y)
  if (xBits.length === yBits.length) {
    return compareBits(xBits, yBits);
  } else {
    if (xBits.length > yBits.length) {
      let zerosToAdd = xBits.length - yBits.length;
      while (zerosToAdd > 0) {
        yBits.unshift(0);
        zerosToAdd--
      }
    } else {
      let zerosToAdd = yBits.length - xBits.length;
      while (zerosToAdd > 0) {
        xBits.unshift(0);
        zerosToAdd--
      }
    }
    return compareBits(xBits, yBits)
  }
};

hammingDistance(93, 73);

// 93 => 1011101
// 72 => 1001001


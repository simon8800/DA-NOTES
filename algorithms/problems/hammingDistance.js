// The Hamming distance between two integers 
// is the number of positions at which the 
// corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2


// My shitty solution 

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

// kmjonmastro's solution (Javascript solution faster than 71.45% of Javascript submissions)

// var hammingDistance = function(x, y) {
//   let count = 0;
//   while(x > 0 || y > 0){
//       let remx = x % 2;
//       let remy = y % 2;
      
//       if (remx != remy) {            
//           count++;
//       }
      
//       x = Math.floor(x/2);
//       y = Math.floor(y/2);
//   }    
//   return count;
// };
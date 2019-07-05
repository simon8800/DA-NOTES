// N = 5

// 0, 1, -1, 2, -2

// N = 6

// 1, -1, 2, -2, -3, 3

// N = 7

// 1, -1, 2, -2, -3, 3, 0

// N = 8

// 1, -1, 2, -2, 3, -3, -4, 4

/* 
Given integer N where 0 < N < 100,
write a function that returns an array of 
N unique integers that add up to 0.
*/

function solution(N) {
  let arr = [];
  if (N % 2 !== 0) {
    arr.push(0);
    for (let i = 1; i <= (N - 1) / 2; i++) {
      console.log("even:", i);
      arr.push(i);
      arr.push(-i);
    }
  } else {
    for (let i = 1; i <= N / 2; i++) {
      console.log("even:", i);
      arr.push(i);
      arr.push(-i);
    }
  }
  return arr;
}

let N = 11;
console.log(solution(N));

# RECURSION

A function is recursive if it calls itself:

```javascript
// example from Learn.co

function sayDownFrom(n) {
  console.log(n)
  if (n > 1) {
    sayDownFrom(n-1)
  } else {
    return True
  }
}

sayDownFrom(5);
// 5
// 4
// 3
// 2
// 1
```

The part of the function that calls itself is the **recursive call**.

We can also see that the function has a stopping point, where `n` is no longer greater than 1. That is called the **base case**. Without a basecase, the function will call itself recursively forever until our program or computer crashes.

Recursion is great because we don't have to hold onto value in memory. It greatly reduces the memory space and time taken to perform its functionality.

## HOW DOES IT WORK?

Let's say we wanted a function for calculating the factorial of a number. 

```javascript
// factorial
function factorial(n) {
  if (n > 1) {
    return n * factorial(n-1)
  } else {
    return 1
  }
}

factorial(5)
// this is what happens going down the stack of calls
// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1

// now go up the stack of calls
// factorial(1) = 1
// factorial(2) = 2 * 1
// factorial(3) = 3 * (2 * 1)
// factorial(4) = 4 * (3 * (2 * 1))
// factorial(5) = 5 * (4 *(3 * (2 * 1)))
```
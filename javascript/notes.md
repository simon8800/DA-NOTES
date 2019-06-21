# NOTES FOR JAVASCRIPT

## HOISTING

[Good article explaining hositing](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

[Another great post for hoisting explanation](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6)

Here's an example I wrote that really helped me understand what it means when variables declared by `let` and `const` are hoisted.

```javascript
let x = "hello there"

function hoisterino() {
  console.log(x) // I expect "hello there"
  let x = "hello buddy"
  console.log(x) // I expect "hello buddy"
}

hoisterino();
```

I wrote in the comments what I expected. What ended up happening was this beautiful error message:
```bash
ReferenceError: Cannot access 'x' before initialization
```

This means that in the function `hoisterino`, x was hoisted to the top of that scope, so the first time I try to `console.log`, `x` is uninitialized and thus I get the ReferenceError.

Note that if it was `var x = "hello buddy"`, we would get something totally different. That is because a variable declared with `var` will be hoisted, declared, and initialized with `undefined`.

I leave it for the reader as an exercise to try it themselves. 

## ENGINE, COMPILER, SCOPE

[You Dont Know JS explanation about compiling and executing.](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md)

> Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution. -Kyle Simpson



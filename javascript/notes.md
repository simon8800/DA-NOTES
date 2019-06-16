# NOTES FOR JAVASCRIPT

## Hoisting

[Good article explaining hositing](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
[Another great post for hoisting explanation](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6)

Here's an example that really helped me understand what it means when variables declared by let and const are hoisted.

```javascript
let x = "hello there"

function hoisterino() {
  function hello() {
    console.log(x)
  }
  hello(); // I expect hello there
  let x = "hello buddy"
  hello(); // I expect hello buddy
}

hoisterino();
```

I wrote in the comments what I expected. What ended up happening was a beautiful error message.
```bash
ReferenceError: Cannot access 'x' before initialization
```

This means that in the function `hoisterino`, the x in that function `hoisterino` was hoisted to the top of that scope, so the first time I try to call `hello`, x is uninitialized and thus I get the ReferenceError.
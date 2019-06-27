# NOTES FOR JAVASCRIPT

## DECLARING WITH VAR

Remember, variables declared with `var` are function-scoped. So the following variable `i` is accessible outside the for-loop since that's only a block.

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i)
}
// 1
// 2
// ...
// ...
// ...
// 9
console.log(i) // 10
```

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

## BLOCK SCOPING

Example from 'You Don't Know JS':
```javascript
function process(data) {
	// do something interesting
}

var someReallyBigData = { .. };

process( someReallyBigData );

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );
```

`someReallyBigData` will stick around for a bit and take up memory space.

Using a block scope can help address that. It'll make it much clearer to the engine that we don't need to keep `someReallyBigData` around anymore:

```javascript
function process(data) {
	// do something interesting
}

// anything declared inside this block can go away after!
{
	let someReallyBigData = { .. };

	process( someReallyBigData );
}

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );
```

## DESTRUCTURING (ES6)

### OBJECT

```javascript
let myObj = {
	state: "New York",
	city: "Brooklyn",
	parks: ["Prospect Park"]
}

const { state } = myObj;
state // "New York"
```

### ARRAY

```javascript
let myArray = [
	'hello', 
	'there', 
	'my', 
	'good', 
	'friend']

const [greeting,,,goodie] = myArray;
greeting // 'hello'
goodie // 'good'
```

```javascript
// WITH REST OPERATOR (...)
// REST ELEMENT MUST BE LAST ELEMENT (in this case: anotherArray)
let myArray = [
	'hello', 
	'there', 
	'my', 
	'good', 
	'friend']

const [greeting, ...anotherArray] = myArray;

greeting // 'hello'
anotherArray // ['there', 'my', 'good', 'friend']
```

## FUNCTIONS

### toString

number.toString accepts 1 optional argument.

> Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36. - From w3school

```javascript
let num = 123
let n = num.toString(2) // "1111011"
```
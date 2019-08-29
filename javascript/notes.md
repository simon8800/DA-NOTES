# NOTES FOR JAVASCRIPT

A lot of these notes were found by doing [freecodecamp](https://www.freecodecamp.org/) and reading [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) and [Anthony Alicea's Udemy Course](https://www.udemy.com/user/anthonypalicea/).

## TABLE OF CONTENTS

- [Declaring with Var](#declaring-with-var)
- [Hoisting](#hoisting)

## DECLARING WITH VAR <a name="declaring-with-var"></a>

Remember, variables declared with `var` are function-scoped. So the following variable `i` is accessible outside the for-loop since that's only a block.

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// 1
// 2
// ...
// ...
// ...
// 9
console.log(i); // 10
```

## HOISTING <a name="hoisting"></a>

[Good article explaining hositing](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

[Another great post for hoisting explanation](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6)

Here's an example I wrote that really helped me understand what it means when variables declared by `let` and `const` are hoisted.

```javascript
let x = "hello there";

function hoisterino() {
  console.log(x); // I expect "hello there"
  let x = "hello buddy";
  console.log(x); // I expect "hello buddy"
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

## -----------ENGINE, COMPILER, SCOPE-----------

[You Dont Know JS explanation about compiling and executing.](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md)

> Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution. -Kyle Simpson

## -----------BLOCK SCOPING-----------

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

## -----------THIS-----------

Using `call()` will give a function context to what `this` is.

```javascript
function greet() {
  console.log(`Hi, I'm ${this.name}!`);
}

let me = { name: "Simon" };
greet.call(me);
```

### FUNCTIONS & `THIS`

If you want to refer to the function itself, you have to use the variable that points to the function. You cannot use `this` unless you provide context with `call()`.

```javascript
// wrong
function foo() {
  this.count++;
}
foo.count = 0;
foo();
foo.count; // 0
```

```javascript
// right
function foo() {
  foo.count++;
}
foo.count = 0;
foo();
foo.count; // 1

// another way with call
function foo() {
  this.count++;
}
foo.count = 0;
foo.call(foo);
foo.count; // 1
```

> `this` is not an author-time binding but a runtime binding -[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md)

### `bind()`

ES5 has a built-in function `bind()` that allows you to _hard-bind_ an object to a function.

```javascript
function foo() {
  console.log(this.a);
}
let obj = { a: 42 };
let objfoo = foo.bind(obj);
objfoo(); // 42
```

As of ES6, the hard-bound function created by `bind()` has a `.name` property which will show the original function it was derived from.

```javascript
function foo() {
  console.log(this.a);
}
let obj = { a: 42 };
let objfoo = foo.bind(obj);
objfoo.name; // bound foo
```

## -----------DESTRUCTURING (ES6)-----------

### OBJECT

```javascript
let myObj = {
  state: "New York",
  city: "Brooklyn",
  parks: ["Prospect Park"]
};

const { state } = myObj;
state; // "New York"
```

### ARRAY

```javascript
let myArray = ["hello", "there", "my", "good", "friend"];

const [greeting, , , goodie] = myArray;

greeting; // 'hello'
goodie; // 'good'
```

```javascript
// WITH REST OPERATOR (...)
// REST ELEMENT MUST BE LAST ELEMENT (in this case: anotherArray)
let myArray = ["hello", "there", "my", "good", "friend"];

const [greeting, ...anotherArray] = myArray;

greeting; // 'hello'
anotherArray; // ['there', 'my', 'good', 'friend']
```

## -----------FUNCTIONS-----------

### Number.toString

Number.toString accepts 1 optional argument.

> Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36. - From w3school

```javascript
let num = 123;
let n = num.toString(2); // "1111011"
```

## -----------DATA STRUCTURES-----------

### OBJECTS

`Object.hasOwnProperty(prop)` or `prop in Object` will return true or false depending on wether the object has or doesn't have that property.

```javascript
let myObj = { name: "Simon", laptop: "macbook" };

myObj.hasOwnProperty("name"); //=> true
myObj.hasOwnProperty("lastName"); //=> false

"name" in myObj; //=> true
"dog" in myObj; //=> false
```

## -----------RETURN WITH &&-----------

`&&` actually returns a value.
If the left side is falsy, the left side gets returned.
If the left side is truthy, the right side gets returned.

```javascript
"hello" && "jello"; //=> 'jello'

0 && "jello"; //=> 0

"jello" && false; //=> false
```

## -----------REGEX-----------

You can use Regular Expressions (regex) to find specific words in a string.

For example, if we're looking for the word 'bacon' in 'bacon pancakes', we can use regexes to check.

`.test` is a regex method that takes a string as an argument and checks if there are any matches. If there are, then it returns `true`, otherwise `false`.

```javascript
// need to use '/' to start a regex
// the following will only look for 'bacon', not 'Bacon', 'BACON', or anything else.
let myRegex = /bacon/;
let myString = "bacon pancakes";

myRegex.test(myString); // true
```

### OR

The example above is rigid since it only checks for that literal string. We can use the `OR` operator: `|` to check for different matches.

For example, I want to check if a string contains 'bacon', 'pork', or 'eggs'.

```javascript
let myRegex = /bacon|pork|eggs/;
let myString = "I really want eggs for breakfast today";

myRegex.test(myString); // true
```

### IGNORE CASE

What if the string was `'Bacon pancakes, making Bacon pancakes'`? We can use the `i` flag to ignore casing.

`i` meaning ignore.

```javascript
let myRegex = /bacon/i;
let myString = "Bacon pancakes, making Bacon pancakes";

myRegex.test(myString); // true
```

### EXTRACT MATCHES

`.match` is a string method to extract regex matches from a string. Pass the regex as argument. The return value is an array.

Example:

```javascript
let myRegex = /bacon/;
let myString = "bacon pancakes";

// get the first match
myString.match(myRegex); // ["bacon"]
```

You can find more than one match by using the `g` flag. You can have multiple regex flags. e.g. `/bacon/ig`

`g` meaning global search.

```javascript
let myRegex = /bacon/gi; // notice i and g flag
let myString = "Bacon pancakes, making Bacon pancakes";

myString.match(myRegex); // ["Bacon", "Bacon"]
```

### MATCH ANYTHING WITH WILDCARD

The wildcard lets you match any one character. The wildcard character is: `.` The wildcard is also called 'dot' and 'period'.

If you want any of the following words: hug, hum, hut, hue, and huh, you'd use: `/hu./` to match all of those.

```javascript
// example from freecodecamp
// match the words 'pun', 'sun', 'run', 'fun'
let myRegex = /.um/;
let myString = "what is going on with the sun?";

myString.match(myRegex); // ["sun"]
```

### MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES

Maybe you want 'hug' and 'hum', but not 'hue', 'hut', etc. You can match using `character classes`. Character classes let you define a group of characters you want to match by placing them in square brackets: `[` and `]`. e.g.,`/hu[gm]/`

Imagine you wanted to match a **range** of letters. That's a lot of characters to write. Instead, we can use a built-in feature to define a range in a `character set` (synonymous with character class). We do this by using the hypen character: `-`.

```javascript
// match all letters
let myRegex = /[a-z]/gi;
let myString = "yo what's really good?";

myString.match(myRegex); // ["y", "o", "w", ...]
```

### MATCH NUMBERS AND LETTERS OF THE ALPHABET

We can also use the `hypen` to match numbers. e.g., `/[0-5]/` will match any number between 0 and 5 inclusive.

It is also possible to combine a range of letters and numbers in a single character set.

e.g., `/[a-z0-9]`

### NEGATED CHARACTER SETS

You also may want to create a `character set` of characters you **don't** want to match. You can do so by using the `caret` character `^` after the bracket in a character set. i.e. `/[^a]/`

e.g., `/[^aeiou]/` will not match any vowels.

### REPEATED CHARACTERS

You may want to match characters that occur one or more times in a row. This means at least once, and may be repeated consecutively.

Use the `+` character.

```javascript
let myRegex = /s+/g;
let myString = "Mississippi";
myString.match(myRegex); // ["ss", "ss"]

let myOtherString = "Misisipi";
myOtherString.match(myRegex); // ["s", "s"]
```

Matching characters that occur zero or more times is also possible by using the asterisk character: `*`.

```javascript
let myRegex = /so*/g;
let myString = "sooooooo what's going on?";
myString.match(myRegex); // ["sooooooo"]

let myOtherString = "sun is up";
myOtherString.match(myRegex); // ["s", "s"]

let anotherString = "so what's good?";
anotherString.match(myRegex); // ["so"]
```

### LAZY MATCHING

Regular expressions that are `greedy` matches will find the longest possible substring that matches.

e.g., `/t[a-z]*i` will match `titani` from `titanic`.

If we wanted the shortest substring, that would be `lazy` matching . We can use the `?` character to change it to lazy matching.

e.g., `/t[a-z]*?i/` will match `ti` from `titanic`.

### MATCH BEGINNING STRING PATTERNS

We can also use regex to search for patterns in specific positions in strings.

Outside of `character sets`, the caret character `^` is used to search for patters at the beginning of a string.

```javascript
let myRegex = /^bacon/;
let myString = "bacon pancakes";
myRegex.test(myString); // true

let myOtherString = "making bacon pancakes";
myRegex.test(myOtherString); // false
```

### MATCH ENDING STRING PATTERNS

To search the end of strings, use the `dollar sign` characer: `$` at the end of the regex.

```javascript
let myRegex = /waddup$/;
let myString = "so waddup";

myRegex.test(myString); // true
```

### MATCH ALL LETTERS AND NUMBERS

We already know how to use `character sets` like `/[a-z]/`.

This `/[a-zA-Z0-9_]/` is the same as `/\w/`. The `\w` part is a shortcut. Note that this also includes the underscore character: `_`.

`w` meaning any word character.

```javascript
let myRegex = /\w/g;
let myString = "yo waddup 6ix9ine";

myString.match(myRegex).length; // 15
```

### MATCH ALL EXCEPT LETTERS AND NUMBERS

The opposite of `\w` is `\W`.

`\W` is the same as `/[^A-Za-z0-9_]/`.

```javascript
let myRegex = /\W/g;
let myString = "It's so cold!!";

myString.match(myRegex).length; // 5 (it counted white space as well)
```

### MATCH ALL NUMBERS

You can match all numbers using `\d`. `\d` is the same is `[0-9]`.

### MATCH ALL NONNUMBERS

The shortcut to nondigits is `\D` which is the same as `[^0-9]`.

### SEARCH FOR WHITESPACE

Use `\s` to search for whitespace in a string.

### SEARCH FOR NON-WHITESPACE

Use `\S` to search for non-whitespace characters in a string.

### SPECIFIY UPPER AND LOWER NUMBER OF MATCHES

We can use curly braces: `{}` as `quantity specifiers` which sets the upper and lower limit for the amount of characters. The first argument is the lower limit and second argument is the upper limit.

For example we only want the substring with `a` appearing 3 to 5 times. `/a{3,5}/`

### SPECIFY ONLY THE LOWER NUMBER OF MATCHES

Just omit the second argument. e.g., `/a{3,}/` will return a match of 3 or more `a`'s. Note: you must still have the comma to do this.

### SPECIFY EXACT NUMBER OF MATCHES

Only have one number in the curly braces (no comma) to specify the exact number of matches you want.

e.g., `/a{3}/` will return matches with exactly three `a`'s.

### CHECK FOR ALL OR NONE

Sometimes you have a word like 'color' or 'colour' and you want both. You can check for the existence of the character `u` using `?`.

e.g., `/colou?r/`

### POSITIVE AND NEGATIVE LOOKAHEAD

`Lookaheads` are patterns that tell JS to look-ahead in the string to check for patterns further along.

There are two kinds of `lookaheads`: `positive lookahead` and `negative lookahead`.

`Positive lookahead` will look to make sure the element in the search pattern is there, but won't actually match it. The syntax for `positive lookahead` is: `(?=...)` where `...` is the required part that is not matched.

Given `hello world` and you only want `hello` if `world` is present afterwards.

```javascript
let myRegex = /hello(?=\sworld)/;
let myString = "hello world";

myString.match(myRegex); // hello
```

`Negative lookahead` will look ahead and check to make sure the element in the search pattern is **not** there. The syntax is: `(?!...)` where `...` is the pattern you don't want to be there.

```javascript
let myString = "dragon ahead";
let myRegex = /dragon(?!\sahead)/;

myString.match(myRegex); // null
```

## ASYNCHRONOUS JAVASCRIPT

[Notes from Codecademy](https://www.codecademy.com/)

TLDR version of Asynchronous JavaScript: it allows you to perform more than one thing at once. You should [read this blog](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff) for a better understanding of Async JS.

### CREATING A PROMISE

We can create a new Promise object as follows:

```javascript
// a Promise object needs an executor function that has two parameters which will determine whether the promise has been resolved or rejected
let exectuor = (resolve, reject) => {
  if (someCondition) {
    resolve("what the promise returns if success"); // it is still a promise
  } else {
    reject("what the promise returns if rejected"); // still a promise
  }
};
let myPromise = new Promise(executor);
```

Remember to use the resolve or reject functions or the Promise will 5ever be pending.

### HANDLING RESOLVED OR REJECTED PROMISE

You can use the higher order function `.then()` which takes 0-2 callback functions. The first is a function to handle a resolved Promise and the second is a function to handle a rejected Promise.

```javascript
let myPromise = new Promise((resolve, reject) => {
  if (someCondition) {
    resolve("success!");
  } else {
    reject("no bueno :(");
  }
});

const handleSuccess = successValue => console.log(successValue);
const handleFailure = failValue => console.log(failValue);

// depending on what that someCondition is, here are the possible outcomes
myPromise.then(handleSuccess, handleFailure); // success!
myPromise.then(handleSuccess, handleFailure); // no bueno :(
```

It's nicer to have separation of concerns for handling success and failure. Luckily we have `.catch()` to help us. When there is an error, `.catch()` will run right after, bypassing all `.then()` that come before `.catch()`.

```javascript
// assume prom is a promise
prom
  .then(resolvedValue => {
    console.log(resolvedValue);
  })
  .catch(rejectedValue => {
    console.log(rejectedValue);
  });
```

Let's use `.then()` the way it's commonly used instead of just logging results. If we chain multiple `.then()`, we need to make sure that we `return` something in each one.

```javascript
prom
	.then(resolvedValue1 => {
		return doSomething(resolvedValue)
	})
	.then(resolvedValue2 => {
		// resolvedValue2 has the value of whatever the last .then returns
		console.log(resolvedValue2)
	})
	.catch(rejectedValue) => {
		console.log(rejectedValue);
	}
```

Notice that we chain `.then()` together instead of nesting them. It is the common practice to chain rather than nest. It is much easier to read and manage.

### CONCURRENT PROMISES

Sometimes we have more than one asynchronous process happening. We can use `Promise.all` to handle everything. It accepts an array of promises as an argument. i.e., `Promise.all([promise1, promise2, promise3])`

You can process `Promise.all` like any other promise. The return value is an array of resolved / rejected promises. If any of the promises in the array is rejected, the whole `Promise.all` is rejected.

## ASYNC...AWAIT

`async` and `await` are new keywords to help us write asynchronous JavaScript with easier to read and understand syntax. It provides the same functionality as the other way you know how to write async code, it is just syntactic sugar.

We use `async` to write functions that handle asychronous actions. We can just write whatever logic within that function and invoke it. The logic within is handled asynchronously.

```javascript
async function myFunc() {
  // Function body here
}

myFunc();
```

```javascript
// async function expressions (arrow function)
const myFunc = async () => {
  // Function body here
};
myFunc();
```

`async` functions always return a Promise, which means we can use `.then`, `.catch`, and `.finally`.

Three things that can go down depending on what's returned by the `async` function:

- If the function returns nothing, it will return a Promise with a resolved value of `undefined`.
- If there's a non-Promise value returned from the function, it will return a Promise resolved to that value.
- If there's a Promise value returned from the function, it will return just that Promise.

An `async` function is almost always accompanied with the `await` keyword inside it. The `await` keyword can only be used inside an `async` function and it is an operator. It returns the resolved value of a Promise.

Here's an example:

```javascript
// makeCoffee is a function that returns a Promise that resolves to the value of a random coffee drink
async function coffeeTime() {
  let coffee = await makeCoffee();
  console.log(`This ${coffee} is delicious!`);
}

coffeeTime(); // This frappe is delicious!
```

If you try calling `makeCoffee` without `await`, `coffee` will immediately be set the value of a pending Promise. **So don't forget!**

We can also use the `try` and `catch` block for error handling.

```javascript
async function makeCoffee() {
  try {
    let coffee = await makeCoffee();
    return coffee;
  } catch (error) {
    console.log(error);
    console.log("the coffee machine is broken or something");
  }
}
```

Also, don't forget we have `Promise.all()` to make asynchronous actions happen concurrently.

## SETS

[Notes from Colt Steele's Video](https://www.youtube.com/watch?v=4pRkrVwpLQo)

[Written notes from Colt Steele](https://www.notion.so/JavaScript-Sets-78e65b865ab747f79828e442f25653da)

Sets are a data structure that allows you to store a collection of _unique_ values.

Sets do not support random access, re-ordering and many other features that arrays do support.

To make a new set:

```javascript
// there is no shortcut syntax
const mySet = new Set();

// we can also pass in an iterable
new Set(["hello", "there"]); //=> Set(2) {"hello", "there"}

new Set("dog"); //=> Set(3) {"d", "o", "g"}
```

### ADD TO SETS

Add to sets with `add()`. i.e. `mySet.add(3)`.

If you try adding a duplicate value, it will be ignored. You can only add one value at a time to `add()`.

### CHECK SIZE OF SETS

Use the `size` property to determine the number of values stored in a set: `mySet.size`.

### CHECK FOR VALUES IN A SET

We are able to check if a set contains a given value using `has()`:

```javascript
const evens = new Set([2, 4, 5, 6, 8]);
evens.has(10); // false
```

### REMOVING VALUES FROM A SET

Use `delete()` to remove a single value from a set: `evens.delete(4)`. This will return `true` or `false`.

We can also use `clear()` to empty a set of all values: `evens.clear()`

### ITERATE THROUGH SETS

We can use the `for...of` loop to go through the values of a set:

```javascript
const evens = new Set([2, 4, 6, 8, 10]);
for (let val of evens) {
  console.log(val, "is even.");
}
```

### WHY USE SETS?

You can use sets to quickly grab unique values from an array:

```javascript
const evenArray = [2, 4, 6, 8, 10, 12, 2, 4];
const evenSet = new Set(evens); //=> Set(6) {2, 4, 6, 8, 10, 12}
```

When order doesn't matter. Remember you don't have random access, but you can check really quickly if your set contains a value with `has()`.

## PRIMITIVE TYPES

[Notes from Anthony Alicea's JavaScript Course](https://www.udemy.com/user/anthonypalicea/)

Here are the 6 primitive types in JavaScript:

- UNDEFINED
  - `undefined`: represents lack of existence (you can set a variable to this, but don't do it for sake of sanity)
- NULL
  - `null`: represents lack of existence (you can set a variable to this)
- BOOLEAN
  - `true` or `false`
- NUMBER
  - _Floating point_ number (there's awlays some decimals). Unlike other programming languages, there's only one 'number' type... and it can make math weird.
- STRING
  - a sequence of characters (both single and double quotes can be used)
- SYMBOL
  - Symbols act as unique object keys.

## OPERATOR

A special function that is syntactically (written) differently.

Generally, operators take two parameters and return one result.

How does the JavaScript engine do this:

```javascript
var a = 3 + 4;
console.log(a); // 7
```

An operator is actually a function that is in 'infix' notation. Infix just means that the operator is between the two parameters. Infix makes is very human readable. `3 + 4;`

Other types of notation are pre-fix `+3 4;` and post-fix `3 4+;`.

Common operators:

- `-`, `/`, `*`, `%`
- `>`, `<`, `<=`, `>=`, `==`, `===`

Operator precedence: which operator function gets called first. Function are called in order of precedence (HIGHER precedence wins).

Associativity (reference to operators): what order operator functions get called in: left-to-right or right-to-left. When functions have the **SAME** precedence.

You can find the [precedence and associativity for operators here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

Example of operator precedence:

```javascript
var a = 3 + 4 * 5;
console.log(a); // 23
```

What is actually happening in that line? Since `*` has a higher precendence than `+`, it will run first and return a value.

```javascript
var a = 3 + 20;
console.log(a);
```

and then finally,

```javascript
var a = 23;
console.log(a); // 23
```

Example of associativity:

```javascript
var a = 2,
  b = 3,
  c = 4;

a = b = c;

console.log(a, b, c); // 4 4 4
```

Why did they all take on the value of 4? The assignment operator `=` is read from right-to-left.

So what happens is:

```javascript
a = b = c; // c = 4
a = b = 4;
a = 4;
```

## COERCION

Coercion is the conversion of a value from one type to another. This happens often in JavaScript because it's dynamically typed.

What happens when you add a string and a number?

```javascript
var a = 1 + "2";
console.log(a); // 12
```

JavaScript engine coerces the number 1 into the string '1' and concatenates it with '2'.

## COMPARISON OPERATORS

What do you expect from the following?

```javascript
console.log(1 < 2 < 3);
```

<details>
<summary>Click here for answer</summary>
<p>

If you guessed `true`, then you'd be right.

<p>
</details>

What about this?

```javascript
console.log(3 < 2 < 1);
```

<details>
<summary>Click here for answer</summary>
<p>

This also returns `true`... Why?

This is because these operators are running left-to-right. Meaning this is what's happening

```javascript
3 < 2 < 1; // 3 < 2 => false
```

```javascript
false < 1; // => true
```

Why? Because `false` is coerced into the number 0. You can check by using `Number(false)`. `true` is coerced into 1.

Therefore, this is the result:

```javascript
console.log(3 < 2 < 1); // true
```

<p>
</details>

Coercion can prove to be useful in some cases, but more often than not it produced unexpected results and confusion.

JavaScript provides with the equality operator `==` and the strict equality operator `===`. The strict equality will not coerce values which makes it much more reliable.

```javascript
3 == "3"; // true
3 === "3"; // false
```

`===` is the go-to equality operator. The only time you use `==` is if you consciously know that you want the values to be coerced.

## EXISTENCE AND BOOLEANS

We can check what boolean a value is coerced to using `Boolean`.

```javascript
Boolean(null); // false
Boolean(""); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(undefined); // false

Boolean(1); // true
Boolean("hello"); // true
```

We can use coercion to our advantage.

```javascript
var a;
a = 123;

if (a) {
  console.log('a is not empty')
}

// 'a is not empty' is logged
```


```javascript
var a;

if (a) {
  console.log('a is not empty')
}

// nothing is logged here
```

## FIRST CLASS FUNCTIONS

Functions are objects (a very special type). 

Everything you can do with other types you can do with functions. We can assign them to variables, pass them around, create them on the fly.

A function can have a primitive, an object, a function, name, and code that is invocable.

## IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

Pronounced iffy.

An IIFE is kind of what it sounds like. It's a function that is invoked on the fly. Here's how to write one.

```javascript
(function(name) {
  let greeting = 'Hello there '
  console.log(greeting + name)
}('Jojo')) //=> Hello there Jojo
```

It's an anonymous function thats wrapped in parentheses and then invoked. The parentheses that invoke the function could be outside or inside the wrapper parentheses. This is a matter of your own stylistic choice. Pick one and be consistent.

```javascript
(function(param) {
  // body
})(arg)

(function(param) {
  // body
}(arg))
```

IIFEs create their own execution context and thus create safe code that won't collide with external variables.

## GOOD TO KNOW

- an *expression* returns a value.

## PROTOTYPE

All objects, including functions, have a prototype property. It's a reference to a property called `proto`. There is a prototype chain that contains hidden built-in methods and properties that an object looks when we try to access something we never set. For example,

```javascript
let myObj = {
  fname: 'Giorno',
  lname: 'Giovanna'
}

myObj.fname // this is a prop we set.

myObj.hasOwnProperty('fname') // hasOwnProperty is given to us by proto. We don't have to go myObj.__proto__.hasOwnProperty
```

You can even do something like this (don't ever do this though):

```javascript
let person = {
  fname: 'Default',
  lname: 'Default',
  getFullName: function() {
    return this.fname + ' ' + this.lname;
  }
}

let jojo = {
  fname: 'Jojo',
  lname: 'Joestar'
}

jojo.__proto__ = person;
jojo.getFullName() // Jojo Joestar <-- this is because jojo doesn't have the getFullName method, so it looks in the proto object
jojo.fname // Jojo <-- this is because the jojo object looks as its own props first
```

## BUILDING OBJECTS

```javascript
function Person() {
  
  this.firstname = 'John';
  this.lastname = 'Doe';

  console.log('This function is invoked');
}

const john = new Person(); // new is an operator that creates an empty object and then calls the function that adds properties and methods

console.log(john); // Person {fname, lname}
```

If we do not return anything in the function, a new object will be created. If we return an object, that will get in the way of constructing an object.

Example:

```javascript
function Person() {
  
  this.firstname = 'John';
  this.lastname = 'Doe';

  return {greeting: 'obstructed'};
}

const john = new Person();
console.log(john); // {greeting: 'obstructed'}
```

`this` in the function will point to a new empty object and that object is returned from the function automatically because of the `new` operator.


## FUNCTION CONSTRUCTORS AND PROTOTYPES

We can use the `.prototype` constructor for functions to create new properties and functions for objects that already exist.

For example:

```javascript
function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
} 

const jojo = new Person('Jojo', 'Joestar');
Person.prototype.getFullName = function() {
  return this.fname + ' ' + this.lname;
}

console.log(jojo.getFullName()); // Jojo Joestar
```

Why do we do prototypes? Why don't we just put methods in the Person function? This is because if we have methods in the funciton, on a new object creation, that object gets a copy of the method. So if we had 1000 objects, then there are 1000 copies of methods for each one.

It is much more efficient to create prototypes so only one copy is used.

Objects will go through their proto to find those methods. Much less memory space used.

## OBJECT.CREATE

```javascript
const person = {
  fname: 'Default',
  lname: 'Default',
  greet: function() {
    return 'Hi ' + this.fname;
  }
}

const jojo = Object.create(person); // creates an empty object with __proto__ being person.
console.log(jojo); // {}
console.log(jojo.fname); // Default

jojo.fname = 'Jojo';
console.log(jojo.fname); // Jojo
```

If the engine you're using does not have `Object.create` we have polyfill.

**Polyfill**: code that adds a feature which the engine *may* lack.

```javascript
// you would add this

if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
       + ' only accepts the first paramter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

## ES6 AND CLASSES

A class is still an object in JavaScript. Not the same as other programming languages.

```javascript
// this is an object
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + firstname;
  }
}

var john = new Person('Jojo', 'Joestar');
```

How do we make a `__proto__` for class? We use the keyword `extends`.

```javascript
class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return 'Yo ' + firstname;
  }
}
```

Class in JavaScript is just syntatic sugar for function constructions.

**Syntatic Sugar**: a different way to *type* something that doesn't change how it works under the hood.

## FIGURING OUT WHAT SOMETHING IS

JavaScript gives us some keywords to help us check what something is. 

First up, we have `typeof`

```javascript
var a = 3;
console.log(typeof a); // number

var b = 'Hello';
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object - not so helpful...
console.log(d.toString()); // ""
console.log(Object.prototype.toString.call(d)); // [object Array] - nice
```

We also have `instanceof`.

```javascript
function Person(name) {
  this.name = name;
}

var jojo = new Person('Jojo');
console.log(typeof jojo); // object
console.log(jojo instanceof Person); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object - comes from a bug that's too late to fix from super early verison of JS
```

## STRICT MODE

JavaScript is flexible and allows us to do a bunch of stuff. Sometimes this is not good for us when we have typos. For example the follow we have a variable `person` but we set `persom` to an object. It works just fine even though we didn't mean to do that. That makes this really tough to track down.

```javascript
var person;
persom = {};
console.log(persom); // {}
```

We can use strict mode which tells the JavaScript engine to implement strict rules. One of the rules is that you must declare a variable before using it. `"use strict"` is function scoped.

```javascript
"use strict";

var person;
persom = {};
console.log(persom); // error

function hello() {
  "use strict";
  var person;
  persom = {};
  console.log(persom); // error
}
```


# NOTES FOR JAVASCRIPT

A lot of these notes were found by doing [freecodecamp](https://www.freecodecamp.org/) and reading [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS).

## -----------DECLARING WITH VAR-----------

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

## -----------HOISTING-----------

[Good article explaining hositing](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

[Another great post for hoisting explanation](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6)

Here's an example I wrote that really helped me understand what it means when variables declared by `let` and `const` are hoisted.

```javascript
let x = "hello there";

function hoisterino() {
  console.log(x) // I expect "hello there"
  let x = "hello buddy";
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
function greet(){
	console.log(`Hi, I'm ${this.name}!`);
}

let me = {name: "Simon"}
greet.call(me);
```

### FUNCTIONS & `THIS`
If you want to refer to the function itself, you have to use the variable that points to the function. You cannot use `this` unless you provide context with `call()`.

```javascript
// wrong
function foo(){
	this.count++;
}
foo.count = 0;
foo();
foo.count // 0
```
```javascript
// right
function foo(){
	foo.count++;
}
foo.count = 0;
foo();
foo.count // 1

// another way with call
function foo(){
	this.count++
}
foo.count = 0;
foo.call(foo);
foo.count // 1
```

>`this` is not an author-time binding but a runtime binding -[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md) 

### `bind()`

ES5 has a built-in function `bind()` that allows you to *hard-bind* an object to a function.

```javascript
function foo(){
	console.log(this.a);
}
let obj = {a: 42};
let objfoo = foo.bind(obj);
objfoo(); // 42
```

As of ES6, the hard-bound function created by `bind()` has a `.name` property which will show the original function it was derived from.

```javascript
function foo(){
	console.log(this.a)
}
let obj = {a: 42};
let objfoo = foo.bind(obj);
objfoo.name // bound foo
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
let myArray = [
	'hello', 
	'there', 
	'my', 
	'good', 
	'friend'];

const [greeting,,,goodie] = myArray;

greeting; // 'hello'
goodie; // 'good'
```

```javascript
// WITH REST OPERATOR (...)
// REST ELEMENT MUST BE LAST ELEMENT (in this case: anotherArray)
let myArray = [
	'hello', 
	'there', 
	'my', 
	'good', 
	'friend'];

const [greeting, ...anotherArray] = myArray;

greeting; // 'hello'
anotherArray;// ['there', 'my', 'good', 'friend']
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
let myObj = {'name': 'Simon', 'laptop': 'macbook'};

myObj.hasOwnProperty('name'); //=> true
myObj.hasOwnProperty('lastName'); //=> false

'name' in myObj; //=> true
'dog' in myObj; //=> false
```

## -----------RETURN WITH &&-----------
`&&` actually returns a value.
If the left side is falsy, the left side gets returned.
If the left side is truthy, the right side gets returned.

```javascript
'hello' && 'jello'; //=> 'jello'

0 && 'jello'; //=> 0

'jello' && false; //=> false
```

## -----------REGEX-----------

You can use Regular Expressions (regex) to find specific words in a string.

For example, if we're looking for the word 'bacon' in 'bacon pancakes', we can use regexes to check.

`.test` is a regex method that takes a string as an argument and checks if there are any matches. If there are, then it returns `true`, otherwise `false`.

```javascript
// need to use '/' to start a regex
// the following will only look for 'bacon', not 'Bacon', 'BACON', or anything else.
let myRegex = /bacon/
let myString = 'bacon pancakes'

myRegex.test(myString) // true
```

### OR

The example above is rigid since it only checks for that literal string. We can use the `OR` operator: `|` to check for different matches.

For example, I want to check if a string contains 'bacon', 'pork', or 'eggs'.

```javascript
let myRegex = /bacon|pork|eggs/
let myString = 'I really want eggs for breakfast today'

myRegex.test(myString) // true
```

### IGNORE CASE

What if the string was `'Bacon pancakes, making Bacon pancakes'`? We can use the `i` flag to ignore casing.

`i` meaning ignore.

```javascript
let myRegex = /bacon/i
let myString = 'Bacon pancakes, making Bacon pancakes'

myRegex.test(myString) // true
```

### EXTRACT MATCHES

`.match` is a string method to extract regex matches from a string. Pass the regex as argument. The return value is an array.

Example:

```javascript
let myRegex = /bacon/
let myString = 'bacon pancakes'

// get the first match
myString.match(myRegex) // ["bacon"]
```

You can find more than one match by using the `g` flag. You can have multiple regex flags. e.g. `/bacon/ig`

`g` meaning global search.

```javascript
let myRegex = /bacon/ig // notice i and g flag
let myString = 'Bacon pancakes, making Bacon pancakes' 

myString.match(myRegex) // ["Bacon", "Bacon"]
```

### MATCH ANYTHING WITH WILDCARD 

The wildcard lets you match any one character. The wildcard character is: `.` The wildcard is also called 'dot' and 'period'.

If you want any of the following words: hug, hum, hut, hue, and huh, you'd use: `/hu./` to match all of those. 

```javascript
// example from freecodecamp
// match the words 'pun', 'sun', 'run', 'fun'
let myRegex = /.um/
let myString = 'what is going on with the sun?'

myString.match(myRegex) // ["sun"]
```

### MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES

Maybe you want 'hug' and 'hum', but not 'hue', 'hut', etc. You can match using `character classes`. Character classes let you define a group of characters you want to match by placing them in square brackets: `[` and `]`. e.g.,`/hu[gm]/`

Imagine you wanted to match a **range** of letters. That's a lot of characters to write. Instead, we can use a built-in feature to define a range in a `character set` (synonymous with character class). We do this by using the hypen character: `-`.

```javascript
// match all letters
let myRegex = /[a-z]/ig
let myString = "yo what's really good?"

myString.match(myRegex) // ["y", "o", "w", ...]
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
let myRegex = /s+/g
let myString = "Mississippi"
myString.match(myRegex) // ["ss", "ss"]

let myOtherString = "Misisipi"
myOtherString.match(myRegex) // ["s", "s"]
```

Matching characters that occur zero or more times is also possible by using the asterisk character: `*`.

```javascript
let myRegex = /so*/g
let myString = "sooooooo what's going on?"
myString.match(myRegex) // ["sooooooo"]

let myOtherString = "sun is up"
myOtherString.match(myRegex) // ["s", "s"]

let anotherString = "so what's good?"
anotherString.match(myRegex) // ["so"]
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
let myRegex = /^bacon/
let myString = "bacon pancakes"
myRegex.test(myString) // true

let myOtherString = "making bacon pancakes"
myRegex.test(myOtherString) // false
```

### MATCH ENDING STRING PATTERNS

To search the end of strings, use the `dollar sign` characer: `$` at the end of the regex.

```javascript
let myRegex = /waddup$/
let myString = "so waddup"

myRegex.test(myString) // true
```

### MATCH ALL LETTERS AND NUMBERS

We already know how to use `character sets` like `/[a-z]/`. 

This `/[a-zA-Z0-9_]/` is the same as `/\w/`. The `\w` part is a shortcut. Note that this also includes the underscore character: `_`.

`w` meaning any word character.

```javascript
let myRegex = /\w/g
let myString = 'yo waddup 6ix9ine'

myString.match(myRegex).length // 15
```

### MATCH ALL EXCEPT LETTERS AND NUMBERS

The opposite of `\w` is `\W`. 

`\W` is the same as `/[^A-Za-z0-9_]/`.

```javascript
let myRegex = /\W/g
let myString = "It's so cold!!"

myString.match(myRegex).length // 5 (it counted white space as well)
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

Given `hello world` and you only want `hello` if ` world` is present afterwards. 

```javascript
let myRegex = /hello(?=\sworld)/
let myString = "hello world"

myString.match(myRegex) // hello
```

`Negative lookahead` will look ahead and check to make sure the element in the search pattern is **not** there. The syntax is: `(?!...)` where `...` is the pattern you don't want to be there.

```javascript
let myString = "dragon ahead"
let myRegex = /dragon(?!\sahead)/

myString.match(myRegex) // null
```

## ASYNCHRONOUS JAVASCRIPT

### CREATING A PROMISE

We can create a new Promise object as follows:

```javascript
// a Promise object needs an executor function that has two parameters which will determine whether the promise has been resolved or rejected
let exectuor = (resolve, reject) => {
	if (someCondition) {
		resolve('what the promise returns if success') // it is still a promise
	} else {
		reject('what the promise returns if rejected') // still a promise
	}
}
let myPromise = new Promise(executor);
```

You can use the higher order function `.then()` which takes 0-2 callback functions. The first is a function to handle a resolved Promise and the second is a function to handle a rejected Promise.

```javascript
let myPromise = new Promise((resolve, reject) => {
	if (someCondition) {
		resolve('success!')
	} else {
		reject('no bueno :(')
	}
})

const handleSuccess = successValue => console.log(successValue);
const handleFailure = failValue => console.log(failValue);

// depending on what that someCondition is, here are the possible outcomes
myPromise.then(handleSuccess, handleFailure) // success!
myPromise.then(handleSuccess, handleFailure) // no bueno :(
```

It's nicer to have separation of concerns for handling success and failure. Luckily we have `.catch()` to help us. When there is an error, `.catch()` will run right after, bypassing all `.then()` that come before `.catch()`.

```javascript
// assume prom is a promise
prom
	.then(resolvedValue => {
		console.log(resolvedValue)
	})
	.catch(rejectedValue => {
		console.log(rejectedValue)
	})
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


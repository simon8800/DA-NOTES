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

You also may want to create a `character set` of characters you **don't** want to match. You can do so by using the `caret` character `^`. 

e.g., `/[^aeiou]/` will not match any vowels.
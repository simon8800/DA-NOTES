# LEARN AND UNDERSTAND NODEJS

Notes from [Anthony Alicea's Udemy Course](https://www.udemy.com/draft/461160/)
---
## TABLE OF CONTENTS

- [How do node modules work?](#how-do-node-modules-work)
- [JSON](#json)
- [Require more than one thing](#require-more-than-one)
- [exports vs module.exports](#exports-vs-module-exports)

---
## HOW DO NODE MODULES WORK? <a name="how-do-node-modules-work"></a>

If we create a function in a file, we can use `module.exports` to export it and make it available to any file that imports it. `module.exports` and `exports` are objects provided to us all the time by Node.

Export it like so:
```javascript
// greet.js
const greet = function() {
  console.log('Hello there buddy');
}

module.exports = greet;
```

Import it like so:
```javascript
// app.js
const greet = require('./greet');
greet(); //=> Hello there buddy
```


The V8 engine passes the path of `greet.js` into a function that creates a module out of `module.exports`. It checks the file type (that's why you don't have to do something like `require('./greet.js`). Then uses `fs` module to parse and compile the file. It checks for errors and if all is good, `require` returns `module.exports`. You then have access to the module in the file that required it.

To see this happen in real time, you can use a debugger and set a breakpoint at the `require` line and step into it. 

**Note:** Your code is actually WRAPPED by code from V8 engine. That's why you have access to things like `require`, `module.exports`, and whatever else that seems to be automagically provided to you. What you are writing is the body of an IIFE （・□・；）

## JSON <a name="json"></a>

JSON stands for JavaScript Object Notation. It is a standard for structuring data that is inspired by JavaScript Object Literals. JavaScript enginers are built to understand it.

JSON example:

```json
{
  "fname": "Jotaro",
  "lname": "Kujo",
  "stand": {
    "name": "Star Platinum",
    "abilities": ["Super Strength", "Super Speed", "Ora Ora Rush", "Star Finger"]
  }
}
```

**Note:** You can do `require('some-file.json')` and JavaScript will convert the json into an object!

## REQUIRE MORE THAN ONE THING <a name="require-more-than-one"></a>

If you have a bunch of code that are related but should be kept separate you can use this kind of file structure:

```
- greet
  - english.js
  - spanish.js
  - index.js
- app.js
```

```javascript
// english.js
const greet = function() {
  console.log('Hello!');
}

module.exports = greet;
```

```javascript
// spanish.js
const greet = function() {
  console.log('Hola!');
}

module.exports = greet;
```

```javascript
// index.js
const english = require('./english');
const spanish = require('./spanish');

module.exports = {
  english,
  spanish
}
```

Now you just `require('your-path-to-index.js')` from whichever files needs it. 

```javascript
// app.js
const greet = require('./greet/index')
greet.english(); //=> Hello
greet.spanish(); //=> Hola
```

## EXPORTS VS MODULE.EXPORTS <a name="exports-vs-module-exports"></a>

```javascript
exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);
```
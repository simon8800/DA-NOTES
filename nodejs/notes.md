# NODEJS

Notes from [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

- `node -v` checks your version of node.

## JAVSCRIPT ENGINES

- Computers do not understand JavaScript
- A JavaScript engine takes JavaScript, and converts it into something it does understand - machine code
- Node.js itself is written in C++
- At the heart of Node.js is the V* engine created by Google
- The V8 engine converts our JS into machine code

JavaScript -> Node.js -> V8 -> Machine Code

## MODULES

We can use functions from another file using `module.exports`.

Let's say we have a function `counter` in the file `count.js`. We can use it in another file by exporting it.
```javascript
// in count.js
const counter = function(arr){
  return `There are ${arr.length} elements in this array`;
}
// this will allow other files to use this function
module.exports = counter;
```

In another file, let's say `app.js`, we can `require` the function by locating the path to it.
```javascript
// in app.js

// we have to save the object that require returns to a variable in order to use it
const counter = require('./count');

console.log(counter([1,2,3,4,5])); // 'There are 5 elements in this array'
```

## MODULE PATTERNS

Suppose we have multiple modules we want to export. We have to remember that module.exports is just another object.

```javascript
// in modules.js
var counter = function(arr){
  return `There are ${arr.lenght} elements in this array`;
}

var adder = function(a,b){
  return `The sume of the 2 numbers is ${a+b}`;
}

var pi = 3.141592653589793;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// in app.js
// stuff is just the object module.exports
const stuff = require('./modules');
// now we can access each module like so:
const counter = stuff.counter;
const adder = stuff.adder;
const pi = stuff.pi;
```

Another way to do this is:
```javascript
module.exports.counter = function(arr){
  return ...
}

// etc.
```

Another way to do this is:
```javascript
module.exports = {
  counter: counter.
  adder: adder,
  pi: pi
}
```

## EVENT MODULE

```javascript
// requiring core modules built into node does not require a path
var events = require('events');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
  console.log(msg);
})

myEmitter.emit('someEvent', 'the event was emitted');
```

More cool stuff with `events` and `utils`.
```javascript
const events = require('events');
const util = require('util');

// const myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(msg){
//   console.log(msg);
// });
// myEmitter.emit('someEvent', 'someEvent was emitted');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(`${person.name} says ${msg}`);
  });
});

james.emit('speak', 'heyoooo');
```

## READING AND WRITING FILES

```javascript
const fs = require('fs');

// synchronous version of readFile. First parameter is the file to be read, second parameter is encoding it from binary
let readMe = fs.readFileSync('readMe.txt', 'utf8');
// this writes a file. first parameter is the new file, second parameter is the data
fs.writeFileSync('writeMe.txt', readMe);
```

```javascript
// asynchronous version
const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data){
  fs.writeFileSync('writeMe.txt', data);
});
```

## CREATING A SERVER

Use node's `http` module.

```javascript
const http = require('http');

const server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello fam');
})
server.listen(3000, '127.0.0.1');
console.log('server starting');
```

## BUFFERS AND STREAMS

### Buffers

- Temporary storage spot for a chunk of data that is being transferred from one place to another
- The buffer is filled with data, then passed along
- Transfer small chunks of data at a time

### STREAMS

Buffer collects small chunks of data from the whole data set. Once the buffer is full, data is passed to the **stream** where data is passed on and processed.

When we watch something on Netflix, we don't wait for the whole film to be processed before we can watch it. We wait for the chunks of the data to arrive and we watch that first. 

- Can create streams in Node.js to transfer data
- Increase performance

## STREAMS

- Writable streams - allow Node.js to write data to a stream
- Readable streams - allow Node.js to read data from a stream
- Duplex - can read and write to a stream

### READABLE STREAM 

```javascript
const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// everytime a chunk is received, it gets passed into the callback function
myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  console.log(chunk);
});
```

### WRITABLE STREAM

```javascript
const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  // write to stream everytime a chunk is received
  myWriteStream.write(chunk);
});
```

### PIPES

This does both reading and writing for us.

```javascript
const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// pipe() does both for us
myReadStream.pipe(myWriteStream);
```

## NPM

Using `npm init` creates a `package.json` file that tells other developers what dependencies your project needs. 

### INSTALLING AND UNINSTALL PACKAGES

Use `npm install package-name` to install your package.

According to [Al Gonzales](https://teamtreehouse.com/community/npm-uninstall-removes-dependency-in-json), at some point `npm install package-name` has the default behavior of saving dependenies, and `npm uninstall package-name` will also remove saved dependencies. To install without saving, use the `--no-save` flag. To uninstall without removing a saved dependency, use the `--no-save` flag.

### GOOD READS ON NPM

- [Everything you wanted to know about package-lock.json](https://blog.quigley.codes/everything-you-wanted-to-know-about-package-lock-json/?dr=https://medium.com/p/b81911aa8ab8)

- [When to install npm packages globally](https://flaviocopes.com/npm-packages-local-global/)

- [Best of npm install -g](https://hackernoon.com/the-best-of-npm-install-g-9ab9d749eeb1)

### COOL NPM PACKAGES

- [nodemon](https://www.npmjs.com/package/nodemon) helps you automatically restart your node application when file changes are made.

## EXPRESS

- Easy and flexible routing system
- Integrates with many templating engines
- Contains a middleware framework

```javascript
// use express
const express = require('express');

// fire up express and lets us access all its awesome features
const app = express();

// listen to port 3000
app.listen(3000);
```

```javascript
// send html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})
```

### EXPRESS: RESPONDING TO REQUESTS

- GET `app.get('route', fn)`
- POST `app.post('route', fn)`
- DELETE `app.delete('route', fn)`

### EXPRESS: ROUTE PARAMS

```javascript
// :id is dynamic
// access the param with req.params.paramName
app.get('/profile/:id', function(req, res){
  res.send('You requested to see a profile with the id of ' + req.params.id);
});
```

### TEMPLATE ENGINES

[EJS](https://ejs.co/) lets you serve up html with embedded JavaScript. Very similar to `.erb` files if you're familar with Sinatra or Ruby on Rails.

To use it in express, you need to let `app` know by invoking `set('view engine', 'ejs')` i.e., `app.set('view engine', 'ejs')`.

You need a folder called `views` and in there you can store `.ejs` files. In those `.ejs` files you can write html and embed javascript by using `<%= javascript here %>` to output something, and `<% javascript here %>` to evaluate something.

Super simple example:
```ejs
<html>
  <body>
    <ul>
      <% for (let i = 0; i < 5; i++) {%>
        <li>
          <%= 'This is loop number: ' + i %>
        </li>
      <%}%>
    </ul>
  </body>
</html>
```

I don't want to use node to serve html files, so my notes for this section ends here.

## RESTful API WITH NODE

Notes from [rwieruch](https://www.robinwieruch.de/minimal-node-js-babel-setup/)


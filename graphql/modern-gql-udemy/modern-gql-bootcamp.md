# THE MODERN GRAPHQL BOOTCAMP (W/NODE AND EXPRESS)

My notes from [Andrew Mead's Udemy Course](https://www.udemy.com/graphql-bootcamp/). Not paid or sponsored by this. I paid the full 12 bucks (• ε •).

## TABLE OF CONTENTS

- [Why GraphQL?](#why-graphql)
- [What is a Graph?](#what-is-a-graph)
- [GraphQL Queries](#queries)
- [Nested Queries](#nested-queries)
- [Babel Setup](#babel-setup)
- [ES6 IMPORT/EXPORT](#es6-import-export)
- [Creating a GraphQL API](#creating-graphql-api)
- [GraphQL Scalar Types](#graphql-scalar-types)

## WHY GRAPHQL? <a name="why-graphql"></a>

1. GraphQL is fast
2. GraphQL is flexible
3. GraphQL is easy to use and simple to maintain

GraphQL stands for 'Graph Query Language.' We are mostly familiar with using a RESTful API in which we make HTTP requests to predictable URLs. This is either limiting in what information is provided or too liberal in giving too much information than needed.

GraphQL allows us to make requests to get exactly what we want.

Example requests to a REST API:

```
// to get post details
GET /posts/123

// to get posts by an author
GET posts?author=1234

// to get post comments
GET posts/123/comments
```

Example requests to a GraphQL API:

```
// get all three in one request
POST /graphql
```

## WHAT IS A GRAPH? <a name="what-is-a-graph"></a>

**Note**: a type in GraphQL is analogous to entity/table and a field in GraphQL is analogous to attribute/column.

A type has fields.

Example of a graph with three types (figure from Andrew Mead's course):

![type and fields example](./assets/entity-example-1.png)

- There are three types here: User, Post, and Comment
- The User type has three fields: id, name, and age. Comment type has two, Post type has four
- A User **has many** Posts. A Post **belongs** to a User

## GRAPHQL QUERIES <a name="queries"></a>

Use this [GraphQL Playground](https://graphql-demo.mead.io/)

**Note**: remember there is only one end-point in GraphQL APIs so there's no need to change the URL.

Example query for playground: 

```
query {
  hello
}
```

This returns a response with JSON:

```
{
  "data": {
    "hello": "Hello World!"
    }
}
```

Another query:

```
query {
  hello
  courseInstructor
}
```

Response: 

```
{
  "data": {
    "hello": "Hello world!",
    "courseInstructor": "Andrew Mead"
  }
}
```

If you noticed, the playground autocompletes queries for you. This is because by nature all GraphQL APIs are self-documenting (pretty f'in amazing!). For REST APIs, there is usually someone who documents everything manually.

## NEST GRAPHQL QUERIES <a name="nested-queries"></a>

Use this [GraphQL Playground](https://graphql-demo.mead.io/)

The `me` type must have some subfields selected or else it will error out. We can use another set of curly braces to select the fields. If you click the schema tab and click `me`, you should see the available fields.

Query: 

```
query {
  hello
  course
  courseInstructor
  me {
    id
    name
  }
}
```

Response:

```
{
  "data": {
    "hello": "Hello world!",
    "courseInstructor": "Andrew Mead",
    "course": "GraphQL",
    "me": {
      "id": "79726ecd-84d5-4de7-bb9e-52fe3bfd9ef4",
      "name": "Andrew"
    }
  }
}
```

You might've noticed that the schema tab showed you something about the queries:

![playground schema](./assets/playground-schema.png)

The exclamation mark means that you will always get that datatype returned. For `hello`, you will always get a string. Without the exclamation mark, you could get a string or null.

For `users:[User!]!`, it means we will get an array of users and it will always be an array of users. We will never get an array with an item of null.

## SETTING UP BABEL <a name="babel-setup"></a>

[Babel](https://babeljs.io/) is a JavaScript compiler that transforms the modern JS syntax into browser-compatible JS. For example, when we use arrow functions IE10 cannot interpret it. Babel converts the arrow function into a standard function expression in the background so IE10 can understand what we're writing.

In the terminal (make sure you're in the project folder):

```bash
# set up a package.json file
# y flag uses the default settings
npm init --y 

# installing babel cli version 6.26.0 (gives a command to pass JS through babel) 
# and babel-preset-env version 1.7.0 (process import/export. tells Babel what to change)
npm install babel-cli@6.26.0 babel-preset-env@1.7.0
```

We then create the file `.babelrc` in the project folder where we can configure Babel. At the end of the day, it is just a JSON file. (Don't give it the json extension though.)

In `.babelrc`:

```json
{
  "presets": [
    "env"
  ]
}
```

Babel configured and ready to go.

Create a folder named `src` in the project folder and add the file `index.js` in it. Then in `package.json`, add to the scripts like so:

```json
{
  "name": "udemy-graphql",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

```

This script will pass `index.js` through the Babel compiler. In the terminal, this will run `index.js`:

```bash
npm start
```

## ES6 IMPORT/EXPORT <a name="es6-import-export"></a>

In node, we are used to using modules with `require('module-name')`. We can use ES6 syntax and Babel to use the new `import` and `export` features in node.

In a new file `myModule.js`:

```javascript
// Named export - Has a name. Have as many as needed.
// Default export - Has no name, You can only have one.
const message = "I'm a message from myModule.js!";

const name = "Jojo"

const lastName = "Joestar"

export { message, name, lastName as default };
```



In `index.js`:

```javascript
// grabbing named exports
import { message, name } from './myModule';
// grabbing default export
import myLastName from './myModule';
// can also do the following:
// import myLastName, { message, name } from './myModule'

console.log(message);
console.log(myLastName);
```

If you run `npm start` in the terminal, you'll see the message from `myModule.js`.

## CREATING A GRAPHQL API <a name="creating-graphql-api"></a>

We are going to use `graphql-yoga` to implement GraphQL in our Node application.

```bash
npm i graphql-yoga@1.16.7
```

In our `index.js` (clean file), we need to import some tools from `graphql-yoga`.

```javascript
import { GraphQLServer } from 'graphql-yoga';

// Type definition (schema)
const typeDefs = `
  type Query {
    hello: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    // must match the query
    hello() {
      return "This is my first query!";
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

// this starts the server and it's default to http://localhost:4000/
server.start(() => {
  console.log('The server is up!')
})
```

## GRAPHQL SCALAR TYPES <a name="graphql-scalar-types"></a>

In GraphQL we have a couple of scalar types that really means that it is a type meant to store 1 piece of information.

GraphQL comes with a set of default scalar types out of the box (from [GraphQL docs](https://graphql.org/learn/schema/)):

- `Int`: A signed 32-bit integer
- `Float`: A signed double-precision floating-point value
- `String`: A UTF-8 character sequence
- `Boolean`: `true` or `false`
- `ID`: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an `ID` signifies that it is not intended to be human‐readable.


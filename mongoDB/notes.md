# MongoDB

Notes from [MongoDB University](https://university.mongodb.com/).

- What is a cluster?
- What is a database?
- What is a collection?
- What is a document?
- What are indexes?

Schema analysis is based on a sample of documents.

## FILTERING DOCUMENTS

The MongoDB query langauge looks like JSON. `{"tripduration":{"$gte: 2000, $lt: 4000"}}`. The `$` signs are operators in MongoDB.


## Mongo Shell

[Mongo Shell Commands](https://docs.mongodb.com/manual/reference/mongo-shell/)

Connecting to MongoDB Atlas with v3.6+ connection string results in an error.

Select Mongo Shell v3.4 or earlier to get a different connection string. It worked for me.
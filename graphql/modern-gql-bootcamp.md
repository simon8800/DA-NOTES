# THE MODERN GRAPHQL BOOTCAMP (W/NODE AND EXPRESS)

[Notes from Andrew Mead's Udemy Course](https://www.udemy.com/graphql-bootcamp/). Not paid or sponsored by this. I paid the full 12 bucks.

## WHY GRAPHQL?

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
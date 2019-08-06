# GRAPHQL

Notes from [freecodecamp](https://www.youtube.com/watch?v=ed8SzALpx1Q)

## A RESTful APPROACH

- Endpoint for getting a particular book:

`domain.com/books/:id`: responds with title, genre, reviews, authorId.

- Endpoint for getting the author info of that book:

`domain.com/authors/:id`: responds with name, age, biography, booksIds.

## A GraphQL APPROACH

- Query to get book data and its author data (AND the other books): 
- Using one request to get ALL THE THINGS!
- Be selective on what you want returned.

```
{
  book(id: 123) {
    title
    genre
    reviews
    author {
      name
      bio
      books {
        name
      }
    }
  }
}
```
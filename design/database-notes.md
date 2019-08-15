# DATABASE NOTES

[Notes from freeCodeCamp](https://www.youtube.com/watch?v=ztHopE5Wnpc)

## WHAT IS A DATABASE MANAGEMENT SYSTEM (DBMS)?

- A DBMS allows us to create, read, update, and delete data.
- We can write queries to view data in a human-friendly way that is meaningful.
- In short: it allows us to communicate with our database.

## WHAT IS A RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)?

- It is a DBMS that allows us to make transactions 
  - Transactions: doing something with the data that either completes all the way or doesn't complete at all.
  - Example: transferring money in a bank system. If power goes out during a transfer, it will be as if nothing happened, rejecting the transfer.
- Examples of an RDBMS: 
  - mySQL
  - PostgreSQL
  - Oracle
  - a ton more
- Data is stored on a server that exists on your computer's hard drive or a cloud service.

## SQL

SQL is the language we use to communicate with a database. RDBMSystems use SQL but sometimes have their own flavor of it.

- SQL defines data (DDL - data definition language)
  - DDL gets the different types of data that exists in a table
- SQL manipulates data (DML - data manipulation language)
  - DML manipulates the data entry.

## DATABASE DESIGN

How do you measure database design? That has to do with **data integrity**.

Data integrity: Data that is up-to-date, no disconnects between tables that are related. No repeating data, no old data (unless you have an archive or something).

Example of data integrity problem: A customer has two address entries, one of them is inactive.

## TYPES OF SCHEMAS

This list goes from more general to more specific (top-to-bottom):

- Conceptual (How is the data related?)
- Logical (What are the attributes of this table?)
- Physical (What kind of RDBMS should we use? What kind of server? How are people going to access and use our data? Where this actual programming starts.)

## DATA INTEGRITY

- Entity integrity
  - Unique entities, usually given a unique ID.
- Referential integrity
  - If there is a relationship between two tables, the entry of one table should reflect the correct information of another entry in the other table.
  - Example: we have two tables, users and comments. User with ID 7 makes a comment with ID 12. User 7 is then deleted. Comment with ID 12 should now reflect that the user related to it is deleted. 
- Domain integrity
  - Domain means the acceptable values for a column.
  - e.g. a phone number in the US should have 10 digits. 
  - If the word 'cake' gets entered for a phone number, we have a domain integrity problem.
  - Some RDBMS may allow certain validation, but usually they only support validating data type.

## ATOMIC VALUE

Don't make ridiculous columns that should really be one column.

e.g. of really bad columns:

|first_letter_of_first_name|second_letter_of_first_name| third_letter_of_first_name|..._letter_of_first_name|
|---|---|---|---|
|s|i|m|...|

You get the point. 

You want to treat values that should be one thing as one column. An example of that would be a first name. 

An example where you would want to split data into more columns would be an address. An address consists of a street, city, state, zip code, and country. Each of these should be their own column so that we can make more complex and meaningful queries.


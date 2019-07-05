# NOTES ON SQL (Structured Query Language)

Notes taken from [w3school](https://www.w3schools.com/sql/sql_intro.asp).

## SELECT

`*` is used to `select` all fields/columns from a table.

```sql
SELECT * FROM Countries;
```

## WHERE

Use `WHERE` for a query with conditions
`SELECT * FROM Customers WHERE condition;`

For text, use quotation marks. If numeric, don't use quotes.
```sql
SELECT * FROM Countries WHERE Country='Germany';

SELECT * FROM Countries WHERE PostalCode=12209;
```

## AND, OR, NOT

`WHERE` clause can be combined with `AND`, `OR`, and `NOT` operators.

```sql
-- Selects from country if record has both country being Germany and city being Berlin.
SELECT column1, column2 FROM Countries WHERE Country='Germany' AND City='Berlin';

-- Selects from country if record has either Mexico or USA
SELECT column1 FROM Countries WHERE Country='Mexico' OR Country='USA';

-- Selects records where country isn't USA.
SELECT column3 FROM Countries WHERE NOT Country='USA';
```

## ORDER BY

The `ORDER BY` keyword is used to sort the result-set in ascending or descending order. `ORDER BY` sorts the records in **ascending order by default**.

```sql
SELECT column1 FROM table_name ORDER BY column1 ASC|DESC;
```

### ORDER BY SEVERAL COLUMNS

```sql
SELECT * FROM Customers ORDER BY Country, CustomerName;

SELECT * FROM Customers ORDER BY Country DESC, CustomerName ASC;
```

## INSERT INTO

`INSERT INTO` is used to insert a record in a table.

There are two ways to write the `INSERT INTO` statement.

First way includes listing the columns (make sure values are entered in the same order as the columns): 

```sql
INSERT INTO table_name (column1, column2, column3,...) VALUES (value1, value2, value3, ...);
```

Second way includes listing only values if you're filling every column:

```sql
INSERT INTO table_name VALUES (value1, value2, value3, ...);
```

## NULL

A field with `NULL` means that field has no value.

`NULL` is not `0`. 
`0` is still a value of 0. `NULL` is no value.

We can check for fields where the value is `NULL` with the `IS` operator:

```sql
SELECT column_names FROM table_name WHERE column_name IS NULL;
```

**w3school tip**: Always use `IS NULL` to look for `NULL` values.

Another example:

```sql
SELECT * FROM Customers WHERE PostalCode IS NOT NULL:
```

## UPDATE

It is important to use the `WHERE` operator since without it, all records will be updated. You want to specify a condition.

```sql
UPDATE table_name SET column1 = value, column2 = value, ... WHERE condition;
```

Common condition for selecting specific record uses the unique ID:

```sql
-- for example
UPDATE Customers SET ContactName = 'Frankie', City = 'Frankfurt' WHERE CustomerID = 1;
```

## DELETE

It's possible to delete all records without deleting the table:

```sql
DELETE FROM table_name;
-- example:
DELETE FROM customers;
```


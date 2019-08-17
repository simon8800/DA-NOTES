# MySQL

[Notes from Traversy Media](https://www.youtube.com/watch?v=9ylj9NR0Lcg)

## CREATE A TABLE

```sql
CREATE TABLE users(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(50),
  password VARCHAR(20),
  location VARCHAR(100),
  dept VARCHAR(100),
  is_admin TINYINT(1),
  register_date DATETIME,
  PRIMARY KEY(id)
);
```


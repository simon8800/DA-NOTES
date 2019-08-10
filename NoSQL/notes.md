# NoSQL

Notes from [Traversy Media](https://www.youtube.com/watch?v=uD3p_rZPBUQ)

## WHAT IS NoSQL?

- Stands for "NOT ONLY SQL"
- A **Non-Relational** database (No Tables)
- A flexible databased used for big data and real-time web apps
- Multiple types of NoSQL databases

## WHAT IS BIG DATA?

- A term for data sets that are so large that traditional methods of storage and processing are inadequate
- Massive increase in data volume within the last decade or so
- Social networks, search engines, etc
- Challenges in storage, capture, analysis, transfer, etc.

## ADVANTAGES OF NoSQL OVER RDBMS

- Handles Big Data
- Data Models - No predefined schema
  - In a traditional SQL database, you need to create columns along with the associated data type
- Data Structure - NoSQL handles unstructured data
- Cheaper to manage
  - Less need for multiple system admin
- Scaling - Scale out / horizontal scaling

Scaling vertically means that you need to add more power to the machine.

Scaling horizontally means that you add more machines.

## ADVANTAGES OF RDBMS OVER NoSQL

- Better for relational data
  - predictable data and data types
- Normalization
  - organizes data that eliminates redundancy
- Well known language (SQL)
- Data Integrity
- ACID Compliance

## TYPES OF NoSQL DATABASES

- Document Databases \[MongoDB, CouchDB\]
  - Structure similar to JSON
  - Schema-less
  - [MongoDB in 5 Minutes](https://www.youtube.com/watch?v=EE8ZTQxa0AM)
- Column Databases \[Apache Cassandra\]
  - Great for analytics
- Key-Value Stores \[Redis, Couchbase Server\]
  - Extremely fast
  - No very customizable
  - Similar to a hash
- Cache Systems \[Redis, Memcache\]
  - Store data in cache
- Graph Databases \[Neo4J\]

Diagram: [Relational Databases vs NoSQL Document Databases](https://lennilobel.files.wordpress.com/2015/07/i2.png)


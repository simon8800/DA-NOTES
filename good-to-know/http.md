# HTTP

Notes from [Traversy Media](https://www.youtube.com/watch?v=iYM2zFP3Zn0), 

## WHAT IS HTTP?

- HTTP stands for **H**yper **T**ext **T**ransfer **P**rotocol.
- Communication between web servers and clients.
- HTTP Requests / Response.
- Loading pages, form submit, Ajax calls.

## HTTP IS STATELESS

- Every request is completely independent.
- Similar to transactions.
- Programming, Local Storage, Cookies, Sessions are used to create enhanced user experiences.

## WHAT IS HTTPS?

- **H**yper **T**ext **T**ransfer **P**rotocol **S**ecure
- Data sent is encrypted by the following:
- SSL (Secure Sockets Layer) / TLS (Transport Layer Security).
- Install certificate on web host.

## HTTP METHODS

- **GET**
  - Retrieves data from the server.
  - Could be loading HTML, JSON, assets, images, etc.
- **POST**
  - Submit data to the server.
- **PUT**
  - Update data already on the server.
- **DELETE**
  - Deletes data from the server.

## HTTP HEADER FILEDS

- General: 
  - Request URL
  - Request Method
  - Status Code
  - Remote Address (IP of remote computer)
  - Referrer Policy (Going from one page to another)
- Response: 
  - Server
  - Set-Cookie (For servers to send cookies)
  - Content-Type (Every response has a Content-Type such as XML, JSON, Text, etc.)
  - Content-Length (Length in Octets which are 8-bit bytes)
  - Date
  - A lot more
- Request (stuff for the client):
  - Cookies
  - Accept-xxx
  - Content-Type
  - Content-Length
  - Authorization (since HTTP is stateless, this will help the webpage with auth)
  - User-Agent (typically a long string that has to do with the software the user is using such as browser, operating system.)
  - Referrer (has info regarding the referring site)

## HTTP STATUS CODES

- 1xx: Informational
  - Request received / processing
- 2xx: Success
  - Successfully Received, understood, and accepted
- 3xx: Redirect
  - Further action must be taken / redirect
- 4xx: Client error
  - Request does not have what it needs
- 5xx: Server error
  - Serverr failed to fulfill an apparent valid request

**Common Status Codes**

- 200 - OK
- 201 - OK created
- 301 - Moved to a new URL
- 304 - Not modified (Cached version)
- 400 - Bad request
- 401 - Unauthorized
- 404 - Not found
- 500 - Internal server error


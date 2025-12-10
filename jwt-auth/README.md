# JWT Authentication System – Node.js

##  Overview
This project implements a simple **JWT-based authentication system** using **Node.js and Express**. It includes:

- User **registration** with hashed passwords  
- User **login** that returns a JWT token  
- A protected **/invoke** route that only works with a valid JWT token  
- 10-minute token expiration  
- In-memory storage (no database)

All testing must be done **using the browser only**, as required by the assignment.

---

##  Installation

###  1. Clone the project
```bash
git clone https://github.com/j1y4-j/Cloudfunc-Assignments.git
cd ./Cloudfunc-Assignments/jwt-auth
```
### 2. Install Dependencies
``` npm install```
### 3. Create a .env file

Create a .env file in the project root and add:

```ACCESS_TOKEN_SECRET=your_secret_key_here```


To generate a secret key:

``` bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))" 
```

## Testing

### Start the server using:
```node server.js```


Your server will run at:
```http://localhost:3000```

On the browser, execute the following and modify the queries as required:
- to register:
```http://localhost:3000/register?email=test@gmail.com&password=123```
- to login:
```http://localhost:3000/login?email=test@gmail.com&password=123```
- to check if function invoked:
```http://localhost:3000/invoke?token=PASTE_TOKEN_HERE```

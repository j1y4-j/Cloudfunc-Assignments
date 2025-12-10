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

###  Clone the project
```bash
git clone <your-repo-url>
cd <project-folder>```
````
---

## Testing

> run the server using the command "npm run start" on the terminal

> Now we test using the browser
- to register user use the URL given and modify the queries as required:
http://localhost:3000/register?email=test@gmail.com&password=123
- to login:
http://localhost:3000/login?email=test@gmail.com&password=123
- to check if function invoked
http://localhost:3000/invoke?token=PASTE_TOKEN_HERE

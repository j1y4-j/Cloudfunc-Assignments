# JWT Authentication System – Node.js

## 📌 Overview
This project implements a simple **JWT-based authentication system** using **Node.js and Express**. It includes:

- User **registration** with hashed passwords  
- User **login** that returns a JWT token  
- A protected **/invoke** route that only works with a valid JWT token  
- 10-minute token expiration  
- In-memory storage (no database)

All testing must be done **using the browser only**, as required by the assignment.

---

## 📦 Installation

### 1. Clone the project
```bash
git clone <your-repo-url>
cd <project-folder>

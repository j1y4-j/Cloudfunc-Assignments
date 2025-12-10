const express = require("express");
require('dotenv').config();
const app  = express();
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
app.use(express.json());
// express parses JSON string into JS object whenever a http mthod request is made(post,put)
// to accept JSON
const users= [];


app.get("/register",async (req,res) => {
    const {email,password} =req.query;
    if(!email || !password) return res.send("Email and password required")
    if(users.find(u=>u.email===email)) return res.send("Email already registered")
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt);
  users.push({ email: email, password: hashedPassword });
  res.send("User registered successfully");
    
  
}
)

app.get("/login",async (req,res) => {
    const { email, password } = req.query;
  if (!email || !password) return res.send("Email and password required");

  const user = users.find(u => u.email === email);
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Invalid password");

  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
  res.send(`Login successful and Token is :  ${token}`);

  
}
)

app.get("/invoke", async (req,res) => {
    const token = req.query.token;
    if(!token) return res.send("Access Denied");
    try{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // if token is invalid, it goes to catch function
        res.send("Function invoked successfully");
    }
    catch(err){
        res.send("Access denied");
    }
  
}
)



app.listen(3000,() => {
    console.log("Server Started!")
  
}
);
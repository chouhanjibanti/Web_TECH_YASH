const express = require("express")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")

// config
dotenv.config()

// app init
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());

// secret key 
const JWT_SECRET = process.env.JWT_SECRET;

// dummy database 
const users = []; // ajay

// Register APIs 
app.post("/register",async (req,res)=>{
   const {username,password}=  req.body;

   // Check if users exists
     const userExists =  users.find(u=> u.username === username )
     if(userExists){
        return res.status(400).json({message:"User Already Exist"});
     }

     // Hash Password
    const hashedPassword  = await bcrypt.hash(password,10);

    users.push({
        username,
        password:hashedPassword
    });

    res.json({message:"User Registered Sucessfully",data:users})
})

// Login Apis 
app.post("/login", async (req,res)=>{
    const{username , password } =  req.body;

    const user = users.find(u=> u.username === username);
    if(!user){
       return res.status(400).json({message:"User Not Found"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid Credentials"})
    }

    // generate JWT Token 
   const token = jwt.sign({username:user.username},JWT_SECRET,{expiresIn:"1h"});

   res.json({message:"Login Sucessfully",token})
})


// Token verification logic // mannual middleware
// Authorization -> "bearer token"// convert string -> array -> split 
// ["bearer","token"] // 401 - unauthorized
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    // Token missing 
    if(!authHeader){
        return res.status(401).json({message:"Token Required"});
    }

    // extract token
   const token = authHeader.split(" ")[1];

   try {
     const decoded = jwt.verify(token,JWT_SECRET);
     req.user = decoded;// attach user info
     next();
   } catch (error) {
     res.status(401).json({message:"Invalid Token"});
   }
}

// Route -> protcted Route 
app.get("/profile",verifyToken, (req,res)=>{
    res.json(
        {
        message:"Welcome to the Debugshala Profile",
        loggedInUser:req.user
    })
})



app.listen(PORT, ()=> console.log(`Server started on http://localhost:${PORT}`));
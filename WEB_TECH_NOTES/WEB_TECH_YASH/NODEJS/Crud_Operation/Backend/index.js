const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const fs = require("fs")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const connectDb = require("./config/db")

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware 
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// DataBase connect 
connectDb();

// Mannual Middleware
app.use((req,res,next)=>{
    fs.appendFile("./log.txt",`${Date.now()} - ${req.url} - ${req.method}`,(err,data)=>{
      if(!err){
         console.log("Data Appended Sucessfully....");
      }else{
        console.log("Error in Appending",err);
      }
      next();
    })
})

app.use("/api/users", userRoutes);

app.listen(PORT,()=> console.log(`Server Staretd on port ${PORT}`));
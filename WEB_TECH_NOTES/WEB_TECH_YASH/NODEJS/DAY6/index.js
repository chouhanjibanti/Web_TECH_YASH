const express = require('express')

// app initilize 
const app = express();

app.get("/",(req,res)=>{
   res.end("this is my home Page")
})

app.get("/about",(req,res)=>{
    res.end(`Hello ${req.query.myName}`)
})

app.listen(8000,()=> console.log(`http://localhost:8000`))
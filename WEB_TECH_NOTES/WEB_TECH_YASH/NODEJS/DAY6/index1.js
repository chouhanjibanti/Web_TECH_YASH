const express = require('express')
const fs = require('fs')


// app initilize 
const app = express();

// inbuilt Middleware 
app.use(express.json())// -> json -> js object 
app.use(express.urlencoded({extended:false})) // -> form -> js object 

// mannual middleware 
app.use((req,res,next)=>{
    console.log("hy i am middleware 1 ");
    next();
})

// second
app.use((req,res,next)=>{
    console.log("hy i am middleware 2 ");
    next();
})

// third 
app.use((req,res,next)=>{
     fs.appendFile("./log.txt",`\n${Date.now()}: ${req.url} : ${req.method}\n`,(err)=>{
        next();
     })
})

app.get("/",(req,res)=>{
   res.end("this is my home Page")
})

app.get("/about",(req,res)=>{
    res.end(`Hello ${req.query.myName}`)
})

app.listen(8000,()=> console.log(`http://localhost:8000`))
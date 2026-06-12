const express = require('express')
const fs = require("fs")
const users=require("./MOCK_DATA.json");

// app init
const app = express();
const PORT = 8000;

// middleware inbuilt 
app.use(express.urlencoded({extended:true }))// form data -> JS object ===> req.body
app.use(express.json())

// mannual middleware 
app.use((req,res,next)=>{
     fs.appendFile("./log.txt",`\n${Date.now()}:${req.url}:${req.method}'n`,(err)=>{
        next();
     })
})

// fetch all the users from the json file 
app.get("/api/users",(req,res)=>{
    return res.json(users)
})


// save the user data using the post method
app.post("/api/users",(req,res)=>{
    const body = req.body; // "first_name": "yash", "last_name": "Conford","email": "fconford1@cisco.com", "gender": "Male", "job_title": "Operator"
    let newUser = {...body , id:users.length+1 };
    users.push(newUser);
    fs.writeFile(
        `${__dirname}/MOCK_DATA.json`,JSON.stringify(users),(err,data)=>{
            if(data!==null){
                return res.json({status:"sucess",id:users.length,data:newUser})
            }else{
                 return res.json({status:"false",message:{err}});
            }
        }
    )
})

// get the based on id 
app.get("/api/users/:id",(req,res)=>{
   const id = Number(req.params.id);
   const user = users.find((user)=>{
       return user.id === id;
   })
   return res.json(user);
})


app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))
const http = require("http")
const fs = require("fs")
const url = require("url")

// server create 
const server1 = http.createServer((req,res)=>{
  
    const log = `\n${Date.now()} : ${req.url} : ${req.method}  new request ....\n`;
   const myUrl = url.parse(req.url,true);
//    console.log(myUrl);
    fs.appendFile("./log.txt",log,(err,data)=>{
      switch (myUrl.pathname) {
        case "/":
            if(req.method === 'GET')
                res.end("HomePage")
            break;
         case "/about":
           const username = myUrl.query.myName;
           res.end(`my name is ${username}`)
           break;
        case '/signup':
            if(req.method === 'GET'){
                res.end("This is signup page");
            }else if(req.method === 'POST'){
                res.end("Signup Sucessfully")
            }
            break;
        default:
            res.end("Page not found 404 Error")
            break;
      }
    })
})

server1.listen(7000,()=> console.log(`server started on port http://localhost:7000 `))
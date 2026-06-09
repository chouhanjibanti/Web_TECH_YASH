const http = require("http")
const fs = require("fs")
const url = require("url")

// server create 
const server1 = http.createServer((req,res)=>{
  
    const log = `\n${Date.now()} : ${req.url} new request ....\n`;
   const myUrl = url.parse(req.url,true);
//    console.log(myUrl);
    fs.appendFile("./log.txt",log,(err,data)=>{
      switch (myUrl.pathname) {
        case "/":
              res.end("This is my homepage")
            break;
        case "/about":
           const username = myUrl.query.myName;
           res.end(`my name is ${username}`)
        case "/contact-us":
            res.end("this is contact us page")
        default:
            res.end("Page not found 404 Error")
            break;
      }
    })
})

server1.listen(7000,()=> console.log(`server started on port http://localhost:7000 `))
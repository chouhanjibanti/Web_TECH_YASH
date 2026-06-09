// const http = require('http')// require// import 

// // method of the http module is createServer
// const server = http.createServer((req, res)=>{
//    console.log("New Req Rec.....");
// //    console.log(req.headers);
//    res.end("hello from server....")
// })

// server.listen(8000, ()=> console.log(`http://localhost:8000`));


// ==============================================

const http = require('http')// require// import 
const fs = require("fs")

// method of the http module is createServer
const server = http.createServer((req, res)=>{
  
    const log1 = `\n${Date.now()}: ${req.url} New Request is Coming...`
   fs.appendFile("./log.txt",log1,(error,data)=>{
       switch(req.url){
          case "/":
            res.end("This is homepage")
            break;
         case "/about":
            res.end("This is my about page")
            break;
         case "/contact":
            res.end("This is mu Contact page");
            break;
         default:
            res.end("404 page not found")
       }
   })
})

server.listen(8000, ()=> console.log(`http://localhost:8000`));



// http://localhost:8000/
// http://localhost:8000/about
// http://localhost:8000/contact
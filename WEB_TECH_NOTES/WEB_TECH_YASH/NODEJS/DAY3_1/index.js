// will use the fs module 
// read file , write file , append file , copy , delete file


const fs = require("fs")

// sync 
// fs.writeFileSync("./test.txt","my city name is indore");

// Async 
// fs.writeFile("./test1.txt","debugshala indore",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
// });
// console.log("file written successfully");

// ==============================================

// read :- 
// utf-8 :- it is a chaacter encoding used to represent text in computer. binary 0 , 1

// read :- 
// async :- 

// fs.readFile("./test.txt","utf8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//           console.log("My file data is :", result);
//     }
// })

// appendfile 
// Async 
// fs.appendFile("./test.txt","\ni am from indore\n",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file appended sucessfuuly...");
//     }
// })

// =============================

// copy file :- with the help of this we can create the copy file.

// fs.copyFile("./test.txt","./destination.txt",(err)=>{
//       if(err){
//         console.log(err);
//     }else{
//         console.log("file Copied sucessfuuly...");
//     }
// })

// ======================================================

// unlink 

// fs.unlink("./destination.txt",(err)=>{
//      if(err){
//         console.log(err);
//     }else{
//         console.log("file Deleted sucessfuuly...");
//     }
// })

// =========================================

// mkdir :- we can create the folder/directory .

fs.mkdir("myapp/a",{recursive:false},(err)=>{
      if(err){
        console.log(err);
    }else{
        console.log("Folder crearted sucessfuuly...");
    }
})
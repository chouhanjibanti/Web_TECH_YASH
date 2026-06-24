const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const fs = require("fs");
const connectDB=require("./config/db")

// App initilize 
const app = express();
const PORT = 8000;

connectDB(); // connect database connetion

// middleware 
app.use(express.urlencoded({extended:true})); // html form -js object
app.use(express.json()); // json- js object

// mannual middleware
app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `\n${Date.now()} : ${req.url} : ${req.method}\n`,
    (err) => {
      next();
    },
  );
});

app.set("view engine","ejs")
app.use("/users",  require("./routes/userRoutes"))

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))

// http://localhost:8000/users/all

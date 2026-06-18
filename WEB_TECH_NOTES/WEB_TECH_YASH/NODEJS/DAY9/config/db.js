const mongoose = require("mongoose")

const connectDB = async () =>{
  await  mongoose.connect("mongodb://127.0.0.1:27017/mini-mvc-app")
    .then(()=> console.log("MongoDb Connected"))
    .catch(()=> console.log("MongoDb Connecting Error"));
}  

module.exports = connectDB;
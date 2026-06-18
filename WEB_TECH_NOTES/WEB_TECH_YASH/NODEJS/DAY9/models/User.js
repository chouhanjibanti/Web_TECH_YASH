// schema and model 

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true}
})

// model

module.exports  = mongoose.model("users",userSchema)
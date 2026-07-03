// mongoose

const mongoose = require("mongoose")

// Schema creation 

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    phone:{type:Number , required:true}
},
{timestamps:true}
)

// Model Creation
module.exports = mongoose.model("users",userSchema)
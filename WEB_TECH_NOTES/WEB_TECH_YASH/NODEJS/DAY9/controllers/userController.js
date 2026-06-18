const  User=require("../models/User")

// show form page 
exports.showForm = (req,res) =>{
   res.render("addUser")
}

// create user 
exports.createUser = async (req,res)=>{
     await User.create(req.body);
     res.redirect("/users/all")
}

// show all users 
exports.getUsers = async (req,res) =>{
    const users=await User.find();
    res.render("users",{users})
}



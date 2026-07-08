const User = require("../models/User")
const express = require("express")

const router = express.Router();


router.get("/check",(req,res)=>{
    return res.send("hy")
})

// save the data 
router.post("/" ,async (req,res)=>{
   try {
     const user =  await User.create(req.body);
     res.status(201).json({sucess:true,data:user})
   } catch (error) {
      res.json(500).json({sucess:false,error:message.error})
   }
})
// create - form , save -> body 


// get the data  -> entire data fetch from the mongodb database 
router.get("/", async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json({sucess:true,data:users})
    } catch (error) {
        res.status(500).json({sucess:false,error:message.error})
    }
})


// get based on id  -> http://localhost:8000/api/user/1
router.get("/:id", async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
         res.status(200).json({sucess:true,data:user})
    } catch (error) {
        res.status(500).json({sucess:false,error:message.error})
    }
})

// update based on id  -> http://localhost:8000/api/user/101
router.patch("/:id",async (req,res)=>{
    try {
        const user1 = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({sucess:true,data:user1});
    } catch (error) {
        res.status(500).json({sucess:false,error:message.error});
    }
})

// delete 
router.delete("/:id", async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({sucess:true});
    } catch (error) {
         res.status(500).json({sucess:false,error:message.error});
    }
})


module.exports = router;

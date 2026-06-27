const express = require("express")
const path=require("path")
const multer = require("multer")

// Express App initi
const app = express();
const PORT = 8000;

// This diskstorage is an engine it will give the full control of the disk , you can upload
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        return cb(null , `${Date.now()} - ${file.originalname}`)
    }
})
const upload = multer({storage:storage})

// view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))// directory for view files 

// middleware 
app.use(express.urlencoded({extended:true}))// form data -> js object -> req.body

// APis
app.get("/",(req,res)=>{
     return res.render("homepage")
})

// http://localhost:8000 -> get -> / -> home page
// resume file upload -> post -> /upload -> save 

app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.send("File Uploaded Sucessfully...")
})


app.listen(PORT,()=> console.log(`server started on port http://localhost:${PORT}`))
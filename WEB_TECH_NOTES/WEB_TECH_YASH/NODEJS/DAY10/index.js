const express = require('express')
const dotenv=require('dotenv')
const nodemailer =require('nodemailer')

dotenv.config();

// express app init
const app = express();
const PORT = 8000;

// middleware 
app.use(express.json());// json -> js object -> req.body

// create a post api fr json request 
app.post("/send-email", async (req,res)=>{
try {
    
    // 1 desctructuring from the request
    const {to,subject,text} = req.body;

    // 2. create a transport object (responsible for coneecting to the mail server)
    const transporter = nodemailer.createTransport({
        service:"gmail", // you can use gmail , outlook , yahoo
        auth:{
            user : process.env.EMAIL_USER,// your email address from .env file  
            pass: process.env.EMAIL_PASS,// your password from e.nv file 
        }
     })

     // 3. Define the email options (who , what , content )
     const mailOptions = {
        from : process.env.EMAIL_USER,
        to:to,
        subject:subject,
        text:text,
     }

      // 4. send the email  using the transport.sendemail
      const info =await transporter.sendMail(mailOptions)
  
      console.log("Email sent + ", info.response);
      res.status(200).json({message:"Email sent Sucessfully ",info})
} catch (error) {
     console.log("Error sending email + ", error);
      res.status(500).json({message:"Failed to send email ",error})
}
      
});

app.get("/",(req,res)=>{
    res.send("Email server is running.....");
})


app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))


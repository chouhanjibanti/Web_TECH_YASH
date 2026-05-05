import React, { useState } from 'react'

function Registration() {
    const [formData, setFormData]=useState({
        username:"",
        email:"",
        password:""
    })
const[message,setMessage] = useState("");
const[messageColor , setMessageColor]=useState("")


const handleChange = (e) =>{
    const{name ,value} =   e.target;
    setFormData({...formData, [name]:value})// yash , yash@gmail.com , yash@123
}

const handleSubmit = (e) =>{
    e.preventDefault()

    const{username , email , password}=formData;

    if(!username || !email || !password){
        setMessage("Please fill in all fields")
        setMessageColor("red")
    }else if(!email.includes("@" || !email.includes("."))){
        setMessage("Please Enter a valid email")
        setMessageColor("red")
    }else{
        setMessage("Registration Sucsessfully")
        setMessageColor("green")

        setFormData({username:"" , email:"",password:""})
    }
}

  return (
   <>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
        UserName : <input type="text" value={formData.username} onChange={handleChange} name='username' />

        Email : <input type="text" value={formData.email} onChange={handleChange} name='email' />

        Password : <input type="password" value={formData.password} onChange={handleChange} name='password' />

        <button type='submit'>Register</button>
    </form>

      <div>
        <h3>Live Data :</h3>
        <p><b>username :</b>{formData.username}</p>
         <p><b>Email :</b>{formData.email}</p>
        <p><b>Password :</b> {"*".repeat(formData.password.length)}</p>

      </div>

      {message && ( <p style={{color:messageColor,fontWeight:"bold"}}>{message}</p> )}

   </>
  )
}

export default Registration
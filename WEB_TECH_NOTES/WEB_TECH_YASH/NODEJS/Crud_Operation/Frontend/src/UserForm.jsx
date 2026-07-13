import React, { useState } from 'react'
import { addUser } from './api/userApi';

function UserForm({refresh}) {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("");
   const[address,setAddress] = useState("")
   const[phone,setPhone] = useState("")

   const handleSubmit = async (e) =>{
       e.preventDefault();


       try {
          await addUser({
            name,
            email,
            password,
            address,
            phone:Number(phone),
          })

          refresh();
       } catch (error) {
           console.log("Error doriung data add",error);
       }
       setName("")
       setEmail("");
       setPassword("")
       setAddress("")
       setPhone("")
   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="email" placeholder='Enter Email' value={email}  onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
        <input type="text" placeholder='Enter Address' value={address}  onChange={(e)=> setAddress(e.target.value)}/>
        <input type="text" placeholder='Enter Phone' value={phone}  onChange={(e)=> setPhone(e.target.value)}/>
        <button type='submit'>Add user</button>
      </form>
    </>
  )
}

export default UserForm
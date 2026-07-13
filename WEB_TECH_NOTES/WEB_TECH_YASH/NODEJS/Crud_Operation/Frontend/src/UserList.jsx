import React, { useState } from 'react'
import { deleteUser, updateUser } from './api/userApi';

function UserList({users,refresh}) {
  const[editId,setEditId]=  useState(null);
   const[formData,setFormData]= useState({
         name:"",
         email:"",
         password:"",
         address:"",
         phone:""
    })

        const handleEdit = (user) =>{
        setEditId(user._id);
        setFormData({
            name:user.name,
            email:user.email,
            password:user.password,
            address:user.address,
            phone:user.phone
        })
    }

    const handleChange = (e) =>{
         setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleUpdate = async () =>{
        await updateUser(editId,{
            ...formData
        })
        setEditId(null);
        refresh();
    }


  return (
   <>
   <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Addresss</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>(
            <tr key={user._id}>
                {editId === user._id ? (
                    <>
                    <td>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </td>
                    <td>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                    </td>
                    <td>
                        <button onClick={handleUpdate}>update</button>
                        <button onClick={()=> setEditId(null)}>Cancel</button>
                    </td>
                    </>
                ):(
                     <>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>******</td>
                     <td>{user.address}</td>
                     <td>{user.phone}</td>
                     <td>
                        <button onClick={()=> handleEdit(user)}>Edit</button>
                        <button onClick={()=> deleteUser(user._id).then(refresh)}>Delete</button>
                     </td>
                     </>
                )}
            </tr>
        ))}
      </tbody>
   </table>
   </>
  )
}

export default UserList




// name  :- yash   -> ajay
// password- yash@123 -> ajay@123
// address :- indore
// Phone  :90990909
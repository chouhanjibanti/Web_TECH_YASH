import React, { useState } from 'react'

function UserList({users,refresh}) {
  const[editId,setEditId]=  useState(null);
   const[formData,setFormData]= useState({
         name:"",
         email:"",
         password:"",
         address:"",
         phone:""
    })

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
                {editId === user.id ? (
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
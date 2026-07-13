import React, { useEffect, useState } from 'react'
import { getUsers } from './api/userApi';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {

  const[users,setUsers]=useState([]);

  const fetchUser = async () =>{
     const res =  await getUsers();
     setUsers(res.data.data)
  }

  useEffect(()=>{
      fetchUser();
  },[])
  return (
   <>
     <div>
      <h2>Crud Opertion using Reactjs and Nodejs and MongoDB</h2>
      <UserForm refresh={fetchUser}/>
      <UserList users={users} refresh={fetchUser}/>
     </div>
   </>
  )
}

export default App
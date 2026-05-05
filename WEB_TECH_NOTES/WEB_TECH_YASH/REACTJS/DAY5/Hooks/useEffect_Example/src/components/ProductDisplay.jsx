import React, { useEffect, useState } from 'react'

function ProductDisplay() {
    const[data,setData] = useState([]); // store api data 
    const[loading ,setloading] = useState(true);
    const[error,setError] = useState("")

    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data)=> {
            setData(data);
            setloading(false);
         }).catch(()=>{
            // console.log("Error fetching users");
             setError("Error fetching users")
            setloading(false);
         })
    },[])

    if(loading) return <p>loading.........</p>
  return (
    <>
     <h1>All Users Here....</h1>
     {error}

       <ul type="none">
        {data.map((user)=>(
              <li key={user.id} style={{border:"1px solid",color:"red",margin:"10px",padding:"10px"}}>
                   <h3> <b>Name :</b> {user.name}</h3>
                   <h3><b>Email :</b> {user.email}</h3>
                   <h3><b>Website</b> {user.website}</h3>
              </li>  
        ))}
       </ul>
    </>
  )
}

export default ProductDisplay
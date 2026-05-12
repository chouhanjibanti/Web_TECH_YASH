import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function GetData() {
    const[userData,userSetData1] = useState([]); // store the api or file data 

      useEffect(()=>{
        //    axios.get("https://jsonplaceholder.typicode.com/posts")
            axios.get("data.json")
           .then((response)=> {
                  userSetData1(response.data)
           }).catch(()=>{
                 console.log("Error Fetching Posts...");
           })
      },[])
  return (
    <>
       <h1>hy My All Posts here </h1>

       {userData.map((value)=>(
            <li key={value.id} style={{border:"1px solid",padding:"10px",margin:"10px"}}>
                <p>{value.title}</p>
                <p>{value.body}</p>
            </li>
       ))}
    </>
  )
}

export default GetData

// https://jsonplaceholder.typicode.com/posts
// npm install/i axios
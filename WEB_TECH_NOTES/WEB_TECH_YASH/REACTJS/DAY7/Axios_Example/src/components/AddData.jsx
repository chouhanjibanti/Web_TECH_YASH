import React, { useState } from 'react'
import axios from 'axios'

function AddData() {
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");

    function handleSubmit(e){
      e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title,
            body,
            userId:2
        }).then((response)=>{
                console.log("Post created :",response.data );
                alert("Post created Successfully");
                setTitle("")
                setBody("")
        }).catch((error)=>{
            console.log("Error Adding Posts:",error);
        })
    }
  return (
    <>
    <h2>Add the Data </h2>
      <form onSubmit={handleSubmit} >
         <input type="text" value={title} placeholder='Enter title' onChange={(e)=> setTitle(e.target.value) } /> <br />

         <input type="text" value={body} placeholder='Enter Body' onChange={(e)=> setBody(e.target.value)}/> <br />
         <button type='submit'>Add Post</button>
      </form>
    </>
  )
}
export default AddData
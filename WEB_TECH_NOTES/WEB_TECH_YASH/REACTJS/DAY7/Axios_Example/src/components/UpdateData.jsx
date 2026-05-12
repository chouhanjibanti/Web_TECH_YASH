import React, { useState } from 'react'
import axios from 'axios'

function UpdateData() {
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");

    function handleSubmit(e){
      e.preventDefault();

        axios.put("https://jsonplaceholder.typicode.com/posts/100",{
            title,
            body,
            userId:2
        }).then((response)=>{
                console.log("Post updated :",response.data );
                alert("Post updated Successfully");
                setTitle("")
                setBody("")
        }).catch((error)=>{
            console.log("Error Updating Posts:",error);
        })
    }
  return (
    <>
    <h2>Update the Data </h2>
      <form onSubmit={handleSubmit} >
         <input type="text" value={title} placeholder='Enter title' onChange={(e)=> setTitle(e.target.value) } /> <br />

         <input type="text" value={body} placeholder='Enter Body' onChange={(e)=> setBody(e.target.value)}/> <br />
         <button type='submit'>Update Post</button>
      </form>
    </>
  )
}
export default UpdateData
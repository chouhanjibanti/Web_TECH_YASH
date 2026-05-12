import React, { useState } from 'react'
import axios from 'axios'

function DeleteData() {


    const handelDelete =(e) =>{
         axios.delete("https://jsonplaceholder.typicode.com/posts/1")
         .then((response)=>{
                alert("Post Deleted Successfully");
         }).catch((error)=>{
            console.log("Error Deleting Posts:",error);
         })

    }

  return (
    <>
    <h2>Update the Data </h2>
    <button onClick={handelDelete}>Delete Post </button>
    </>
  )
}
export default DeleteData
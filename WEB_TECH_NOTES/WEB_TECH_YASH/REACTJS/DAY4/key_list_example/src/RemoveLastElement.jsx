import React, { useState } from 'react'

function RemoveLastElement() {

    const[items , setItems]=useState([10,20,30,40,50,60])

    const removeLastItem = () =>{
        setItems((prevItems)=> prevItems.slice(0,prevItems.length-1) ) // 0 ,5 
    }
  return (
    <>
    <h1>List is here</h1>
    <button onClick={removeLastItem}>Remove last element</button>

    <ul>
     {items.map((item,index)=>(
            <li key={index}>{item}</li>
    ))}
   </ul>
    </>
  )
}
export default RemoveLastElement
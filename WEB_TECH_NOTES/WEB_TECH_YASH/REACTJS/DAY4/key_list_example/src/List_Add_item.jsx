// key as a number 
// import React from 'react'
// import { useState } from 'react'

// function List_Add_item() {
//    const [items,setItems]= useState([1,2,3,4,5,6])

//    const addatBegin = () =>{
//        setItems([0,...items]) // 0 ,1 ,2 ,3 4, 5, 6
//    }

//    const addatEnd = ()=>{
//       setItems([...items ,7]);
//    }

//   return (
//     <>
//       <h1>List Here </h1>
//     <button onClick={addatBegin}>AddBegin</button>
//     <button onClick={addatEnd}>AddEnd</button>


//    <ul>
//      {items.map((item,index)=>(
//             <li key={index}>{item}</li>
//     ))}
//    </ul>
//     </>
//   )
// }

// export default List_Add_item


// List with key as a string 

import React from 'react'
import { useState } from 'react'

function List_Add_item() {
   const [items,setItems]= useState([1,2,3,4,5,6])

   const addatBegin = () =>{
       setItems([0,...items]) // 0 ,1 ,2 ,3 4, 5, 6
   }

   const addatEnd = ()=>{
      setItems([...items ,7]);
   }
  return (
    <>
      <h1>List Here </h1>
    <button onClick={addatBegin}>AddBegin</button>
    <button onClick={addatEnd}>AddEnd</button>


   <ul>
     {items.map((item,index)=>(
            <li key={`item-${item}`}>{item}</li>
    ))}
   </ul>
    </>
  )
}

export default List_Add_item

// 0      1
// 1      2
// 2      3


//  0      7
//  1      1

// ==============================

// `item-${item}`   ->
// item-7 ,  item-1 , item-2
// 7     item-7
// 1     item-1
// 2     item-2
// 
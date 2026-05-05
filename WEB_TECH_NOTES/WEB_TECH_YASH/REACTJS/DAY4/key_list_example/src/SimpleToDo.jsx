import React, { useState } from 'react'

function SimpleToDo() {
   const[activity,setActivity]= useState("");
   const[listData , setlistData]= useState([])

   function addActivity(){
  
       setlistData((listData)=>{
          const updatedList =  [...listData , activity];
          setActivity("");
          return updatedList
       })
   }

   function removeActivity(index){
       const updatedListData = listData.filter((element,id)=>{ // hy 0 , by 1 , cricket 2
           return index != id; // return 0 != 0;
       })
       setlistData(updatedListData)
    }

    function removeAll(){
        setlistData([]);
    }

  return (
   <>
   
    <div>TODO LIST</div>
    <input type="text" placeholder='Add a to-do item'  value={activity} onChange={(e)=> setActivity(e.target.value)}/>

    <button onClick={addActivity}>Add Item</button>


    <p>Your List :</p>
    {listData != [] && 
        listData.map((data,index)=>(
             <h2 key={index}>
                <span>{data}</span>
                <button onClick={()=> removeActivity(index)}>Remove</button>
             </h2>
        ))
     }

     {listData.length >= 1 && 
       <span><button onClick={removeAll}>RemoveAll</button></span>
     }
   </>
  )
}

export default SimpleToDo
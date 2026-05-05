import React, { useMemo, useState } from 'react'

function SimpleMemo() {
    const[add,setAdd]=useState(0);
    const[sub,setSub] = useState(100)

    // without Memo Hook
    // function multiply(){
    //     console.log("hy i am multiplay function");
    // }

    // with Memo Hook
    const multi =  useMemo(function multiply(){
        console.log("hy i am multi function");
    },[add])

  return (
   <>
     <h1>UseMemo Example</h1>
     {/* {multiply()} */}
     {multi}
    <button onClick={(e)=> setAdd(add+1)}>Addition</button>
    <span>{add}</span>
    <button onClick={(e)=> setSub(sub-1)}>Subtract</button>
    <span>{sub}</span>
   </>
  )
}

export default SimpleMemo
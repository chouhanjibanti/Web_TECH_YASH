import React, { useCallback, useState } from 'react'
import Navbar from './Navbar';

function App() {
   const[count,setCount] = useState(0);

   // without callback hook
  //  const logoutuser1 = () =>{
  //       console.log("logged out");
  //  }

  // with callback 
  const logoutuser1 = useCallback(()=>{
      console.log("logged out");
  },[])

  return (
   <>

    <Navbar logout1={logoutuser1}/>
     
     <h2>Count :- {count}</h2>
     <button onClick={()=> setCount(count+1)}>Increment</button>
   </>
  )
}

export default App
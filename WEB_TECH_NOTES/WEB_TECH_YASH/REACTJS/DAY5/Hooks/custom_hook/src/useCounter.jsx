import React, { useState } from 'react'

function useCounter(initialValue=0) {
      const[count,setCount] = useState(initialValue);

      function increment(){
          setCount(count+1)
      }

      function decrement(){
        setCount(count-1)
      }

      function reset(){
         setCount(0);
      }

      return [count,increment,decrement,reset]
 
}

export default useCounter
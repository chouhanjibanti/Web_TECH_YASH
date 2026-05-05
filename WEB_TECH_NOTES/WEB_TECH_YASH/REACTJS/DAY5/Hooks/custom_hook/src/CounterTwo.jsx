import React, { useCallback } from 'react'
import useCounter from './useCounter'

function CounterTwo() {
   const[count,increment,decrement,reset]= useCounter(0);
  return (
    <>
    <p>CounterTwo</p>
     <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterTwo
import React, { useContext } from 'react'
import useCounter from './useCounter'

function CounterOne() {

    const[count,increment,decrement]=useCounter(0);
  return (
   <>
      <p>CounterOne</p>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
   </>
  )
}

export default CounterOne
import React from 'react'

function Child({name,rupee,color}) {
  return (
    <>
    <h1>Mere papa n mujhe pese diye</h1>
      <h2 style={{color:color}}>my name is {name} , i have {rupee} Rs/ </h2>
    </>
  )
}

export default Child
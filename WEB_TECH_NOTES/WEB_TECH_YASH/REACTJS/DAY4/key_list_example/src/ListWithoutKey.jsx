import React from 'react'

function ListWithoutKey() {
    const fruits = ["apple","banana","sapota","mango","grapes"]

    const fruitList = fruits.map((fruit)=>  <li>{fruit}</li> )
  return (
    <>
     <h2>All Fruits Here </h2>
        <ul type="none">
            {fruitList}
        </ul>
    </>
  )
}

export default ListWithoutKey
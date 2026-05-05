import React from 'react'

function ListWithKey() {
    const fruits = ["apple","banana","sapota","mango","grapes"]

    const fruitList = fruits.map((fruit,index)=>  <li key={index}>{fruit}</li> )
  return (
    <>
     <h2>All Fruits Here </h2>
        <ul type="none">
            {fruitList}
        </ul>
    </>
  )
}

export default ListWithKey
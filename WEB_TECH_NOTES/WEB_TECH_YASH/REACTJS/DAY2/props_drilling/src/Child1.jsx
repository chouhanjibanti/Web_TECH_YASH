import React from 'react'
import Child2 from './Child2'

function Child1({name}) {
  return (
   <>
     <Child2 name={name}/>
   </>
  )
}

export default Child1
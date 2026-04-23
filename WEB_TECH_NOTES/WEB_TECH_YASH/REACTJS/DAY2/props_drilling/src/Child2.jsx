import React from 'react'
import Child3 from './Child3'

function Child2({name}) {
  return (
   <>
   <Child3 name={name}/>
   </>
  )
}

export default Child2
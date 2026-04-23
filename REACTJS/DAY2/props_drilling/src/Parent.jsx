import React from 'react'
import Child1 from './Child1'

function Parent() {

    let name = "debugshala"
  return (
    <>
    <Child1 name={name}/>
    </>
  )
}

export default Parent
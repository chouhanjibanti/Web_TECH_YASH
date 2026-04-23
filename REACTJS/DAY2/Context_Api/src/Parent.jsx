import React from 'react'
import { createContext } from 'react'
import Child from './Child';


const DataContext = createContext();
function Parent() {
    let name = "Indore"
  return (
   <>
     <DataContext.Provider value={name}>
        <Child/>
     </DataContext.Provider>
   </>
  )
}

export default Parent
export {DataContext}
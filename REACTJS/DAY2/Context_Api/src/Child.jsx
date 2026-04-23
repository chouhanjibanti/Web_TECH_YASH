// import React from 'react'
// import { DataContext } from './Parent'

// function Child() {
//   return (
//     <>
//         <DataContext.Consumer>
//             {(name)=> (
//                 <h2>my city name is {name}</h2>
//             ) }
//         </DataContext.Consumer>
//     </>
//   )
// }

// export default Child


// second way
import React from 'react'
import { useContext } from 'react'
import { DataContext } from './Parent'

function Child() {
    const name1 = useContext(DataContext)
  return (
   <>
     <h1>My City name is {name1}</h1>
   </>
  )
}

export default Child
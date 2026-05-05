import React, { useRef } from 'react'

function UnControlled() {
   const refObject = useRef();
  const refObject1 =  useRef();
//    console.log(refObject);


   const handleSubmit = (e)=>{
    e.preventDefault();
        console.log((refObject.current.value).toUpperCase());
        console.log((refObject1.current.value).length);
   }
   
  return (
   <>
    
     <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter FirstName' ref={refObject} />
         <input type="text" placeholder='Enter LastName' ref={refObject1} />

          <button>Submit</button>
     </form>
   </>
  )
}

export default UnControlled
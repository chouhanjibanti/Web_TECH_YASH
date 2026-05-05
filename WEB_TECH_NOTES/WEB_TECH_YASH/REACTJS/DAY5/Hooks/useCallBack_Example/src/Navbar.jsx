import React from 'react'

function Navbar({logout1}) {
    console.log("Navbar Render");
  return (
   <>
     <button onClick={logout1}>Logout</button>
   </>
  )
}

export default React.memo(Navbar)
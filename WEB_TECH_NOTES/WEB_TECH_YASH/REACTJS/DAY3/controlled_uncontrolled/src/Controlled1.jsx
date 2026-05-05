// import React from 'react'

// function Controlled1() {
//   return (
//       <>
//        <form action="">
//         <input type="text" value="yash" />
//        </form>
//       </>
//   )
// }
// export default Controlled1



import React, { useState } from 'react'

function Controlled1() {
  const[username, setUserName] = useState("");
  const [password , setPassword] = useState("");

  function handleUsername(e){
    //    console.log(e.target.value);
    const capName = e.target.value.toUpperCase();
    setUserName(capName)
  }

  function handlePassword(e){
    //  console.log(e.target.value);
     const lower =  e.target.value.toLowerCase();
     setPassword(lower)
  }

// second way 

     //    function handleInput(e){
     //        if(e.target.name === 'username'){
     //             setUserName(e.target.value.toUpperCase());
     //        }else if (e.target.name === 'password'){
     //             setPassword(e.target.value.toUpperCase());
     //        }
     //    }

  return (
   <>
    <form action="">
       UserName : <input type="text"  value={username} name='username' onChange={handleUsername}/> <br />
       Password : <input type="text" value={password}  name='password' onChange={handlePassword}/>
    </form>
   </>
  )
}

export default Controlled1
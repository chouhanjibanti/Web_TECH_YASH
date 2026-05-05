import React, { useState } from 'react'

function Like() {
    const[like,setLike ] = useState(0);

    const likeincrement = () =>{
         setLike(like+1);
    }

     const likedecrement = () =>{
        if(like > 0){
             setLike(like-1);
        }
    }

    const resetlike = () =>{
        setLike(0)
    }
  return (
    <>
       <h2>Like useState Example</h2>
       <h3>Like ❤ {like}</h3>
       <span ><button style={{backgroundColor:"Red"}} onClick={likeincrement}>Like</button></span>
       <span ><button style={{backgroundColor:"Red"}} onClick={likedecrement}>DisLike</button></span>
        <span ><button style={{backgroundColor:"Red"}} onClick={resetlike}>Reset</button></span>

    </>
  )
}

export default Like
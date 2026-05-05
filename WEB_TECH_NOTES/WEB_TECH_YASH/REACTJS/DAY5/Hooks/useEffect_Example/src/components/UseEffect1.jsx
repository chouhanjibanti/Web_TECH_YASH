import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  // No Array
  useEffect(() => {
    console.log("hy i am rendering.....");
  });

  // Empty Array
  // useEffect(()=>{
  //          console.log("hy i am rendering.....");
  //    },[])

  //  Depedency Array
  //    useEffect(()=>{
  //          console.log("hy i am rendering.....");
  //    },[count])
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Count</button>
    </>
  );
}

export default UseEffect1;

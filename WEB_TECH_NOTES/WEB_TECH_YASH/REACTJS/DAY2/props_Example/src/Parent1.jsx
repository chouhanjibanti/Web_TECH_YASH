import React, { useState } from "react";
import Child1 from "./Child1";

function Parent1() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Child1 name={name} color={color} />
    </>
  );
}

export default Parent1;

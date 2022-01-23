import React, { useState } from "react";

function UseStateExplame() {
  const [counter, setCounter] = useState(0);
  function activador() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Este es un contador: ${counter}</h1>
      <button onClick={activador}>Click</button>
    </div>
  );
}

export default UseStateExplame;

import React, { useState } from "react";

function UseStateExplame() {
  const [counter, setCounter] = useState(0);
  function more() {
    setCounter(counter + 1);
  }
  function less() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Este es un contador: ${counter}</h1>
      <button onClick={more}>Aumentar</button>
      <button onClick={less}>Disminuir</button>
    </div>
  );
}

export default UseStateExplame;

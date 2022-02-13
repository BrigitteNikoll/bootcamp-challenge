import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(5);
  function decrement() {
    setCount(count - 1);
    setCount(count - 1);
  }
  function increment() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
   
  }

  return (
    <div>
      <h1>Ejmplos usando useState</h1>

      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseState;

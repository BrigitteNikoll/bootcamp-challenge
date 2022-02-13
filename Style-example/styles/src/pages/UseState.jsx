import React, { useState } from "react";

const UseState = () => {

  //Si quiero que el valor del useState se ejecute solo la primera vez que haya un cambio en el estado, uso una función dentro del useState

/*   const [count, setCount] = useState(() => { console.log('Ejecutando una sola vez'); return 4 }); */

  //Si quiero que el valor de useState se ejecute cada vez que se detecte un cambio
  const [count, setCount] = useState(initialState());

  function initialState() {
    console.log('Ejecutándo cada vez que haya un cambio')
    return 4
  }
  
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

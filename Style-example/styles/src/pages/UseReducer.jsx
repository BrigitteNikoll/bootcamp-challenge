import { useState, useReducer } from "react";

//2. reducer como función recibe un estado y una acción. Me devuelve el estado actualizado
function reducer(state, action) {
  return { count: state.count + 1 };
}

function UseReducerComponent() {
  const [count, setCount] = useState(0);

  // 1. Se le pasa una funcion llamada reducer y un objeto (puede ser un arreglo arryaX: [] o variableY: "Hola")
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //3. Se llama a dispatch
  function increment() {
    dispatch();
  }

  function decrement() {}

  return (
    <div>
      <h1>Ejmplos usando useReducer</h1>

      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseReducerComponent;

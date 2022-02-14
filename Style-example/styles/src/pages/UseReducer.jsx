import { useState, useReducer } from "react";

function reducer(state, action) {
    return {count: state.count + 1}
}

function UseReducerComponent() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch();
  }

  function decrement() {}

  return (
    <div>
      <h1>Ejmplos usando useState</h1>

      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseReducerComponent;

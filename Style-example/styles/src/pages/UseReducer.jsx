import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

//2. reducer como función recibe un estado y una acción. Me devuelve el estado actualizado
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerComponent() {
  // 1. Se le pasa una funcion llamada reducer y un objeto (puede ser un arreglo arryaX: [] o variableY: "Hola")
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //3. Se llama a dispatch
  function increment() {
    dispatch({type: ACTIONS.INCREMENT});
  }

  function decrement() {
    dispatch({type: ACTIONS.DECREMENT});
  }

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

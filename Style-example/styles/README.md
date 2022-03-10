USEREDUCER

useReducer se usa para estado más complejos. Por ejmplo un arreglo de tareas. Se usa en caso hayan muchos estados y no sea conveniete usar un useState

Se le pasa los siguietnes parámetros: reducer y el estado inicial que puede ser un objeto. 
Ejm: { count: 0 }

Esto me retorna un estado (state) y una función dispatch

  const [state, dispatch] = useReducer(reducer, { count: 0 });

La función reducer recibe dos parametros, un estado y una acción. Siempre me debe devolver el estado actualizado 

function reducer(state, action) {
  return { count: state.count + 1 };
}

A la función increment se le pasa el dispatch()
y para imprimirlo se usa {state.count}

Como queremos incrementar y decrementar, es mejor poner un switch en el reducer:

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

Las funciones de increment y decrement deben tener el dispatch que tendrá como parámetro un objeto:

  function increment() {
    dispatch({type: "increment"});
  }

  function decrement() {
    dispatch({type: "decrement"});
  }

  Definición de ACCIÓN
  Por lo general tienen su propio archivo y son variables gloables

  const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

Una vez definido este objeto ACTIONS, podemos cambiar cada case del switch a  ACTIONS.INCREMENT, y también en las funciones de increment o decrement

  function increment() {
    dispatch({type: ACTIONS.INCREMENT});
  }
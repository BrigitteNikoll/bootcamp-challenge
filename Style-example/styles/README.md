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
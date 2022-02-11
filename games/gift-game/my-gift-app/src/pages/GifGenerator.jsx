import { useState } from "react";
import "./_GifGenerator.css";

const GitGenerator = () => {
  const [query, setQuery] = useState("hola");

  return (
    <div className="gifGenerator">
      <div className="gifGenerator__search">
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => console.log(query)}>New Gifs</button>
      </div>

      <div className="gifs"></div>
    </div>
  );
};

export default GitGenerator;

/*   const contador = () => {
    const [counter, setCounter] = useState(0);
  
    return (
      <div className="gifGenerator">
        <p>Contador : {counter}</p>
  
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    );
  }; */

import { useState } from "react";

const App = () => {

  const emojipedia = {
    platano: '🍌',
    manzana: '🍎'

  }

  const [text, setText] = useState("Este es un texto");

  return (
    <div className="App">
      <textarea textarea cols="30" rows="10"></textarea>
      <p>{text}</p>
      <p></p>
    </div>
  );
};

export default App;

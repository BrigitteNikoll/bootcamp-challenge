import { useState } from "react";

const App = () => {
  const emojipedia = {
    platano: "🍌",
    manzana: "🍎",
  };

  const [text, setText] = useState("");

  const onTextAreaChange = (e) => {
    setText(e.target.value);
  };

  /*   const TransformToEmojipedi = (text) => {
    const newText = text.split(" ").map((word) => {
      return emojipedia[word] ?? word;
    });
    return newText.join(" ");
  }; */

  const TransformToEmojipedi = (text) => {
    return text
      .split(" ")
      .map((word) => emojipedia[word] ?? word)
      .join(" ");
  };

  const color = "purple";
  //OJO: Si tenemos un objeto cuyo key y valor tienen el mismo nombre, solo se escribe uno
  const textStyle = { color: color };
  /*  const textStyle = { color}; */

  return (
    <div className="App">
      <textarea
        textarea
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
      ></textarea>
      <p style={textStyle}>{TransformToEmojipedi(text)}</p>
    </div>
  );
};
//Se creo un método que se ingresa en el text area y lo transformo. Como es un string, lo conveirto en array y lo recorro para encontrar una coincidencia. Si no está en el diccionario, retornará los elementos de word
export default App;

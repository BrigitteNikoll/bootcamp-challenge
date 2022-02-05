import { useState } from "react";

const App = () => {
  const emojipedia = {
    platano: "🍌",
    manzana: "🍎",
  };

  const [text, setText] = useState("");
  const [color, setColor] = useState("purple");
  const textStyle = { color };

  const onTextAreaChange = (e) => {
    setText(e.target.value);
  };

  const TransformToEmojipedi = (text) => {
    return text
      .split(" ")
      .map((word) => emojipedia[word] ?? word)
      .join(" ");
  };

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        textarea
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
      ></textarea>
      <input
        placeholder="Escribe un color aquí"
        onChange={changeColor}
        className="input_style"
      />
      <p style={textStyle}>{TransformToEmojipedi(text)}</p>
    </div>
  );
};

export default App;

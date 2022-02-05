import { useState } from "react";

const App = () => {

  const emojipedia = {
    platano: '🍌',
    manzana: '🍎'

  }

  const [text, setText] = useState("");

  const onTextAreaChange = (e) => {
    setText(e.target.value);
  }

  const TransformToEmojipedi = (text) => {
    const newText = text.split(" ").map((word) => {
      return emojipedia[word] ?? word
    })
    return newText.join(" ");
  }

  return (
    <div className="App">
      <textarea textarea cols="30" rows="10" onChange={onTextAreaChange}></textarea>
      <p>{TransformToEmojipedi(text)}</p>
    </div>
  );
};

export default App;

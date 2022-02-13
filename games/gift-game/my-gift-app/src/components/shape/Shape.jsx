import { useState } from "react";
import "./_Shape.css";

const Shape = ({ type }) => {
  const [bgColor, setBgColor] = useState();
  const [colorText, setcClorText] = useState(bgColor);

  const changeColor = () => {
    setBgColor("purple");
  };
  const onTextAreaChange = (e) => {
    setcClorText(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Escribe un color aquí"
        onChange={onTextAreaChange}
        className="input_style"
      />
      <div
        className={`shape ${type}`}
        onClick={changeColor}
        style={{ backgroundColor: colorText }}
      ></div>
    </div>
  );
};

export default Shape;

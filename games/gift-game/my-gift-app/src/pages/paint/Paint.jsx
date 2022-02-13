import { useState } from "react";
import Shape from "../../components/shape/Shape";
import './_Paint.css'

const Paint = () => {
  const [userColor, setUserColor] = useState('');

  const onTextAreaChange = (userColor) => {
    setUserColor(userColor.target.value);
  };
  const changeButtonColor = (color) => {
    setUserColor(color);
  };

  return (
    <div>
      <input
        value={userColor}
        type="text"
        placeholder="Escribe un color aquí"
        onChange={onTextAreaChange}
      />
      <div className="colorBox red" onClick={() => changeButtonColor('red')}></div>
      <div className="colorBox blue" onClick={() => changeButtonColor('blue')}></div>
      <div className="colorBox black" onClick={() => changeButtonColor('black')}></div>


      <Shape userColor={userColor} type="circle" />
      <Shape userColor={userColor} type="rectangle" />
      <Shape userColor={userColor} type="squre" />
      <Shape userColor={userColor} type="parallelogram" />
    </div>
  );
};

export default Paint;

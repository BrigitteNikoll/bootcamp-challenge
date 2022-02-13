import React from "react";
import Shape from "../../components/shape/Shape";
import './_Paint.css';

const Paint = () => {
  return (
    <div>
      
      <Shape type="circle"/>
      <Shape type="rectangle"/>
      <Shape type="squre"/>
      <Shape type="parallelogram"/>
    </div>
  );
};

export default Paint;

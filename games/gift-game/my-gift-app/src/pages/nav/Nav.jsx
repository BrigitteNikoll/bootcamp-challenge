import React from "react";
import { Link } from "react-router-dom";
import './_Nav.css'

function nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/emoji">Text Emoji</Link>
      <Link to="/gif">Gif Generator</Link>
    </div>
  );
}

export default nav;

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GifGenerator from "./pages/gif/GifGenerator";
import TexEmoji from "./pages/emoji/TextEmoji";
import Home from "./pages/Home.jsx";
import Nav from "./pages/nav/Nav.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emoji" element={<TexEmoji />} />
          <Route path="/gif" element={<GifGenerator />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

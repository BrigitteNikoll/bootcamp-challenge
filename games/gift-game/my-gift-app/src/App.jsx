
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GifGenerator from "./pages/gif/GifGenerator";
import TexEmoji from "./pages/emoji/TextEmoji";
import Home from "./pages/Home.jsx";
import Nav from "./components/nav/Nav.jsx"
import Paint from './pages/paint/Paint.jsx'
import './_App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <div className="app__content"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/emoji" element={<TexEmoji />} />
          <Route path="/gif" element={<GifGenerator />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

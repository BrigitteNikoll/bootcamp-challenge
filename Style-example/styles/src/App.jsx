import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./pages/UseState.jsx";
import UseEffect from "./pages/UseEffect"
import Home from "./pages/Home.jsx";
import Nav from "./components/nav/Nav.jsx"
import "./App.css";
import UseEffectWindows from "./pages/UseEffectWindows.jsx";
import UseReducer from "./pages/UseReducer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useeffectwin" element={<UseEffectWindows />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

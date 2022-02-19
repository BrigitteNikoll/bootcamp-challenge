import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import Detail from './pages/detail/Detail.jsx'
import About from './pages/about/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="shop">
{/*         <Nav /> */}
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/detalle/:id" element={<Detail/>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

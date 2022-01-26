import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/pokedex/Pokedex";
import Pokemom from "./components/pokemon/Pokemon";
import "./_App.scss";

function App() {
  return (
    <div className="App">
      <h1> POKEDEX - CLASES</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="pokemon/:name/:id" element={<Pokemom />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
      ,
      
    </div>
  );
}

export default App;

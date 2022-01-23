import { useState } from "react";
import './App.scss'
import productsMock from "./products.json";
import Product from "./components/Product";

const filterAndSort = (products, color) => {
  return {
    menorAMayor() {
      return [...products].sort((a, b) => a.price - b.price);
    },
    mayorAMenor() {
      return [...products].sort((a, b) => b.price - a.price);
    },
    limpiar() {
      console.log("limpiar")
      return productsMock;
    },
    porColor() {

      if (color === 'all') {
        return this.limpiar();
      } else {
        const filterByColor = productsMock.filter(
          product => product.color === color
        );
        return filterByColor;
      }
    },
  };
};



const App = () => {
  // hook utilizado useState
  const [productes, setProducts] = useState(productsMock);

  const filterOrSort = (type, color) => {
    const filteredProducts = filterAndSort(productes, color)[type]();
    setProducts(filteredProducts);
  };

  return (
    <div id="app">
      <div className="filterAndSearch">
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("limpiar")}
        >
          Limpiar Filtros
        </button>
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("menorAMayor")}
        >
          Ordenar por Menor Precio
        </button>
        <button
          className="filterAndSearch__option"
          onClick={() => filterOrSort("mayorAMenor")}
        >
          Ordenar por Mayor Precio
        </button>
        <div className="filterAndSearch__option">
          <label htmlFor="color">Filtrar Por Color: </label>
          <select
            name="color"
            id="color"
            onChange={(e) => filterOrSort("porColor", e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="verde">Verde</option>
            <option value="amarillo">Amarillo</option>
            <option value="rojo">Rojo</option>
          </select>
        </div>
      </div>

      <div className="productsContainer">
        {productes.map((product) => (
          <Product product={product} key={product.name.replace(" ", "")}/>
          
        ))}
      </div>
    </div>
  );
};

export default App;

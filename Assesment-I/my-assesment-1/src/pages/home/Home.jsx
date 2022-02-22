import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [flag, setflag] = useState(false)

  const getProductsFromApi = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    setProducts(response.data);
    setflag(true)
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <main className="">
      <h1>Productos</h1>
      <section className="">
      {flag ? (
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        ) : (
          <h1>Cargando data...</h1>
        )}
      </section>
    </main>
  );
};

export default Home;

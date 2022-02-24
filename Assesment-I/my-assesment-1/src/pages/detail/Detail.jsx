import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './_Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const gettingProducts = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setFlag(true);
    };
    gettingProducts();
  }, [id]);

  return (
    <main className="cont">
      {flag ? (
        <div className="card">
          <div className="photo">
            <img src={product.image} alt={product.title} />
            <p>{`⭐ ${product.rating.rate} out of 5`}</p>
            <p>{`${product.rating.count} reviews`}</p>
          </div>
          <div className="description">
            <h2>{product.title}</h2>
            <h4>{product.category}</h4>
            <h1>{`$ ${product.price}`}</h1>
            <p>{product.description}</p>
            <button>Add to Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      ) : (
        <h1>Cargando items</h1>
      )}
    </main>
  );
};

export default Detail;

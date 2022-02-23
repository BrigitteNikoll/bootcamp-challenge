import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './_ProductCard.scss';

const ProductCard = ({ product: { id, title, image } }) => {
  const [flag, setFlag] = useState(false);
  const [minutes, setMinutes] = useState(Math.ceil(Math.random() * 3));
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (minutes === 0 && seconds === 1) setFlag(true);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <article className="card__container">
      <figure key={id} className="card__figure">
        <img src={image} alt={title} />
        <figcaption>
          <p>{title}</p>
        </figcaption>
      </figure>
      <section className="card__time">
        {`00:0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
      </section>
      <footer className="card__footer">
        {flag ? (
          <button className="card__button">Ir a detalle</button>
        ) : (
          <Link to={`/detalle/${id}`}>
            <button className="card__button">Ir a detalle</button>
          </Link>
        )}
      </footer>
    </article>
  );
};

export default ProductCard;

/* Descomentar para ver una forma u otra*/

const Product = ({ product: { name, image, price } }) => {
  return (
    <div className="product">
      <p className="product__image">{image}</p>
      <p>${price}</p>
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

/* const Product = (props) => {
  return (
    <div className="product">
            <p className="product__image">{props.product.image}</p>
            <p>${props.product.price}</p>
            <p>{props.product.name.toUpperCase()}</p>
          </div>
  )
} */

/* Descomentar para ver una forma u otra*/

export default Product;

import React from 'react';
import PropTypes from 'prop-types';



const Product = ({ productName, price, image }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;

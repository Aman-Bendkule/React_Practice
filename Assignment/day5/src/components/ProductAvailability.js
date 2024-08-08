import React, { useState } from 'react';
import '../assets/css/ProductAvailability.css';

const ProductAvailability = () => {
  const [isInStock, setIsInStock] = useState(true); // Simulating stock status

  return (
    <div className="product-container">
      <h1>Product Availability</h1>
      <p className={`availability-status ${isInStock ? 'in-stock' : 'out-of-stock'}`}>
        {isInStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button onClick={() => setIsInStock(!isInStock)} className="toggle-button">
        Toggle Stock Status
      </button>
    </div>
  );
};

export default ProductAvailability;

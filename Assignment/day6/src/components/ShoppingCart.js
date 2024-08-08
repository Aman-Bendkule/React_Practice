import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <div style={cartStyle}>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Items</h2>
        {items.map(item => (
          <div key={item.id} style={itemStyle}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} style={itemStyle}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const cartStyle = {
  padding: '20px'
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px'
};

export default ShoppingCart;

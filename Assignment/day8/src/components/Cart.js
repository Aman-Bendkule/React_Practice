import React from 'react';

function Cart({ cart, removeItemFromCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </h3>
    </div>
  );
}

export default Cart;

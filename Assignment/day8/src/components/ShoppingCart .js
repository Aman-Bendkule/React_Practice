import React, { useState } from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import '../assets/css/shopping.css';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.name !== item.name));
    }
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <ItemList addItemToCart={addItemToCart} />
      <Cart cart={cart} removeItemFromCart={removeItemFromCart} />
    </div>
  );
}

export default ShoppingCart;

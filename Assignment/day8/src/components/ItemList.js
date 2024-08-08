import React from 'react';

const items = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.5 },
  { name: 'Cherry', price: 2 },
];

function ItemList({ addItemToCart }) {
  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

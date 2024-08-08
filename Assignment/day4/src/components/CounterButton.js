import React, { useState } from 'react';
import '../assets/css/CounterButton.css';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1>Button Click Counter</h1>
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default CounterButton;

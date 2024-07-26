import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container text-center my-4">
      <h1>Counter</h1>
      <p className="display-4">{count}</p>
      <button 
        className="btn btn-primary btn-lg" 
        onClick={incrementCount}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

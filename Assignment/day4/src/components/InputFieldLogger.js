import React, { useState } from 'react';
import '../assets/css/InputFieldLogger.css';

const InputFieldLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="input-container">
      <h1>Input Field Logger</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="input-field"
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputFieldLogger;

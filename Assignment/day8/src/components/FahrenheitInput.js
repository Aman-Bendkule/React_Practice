import React from 'react';

function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div className="input-container">
      <label htmlFor="fahrenheit">Fahrenheit:</label>
      <input
        type="number"
        id="fahrenheit"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;

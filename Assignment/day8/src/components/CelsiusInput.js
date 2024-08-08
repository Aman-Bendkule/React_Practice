import React from 'react';

function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div className="input-container">
      <label htmlFor="celsius">Celsius:</label>
      <input
        type="number"
        id="celsius"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
      />
    </div>
  );
}

export default CelsiusInput;

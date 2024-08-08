import React, { useState } from 'react';
import '../assets/css/ToggleVisibility.css';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <h1>Toggle Visibility</h1>
      <button className="toggle-button" onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p className="toggle-text">This is the text to toggle.</p>}
    </div>
  );
};

export default ToggleVisibility;

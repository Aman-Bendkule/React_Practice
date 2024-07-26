import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="container text-center my-4">
      <h1>Toggle Switch</h1>
      <div 
        className={`form-check form-switch ${isOn ? 'text-success' : 'text-danger'}`}
        style={{ cursor: 'pointer' }}
        onClick={handleToggle}
      >
        <input 
          className="form-check-input" 
          type="checkbox" 
          checked={isOn}
          readOnly
        />
        <label className="form-check-label">
          {isOn ? 'ON' : 'OFF'}
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;

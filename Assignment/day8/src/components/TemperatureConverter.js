import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState({ scale: 'c', value: '' });

  const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

  const handleCelsiusChange = (value) => {
    setTemperature({ scale: 'c', value });
  };

  const handleFahrenheitChange = (value) => {
    setTemperature({ scale: 'f', value });
  };

  const scale = temperature.scale;
  const value = temperature.value;
  const celsius = scale === 'f' ? toCelsius(value) : value;
  const fahrenheit = scale === 'c' ? toFahrenheit(value) : value;

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput fahrenheit={fahrenheit} onFahrenheitChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureConverter;

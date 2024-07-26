import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({ temperature, condition, location }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">{location}</h5>
        <p className="card-text">{condition}</p>
        <h2>{temperature}°C</h2>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default WeatherWidget;

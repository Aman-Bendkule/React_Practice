import React from 'react';
import '../assets/css/card.css'; // Import the CSS file for styling

function Card({ title, image, description, footer }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Card;

import React from 'react';

function StepsList({ steps }) {
  return (
    <ol className="steps-list">
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  );
}

export default StepsList;

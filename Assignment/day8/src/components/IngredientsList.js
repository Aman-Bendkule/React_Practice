import React from 'react';

function IngredientsList({ ingredients }) {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default IngredientsList;

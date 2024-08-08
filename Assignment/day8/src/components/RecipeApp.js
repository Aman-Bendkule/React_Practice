import React, { useState } from 'react';
import IngredientsList from './IngredientsList';
import StepsList from './StepsList';
import '../assets/css/recipe.css';

const initialRecipe = {
  ingredients: [
    '2 cups flour',
    '1 cup sugar',
    '1/2 cup butter',
  ],
  steps: [
    'Preheat the oven to 350°F (175°C).',
    'Mix the flour, sugar, and butter in a bowl.',
    'Bake for 25 minutes or until golden brown.',
  ],
};

function RecipeApp() {
  const [recipe] = useState(initialRecipe);

  return (
    <div className="recipe-app-container">
      <h1>Recipe Application</h1>
      <div className="recipe-section">
        <h2>Ingredients</h2>
        <IngredientsList ingredients={recipe.ingredients} />
      </div>
      <div className="recipe-section">
        <h2>Steps</h2>
        <StepsList steps={recipe.steps} />
      </div>
    </div>
  );
}

export default RecipeApp;

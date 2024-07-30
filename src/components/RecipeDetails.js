import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <div className="recipe-details">Select a recipe to see the details</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Author:</strong> {recipe.author}</p>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;

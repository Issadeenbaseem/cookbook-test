import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <div className="recipe-details">Select a recipe to see the details</div>;

  return (
    <div className="recipe-details">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>{recipe.name}</h2>
      <p><strong>Author:</strong> {recipe.author}</p>
      <p><strong>Rating:</strong> {'⭐'.repeat(recipe.rating)}</p>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;

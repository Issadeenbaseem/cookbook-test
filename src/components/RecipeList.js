import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item" onClick={() => onSelectRecipe(recipe)}>
          {recipe.name}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
  // Add more recipes if needed
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Book</h1>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </header>
      <div className="App-content">
        <div className="left-panel">
          <RecipeList recipes={filteredRecipes} onSelectRecipe={setSelectedRecipe} />
        </div>
        <div className="right-panel">
          <RecipeDetails recipe={selectedRecipe} />
        </div>
      </div>
    </div>
  );
}

export default App;

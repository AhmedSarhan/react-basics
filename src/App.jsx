import React from "react";
import { RecipesList } from "./components/recipes/recipes-list";
import { fetchRecipes } from "./api/fetch-recipes";

export const App = () => {
  const [recipes, setRecipes] = React.useState([]);

  const fetchRecipesHandler = async () => {
    try {
      const recipes = await fetchRecipes({limit: 10});
      setRecipes(recipes || []);
    } catch (error) {
      console.error("fetchRecipes -> error", error);
    }
  };

  React.useEffect(() => {
    
    fetchRecipesHandler();
  }, []);

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Performance in React</h1>
      <h2 style={{ textAlign: "center" }}>Enter React useCallback</h2>

      <RecipesList recipes={recipes} />
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        <label htmlFor="limit">Choose Limit</label>
        <select name="limit">
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
};

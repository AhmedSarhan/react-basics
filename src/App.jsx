import React, { useState, useCallback, useMemo } from "react";
import { RecipesList } from "./components/recipes/recipes-list";
import { fetchRecipes } from "./api/fetch-recipes";
import "./App.css";
export const App = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [limit, setLimit] = useState(20);
  const [count, setCount] = useState(0)
  const fetchRecipesHandler = useCallback(async () => {
    try {
      const recipes = await fetchRecipes({ limit });
      setRecipes(recipes || []);
    } catch (error) {
      console.error("fetchRecipes -> error", error);
    }
  }, [limit]);
  
  // const sortedRecipes = () => {
  //   console.log("sorting recipes without memo...");
  //   return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
  // };
  
  const sortedRecipes = useMemo(() => {
    console.log("sorting recipes...");
    return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
  }, [recipes]);
 
  React.useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  return (
    <div className="app">
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <h1 style={{ textAlign: "center" }}>Performance in React</h1>
      <h2 style={{ textAlign: "center" }}>Enter React useMemo</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <label htmlFor="limit">Choose Limit</label>
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          name="limit"
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
      <button onClick={fetchRecipesHandler}>Fetch Manually</button>

      {/* <RecipesList recipes={sortedRecipes()} /> */}
      <RecipesList recipes={sortedRecipes} />
    </div>
  );
};

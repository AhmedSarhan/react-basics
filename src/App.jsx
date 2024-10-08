import React, { useState, useCallback, useMemo } from "react";
import { RecipesList } from "./components/recipes/recipes-list";
import { fetchRecipes } from "./api/fetch-recipes";
import "./App.css";
import { Counter, SecondCounter } from "./components/counter";
import { Pagination } from "./components/pagination";
export const App = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [limit, setLimit] = useState(20);
  const fetchRecipesHandler = useCallback(async () => {
    try {
      const recipes = await fetchRecipes({ limit });
      setRecipes(recipes || []);
    } catch (error) {
      console.error("fetchRecipes -> error", error);
    }
  }, [limit]);

  const sortedRecipes = useMemo(() => {
    console.log("sorting recipes...");
    return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
  }, [recipes]);

  React.useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Performance in React</h1>
      <h2 style={{ textAlign: "center" }}>Enter React Memo</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Counter />

        <SecondCounter />
      </div>
      <Pagination limit={limit} setLimit={setLimit} />
      <button onClick={fetchRecipesHandler}>Fetch Manually</button>

      <RecipesList recipes={sortedRecipes} />
    </div>
  );
};

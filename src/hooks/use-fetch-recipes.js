import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchRecipes } from "../api/fetch-recipes";


export const useFetchRecipes = (initialLimit) => {
  const [recipes, setRecipes] = useState([]);
  const [limit, setLimit] = useState(initialLimit);
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

  useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  return { limit, setLimit, fetchRecipesHandler, sortedRecipes };
}
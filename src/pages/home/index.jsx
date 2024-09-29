import React from 'react'
import { fetchRecipes } from "../../api/fetch-recipes";
import RecipesList from "../../components/recipes/recipes-list";

export const HomePage = () => {
  const [recipes, setRecipes] = React.useState([]);


  React.useEffect(() => {
    const fetchRecipesHandler = async () => {
      try {
        const recipes = await fetchRecipes();
        setRecipes(recipes || []);
      } catch (error) {
        console.error("fetchRecipes -> error", error);
      }
    };
    fetchRecipesHandler();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Routing in React</h1>
      <h2 style={{ textAlign: "center" }}>Enter React router</h2>

      <RecipesList recipes={recipes} />
    </>
  );
}

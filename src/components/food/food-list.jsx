// FoodListing.js
import { useEffect, useState } from "react";
import FoodCard from "./food-card";
import styles from "./index.module.css";
import { AddMeal } from "./add-meal";
import { getRecipes } from "../../api/get-recipes";

const FoodListing = () => {
  const [recipesState, setRecipes] = useState([]);

  const getRecipesHandler = async () => {
    const recipesData = await getRecipes();
    setRecipes(recipesData);
  };

  useEffect(() => {
    getRecipesHandler();
  }, []);

  const addMealHandler = (newMeal) => {
    console.log('newMeal', newMeal)
    setRecipes((prevState) => [...prevState, newMeal]);
  };
  const updateRating = (id, newRating) => {
    const updatedRecipes = [...recipesState].map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          rating: newRating,
          reviewCount: recipe.reviewCount ? recipe.reviewCount + 1 : 1,
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const deleteRecipeHandler = (id) => {
    const updatedRecipes = [...recipesState].filter(
      (recipe) => recipe.id !== id
    );
    setRecipes(updatedRecipes);
  };
  return (
    <div className={styles.container}>
      <AddMeal onMealAddition={addMealHandler} />
      {/* <button
        style={{ margin: "0 auto", display: "block" }}
        onClick={() => addRecipes(recipes)}
      >
        Add Recipes
      </button> */}

      <div className={styles.listing}>
        {recipesState.map((recipe) => (
          <FoodCard
            key={recipe.id}
            recipe={recipe}
            updateRating={updateRating}
            deleteItem={deleteRecipeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodListing;

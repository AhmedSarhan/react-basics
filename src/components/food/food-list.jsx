// FoodListing.js
import { useState } from "react";
import FoodCard from "./food-card";
import styles from "./index.module.css";
import recipes from "./data.json";
import { AddMeal } from "./add-meal";

const FoodListing = () => {
  const [recipesState, setRecipes] = useState(recipes);

  const addMealHandler = (newMeal) => {
    setRecipes((prevState) => [...prevState, newMeal]);
  };
  const updateRating = (id, newRating) => {
    const updatedRecipes = [...recipesState].map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          rating: newRating,
          reviewCount: recipe.reviewCount + 1,
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

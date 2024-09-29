import React from "react";
import styles from "./recipes.module.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <li className={styles["recipe-card"]}>
      <a href={`/single-recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
        <div class={styles["card-content"]}>
          <h2>{recipe.name}</h2>
          <p class={styles.tags}>{recipe.tags.join(", ")}</p>
          <p class={styles.rating}>
            Rating: {recipe.rating} ({recipe.reviewCount} reviews)
          </p>
          <p class={styles.servings}>Servings: {recipe.servings}</p>
          <p class={styles.calories}>
            Calories: {recipe.caloriesPerServing} kcal
          </p>
        </div>
      </a>
    </li>
  );
};

// FoodCard.js
import { useState } from "react";
import RatingSelector from "../rating-selector";
import styles from "./index.module.css";

const FoodCard = ({ recipe, updateRating, deleteItem }) => {
  const randomId = Math.floor(Math.random() * 25);
  const IMG_SRC =
    recipe.image ?? `https://cdn.dummyjson.com/recipe-images/${randomId}.webp`;

  const [showRating, setShowRating] = useState(false);

  const deleteRecipeHandler = () => {
    // remove item from api

    deleteItem(recipe.id);
  };
  const updateRatingHandler = (rating) => {
    const newCount = recipe.reviewCount + 1;
    const newRating =
      Math.round(
        ((recipe.rating * recipe.reviewCount + rating) / newCount) * 10
      ) / 10;

    console.log("newRating", newRating);
    // api handler

    updateRating(recipe.id, newRating);
    setShowRating(false);
  };
  return (
    <div className={styles.card}>
      {showRating && (
        <div className={styles.ratingContainer}>
          <RatingSelector
            closeHandler={() => setShowRating(false)}
            updateRating={updateRatingHandler}
          />
        </div>
      )}
      <div className={styles.cardActions}>
        <button
          className={styles["add-button"]}
          onClick={() => setShowRating(true)}
        >
          ⭐
        </button>
        <button
          className={styles["remove-button"]}
          onClick={deleteRecipeHandler}
        >
          <span>🗑️</span>
        </button>
      </div>
      <img src={IMG_SRC} alt={recipe.name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <p className={styles.cuisine}>
          {recipe.cuisine} • {recipe.difficulty}
        </p>
        <p className={styles.tags}>Tags: {recipe.tags.join(", ")}</p>
        <p className={styles.rating}>
          ⭐ {recipe.rating ?? 0} ({recipe.reviewCount ?? 0} reviews)
        </p>
        <p className={styles.servings}>Servings: {recipe.servings}</p>
        <p className={styles.calories}>
          Calories per serving: {recipe.caloriesPerServing}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;

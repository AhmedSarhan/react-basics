// FoodCard.js
import { useEffect, useState } from "react";
import RatingSelector from "../rating-selector";
import styles from "./index.module.css";
import { deleteRecipe } from "../../api/delete-recipe";
import { updateRecipeRating } from "../../api/update-recipe-rating";

const FoodCard = ({ recipe, updateRating, deleteItem }) => {
  const [ImgSrc, setImgSrc] = useState(recipe.image ?? ``);

  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 25) + 1;
    const IMG_SRC =
      recipe.image ??
      `https://cdn.dummyjson.com/recipe-images/${randomId}.webp`;
    setImgSrc(IMG_SRC);
  }, [recipe.image]);

  const deleteRecipeHandler = () => {
    // remove item from api
    deleteRecipe(recipe.id);
    deleteItem(recipe.id);
  };
  const updateRatingHandler = (rating) => {
    const newCount = recipe.reviewCount + 1;
    const newRating = recipe.rating
      ? Math.round(
          ((recipe.rating * recipe.reviewCount + rating) / newCount) * 10
        ) / 10
      : rating;

    console.log("newRating", newRating);
    // api handler
    updateRecipeRating(recipe.id, newRating, newCount);
    
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
          type="button"
        >
          ⭐
        </button>
        <button
          className={styles["remove-button"]}
          onClick={deleteRecipeHandler}
          type="button"
        >
          <span>🗑️</span>
        </button>
      </div>
      <img src={ImgSrc} alt={recipe.name} className={styles.image} />
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

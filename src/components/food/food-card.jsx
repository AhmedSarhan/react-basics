/* eslint-disable react/prop-types */
// FoodCard.js
import styles from "./index.module.css";

const FoodCard = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <img src={recipe.image} alt={recipe.name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <p className={styles.cuisine}>
          {recipe.cuisine} • {recipe.difficulty}
        </p>
        <p className={styles.tags}>Tags: {recipe.tags.join(", ")}</p>
        <p className={styles.rating}>
          ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
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

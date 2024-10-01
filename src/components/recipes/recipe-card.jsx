import styles from "./recipes.module.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <li className={styles["recipe-card"]}>
        <img src={recipe.image} alt={recipe.name} />
        <div className={styles["card-content"]}>
          <h2>{recipe.name}</h2>
          <p className={styles.tags}>{recipe.tags.join(", ")}</p>
          <p className={styles.rating}>
            Rating: {recipe.rating} ({recipe.reviewCount} reviews)
          </p>
          <p className={styles.servings}>Servings: {recipe.servings}</p>
          <p className={styles.calories}>
            Calories: {recipe.caloriesPerServing} kcal
          </p>
        </div>
    </li>
  );
};

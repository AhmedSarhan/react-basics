import { RecipeCard } from "./recipe-card";

import styles from "./recipes.module.css";

export const RecipesList = ({recipes}) => {
  return (
    <ul className={styles["recipe-list"]}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}


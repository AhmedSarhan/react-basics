// FoodListing.js
import FoodCard from "./food-card";
import styles from "./index.module.css";
import recipes from "./data.json";

const FoodListing = () => {
  return (
    <div className={styles.listing}>
      {recipes.map((recipe) => (
        <FoodCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default FoodListing;

import React from "react";
import { fetchRecipe } from "../../api/fetch-recipes";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const SingleRecipe = () => {
  const [recipeDetails, setRecipeDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const recipe = await fetchRecipe(1);
        setRecipeDetails(recipe);
      } catch (error) {
        console.error("fetchRecipeDetails -> error", error);
      }
    };
    fetchRecipeDetails();
  }, []);

  if (!recipeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles["recipe-container"]}>
      <img
        src={recipeDetails.image}
        alt={recipeDetails.name}
        className={styles["recipe-image"]}
      />
      <h1 className={styles["recipe-title"]}>{recipeDetails.name}</h1>

      <div className={styles.row}>
        <div className={styles["recipe-info"]}>
          <p>
            <strong>Rating:</strong> {recipeDetails.rating}{" "}
            <FontAwesomeIcon
              icon={faStar}
              color="#ffc107"
              fontSize="24px"
              type="button"
            />{" "}
            ({recipeDetails.reviewCount} reviews)
          </p>
          <p>
            <strong>Difficulty:</strong> {recipeDetails.difficulty}
          </p>
          <p>
            <strong>Cuisine:</strong> {recipeDetails.cuisine}
          </p>
          <p>
            <strong>Prep Time:</strong> {recipeDetails.prepTimeMinutes} minutes
          </p>
          <p>
            <strong>Cook Time:</strong> {recipeDetails.cookTimeMinutes} minutes
          </p>
          <p>
            <strong>Servings:</strong> {recipeDetails.servings}
          </p>
          <p>
            <strong>Calories per Serving:</strong>{" "}
            {recipeDetails.caloriesPerServing}
          </p>
          <p>
            <strong>Meal Type:</strong> {recipeDetails.mealType?.join(", ")}
          </p>
        </div>
        <div className={styles.tags}>
          <h3>Tags</h3>
          {recipeDetails.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {recipeDetails.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.instructions}>
          <h2>Instructions</h2>
          <ol>
            {recipeDetails.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>

    
  );
};

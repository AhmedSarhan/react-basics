import { useReducer } from "react";
import { MultiSelect } from "../multi-select";
import styles from "./index.module.css";
import { addRecipe } from "../../api/add-recipe";

const tags = [
  { id: 1, value: "Vegetarian" },
  { id: 2, value: "Vegan" },
  { id: 3, value: "Gluten Free" },
  { id: 4, value: "Dairy Free" },
  { id: 5, value: "Low Carb" },
  { id: 6, value: "High Protein" },
  { id: 7, value: "Low Fat" },
  { id: 8, value: "Low Calorie" },
];

const formDataReducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};
export const AddMeal = ({ onMealAddition }) => {
  const [formData, setFormData] = useReducer(formDataReducer, {
    name: "",
    cuisine: "",
    difficulty: "easy",
    tags: [],
    servings: "",
    caloriesPerServing: "",
  });

  const addMealHandler = async(e) => {
    e.preventDefault();
   const response = await addRecipe({
      ...formData,
      tags: formData.tags.map((tag) => tag.value)
    })
    onMealAddition({
      ...formData,
      tags: formData.tags.map((tag) => tag.value),
      id: response.data.name,
    });
  };
  return (
    <form className={styles["form-container"]} onSubmit={addMealHandler}>
      <h2>Add Meal</h2>
      <div className={styles["form-group"]}>
        <label htmlFor="name">Meal Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles["form-control"]}
          value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
          required
        />
      </div>
      <div className={styles["form-row"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="cuisine">Meal Cuisine</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            className={styles["form-control"]}
            value={formData.cuisine}
            onChange={(e) => setFormData({ cuisine: e.target.value })}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="difficulty">Meal Difficulty</label>
          <select
            id="difficulty"
            name="difficulty"
            className={styles["form-control"]}
            value={formData.difficulty}
            onChange={(e) => setFormData({ difficulty: e.target.value })}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="tags">Meal Tags</label>
        <MultiSelect
          items={tags}
          selectedItems={formData.tags}
          onItemSelect={(newItem) =>
            setFormData({ tags: [...formData.tags, newItem] })
          }
          onItemRemove={(id) =>
            setFormData({ tags: formData.tags.filter((tag) => tag.id !== id) })
          }
        />
      </div>
      <div className={styles["form-row"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="servings">Meal Servings</label>
          <input
            type="number"
            min={1}
            max={10}
            id="servings"
            name="servings"
            className={styles["form-control"]}
            value={formData.servings}
            onChange={(e) => setFormData({ servings: e.target.value })}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="caloriesPerServing">Calories Per Serving</label>
          <input
            type="number"
            min={1}
            max={3000}
            id="caloriesPerServing"
            name="caloriesPerServing"
            className={styles["form-control"]}
            value={formData.caloriesPerServing}
            onChange={(e) =>
              setFormData({ caloriesPerServing: e.target.value })
            }
            required
          />
        </div>
      </div>
      <button type="submit">Add Meal</button>
    </form>
  );
};

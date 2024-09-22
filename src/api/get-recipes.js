import { Axios } from "./index";

export const getRecipes = async () => {
  const response = await Axios.get("/recipes.json");
  
  let recipesData = [];
  if (response.data) {
    Object.entries(response.data).map(([key, value]) => {
      recipesData.push({ ...value, id: key });
    });
  }

  return recipesData;
};

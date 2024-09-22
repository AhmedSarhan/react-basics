import { Axios } from ".";

export const addRecipe = async (recipe) => {
  const response = await Axios.post("/recipes.json", recipe);
  console.log('response', response.data.name)
  return response
};

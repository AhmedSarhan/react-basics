import { Axios } from ".";

export const fetchRecipes = async () => {
  try {
    const response = await Axios.get("/recipes?limit=10");
    return response.data?.recipes || [];
  } catch (error) {
    console.error("fetchRecipes -> error", error);
    return [];
  }
}


export const fetchRecipe = async (id) => {
  try {
    const response = await Axios.get(`/recipes/${id}`);
    return response.data || {};
  } catch (error) {
    console.error("fetchRecipe -> error", error);
    return {};
  }
}
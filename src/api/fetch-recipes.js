import { Axios } from ".";

export const fetchRecipes = async ({limit}) => {
  try {
    const response = await Axios.get(`/recipes?limit=${limit}`);
    return response.data?.recipes || [];
  } catch (error) {
    console.error("fetchRecipes -> error", error);
    return [];
  }
}

import { Axios } from ".";


export const deleteRecipe = async(recipeId) => {

  const reposne = await Axios.delete(`/recipes/${recipeId}.json`);
  console.log('response', response)
  return reposne
}
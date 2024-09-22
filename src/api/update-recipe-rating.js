import { Axios } from ".";


export const updateRecipeRating = async(recipeId, newRating, newReviewCount) => {
  const response = await Axios.patch(`/recipes/${recipeId}.json`, {
    rating: newRating,
    reviewCount: newReviewCount
  })
  return response
}
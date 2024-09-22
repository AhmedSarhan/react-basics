import { Axios } from "./index";

export const addRecipes = async (data) => {
  for (let i = 0; i < data.length; i++) {
    await Axios.post("/recipes.json", data[i]);
  }
};

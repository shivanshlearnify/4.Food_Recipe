const API = "6180a9c6246e4373a5b9fc607d8b9757";


export const getFoodData = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=1&cuisine=indian&apiKey=${API}&includeNutrition=true`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getRecipeInformation = async (id) => {
  try {
    const response = await fetch(
       `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
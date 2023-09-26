// Get data in recipes.json
export async function getRecipesData() {
  const response = await fetch('./../../data/recipes.json');
  const recipesData = await response.json();

  return recipesData;
}

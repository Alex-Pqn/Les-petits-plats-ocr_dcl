// Get data in recipes.json
export async function getRecipesData() {
  const response = await fetch(
    'https://alex-pqn.github.io/Les-petits-plats-ocr_dcl/data/recipes.json'
  )
  const recipesData = await response.json()

  return recipesData
}

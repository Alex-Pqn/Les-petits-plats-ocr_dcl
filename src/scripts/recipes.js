import { Recipe } from '../scripts/class/recipe'
import { recipeTemplate } from '../scripts/templates/recipe'
import { initFilters } from '../scripts/filters'
import { getRecipesData } from '../scripts/index'

export let recipes = []

/**
 * Display recipes
 * @param {Array.<{utensilFilters: [], applianceFilters: [], ingredientFilters: []}>}
 */
function displayRecipes(recipesData) {
  const recipesSection = document.querySelector('.recipes-items')

  const utensils = []
  const appliances = []
  const ingredients = []

  recipesData.forEach((recipe) => {
    const newRecipe = new Recipe(recipe)
    const recipeCardDOM = recipeTemplate(newRecipe)
    recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM)

    utensils.push(...newRecipe['newUtensils'])
    appliances.push(newRecipe.newAppliance)
    ingredients.push(...newRecipe['newIngredients'])

    recipes.push(newRecipe)
  })

  initFilters(utensils, appliances, ingredients)
}

async function init() {
  const recipesData = await getRecipesData()

  displayRecipes(recipesData)
}

init()

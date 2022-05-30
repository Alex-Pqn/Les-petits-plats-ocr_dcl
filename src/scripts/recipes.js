import { Recipe } from '../scripts/class/recipe'
import { recipeTemplate } from '../scripts/templates/recipe'
import { utensilFilters, applianceFilters, ingredientFilters } from '../scripts/filters'
import { getRecipesData } from '../scripts/index'

export let recipes = []

/**
 * display recipes
 * @param {Array.<{utensilFilters: [], applianceFilters: [], ingredientFilters: []}>} recipes 
 * @param {*} filters 
 */
function displayRecipes (recipesData, filters) {
	const recipesSection = document.querySelector('.recipes-items');

	recipesData.forEach(recipe => {
		const newRecipe = new Recipe(recipe);
		const recipeCardDOM = recipeTemplate(newRecipe);
		recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);
      
		utensilFilters.push(...newRecipe['newUtensils'])
		applianceFilters.push(newRecipe.newAppliance)
		ingredientFilters.push(...newRecipe['newIngredients'])

		recipes.push(newRecipe)
	});
}

async function init () {
  const recipesData = await getRecipesData()
  
  displayRecipes(recipesData);
}

init()
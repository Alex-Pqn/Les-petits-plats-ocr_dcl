import { Recipe } from '../scripts/class/recipe'
import { recipeTemplate } from '../scripts/templates/recipe'
import { utensilFilters, applianceFilters, ingredientFilters } from '../scripts/filters'

let activeRecipesArray = []
/**
 * 
 * @param {Array.<{utensilFilters: [], applianceFilters: [], ingredientFilters: []}>} recipes 
 * @param {*} filters 
 */
function displayRecipes (recipes, filters) {
	const recipesSection = document.querySelector('.recipes-items');

	recipes.forEach(recipe => {
		const newRecipe = new Recipe(recipe);
		const recipeCardDOM = recipeTemplate(newRecipe);
		recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);

		utensilFilters.push(...newRecipe['newUtensils'])
		applianceFilters.push(newRecipe.newAppliance)
		ingredientFilters.push(...newRecipe['newIngredients'])

		activeRecipesArray.push(newRecipe)
	});
}

async function init () {
	const response = await fetch('../../data/recipes.json');
	const recipesData = await response.json();

  displayRecipes(recipesData);
}

init()
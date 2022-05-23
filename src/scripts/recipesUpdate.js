import { utensilTags, applianceTags, ingredientTags } from '../scripts/tags'
import { recipes } from '../scripts/recipes'

const searchInput = document.getElementById('search-input')

let searchFilter = ''
let activeRecipes = recipes

searchInput.addEventListener('input', (event) => {
  searchFilter = event.target.value
  updateRecipes()
})

function updateRecipesValidation () {
	const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilFilterActive = () => utensilTags.length >= 1
	const isApplianceFilterActive = () => applianceTags.length >= 1
	const isIngredientFilterActive = () => ingredientTags.length >= 1

	if (isSearchFilterActive() || isUtensilFilterActive() || isApplianceFilterActive() || isIngredientFilterActive()) return true
}

function resetRecipes () {
	activeRecipes = []
}

export function updateRecipes () {
  if (updateRecipesValidation()) {
    console.log('update recipes')
  }
}
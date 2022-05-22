import { utensilFilters, applianceFilters, ingredientFilters } from '../scripts/filters'

const searchInput = document.getElementById('search-input').value

function resetRecipes () {
	activeRecipesArray = []
}

function updateRecipes () {
	isSearchInputActive = () => document.getElementById('search-input').value.length >= 3
	isUtensilFilterActive = () => utensilFilters.length >= 1
	isApplianceFilterActive = () => applianceFilters.length >= 1
	isIngredientFilterActive = () => ingredientFilters.length >= 1

	if (isSearchInputActive() || (isUtensilFilterActive() || isApplianceFilterActive() || isIngredientFilterActive()) && isSearchInputActive()) {
		resetRecipes()
	}
}
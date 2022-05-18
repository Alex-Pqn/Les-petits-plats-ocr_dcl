import { utensilsFilters, appliancesFilters, ingredientsFilters } from '../scripts/filters'

const searchInput = document.getElementById('search-input').value

function resetRecipes () {
	activeRecipesArray = []
}

function updateRecipes () {
	isSearchInputActive = () => document.getElementById('search-input').value.length >= 3
	isUtensilFilterActive = () => utensilsFilters.length >= 1
	isApplianceFilterActive = () => appliancesFilters.length >= 1
	isIngredientFilterActive = () => ingredientsFilters.length >= 1

	if (isSearchInputActive() || (isUtensilFilterActive() || isApplianceFilterActive() || isIngredientFilterActive()) && isSearchInputActive()) {
		resetRecipes()
	}
}
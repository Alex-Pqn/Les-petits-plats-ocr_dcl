import { utensilTags, applianceTags, ingredientTags } from '../scripts/tags'
import { recipeTemplate } from '../scripts/templates/recipe'
import { recipes } from '../scripts/recipes'

const searchInput = document.getElementById('search-input')

let searchFilter = ''
let activeRecipes = recipes

searchInput.addEventListener('input', (event) => {
  searchFilter = event.target.value.toLowerCase()
  updateRecipes()
})

function reloadRecipes () {
  const recipesSection = document.querySelector('.recipes-items');
  const recipeItems = document.querySelectorAll('.recipes-item');
  
  recipeItems.forEach(recipe => recipe.remove())

	activeRecipes.forEach(recipe => {
    console.log(recipe)
		const recipeCardDOM = recipeTemplate(recipe);
		recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);
	});
}

export function updateRecipes () {
  const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilsFilterActive = () => utensilTags.length >= 1
	const isAppliancesFilterActive = () => applianceTags.length >= 1
	const isIngredientsFilterActive = () => ingredientTags.length >= 1
  
  if (isSearchFilterActive() || isUtensilsFilterActive() || isAppliancesFilterActive() || isIngredientsFilterActive()) {
    const newActiveRecipes = recipes.filter(function (recipe) {
      let ingredientStep = false
      let applianceStep = false
      let utensilStep = false
      let searchStep = false
      
      // ingredients filter
      if (isIngredientsFilterActive() && (ingredientTags.every(ingredient => recipe._newIngredients.includes(ingredient)))) ingredientStep = true
      // appliances filter
      if (isAppliancesFilterActive() && (applianceTags.every(appliance => recipe._newAppliance.includes(appliance)))) applianceStep = true
      // utensils filter
      if (isUtensilsFilterActive() && (utensilTags.every(utensil => recipe._newUtensils.includes(utensil)))) utensilStep = true
      
      // search filters
      if (isSearchFilterActive()) {
        // ingredients
        if (recipe._newIngredients.some(ingredient => searchFilter.includes(ingredient))) searchStep = true
        // name
        if (recipe.newName.includes(searchFilter)) searchStep = true
        // description
        if (recipe.newDescription.includes(searchFilter)) searchStep = true 
      }
      
      // steps validation
      if (
        (!isIngredientsFilterActive() || (isIngredientsFilterActive() && ingredientStep)) && 
        ((!isAppliancesFilterActive() || isAppliancesFilterActive() && applianceStep)) && 
        (!isUtensilsFilterActive() || (isUtensilsFilterActive() && utensilStep)) &&
        (!isSearchFilterActive() || (isSearchFilterActive() && searchStep))
        ) return true
    })
    activeRecipes = newActiveRecipes
    reloadRecipes()
  }
  else if (!isSearchFilterActive() && !isUtensilsFilterActive() && !isAppliancesFilterActive() && !isIngredientsFilterActive()) {
    activeRecipes = recipes
    reloadRecipes()
  }
}
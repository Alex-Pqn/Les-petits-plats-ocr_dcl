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
  const recipesEmpty = document.querySelector('.recipes-empty')
  
  recipeItems.forEach(recipe => recipe.remove())
  
  if (activeRecipes.length === 0) recipesEmpty.classList.add('recipes-empty-active')
  else recipesEmpty.classList.remove('recipes-empty-active')

	activeRecipes.forEach((recipe) => {
		const recipeCardDOM = recipeTemplate(recipe);
		recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);
	});
}
/**
 * JSDOC ICI
 */
export function updateRecipes () {
  const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilsFilterActive = () => utensilTags.length >= 1
	const isAppliancesFilterActive = () => applianceTags.length >= 1
	const isIngredientsFilterActive = () => ingredientTags.length >= 1
  
  if (isSearchFilterActive() || isUtensilsFilterActive() || isAppliancesFilterActive() || isIngredientsFilterActive()) {
    const newActiveRecipes = recipes.filter(function (recipe) {
     
      // filterStep return true if : there is minimum 1 filter && recipe contains all the filters
      const ingredientStep = isIngredientsFilterActive() && (ingredientTags.every(ingredient => recipe._newIngredients.includes(ingredient)))
      const applianceStep = isAppliancesFilterActive() && (applianceTags.every(appliance => recipe._newAppliance.includes(appliance)))
      const utensilStep = isUtensilsFilterActive() && (utensilTags.every(utensil => recipe._newUtensils.includes(utensil)))
      
      let searchStep = false

      if (isSearchFilterActive()) {
        // ingredients
        // searchStep return true if recipe ingredients contains minimum one ingredient
        if (recipe._newIngredients.some(ingredient => searchFilter.includes(ingredient))) searchStep = true
        // name/title
        // searchStep return true if recipe name match with search filter
        if (recipe.newName.includes(searchFilter)) searchStep = true
        // description
        // searchStep return true if recipe description match with search filter
        if (recipe.newDescription.includes(searchFilter)) searchStep = true 
      }
      
      // steps validation
      if (
        (!isIngredientsFilterActive() || ingredientStep) && 
        (!isAppliancesFilterActive() || applianceStep) && 
        (!isUtensilsFilterActive() || utensilStep) &&
        (!isSearchFilterActive() || searchStep)
        ) return true
    })
    // push active recipes
    activeRecipes = newActiveRecipes
    reloadRecipes()
  }
  else if (!isSearchFilterActive() && !isUtensilsFilterActive() && !isAppliancesFilterActive() && !isIngredientsFilterActive()) {
    // reinitialyze recipes
    activeRecipes = recipes
    reloadRecipes()
  }
}
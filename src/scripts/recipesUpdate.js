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
 * @param {String} searchFilter
 * @param {Array} utensilTags
 * @param {Array} applianceTags
 * @param {Array} ingredientTags
 */
export function updateRecipes () {
  const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilsFilterActive = () => utensilTags.length >= 1
	const isAppliancesFilterActive = () => applianceTags.length >= 1
	const isIngredientsFilterActive = () => ingredientTags.length >= 1
  
  if (isSearchFilterActive() || isUtensilsFilterActive() || isAppliancesFilterActive() || isIngredientsFilterActive()) {
    const ingredientStep = isIngredientsFilterActive() && sortIngredientsFilter()
    const applianceStep = isAppliancesFilterActive() && sortAppliancesFilter()
    const utensilStep = isUtensilsFilterActive() && sortUtensilsFilter
    const searchStep = false
    
    function sortIngredientsFilter () {
      return true
    }
    function sortAppliancesFilter () {
      return true
    }
    function sortUtensilsFilter () {
      return true
    }
    
    if (isSearchFilterActive()) {
      
    }
    
    // const newActiveRecipes = recipes.filter(function (recipe) {
     
    //   const ingredientStep = isIngredientsFilterActive() && (ingredientTags.every(ingredient => recipe._newIngredients.includes(ingredient)))
    //   const applianceStep = isAppliancesFilterActive() && (applianceTags.every(appliance => recipe._newAppliance.includes(appliance)))
    //   const utensilStep = isUtensilsFilterActive() && (utensilTags.every(utensil => recipe._newUtensils.includes(utensil)))
      
    //   let searchStep = false
    //   if (isSearchFilterActive()) {
    //     if (recipe._newIngredients.some(ingredient => searchFilter.includes(ingredient))) searchStep = true
    //     if (recipe.newName.includes(searchFilter)) searchStep = true
    //     if (recipe.newDescription.includes(searchFilter)) searchStep = true 
    //   }
      
  if (
    (!isIngredientsFilterActive() || ingredientStep) && 
    (!isAppliancesFilterActive() || applianceStep) && 
    (!isUtensilsFilterActive() || utensilStep) &&
    (!isSearchFilterActive() || searchStep)
    ) {
      activeRecipes = newActiveRecipes
      reloadRecipes()
    }
  }
  else if (!isSearchFilterActive() && !isUtensilsFilterActive() && !isAppliancesFilterActive() && !isIngredientsFilterActive()) {
    // reinitialyze recipes
    activeRecipes = recipes
    reloadRecipes()
  }
}
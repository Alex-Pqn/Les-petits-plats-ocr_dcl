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
<<<<<<< HEAD
  
  recipeItems.forEach(recipe => recipe.remove())

	activeRecipes.forEach(recipe => {
    console.log(recipe)
=======
  const recipesEmpty = document.querySelector('.recipes-empty')
  
  recipeItems.forEach(recipe => recipe.remove())
  
  if (activeRecipes.length === 0) recipesEmpty.classList.add('recipes-empty-active')
  else recipesEmpty.classList.remove('recipes-empty-active')

	activeRecipes.forEach((recipe) => {
>>>>>>> main
		const recipeCardDOM = recipeTemplate(recipe);
		recipesSection.insertAdjacentHTML('beforeend', recipeCardDOM);
	});
}
<<<<<<< HEAD

=======
/**
 * JSDOC ICI
 */
>>>>>>> main
export function updateRecipes () {
  const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilsFilterActive = () => utensilTags.length >= 1
	const isAppliancesFilterActive = () => applianceTags.length >= 1
	const isIngredientsFilterActive = () => ingredientTags.length >= 1
  
  if (isSearchFilterActive() || isUtensilsFilterActive() || isAppliancesFilterActive() || isIngredientsFilterActive()) {
    const newActiveRecipes = recipes.filter(function (recipe) {
<<<<<<< HEAD
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
=======
     
      /*
        com ici
      */
      const ingredientStep = isIngredientsFilterActive() && (ingredientTags.every(ingredient => recipe._newIngredients.includes(ingredient)))
      const applianceStep = isAppliancesFilterActive() && (applianceTags.every(appliance => recipe._newAppliance.includes(appliance)))
      const utensilStep = isUtensilsFilterActive() && (utensilTags.every(utensil => recipe._newUtensils.includes(utensil)))
      
      let searchStep = false
      // décrire
      if (isSearchFilterActive()) {
        // ingredients
        if (recipe._newIngredients.some(ingredient => searchFilter.includes(ingredient))) searchStep = true
        // name/title
>>>>>>> main
        if (recipe.newName.includes(searchFilter)) searchStep = true
        // description
        if (recipe.newDescription.includes(searchFilter)) searchStep = true 
      }
      
      // steps validation
      if (
<<<<<<< HEAD
        (!isIngredientsFilterActive() || (isIngredientsFilterActive() && ingredientStep)) && 
        ((!isAppliancesFilterActive() || isAppliancesFilterActive() && applianceStep)) && 
        (!isUtensilsFilterActive() || (isUtensilsFilterActive() && utensilStep)) &&
        (!isSearchFilterActive() || (isSearchFilterActive() && searchStep))
        ) return true
    })
=======
        (!isIngredientsFilterActive() || ingredientStep) && 
        (!isAppliancesFilterActive() || applianceStep) && 
        (!isUtensilsFilterActive() || utensilStep) &&
        (!isSearchFilterActive() || searchStep)
        ) return true
    })
    // push active recipes
>>>>>>> main
    activeRecipes = newActiveRecipes
    reloadRecipes()
  }
  else if (!isSearchFilterActive() && !isUtensilsFilterActive() && !isAppliancesFilterActive() && !isIngredientsFilterActive()) {
<<<<<<< HEAD
=======
    // reinitialyze recipes
>>>>>>> main
    activeRecipes = recipes
    reloadRecipes()
  }
}
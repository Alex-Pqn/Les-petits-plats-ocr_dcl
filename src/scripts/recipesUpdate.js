import { utensilTags, applianceTags, ingredientTags } from '../scripts/tags'
import { recipes } from '../scripts/recipes'

const searchInput = document.getElementById('search-input')

let searchFilter = ''
let activeRecipes = recipes

searchInput.addEventListener('input', (event) => {
  searchFilter = event.target.value.toLowerCase()
  updateRecipes()
})

function resetRecipes () {
	activeRecipes = []
}

export function updateRecipes () {
  const isSearchFilterActive = () => searchFilter.length >= 3
	const isUtensilFilterActive = () => utensilTags.length >= 1
	const isApplianceFilterActive = () => applianceTags.length >= 1
	const isIngredientFilterActive = () => ingredientTags.length >= 1
  
  if (isSearchFilterActive() ||isUtensilFilterActive() || isApplianceFilterActive() || isIngredientFilterActive()) { 
    
    const newActiveRecipes = activeRecipes.filter(function (recipe) {
      if (isSearchFilterActive) {
        if (recipe._newIngredients.some(ingredient => searchFilter.includes(ingredient))) return true
        if (recipe.newName.includes(searchFilter)) return true
        if (recipe.newDescription.includes(searchFilter)) return true 
      }
    })
    
    console.log(newActiveRecipes)
    
    console.log(utensilTags)
    console.log(applianceTags)
    console.log(ingredientTags)
  }
}
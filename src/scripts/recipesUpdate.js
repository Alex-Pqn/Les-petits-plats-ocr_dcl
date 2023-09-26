import { utensilTags, applianceTags, ingredientTags } from '../scripts/tags';
import { recipeTemplate } from '../scripts/templates/recipe';
import { recipes } from '../scripts/recipes';

const searchInput = document.getElementById('search-input');

let searchFilter = '';
let activeRecipes = recipes;

searchInput.addEventListener('input', (event) => {
  searchFilter = event.target.value.toLowerCase();
  updateRecipes();
});

function reloadRecipes() {
  const recipesSection = document.querySelector('.recipes-items');
  const recipeItems = document.querySelectorAll('.recipes-item');
  const recipesEmpty = document.querySelector('.recipes-empty');

  recipeItems.forEach((recipe) => recipe.remove());

  if (activeRecipes.length === 0)
    recipesEmpty.classList.add('recipes-empty-active');
  else recipesEmpty.classList.remove('recipes-empty-active');

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
export function updateRecipes() {
  const isSearchFilterActive = () => searchFilter.length >= 3;
  const isUtensilsFilterActive = () => utensilTags.length >= 1;
  const isAppliancesFilterActive = () => applianceTags.length >= 1;
  const isIngredientsFilterActive = () => ingredientTags.length >= 1;

  if (
    isSearchFilterActive() ||
    isUtensilsFilterActive() ||
    isAppliancesFilterActive() ||
    isIngredientsFilterActive()
  ) {
    // push active recipes
    // activeRecipes = newActiveRecipes;
    reloadRecipes();
  } else if (
    !isSearchFilterActive() &&
    !isUtensilsFilterActive() &&
    !isAppliancesFilterActive() &&
    !isIngredientsFilterActive()
  ) {
    // reinitialyze recipes
    activeRecipes = recipes;
    reloadRecipes();
  }
}

window.updateRecipes = updateRecipes;

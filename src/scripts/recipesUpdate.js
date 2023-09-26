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
    const newActiveRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];

      const ingredientStep =
        isIngredientsFilterActive() && isRecipeContainsIngredientsTags();
      const applianceStep =
        isAppliancesFilterActive() && isRecipeContainsAppliancesTags();
      const utensilStep =
        isUtensilsFilterActive() && isRecipeContainsUtensilsTags();

      // return true if recipe ingredients contains all the ingredient tags
      function isRecipeContainsIngredientsTags() {
        let isRecipeContainsTags = true;

        for (const ingredientTag of ingredientTags) {
          for (const [
            i,
            recipeIngredient,
          ] of recipe._newIngredients.entries()) {
            // ingredient tag match with recipe ingredients
            if (ingredientTag === recipeIngredient) break;

            // last iteration & no one match
            if (i === recipe._newIngredients.length - 1) {
              isRecipeContainsTags = false;
            }
          }
        }
        return isRecipeContainsTags;
      }

      // return true if recipe appliance match with all the appliance tags
      function isRecipeContainsAppliancesTags() {
        let isRecipeContainsTags = true;

        for (const applianceTag of applianceTags) {
          // appliance tag didn't match with recipe appliance
          if (applianceTag !== recipe._newAppliance)
            isRecipeContainsTags = false;
        }
        return isRecipeContainsTags;
      }

      // return true if recipe utensils contains all the utensil tags
      function isRecipeContainsUtensilsTags() {
        let isRecipeContainsTags = true;

        for (const utensilTag of utensilTags) {
          for (const [i, recipeUtensil] of recipe._newUtensils.entries()) {
            // utensil tag match with recipe utensils
            if (utensilTag === recipeUtensil) break;

            // last iteration & no one match
            if (i === recipe._newUtensils.length - 1) {
              isRecipeContainsTags = false;
            }
          }
        }
        return isRecipeContainsTags;
      }

      let searchStep = false;

      if (isSearchFilterActive()) {
        // ingredients
        // searchStep return true if recipe ingredients contains minimum one ingredient
        for (const recipeIngredient of recipe._newIngredients)
          if (recipeIngredient === searchFilter) searchStep = true;

        // name/title
        // searchStep return true if recipe name match with search filter
        if (recipe.newName === searchFilter) searchStep = true;

        // description
        // searchStep return true if recipe description match with search filter
        if (recipe.newDescription === searchFilter) searchStep = true;
      }

      // steps validation
      if (
        (!isIngredientsFilterActive() || ingredientStep) &&
        (!isAppliancesFilterActive() || applianceStep) &&
        (!isUtensilsFilterActive() || utensilStep) &&
        (!isSearchFilterActive() || searchStep)
      )
        newActiveRecipes.push(recipe);
    }

    // push active recipes
    activeRecipes = newActiveRecipes;
    reloadRecipes();
  } else {
    // reinitialyze recipes
    activeRecipes = recipes;
    reloadRecipes();
  }
}

window.updateRecipes = updateRecipes;

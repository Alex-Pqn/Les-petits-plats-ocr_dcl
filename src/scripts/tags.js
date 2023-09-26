import { tagApplianceTemplate } from '../scripts/templates/tagAppliance';
import { tagIngredientTemplate } from '../scripts/templates/tagIngredient';
import { tagUtensilTemplate } from '../scripts/templates/tagUtensil';
import { getNormalizedString } from '../scripts/global';
import {
  insertAndUpdateApplianceFilters,
  insertAndUpdateUtensilFilters,
  insertAndUpdateIngredientFilters,
  resetIngredientFilters,
  resetUtensilFilters,
  resetApplianceFilters,
} from '../scripts/filters';
import {
  utensilFilters,
  applianceFilters,
  ingredientFilters,
} from '../scripts/filters';
import { updateRecipes } from '../scripts/recipesUpdate';

export let applianceTags = [];
export let ingredientTags = [];
export let utensilTags = [];

function updateAndInsertApplianceTags() {
  const appliancesTagsContainer = document.querySelector('.appliances-tags');
  const applianceItems = document.getElementsByClassName('appliance-tag-item');

  for (let i = 0; i < applianceItems.length; i++) applianceItems[i].remove();
  let domToInsert = '';

  applianceTags.forEach((applianceTag) => {
    const tagApplianceCard = tagApplianceTemplate(applianceTag);
    domToInsert += tagApplianceCard;
  });

  appliancesTagsContainer.innerHTML = domToInsert;

  updateApplianceTagsListeners();
}

function updateAndInsertIngredientsTags() {
  const ingredientsTagsContainer = document.querySelector('.ingredients-tags');
  const ingredientItems = document.getElementsByClassName(
    'ingredient-tag-item'
  );

  for (let i = 0; i < ingredientItems.length; i++) ingredientItems[i].remove();
  let domToInsert = '';

  ingredientTags.forEach((ingredientTag) => {
    const tagIngredientCard = tagIngredientTemplate(ingredientTag);
    domToInsert += tagIngredientCard;
  });

  ingredientsTagsContainer.innerHTML = domToInsert;

  updateIngredientTagsListeners();
}

function updateAndInsertUtensilTags() {
  const utensilsTagsContainer = document.querySelector('.utensils-tags');
  const utensilItems = document.getElementsByClassName('utensil-tag-item');

  for (let i = 0; i < utensilItems.length; i++) utensilItems[i].remove();
  let domToInsert = '';

  utensilTags.forEach((utensilTag) => {
    const tagUtensilCard = tagUtensilTemplate(utensilTag);
    domToInsert += tagUtensilCard;
  });

  utensilsTagsContainer.innerHTML = domToInsert;

  updateUtensilTagsListeners();
}

function updateUtensilTagsListeners() {
  const utensilsTagsItems = document.getElementsByClassName(
    'utensil-tag-item-remove'
  );

  for (let i = 0; i < utensilsTagsItems.length; i++) {
    utensilsTagsItems[i].addEventListener('click', (event) => {
      const utensilName =
        utensilsTagsItems[i].parentNode.childNodes[0].textContent;
      removeUtensilTag(getNormalizedString(utensilName));
    });
  }
}

function updateIngredientTagsListeners() {
  const ingredientTagsItems = document.getElementsByClassName(
    'ingredient-tag-item-remove'
  );

  for (let i = 0; i < ingredientTagsItems.length; i++) {
    ingredientTagsItems[i].addEventListener('click', (event) => {
      const ingredientName =
        ingredientTagsItems[i].parentNode.childNodes[0].textContent;
      removeIngredientTag(getNormalizedString(ingredientName));
    });
  }
}

function updateApplianceTagsListeners() {
  const applianceTagsItems = document.getElementsByClassName(
    'appliance-tag-item-remove'
  );

  for (let i = 0; i < applianceTagsItems.length; i++) {
    applianceTagsItems[i].addEventListener('click', (event) => {
      const applianceName =
        applianceTagsItems[i].parentNode.childNodes[0].textContent;
      removeApplianceTag(getNormalizedString(applianceName));
    });
  }
}

export function pushApplianceTag(applianceTag) {
  if (!applianceTags.includes(applianceTag)) {
    applianceTags.push(applianceTag);
    updateAndInsertApplianceTags();
    updateRecipes();
  }
}
export function pushIngredientTag(ingredientTag) {
  if (!ingredientTags.includes(ingredientTag)) {
    ingredientTags.push(ingredientTag);
    updateAndInsertIngredientsTags();
    updateRecipes();
  }
}
export function pushUtensilTag(utensilTag) {
  if (!utensilTags.includes(utensilTag)) {
    utensilTags.push(utensilTag);
    updateAndInsertUtensilTags();
    updateRecipes();
  }
}

function removeApplianceTag(applianceTag) {
  if (applianceTags.includes(applianceTag))
    applianceTags.splice(applianceTags.indexOf(applianceTag), 1);
  updateAndInsertApplianceTags();

  applianceFilters.push(applianceTag);
  resetApplianceFilters();
  insertAndUpdateApplianceFilters();

  updateRecipes();
}
function removeIngredientTag(ingredientTag) {
  if (ingredientTags.includes(ingredientTag))
    ingredientTags.splice(ingredientTags.indexOf(ingredientTag), 1);
  updateAndInsertIngredientsTags();

  ingredientFilters.push(ingredientTag);
  resetIngredientFilters();
  insertAndUpdateIngredientFilters();

  updateRecipes();
}
function removeUtensilTag(utensilTag) {
  if (utensilTags.includes(utensilTag))
    utensilTags.splice(utensilTags.indexOf(utensilTag), 1);
  updateAndInsertUtensilTags();

  utensilFilters.push(utensilTag);
  resetUtensilFilters();
  insertAndUpdateUtensilFilters();

  updateRecipes();
}

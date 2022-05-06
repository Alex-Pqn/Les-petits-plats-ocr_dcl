import { utensilsFilters, appliancesFilters, ingredientsFilters } from '../scripts/recipesUpdate'
import { filterApplianceTemplate } from '../scripts/templates/filterAppliance'
import { filterIngredientTemplate } from '../scripts/templates/filterIngredient'
import { filterUtensilTemplate } from '../scripts/templates/filterUtensil'

const ingredientsContainer = document.getElementById('ingredient-filter')
const applianceContainer = document.getElementById('appliance-filter')
const utensilContainer = document.getElementById('utensil-filter')

const ingredientsInput = document.getElementById('ingredient-input')
const applianceInput = document.getElementById('appliance-input')
const utensilInput = document.getElementById('utensil-input')

const ingredientsModal = document.querySelector('.ingredient-filter-modal ul')
const applianceModal = document.querySelector('.appliance-filter-modal ul')
const utensilModal = document.querySelector('.utensil-filter-modal ul')

window.addEventListener('load', (event) => {
  const newUtensils = new Set(utensilsFilters);
  const newAppliances = new Set(appliancesFilters);
  const newIngredients = new Set(ingredientsFilters);

  newIngredients.forEach(ingredient => ingredientsModal.insertAdjacentHTML('beforeend', filterIngredientTemplate(ingredient)));
  newAppliances.forEach(appliance => applianceModal.insertAdjacentHTML('beforeend', filterApplianceTemplate(appliance)));
  newUtensils.forEach(utensil => utensilModal.insertAdjacentHTML('beforeend', filterUtensilTemplate(utensil)));
});

ingredientsInput.addEventListener('focusin', () => {
  ingredientsModal.style.display = 'flex'
  ingredientsInput.style.width = '410px'
})
applianceInput.addEventListener('focusin', () => {
  applianceModal.style.display = 'flex'
  applianceInput.style.width = '410px'
})
utensilInput.addEventListener('focusin', () => {
  utensilModal.style.display = 'flex'
  utensilInput.style.width = '410px'
})

document.addEventListener('click', (event) => {
  if (!event.path.includes(ingredientsContainer)) {
    ingredientsModal.style.display = 'none'
    ingredientsInput.style.width = '180px'
  }
  if (!event.path.includes(applianceContainer)) {
    applianceModal.style.display = 'none'
    applianceInput.style.width = '180px'
  }
  if (!event.path.includes(utensilContainer)) {
    utensilModal.style.display = 'none'
    utensilInput.style.width = '180px'
  }
})
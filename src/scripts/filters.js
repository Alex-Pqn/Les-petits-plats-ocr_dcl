import { pushApplianceTag, pushIngredientTag, pushUtensilTag } from '../scripts/tags'
import { filterApplianceTemplate } from '../scripts/templates/filterAppliance'
import { filterIngredientTemplate } from '../scripts/templates/filterIngredient'
import { filterUtensilTemplate } from '../scripts/templates/filterUtensil'
import { getNormalizedString } from '../scripts/global'

export let utensilsFilters = []
export let appliancesFilters = []
export let ingredientsFilters = []

const ingredientsInput = document.getElementById('ingredient-input')
const applianceInput = document.getElementById('appliance-input')
const utensilInput = document.getElementById('utensil-input')

const ingredientsModal = document.querySelector('.ingredient-filter-modal ul')
const applianceModal = document.querySelector('.appliance-filter-modal ul')
const utensilModal = document.querySelector('.utensil-filter-modal ul')

window.addEventListener('load', (event) => {
  insertAndUpdateApplianceFilters()
  insertAndUpdateIngredientFilters()
  insertAndUpdateUtensilFilters()
});

export function removeApplianceFilter () {
  const applianceFilterItems = document.getElementsByClassName('appliance-filter-item')

  for (let i = 0; i < applianceFilterItems.length; i++) {
    console.log(applianceFilterItems[i])
  }
  }

function resetIngredientFilters () {
  
}

function resetUtensilFilters () {
  
}

export function insertAndUpdateApplianceFilters () {
  const applianceFilterItems = document.getElementsByClassName('appliance-filter-item')

  const newAppliances = new Set(appliancesFilters);
  newAppliances.forEach(appliance => applianceModal.insertAdjacentHTML('beforeend', filterApplianceTemplate(appliance)));

  for (let i = 0; i < applianceFilterItems.length; i++) {
    applianceFilterItems[i].addEventListener('click', (event) => {
        const applianceName = getNormalizedString(event.target.textContent)

        pushApplianceTag(applianceName)

        if (newAppliances.has(applianceName)) {
          newAppliances.delete(applianceName)

          for (let i = 0; i < applianceFilterItems.length; i++) {
            if (getNormalizedString(applianceFilterItems[i].textContent) === applianceName) {
              applianceFilterItems[i].remove()
            }
          }
        }
    })
  }
}

export function insertAndUpdateIngredientFilters () {
  const ingredientFilterItems = document.getElementsByClassName('ingredient-filter-item')

  const newIngredients = new Set(ingredientsFilters);
  newIngredients.forEach(ingredient => ingredientsModal.insertAdjacentHTML('beforeend', filterIngredientTemplate(ingredient)));

  for (let i = 0; i < ingredientFilterItems.length; i++) {
    ingredientFilterItems[i].addEventListener('click', (event) => {
      const ingredientName = getNormalizedString(event.target.textContent)
      pushIngredientTag(ingredientName)

      if (newIngredients.has(ingredientName)) {
        newIngredients.delete(ingredientName)

        for (let i = 0; i < ingredientFilterItems.length; i++) {
          if (getNormalizedString(ingredientFilterItems[i].textContent) === ingredientName) {
            ingredientFilterItems[i].remove()
          }
        }
      }
    })
  }
}

export function insertAndUpdateUtensilFilters () {
  const utensilFilterItems = document.getElementsByClassName('utensil-filter-item')

  const newUtensils = new Set(utensilsFilters);
  newUtensils.forEach(utensil => utensilModal.insertAdjacentHTML('beforeend', filterUtensilTemplate(utensil)));

  for (let i = 0; i < utensilFilterItems.length; i++) {
    utensilFilterItems[i].addEventListener('click', (event) => {
      const utensilName = getNormalizedString(event.target.textContent)
      pushUtensilTag(utensilName)

      if (newUtensils.has(utensilName)) {
        newUtensils.delete(utensilName)

        for (let i = 0; i < utensilFilterItems.length; i++) {
          if (getNormalizedString(utensilFilterItems[i].textContent) === utensilName) {
            utensilFilterItems[i].remove()
          }
        }
      }
    })
  }
}

ingredientsInput.addEventListener('focusin', () => {
  ingredientsModal.classList.add('filter-modal-active')
  ingredientsInput.classList.add('filter-input-active')
})
applianceInput.addEventListener('focusin', () => {
  applianceModal.classList.add('filter-modal-active')
  applianceInput.classList.add('filter-input-active')
})
utensilInput.addEventListener('focusin', () => {
  utensilModal.classList.add('filter-modal-active')
  utensilInput.classList.add('filter-input-active')
})

document.addEventListener('click', (event) => {
  const ingredientsContainer = document.getElementById('ingredient-filter')
  const applianceContainer = document.getElementById('appliance-filter')
  const utensilContainer = document.getElementById('utensil-filter')
  
  if (!event.path.includes(ingredientsContainer)) {
    ingredientsModal.classList.remove('filter-modal-active')
    ingredientsInput.classList.remove('filter-input-active')
  }
  if (!event.path.includes(applianceContainer)) {
    applianceModal.classList.remove('filter-modal-active')
    applianceInput.classList.remove('filter-input-active')
  }
  if (!event.path.includes(utensilContainer)) {
    utensilModal.classList.remove('filter-modal-active')
    utensilInput.classList.remove('filter-input-active')
  }
})
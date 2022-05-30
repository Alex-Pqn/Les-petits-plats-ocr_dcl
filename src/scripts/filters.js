import { pushApplianceTag, pushIngredientTag, pushUtensilTag } from '../scripts/tags'
import { updateIngredientFiltersModal, updateApplianceFiltersModal, updateUtensilFiltersModal } from '../scripts/filtersSearch'
import { filterApplianceTemplate } from '../scripts/templates/filterAppliance'
import { filterIngredientTemplate } from '../scripts/templates/filterIngredient'
import { filterUtensilTemplate } from '../scripts/templates/filterUtensil'
import { getNormalizedString } from '../scripts/global'

export let utensilFilters = []
export let applianceFilters = []
export let ingredientFilters = []

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
  
  ingredientsInput.addEventListener('input', (event) => {
    const ingredientsInputSearch = event.target.value
    updateIngredientFiltersModal(ingredientsInputSearch)
  })
  applianceInput.addEventListener('input', (event) => {
    const appliancesInputSearch = event.target.value
    updateApplianceFiltersModal(appliancesInputSearch)
  })
  utensilInput.addEventListener('input', (event) => {
    const utensilsInputSearch = event.target.value
    updateUtensilFiltersModal(utensilsInputSearch)
  })
});

export function insertAndUpdateApplianceFilters () {
  const applianceFilterItems = document.getElementsByClassName('appliance-filter-item')
  
  for (let i = 0; i < applianceFilterItems.length; i++) applianceFilterItems[i].remove()
  let domToInsert = ''

  // alphabetic sort & prevent duplication with Set
  const applianceFiltersSet = new Set(Array.from(applianceFilters).sort((a, b) => a.localeCompare(b)))
  applianceFilters = Array.from(applianceFiltersSet)
  
  // display filters in modal
  applianceFilters.forEach((applianceFilter, i) => {
    const maximumDisplayItems = 26
    
    if (i < maximumDisplayItems) {
      const filterApplianceCard = filterApplianceTemplate(applianceFilter)
      domToInsert += filterApplianceCard
    }
  });
  applianceModal.innerHTML = domToInsert

  // add event listeners
  for (let i = 0; i < applianceFilterItems.length; i++) {
    applianceFilterItems[i].addEventListener('click', (event) => {
        const applianceName = getNormalizedString(event.target.textContent)
        
        // push filter to tags list
        pushApplianceTag(applianceName)
        
        // remove filter from filters list
        if (applianceFilters.has(applianceName)) {
          applianceFilters.delete(applianceName)
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

  for (let i = 0; i < ingredientFilterItems.length; i++) ingredientFilterItems[i].remove()
  let domToInsert = ""

  // alphabetic sort & prevent duplication with Set
  const ingredientFiltersSet = new Set(Array.from(ingredientFilters).sort((a, b) => a.localeCompare(b)))
  ingredientFilters = Array.from(ingredientFiltersSet)
  
  // display filters in modal
  ingredientFilters.forEach((ingredientFilter, i) => {
    const maximumDisplayItems = 26
    
    if (i < maximumDisplayItems) {
      const filterIngredientCard = filterIngredientTemplate(ingredientFilter)
      domToInsert += filterIngredientCard
    }
  });
  ingredientsModal.innerHTML = domToInsert
  
  // add event listeners
  for (let i = 0; i < ingredientFilterItems.length; i++) {
    ingredientFilterItems[i].addEventListener('click', (event) => {
      const ingredientName = getNormalizedString(event.target.textContent)
      
      // push filter to tags list
      pushIngredientTag(ingredientName)

      // remove filter from filters list
      if (ingredientFilters.has(ingredientName)) {
        ingredientFilters.delete(ingredientName)
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
  
  for (let i = 0; i < utensilFilterItems.length; i++) utensilFilterItems[i].remove()
  let domToInsert = ""

  // alphabetic sort & prevent duplication with Set
  const utensilFiltersSet = new Set (Array.from(utensilFilters).sort((a, b) => a.localeCompare(b)))
  ingredientFilters = Array.from(utensilFiltersSet)
  
  // display filters in modal
  utensilFilters.forEach((utensilFilter, i) => {
    const maximumDisplayItems = 26
    
    if (i < maximumDisplayItems) {
      const filterUtensilCard = filterUtensilTemplate(utensilFilter)
      domToInsert += filterUtensilCard
    }
  });
  utensilModal.innerHTML = domToInsert
  
  // add event listeners
  for (let i = 0; i < utensilFilterItems.length; i++) {
    utensilFilterItems[i].addEventListener('click', (event) => {
      const utensilName = getNormalizedString(event.target.textContent)
      
      // push filter to tags list
      pushUtensilTag(utensilName)

      // remove filter from filters list
      if (utensilFilters.has(utensilName)) {
        utensilFilters.delete(utensilName)
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
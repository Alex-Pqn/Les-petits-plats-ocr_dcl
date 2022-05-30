import { pushApplianceTag, pushIngredientTag, pushUtensilTag } from '../scripts/tags'
import { updateIngredientFiltersModal, updateApplianceFiltersModal, updateUtensilFiltersModal } from '../scripts/filtersSearch'
import { filterApplianceTemplate } from '../scripts/templates/filterAppliance'
import { filterIngredientTemplate } from '../scripts/templates/filterIngredient'
import { filterUtensilTemplate } from '../scripts/templates/filterUtensil'
import { getNormalizedString } from '../scripts/global'

export let utensilFilters = []
export let applianceFilters = []
export let ingredientFilters = []

export let activeUtensilFilters
export let activeApplianceFilters
export let activeIngredientFilters

const ingredientsInput = document.getElementById('ingredient-input')
const applianceInput = document.getElementById('appliance-input')
const utensilInput = document.getElementById('utensil-input')

const ingredientsModal = document.querySelector('.ingredient-filter-modal ul')
const applianceModal = document.querySelector('.appliance-filter-modal ul')
const utensilModal = document.querySelector('.utensil-filter-modal ul')

window.addEventListener('load', (event) => {
  activeUtensilFilters = Array.from(new Set(utensilFilters))
  activeApplianceFilters = Array.from(new Set(applianceFilters))
  activeIngredientFilters = Array.from(new Set(ingredientFilters))
  
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

export function resetIngredientFilters () {
  activeIngredientFilters = ingredientFilters
}
export function resetUtensilFilters () {
  activeUtensilFilters = utensilFilters
}
export function resetApplianceFilters () {
  activeApplianceFilters = applianceFilters
}

export function insertAndUpdateApplianceFilters () {
  const applianceFilterItems = document.getElementsByClassName('appliance-filter-item')
  
  for (let i = 0; i < applianceFilterItems.length; i++) applianceFilterItems[i].remove()
  let domToInsert = ''

  // alphabetic sort & prevent duplication with Set
  const applianceFiltersSet = new Set(Array.from(applianceFilters).sort((a, b) => a.localeCompare(b)))
  applianceFilters = Array.from(applianceFiltersSet)
  
  activeApplianceFilters = activeApplianceFilters.sort((a, b) => a.localeCompare(b))
  
  // display filters in modal
  activeApplianceFilters.forEach((activeApplianceFilter, i) => {
    const maximumDisplayedItems = 26
    
    if (i < maximumDisplayedItems) {
      const filterApplianceCard = filterApplianceTemplate(activeApplianceFilter)
      domToInsert += filterApplianceCard
    }
  });
  applianceModal.innerHTML = domToInsert
  
  // reset active appliance filters
  activeApplianceFilters = []

  // add event listeners
  for (let i = 0; i < applianceFilterItems.length; i++) {
    applianceFilterItems[i].addEventListener('click', (event) => {
        const applianceName = getNormalizedString(event.target.textContent)
        
        // push filter to tags list
        pushApplianceTag(applianceName)
        
        // remove filter from filters list
        if (applianceFilters.includes(applianceName)) {
          applianceFilters.splice(applianceFilters.indexOf(applianceName), 1)
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
  
  activeIngredientFilters = activeIngredientFilters.sort((a, b) => a.localeCompare(b))
  
  // display filters in modal
  activeIngredientFilters.forEach((activeIngredientFilter, i) => {
    const maximumDisplayedItems = 26
    
    if (i < maximumDisplayedItems) {
      const filterIngredientCard = filterIngredientTemplate(activeIngredientFilter)
      domToInsert += filterIngredientCard
    }
  });
  ingredientsModal.innerHTML = domToInsert
  
  // reset active ingredient filters
  activeIngredientFilters = []
  
  // add event listeners
  for (let i = 0; i < ingredientFilterItems.length; i++) {
    ingredientFilterItems[i].addEventListener('click', (event) => {
      const ingredientName = getNormalizedString(event.target.textContent)
      
      // push filter to tags list
      pushIngredientTag(ingredientName)

      // remove filter from filters list
      if (ingredientFilters.includes(ingredientName)) {
        ingredientFilters.splice(ingredientFilters.indexOf(ingredientName), 1)
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
  utensilFilters = Array.from(utensilFiltersSet)
  
  activeUtensilFilters = activeUtensilFilters.sort((a, b) => a.localeCompare(b))
  
  // display filters in modal
  activeUtensilFilters.forEach((activeUtensilFilter, i) => {
    const maximumDisplayItems = 26
    
    if (i < maximumDisplayItems) {
      const filterUtensilCard = filterUtensilTemplate(activeUtensilFilter)
      domToInsert += filterUtensilCard
    }
  });
  utensilModal.innerHTML = domToInsert
  
  // reset active utensil filters
  activeUtensilFilters = []
  
  // add event listeners
  for (let i = 0; i < utensilFilterItems.length; i++) {
    utensilFilterItems[i].addEventListener('click', (event) => {
      const utensilName = getNormalizedString(event.target.textContent)
      
      // push filter to tags list
      pushUtensilTag(utensilName)

      // remove filter from filters list
      if (utensilFilters.includes(utensilName)) {
        utensilFilters.splice(utensilFilters.indexOf(utensilName), 1)
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
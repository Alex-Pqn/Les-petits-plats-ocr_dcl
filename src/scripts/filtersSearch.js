import { utensilFilters, applianceFilters, ingredientFilters } from '../scripts/filters'
import { insertAndUpdateApplianceFilters, insertAndUpdateUtensilFilters, insertAndUpdateIngredientFilters } from '../scripts/filters'
import { getNormalizedString } from '../scripts/global'

const applianceFilterItems = document.getElementsByClassName('appliance-filter-item')
const utensilFilterItems = document.getElementsByClassName('utensil-filter-item')
const ingredientFilterItems = document.getElementsByClassName('ingredient-filter-item')

export function updateIngredientFiltersModal (searchInput) {
  // reset ingredient filters
  insertAndUpdateIngredientFilters()
  
  if (searchInput) {
    // filter ingredients by search input
    const ingredientMatches = ingredientFilters.filter(ingredientFilter => ingredientFilter.includes(searchInput))
    
    // some ingredients match with search
    if (ingredientMatches.length >= 1) {
      for (let i = ingredientFilterItems.length; i >= 0; i--) {
        if (ingredientFilterItems[i]) {
          let isIngredientMatch
        
          ingredientMatches.forEach((ingredientMatch, key, ingredientMatches) => {
            // ingredient match with filter
            if (ingredientMatch === getNormalizedString(ingredientFilterItems[i].textContent)) isIngredientMatch = true
            
            // last iteration & ingredient doesn't match with any filter
            if (Object.is(ingredientMatches.length - 1, key) && !isIngredientMatch) ingredientFilterItems[i].remove()
          })
        }
      } 
    }
    else for (let i = ingredientFilterItems.length; i > -1; i--) if (ingredientFilterItems[i]) ingredientFilterItems[i].remove()
  }
} 
export function updateUtensilFiltersModal (searchInput) {
  // reset utensil filters
  insertAndUpdateUtensilFilters()
  
  if (searchInput) {
    // filter utensils by search input
    const utensilMatches = utensilFilters.filter(utensilFilter => utensilFilter.includes(searchInput))
    
    // some utensils match with search
    if (utensilMatches.length >= 1) {
      for (let i = utensilFilterItems.length; i > -1; i--) {
        if (utensilFilterItems[i]) {
          let isUtensilMatch
        
          utensilMatches.forEach((utensilMatch, key, utensilMatches) => {
            // utensil match with filter
            if (utensilMatch === getNormalizedString(utensilFilterItems[i].textContent)) isUtensilMatch = true
            
            // last iteration & utensil doesn't match with any filter
            if (Object.is(utensilMatches.length - 1, key) && !isUtensilMatch) utensilFilterItems[i].remove()
          })
        }
      } 
    }
    else for (let i = utensilFilterItems.length; i > -1; i--) if (utensilFilterItems[i]) utensilFilterItems[i].remove()
  }
} 
export function updateApplianceFiltersModal (searchInput) {
  // reset appliance filters
  insertAndUpdateApplianceFilters()
  
  if (searchInput) {
    // filter appliances by search input
    const applianceMatches = applianceFilters.filter(applianceFilter => applianceFilter.includes(searchInput))
    
    // some appliances match with search
    if (applianceMatches.length >= 1) {
      for (let i = applianceFilterItems.length; i > -1; i--) {
        if (applianceFilterItems[i]) {
          let isApplianceMatch
        
          applianceMatches.forEach((applianceMatch, key, applianceMatches) => {
            // appliance match with filter
            if (applianceMatch === getNormalizedString(applianceFilterItems[i].textContent)) isApplianceMatch = true
            
            // last iteration & appliance doesn't match with any filter
            if (Object.is(applianceMatches.length - 1, key) && !isApplianceMatch) applianceFilterItems[i].remove()
          })
        }
      } 
    }
    else for (let i = applianceFilterItems.length; i > -1; i--) if (applianceFilterItems[i]) applianceFilterItems[i].remove()
  }
} 


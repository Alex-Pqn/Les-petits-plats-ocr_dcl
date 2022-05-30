import { utensilFilters, applianceFilters, ingredientFilters, activeUtensilFilters, activeApplianceFilters, activeIngredientFilters, resetApplianceFilters, resetUtensilFilters, resetIngredientFilters } from '../scripts/filters'
import { insertAndUpdateApplianceFilters, insertAndUpdateUtensilFilters, insertAndUpdateIngredientFilters } from '../scripts/filters'

export function updateIngredientFiltersModal (searchInput) {
  if (searchInput) {
    // filter ingredients by search input
    const ingredientMatches = ingredientFilters.filter(ingredientFilter => ingredientFilter.includes(searchInput))

    // some ingredients match with search
    if (ingredientMatches.length >= 1) {
      ingredientMatches.forEach(ingredientMatch => {
        // push ingredient filter into active ingredient filters
        activeIngredientFilters.push(ingredientMatch)
      })
      insertAndUpdateIngredientFilters()
    }
    else insertAndUpdateIngredientFilters()
  }
  else {
    resetIngredientFilters()
    insertAndUpdateIngredientFilters()
  }
} 

export function updateUtensilFiltersModal (searchInput) {
  if (searchInput) {
    // filter utensils by search input
    const utensilMatches = utensilFilters.filter(utensilFilter => utensilFilter.includes(searchInput))

    // some utensils match with search
    if (utensilMatches.length >= 1) {
      utensilMatches.forEach(utensilMatch => {
        // push utensil filter into active utensil filters
        activeUtensilFilters.push(utensilMatch)
      })
      insertAndUpdateUtensilFilters()
    }
    else insertAndUpdateUtensilFilters()
  }
  else {
    resetUtensilFilters()
    insertAndUpdateUtensilFilters()
  }
} 

export function updateApplianceFiltersModal (searchInput) {
  if (searchInput) {
    // filter appliances by search input
    const applianceMatches = applianceFilters.filter(applianceFilter => applianceFilter.includes(searchInput))

    // some appliances match with search
    if (applianceMatches.length >= 1) {
      applianceMatches.forEach(applianceMatch => {
        // push appliance filter into active appliance filters
        activeApplianceFilters.push(applianceMatch)
      })
      insertAndUpdateApplianceFilters()
    }
    else insertAndUpdateApplianceFilters()
  }
  else {
    resetApplianceFilters()
    insertAndUpdateApplianceFilters()
  }
} 
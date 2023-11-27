import {
  utensilFilters,
  applianceFilters,
  ingredientFilters,
  activeUtensilFilters,
  activeApplianceFilters,
  activeIngredientFilters,
  resetApplianceFilters,
  resetUtensilFilters,
  resetIngredientFilters,
} from '../scripts/filters'
import {
  insertAndUpdateApplianceFilters,
  insertAndUpdateUtensilFilters,
  insertAndUpdateIngredientFilters,
} from '../scripts/filters'

/**
 * Update ingredient filters modal
 * @param {String} searchInput
 */
export function updateIngredientFiltersModal(searchInput) {
  if (searchInput) {
    // filter ingredients by search input
    const ingredientMatches = ingredientFilters.filter((ingredientFilter) =>
      ingredientFilter.includes(searchInput.toLocaleLowerCase())
    )

    // some ingredients match with search
    if (ingredientMatches.length >= 1) {
      ingredientMatches.forEach((ingredientMatch) => {
        // push ingredient filter into active ingredient filters
        activeIngredientFilters.push(ingredientMatch)
      })
    }
  } else resetIngredientFilters()

  insertAndUpdateIngredientFilters()
}

/**
 * Update utensil filters modal
 * @param {String} searchInput
 */
export function updateUtensilFiltersModal(searchInput) {
  if (searchInput) {
    // filter utensils by search input
    const utensilMatches = utensilFilters.filter((utensilFilter) =>
      utensilFilter.includes(searchInput.toLocaleLowerCase())
    )

    // some utensils match with search
    if (utensilMatches.length >= 1) {
      utensilMatches.forEach((utensilMatch) => {
        // push utensil filter into active utensil filters
        activeUtensilFilters.push(utensilMatch)
      })
    }
  } else resetUtensilFilters()

  insertAndUpdateUtensilFilters()
}

/**
 * Update appliance filters modal
 * @param {String} searchInput
 */
export function updateApplianceFiltersModal(searchInput) {
  if (searchInput) {
    // filter appliances by search input
    const applianceMatches = applianceFilters.filter((applianceFilter) =>
      applianceFilter.includes(searchInput.toLocaleLowerCase())
    )

    // some appliances match with search
    if (applianceMatches.length >= 1) {
      applianceMatches.forEach((applianceMatch) => {
        // push appliance filter into active appliance filters
        activeApplianceFilters.push(applianceMatch)
      })
    }
  } else resetApplianceFilters()

  insertAndUpdateApplianceFilters()
}

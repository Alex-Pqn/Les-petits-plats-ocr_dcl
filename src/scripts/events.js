const ingredientsContainer = document.getElementById('ingredient-filter')
const applianceContainer = document.getElementById('appliance-filter')
const utensilContainer = document.getElementById('utensil-filter')

const ingredientsInput = document.getElementById('ingredient-input')
const applianceInput = document.getElementById('appliance-input')
const utensilInput = document.getElementById('utensil-input')

const ingredientsModal = document.querySelector('.ingredient-filter-modal ul')
const applianceModal = document.querySelector('.appliance-filter-modal ul')
const utensilModal = document.querySelector('.utensil-filter-modal ul')

// Event: Enter on search input
document.getElementById('search-input').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') updateRecipes()
})

// Event: Open ingredients filter modal
ingredientsInput.addEventListener('focusin', () => {
  ingredientsModal.classList.add('filter-modal-active')
  ingredientsContainer.classList.add('recipes-filter-active')
})
// Event: Open appliances filter modal
applianceInput.addEventListener('focusin', () => {
  applianceModal.classList.add('filter-modal-active')
  applianceContainer.classList.add('recipes-filter-active')
})
// Event: Open utensils filter modal
utensilInput.addEventListener('focusin', () => {
  utensilModal.classList.add('filter-modal-active')
  utensilContainer.classList.add('recipes-filter-active')
})

document.addEventListener('click', (event) => {
  // event.composedPath() for firefox compatibility
  const path = event.path || event.composedPath()

  // Event: Close ingredients filter modal
  if (!path.includes(ingredientsContainer)) {
    ingredientsModal.classList.remove('filter-modal-active')
    ingredientsContainer.classList.remove('recipes-filter-active')
  }
  // Event: Close appliances filter modal
  if (!path.includes(applianceContainer)) {
    applianceModal.classList.remove('filter-modal-active')
    applianceContainer.classList.remove('recipes-filter-active')
  }
  // Event: Close utensils filter modal
  if (!path.includes(utensilContainer)) {
    utensilModal.classList.remove('filter-modal-active')
    utensilContainer.classList.remove('recipes-filter-active')
  }
})

// Filter ingredient template
export function filterIngredientTemplate(ingredientFilter) {
  const cardTemplate = `<li class="ingredient-filter-item">
    <a href='#!'>${ingredientFilter}</a>
  </li>`;

  return cardTemplate;
}

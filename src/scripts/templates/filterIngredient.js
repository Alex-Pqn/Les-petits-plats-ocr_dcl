import { pushIngredientTag } from '../tags'

// Filter ingredient template
export function filterIngredientTemplate (ingredientFilter) {
  const cardTemplate =
  `
  <li>
    <a class="ingredient-filter-item" href='#!'>
      ${ingredientFilter}
    </a>
  </li>
  `;

  return cardTemplate;
}

import { removeIngredientTag } from '../tags'

// Tag ingredient template
export function tagIngredientTemplate (ingredientTag) {
  const cardTemplate =
  `
  <p>
    ${ingredientTag}
    <a href='#!' onclick="${removeIngredientTag(ingredientTag)}">
      x
    </a>
  </p>
  `;

  return cardTemplate;
}

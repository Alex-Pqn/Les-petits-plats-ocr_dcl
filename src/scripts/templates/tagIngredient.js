
// Tag ingredient template
export function tagIngredientTemplate (ingredientTag) {
  const cardTemplate =
  `<li class="ingredient-tag-item tag-item">${ingredientTag}
    <a class="ingredient-tag-item-remove" href='#!'>
      <i class="far fa-times-circle"></i>
    </a>
  </li>`;

  return cardTemplate;
}

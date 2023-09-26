// Tag utensil template
export function tagUtensilTemplate(utensilTag) {
  const cardTemplate = `<li class="utensil-tag-item tag-item">${utensilTag}
    <a class="utensil-tag-item-remove" href='#!'>
      <i class="far fa-times-circle"></i>
    </a>
  </li>`;

  return cardTemplate;
}

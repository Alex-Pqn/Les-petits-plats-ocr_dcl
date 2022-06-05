
// Filter utensil template
export function filterUtensilTemplate (utensilFilter) {
  const cardTemplate =
  `<li class="utensil-filter-item">
    <a href='#!'>${utensilFilter}</a>
  </li>`;

  return cardTemplate;
}

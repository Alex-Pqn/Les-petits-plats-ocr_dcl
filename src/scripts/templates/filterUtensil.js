import { pushUtensilTag } from '../tags'

// Filter utensil template
export function filterUtensilTemplate (utensilFilter) {
  const cardTemplate =
  `
  <li>
    <a class="utensil-filter-item" href='#!'>
      ${utensilFilter}
    </a>
  </li>
  `;

  return cardTemplate;
}

import { removeUtensilTag } from '../tags'

// Tag utensil template
export function tagApplianceTemplate (utensilTag) {
  const cardTemplate =
  `
  <p>
    ${utensilTag}
    <a href='#!' onclick="${removeUtensilTag(utensilTag)}">
      x
    </a>
  </p>
  `;

  return cardTemplate;
}

import { removeApplianceTag } from '../tags'

// Tag appliance template
export function tagApplianceTemplate (applianceTag) {
  const cardTemplate =
  `
  <p>
    ${applianceTag}
    <a href='#!' onclick="${removeApplianceTag(applianceTag)}">
      x
    </a>
  </p>
  `;

  return cardTemplate;
}

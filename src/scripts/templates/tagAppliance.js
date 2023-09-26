// Tag appliance template
export function tagApplianceTemplate(applianceTag) {
  const cardTemplate = `<li class="appliance-tag-item tag-item">${applianceTag}
    <a class="appliance-tag-item-remove" href='#!'>
      <i class="far fa-times-circle"></i>
    </a>
  </li>`;

  return cardTemplate;
}

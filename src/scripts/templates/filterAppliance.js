import { pushApplianceTag } from "../tags";

// Filter appliance template
export const filterApplianceTemplate = (applianceFilter) => 
  `
  <li>
    <a class="appliance-filter-item" href='#!'">
      ${applianceFilter}
    </a>
  </li>
  `;


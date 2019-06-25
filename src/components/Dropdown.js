import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "HMBA", value: 1 },
  { key: 2, text: "Web App", value: 2 }
];

const DropdownMenu = () => <Dropdown clearable options={options} selection />;
export default DropdownMenu;

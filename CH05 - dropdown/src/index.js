import { StrictMode } from "react";
import ReactDOM from "react-dom";

import DropdownForm from "./DropdownForm";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DropdownForm />
  </StrictMode>,
  rootElement
);

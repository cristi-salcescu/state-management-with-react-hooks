import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CheckboxList from "./CheckboxList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CheckboxList />
  </StrictMode>,
  rootElement
);

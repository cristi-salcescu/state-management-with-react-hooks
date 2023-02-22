import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ToggleButton from "./ToggleButton";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToggleButton />
  </StrictMode>,
  rootElement
);

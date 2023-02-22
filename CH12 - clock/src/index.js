import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Clock from "./Clock";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Clock />
  </StrictMode>,
  rootElement
);

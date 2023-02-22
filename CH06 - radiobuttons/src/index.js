import { StrictMode } from "react";
import ReactDOM from "react-dom";

import RadioList from "./RadioList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RadioList />
  </StrictMode>,
  rootElement
);

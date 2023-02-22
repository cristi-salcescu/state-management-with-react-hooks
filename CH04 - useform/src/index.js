import { StrictMode } from "react";
import ReactDOM from "react-dom";

import LoginForm from "./LoginForm";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
  rootElement
);

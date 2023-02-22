import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ModalContextProvider from "./ModalContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </StrictMode>,
  rootElement
);

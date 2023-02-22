import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Products from "./Products";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Products />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Photos from "./Photos";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Photos />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Ingame from "./ingame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Ingame />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StarComponent from "./star.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarComponent />
  </StrictMode>
);

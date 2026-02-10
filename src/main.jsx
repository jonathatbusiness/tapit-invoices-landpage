import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initScribbleAdjuster } from "./utils/scribbleAdjuster";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

setTimeout(() => {
  initScribbleAdjuster();
}, 100);

import React from "react";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

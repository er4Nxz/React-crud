import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import 'react-loading-skeleton/dist/skeleton.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

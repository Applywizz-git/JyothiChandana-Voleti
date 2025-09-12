// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";              // path must match your actual file
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

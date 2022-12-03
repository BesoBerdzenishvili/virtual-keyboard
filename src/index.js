import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "./stitches.config";
import "./index.css";
import App from "./App";

globalStyles();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

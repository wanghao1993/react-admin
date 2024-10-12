import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import "./index.css";
import App from "./App";

const dom = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(dom).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

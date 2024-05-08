import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/router/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

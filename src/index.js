import React from "react";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Routes from "./routes";
import "./styles/tailwind.min.css"

const root = createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

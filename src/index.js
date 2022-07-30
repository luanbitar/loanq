import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

// import Routes from "./routes";
import "./styles/tailwind.min.css";

import Home from "pages/Home";
import Results from "pages/Results";

const root = createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      {/* <Route path="results" element={<Results />} /> */}
      <Route path="*" element={<Results />} />
    </Routes>
  </BrowserRouter>
);

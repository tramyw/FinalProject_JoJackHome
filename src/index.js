import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdoptionInfoPage from "./AdoptionInfoPage";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <AdoptionInfoPage />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.js";
import AdoptionInfoPage from "./AdoptionInfoPage.js";
import CategoryPage from "./CategoryPage.js";
import AnimalsProfile from "./components/AnimalsProfile.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />

        <Route path="/Adoption_Info_Page" element={<AdoptionInfoPage />} />
        <Route path="/Category_Page" element={<CategoryPage />} />
        <Route
          path="Category_Page/:animal_Name"
          element={<AnimalsProfile />}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

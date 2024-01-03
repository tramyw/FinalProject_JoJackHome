import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdoptionInfoPage from "./AdoptionInfoPage";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Banner from "./components/Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Banner />
    <AdoptionInfoPage />
    <Profile />
  </React.StrictMode>
);

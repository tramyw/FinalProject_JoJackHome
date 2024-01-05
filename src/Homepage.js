import React from "react";
import Navbar from "./Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer.js";
import Shortcut from "./components/Shortcut.js";
import StarPet from "./components/StarPet.js";

import MapDisplay from "./components/MapDisplay.js";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StarPet />
      {/* <Shortcut location="Homepage" /> */}
      <MapDisplay />
      <Footer />
    </div>
  );
}

export default Homepage;

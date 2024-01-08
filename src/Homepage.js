import React from "react";
import Navbar from "./NewNavbar/AliceNavbar.js";
import Banner from "./components/Banner";
import Footer from "./components/Footer.js";
import Shortcut from "./components/Shortcut.js";
import StarPet from "./components/StarPet.js";
//import Catcursor from "./catcursor.js";
//import Dogcursor from "./dogcursor.js";
//import Jojaccursor from "./jojaccursor.js";

import MapDisplay from "./components/MapDisplay.js";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StarPet />
      {/* <Catcursor /> */}
      {/* <Shortcut location="Homepage" /> */}
      <MapDisplay />
      <Footer />
    </div>
  );
}

export default Homepage;

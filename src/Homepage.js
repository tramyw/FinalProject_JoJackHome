import React from "react";
import NewNavbar from "./NewNavbar.js";
import Footer from "./components/Footer.js";
import Shortcut from "./components/Shortcut.js";
import StarPet from "./components/StarPet.js";
import MapButtons from "./components/MapButtons.js";
import AdoptionCalendar from "./components/Calendar.js";
import MapDisplay from "./components/MapDisplay.js";

function Homepage() {
  return (
    <div>
      <NewNavbar />
      <StarPet />
      <Shortcut />
      <AdoptionCalendar />
      <MapButtons />
      <MapDisplay />
      <Footer />
    </div>
  );
}

export default Homepage;

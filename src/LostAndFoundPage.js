import React from "react";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import MapDisplay from "./components/MapDisplay";
import MapButtons from "./components/MapButtons";

const LostAndFound = () => {
  return (
    <div>
      <Navbar />
      <MapButtons />
      <MapDisplay />
      <Footer />
    </div>
  );
};
export default LostAndFound;

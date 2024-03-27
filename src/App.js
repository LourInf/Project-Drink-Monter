import React from "react";
import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { NavigBar } from "./components/NavigBar/NavigBar";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Intro } from "./components/Intro/Intro";
import { Offer } from "./components/Offer/Offer";

function App() {
  return (
    <div className="App">
      <NavigBar />
      <Intro />
      <AboutUs />
      <Offer />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

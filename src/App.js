import React from "react";
import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { NavigBar } from "./components/NavigBar/NavigBar";
import { FindUs } from "./components/FindUs/FindUs";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <NavigBar />
      <Intro />
      <Header />
      <AboutUs />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;

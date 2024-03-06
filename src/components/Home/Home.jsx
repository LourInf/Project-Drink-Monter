import React from "react";
import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";
import { Gallery } from "../Gallery/Gallery";
import { AboutUs } from "../AboutUs/AboutUs";

export const Home = () => {
  return (
    <div>
      <Intro />
      <Header />
      <AboutUs />
      <Gallery />
    </div>
  );
};

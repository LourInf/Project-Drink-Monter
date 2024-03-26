import React from "react";
import "./AboutUs.css";
import profile from "../../assets/profile-pic.jpg";

export const AboutUs = () => {
  return (
    <div className="about-container d-flex ">
      <div className="row ">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="about-us-title">
            Ekipa, która Spełnia Twoje Oczekiwania
          </h1>
          <p className="about-us-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center img-border">
          <img
            src={profile}
            alt="bartenders"
            className="img-profile img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

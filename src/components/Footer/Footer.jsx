import React from "react";
import logo from "../../assets/logo1.png";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto text-center p-3">
      <img src={logo} alt="logo" width={75} className="mb-2" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        © {currentYear} Copyright:{" "}
        <a href="https://github.com/LourInf" className="footer-link">
          Lourdes Infante
        </a>
      </div>
    </footer>
  );
};

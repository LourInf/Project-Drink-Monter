import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo1.png";
import "./NavigBar.css";

export const NavigBar = () => {
  return (
    <Navbar expand className="nav-container shadow p-3">
      <Container className="justify-content-center ">
        <Navbar.Brand href="/" className="position-absolute start-0">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-flex justify-content-start align-items-center ms-3"
            alt="Drink Monter logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link
              href="#aboutUs"
              className="nav-item"
              style={{
                color: "#f7f7f7",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "20px",
              }}
            >
              <span>O nas</span>
            </Nav.Link>
            <Nav.Link
              href="#offer"
              className="nav-item"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                color: "#f7f7f7",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "20px",
              }}
            >
              <span>Oferta</span>
            </Nav.Link>
            <Nav.Link
              href="#gallery"
              className="nav-item"
              style={{
                color: "#f7f7f7",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "20px",
              }}
            >
              <span>Galeria</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse className="position-absolute end-0 me-4">
        <a className="cta-button navibar" href="#contactUs" role="button">
          Skontaktuj się z nami
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

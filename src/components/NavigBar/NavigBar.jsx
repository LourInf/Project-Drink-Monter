import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo1.png";
import "./NavigBar.css";

export const NavigBar = () => {
  return (
    <Navbar expand="lg" className="nav-container shadow p-3">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link
              href="#home"
              className="nav-item"
              style={{
                color: "#f7f7f7",
                fontWeight: "500",
              }}
            >
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              href="#aboutUs"
              className="nav-item"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                color: "#f7f7f7",
                fontWeight: "500",
              }}
            >
              <span>O nas</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-item"
              style={{
                color: "#f7f7f7",
                fontWeight: "500",
              }}
            >
              <span>Oferta</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse className="position-absolute end-0 me-4">
        <button className="cta-button navibar">Skontaktuj się z nami</button>
      </Navbar.Collapse>
    </Navbar>
  );
};

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import "./NavigBar.css";

export const NavigBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container className="justify-content-center">
        <Navbar.Brand href="/" className="position-absolute start-0">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-flex justify-content-start align-items-center ms-3"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home" className="nav-item">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link
              href="#aboutUs"
              className="nav-item"
              style={{ marginLeft: "30px", marginRight: "30px" }}
            >
              <span>About Us</span>
            </Nav.Link>
            <Nav.Link href="#findUs" className="nav-item">
              <span>Offer</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

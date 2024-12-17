import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Navbar.css";
import logo from "../../assets/images/logo.png"; 

const CustomNavbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false); 
  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded); 
  };
  return (
    <Navbar
      expand="md"
      class="navbar"
      variant="dark"
      className="py-3"
      expanded={isNavExpanded}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo} 
            alt="Company Logo"
            width="150" 
            height="auto" 
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle} 
        >
          {isNavExpanded ? (
            <FaTimes color="white" size={24} />
          ) : (
            <FaBars color="white" size={24} />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#services"
              className="text-white d-block d-sm-none"
              onClick={() => setIsNavExpanded(false)}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="text-white"
              onClick={() => setIsNavExpanded(false)}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="text-white"
              onClick={() => setIsNavExpanded(false)}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-white"
              onClick={() => setIsNavExpanded(false)}
            >
              CONTACT US
            </Nav.Link>
            <Nav.Link
              href="#careers"
              className="text-white"
              onClick={() => setIsNavExpanded(false)}
            >
              CAREERS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
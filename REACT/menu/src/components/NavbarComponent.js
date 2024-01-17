import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingBasket } from "react-icons/fa";

const NavbarComponent = () => {
  const navbarStyle = {
    backgroundColor: "#643A71",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navTabsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const navLinkStyle = {
    color: "#8B5FBF",
    textDecoration: "none",
  };

  const containerStyle = {
    display: "flex", 
    alignItems: "center", 
  };

  const basketIconStyle = {
    color: "white", 
    fontSize: "30px",
    cursor: "pointer",
    position: "fixed",
    right: 55,
    
  };

  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container style={containerStyle}>
          <Navbar.Brand as={Link} to="/" style={{ color: "white", textDecoration: "none" }}>
            Food Menu
          </Navbar.Brand>
          <Link  style={basketIconStyle} to="/cart">
            <FaShoppingBasket />
          </Link>
        </Container>
      </Navbar>
      <Nav variant="tabs" defaultActiveKey="/breakfast" style={navTabsStyle}>
        <Nav.Item>
          <Nav.Link as={Link} to="/breakfast" style={navLinkStyle} className="nav-link-custom">
            Breakfast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/lunch" style={navLinkStyle} className="nav-link-custom">
            Lunch
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/dinner" style={navLinkStyle} className="nav-link-custom">
            Dinner
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavbarComponent;

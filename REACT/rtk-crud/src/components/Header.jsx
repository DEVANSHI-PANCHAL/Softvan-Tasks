import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>CRUD with Redux Toolkit</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarBar() {
  return (
    <div className="navbarBar mb-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NoteBook app</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link style={styles} to="/">
                <Nav>Home - Notes</Nav>
              </Link>
              <Link style={styles} to="/addnote">
                <Nav>New note</Nav>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBar;

const styles = {
  textDecoration: "none",
  marginTop: "1rem",
};

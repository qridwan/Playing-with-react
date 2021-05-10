import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="" expand="lg">
  <Navbar.Brand href="#home">MyChallenge</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav className="">
      <Nav.Link href="#home">Product</Nav.Link>
      <Nav.Link href="#download">Download</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigation;
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className="py-4" bg="" expand="lg">
  <Navbar.Brand className="fw-bolder" href="#home">MyChallenge</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
    <Nav className="fw-bold">
      <Nav.Link className=" nav-text" href="#home">Product</Nav.Link>
      <Nav.Link className=" nav-text" href="#download">Download</Nav.Link>
      <Nav.Link className=" nav-text" href="#link">Pricing</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigation;
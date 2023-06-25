import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'bootstrap';

const CustomNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/contact">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default CustomNavbar;
  
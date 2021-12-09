import React, { Fragment } from 'react'
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap'

function CustomNavbar() {
    return (
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#pricing">Resume</Nav.Link>
      
        </Nav>
      
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default CustomNavbar

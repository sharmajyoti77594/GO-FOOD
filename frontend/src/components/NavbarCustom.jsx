import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router";

function NavbarCustom () {
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <NavLink to='/' className={'navbar-brand fw-bold fst-italic'} 
                        style={({isActive}) => ({ color : 'white'})}>GoFood</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarCustom

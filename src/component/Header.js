import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineUser } from "react-icons/ai";


function Header() {
  return (
    <>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="/">SLD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>

            <Nav className="text-end">
              <Nav.Link href="Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="Signup"><AiOutlineUser style={{ fontSize: "20px" }} /></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
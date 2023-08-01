import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return( 
        <>
            <Navbar expand="lg" fixed="top" className="bg-dark text-white">
                
            <Container>
                <Navbar.Brand href="#home" className="text-white">NewsBuzz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white bg-white"/>
                <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                <Nav className="me-auto">
                    <Nav.Link href="/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/business" className="text-white">Business</Nav.Link>
                    <Nav.Link href="/entertainment" className="text-white">Entertainment</Nav.Link>
                    <Nav.Link href="/science" className="text-white">Science</Nav.Link>
                    <Nav.Link href="/sports" className="text-white">Sports</Nav.Link>
                    <Nav.Link href="/technology" className="text-white">Technology</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
  );
}

export default NavBar
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faPaw} />
                Luna Pets</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto navs">
                    <Link className="naf active" to="/" >Home</Link>
                    <Link className="naf" to="about">About</Link>
                    <Link className="naf" to="gallery">Gallery</Link>
                    <Link className="naf" eventKey={2} to="blog">Blog</Link>
                    <Link className="naf" to="blog">Contact</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar
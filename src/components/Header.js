import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {Link, Outlet} from 'react-router-dom'



const Header = (props) => {

  return(
    <>
    <Navbar id="header" expand="lg">
      <Container>
        <Navbar.Brand>Brendan Kersey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="/" as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="#about" as={Link} to="/about">About Me</Nav.Link>
          <Nav.Link href="#projects" as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link href="#contact" as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link href="#resume" as={Link} to="/resume">Resume</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
    <Outlet/>
  </section>
  </>
  )
}

export default Header;
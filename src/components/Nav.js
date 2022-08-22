import Nav from "react-bootstrap/Nav"
import {Link} from 'react-router-dom'


const Navigation = (props) => {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/" as={Link} to="/">Home</Nav.Link>
      <Nav.Link href="#about" as={Link} to="/about">About Me</Nav.Link>
      <Nav.Link href="#projects" as={Link} to="/projects">Projects</Nav.Link>
      <Nav.Link href="#contact" as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link href="#resume" as={Link} to="/resume">Resume</Nav.Link>
    </Nav>
  )
}

export default Navigation;
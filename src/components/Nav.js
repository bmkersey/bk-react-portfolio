import Nav from "react-bootstrap/Nav"


const Navigation = (props) => {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">About Me</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav>
  )
}

export default Navigation;
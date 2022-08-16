import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Navigation from "./Nav"

const Header = (props) => {

  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Brendan Kersey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;
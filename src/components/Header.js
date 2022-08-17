import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Navigation from "./Nav"

const Header = (props) => {

  return(
    <Navbar id="header" expand="lg">
      <Container>
        <Navbar.Brand>Brendan Kersey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;